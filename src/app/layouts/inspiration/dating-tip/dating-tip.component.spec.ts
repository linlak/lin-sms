import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatingTipComponent } from './dating-tip.component';

describe('DatingTipComponent', () => {
  let component: DatingTipComponent;
  let fixture: ComponentFixture<DatingTipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatingTipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatingTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
