import { TestBed } from '@angular/core/testing';

import { MoviesBackendService } from './movies-backend.service';

describe('MoviesBackendService', () => {
  let service: MoviesBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
