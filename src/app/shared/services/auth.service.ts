import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { NavToggleService } from './nav-toggle.service';
import { HttpClient } from '@angular/common/http';
import { VCode } from '../models/v-code';
import { UserService } from './user.service';
import { share } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private isLoggendIn = false;
	private loginChange: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
		false
	);
	private user: BehaviorSubject<User> = new BehaviorSubject<User>(null);
	private loggedInUser: User = null;
	private recUser: User = {};

	constructor(
		private nav: NavToggleService,
		private router: Router,
		private http: HttpClient,
		private userService: UserService
	) {
		this.user.subscribe(r => {
			this.loggedInUser = r;
			this.checkLogin();
		});
		this.userService.listen().subscribe(me => {
			this.user.next(me);
		});
	}
	public admin(): boolean {
		return (
			this.loggedInUser &&
			(this.loggedInUser.user_role === 'admin' ||
				this.loggedInUser.user_role === 'super')
		);
	}
	public logout(): void {
		this.nav.clearVisible();

		this.http.post('api/logout', {}).subscribe(
			r => console.log,
			e => console.log,
			() => {
				console.log('logout completed');
			}
		);
	}

	private checkLogin(): void {
		this.isLoggendIn = this.loggedInUser !== null;
		this.loginChange.next(this.isLoggendIn);
	}
	public loginListener(): Observable<boolean> {
		return this.loginChange.asObservable().pipe(share());
	}
	public userListener(): Observable<User> {
		return this.user.asObservable().pipe(share());
	}
	public getLoggedUser(): User {
		return this.loggedInUser;
	}
	public isAuthenticated(): Observable<boolean> {
		return new Observable(observer => {
			if (!this.isLoggendIn) {
				this.router.navigateByUrl('/login');
			}

			observer.next(this.isLoggendIn);
			return () => {};
		});
	}

	public notAuthenticated(): Observable<boolean> {
		return new Observable(observer => {
			if (this.isLoggendIn) {
				this.router.navigateByUrl('/account');
			}
			observer.next(!this.isLoggendIn);
			return () => {};
		});
	}
	public hasSMS(): Observable<boolean> {
		return this.isAuthenticated();
	}

	public isAdmin(): Observable<boolean> {
		return new Observable(observer => {
			const subscription = this.isAuthenticated().subscribe(r => {
				if (r) {
					// check if user is admin
					if (this.loggedInUser.user_role === 'user') {
						this.router.navigateByUrl('/account');
					}
					observer.next(
						this.loggedInUser.user_role === 'admin' ||
							this.loggedInUser.user_role === 'super'
					);
				} else {
					observer.next(r);
				}
			});
			return () => {
				subscription.unsubscribe();
			};
		});
	}

	public register(regUser: User): Observable<any> {
		const req = this.http.post('/api/register', regUser);
		return req;
	}

	public login(authUser: User): Observable<any> {
		const req = this.http.post('/api/login', authUser);
		return req;
	}
	public recoverPasswordConfirm(pass: User): Observable<any> {
		const rec: User = Object.assign(this.recUser);
		rec.password = pass.password;
		rec.password_confirmation = pass.password_confirmation;
		const req = this.http.post('api/password/reset', rec);
		return req;
	}
	public recoverPassword(pass: User): Observable<any> {
		const req = this.http.post('api/password/reset', pass);
		return req;
	}
	public redirectTo(url: string) {
		this.router.navigateByUrl(`${url}`);
	}

	public goToAccount(): void {
		this.redirectTo('/account');
	}
	public verifyCode(vCode: VCode): Observable<any> {
		const req = this.http.post('api/verification-code ', vCode);
		return req;
	}
}
