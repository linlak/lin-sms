import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRouting } from './about.routing';
import { AboutUsComponent } from './about-us/about-us.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
	declarations: [AboutComponent, AboutUsComponent],
	imports: [CommonModule, SharedModule, AboutRouting]
})
export class AboutModule {}
