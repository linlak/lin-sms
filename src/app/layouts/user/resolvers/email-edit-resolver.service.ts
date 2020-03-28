import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class EmailEditResolverService implements Resolve<User|never> {

  constructor(private userservice: UserService) { }

  resolve(): Observable<User|never> {
    return this.userservice.getEmailData();
  }
}
