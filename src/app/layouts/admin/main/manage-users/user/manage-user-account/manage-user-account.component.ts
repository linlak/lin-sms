import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminNav } from 'src/app/layouts/admin/adminnavmodel';
import { AdminService } from 'src/app/layouts/admin/admin-shared/administration/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-manage-user-account',
	templateUrl: './manage-user-account.component.html',
	styleUrls: ['./manage-user-account.component.scss']
})
export class ManageUserAccountComponent implements OnInit, OnDestroy {
	constructor(
		private adminService: AdminService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.adminService.changeNav(
			this.setNav(this.route.snapshot.paramMap.get('id'))
		);
	}

	private setNav(id: string | number): AdminNav[] {
		const nav: AdminNav[] = [
			{
				title: 'All Users',
				uri: ['./users']
			},

			{
				title: 'Profile',
				uri: ['./users/manage', id]
			},
			{
				title: 'SMS',
				uri: ['./users/manage', id, 'sms']
			},
			{
				title: 'SMS Payments',
				uri: ['./users/manage', id, 'sms-pay']
			},
			{
				title: 'Domains',
				uri: ['./users/manage', id, 'domains']
			},
			{
				title: 'Apps',
				uri: ['./users/manage', id, 'apps']
			},
			{
				title: 'Sessions',
				uri: ['./users/manage', id, 'tokens']
			}
		];
		return nav;
	}
	ngOnDestroy(): void {
		this.adminService.resetNav();
	}
}
