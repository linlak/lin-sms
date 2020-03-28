import { Component, OnInit } from '@angular/core';
import { ManageQuotesService } from '../manage-quotes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-manage-quotes-list',
	templateUrl: './manage-quotes-list.component.html',
	styleUrls: ['./manage-quotes-list.component.scss']
})
export class ManageQuotesListComponent implements OnInit {
	quotes: any[] = [];
	quote: any = {};
	isSubmitting: boolean;
	isUpdating: boolean;
	constructor(
		private quotesService: ManageQuotesService,
		private route: ActivatedRoute
	) {}
	enDis(updating = false, clr = true) {
		if (this.isSubmitting) {
			return;
		}
		this.isUpdating = updating;
		if (clr) {
			this.quote = {
				body: ''
			};
		}
	}
	ngOnInit(): void {
		// this.refreshQuotes();
		this.route.data.subscribe(
			(data: { quotes: any[] }) => (this.quotes = data.quotes)
		);
	}
	editQuote(qt: any) {}
	deleteQuote(qt: any) {}
	saveQuote() {}
	refreshQuotes() {
		this.quotesService.getQoutes().subscribe(data => (this.quotes = data));
	}
}
