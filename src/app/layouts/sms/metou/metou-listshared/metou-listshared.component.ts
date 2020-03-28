import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metou-listshared',
  templateUrl: './metou-listshared.component.html',
  styleUrls: ['./metou-listshared.component.scss']
})
export class MetouListsharedComponent implements OnInit {
  shared: any[] = [];
  constructor() { }

  ngOnInit() {
  }

}
