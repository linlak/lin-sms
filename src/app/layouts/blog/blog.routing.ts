import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ModuleWithProviders } from '@angular/core';

 const blogRoutes: Routes = [
	{
		path: '',
		component: BlogComponent,
		children: [
			{
				path: '',
				component: BlogsComponent
			},
			{
				path: 'recent',
				component: BlogsComponent
			}
		]
	}
];

export const BlogRouting: ModuleWithProviders = RouterModule.forChild(blogRoutes);
