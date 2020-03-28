import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetouListsharedComponent } from './metou-listshared.component';

describe('MetouListsharedComponent', () => {
  let component: MetouListsharedComponent;
  let fixture: ComponentFixture<MetouListsharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetouListsharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetouListsharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
