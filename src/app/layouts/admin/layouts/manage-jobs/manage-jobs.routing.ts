import { Routes, RouterModule } from '@angular/router';
import { ManageJobsComponent } from './manage-jobs.component';
import { ManageJobsListComponent } from './manage-jobs-list/manage-jobs-list.component';
import { ModuleWithProviders } from '@angular/core';

const manageJobsRoutes: Routes = [
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
								children: [
									{
										path: '',
										component: ManageJobsListComponent
									}
								],
								component: ManageJobsComponent
							}
						]
					}
				]
			}
		]
	}
];

export const ManageJobsRouting: ModuleWithProviders = RouterModule.forChild(manageJobsRoutes);
