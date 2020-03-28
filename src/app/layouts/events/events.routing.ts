import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsDetailsComponent } from './events-details/events-details.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { ModuleWithProviders } from '@angular/core';

export const eventsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				children: [
					{
						path: 'upcoming',
						component: EventsListComponent
					},
					{
						path: '',
						component: EventsListComponent
					}
				]
			},
			{
				path: 'details/{eventlink}',
				component: EventsDetailsComponent
			},
			{
				path: 'edit/{id}',
				component: EventEditComponent
			},
			{
				path: 'create',
				component: EventCreateComponent
			}
		],
		component: EventsComponent
	}
];

export const EventsRouting: ModuleWithProviders = RouterModule.forChild(eventsRoutes);
