import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSentSmsComponent } from './manage-sent-sms.component';

describe('ManageSentSmsComponent', () => {
  let component: ManageSentSmsComponent;
  let fixture: ComponentFixture<ManageSentSmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSentSmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSentSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
