import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorHomeComponent } from './director-home.component';

describe('DirectorHomeComponent', () => {
  let component: DirectorHomeComponent;
  let fixture: ComponentFixture<DirectorHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectorHomeComponent]
    });
    fixture = TestBed.createComponent(DirectorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
