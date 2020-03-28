import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminNav } from '../../adminnavmodel';
import { NavToggleService } from '../../services';
import { Subscription } from 'rxjs';
import { AdminService } from '../administration/admin.service';

@Component({
	selector: 'app-admin-headernav',
	templateUrl: './admin-headernav.component.html',
	styleUrls: ['./admin-headernav.component.scss']
})
export class AdminHeadernavComponent implements OnInit, OnDestroy {
	navLinks: AdminNav[] = [];
	isNavCollapsed: boolean;
	private sub: Subscription;
	private navSub: Subscription;
	constructor(
		private navService: NavToggleService,
		private adminService: AdminService
	) {}

	ngOnInit(): void {
		this.navLinks = this.adminService.getDefaultNav();
		this.sub = this.navService
			.listen()
			.subscribe(r => (this.isNavCollapsed = r === 'adminHeaderNav'));

		this.navSub = this.adminService.navChangeListener().subscribe(r => {
			if (r) {
				this.navLinks = r;
			} else {
				this.navLinks = this.adminService.getDefaultNav();
			}
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
	toggleCollapse() {
		if (this.isNavCollapsed) {
			this.navService.clearVisible();
			return;
		}
		this.navService.toggleNav('adminHeaderNav', false);
	}
}
