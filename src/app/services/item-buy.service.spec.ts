import { TestBed } from '@angular/core/testing';

import { ItemBuyService } from './item-buy.service';

describe('ItemBuyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemBuyService = TestBed.get(ItemBuyService);
    expect(service).toBeTruthy();
  });
});
