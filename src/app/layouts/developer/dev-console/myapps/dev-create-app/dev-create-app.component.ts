import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev-create-app',
  templateUrl: './dev-create-app.component.html',
  styleUrls: ['./dev-create-app.component.scss']
})
export class DevCreateAppComponent implements OnInit {
  myapp: any = {};
  errs: any = {};
  isSubmiting: boolean;
  constructor() { }

  ngOnInit() {
  }

  createApp() {}
}
