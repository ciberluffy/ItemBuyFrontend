import { ItemBuy } from '../models/item-buy';

export const ITEMSTOBUY: Array<ItemBuy> = [
   ({
      name: 'Get to work', minPieceValue: 5, maxPieceValue: 9,
      id: '1', order: 1, count: 3, dateToBuy: new Date(2019, 9, 20).toISOString(),
      datePurchased: null, finalPieceValue: 0, finalTotalValue: 0,
      isPurchased: false, minTotalValue: 5 * 3, maxTotalValue: 9 * 3,
      dateLastUpdate: null
   } as ItemBuy),
   ({
      name: 'Pick up groceries', minPieceValue: 6, maxPieceValue: 12,
      id: '2', order: 2, count: 8, dateToBuy: new Date(2019, 9, 20).toISOString(),
      datePurchased: null, finalPieceValue: 0, finalTotalValue: 0,
      isPurchased: false, minTotalValue: 6 * 8, maxTotalValue: 12 * 8,
      dateLastUpdate: null
   } as ItemBuy),
   ({
      name: 'Go home', minPieceValue: 7, maxPieceValue: 8,
      id: '3', order: 3, count: 11, dateToBuy: new Date(2019, 9, 20).toISOString(),
      datePurchased: null, finalPieceValue: 0, finalTotalValue: 0,
      isPurchased: false, minTotalValue: 7 * 11, maxTotalValue: 8 * 11,
      dateLastUpdate: null
   } as ItemBuy),
   ({
      name: 'Fall asleep', minPieceValue: 100, maxPieceValue: 120,
      id: '4', order: 4, count: 2, dateToBuy: new Date(2019, 9, 20).toISOString(),
      datePurchased: null, finalPieceValue: 0, finalTotalValue: 0,
      isPurchased: false, minTotalValue: 100 * 2, maxTotalValue: 120 * 2,
      dateLastUpdate: null
   } as ItemBuy)
];

export const ITEMSPURCHASED: Array<ItemBuy> = [
   ({
      name: 'Get up', minPieceValue: 12, maxPieceValue: 14,
      id: '5', order: 1, count: 1, dateToBuy: new Date(2019, 9, 20).toISOString(),
      datePurchased: new Date(2019, 9, 25).toISOString(), finalPieceValue: 13, finalTotalValue: 13 * 1,
      isPurchased: true, minTotalValue: 12 * 1, maxTotalValue: 14 * 1,
      dateLastUpdate: null
   } as ItemBuy),
   ({
      name: 'Brush teeth', minPieceValue: 65, maxPieceValue: 69,
      id: '6', order: 2, count: 16, dateToBuy: new Date(2019, 9, 20).toISOString(),
      datePurchased: new Date(2019, 9, 25).toISOString(), finalPieceValue: 69, finalTotalValue: 69 * 16,
      isPurchased: true, minTotalValue: 65 * 16, maxTotalValue: 69 * 16,
      dateLastUpdate: null
   } as ItemBuy),
   ({
      name: 'Take a shower', minPieceValue: 43, maxPieceValue: 49,
      id: '7', order: 3, count: 8, dateToBuy: new Date(2019, 9, 20).toISOString(),
      datePurchased: new Date(2019, 9, 25).toISOString(), finalPieceValue: 43, finalTotalValue: 43 * 8,
      isPurchased: true, minTotalValue: 43 * 8, maxTotalValue: 49 * 8,
      dateLastUpdate: null
   } as ItemBuy),
   ({
      name: 'Check e-mail', minPieceValue: 91, maxPieceValue: 99,
      id: '8', order: 4, count: 7, dateToBuy: new Date(2019, 9, 20).toISOString(),
      datePurchased: new Date(2019, 9, 25).toISOString(), finalPieceValue: 94, finalTotalValue: 94 * 7,
      isPurchased: true, minTotalValue: 91 * 7, maxTotalValue: 99 * 7,
      dateLastUpdate: null
   } as ItemBuy),
   ({
      name: 'Walk dog', minPieceValue: 17, maxPieceValue: 19,
      id: '9', order: 5, count: 5, dateToBuy: new Date(2019, 9, 20).toISOString(),
      datePurchased: new Date(2019, 9, 25).toISOString(), finalPieceValue: 17, finalTotalValue: 17 * 5,
      isPurchased: true, minTotalValue: 17 * 5, maxTotalValue: 19 * 5,
      dateLastUpdate: null
   } as ItemBuy)
];
