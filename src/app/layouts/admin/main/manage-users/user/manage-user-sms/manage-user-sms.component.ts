import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-manage-user-sms',
	templateUrl: './manage-user-sms.component.html',
	styleUrls: ['./manage-user-sms.component.scss']
})
export class ManageUserSmsComponent implements OnInit {
	user: User = {};
	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.route.data.subscribe((data: { user: User }) => {
			if (data.user) {
				this.user = data.user;
			}
		});
	}
}
