import { Injectable, Inject } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';
import { AccessToken } from '../models/tokens';
import { HttpClient } from '@angular/common/http';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
	providedIn: 'root'
})
export class TokenService {
	private token: AccessToken = null;
	private tokenKey = 'accessToken';
	private tokenListener: BehaviorSubject<boolean> = new BehaviorSubject<
		boolean
	>(false);
	constructor(
		private http: HttpClient,
		@Inject(LOCAL_STORAGE) private storage: StorageService
	) {
		const savedToken = storage.get(this.tokenKey);
		if (savedToken) {
			this.token = JSON.parse(savedToken);
			this.tokenListener.next(this.hasToken());
		}
	}

	hasToken(): boolean {
		return this.token !== null && this.token.accessToken !== null;
	}
	getToken(): AccessToken {
		return this.token;
	}

	setToken(token: AccessToken): void {
		this.storage.set(this.tokenKey, JSON.stringify(token));
		this.token = token;
		this.tokenListener.next(this.hasToken());
	}

	remove(): void {
		if (this.storage.has(this.tokenKey)) {
			this.storage.remove(this.tokenKey);
		}
		this.token = null;
		this.tokenListener.next(this.hasToken());
	}

	listen(): Observable<boolean> {
		return this.tokenListener.asObservable().pipe(share());
	}
}
