import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntwoordComponent } from './antwoord.component';

describe('AntwoordComponent', () => {
  let component: AntwoordComponent;
  let fixture: ComponentFixture<AntwoordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntwoordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntwoordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
