import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { IndexRouting } from './index.routing';
import { PricingComponent } from './pricing/pricing.component';
import { SharedModule } from '../../shared/shared.module';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { RecoverSuccessComponent } from './success/recover-success/recover-success.component';
import { RegisterSuccessComponent } from './success/register-success/register-success.component';
import { ConfirmSuccessComponent } from './success/confirm-success/confirm-success.component';
import { ResetSuccessComponent } from './success/reset-success/reset-success.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { HomeComponent } from './home/home.component';
import { ResetConfirmSuccessComponent } from './success/reset-confirm-success/reset-confirm-success.component';

@NgModule({
	declarations: [
		IndexComponent,
		LoginComponent,
		RegisterComponent,
		VerificationCodeComponent,
		RecoverPasswordComponent,
		PricingComponent,
		PaymentMethodsComponent,
		TermsAndConditionsComponent,
		PrivacyComponent,
		ContactUsComponent,
		OurServicesComponent,
		RecoverSuccessComponent,
		RegisterSuccessComponent,
		ConfirmSuccessComponent,
		ResetSuccessComponent,
		PasswordResetComponent,
		HomeComponent,
		ResetConfirmSuccessComponent
	],
	imports: [CommonModule, SharedModule, IndexRouting]
})
export class IndexModule {}
