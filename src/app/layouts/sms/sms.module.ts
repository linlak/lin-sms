import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendSmsComponent } from './send-sms/send-sms.component';
import { SentSentComponent } from './sent-sent/sent-sent.component';
import { SmsPaymentsComponent } from './sms-payments/sms-payments.component';
import { SmsPaymentComponent } from './sms-payment/sms-payment.component';
import { BuySmsComponent } from './buy-sms/buy-sms.component';
import { SmsDetailComponent } from './sms-detail/sms-detail.component';
import { SmsRouting } from './sms.routing';
import { MeToUComponent } from './me-to-u/me-to-u.component';
import { MetouFormComponent } from './metou/metou-form/metou-form.component';
import { MetouCodeFormComponent } from './metou/metou-code-form/metou-code-form.component';
import { MetouListComponent } from './metou/metou-list/metou-list.component';
import { MetouDetailComponent } from './metou/metou-detail/metou-detail.component';
import { SharedModule } from '../../shared/shared.module';
import { MetouListsharedComponent } from './metou/metou-listshared/metou-listshared.component';
import { SmsComponent } from './sms.component';

@NgModule({
	declarations: [
		SendSmsComponent,
		SentSentComponent,
		SmsPaymentsComponent,
		SmsPaymentComponent,
		BuySmsComponent,
		SmsDetailComponent,
		MeToUComponent,
		MetouFormComponent,
		MetouCodeFormComponent,
		MetouListComponent,
		MetouDetailComponent,
		MetouListsharedComponent,
		SmsComponent
	],
	imports: [CommonModule, SharedModule, SmsRouting]
})
export class SmsModule {}
