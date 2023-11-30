import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRequestsForAgentComponent } from './view-requests-for-agent.component';

describe('ViewRequestsForAgentComponent', () => {
  let component: ViewRequestsForAgentComponent;
  let fixture: ComponentFixture<ViewRequestsForAgentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewRequestsForAgentComponent]
    });
    fixture = TestBed.createComponent(ViewRequestsForAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
