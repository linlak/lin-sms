import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavToggleService } from '../../shared/services/nav-toggle.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit, OnDestroy {
  isdev = false;
  private navListener: Subscription;
  constructor(private nav: NavToggleService) { }

  ngOnInit() {
    this.navListener = this.nav.listen().subscribe(r => {
      this.isdev = (r === 'devNav');
    });
  }

  toggleDev() {
    if (this.isdev) {
      this.nav.toggleNav();
      return;
    }
    this.nav.toggleNav('devNav');
  }

  ngOnDestroy() {
    this.navListener.unsubscribe();
  }
}
