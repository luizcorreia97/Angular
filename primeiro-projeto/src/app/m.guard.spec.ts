import { TestBed, async, inject } from '@angular/core/testing';

import { MGuard } from './m.guard';

describe('MGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MGuard]
    });
  });

  it('should ...', inject([MGuard], (guard: MGuard) => {
    expect(guard).toBeTruthy();
  }));
});
