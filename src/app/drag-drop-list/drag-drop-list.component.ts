import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialogRef, MatDialog, MatOptionSelectionChange } from '@angular/material';
import * as _ from 'lodash';

import { ItemBuy } from '../models/item-buy';

import { ItemBuyService } from '../services/item-buy.service';

import { ItemBuyCreateUpdateComponent } from '../item-buy-create-update/item-buy-create-update.component';
import { ItemBuyPurchasedComponent } from '../item-buy-purchased/item-buy-purchased.component';

@Component({
  selector: 'app-drag-drop-list',
  templateUrl: './drag-drop-list.component.html',
  styleUrls: ['./drag-drop-list.component.scss']
})
export class DragDropListComponent implements OnInit {

  tobuy: Array<ItemBuy>;
  purchased: Array<ItemBuy>;

  toBuyAmount: string;
  purchasedAmount: string;

  dialogItemBuyCURef: MatDialogRef<ItemBuyCreateUpdateComponent>;
  dialogItemPurchased: MatDialogRef<ItemBuyPurchasedComponent>;

  drop(event: CdkDragDrop<Array<ItemBuy>>, containerID: number) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

      event.container.data.forEach(
        (v, i) => {
          if (i >= event.currentIndex - 1) {
            v.order = i + 1;
            this.itemBuyService.putUpdate({id: v.id, order: v.order} as ItemBuy).subscribe((item) => {
            });
          }
        }
      );

      (containerID === 1)
        ? this.tobuy = event.container.data
        : this.purchased = event.container.data;

    } else {
      this.dialogItemPurchased = this.dialog.open(ItemBuyPurchasedComponent, {
        data: { id: event.previousContainer.data[event.previousIndex].id,
                count: event.previousContainer.data[event.previousIndex].count },
        disableClose: true
      });

      this.dialogItemPurchased.afterClosed().subscribe((itemPurchased: ItemBuy) => {
        if (itemPurchased) {

          this.itemBuyService.putUpdate(itemPurchased).subscribe((itemPurchasedUpdated: ItemBuy) => {
            itemPurchasedUpdated.id = itemPurchasedUpdated._id;
            event.previousContainer.data[event.previousIndex] = itemPurchasedUpdated;

            transferArrayItem(event.previousContainer.data,
              event.container.data,
              event.previousIndex,
              event.currentIndex);

            event.container.data.forEach(
              (v, i) => {
                if (i >= event.currentIndex - 1) {
                  v.order = i + 1;
                  this.itemBuyService.putUpdate({id: v.id, order: v.order} as ItemBuy).subscribe((item) => {
                  });
                }
              }
            );
            event.previousContainer.data.forEach(
              (v, i) => {
                if (i >= event.previousIndex - 1) {
                  v.order = i + 1;
                  this.itemBuyService.putUpdate({id: v.id, order: v.order} as ItemBuy).subscribe((item) => {
                  });
                }
              }
            );

            this.toBuyAmount = this.calculateAmount(((containerID !== 1) ? event.previousContainer.data : event.container.data));
            this.purchasedAmount = this.calculateAmount(((containerID === 1) ? event.previousContainer.data : event.container.data));
          });
        }
      });
    }
  }

  constructor(private itemBuyService: ItemBuyService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.itemBuyService.getToBuy()
      .subscribe(itemsBuy => {
        this.tobuy = _.map(itemsBuy as Array<any>, (item: any) => {
          const itemBuy = item as ItemBuy;
          itemBuy.id = item._id;
          return itemBuy;
        });
        this.toBuyAmount = this.calculateAmount(this.tobuy);
      });

    this.itemBuyService.getPurchased()
      .subscribe(itemsPurchased => {
        this.purchased = _.map(itemsPurchased as Array<any>, (item: any) => {
          const itemBuy = item as ItemBuy;
          itemBuy.id = item._id;
          return itemBuy;
        });
        this.purchasedAmount = this.calculateAmount(this.purchased);
      });

  }

  calculateAmount(items: Array<ItemBuy>): string {
    let amountMin = 0;
    let amountMax = 0;
    items.forEach((v, i) => {
      amountMin += v.count * ((!v.isPurchased) ? v.minPieceValue : v.finalPieceValue);
      amountMax += v.count * ((!v.isPurchased) ? v.maxPieceValue : v.finalPieceValue);
    });

    return ((items.length !== 0 && !items[0].isPurchased)
              ? '$' + amountMin.toString() + ' - $' + amountMax.toString()
              : '$' + amountMin.toString());
  }

  rangeToBuy(item: ItemBuy): string {
    return `\$${item.minPieceValue} - \$${item.maxPieceValue} x ${item.count} = \$${item.minTotalValue} - \$${item.maxTotalValue}`;
  }

  addItemBuy() {
    this.dialogItemBuyCURef = this.dialog.open(ItemBuyCreateUpdateComponent, {
      data: {},
      disableClose: true
    });

    this.dialogItemBuyCURef.afterClosed().subscribe((result: ItemBuy) => {
      if (result) {
        this.itemBuyService.postSave(result).subscribe((response: ItemBuy) => {
          alert(response.count + ' ' + response.name + ' saved correctly');
          response.id = response._id;
          this.tobuy.push(response);
          this.toBuyAmount = this.calculateAmount(this.tobuy);
        });
      }
    });
  }

  updateItem(event: MatOptionSelectionChange, item: ItemBuy) {
    if (event.isUserInput) {
      alert('here');
      console.log(item);
    }
  }

  purchaseItemBuy() {
    this.dialogItemBuyCURef = this.dialog.open(ItemBuyCreateUpdateComponent, {
      data: {},
      disableClose: true
    });

    this.dialogItemBuyCURef.afterClosed().subscribe((result: ItemBuy) => {
      if (result) {
        this.itemBuyService.postSave(result).subscribe((response: ItemBuy) => {
          alert(response.count + ' ' + response.name + ' saved correctly');
          response.id = response._id;
          this.tobuy.push(response);
          this.toBuyAmount = this.calculateAmount(this.tobuy);
        });
      }
    });
  }
}
