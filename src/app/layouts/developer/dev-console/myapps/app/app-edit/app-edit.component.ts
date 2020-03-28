import { Component, OnInit } from '@angular/core';
import { MyAppServiceService } from '../my-app-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-app-edit',
	templateUrl: './app-edit.component.html',
	styleUrls: ['./app-edit.component.scss']
})
export class AppEditComponent implements OnInit {
	myapp: any = {};
	isSubmiting: boolean;
	errs: any = {};
	constructor(
		private myAppService: MyAppServiceService,
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit() {
		this.route.data.subscribe((data: { myapp: any }) => {
			this.myapp = data.myapp;
		});
	}

	editApp() {
		this.isSubmiting = true;

		this.myAppService
			.editApp(this.myapp)
			.subscribe((data: { err?: any; success_flag: number }) => {
				this.errs = data.err || {};
				if (data.success_flag === 1) {
					// redirect to home
					this.router.navigate(['/developer/console/my-app', this.myapp.id]);
				}
			});
	}
}
