import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEventsListComponent } from './manage-events-list.component';

describe('ManageEventsListComponent', () => {
  let component: ManageEventsListComponent;
  let fixture: ComponentFixture<ManageEventsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEventsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEventsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
