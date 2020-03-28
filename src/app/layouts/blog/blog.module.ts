import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogsComponent } from './blogs/blogs.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { BlogRouting } from './blog.routing';

@NgModule({
	declarations: [BlogComponent, BlogsComponent],
	imports: [CommonModule, SharedModule, BlogRouting]
})
export class BlogModule {}
