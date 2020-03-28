import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ManageUsersService } from '../manage-users.service';
import { User } from 'src/app/shared/models/user';

@Injectable({
	providedIn: 'root'
})
export class ManageUserNewsResolverService implements Resolve<User> {
	constructor(private userService: ManageUsersService) {}

	resolve(route: ActivatedRouteSnapshot): Observable<User> {
		return this.userService.getUser(route.paramMap.get('id'), `/news`);
	}
}
