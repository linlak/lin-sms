import { Component, OnInit } from '@angular/core';
import { SmsService } from 'src/app/shared/services/sms.service';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-phonebook-list',
	templateUrl: './phonebook-list.component.html',
	styleUrls: ['./phonebook-list.component.scss']
})
export class PhonebookListComponent implements OnInit {
	groups: any[] = [];
	isSubmiting: boolean;
	errs: any = {};
	phn: any = {};
	checkAll: boolean;
	el: any = {
		selection: []
	};
	selectionChange$ = new Subject<boolean>();
	constructor(private smsService: SmsService, private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.data.subscribe(
			(data: { groups: any[] }) => (this.groups = data.groups)
		);
	}
	useGroups() {}
	deleteSelection() {}
	checkChange() {
		this.checkAll = this.el.selection.length === this.groups.length;
	}
	addSelection() {
		if (this.checkAll) {
			this.groups.forEach(group => {
				this.el.selection.push(group.id);
			});
		} else {
			this.el.selection = [];
		}
		this.selectionChange$.next(this.checkAll);
	}
	editItem(grp: any) {}
	saveItem() {}
	exportGroup(grp: any) {}
	deleteItems(index: number) {}
}
