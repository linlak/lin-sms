import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-manage-users-apps',
	templateUrl: './manage-users-apps.component.html',
	styleUrls: ['./manage-users-apps.component.scss']
})
export class ManageUsersAppsComponent implements OnInit {
	user: User = {};
	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.data.subscribe((data: { user: User }) => {
			if (data.user) {
				this.user = data.user;
			}
		});
	}
}
