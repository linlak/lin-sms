import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSmsListitemComponent } from './manage-sms-listitem.component';

describe('ManageSmsListitemComponent', () => {
  let component: ManageSmsListitemComponent;
  let fixture: ComponentFixture<ManageSmsListitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSmsListitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSmsListitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
