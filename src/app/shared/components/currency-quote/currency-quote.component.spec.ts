import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyQuoteComponent } from './currency-quote.component';

describe('CurrencyQuoteComponent', () => {
  let component: CurrencyQuoteComponent;
  let fixture: ComponentFixture<CurrencyQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
