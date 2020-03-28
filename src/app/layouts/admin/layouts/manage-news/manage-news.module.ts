import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSharedModule } from '../../admin-shared/admin-shared.module';
import { ManageNewsComponent } from './manage-news.component';
import { ManageNewsRouting } from './manage-news.routing';
import { ManageNewsListComponent } from './manage-news-list/manage-news-list.component';

@NgModule({
	declarations: [ManageNewsComponent, ManageNewsListComponent],
	imports: [CommonModule, AdminSharedModule, ManageNewsRouting]
})
export class ManageNewsModule {}
