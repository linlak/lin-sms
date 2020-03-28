import { Component, OnInit } from '@angular/core';
import { SmsService } from 'src/app/shared/services/sms.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-sms-payments',
	templateUrl: './sms-payments.component.html',
	styleUrls: ['./sms-payments.component.scss']
})
export class SmsPaymentsComponent implements OnInit {
	payments: any[] = [];
	curPay: any = {};
	walletpay = 0;
	errs: any = {};
	pNow: any = {};
	curIndex: number;
	curIndexCb: number;
	constructor(private smsService: SmsService, private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.data.subscribe(
			(data: { payments: any[] }) => (this.payments = data.payments)
		);
	}

	showPayStatus(): boolean {
		return true;
	}
	cancelDet() {
		this.curIndexCb = undefined;
		this.curIndex = undefined;
		this.curPay = {};
	}
	showPay(pay: any, index: number) {
		if (this.curPay.channel_id) {
			if (this.curIndex === index) {
				return;
			}
			this.curIndexCb = index;
		} else {
			this.curIndexCb = index;
		}
		this.fetPay(pay);
	}
	fetPay(pay: any) {
		this.smsService.getMyPayment(pay.p_id).subscribe(
			data => {
				this.curPay = data;
				this.curIndex = this.curIndexCb;
				if (this.curPay.status === 0 && this.curPay.sms_price > 0) {
					this.walletpay = Math.floor(
						(this.curPay.sms_price * 3) / 100 + this.curPay.sms_price
					);
				}
			},
			e => {
				this.cancelDet();
			}
		);
	}
	showTemp(pay: any, index: number): boolean {
		return !(this.curPay && this.curIndex === index);
	}
}
