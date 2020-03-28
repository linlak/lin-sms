import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobEditComponent } from './job-edit/job-edit.component';
import { JobApplyComponent } from './job-apply/job-apply.component';
import { JobCreateComponent } from './job-create/job-create.component';
import { SharedModule } from '../../shared/shared.module';
import { JobsRouting } from './jobs.routing';

@NgModule({
	declarations: [
		JobsComponent,
		JobsListComponent,
		JobDetailsComponent,
		JobEditComponent,
		JobApplyComponent,
		JobCreateComponent
	],
	imports: [CommonModule, SharedModule, JobsRouting]
})
export class JobsModule {}
