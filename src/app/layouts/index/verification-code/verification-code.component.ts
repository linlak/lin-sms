import { Component, OnInit } from '@angular/core';
import { VCode } from 'src/app/shared/models/v-code';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.scss']
})
export class VerificationCodeComponent implements OnInit {
  vCode: VCode = {
    v_code: ''
  };
  errs: any = {};
  isSubmiting: boolean;
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  send() {
    this.auth.verifyCode(this.vCode).subscribe(
      (data: {success_flag: number, errs?: any}) => {
        this.errs = data.errs || {};
        if (data.success_flag === 1) {
          // success
        }
      }
    );
  }
}
