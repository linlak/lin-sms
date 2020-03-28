import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavToggleService } from 'src/app/shared/services/nav-toggle.service';
import { Subscription } from 'rxjs';
import { User, LogedInUser } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Translation } from 'src/app/shared/models/translations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  isUser = false;
  isAdmin = false;
  navListener: Subscription;
  loginListener: Subscription;
  userListener: Subscription;
  isNavCollapsed = false;
  public me: User = null;

  public links = [
    {
      title: 'Home',
      url: '/',
      fragment: 'home'
    },
    {
      title: 'About',
      url: '/about-us',
      fragment: 'about'
    }
  ];
  translations: Translation[];
  constructor(
    public route: ActivatedRoute,
    private navToggle: NavToggleService,
    public auth: AuthService
    ) {
    this.translations = this.navToggle.getTranslations();
    }

  ngOnInit() {
   this.navListener = this.navToggle.listen().subscribe(item => {
      this.isNavCollapsed = (item === 'myNav');
    });

   this.loginListener = this.auth.loginListener().subscribe(r => {
      this.isUser = r;
    });

   this.userListener = this.auth.userListener().subscribe(r => {
      this.me = r;
      this.isAdmin = this.auth.admin();
    });
  }

  ngOnDestroy() {
    this.navListener.unsubscribe();
    this.loginListener.unsubscribe();
  }
  setTranslation(trans: string) {
    this.navToggle.toggleTranslation(trans);
  }
  openAdmin() {}
  toggleCollapse() {
    if (this.isNavCollapsed) {
      return this.navToggle.toggleNav();
    }
    this.navToggle.toggleNav('myNav');
  }

  toggleNotify() {}

  logout() {
    this.auth.logout();
  }
}
