import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageJobsListComponent } from './manage-jobs-list.component';

describe('ManageJobsListComponent', () => {
  let component: ManageJobsListComponent;
  let fixture: ComponentFixture<ManageJobsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageJobsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageJobsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
