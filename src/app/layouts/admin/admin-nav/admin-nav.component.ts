import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavToggleService } from 'src/app/shared/services/nav-toggle.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.scss']
})
export class AdminNavComponent implements OnInit, OnDestroy {
  showAdminSide = false;
  isSuper = true;
  navListener: Subscription;
  constructor(private nav: NavToggleService) { }

  ngOnInit() {
    this.navListener = this.nav.listen().subscribe(r => {
      this.showAdminSide = r === 'adminNav';
    });
  }

  ngOnDestroy() {}
  toggleadminSide() {
    if (this.showAdminSide) {
      this.nav.clearVisible();
      return;
    }
    this.nav.toggleNav('adminNav');
  }
}
