import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUsernameEditComponent } from './profile-username-edit.component';

describe('ProfileUsernameEditComponent', () => {
  let component: ProfileUsernameEditComponent;
  let fixture: ComponentFixture<ProfileUsernameEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileUsernameEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUsernameEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
