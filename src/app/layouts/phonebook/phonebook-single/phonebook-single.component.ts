import { Component, OnInit } from '@angular/core';
import { SmsService } from 'src/app/shared/services/sms.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-phonebook-single',
	templateUrl: './phonebook-single.component.html',
	styleUrls: ['./phonebook-single.component.scss']
})
export class PhonebookSingleComponent implements OnInit {
	group: any = {};
	isSubmiting: boolean;
	constructor(private smsService: SmsService, private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.data.subscribe(
			(data: { group: any }) => (this.group = data.group)
		);
	}
	emptyResp() {
		this.group.contacts = [];
	}
	testResp() {}
	savedata() {}
	openUploader() {}
}
