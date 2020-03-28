import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
	{
		path: 'about',
		loadChildren: () =>
			import('./layouts/about/about.module').then(mod => mod.AboutModule)
	},
	{
		path: 'phonebook',
		loadChildren: () =>
			import('./layouts/phonebook/phonebook.module').then(
				mod => mod.PhonebookModule
			)
	},
	{
		path: 'sms',
		loadChildren: () =>
			import('./layouts/sms/sms.module').then(mod => mod.SmsModule)
	},
	{
		path: 'account',
		loadChildren: () =>
			import('./layouts/user/user.module').then(mod => mod.UserModule)
	},
	{
		path: 'administration',
		loadChildren: () =>
			import('./layouts/admin/admin.module').then(mod => mod.AdminModule)
	},
	{
		path: 'developer',
		loadChildren: () =>
			import('./layouts/developer/developer.module').then(
				mod => mod.DeveloperModule
			)
	},
	{
		path: 'blog',
		loadChildren: () =>
			import('./layouts/blog/blog.module').then(mod => mod.BlogModule)
	},
	{
		path: 'events',
		loadChildren: () =>
			import('./layouts/events/events.module').then(mod => mod.EventsModule)
	},
	{
		path: 'jobs',
		loadChildren: () =>
			import('./layouts/jobs/jobs.module').then(mod => mod.JobsModule)
	},
	{
		path: 'news',
		loadChildren: () =>
			import('./layouts/news/news.module').then(mod => mod.NewsModule)
	},
	{
		path: 'inspiration',
		loadChildren: () =>
			import('./layouts/inspiration/inspiration.module').then(
				mod => mod.InspirationModule
			)
	},
	{
		path: '',
		loadChildren: () =>
			import('./layouts/index/index.module').then(mod => mod.IndexModule)
	},
	{
		path: '**',
		component: PageNotFoundComponent
	}
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    initialNavigation: 'enabled'
});
