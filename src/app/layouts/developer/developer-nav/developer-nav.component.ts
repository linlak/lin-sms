import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer-nav',
  templateUrl: './developer-nav.component.html',
  styleUrls: ['./developer-nav.component.scss']
})
export class DeveloperNavComponent implements OnInit {
  isUser = false;
  constructor() { }

  ngOnInit() {
  }

}
