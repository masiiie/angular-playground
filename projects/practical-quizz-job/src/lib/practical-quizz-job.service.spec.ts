import { TestBed } from '@angular/core/testing';

import { PracticalQuizzJobService } from './practical-quizz-job.service';

describe('PracticalQuizzJobService', () => {
  let service: PracticalQuizzJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracticalQuizzJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
