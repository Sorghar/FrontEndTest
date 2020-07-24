import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

import {InvoicingItemsService} from "./invoicing-items.service";
import {InvoiceItemModel} from "../models/invoicing-model";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-invoicing',
  templateUrl: './invoicing.component.html',
  styleUrls: ['./invoicing.component.scss'],
  providers: [ InvoicingItemsService ]
})
export class InvoicingComponent implements OnInit {

  newItem = new FormControl('');
  paidInvoicesCount: number;
  searchedItems: InvoiceItemModel[];
  searchTerm = new FormControl('');
  unpaidInvoicesCount: number;

  private items: InvoiceItemModel[];

  constructor(private itemsService: InvoicingItemsService) { }

  ngOnInit() {
    this.items = this.itemsService.getItems();
    this.searchItems();
  }

  getItemStatus(item: InvoiceItemModel): string {
    return item.price < 0.5 ? 'Vystavená' : 'Zaplatená';
  }

  getItemClass(item: InvoiceItemModel): string {
    return item.price < 0.5 ? 'badge-primary' : 'badge-success';
  }

  searchItems() {
    this.searchedItems = this.items.filter(i => i.name.toLowerCase().includes(this.searchTerm.value.toLowerCase()));
    this.paidInvoicesCount = this.searchedItems.filter(i => i.price >= 0.5).length;
    this.unpaidInvoicesCount = this.searchedItems.filter(i => i.price < 0.5).length;
  }

  addItem() {
    this.items.push({
      name: this.newItem.value,
      price: 0 //Math.random?
    });
    this.searchItems();
  }
}
