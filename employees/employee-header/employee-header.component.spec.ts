import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeHeaderComponent } from './employee-header.component';

describe('EmployeeHeaderComponent', () => {
  let component: EmployeeHeaderComponent;
  let fixture: ComponentFixture<EmployeeHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeHeaderComponent]
    });
    fixture = TestBed.createComponent(EmployeeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
