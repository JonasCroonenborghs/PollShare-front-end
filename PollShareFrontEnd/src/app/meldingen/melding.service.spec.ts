import { TestBed } from '@angular/core/testing';

import { MeldingService } from './melding.service';

describe('MeldingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeldingService = TestBed.get(MeldingService);
    expect(service).toBeTruthy();
  });
});
