import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InloggenDashboardComponent } from './inloggen-dashboard.component';

describe('InloggenDashboardComponent', () => {
  let component: InloggenDashboardComponent;
  let fixture: ComponentFixture<InloggenDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InloggenDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InloggenDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
