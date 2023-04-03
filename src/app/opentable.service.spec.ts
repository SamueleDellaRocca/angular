import { TestBed } from '@angular/core/testing';

import { OpentableService } from './opentable.service';

describe('OpentableService', () => {
  let service: OpentableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpentableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
