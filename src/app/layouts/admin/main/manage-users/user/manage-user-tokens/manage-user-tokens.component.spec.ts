import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUserTokensComponent } from './manage-user-tokens.component';

describe('ManageUserTokensComponent', () => {
  let component: ManageUserTokensComponent;
  let fixture: ComponentFixture<ManageUserTokensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUserTokensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUserTokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
