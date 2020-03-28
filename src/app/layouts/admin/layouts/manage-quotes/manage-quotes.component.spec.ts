import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageQuotesComponent } from './manage-quotes.component';

describe('ManageQuotesComponent', () => {
  let component: ManageQuotesComponent;
  let fixture: ComponentFixture<ManageQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
