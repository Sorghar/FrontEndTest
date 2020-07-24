import { TestBed } from '@angular/core/testing';

import { InvoicingItemsService } from './invoicing-items.service';

describe('InvoicingItemsService', () => {
  let service: InvoicingItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoicingItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
