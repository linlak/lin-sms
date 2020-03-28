import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-manage-user-profile',
  templateUrl: './manage-user-profile.component.html',
  styleUrls: ['./manage-user-profile.component.scss']
})
export class ManageUserProfileComponent implements OnInit, OnDestroy {
  user: User = {}
  aUser: User = {};
  private sub: Subscription;
  constructor(
    private route: ActivatedRoute,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.sub = this.auth.userListener()
    .subscribe(
      r => this.aUser = r
    );
    this.route.data.subscribe(
      (data: {user: User}) => {
        this.user = data.user || {};
      }
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  enUser() {}
  notify() {}
  romove() {}
  suspendUser() {}
}
