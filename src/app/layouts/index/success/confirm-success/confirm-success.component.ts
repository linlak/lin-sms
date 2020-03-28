import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-confirm-success',
  templateUrl: './confirm-success.component.html',
  styleUrls: ['./confirm-success.component.scss']
})
export class ConfirmSuccessComponent implements OnInit, OnDestroy {

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
