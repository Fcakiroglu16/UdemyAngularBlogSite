import { TestBed } from '@angular/core/testing';

import { MyvalidationService } from './myvalidation.service';

describe('MyvalidationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyvalidationService = TestBed.get(MyvalidationService);
    expect(service).toBeTruthy();
  });
});
