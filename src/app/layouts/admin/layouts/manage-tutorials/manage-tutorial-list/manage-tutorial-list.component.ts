import { Component, OnInit } from '@angular/core';
import { ManageTutorialsService } from '../manage-tutorials.service';
import { ActivatedRoute } from '@angular/router';
import { Tutorial } from 'src/app/shared/models/tutorials';

@Component({
  selector: 'app-manage-tutorial-list',
  templateUrl: './manage-tutorial-list.component.html',
  styleUrls: ['./manage-tutorial-list.component.css']
})
export class ManageTutorialListComponent implements OnInit {
  tutorials: Tutorial[] = [];
  constructor(
    private route: ActivatedRoute,
    private tutService: ManageTutorialsService
    ) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: {tutorials: Tutorial[]}) => this.tutorials = data.tutorials
    )
  }

}
