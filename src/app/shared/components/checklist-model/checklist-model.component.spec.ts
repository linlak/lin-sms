import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistModelComponent } from './checklist-model.component';

describe('ChecklistModelComponent', () => {
  let component: ChecklistModelComponent;
  let fixture: ComponentFixture<ChecklistModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
