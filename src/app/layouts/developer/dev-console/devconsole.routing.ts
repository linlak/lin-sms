import { Routes, RouterModule } from '@angular/router';
import { DevConsoleComponent } from './dev-console.component';
import { DevConsoleHomeComponent } from './dev-console-home/dev-console-home.component';
import { MydomainsComponent } from './myapps/mydomains/mydomains.component';
import { DevCreateAppComponent } from './myapps/dev-create-app/dev-create-app.component';
import { DevMyAppsComponent } from './myapps/dev-my-apps/dev-my-apps.component';
import { MyAppsDomainsResolverService } from './myapps/rosolvers/my-apps-domains-resolver.service';
import { MyAppsResolverService } from './myapps/rosolvers/my-apps-resolver.service';
import { MyappComponent } from './myapps/myapp/myapp.component';
import { AppHomeComponent } from './myapps/app/app-home/app-home.component';
import { AppStatatisticsComponent } from './myapps/app/app-statatistics/app-statatistics.component';
import { AppEditComponent } from './myapps/app/app-edit/app-edit.component';
import { AppHooksComponent } from './myapps/app/app-hooks/app-hooks.component';
import { AppMessagesComponent } from './myapps/app/app-messages/app-messages.component';
import { AppSettingsComponent } from './myapps/app/app-settings/app-settings.component';
import { AppHomeResolverService } from './myapps/app/resolvers/app-home-resolver.service';
import { AppEditResolverService } from './myapps/app/resolvers/app-edit-resolver.service';
import { AppSettingsResolverService } from './myapps/app/resolvers/app-settings-resolver.service';
import { AppMessagesResolverService } from './myapps/app/resolvers/app-messages-resolver.service';
import { AppStatsResolverService } from './myapps/app/resolvers/app-stats-resolver.service';
import { AppHooksResolverService } from './myapps/app/resolvers/app-hooks-resolver.service';
import { AuthGuard } from '../../../../app/shared/services/guards/auth.guard';
import { ModuleWithProviders } from '@angular/core';

export const dConsoleRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'my-domains',
				component: MydomainsComponent,
				resolve: {
					mydomains: MyAppsDomainsResolverService
				}
			},
			{
				path: 'create-app',
				component: DevCreateAppComponent
			},
			{
				path: 'my-app/:id',
				children: [
					{
						path: '',
						children: [
							{
								path: '',
								component: AppHomeComponent,
								resolve: {
									myapp: AppHomeResolverService
								}
							},
							{
								path: 'edit',
								component: AppEditComponent,
								resolve: {
									myapp: AppEditResolverService
								}
							},
							{
								path: 'settings',
								component: AppSettingsComponent,
								resolve: {
									myapp: AppSettingsResolverService
								}
							},
							{
								path: 'messages',
								component: AppMessagesComponent,
								resolve: {
									myapp: AppMessagesResolverService
								}
							},
							{
								path: 'statistics',
								component: AppStatatisticsComponent,
								resolve: {
									myapp: AppStatsResolverService
								}
							},
							{
								path: 'web-hooks',
								component: AppHooksComponent,
								resolve: {
									myapp: AppHooksResolverService
								}
							}
						]
					}
				],
				component: MyappComponent
			},
			{
				path: 'my-apps',
				component: DevMyAppsComponent,
				resolve: {
					myapps: MyAppsResolverService
				}
			},
			{
				path: '',
				component: DevConsoleHomeComponent
			},
			{
				path: '**',
				redirectTo: '/developer/console',
				pathMatch: 'full'
			}
		],
		component: DevConsoleComponent,
		canActivateChild: [AuthGuard]
	}
];

export const DConsoleRouting: ModuleWithProviders = RouterModule.forChild(dConsoleRoutes);
