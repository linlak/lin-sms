import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePusherComponent } from './manage-pusher.component';

describe('ManagePusherComponent', () => {
  let component: ManagePusherComponent;
  let fixture: ComponentFixture<ManagePusherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePusherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePusherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
