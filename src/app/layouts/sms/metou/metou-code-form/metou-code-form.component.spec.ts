import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetouCodeFormComponent } from './metou-code-form.component';

describe('MetouCodeFormComponent', () => {
  let component: MetouCodeFormComponent;
  let fixture: ComponentFixture<MetouCodeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetouCodeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetouCodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
