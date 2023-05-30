import { TestBed } from '@angular/core/testing';

import { ExameService } from './exame.service';

describe('ExameService', () => {
  let service: ExameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
