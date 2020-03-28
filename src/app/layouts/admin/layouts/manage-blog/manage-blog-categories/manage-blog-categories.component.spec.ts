import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBlogCategoriesComponent } from './manage-blog-categories.component';

describe('ManageBlogCategoriesComponent', () => {
  let component: ManageBlogCategoriesComponent;
  let fixture: ComponentFixture<ManageBlogCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBlogCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBlogCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
