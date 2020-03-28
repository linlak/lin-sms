import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetouFormComponent } from './metou-form.component';

describe('MetouFormComponent', () => {
  let component: MetouFormComponent;
  let fixture: ComponentFixture<MetouFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetouFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetouFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
