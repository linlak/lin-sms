import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { EventsRouting } from './events.routing';
import { SharedModule } from '../../shared/shared.module';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsDetailsComponent } from './events-details/events-details.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventEditComponent } from './event-edit/event-edit.component';

@NgModule({
	declarations: [
		EventsComponent,
		EventsListComponent,
		EventsDetailsComponent,
		EventCreateComponent,
		EventEditComponent
	],
	imports: [CommonModule, SharedModule, EventsRouting]
})
export class EventsModule {}
