import { TestBed } from '@angular/core/testing';

import { UploadService } from './upload.service';

describe('UploadService', () => {
  // let service: UploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // service = TestBed.inject(UploadService);
  });

  it('should be created', () => {
    const service: UploadService = TestBed.get(UploadService);
    expect(service).toBeTruthy();
  });
});
