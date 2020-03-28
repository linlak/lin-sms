import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/shared/models/tutorials';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.scss']
})
export class TutorialsListComponent implements OnInit {
  tutorials: Tutorial[] = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: {tutorials: Tutorial[]}) => {
      this.tutorials = data.tutorials;
    });
  }

}
