import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-sms-payment',
	templateUrl: './sms-payment.component.html',
	styleUrls: ['./sms-payment.component.scss']
})
export class SmsPaymentComponent implements OnInit {
	payments: any[] = [];
	constructor() {}

	ngOnInit() {}
}
