import { Component, OnInit } from '@angular/core';
import { ModelsService } from '../../shared/services/models.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private modals: ModelsService) { }

  ngOnInit() {
  }

  login() {
    const mdRef = this.modals.open('loginModal');
  }
}
