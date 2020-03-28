import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { ManageUsersService } from '../manage-users.service';

@Injectable({
	providedIn: 'root'
})
export class ManageUserSmspayResolverService implements Resolve<User> {
	constructor(private userService: ManageUsersService) {}

	resolve(route: ActivatedRouteSnapshot): Observable<User> {
		return this.userService.getUser(route.paramMap.get('id'), `/sms-pay`);
	}
}
