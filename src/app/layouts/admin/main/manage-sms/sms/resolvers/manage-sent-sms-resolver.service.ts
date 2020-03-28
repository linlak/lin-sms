import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ManageSmsService } from '../../manage-sms.service';

@Injectable({
	providedIn: 'root'
})
export class ManageSentSmsResolverService implements Resolve<any> {
	constructor(private smsService: ManageSmsService) {}
	resolve(route: ActivatedRouteSnapshot): Observable<any> {
		return this.smsService.getSmsList();
	}
}
