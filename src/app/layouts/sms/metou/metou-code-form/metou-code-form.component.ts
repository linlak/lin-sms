import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metou-code-form',
  templateUrl: './metou-code-form.component.html',
  styleUrls: ['./metou-code-form.component.scss']
})
export class MetouCodeFormComponent implements OnInit {

  smsCode: any = {};
  errs: any = {};
  isSubmiting: boolean;
  constructor() { }

  ngOnInit() {
    console.log('MetouCodeFormComponent');
  }
  loadSms(): void {}
}
