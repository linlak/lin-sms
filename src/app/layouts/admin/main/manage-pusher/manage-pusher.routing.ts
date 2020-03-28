import { Routes, RouterModule } from '@angular/router';
import { ManagePusherComponent } from './manage-pusher.component';
import { ModuleWithProviders } from '@angular/core';

const pusherRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				component: ManagePusherComponent
			}
		]
	}
];

export const PusherRouting: ModuleWithProviders = RouterModule.forChild(
	pusherRoutes
);
