import { Component, OnInit } from '@angular/core';
import { MyAppServiceService } from '../my-app-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-app-messages',
  templateUrl: './app-messages.component.html',
  styleUrls: ['./app-messages.component.scss']
})
export class AppMessagesComponent implements OnInit {
  myapp: any = {};
  constructor(private myAppService: MyAppServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: {myapp: any}) => {
        this.myapp = data.myapp;
      }
    );
  }

}
