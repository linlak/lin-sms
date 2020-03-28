import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSharedModule } from '../../admin-shared/admin-shared.module';
import { ManagePusherComponent } from './manage-pusher.component';
import { PusherRouting } from './manage-pusher.routing';

@NgModule({
	declarations: [ManagePusherComponent],
	imports: [CommonModule, AdminSharedModule, PusherRouting]
})
export class ManagePusherModule {}
