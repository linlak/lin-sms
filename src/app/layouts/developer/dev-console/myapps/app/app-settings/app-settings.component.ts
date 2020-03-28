import { Component, OnInit } from '@angular/core';
import { MyAppServiceService } from '../my-app-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-app-settings',
  templateUrl: './app-settings.component.html',
  styleUrls: ['./app-settings.component.scss']
})
export class AppSettingsComponent implements OnInit {
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
