import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverSuccessComponent } from './recover-success.component';

describe('RecoverSuccessComponent', () => {
  let component: RecoverSuccessComponent;
  let fixture: ComponentFixture<RecoverSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoverSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
