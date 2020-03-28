import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  isSubmiting = false;
  authUser: User = {
    username: '',
    password: ''
  };
  errs: any = {};
  sub: Subscription;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.sub = this.auth.loginListener().subscribe(
      r => {
        if (r) {
          this.auth.redirectTo('/account');
        }
      }
    );
  }
  perform_login() {
    this.isSubmiting = true;
    this.auth.login(this.authUser).subscribe((data: {
      success_flag: number,
      errs?: any
    }) => {
      this.authUser.password = '';
      this.errs = data.errs || {};
      if (data.success_flag === 1) {
        // success
      }
    },
    e => {},
    () => {
      this.isSubmiting = false;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
