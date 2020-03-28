import { Component, OnInit } from '@angular/core';
import { Price } from 'src/app/shared/models/prices';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  smsPriceList: Price[] = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: {prices: Price[]}) => {
      this.smsPriceList = data.prices;
    });
  }

}
