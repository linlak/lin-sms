import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsPaymentComponent } from './sms-payment.component';

describe('SmsPaymentComponent', () => {
  let component: SmsPaymentComponent;
  let fixture: ComponentFixture<SmsPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
