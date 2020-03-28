import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydomainsComponent } from './mydomains.component';

describe('MydomainsComponent', () => {
  let component: MydomainsComponent;
  let fixture: ComponentFixture<MydomainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydomainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydomainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
