import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentSentComponent } from './sent-sent.component';

describe('SentSentComponent', () => {
  let component: SentSentComponent;
  let fixture: ComponentFixture<SentSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentSentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
