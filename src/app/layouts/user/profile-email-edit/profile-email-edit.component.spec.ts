import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEmailEditComponent } from './profile-email-edit.component';

describe('ProfileEmailEditComponent', () => {
  let component: ProfileEmailEditComponent;
  let fixture: ComponentFixture<ProfileEmailEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEmailEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEmailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
