/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ManageTutorialListComponent } from './manage-tutorial-list.component';

describe('ManageTutorialListComponent', () => {
  let component: ManageTutorialListComponent;
  let fixture: ComponentFixture<ManageTutorialListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTutorialListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTutorialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
