import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSharedModule } from '../../admin-shared/admin-shared.module';
import { ManageUsersListComponent } from './manage-users-list/manage-users-list.component';
import { ManageUsersRouting } from './manage-users.routing';
import { ManageUsersAppsComponent } from './user/manage-users-apps/manage-users-apps.component';
import { ManageUsersComponent } from './manage-users.component';
import { ManageUserAccountComponent } from './user/manage-user-account/manage-user-account.component';
import { ManageUserProfileComponent } from './user/manage-user-profile/manage-user-profile.component';
import { ManageUserSmsComponent } from './user/manage-user-sms/manage-user-sms.component';
import { ManageUserDomainsComponent } from './user/manage-user-domains/manage-user-domains.component';
import { ManageUsersListResolverService } from './resolvers/manage-users-list-resolver.service';
import { ManageUsersProfileResolverService } from './resolvers/manage-users-profile-resolver.service';
import { ManageUserSmspayResolverService } from './resolvers/manage-user-smspay-resolver.service';
import { ManageUsersAppsResolverService } from './resolvers/manage-users-apps-resolver.service';
import { ManageUserPhonebooksResolverService } from './resolvers/manage-user-phonebooks-resolver.service';
import { ManageUserTokensResolverService } from './resolvers/manage-user-tokens-resolver.service';
import { ManageUserNewsResolverService } from './resolvers/manage-user-news-resolver.service';
import { ManageUserSmsPaymentsComponent } from './user/manage-user-sms-payments/manage-user-sms-payments.component';
import { ManageUsersMainComponent } from './user/manage-users-main/manage-users-main.component';
import { ManageUserTokensComponent } from './user/manage-user-tokens/manage-user-tokens.component';

@NgModule({
	declarations: [
		ManageUsersListComponent,
		ManageUsersAppsComponent,
		ManageUsersComponent,
		ManageUserAccountComponent,
		ManageUserProfileComponent,
		ManageUserSmsComponent,
		ManageUserDomainsComponent,
		ManageUserSmsPaymentsComponent,
		ManageUsersMainComponent,
		ManageUserTokensComponent
	],
	imports: [CommonModule, AdminSharedModule, ManageUsersRouting],
	providers: []
})
export class ManageUsersModule {}
