export interface ItemBuy {
   id: string;
   name: string;
   count: number;
   minPieceValue: number;
   maxPieceValue: number;
   finalPieceValue: number;
   minTotalValue: number;
   maxTotalValue: number;
   finalTotalValue: number;
   isPurchased: boolean;
   order: number;
   dateToBuy: string;
   datePurchased: string;
   dateLastUpdate: string;
   _id: string;
}
