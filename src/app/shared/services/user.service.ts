import { Injectable, NgZone, Inject } from '@angular/core';
import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { share, pluck, map } from 'rxjs/operators';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	private userKey = 'currentUser';
	private user: BehaviorSubject<User>;
	private sse: EventSource;
	private url = '/api/sesscheck?token='; // 'http://localhost/api/sse?token=';
	private running = false;
	private sseSub: Subscription;

	constructor(
		@Inject(LOCAL_STORAGE) private storage: StorageService,
		private zone: NgZone,
		private http: HttpClient,
		private tokenService: TokenService
	) {
		let savedUser: User = {};

		if (storage.has(this.userKey)) {
			savedUser = Object.assign(
				savedUser,
				JSON.parse(storage.get(this.userKey))
			);
		}
		this.user = new BehaviorSubject<User>(
			savedUser && savedUser.isUser ? savedUser : null
		);
		setTimeout(() => {
			tokenService.listen().subscribe(r => {
				if (r) {
					this.startChecker();
				} else {
					this.stopCheck();
				}
			});
		}, 100);
	}

	listen(): Observable<User> {
		return this.user.asObservable().pipe(share());
	}

	startChecker(): void {
		this.sseSub = this.sessionChecker().subscribe(
			(next: string) => {
				const data = JSON.parse(next);
				if (data.user) {
					const me = data.user as User;
					if (me.isUser && this.tokenService.hasToken()) {
						this.storage.set(this.userKey, JSON.stringify(me));
						this.user.next(me);
					} else {
						this.storage.remove(this.userKey);
						this.user.next(null);
						this.stopCheck();
					}
				}
			},
			error => console.log
		);
	}
	stopCheck(): void {
		console.log('stopCheck');
		if (this.sse && this.running) {
			this.sse.close();
			this.running = false;
			this.sseSub.unsubscribe();
		}

		if (!this.tokenService.hasToken()) {
			if (this.storage.has(this.userKey)) {
				this.storage.remove(this.userKey);
			}
			this.user.next(null);
		}
	}
	sessionChecker(): Observable<any> {
		return new Observable(observer => {
			if (!this.running && this.tokenService.hasToken()) {
				const token =
					this.tokenService.getToken() &&
					this.tokenService.getToken().accessToken
						? this.tokenService.getToken().accessToken
						: '';
				this.sse = new EventSource(`${this.url}${token}`);
				this.sse.addEventListener('open', ev => {
					this.running = true;
				});
				this.sse.addEventListener('loggedon', ev => {
					this.zone.run(() => {
						observer.next(ev);
					});
				});
				this.sse.addEventListener('message', ev => {
					this.zone.run(() => {
						observer.next(ev);
					});
				});
				// this.sse
				this.sse.addEventListener('error', ev => {
					if (ev.eventPhase === this.sse.CLOSED) {
						this.running = false;
						this.sse = undefined;
					}
					this.zone.run(() => {
						observer.error(ev);
					});
				});
			}
			return () => {
				if (this.sse && this.running) {
					console.log('sse completed');
					this.sse.close();
				}
			};
		}).pipe(pluck('data'), share());
	}

	public resetPassword(pass: User): Observable<any> {
		return this.editUser('edit-password', pass);
	}

	public updateEmail(accUser: User): Observable<any> {
		return this.editUser('edit-email', accUser);
	}
	public updateProfile(accUser: User): Observable<any> {
		return this.editUser('edit-profile', accUser);
	}

	public editUser(wht: string, accUser: User): Observable<any> {
		const req = this.http.post(`api/profile/${wht}`, accUser);
		return req;
	}
	public getEmailData(): Observable<User> {
		return this.getUserData('/email-edit-data');
	}
	public getUserData(wht: string = ''): Observable<User> {
		const req = this.http
			.get(`api/profile${wht}`)
			.pipe(map((data: { user: User }) => data.user));
		return req;
	}
	public getProfile(): Observable<User> {
		return this.getUserData();
	}

	public getProfileEdit(): Observable<User> {
		return this.getUserData('/edit-data');
	}
}
