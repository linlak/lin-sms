import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { NavToggleService, AppToastService } from './shared/services';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
	showSide = false;
	navOpened = false;
	private toggleListener: Subscription;

	constructor(
		private translate: TranslateService,
		private navService: NavToggleService,
		private toastr: AppToastService
	) {
		translate.setDefaultLang('en');
	}

	@HostListener('window:resize')
	onResize() {
		this.navService.clearVisible();
	}
	ngOnInit() {
		this.toggleListener = this.navService.listen().subscribe(r => {
			this.showSide = r === 'sideNav';
			this.navOpened = this.navService.showOverly();
		});
	}

	ngOnDestroy() {
		this.toggleListener.unsubscribe();
	}
	toggleSide() {
		if (this.showSide) {
			this.navService.toggleNav();
			return;
		}
		this.navService.toggleNav('sideNav');
	}

	clearNav(): void {
		this.navService.clearVisible();
	}
}
