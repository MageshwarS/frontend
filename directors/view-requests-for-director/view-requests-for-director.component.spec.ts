import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRequestsForDirectorComponent } from './view-requests-for-director.component';

describe('ViewRequestsForDirectorComponent', () => {
  let component: ViewRequestsForDirectorComponent;
  let fixture: ComponentFixture<ViewRequestsForDirectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewRequestsForDirectorComponent]
    });
    fixture = TestBed.createComponent(ViewRequestsForDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
