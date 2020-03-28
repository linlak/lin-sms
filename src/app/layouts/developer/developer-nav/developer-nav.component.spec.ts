import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperNavComponent } from './developer-nav.component';

describe('DeveloperNavComponent', () => {
  let component: DeveloperNavComponent;
  let fixture: ComponentFixture<DeveloperNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
