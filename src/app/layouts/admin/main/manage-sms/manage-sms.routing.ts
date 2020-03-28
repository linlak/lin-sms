import { Routes, RouterModule } from '@angular/router';
import { ManageSmsComponent } from './manage-sms.component';
import { ManageSentSmsComponent } from './sms/manage-sent-sms/manage-sent-sms.component';
import { ManageSentSmsResolverService } from './sms/resolvers/manage-sent-sms-resolver.service';
import { ManageSmsPaymentsComponent } from './payments/manage-sms-payments/manage-sms-payments.component';
import { ModuleWithProviders } from '@angular/core';

const manageSmsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				children: [
					{
						path: 'payments',
						component: ManageSmsPaymentsComponent
					},
					{
						path: '',
						component: ManageSentSmsComponent,
						resolve: {
							sms: ManageSentSmsResolverService
						}
					}
				]
			}
		],
		component: ManageSmsComponent
	}
];

export const ManageSmsRouting: ModuleWithProviders = RouterModule.forChild(manageSmsRoutes);
