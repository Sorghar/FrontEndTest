import { Injectable } from '@angular/core';
import {InvoiceItemModel} from "../models/invoicing-model";

@Injectable()
export class InvoicingItemsService {

  constructor() { }

  getItems(): InvoiceItemModel[] {
    let items = [];
    for (let i = 0; i < 500; i++){
      const name = Math.random().toString(36).substring(2);
      items.push({name:name, price: Math.random()});
    }

    return items;
  }
}
