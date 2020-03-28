import { Injectable } from '@angular/core';
import { SmsService } from '../../admin/services';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class SmsSentResolverService implements Resolve<any[]> {
	constructor(private smsService: SmsService) {}

	resolve(): Observable<any[]> {
		return this.smsService.getSentSMS();
	}
}
