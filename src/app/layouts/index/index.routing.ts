import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';
import { NotAuthGuard } from '../../shared/services/guards/not-auth.guard';
import { PricingComponent } from './pricing/pricing.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { PayMtdResolverService } from './resolvers/pay-mtd-resolver.service';
import { PriceListResolverService } from './resolvers/price-list-resolver.service';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { HomeComponent } from './home/home.component';
import { RegisterSuccessComponent } from './success/register-success/register-success.component';
import { RecoverSuccessComponent } from './success/recover-success/recover-success.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ConfirmSuccessComponent } from './success/confirm-success/confirm-success.component';
import { ModuleWithProviders } from '@angular/core';

const indexRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'login',
				component: LoginComponent,
				canActivate: [NotAuthGuard]
			},
			{
				path: 'register',
				children: [
					{
						path: '',
						component: RegisterComponent,
						canActivate: [NotAuthGuard]
					},
					{
						path: 'success',
						component: RegisterSuccessComponent
					}
				]
			},
			{
				path: 'reset-password',
				children: [
					{
						path: 'success',
						component: ConfirmSuccessComponent
					},
					{
						path: '',
						component: PasswordResetComponent,
						canActivate: [NotAuthGuard]
					}
				]
			},
			{
				path: 'forgot-password',
				children: [
					{
						path: '',
						component: RecoverPasswordComponent,
						canActivate: [NotAuthGuard]
					},
					{
						path: 'success',
						component: RecoverSuccessComponent
					}
				]
			},
			{
				path: 'verification-code',
				component: VerificationCodeComponent
			},
			{
				path: 'privacy',
				component: PrivacyComponent
			},
			{
				path: 'services',
				component: OurServicesComponent
			},
			{
				path: 'contact',
				redirectTo: '/contact-us'
			},
			{
				path: 'contact-us',
				component: ContactUsComponent
			},
			{
				path: 'terms-and-conditions',
				component: TermsAndConditionsComponent
			},
			{
				path: 'payment-methods',
				component: PaymentMethodsComponent,
				resolve: {
					helplines: PayMtdResolverService
				}
			},
			{
				path: 'pricing',
				component: PricingComponent,
				resolve: {
					prices: PriceListResolverService
				},
				canActivate: [NotAuthGuard]
			},
			{
				path: '',
				component: HomeComponent
			}
		],
		component: IndexComponent
	}
];

export const IndexRouting: ModuleWithProviders = RouterModule.forChild(
	indexRoutes
);
