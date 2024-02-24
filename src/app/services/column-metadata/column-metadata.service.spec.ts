import { TestBed } from '@angular/core/testing';

import { ColumnMetadataService } from './column-metadata.service';

describe('ColumnMetadataService', () => {
  let service: ColumnMetadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColumnMetadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
