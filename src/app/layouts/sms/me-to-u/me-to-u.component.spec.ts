import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeToUComponent } from './me-to-u.component';

describe('MeToUComponent', () => {
  let component: MeToUComponent;
  let fixture: ComponentFixture<MeToUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeToUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeToUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
