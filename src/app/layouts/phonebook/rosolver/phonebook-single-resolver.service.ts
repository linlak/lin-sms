import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { SmsService } from 'src/app/shared/services/sms.service';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PhonebookSingleResolverService implements Resolve<any> {
	constructor(private smsService: SmsService) {}
	resolve(route: ActivatedRouteSnapshot): Observable<any> {
		return this.smsService.getMyPhonebookSingle(route.paramMap.get('id'));
	}
}
