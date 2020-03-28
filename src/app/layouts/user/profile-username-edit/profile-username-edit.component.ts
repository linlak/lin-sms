import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
	selector: 'app-profile-username-edit',
	templateUrl: './profile-username-edit.component.html',
	styleUrls: ['./profile-username-edit.component.scss']
})
export class ProfileUsernameEditComponent implements OnInit, OnDestroy {
	user: User = {
		username: '',
		password: ''
	};
	errs: any = {};
	isSubmiting: boolean;
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

	ngOnDestroy() {}

	saveChanges() {
		this.isSubmiting = true;
		this.userService.editUser('edit-username', this.user).subscribe(
			(data: { errs?: any; success_flag: number }) => {
				this.errs = data.errs || {};
				if (data.success_flag === 1) {
					this.auth.goToAccount();
				}
			},
			err => (this.isSubmiting = false),
			() => (this.isSubmiting = false)
		);
	}
}
