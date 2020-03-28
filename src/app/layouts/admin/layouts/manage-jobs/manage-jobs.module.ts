import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSharedModule } from '../../admin-shared/admin-shared.module';
import { ManageJobsComponent } from './manage-jobs.component';
import { ManageJobsRouting } from './manage-jobs.routing';
import { ManageJobsListComponent } from './manage-jobs-list/manage-jobs-list.component';

@NgModule({
	declarations: [ManageJobsComponent, ManageJobsListComponent],
	imports: [CommonModule, AdminSharedModule, ManageJobsRouting]
})
export class ManageJobsModule {}
