import { TestBed } from '@angular/core/testing';

import { DynamicSectionDataStorage } from './dynamic-section-data.storage';

describe('DynamicSectionDataStorage', () => {
  let service: DynamicSectionDataStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicSectionDataStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
