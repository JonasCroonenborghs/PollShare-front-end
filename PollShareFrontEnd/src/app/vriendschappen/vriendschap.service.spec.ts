import { TestBed } from '@angular/core/testing';

import { VriendschapService } from './vriendschap.service';

describe('VriendschapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VriendschapService = TestBed.get(VriendschapService);
    expect(service).toBeTruthy();
  });
});
