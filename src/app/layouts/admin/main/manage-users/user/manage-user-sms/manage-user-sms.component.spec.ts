import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUserSmsComponent } from './manage-user-sms.component';

describe('ManageUserSmsComponent', () => {
  let component: ManageUserSmsComponent;
  let fixture: ComponentFixture<ManageUserSmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUserSmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUserSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
