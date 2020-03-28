import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetouListComponent } from './metou-list.component';

describe('MetouListComponent', () => {
  let component: MetouListComponent;
  let fixture: ComponentFixture<MetouListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetouListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetouListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
