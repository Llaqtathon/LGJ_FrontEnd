import { TestBed } from '@angular/core/testing';

import { PostFormsService } from './post-form.service';

describe('PostFormsService', () => {
  let service: PostFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});