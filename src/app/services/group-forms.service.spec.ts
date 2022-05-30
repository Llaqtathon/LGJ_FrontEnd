import { TestBed } from '@angular/core/testing';

import { GroupFormsService } from './group-forms.service';

describe('GroupFormsService', () => {
  let service: GroupFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
