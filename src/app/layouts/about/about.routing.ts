import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ModuleWithProviders } from '@angular/core';

const aboutRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				component: AboutUsComponent
			}
		],
		component: AboutComponent
	}
];

export const AboutRouting: ModuleWithProviders = RouterModule.forChild(
	aboutRoutes
);
