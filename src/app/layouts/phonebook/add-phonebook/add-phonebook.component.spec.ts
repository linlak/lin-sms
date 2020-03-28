import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhonebookComponent } from './add-phonebook.component';

describe('AddPhonebookComponent', () => {
  let component: AddPhonebookComponent;
  let fixture: ComponentFixture<AddPhonebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPhonebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPhonebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
