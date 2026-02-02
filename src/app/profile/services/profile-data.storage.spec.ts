import { TestBed } from '@angular/core/testing';

import { ProfileDataStorage } from './profile-data.storage';

describe('ProfileDataStorage', () => {
  let service: ProfileDataStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileDataStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
