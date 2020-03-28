import { Component, OnInit } from '@angular/core';
import { DeveloperService } from 'src/app/shared/services/developer.service';
import { pipe } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ClipboardService } from 'ngx-clipboard';

@Component({
	selector: 'app-mydomains',
	templateUrl: './mydomains.component.html',
	styleUrls: ['./mydomains.component.scss']
})
export class MydomainsComponent implements OnInit {
	formVisible: boolean;
	isSubmiting: boolean;
	errs: any = {};
	mydomain: any = {
		host_scheme: '',
		host_name: ''
	};
	mydomains: any[] = [];
	constructor(
		private dev: DeveloperService,
		private route: ActivatedRoute,
		private clipService: ClipboardService
	) {}

	ngOnInit() {
		this.route.data.subscribe(
			(r: { mydomains: any }) => {
				this.mydomains = r.mydomains;
			},
			e => console.log,
			() => {}
		);
	}

	showForm(wht: boolean = false) {
		this.errs = {};
		this.formVisible = wht;
		this.mydomain = {
			host_scheme: '',
			host_name: ''
		};
	}

	createEdit() {
		this.isSubmiting = true;
		this.dev.addDamain(this.mydomain).subscribe(
			(data: { errs?: any; success_flag: number }) => {
				this.errs = data.errs || {};
				if (data.success_flag === 1) {
					// update list
				}
			},
			e => (this.isSubmiting = false),
			() => (this.isSubmiting = false)
		);
	}

	downloadKey(domain: any) {
		const code = `<meta name="lin_verify_code" content="${domain.key}" />`;
		this.clipService.copyFromContent(code);
	}
	verifyDomain(domain: any) {
		this.isSubmiting = true;
		this.dev.verifyDamain(domain).subscribe(
			(data: { success_flag: number }) => {},
			err => (this.isSubmiting = false),
			() => (this.isSubmiting = false)
		);
	}
	deleteDomain(domain: any) {
		this.isSubmiting = true;
		this.dev.removeDamain(domain).subscribe(
			(data: { success_flag: number }) => {
				if (data.success_flag === 1) {
					// remove domain
				}
			},
			err => (this.isSubmiting = false),
			() => (this.isSubmiting = false)
		);
	}
}
