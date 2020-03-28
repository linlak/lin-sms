import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevConsoleHomeComponent } from './dev-console-home.component';

describe('DevConsoleHomeComponent', () => {
  let component: DevConsoleHomeComponent;
  let fixture: ComponentFixture<DevConsoleHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevConsoleHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevConsoleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
