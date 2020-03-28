import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  accUser: User = {};
  errs: any = {};
  isSubmiting: boolean;
  constructor(private route: ActivatedRoute, private userUservice: UserService, private auth: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: {user: User}) => {
        this.accUser = data.user;
      }
    );
  }
  saveChanges() {
    this.isSubmiting = true;
    this.userUservice.updateProfile(this.accUser).subscribe(
      (data: {errs?: any, success_flag: number}) => {
        this.errs = data.errs || {};
        if (data.success_flag === 1) {
            this.auth.redirectTo('/account');
        }
      },
      e => {},
      () => {
        this.isSubmiting = false;
      }
    );
  }
}
