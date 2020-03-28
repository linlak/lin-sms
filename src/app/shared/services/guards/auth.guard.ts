import { Injectable } from '@angular/core';
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree,
	CanActivateChild
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
	constructor(private auth: AuthService) {}
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		return this.auth.isAuthenticated();
	}

	canActivateChild(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		return this.canActivate(route, state);
	}
}
