import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { ManageUsersService } from '../manage-users.service';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ManageUserTokensResolverService implements Resolve<User> {
	constructor(private userService: ManageUsersService) {}

	resolve(route: ActivatedRouteSnapshot): Observable<User> {
		return this.userService.getUser(route.paramMap.get('id'), `/tokens`);
	}
}
