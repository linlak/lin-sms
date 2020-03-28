import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUsersMainComponent } from './manage-users-main.component';

describe('ManageUsersMainComponent', () => {
  let component: ManageUsersMainComponent;
  let fixture: ComponentFixture<ManageUsersMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUsersMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUsersMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
