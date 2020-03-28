import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-manage-sent-sms-details',
	templateUrl: './manage-sent-sms-details.component.html',
	styleUrls: ['./manage-sent-sms-details.component.scss']
})
export class ManageSentSmsDetailsComponent implements OnInit {
	@Input() sms: any = {};
	constructor() {}

	ngOnInit(): void {}
}
