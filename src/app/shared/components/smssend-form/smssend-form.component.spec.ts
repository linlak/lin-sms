import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmssendFormComponent } from './smssend-form.component';

describe('SmssendFormComponent', () => {
  let component: SmssendFormComponent;
  let fixture: ComponentFixture<SmssendFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmssendFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmssendFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
