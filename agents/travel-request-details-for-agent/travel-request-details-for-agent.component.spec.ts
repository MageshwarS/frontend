import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelRequestDetailsForAgentComponent } from './travel-request-details-for-agent.component';

describe('TravelRequestDetailsForAgentComponent', () => {
  let component: TravelRequestDetailsForAgentComponent;
  let fixture: ComponentFixture<TravelRequestDetailsForAgentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelRequestDetailsForAgentComponent]
    });
    fixture = TestBed.createComponent(TravelRequestDetailsForAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
