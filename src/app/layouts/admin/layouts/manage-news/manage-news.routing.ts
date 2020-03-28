import { Routes, RouterModule } from '@angular/router';
import { ManageNewsComponent } from './manage-news.component';
import { ManageNewsListComponent } from './manage-news-list/manage-news-list.component';
import { ModuleWithProviders } from '@angular/core';

const manageNewsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				children: [
					{
						path: '',
						children: [
							{
								path: '',
								component: ManageNewsListComponent
							}
						],
						component: ManageNewsComponent
					}
				]
			}
		]
	}
];

export const ManageNewsRouting: ModuleWithProviders = RouterModule.forChild(
	manageNewsRoutes
);
