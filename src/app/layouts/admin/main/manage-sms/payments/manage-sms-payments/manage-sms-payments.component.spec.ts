import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSmsPaymentsComponent } from './manage-sms-payments.component';

describe('ManageSmsPaymentsComponent', () => {
  let component: ManageSmsPaymentsComponent;
  let fixture: ComponentFixture<ManageSmsPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSmsPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSmsPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
