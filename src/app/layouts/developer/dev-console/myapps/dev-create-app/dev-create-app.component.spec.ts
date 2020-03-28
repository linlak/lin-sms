import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevCreateAppComponent } from './dev-create-app.component';

describe('DevCreateAppComponent', () => {
  let component: DevCreateAppComponent;
  let fixture: ComponentFixture<DevCreateAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevCreateAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevCreateAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
