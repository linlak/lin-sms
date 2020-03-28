import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-phonebook',
	templateUrl: './phonebook.component.html',
	styleUrls: ['./phonebook.component.scss']
})
export class PhonebookComponent implements OnInit, OnDestroy {
	private sub: Subscription;
	constructor(private auth: AuthService) {}

	ngOnInit(): void {
		this.sub = this.auth.loginListener().subscribe(r => {
			if (!r) {
				this.auth.redirectTo('/');
			}
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
