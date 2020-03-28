import { Component, OnInit } from '@angular/core';
import { AppToastService } from '../../services/app-toast.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss']
})
export class ToastsComponent implements OnInit {

  constructor(public toastService: AppToastService) { }

  ngOnInit() {
  }

  toastClass(toast: any): string {
    let toastClass: string;
    switch (toast.type) {
      default:
        toastClass = 'bg-dark';
        break;
      case 'success':
        toastClass = 'bg-success';
        break;
      case 'error':
      case 'danger':
        toastClass = 'bg-danger';
        break;
      case 'info':
        toastClass = 'bg-info';
        break;
      case 'warning':
        toastClass = 'bg-warning';
        break;
    }
    return `${toastClass} text-white`;
  }
}
