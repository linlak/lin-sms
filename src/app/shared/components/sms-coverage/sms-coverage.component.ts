import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms-coverage',
  templateUrl: './sms-coverage.component.html',
  styleUrls: ['./sms-coverage.component.scss']
})
export class SmsCoverageComponent implements OnInit {
  coverage = [
    'general.coverage.networks.mtn',
    'general.coverage.networks.airtel',
    'general.coverage.networks.smart',
    'general.coverage.networks.africell',
    'general.coverage.networks.vodafone',
    'general.coverage.networks.utl',
    'general.coverage.networks.k2',
    'general.coverage.networks.smile',
  ];
  constructor() { }

  ngOnInit() {
  }

}
