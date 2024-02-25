import { TestBed } from '@angular/core/testing';

import { ColdefGeneratorService } from './coldef-generator.service';

describe('ColdefGeneratorService', () => {
  let service: ColdefGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColdefGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
