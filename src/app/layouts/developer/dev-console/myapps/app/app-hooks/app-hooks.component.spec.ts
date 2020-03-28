import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHooksComponent } from './app-hooks.component';

describe('AppHooksComponent', () => {
  let component: AppHooksComponent;
  let fixture: ComponentFixture<AppHooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
