import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
	selector: 'app-profile-email-edit',
	templateUrl: './profile-email-edit.component.html',
	styleUrls: ['./profile-email-edit.component.scss']
})
export class ProfileEmailEditComponent implements OnInit, OnDestroy {
	user: User = {
		email: '',
		password: ''
	};
	isSubmiting: boolean;
	errs: any = {};
	constructor(
		private readonly route: ActivatedRoute,
		private userService: UserService,
		private auth: AuthService
	) {}

	ngOnInit() {
		this.route.data.subscribe(
			(data: { user: User }) => {
				//  console.log('email.edit', data);
				this.user = Object.assign(this.user, data.user);
			},
			e => console.log
		);
	}

	ngOnDestroy(): void {}

	saveChanges() {
		this.isSubmiting = true;
		this.userService.updateEmail(this.user).subscribe(
			(data: { errs?: any; success_flag }) => {
				this.errs = data.errs || {};
				this.user.password = '';
				if (data.success_flag === 1) {
					this.auth.redirectTo('/account');
				}
			},
			err => {
				this.isSubmiting = false;
			},
			() => (this.isSubmiting = false)
		);
	}
}
