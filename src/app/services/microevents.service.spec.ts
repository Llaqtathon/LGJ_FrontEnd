import { TestBed } from '@angular/core/testing';

import { MicroeventsService } from './microevents.service';

describe('MicroeventsService', () => {
  let service: MicroeventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicroeventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
