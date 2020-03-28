import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/shared/models/tutorials';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.scss']
})
export class TutorialDetailsComponent implements OnInit {
  tutorial: Tutorial = {};
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: {tutorial: Tutorial}) => {
        if (data.tutorial) {
          this.tutorial = data.tutorial;
        }
      }
    );
  }

}
