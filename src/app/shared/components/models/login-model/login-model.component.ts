import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-login-model',
  templateUrl: './login-model.component.html',
  styleUrls: ['./login-model.component.scss']
})
export class LoginModelComponent implements OnInit {
  authUser: User = {
    username: '',
    password: ''
  };
  errs: any = {};

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
