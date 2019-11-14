import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StemComponent } from './stem.component';

describe('StemComponent', () => {
  let component: StemComponent;
  let fixture: ComponentFixture<StemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
