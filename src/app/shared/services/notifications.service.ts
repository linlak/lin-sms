import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pushConfig } from 'src/environments/push';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private http: HttpClient) { }

  public saveSubscription(sub: PushSubscription): void {
    const req = this.http.post(pushConfig.NOTIFICATION_URI, sub);
    req.subscribe( data => {
      console.log(data);
    });
  }


}
