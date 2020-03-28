import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isSubmiting = false;
  regUser: User = {};
  errs: any = {};
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.resetUser();
  }

  resetUser() {
    this.regUser = {
      fullname: '',
      username: '',
      password: '',
      password_confirmation: '',
      phone: '',
      email: '',
      gender: '',
      terms: false
    };
    this.errs = {};
  }
  register() {
    this.isSubmiting = true;
    this.auth.register(this.regUser).subscribe((data: {
      errs?: any,
      success_flag: number;
    }) => {
      this.isSubmiting = false;
      if (data.success_flag === 1) {
        this.resetUser();
      }
      this.errs = data.errs || {};
    },
    e => {
      this.isSubmiting = false;
    },
    () => {
      this.isSubmiting = false;
      this.regUser.password = '';
      this.regUser.password_confirmation = '';
      this.regUser.terms = false;
    }
    );
  }
}
