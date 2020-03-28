import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-metou-form',
  templateUrl: './metou-form.component.html',
  styleUrls: ['./metou-form.component.scss']
})
export class MetouFormComponent implements OnInit {
  user: User = {
    name: '',
    sms: ''
  };
  isSubmiting: boolean;
  errs: any = {};
  constructor() { }

  ngOnInit() {
    console.log('MetouFormComponent');
  }

  sendSms() {}

}
