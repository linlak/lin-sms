import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClipboardModule } from 'ngx-clipboard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { QuillModule } from 'ngx-quill';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/guards/auth.guard';
import { AdminGuard } from './services/guards/admin.guard';
import { SmsGuard } from './services/guards/sms.guard';
import { AdminService } from '../layouts/admin/admin-shared/administration/admin.service';
import { SmsService } from './services/sms.service';
import { NotAuthGuard } from './services/guards/not-auth.guard';
import { NavToggleService } from './services/nav-toggle.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModelComponent } from './components/models/login-model/login-model.component';
import { ConfirmModelComponent } from './components/models/confirm-model/confirm-model.component';
import { ModelsService } from './services/models.service';
import { PriceListComponent } from './components/price-list/price-list.component';
import { SmsCoverageComponent } from './components/sms-coverage/sms-coverage.component';
import { CurrencyQuoteComponent } from './components/currency-quote/currency-quote.component';
import { CustomCurrencePipe } from './pipes/custom-currence.pipe';
import { EmptyListComponent } from './components/empty-list/empty-list.component';
import { IsLoadingComponent } from './components/is-loading/is-loading.component';
import { TranslateModule } from '@ngx-translate/core';
import { ToastsComponent } from './components/toasts/toasts.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { SmsbuyFormComponent } from './components/smsbuy-form/smsbuy-form.component';
import { SmssendFormComponent } from './components/smssend-form/smssend-form.component';
import { SmsphonebookModelComponent } from './components/models/smsphonebook-model/smsphonebook-model.component';
import { StringObscurePipe } from './pipes/string-obscure.pipe';
import { ChecklistModelComponent } from './components/checklist-model/checklist-model.component';
import { ContactsCalculatorPipe } from './pipes/contacts-calculator.pipe';

@NgModule({
	declarations: [
		PageNotFoundComponent,
		LoginModelComponent,
		ConfirmModelComponent,
		PriceListComponent,
		SmsCoverageComponent,
		CurrencyQuoteComponent,
		CustomCurrencePipe,
		EmptyListComponent,
		IsLoadingComponent,
		ToastsComponent,
		AlertsComponent,
		SmsbuyFormComponent,
		SmssendFormComponent,
		SmsphonebookModelComponent,
		StringObscurePipe,
		ChecklistModelComponent,
		ContactsCalculatorPipe
	],
	imports: [
		CommonModule,
		TranslateModule,
		RouterModule,
		ReactiveFormsModule,
		FormsModule,
		NgbModule,
		QuillModule,
		ClipboardModule
	],
	exports: [
		CommonModule,
		TranslateModule,
		RouterModule,
		FormsModule,
		ReactiveFormsModule,
		NgbModule,
		QuillModule,
		ClipboardModule,
		LoginModelComponent,
		ConfirmModelComponent,
		CurrencyQuoteComponent,
		PriceListComponent,
		SmsCoverageComponent,
		CustomCurrencePipe,
		StringObscurePipe,
		EmptyListComponent,
		AlertsComponent,
		IsLoadingComponent,
		ToastsComponent,
		SmsbuyFormComponent,
		SmssendFormComponent,
		SmsphonebookModelComponent,
		ChecklistModelComponent,
		ContactsCalculatorPipe
	],
	entryComponents: [
		LoginModelComponent,
		ConfirmModelComponent,
		EmptyListComponent,
		IsLoadingComponent,
		SmsbuyFormComponent,
		SmsphonebookModelComponent,
		ChecklistModelComponent
	]
})
export class SharedModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: SharedModule,
			providers: [
				AuthService,
				AdminService,
				SmsService,
				NavToggleService,
				ModelsService,
				AuthGuard,
				NotAuthGuard,
				AdminGuard,
				SmsGuard
			]
		};
	}
}
