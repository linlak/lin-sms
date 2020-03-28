import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  isUser = false;
  services: string[] = [
    'services.home.business',
    'services.home.skills',
    'services.home.jobs',
    'services.home.carrer',
    'services.home.sms',
  ];
  private sub: Subscription;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.sub = this.auth.loginListener().subscribe(
      r => this.isUser = r
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
