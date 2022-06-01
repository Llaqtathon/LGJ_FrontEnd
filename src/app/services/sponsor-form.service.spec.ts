import { TestBed } from '@angular/core/testing';

import { SponsorFormsService } from './sponsor-form.service';

describe('SponsorFormsService', () => {
  let service: SponsorFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SponsorFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});