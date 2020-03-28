import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Translation } from '../models/translations';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavToggleService {
  private visibleNav: BehaviorSubject<string>;
  private showLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private withOverly: boolean;
  private translations: Translation[] = [
    {
      title: 'English (en-US)',
      value: 'en'
    },
    {
      title: 'French (fr-FR)',
      value: 'fr'
    },
    {
      title: 'Japanese (ja-JP)',
      value: 'ja'
    },
    {
      title: 'Dutch (nl-NL)',
      value: 'nl'
    }
  ];
  constructor(private translate: TranslateService, @Inject(LOCAL_STORAGE) private storage: StorageService) {
    this.visibleNav  = new BehaviorSubject<string>(null);
    let what = storage.get('visibleNav');
    if (what) {
    what = JSON.parse(what);
    const withoverly = JSON.parse(storage.get('visibleNavwithOverly')) || false;
    // console.log(what, withoverly);
    setTimeout(() => {
          // console.log(what);
          this.toggleNav(what, withoverly);
      }, 1000);
    }
   }

   public showOverly(): boolean {
     return this.withOverly;
   }
  public getTranslations(): Translation[] {
    return [...this.translations];
  }
  public openAdmin() {}
  public loadingListener(): Observable<boolean> {
    return this.showLoading.asObservable().pipe(
      share()
    );
  }
  public toggleTranslation(trans: string): void {
    this.translate.use(trans);
  }
  public enLoading(): void {
    this.showLoading.next(true);
   }
  public disLoading(): void {
    this.showLoading.next(false);
  }
  public toggleNav(what?: string, withOverly: boolean = true): void {
    if (!what) {
      what = null;
      withOverly = false;
    }
    this.storage.set('visibleNav', JSON.stringify(what));
    this.storage.set('visibleNavwithOverly', JSON.stringify(withOverly));
    this.withOverly = withOverly;
    // console.log(what);
    this.visibleNav.next(what);
  }

  listen(): Observable<string> {
    return this.visibleNav.asObservable().pipe(
      share()
    );
  }

  clearVisible(): void {
    this.toggleNav();
  }
}
