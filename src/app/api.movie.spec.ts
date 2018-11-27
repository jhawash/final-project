import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieService = TestBed.get(movieService);
    expect(service).toBeTruthy();
  });
});
