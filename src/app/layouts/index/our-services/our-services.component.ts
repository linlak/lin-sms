import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {

  sms: string[] = [
    'services.sms.gatherings',
    'services.sms.wedding',
    'services.sms.birthday',
    'services.sms.meeting',
    'services.sms.introduction',
    'services.sms.special',
    'services.sms.funerals',
    'services.sms.software'
  ];
  smsMarketing: string[] = [];
  smsForOthers: string[] = [];
  constructor() { }

  ngOnInit() {
  }

}
