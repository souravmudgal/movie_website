import { TestBed } from '@angular/core/testing';

import { MoivesListService } from './moives-list.service';

describe('MoivesListService', () => {
  let service: MoivesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoivesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
