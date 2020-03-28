import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-checklist-model',
	templateUrl: './checklist-model.component.html',
	styleUrls: ['./checklist-model.component.scss']
})
export class ChecklistModelComponent implements OnInit {
	@Input() appChecklistModel: Array<string> = [];
	@Input() checklistValue: any;
	@Input() name: string;
	@Output() checklistChange = new EventEmitter<any>();
	@Input() selectionChange: Subject<boolean>;

	isChecked: boolean;
	public checkBox = new FormControl();
	constructor() {}

	ngOnInit(): void {
		const checkBox$ = this.checkBox.valueChanges;
		this.selectionChange.subscribe(r => {
			this.checkBox.setValue(r);
		});
		checkBox$.subscribe(r => {
			const index = this.appChecklistModel.indexOf(this.checklistValue);
			if (r) {
				if (index === -1) {
					this.appChecklistModel.push(this.checklistValue);
				}
			} else {
				if (index >= 0) {
					this.appChecklistModel.splice(index, 1);
				}
			}
			this.checklistChange.emit(true);
		});
	}
}
