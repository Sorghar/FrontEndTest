import { Injectable } from '@angular/core';

import { InvoiceItemModel } from "../models/invoicing-model";

@Injectable()
export class InvoicingItemsService {

  constructor() { }

  getItems(): InvoiceItemModel[] {
    let items = [];
    for (let i = 0; i < 500; i++) {
      const name = Math.random().toString(36).substring(2, 10);
      const price = Math.round(Math.random() * 10) / 10;
      console.log(price);
      items.push({name: name, price: price});
    }

    return items;
  }
}
