import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelRequestDetailsForDirectorComponent } from './travel-request-details-for-director.component';

describe('TravelRequestDetailsForDirectorComponent', () => {
  let component: TravelRequestDetailsForDirectorComponent;
  let fixture: ComponentFixture<TravelRequestDetailsForDirectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelRequestDetailsForDirectorComponent]
    });
    fixture = TestBed.createComponent(TravelRequestDetailsForDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
