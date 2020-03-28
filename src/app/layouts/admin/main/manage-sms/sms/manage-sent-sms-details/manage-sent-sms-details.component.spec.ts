import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSentSmsDetailsComponent } from './manage-sent-sms-details.component';

describe('ManageSentSmsDetailsComponent', () => {
  let component: ManageSentSmsDetailsComponent;
  let fixture: ComponentFixture<ManageSentSmsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSentSmsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSentSmsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
