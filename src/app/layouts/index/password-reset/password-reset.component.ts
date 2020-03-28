import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit, OnDestroy {

  pass: User = {
    password: '',
    password_confirmation: ''
  };

  errs: any = {};
  user: User = {
    name: 'Linus Nowomukama'
  };
  private sub: Subscription;
  isSubmiting: boolean;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.sub = this.auth.loginListener().subscribe(r => {
      if (r) {
        this.auth.redirectTo('/account');
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  recover() {
    this.isSubmiting = true;
    this.auth.recoverPasswordConfirm(this.pass).subscribe((data: {
      errs?: any,
      success_flag: number
    }) => {
      this.errs = data.errs || {};
      this.pass = {
        password_confirmation: '',
        password: ''
      };

      if (data.success_flag === 1 ) {
        this.auth.redirectTo('reset-password/success');
      }
    },
    e => console.log,
      () => this.isSubmiting = false);
  }
}
