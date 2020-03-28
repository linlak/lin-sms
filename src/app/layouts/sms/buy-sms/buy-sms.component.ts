import { Component, OnInit } from '@angular/core';
import { Price } from 'src/app/shared/models/prices';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buy-sms',
  templateUrl: './buy-sms.component.html',
  styleUrls: ['./buy-sms.component.scss']
})
export class BuySmsComponent implements OnInit {
  smsPriceList: Price[] = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: { prices: Price[] }) => {
      this.smsPriceList = data.prices;
    });
  }

}
