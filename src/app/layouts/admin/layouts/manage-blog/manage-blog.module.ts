import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSharedModule } from '../../admin-shared/admin-shared.module';
import { ManageBlogComponent } from './manage-blog.component';
import { ManageBlogRouting } from './manage-blog.routing';
import { ManageBlogListComponent } from './manage-blog-list/manage-blog-list.component';
import { ManageBlogCategoriesComponent } from './manage-blog-categories/manage-blog-categories.component';

@NgModule({
	declarations: [
		ManageBlogComponent,
		ManageBlogListComponent,
		ManageBlogCategoriesComponent
	],
	imports: [CommonModule, AdminSharedModule, ManageBlogRouting]
})
export class ManageBlogModule {}
