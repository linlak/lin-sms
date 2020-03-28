import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSharedModule } from '../../admin-shared/admin-shared.module';
import { ManageEventsComponent } from './manage-events.component';
import { ManageEventsRouting } from './manage-events.routing';
import { ManageEventsListComponent } from './manage-events-list/manage-events-list.component';

@NgModule({
	declarations: [ManageEventsComponent, ManageEventsListComponent],
	imports: [CommonModule, AdminSharedModule, ManageEventsRouting]
})
export class ManageEventsModule {}
