import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {
  isSubmiting = false;
  pass: User = {
    username: ''
  };
  errs: any = {};
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  send() {
    this.isSubmiting = true;
    this.auth.recoverPassword(this.pass)
    .subscribe(
      (data: {errs?: any, success_flag: number}) => {
        this.isSubmiting = false;
        this.errs = data.errs || {};
        if (data.success_flag === 1) {
          // success
          this.router.navigateByUrl('/verification-code');
        }
      },
      e => {
        this.isSubmiting = false;
      },
      () => {
        this.isSubmiting = false;
      }
    );
  }
}
