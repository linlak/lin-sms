import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUserSmsPaymentsComponent } from './manage-user-sms-payments.component';

describe('ManageUserSmsPaymentsComponent', () => {
  let component: ManageUserSmsPaymentsComponent;
  let fixture: ComponentFixture<ManageUserSmsPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUserSmsPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUserSmsPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
