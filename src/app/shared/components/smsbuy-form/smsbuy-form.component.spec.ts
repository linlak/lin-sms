import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsbuyFormComponent } from './smsbuy-form.component';

describe('SmsbuyFormComponent', () => {
  let component: SmsbuyFormComponent;
  let fixture: ComponentFixture<SmsbuyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsbuyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsbuyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
