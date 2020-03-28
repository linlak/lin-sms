import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPhonebookComponent } from './add-phonebook/add-phonebook.component';
import { PhonebookListComponent } from './phonebook-list/phonebook-list.component';
import { PhonebookSingleComponent } from './phonebook-single/phonebook-single.component';
import { RouterModule } from '@angular/router';
import { PhonebookRouting } from './phonebook.routing';
import { SharedModule } from '../../shared/shared.module';
import { PhonebookComponent } from './phonebook.component';

@NgModule({
	declarations: [
		AddPhonebookComponent,
		PhonebookListComponent,
		PhonebookSingleComponent,
		PhonebookComponent
	],
	imports: [CommonModule, SharedModule, PhonebookRouting],
	exports: []
})
export class PhonebookModule {}
