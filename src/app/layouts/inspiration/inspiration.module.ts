import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesComponent } from './quotes/quotes.component';
import { InspirationComponent } from './inspiration.component';
import { DatingTipsComponent } from './dating-tips/dating-tips.component';
import { DatingTipComponent } from './dating-tip/dating-tip.component';
import { SharedModule } from '../../shared/shared.module';
import { InspireRouting } from './inspration.routing';

@NgModule({
	declarations: [
		QuotesComponent,
		InspirationComponent,
		DatingTipsComponent,
		DatingTipComponent
	],
	imports: [CommonModule, SharedModule, InspireRouting]
})
export class InspirationModule {}
