import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule, SwPush, SwUpdate } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRouting } from './routerConfig';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { PageModule } from './page/page.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { NavigationEnd, NavigationError, NavigationCancel, NavigationStart, Router } from '@angular/router';
import { NotificationsService, NavToggleService } from './shared';
import { pushConfig } from 'src/environments/push';
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
		HttpClientModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
    }),
    PageModule,
    FormsModule,
		ReactiveFormsModule,
    StorageServiceModule,
    QuillModule.forRoot(),
    NgbModule,
    ClipboardModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    SharedModule.forRoot(),
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
		router: Router,
		navService: NavToggleService,
		update: SwUpdate,
		push: SwPush,
		notifyService: NotificationsService
	) {
		router.events.subscribe(e => {
			if (e instanceof NavigationStart) {
				navService.clearVisible();
				navService.enLoading();
			}
			if (e instanceof NavigationCancel) {
				navService.clearVisible();
			}
			if (e instanceof NavigationError) {
				navService.clearVisible();
			}
			if (e instanceof NavigationEnd) {
				navService.disLoading();
			}
		});

		// service workers
		if (update.isEnabled) {
			update.available.subscribe(result => {
				console.log('New update');
				if (
					confirm('A new update is available, would you like to install it?')
				) {
					window.location.reload();
				}
			});

			push.messages.subscribe(msg => {
				console.log(msg);
			});

			push
				.requestSubscription({
					serverPublicKey: pushConfig.PUB_KEY
				})
				.then(pushSubscription => {
					notifyService.saveSubscription(pushSubscription);
				})
				.catch(() => {
					console.log('Subscription failed');
				});
		}
	}
 }

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http);
}
