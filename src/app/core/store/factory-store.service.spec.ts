import { TestBed } from '@angular/core/testing';

import { FactoryStoreService } from './factory-store.service';

describe('FactoryStoreService', () => {
  let service: FactoryStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactoryStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
