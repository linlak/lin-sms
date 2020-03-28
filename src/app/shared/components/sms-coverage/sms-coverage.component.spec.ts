import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsCoverageComponent } from './sms-coverage.component';

describe('SmsCoverageComponent', () => {
  let component: SmsCoverageComponent;
  let fixture: ComponentFixture<SmsCoverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsCoverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
