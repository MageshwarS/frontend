import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTravelRequestComponent } from './add-new-travel-request.component';

describe('AddNewTravelRequestComponent', () => {
  let component: AddNewTravelRequestComponent;
  let fixture: ComponentFixture<AddNewTravelRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewTravelRequestComponent]
    });
    fixture = TestBed.createComponent(AddNewTravelRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
