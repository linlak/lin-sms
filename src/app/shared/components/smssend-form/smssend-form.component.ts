import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';
import { SmsCal, SmsMessage } from '../../models/sms';

@Component({
	selector: 'app-smssend-form',
	templateUrl: './smssend-form.component.html',
	styleUrls: ['./smssend-form.component.scss']
})
export class SmssendFormComponent implements OnInit {
	@Input() me: User = {};
	msg: SmsMessage = {
		sender_id: '',
		recipients: [],
		message: ''
	};
	isSubmiting: boolean;
	cal: SmsCal = {};
	errs: any = {};
	constructor() {}

	ngOnInit() {}

	buyMore() {}
	sendSms() {}
	openUploader() {}
	onPhone() {}
}
