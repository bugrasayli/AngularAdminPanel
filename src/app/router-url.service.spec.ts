import { TestBed } from '@angular/core/testing';

import { RouterUrlService } from './router-url.service';

describe('RouterUrlService', () => {
  let service: RouterUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
