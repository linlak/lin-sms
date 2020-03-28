import { Component, OnInit } from '@angular/core';
import { MyAppServiceService } from '../my-app-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-app-statatistics',
	templateUrl: './app-statatistics.component.html',
	styleUrls: ['./app-statatistics.component.scss']
})
export class AppStatatisticsComponent implements OnInit {
	myapp: any = {};
	constructor(
		private myAppService: MyAppServiceService,
		private route: ActivatedRoute
	) {}

	ngOnInit() {
		this.route.data.subscribe((data: { myapp: any }) => {
			this.myapp = data.myapp;
		});
	}

	click(id: string | number) {}

	delItem(id: any) {}
}
