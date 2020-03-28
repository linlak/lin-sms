import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsCreateComponent } from './news-create/news-create.component';
import { NewsEditComponent } from './news-edit/news-edit.component';
import { ModuleWithProviders } from '@angular/core';

const newsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				component: NewsListComponent,
				data: {
					title: 'News Updated'
				}
			},
			{
				path: 'recent',
				component: NewsListComponent,
				data: {
					title: 'Recent News'
				}
			},
			{
				path: 'read/{titlelink}',
				component: NewsDetailsComponent
			},
			{
				path: 'publish',
				component: NewsCreateComponent
			},
			{
				path: 'edit/{id}',
				component: NewsEditComponent
			}
		],
		component: NewsComponent
	}
];

export const NewsRouting: ModuleWithProviders = RouterModule.forChild(
	newsRoutes
);
