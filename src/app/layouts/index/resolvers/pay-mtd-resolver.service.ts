import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { SmsService } from 'src/app/shared/services/sms.service';

@Injectable({
  providedIn: 'root'
})
export class PayMtdResolverService implements Resolve<any> {

  constructor(private sms: SmsService) { }

  resolve(): Observable<any> {
    return this.sms.getPayMthds();
  }
}
