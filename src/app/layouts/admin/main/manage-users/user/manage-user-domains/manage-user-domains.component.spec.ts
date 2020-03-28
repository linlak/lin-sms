import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUserDomainsComponent } from './manage-user-domains.component';

describe('ManageUserDomainsComponent', () => {
  let component: ManageUserDomainsComponent;
  let fixture: ComponentFixture<ManageUserDomainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUserDomainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUserDomainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
