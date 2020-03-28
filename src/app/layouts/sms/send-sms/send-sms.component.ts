import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
	selector: 'app-send-sms',
	templateUrl: './send-sms.component.html',
	styleUrls: ['./send-sms.component.scss']
})
export class SendSmsComponent implements OnInit, OnDestroy {
	user: User = {};
	private sub: Subscription;
	constructor(private auth: AuthService) {}

	ngOnInit() {
		this.sub = this.auth.userListener().subscribe(r => {
			if (r) {
				this.user = r;
			}
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	buyMore() {}
}
