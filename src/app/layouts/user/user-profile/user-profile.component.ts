import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  accUser: User = {};
  private sub: Subscription;
  constructor(
    private route: ActivatedRoute,
    private auth: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: {user: User}) => {
        this.accUser = data.user;
      }
    );
  }

  ngOnDestroy() {
  }

}
