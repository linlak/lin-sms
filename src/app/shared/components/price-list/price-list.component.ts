import { Component, OnInit, Input } from '@angular/core';
import { Price } from '../../models/prices';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit {
  @Input() smsPriceList: Price[];
  constructor() { }

  ngOnInit() {
  }

}
