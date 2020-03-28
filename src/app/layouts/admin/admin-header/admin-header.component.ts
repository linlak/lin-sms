import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/layouts/admin/admin-shared/administration/admin.service';

@Component({
	selector: 'app-admin-header',
	templateUrl: './admin-header.component.html',
	styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
	subHeader: string;
	constructor(private adminService: AdminService) {}

	ngOnInit() {}
}
