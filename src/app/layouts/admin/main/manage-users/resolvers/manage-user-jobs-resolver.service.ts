import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { Observable } from 'rxjs';
import { ManageUsersService } from '../manage-users.service';

@Injectable({
	providedIn: 'root'
})
export class ManageUserJobsResolverService implements Resolve<User> {
	constructor(private userService: ManageUsersService) {}

	resolve(route: ActivatedRouteSnapshot): Observable<User> {
		return this.userService.getUser(route.paramMap.get('id'), `/jobs`);
	}
}
