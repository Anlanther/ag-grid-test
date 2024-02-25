import { TestBed } from '@angular/core/testing';

import { GlobalColumnFormatterService } from './global-column-fromatter.service';

describe('GlobalColumnFormatterService', () => {
  let service: GlobalColumnFormatterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalColumnFormatterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
