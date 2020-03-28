import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-reset-success',
  templateUrl: './reset-success.component.html',
  styleUrls: ['./reset-success.component.scss']
})
export class ResetSuccessComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.sub = this.auth.loginListener().subscribe(r => {
      if (r === true) {
        // redirect
        this.auth.redirectTo('/account');
      }
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
