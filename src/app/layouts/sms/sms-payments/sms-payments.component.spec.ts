import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsPaymentsComponent } from './sms-payments.component';

describe('SmsPaymentsComponent', () => {
  let component: SmsPaymentsComponent;
  let fixture: ComponentFixture<SmsPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
