import { Routes, RouterModule } from '@angular/router';
import { PhonebookListComponent } from './phonebook-list/phonebook-list.component';
import { PhonebookResolverService } from './rosolver/phonebook-resolver.service';
import { PhonebookSingleComponent } from './phonebook-single/phonebook-single.component';
import { PhonebookSingleResolverService } from './rosolver/phonebook-single-resolver.service';
import { PhonebookComponent } from './phonebook.component';
import { AuthGuard } from '../../../app/shared/services/guards/auth.guard';
import { ModuleWithProviders } from '@angular/core';

const phoneRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				children: [
					{
						path: '',
						component: PhonebookListComponent,
						resolve: {
							groups: PhonebookResolverService
						}
					},
					{
						path: ':id',
						component: PhonebookSingleComponent,
						resolve: {
							group: PhonebookSingleResolverService
						}
					}
				]
			}
		],
		component: PhonebookComponent,
		canActivate: [AuthGuard],
		canActivateChild: [AuthGuard]
	}
];

export const PhonebookRouting: ModuleWithProviders = RouterModule.forChild(phoneRoutes);
