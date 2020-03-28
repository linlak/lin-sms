import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-dev-console',
	templateUrl: './dev-console.component.html',
	styleUrls: ['./dev-console.component.scss']
})
export class DevConsoleComponent implements OnInit, OnDestroy {
	private sub: Subscription;
	constructor(private auth: AuthService) {}

	ngOnInit() {
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
