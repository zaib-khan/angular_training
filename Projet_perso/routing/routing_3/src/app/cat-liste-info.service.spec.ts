import { TestBed } from '@angular/core/testing';

import { CatListeInfoService } from './cat-liste-info.service';

describe('CatListeInfoService', () => {
  let service: CatListeInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatListeInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
