import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

import { DragDropListComponent } from './drag-drop-list/drag-drop-list.component';
import { ItemBuyCreateUpdateComponent } from './item-buy-create-update/item-buy-create-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemBuyPurchasedComponent } from './item-buy-purchased/item-buy-purchased.component';


@NgModule({
   declarations: [
      AppComponent,
      DragDropListComponent,
      ItemBuyCreateUpdateComponent,
      ItemBuyPurchasedComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      DragDropModule,
      MatDialogModule,
      HttpClientModule,
      MatIconModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      ReactiveFormsModule,
      MatDatepickerModule,
      MatNativeDateModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
      ItemBuyCreateUpdateComponent,
      ItemBuyPurchasedComponent
   ]
})
export class AppModule { }
