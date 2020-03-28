import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageNewsListComponent } from './manage-news-list.component';

describe('ManageNewsListComponent', () => {
  let component: ManageNewsListComponent;
  let fixture: ComponentFixture<ManageNewsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageNewsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageNewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
