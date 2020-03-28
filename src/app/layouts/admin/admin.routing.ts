import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './layouts/admin-home/admin-home.component';
import { AdminComponent } from './admin.component';
import { AdminGuard } from '../../shared/services/guards/admin.guard';
import { ModuleWithProviders } from '@angular/core';

 const adminRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				children: [
					{
						path: 'users',
						loadChildren: () =>
							import('./main/manage-users/manage-users.module').then(
								mod => mod.ManageUsersModule
							)
					},
					{
						path: 'sms',
						loadChildren: () =>
							import('./main/manage-sms/manage-sms.module').then(
								mod => mod.ManageSmsModule
							)
					},
					{
						path: 'sms',
						loadChildren: () =>
							import('./main/manage-sms/manage-sms.module').then(
								mod => mod.ManageSmsModule
							)
					},
					{
						path: 'newsletter',
						loadChildren: () =>
							import(
								'./main/manage-newsletters/manage-newsletters.module'
							).then(mod => mod.ManageNewslettersModule)
					},
					{
						path: 'pusher',
						loadChildren: () =>
							import('./main/manage-pusher/manage-pusher.module').then(
								mod => mod.ManagePusherModule
							)
					},
					{
						path: 'developers',
						loadChildren: () =>
							import('./main/manage-devs/manage-devs.module').then(
								mod => mod.ManageDevsModule
							)
					},
					{
						path: 'adverts',
						loadChildren: () =>
							import('./layouts/manage-adds/manage-adds.module').then(
								mod => mod.ManageAddsModule
							)
					},
					{
						path: 'tutorials',
						loadChildren: () =>
							import('./layouts/manage-tutorials/manage-tutorials.module').then(
								mod => mod.ManageTutorialsModule
							)
					},
					{
						path: 'jobs',
						loadChildren: () =>
							import('./layouts/manage-jobs/manage-jobs.module').then(
								mod => mod.ManageJobsModule
							)
					},
					{
						path: 'blog',
						loadChildren: () =>
							import('./layouts/manage-blog/manage-blog.module').then(
								mod => mod.ManageBlogModule
							)
					},
					{
						path: 'quotes',
						loadChildren: () =>
							import('./layouts/manage-quotes/manage-quotes.module').then(
								mod => mod.ManageQuotesModule
							)
					},
					{
						path: 'news',
						loadChildren: () =>
							import('./layouts/manage-news/manage-news.module').then(
								mod => mod.ManageNewsModule
							)
					},
					{
						path: 'events',
						loadChildren: () =>
							import('./layouts/manage-events/manage-events.module').then(
								mod => mod.ManageEventsModule
							)
					},
					{
						path: '',
						component: AdminHomeComponent,
						canActivate: [AdminGuard]
					}
				]
			},
			{
				path: '**',
				redirectTo: '/administration'
			}
		],
		component: AdminComponent,
		canActivateChild: [AdminGuard]
	}
];

export const AdminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);
