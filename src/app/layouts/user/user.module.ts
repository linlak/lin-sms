import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRouting } from './user.routing';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileEmailEditComponent } from './profile-email-edit/profile-email-edit.component';
import { ProfilePhoneEditComponent } from './profile-phone-edit/profile-phone-edit.component';
import { ProfileUsernameEditComponent } from './profile-username-edit/profile-username-edit.component';
import { ProfileAddPhoneComponent } from './profile-add-phone/profile-add-phone.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { SharedModule } from '../../shared/shared.module';
import { UserComponent } from './user.component';
import { UserNavComponent } from './user-nav/user-nav.component';

@NgModule({
	declarations: [
		UserProfileComponent,
		ProfileEditComponent,
		ProfileEmailEditComponent,
		ProfilePhoneEditComponent,
		ProfileUsernameEditComponent,
		ProfileAddPhoneComponent,
		EditPasswordComponent,
		UserComponent,
		UserNavComponent
	],
	imports: [CommonModule, SharedModule, UserRouting]
})
export class UserModule {}
