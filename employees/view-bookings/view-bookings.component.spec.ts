import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookingsComponent } from './view-bookings.component';

describe('ViewBookingsComponent', () => {
  let component: ViewBookingsComponent;
  let fixture: ComponentFixture<ViewBookingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewBookingsComponent]
    });
    fixture = TestBed.createComponent(ViewBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
