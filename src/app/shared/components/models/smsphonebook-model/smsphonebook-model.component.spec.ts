import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsphonebookModelComponent } from './smsphonebook-model.component';

describe('SmsphonebookModelComponent', () => {
  let component: SmsphonebookModelComponent;
  let fixture: ComponentFixture<SmsphonebookModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsphonebookModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsphonebookModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
