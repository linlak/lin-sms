import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSharedModule } from '../../admin-shared/admin-shared.module';
import { ManageQuotesComponent } from './manage-quotes.component';
import { ManageQuotesRouting } from './manage-quotes.routing';
import { ManageQuotesListComponent } from './manage-quotes-list/manage-quotes-list.component';

@NgModule({
	declarations: [ManageQuotesComponent, ManageQuotesListComponent],
	imports: [CommonModule, AdminSharedModule, ManageQuotesRouting]
})
export class ManageQuotesModule {}
