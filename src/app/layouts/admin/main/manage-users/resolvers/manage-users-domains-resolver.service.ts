import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { ManageUsersService } from '../manage-users.service';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class ManageUsersDomainsResolverService implements Resolve<User> {
	constructor(private userService: ManageUsersService) {}

	resolve(route: ActivatedRouteSnapshot): Observable<User> {
		return this.userService.getUser(route.paramMap.get('id'), `/domains`);
	}
}
