import { Routes, RouterModule } from '@angular/router';
import { ManageQuotesComponent } from './manage-quotes.component';
import { ManageQuotesListComponent } from './manage-quotes-list/manage-quotes-list.component';
import { ManageQuotesResolverService } from './resolvers/manage-quotes-resolver.service';
import { ModuleWithProviders } from '@angular/core';

 const manageQuotesRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				children: [
					{
						path: '',
						component: ManageQuotesListComponent,
						resolve: {
							quotes: ManageQuotesResolverService
						}
					}
				]
			}
		],
		component: ManageQuotesComponent
	}
];

export const ManageQuotesRouting: ModuleWithProviders = RouterModule.forChild(manageQuotesRoutes);
