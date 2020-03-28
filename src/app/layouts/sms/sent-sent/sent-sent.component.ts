import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../../../../app/shared/models/user';
import { UserService } from '../../../../app/shared/services/user.service';
import { SmsService } from '../../admin/services';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-sent-sent',
	templateUrl: './sent-sent.component.html',
	styleUrls: ['./sent-sent.component.scss']
})
export class SentSentComponent implements OnInit, OnDestroy {
	msgs: any[] = [];
	msge: any = null;
	private sub: Subscription;
	user: User = {};
	curIndex: number;
	constructor(
		private userService: UserService,
		private smsService: SmsService,
		private route: ActivatedRoute
	) {}

	ngOnInit() {
		this.sub = this.userService.listen().subscribe(user => (this.user = user));
		this.route.data.subscribe((data: { sms: any[] }) => {
			this.msgs = data.sms;
		});
	}
	loadSMS(id: number | string, index: number) {
		if (this.msge) {
			return;
		}
		this.curIndex = index;
		this.smsService.getSentSMSEnt(id).subscribe(
			data => (this.msge = data),
			err => this.cancelSMS(),
			() => {}
		);
	}
	cancelSMS() {
		this.curIndex = undefined;
		this.msge = null;
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
