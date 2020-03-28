import { Routes, RouterModule } from '@angular/router';
import { ManageEventsComponent } from './manage-events.component';
import { ManageEventsListComponent } from './manage-events-list/manage-events-list.component';
import { ModuleWithProviders } from '@angular/core';

export const manageEventsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				children: [
					{
						path: '',
						component: ManageEventsListComponent
					}
				],
				component: ManageEventsComponent
			}
		]
	}
];

export const ManageEventsRouting: ModuleWithProviders = RouterModule.forChild(
	manageEventsRoutes
);
