import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { SmsService } from 'src/app/shared/services/sms.service';
import { Price } from 'src/app/shared/models/prices';

@Injectable({
  providedIn: 'root'
})
export class PriceListResolverService implements Resolve<Price[]> {

  constructor(private sms: SmsService) { }
  resolve(): Observable<Price[]> {
    return this.sms.getPrices();
  }
}
