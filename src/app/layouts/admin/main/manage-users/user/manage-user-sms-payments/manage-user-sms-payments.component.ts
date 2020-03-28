import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/models/user';

@Component({
	selector: 'app-manage-user-sms-payments',
	templateUrl: './manage-user-sms-payments.component.html',
	styleUrls: ['./manage-user-sms-payments.component.scss']
})
export class ManageUserSmsPaymentsComponent implements OnInit {
	user: User = {};
	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.route.data.subscribe((data: { user: User }) => {
			this.user = data.user;
		});
	}
}
