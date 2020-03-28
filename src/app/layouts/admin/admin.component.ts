import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
	private sub: Subscription;
	constructor(private auth: AuthService) {}

	ngOnInit() {
		this.sub = this.auth.loginListener().subscribe(r => {
			if (r) {
				if (!this.auth.admin()) {
					this.auth.redirectTo('/account');
				}
			} else {
				this.auth.redirectTo('/login');
			}
		});
	}
	ngOnDestroy(): void {
		this.sub.unsubscribe();
	}
}
