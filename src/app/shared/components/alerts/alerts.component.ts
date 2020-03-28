import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppToastService } from '../../services/app-toast.service';
import { Alert } from '../../models/alerts';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit, OnDestroy {
  alerts: Alert[] = [];
  sub: Subscription;
  constructor(public toastService: AppToastService) { }

  ngOnInit() {
    this.sub = this.toastService.alertlistener().subscribe((alert: Alert) => {
      if (alert) {
        alert.timout = setTimeout(() => {
          this.remove(alert);
        }, 5000);
        this.alerts.push(alert);

      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  remove(alert: Alert) {
    this.alerts = this.alerts.filter(t => t !== alert);
  }

}
