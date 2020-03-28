import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePhoneEditComponent } from './profile-phone-edit.component';

describe('ProfilePhoneEditComponent', () => {
  let component: ProfilePhoneEditComponent;
  let fixture: ComponentFixture<ProfilePhoneEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePhoneEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePhoneEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
