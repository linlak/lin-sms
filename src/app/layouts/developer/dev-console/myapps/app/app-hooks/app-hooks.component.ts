import { Component, OnInit } from '@angular/core';
import { MyAppServiceService } from '../my-app-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-app-hooks',
	templateUrl: './app-hooks.component.html',
	styleUrls: ['./app-hooks.component.scss']
})
export class AppHooksComponent implements OnInit {
	myapp: any = {};
	domains: any[] = [];
	mHost: any = {
		app_host: ''
	};
	isSubmiting: boolean;
	formVisible: boolean;
	errs: any = {};
	constructor(
		private myAppService: MyAppServiceService,
		private route: ActivatedRoute
	) {}

	ngOnInit() {
		this.route.data.subscribe((data: { myapp: any }) => {
			this.myapp = data.myapp;
		});
	}

	showForm(wht: boolean = false) {
		if (wht) {
			this.myAppService.getHookDomains().subscribe(data => {
				this.domains = data;
			});
			this.mHost = {
				app_host: this.myapp.has_domain ? this.myapp.app_domain.id : ''
			};
			this.formVisible = wht;
		} else {
			this.formVisible = wht;
			this.mHost = {};
		}
	}
	editHost() {
		this.showForm(true);
	}
	changeDomain() {
		this.isSubmiting = true;
		this.myAppService
			.editApp(
				{ id: this.myapp.id, app_host: this.mHost.app_host },
				'/hook-domain'
			)
			.subscribe(
				(data: { errs?: any; success_flag: number; web_app?: any }) => {
					this.errs = data.errs || {};
					if (data.success_flag === 1) {
						// refresh page
						this.myapp = data.web_app;
					}
				},
				e => (this.isSubmiting = false),
				() => (this.isSubmiting = false)
			);
	}
}
