import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBlogListComponent } from './manage-blog-list.component';

describe('ManageBlogListComponent', () => {
  let component: ManageBlogListComponent;
  let fixture: ComponentFixture<ManageBlogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBlogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
