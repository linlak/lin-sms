import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { SmsService } from 'src/app/shared/services/sms.service';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PhonebookResolverService implements Resolve<any[]> {
	constructor(private smsService: SmsService) {}

	resolve(): Observable<any[]> {
		return this.smsService.getMyPhonebooks();
	}
}
