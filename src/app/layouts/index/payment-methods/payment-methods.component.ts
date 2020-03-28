import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss']
})
export class PaymentMethodsComponent implements OnInit {
  helplines = {};
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((r: {helplines: any}) => {
      this.helplines = r.helplines;
    });
  }

}
