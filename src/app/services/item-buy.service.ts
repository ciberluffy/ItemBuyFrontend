import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { ItemBuy } from '../models/item-buy';

import { ITEMSPURCHASED, ITEMSTOBUY } from '../dummy/items-dummy';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ItemBuyService {
  // Base Url
  baseurl = 'http://localhost:3789/api/';

  getAllItemBuys = 'get-item-buys/';
  getPurchasedUrl = 'get-item-buys-purchased/';
  getToBuyUrl = '/get-item-buys-tobuy/';
  getItemBuyUrl = '/get-item-buy/'; // agregar el id
  postSaveUrl = '/register/';
  putUpdateUrl = '/update/'; // agregar el id
  deleteDeleteUrl = '/delete/'; // agregar el id

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getPurchased(): Observable<Array<ItemBuy>> {
    return this.httpClient.get<Array<ItemBuy>>(this.baseurl + this.getPurchasedUrl)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  getToBuy(): Observable<Array<ItemBuy>> {
    return this.httpClient.get<Array<ItemBuy>>(this.baseurl + this.getToBuyUrl)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  getItems(): Observable<Array<ItemBuy>> {
    return this.httpClient.get<Array<ItemBuy>>(this.baseurl + this.getAllItemBuys)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  getItem(id: string): Observable<ItemBuy> {
    return this.httpClient.get<ItemBuy>(this.baseurl + this.getItemBuyUrl + id)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  postSave(itemBuy: ItemBuy): Observable<ItemBuy> {
    return this.httpClient.post<ItemBuy>(this.baseurl + this.postSaveUrl, JSON.stringify(itemBuy), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  putUpdate(itemBuy: ItemBuy): Observable<ItemBuy> {
    return this.httpClient.put<ItemBuy>(this.baseurl + this.putUpdateUrl + itemBuy.id, JSON.stringify(itemBuy), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  deleteDelete(id: string): Observable<ItemBuy> {
    return this.httpClient.delete<ItemBuy>(this.baseurl + this.deleteDeleteUrl + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
