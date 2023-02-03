import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { HttpServiceService } from './httpservice.service';

describe('HttpserviceService', () => {
  let service: HttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[HttpClientModule]});
    service = TestBed.inject(HttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
