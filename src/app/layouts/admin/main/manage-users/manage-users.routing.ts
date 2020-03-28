import { Routes, RouterModule } from '@angular/router';
import { ManageUsersListComponent } from './manage-users-list/manage-users-list.component';
import { ManageUsersComponent } from './manage-users.component';
import { ManageUsersListResolverService } from './resolvers/manage-users-list-resolver.service';
import { ManageUserProfileComponent } from './user/manage-user-profile/manage-user-profile.component';
import { ManageUserAccountComponent } from './user/manage-user-account/manage-user-account.component';
import { ManageUsersProfileResolverService } from './resolvers/manage-users-profile-resolver.service';
import { ManageUsersAppsComponent } from './user/manage-users-apps/manage-users-apps.component';
import { ManageUserDomainsComponent } from './user/manage-user-domains/manage-user-domains.component';
import { ManageUserSmsComponent } from './user/manage-user-sms/manage-user-sms.component';
import { ManageUsersAppsResolverService } from './resolvers/manage-users-apps-resolver.service';
import { ManageUsersSmsResolverService } from './resolvers/manage-users-sms-resolver.service';
import { ManageUsersDomainsResolverService } from './resolvers/manage-users-domains-resolver.service';
import { ManageUsersMainComponent } from './user/manage-users-main/manage-users-main.component';
import { ManageUserSmsPaymentsComponent } from './user/manage-user-sms-payments/manage-user-sms-payments.component';
import { ManageUserSmspayResolverService } from './resolvers/manage-user-smspay-resolver.service';
import { ManageUserTokensResolverService } from './resolvers/manage-user-tokens-resolver.service';
import { ManageUserTokensComponent } from './user/manage-user-tokens/manage-user-tokens.component';
import { ModuleWithProviders } from '@angular/core';

const manageUserRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				children: [
					{
						path: '',
						component: ManageUsersListComponent,
						resolve: {
							users: ManageUsersListResolverService
						}
					},
					{
						path: ':user_status',
						children: [
							{
								path: '',
								component: ManageUsersListComponent,
								resolve: {
									users: ManageUsersListResolverService
								}
							}
						]
					}
				],
				component: ManageUsersMainComponent
			},
			{
				path: 'manage/:id',
				children: [
					{
						path: '',
						children: [
							{
								path: '',
								children: [
									{
										path: '',
										component: ManageUserProfileComponent,
										resolve: {
											user: ManageUsersProfileResolverService
										}
									},
									{
										path: 'apps',
										component: ManageUsersAppsComponent,
										resolve: {
											user: ManageUsersAppsResolverService
										}
									},
									{
										path: 'domains',
										component: ManageUserDomainsComponent,
										resolve: {
											user: ManageUsersDomainsResolverService
										}
									},
									{
										path: 'sms-pay',
										component: ManageUserSmsPaymentsComponent,
										resolve: {
											user: ManageUserSmspayResolverService
										}
									},
									{
										path: 'sms',
										component: ManageUserSmsComponent,
										resolve: {
											user: ManageUsersSmsResolverService
										}
									},
									{
										path: 'tokens',
										component: ManageUserTokensComponent,
										resolve: {
											user: ManageUserTokensResolverService
										}
									}
								]
							}
						],
						component: ManageUserAccountComponent
					}
				]
			}
		],
		component: ManageUsersComponent
	}
];

export const ManageUsersRouting: ModuleWithProviders = RouterModule.forChild(manageUserRoutes);
