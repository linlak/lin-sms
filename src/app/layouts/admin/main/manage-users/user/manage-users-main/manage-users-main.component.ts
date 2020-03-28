import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminService } from 'src/app/layouts/admin/admin-shared/administration/admin.service';
import { AdminNav } from 'src/app/layouts/admin/adminnavmodel';

@Component({
	selector: 'app-manage-users-main',
	templateUrl: './manage-users-main.component.html',
	styleUrls: ['./manage-users-main.component.scss']
})
export class ManageUsersMainComponent implements OnInit, OnDestroy {
	private userNav: AdminNav[] = [
		{
			title: 'All',
			uri: ['./users']
		},
		{
			title: 'Active',
			uri: ['./users/active']
		},
		{
			title: 'Verified',
			uri: ['./users/verified']
		},
		{
			title: 'Pending',
			uri: ['./users/pending']
		},
		{
			title: 'Suspended',
			uri: ['./users/suspended']
		},
		{
			title: 'Developers',
			uri: ['./users/developers']
		},
		{
			title: 'Administrators',
			uri: ['./users/administrators']
		}
	];
	constructor(private adminService: AdminService) {}

	ngOnInit(): void {
		this.adminService.changeNav(this.userNav);
	}
	ngOnDestroy(): void {
		this.adminService.resetNav();
	}
}
