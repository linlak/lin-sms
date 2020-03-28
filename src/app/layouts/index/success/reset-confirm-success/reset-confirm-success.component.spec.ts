import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetConfirmSuccessComponent } from './reset-confirm-success.component';

describe('ResetConfirmSuccessComponent', () => {
  let component: ResetConfirmSuccessComponent;
  let fixture: ComponentFixture<ResetConfirmSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetConfirmSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetConfirmSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
