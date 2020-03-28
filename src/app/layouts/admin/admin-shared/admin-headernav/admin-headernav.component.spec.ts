import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHeadernavComponent } from './admin-headernav.component';

describe('AdminHeadernavComponent', () => {
  let component: AdminHeadernavComponent;
  let fixture: ComponentFixture<AdminHeadernavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHeadernavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHeadernavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
