import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSharedModule } from '../../admin-shared/admin-shared.module';
import { ManageSmsComponent } from './manage-sms.component';
import { ManageSmsRouting } from './manage-sms.routing';
import { ManageSentSmsComponent } from './sms/manage-sent-sms/manage-sent-sms.component';
import { ManageSentSmsDetailsComponent } from './sms/manage-sent-sms-details/manage-sent-sms-details.component';
import { ManageSmsListitemComponent } from './sms/manage-sms-listitem/manage-sms-listitem.component';
import { ManageSmsPaymentsComponent } from './payments/manage-sms-payments/manage-sms-payments.component';

@NgModule({
	declarations: [
		ManageSmsComponent,
		ManageSentSmsComponent,
		ManageSentSmsDetailsComponent,
		ManageSmsListitemComponent,
		ManageSmsPaymentsComponent
	],
	imports: [CommonModule, AdminSharedModule, ManageSmsRouting]
})
export class ManageSmsModule {}
