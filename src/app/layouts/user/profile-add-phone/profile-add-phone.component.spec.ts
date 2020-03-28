import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAddPhoneComponent } from './profile-add-phone.component';

describe('ProfileAddPhoneComponent', () => {
  let component: ProfileAddPhoneComponent;
  let fixture: ComponentFixture<ProfileAddPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAddPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAddPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
