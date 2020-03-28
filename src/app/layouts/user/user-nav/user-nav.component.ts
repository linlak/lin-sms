import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavToggleService } from 'src/app/shared/services/nav-toggle.service';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.scss']
})
export class UserNavComponent implements OnInit, OnDestroy {
  showUserSide: boolean;
  private sub: Subscription;
  constructor(private nav: NavToggleService) { }

  ngOnInit() {
    this.sub = this.nav.listen().subscribe(r => {
      this.showUserSide = (r === 'userNav');
    });
  }

  toggleUserSide() {
    if (this.showUserSide) {
      this.nav.clearVisible();
      return;
    }
    this.nav.toggleNav('userNav');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
