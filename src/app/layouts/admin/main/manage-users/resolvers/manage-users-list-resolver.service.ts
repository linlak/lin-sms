import { Injectable } from '@angular/core';
import { ManageUsersService } from '../manage-users.service';
import { Resolve } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ManageUsersListResolverService implements Resolve<User[]> {
	constructor(private userService: ManageUsersService) {}
	resolve(): Observable<User[]> {
		return this.userService.getAllUsers();
	}
}
