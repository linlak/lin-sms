import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonebookSingleComponent } from './phonebook-single.component';

describe('PhonebookSingleComponent', () => {
  let component: PhonebookSingleComponent;
  let fixture: ComponentFixture<PhonebookSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonebookSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonebookSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
