import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevMyAppsComponent } from './dev-my-apps.component';

describe('DevMyAppsComponent', () => {
  let component: DevMyAppsComponent;
  let fixture: ComponentFixture<DevMyAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevMyAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevMyAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
