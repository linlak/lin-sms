import { Component, OnInit, OnDestroy } from '@angular/core';
import { LogedInUser, User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit, OnDestroy {
  user: User = null;
  sub: Subscription;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.sub = this.auth.userListener()
    .subscribe(
      (r: User) => {
        this.user = r;
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
