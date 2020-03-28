import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-manage-sent-sms',
	templateUrl: './manage-sent-sms.component.html',
	styleUrls: ['./manage-sent-sms.component.scss']
})
export class ManageSentSmsComponent implements OnInit {
	smsList: any[] = [];
	curSMS: any = null;
	subTitle = '';
	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.route.data.subscribe(
			(data: { sms: { sms: any[]; sub_title: string } }) => {
				if (data.sms.sub_title) {
					this.subTitle = data.sms.sub_title;
				}
				this.smsList = data.sms.sms;
			}
		);
	}
	showTemp(sms: any): boolean {
		return true;
	}
}
