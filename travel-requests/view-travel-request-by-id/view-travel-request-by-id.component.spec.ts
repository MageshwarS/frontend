import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTravelRequestByIdComponent } from './view-travel-request-by-id.component';

describe('ViewTravelRequestByIdComponent', () => {
  let component: ViewTravelRequestByIdComponent;
  let fixture: ComponentFixture<ViewTravelRequestByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTravelRequestByIdComponent]
    });
    fixture = TestBed.createComponent(ViewTravelRequestByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
