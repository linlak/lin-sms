import { Routes, RouterModule } from '@angular/router';
import { ManageBlogComponent } from './manage-blog.component';
import { ManageBlogListComponent } from './manage-blog-list/manage-blog-list.component';
import { ManageBlogCategoriesComponent } from './manage-blog-categories/manage-blog-categories.component';
import { ModuleWithProviders } from '@angular/core';

const manageBlogRoutes: Routes = [
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
								path: 'categories',
								component: ManageBlogCategoriesComponent
							},
							{
								path: '',
								component: ManageBlogListComponent
							}
						],
						component: ManageBlogComponent
					}
				]
			}
		]
	}
];

export const ManageBlogRouting: ModuleWithProviders = RouterModule.forChild(
	manageBlogRoutes
);
