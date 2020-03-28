import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStatatisticsComponent } from './app-statatistics.component';

describe('AppStatatisticsComponent', () => {
  let component: AppStatatisticsComponent;
  let fixture: ComponentFixture<AppStatatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppStatatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppStatatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
