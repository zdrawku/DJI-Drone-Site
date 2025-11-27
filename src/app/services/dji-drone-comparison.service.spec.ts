import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DjiDroneComparisonService } from './dji-drone-comparison.service';

describe('DjiDroneComparisonService', () => {
  let service: DjiDroneComparisonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(DjiDroneComparisonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
