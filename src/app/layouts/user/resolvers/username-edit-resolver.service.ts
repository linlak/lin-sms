import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsernameEditResolverService implements Resolve<User> {

  constructor(private userService: UserService) { }
  resolve(): Observable<User> {
    return this.userService.getEmailData();
  }
}
