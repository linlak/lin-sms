import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.sub = this.auth.loginListener().subscribe(
      r => {
        if (!r) {
          this.auth.redirectTo('/login');
        }
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
