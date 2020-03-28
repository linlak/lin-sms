import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-manage-users-list',
	templateUrl: './manage-users-list.component.html',
	styleUrls: ['./manage-users-list.component.css']
})
export class ManageUsersListComponent implements OnInit {
	users: User[] = [];
	constructor(
			private route: ActivatedRoute
		) {}

	ngOnInit() {
		this.route.data.subscribe(
			(data: {
				users: User[]
			}) => {
				this.users = data.users;
			}
		)
	}
}
