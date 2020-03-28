import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { AdminHeadernavComponent } from './admin-headernav/admin-headernav.component';

@NgModule({
	declarations: [AdminHeadernavComponent],
	imports: [CommonModule, SharedModule],
	exports: [CommonModule, SharedModule, AdminHeadernavComponent]
})
export class AdminSharedModule {}
