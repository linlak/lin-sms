import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialsListComponent } from './tutorials-list/tutorials-list.component';
import { SharedModule } from '../../../../app/shared/shared.module';
import { DevTutsRouting } from './tutorials.routing';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import { TutorialsComponent } from './tutorials.component';

@NgModule({
	declarations: [
		TutorialsListComponent,
		TutorialDetailsComponent,
		TutorialsComponent
	],
	imports: [CommonModule, SharedModule, DevTutsRouting]
})
export class TutorialsModule {}
