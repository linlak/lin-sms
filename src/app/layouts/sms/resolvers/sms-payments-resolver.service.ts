import { Injectable } from '@angular/core';
import { SmsService } from 'src/app/shared/services/sms.service';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class SmsPaymentsResolverService implements Resolve<any[]> {
	constructor(private smsService: SmsService) {}
	resolve(): Observable<any[]> {
		return this.smsService.getMyPayments();
	}
}
