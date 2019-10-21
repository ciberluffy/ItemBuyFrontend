import { Component, OnInit, Inject, ModuleWithComponentFactories } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ItemBuy } from '../models/item-buy';

@Component({
  selector: 'app-item-buy-purchased',
  templateUrl: './item-buy-purchased.component.html',
  styleUrls: ['./item-buy-purchased.component.scss']
})
export class ItemBuyPurchasedComponent implements OnInit {

  formItemPurchased: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: ItemBuy,
              private dialogRef: MatDialogRef<ItemBuyPurchasedComponent>,
              private fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.defaults);

    this.formItemPurchased = this.fb.group({
      id: this.defaults.id || '',
      finalPieceValue: this.defaults.finalPieceValue || 0,
      count: this.defaults.count,
      datePurchased: new FormControl({value: this.defaults.datePurchased || new Date().toISOString(), disabled: true}),
      dateLastUpdate: new Date().toISOString(),
      isPurchased: true,
    });
  }

  save() {
    const itemBuy: ItemBuy = this.formItemPurchased.value;
    itemBuy.finalTotalValue = itemBuy.finalPieceValue * itemBuy.count;
    itemBuy.datePurchased = itemBuy.dateLastUpdate;
    this.dialogRef.close(itemBuy);
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
