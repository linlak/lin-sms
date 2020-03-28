import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from '../../shared/services/guards/auth.guard';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileEmailEditComponent } from './profile-email-edit/profile-email-edit.component';
import { ProfileUsernameEditComponent } from './profile-username-edit/profile-username-edit.component';
import { ProfileAddPhoneComponent } from './profile-add-phone/profile-add-phone.component';
import { ProfilePhoneEditComponent } from './profile-phone-edit/profile-phone-edit.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { EmailEditResolverService } from './resolvers/email-edit-resolver.service';
import { UserComponent } from './user.component';
import { ProfileResolverService } from './resolvers/profile-resolver.service';
import { ProfileEditResolverService } from './resolvers/profile-edit-resolver.service';
import { ModuleWithProviders } from '@angular/core';

const userRoutes: Routes = [
	{
		path: '',
		component: UserComponent,
		canActivate: [AuthGuard],
		canActivateChild: [AuthGuard],
		children: [
			{
				path: 'edit-profile',
				component: ProfileEditComponent,
				resolve: {
					user: ProfileEditResolverService
				},
				canActivate: [AuthGuard]
			},
			{
				path: 'edit-email',
				component: ProfileEmailEditComponent,
				resolve: {
					user: EmailEditResolverService
				},
				canActivate: [AuthGuard]
			},
			{
				path: 'edit-username',
				component: ProfileUsernameEditComponent,
				resolve: {
					user: ProfileResolverService
				},
				canActivate: [AuthGuard]
			},
			{
				path: 'add-phone',
				component: ProfileAddPhoneComponent,
				canActivate: [AuthGuard]
			},
			{
				path: 'edit-phone',
				component: ProfilePhoneEditComponent,
				canActivate: [AuthGuard]
			},
			{
				path: 'reset-password',
				component: EditPasswordComponent,
				canActivate: [AuthGuard]
			},
			{
				path: '',
				component: UserProfileComponent,
				resolve: {
					user: ProfileResolverService
				},
				canActivate: [AuthGuard],
				data: {}
			}
		],
		data: {
			sesionOptions: {
				auth: true,
				redTo: '/login'
			}
		}
	}
];

export const UserRouting: ModuleWithProviders = RouterModule.forChild(
	userRoutes
);
