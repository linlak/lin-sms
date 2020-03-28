import { Routes, RouterModule } from '@angular/router';
import { SendSmsComponent } from './send-sms/send-sms.component';
import { SentSentComponent } from './sent-sent/sent-sent.component';
import { SmsPaymentComponent } from './sms-payment/sms-payment.component';
import { MeToUComponent } from './me-to-u/me-to-u.component';
import { BuySmsComponent } from './buy-sms/buy-sms.component';
import { SmsPaymentsComponent } from './sms-payments/sms-payments.component';
import { PriceListResolverService } from '../index/resolvers/price-list-resolver.service';
import { SmsPaymentsResolverService } from './resolvers/sms-payments-resolver.service';
import { SmsComponent } from './sms.component';
import { AuthGuard } from '../../../app/shared/services/guards/auth.guard';
import { ModuleWithProviders } from '@angular/core';
import { SmsSentResolverService } from './resolvers/sms-sent-resolver.service';

const smsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				children: [
					{
						path: '',
						component: SendSmsComponent
					},
					{
						path: 'pay',
						component: SmsPaymentsComponent,
						resolve: {
							payments: SmsPaymentsResolverService
						}
					},
					{
						path: 'me2u',
						component: MeToUComponent
					},
					{
						path: 'sent',
						component: SentSentComponent,
						resolve: {
							sms: SmsSentResolverService
						}
					},
					{
						path: 'pending',
						component: SentSentComponent
					},
					{
						path: 'buy',
						component: BuySmsComponent,
						resolve: {
							prices: PriceListResolverService
						}
					}
				]
			}
		],
		component: SmsComponent,
		canActivateChild: [AuthGuard]
	}
];

export const SmsRouting: ModuleWithProviders = RouterModule.forChild(smsRoutes);
