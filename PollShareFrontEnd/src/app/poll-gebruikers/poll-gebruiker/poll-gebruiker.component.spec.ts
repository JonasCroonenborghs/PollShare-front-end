import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollGebruikerComponent } from './poll-gebruiker.component';

describe('PollGebruikerComponent', () => {
  let component: PollGebruikerComponent;
  let fixture: ComponentFixture<PollGebruikerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollGebruikerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollGebruikerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
