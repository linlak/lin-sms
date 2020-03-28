import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileEditResolverService implements Resolve<User> {

  constructor(private userService: UserService) { }
  resolve(): Observable<User> {
    return this.userService.getProfileEdit();
  }
}
