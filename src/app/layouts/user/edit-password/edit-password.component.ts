import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.scss']
})
export class EditPasswordComponent implements OnInit {

  pass: User = {
    password: '',
    current_password: '',
    password_confirmation: ''
  };

  user: User = {};
  isSubmiting: boolean;
  errs: any = {};
  constructor(private userService: UserService, private auth: AuthService) { }

  ngOnInit() {
  }

  clearPass() {
    this.pass = {
      password: '',
      current_password: '',
      password_confirmation: ''
    };
  }
  resetpass() {
    this.isSubmiting = true;
    this.userService.resetPassword(this.pass).subscribe((
      data: {
        errs?: any,
        success_flag: number
      }
    ) => {
      this.errs = data.errs || {};

      if (data.success_flag === 1) {
        // redirect user
        this.auth.redirectTo('/account');
      }
    },
    e => {},
    () => {
      this.clearPass();
      this.isSubmiting = false;
    });
  }
}
