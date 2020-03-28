import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { HttpClient } from '@angular/common/http';
import { AdminService } from 'src/app/layouts/admin/admin-shared/administration/admin.service';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ManageUsersService {
	constructor(private http: HttpClient) {}

	public getAllUsers(): Observable<User[]> {
		return this.http.get(`${AdminService.adminUrl}/users`).pipe(
			map((data: { users: User[] }) => {
				if (data.users) {
					return data.users;
				}
				return [];
			})
		);
	}
	/**
	 * getUser
	 */
	public getUser(id: string, url: string = ''): Observable<User | never> {
		return this.http.get(`${AdminService.adminUrl}/user/${id}${url}`).pipe(
			map((data: { user: User }) => {
				if (data.user) {
					return data.user;
				}
			})
		);
	}
}
