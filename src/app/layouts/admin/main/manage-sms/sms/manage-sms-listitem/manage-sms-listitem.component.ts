import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-manage-sms-listitem',
	templateUrl: './manage-sms-listitem.component.html',
	styleUrls: ['./manage-sms-listitem.component.scss']
})
export class ManageSmsListitemComponent implements OnInit {
	@Input() sms: any = {};
	constructor() {}

	ngOnInit(): void {}
}
