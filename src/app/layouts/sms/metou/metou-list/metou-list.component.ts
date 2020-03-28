import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metou-list',
  templateUrl: './metou-list.component.html',
  styleUrls: ['./metou-list.component.scss']
})
export class MetouListComponent implements OnInit {
  received: any[] = [];
  constructor() { }

  ngOnInit() {
  }

}
