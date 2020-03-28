import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginModelComponent } from '../components/models/login-model/login-model.component';
import { ConfirmModelComponent } from '../components/models/confirm-model/confirm-model.component';

const MODELS = {
  loginModal: LoginModelComponent,
  confirmModal: ConfirmModelComponent,
};
@Injectable({
  providedIn: 'root'
})
export class ModelsService {

  constructor(
    private modelService: NgbModal
  ) { }

  public open(name: string) {
    this.modelService.open(MODELS[name]).result.then(r => {
      console.log('close', r);
    }, e => {
      console.log('reject', e);
    });
  }
}
