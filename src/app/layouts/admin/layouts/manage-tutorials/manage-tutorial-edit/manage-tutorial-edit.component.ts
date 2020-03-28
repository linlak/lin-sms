import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/shared/models/tutorials';
import { ActivatedRoute } from '@angular/router';
import { ManageTutorialsService } from '../manage-tutorials.service';

@Component({
  selector: 'app-manage-tutorial-edit',
  templateUrl: './manage-tutorial-edit.component.html',
  styleUrls: ['./manage-tutorial-edit.component.css']
})
export class ManageTutorialEditComponent implements OnInit {
  tutorial: Tutorial = null;
  constructor(
    private route: ActivatedRoute,
    private tutService: ManageTutorialsService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: { tutorial: Tutorial}) => {
        this.tutorial = data.tutorial;
      }
    )
  }

  editTutorial() {
    this.tutService.updateTutorial(this.tutorial, 'edit-body')
    .subscribe(
      (data: {
        tutorial?: Tutorial,
        success_flag: number
      }) => {
        if (data.success_flag === 1) {
          if (data.tutorial) {
            this.tutorial = data.tutorial;
          }
        }
      }
    )
  }
}
