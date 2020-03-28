import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageQuotesListComponent } from './manage-quotes-list.component';

describe('ManageQuotesListComponent', () => {
  let component: ManageQuotesListComponent;
  let fixture: ComponentFixture<ManageQuotesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageQuotesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageQuotesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
