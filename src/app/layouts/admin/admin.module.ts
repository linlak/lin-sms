import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRouting } from './admin.routing';
import { AdminHomeComponent } from './layouts/admin-home/admin-home.component';
import { AdminComponent } from './admin.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { SharedModule } from '../../shared/shared.module';
import { AdminSharedModule } from './admin-shared/admin-shared.module';

@NgModule({
	declarations: [
		AdminHomeComponent,
		AdminComponent,
		AdminNavComponent,
		AdminHeaderComponent
	],
	imports: [CommonModule, SharedModule, AdminSharedModule, AdminRouting],
	exports: []
})
export class AdminModule {}
