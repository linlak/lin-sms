import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetouDetailComponent } from './metou-detail.component';

describe('MetouDetailComponent', () => {
  let component: MetouDetailComponent;
  let fixture: ComponentFixture<MetouDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetouDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetouDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
