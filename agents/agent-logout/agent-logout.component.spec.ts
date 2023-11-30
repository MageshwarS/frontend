import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentLogoutComponent } from './agent-logout.component';

describe('AgentLogoutComponent', () => {
  let component: AgentLogoutComponent;
  let fixture: ComponentFixture<AgentLogoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentLogoutComponent]
    });
    fixture = TestBed.createComponent(AgentLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
