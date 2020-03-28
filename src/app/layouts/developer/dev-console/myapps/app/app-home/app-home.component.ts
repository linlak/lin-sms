import { Component, OnInit } from '@angular/core';
import { MyAppServiceService } from '../my-app-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-app-home',
	templateUrl: './app-home.component.html',
	styleUrls: ['./app-home.component.scss']
})
export class AppHomeComponent implements OnInit {
	myapp: any = {};
	showClient: boolean;
	showSecret: boolean;
	isSubmiting: boolean;
	constructor(
		private myAppService: MyAppServiceService,
		private route: ActivatedRoute
	) {}

	ngOnInit() {
		this.route.data.subscribe((data: { myapp: any }) => {
			this.myapp = data.myapp;
		});
	}

	showClientId() {
		this.showClient = !this.showClient;
	}
	showSecretKey() {
		this.showSecret = !this.showSecret;
	}

	clipboard(key: string) {
		console.log(key);
	}
	editConf(wht: string) {
		this.isSubmiting = true;
		this.myAppService.editApp({ id: this.myapp.id }, `/${wht}`).subscribe(
			(data: { web_app: any }) => {
				if (data.web_app) {
					this.myapp = data.web_app;
				}
			},
			err => (this.isSubmiting = false),
			() => (this.isSubmiting = false)
		);
	}
	refClient() {
		this.editConf('client-id');
	}
	refSecret() {
		this.editConf('secret');
	}
}
