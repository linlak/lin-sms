import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dev-my-apps',
  templateUrl: './dev-my-apps.component.html',
  styleUrls: ['./dev-my-apps.component.scss']
})
export class DevMyAppsComponent implements OnInit {

  myapps: any[] = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
    .subscribe(
      (r: {myapps: any[]}) => {
        this.myapps = r.myapps;
      }
    );
  }

}
