import { TestBed } from '@angular/core/testing';

import { PrioritariaService } from './prioritaria.service';

describe('PrioritariaService', () => {
  let service: PrioritariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrioritariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
