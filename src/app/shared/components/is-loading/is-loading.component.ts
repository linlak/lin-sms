import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavToggleService } from '../../services/nav-toggle.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-is-loading',
  templateUrl: './is-loading.component.html',
  styleUrls: ['./is-loading.component.scss']
})
export class IsLoadingComponent implements OnInit, OnDestroy {
  isLoading = false;
  loadingListener: Subscription;
  constructor(private nav: NavToggleService) { }

  ngOnInit() {
    this.loadingListener = this.nav.loadingListener().subscribe(r => this.isLoading = r);
  }

  ngOnDestroy() {
    this.loadingListener.unsubscribe();
  }
}
