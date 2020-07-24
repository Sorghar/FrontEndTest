import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from "@angular/forms";

import { InvoiceItemModel } from "../models/invoicing-model";

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {

  @Input()
  set items(value: InvoiceItemModel[]) {
    this._items = value;
    this.paidInvoicesCount = this.items.filter(i => i.price >= 0.5).length;
    this.unpaidInvoicesCount = this.items.filter(i => i.price < 0.5).length;
  }

  get items(): InvoiceItemModel[]{
    return this._items;
  }

  @Output()
  searchEvent = new EventEmitter<string>();

  searchControl = new FormControl('');
  paidInvoicesCount: number;
  unpaidInvoicesCount: number;

  private _items: InvoiceItemModel[];

  constructor() { }

  ngOnInit() { }

  search() {
    this.searchEvent.emit(this.searchControl.value);
  }
}
