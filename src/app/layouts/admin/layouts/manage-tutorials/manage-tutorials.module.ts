import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSharedModule } from '../../admin-shared/admin-shared.module';
import { ManageTutsRouting } from './manage-tutorials.routing';
import { ManageTutorialListComponent } from './manage-tutorial-list/manage-tutorial-list.component';
import { ManageTutorialCreateComponent } from './manage-tutorial-create/manage-tutorial-create.component';
import { ManageTutorialEditComponent } from './manage-tutorial-edit/manage-tutorial-edit.component';

@NgModule({
	declarations: [
		ManageTutorialListComponent,
		ManageTutorialCreateComponent,
		ManageTutorialEditComponent
	],
	imports: [CommonModule, AdminSharedModule, ManageTutsRouting]
})
export class ManageTutorialsModule {}
