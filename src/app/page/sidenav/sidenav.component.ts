import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  isUser = false;
  private loginListener: Subscription;
  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.loginListener = this.auth.loginListener().subscribe(r => {
      this.isUser = r;
    });
  }

  logout(): void {
    this.auth.logout();
  }
}
