import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRouting } from './news.routing';
import { NewsComponent } from './news.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsCreateComponent } from './news-create/news-create.component';
import { NewsEditComponent } from './news-edit/news-edit.component';
import { SharedModule } from '../../../app/shared/shared.module';

@NgModule({
	declarations: [
		NewsComponent,
		NewsListComponent,
		NewsDetailsComponent,
		NewsCreateComponent,
		NewsEditComponent
	],
	imports: [CommonModule, SharedModule, NewsRouting]
})
export class NewsModule {}
