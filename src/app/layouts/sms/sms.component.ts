import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-sms',
	templateUrl: './sms.component.html',
	styleUrls: ['./sms.component.scss']
})
export class SmsComponent implements OnInit, OnDestroy {
	private sub: Subscription;
	constructor(private auth: AuthService) {}

	ngOnInit(): void {
		this.sub = this.auth.loginListener().subscribe(r => {
			if (!r) {
				this.auth.redirectTo('/login');
			}
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
