import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reset-confirm-success',
  templateUrl: './reset-confirm-success.component.html',
  styleUrls: ['./reset-confirm-success.component.scss']
})
export class ResetConfirmSuccessComponent implements OnInit, OnDestroy {

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
