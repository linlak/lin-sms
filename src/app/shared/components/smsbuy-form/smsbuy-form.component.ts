import { Component, OnInit } from '@angular/core';
import { InitPay } from '../../models/payments';
import { PriceValue } from '../../models/prices';
import { SmsService } from '../../services/sms.service';

@Component({
  selector: 'app-smsbuy-form',
  templateUrl: './smsbuy-form.component.html',
  styleUrls: ['./smsbuy-form.component.scss']
})
export class SmsbuyFormComponent implements OnInit {
  pay: InitPay = {
    sms_count: ''
  };
  errs: any = {};
  pricepreview = 0;
  smsValues: PriceValue = {};
  isSubmiting: boolean;
  constructor(private smsService: SmsService) { }

  ngOnInit() {
    this.smsService.getPriceValues()
    .subscribe(
      (r: PriceValue) => {
        this.smsValues = r;
      }
    );
  }
  buynow() {}
}
