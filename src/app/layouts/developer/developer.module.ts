import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperComponent } from './developer.component';
import { DeveloperHomeComponent } from './developer-home/developer-home.component';
import { SharedModule } from '../../shared/shared.module';
import { DevRouting } from './developer.routing';
import { DeveloperNavComponent } from './developer-nav/developer-nav.component';

@NgModule({
	declarations: [
		DeveloperComponent,
		DeveloperHomeComponent,
		DeveloperNavComponent
	],
	imports: [CommonModule, SharedModule, DevRouting]
})
export class DeveloperModule {}
