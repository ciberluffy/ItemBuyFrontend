import { Component, OnInit, Inject, ModuleWithComponentFactories } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ItemBuy } from '../models/item-buy';

@Component({
  selector: 'app-item-buy-create-update',
  templateUrl: './item-buy-create-update.component.html',
  styleUrls: ['./item-buy-create-update.component.scss']
})
export class ItemBuyCreateUpdateComponent implements OnInit {

  formItemBuy: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: ItemBuy,
              private dialogRef: MatDialogRef<ItemBuyCreateUpdateComponent>,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.formItemBuy = this.fb.group({
      id: this.defaults.id || '',
      name: this.defaults.name || '',
      count: this.defaults.count || 0,
      minPieceValue: this.defaults.minPieceValue || 0,
      maxPieceValue: this.defaults.maxPieceValue || 0,
      finalPieceValue: this.defaults.finalPieceValue || 0,
      minTotalValue: this.defaults.minTotalValue || 0,
      maxTotalValue: this.defaults.maxTotalValue || 0,
      finalTotalValue: this.defaults.finalTotalValue || 0,
      isPurchased: this.defaults.isPurchased || false,
      order: this.defaults.order || 0,
      dateToBuy: new FormControl({value: this.defaults.dateToBuy || new Date().toISOString(), disabled: true}),
      datePurchased: this.defaults.datePurchased || '',
      dateLastUpdate: this.defaults.dateLastUpdate || new Date().toISOString()
    });
  }

  save() {
    const itemBuy: ItemBuy = this.formItemBuy.value;
    itemBuy.minTotalValue = itemBuy.minPieceValue * itemBuy.count;
    itemBuy.maxTotalValue = itemBuy.maxPieceValue * itemBuy.count;
    this.dialogRef.close(itemBuy);
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
