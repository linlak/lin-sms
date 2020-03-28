import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
	selector: 'app-profile-phone-edit',
	templateUrl: './profile-phone-edit.component.html',
	styleUrls: ['./profile-phone-edit.component.scss']
})
export class ProfilePhoneEditComponent implements OnInit {
	errs: any = {};
	user: User = {};
	isSubmiting: boolean;
	constructor(private auth: AuthService, private userService: UserService) {}

	ngOnInit() {}

	saveChanges() {
		this.isSubmiting = true;
		this.userService.editUser('edit-phone', this.user).subscribe(
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
