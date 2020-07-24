import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

import {InvoiceItemModel} from "../models/invoicing-model";
import {InvoicingItemsService} from "../services/invoicing-items/invoicing-items.service";

@Component({
  selector: 'app-invoicing',
  templateUrl: './invoicing.component.html',
  styleUrls: ['./invoicing.component.scss'],
  providers: [InvoicingItemsService]
})
export class InvoicingComponent implements OnInit {

  newItem = new FormControl('');
  searchedItems: InvoiceItemModel[];

  private items: InvoiceItemModel[];
  private searchTerm = '';

  constructor(private itemsService: InvoicingItemsService) { }

  ngOnInit() {
    this.items = this.itemsService.getItems();
    this.searchedItems = this.items;
  }

  addItem() {
    this.items.unshift({
      name: this.newItem.value,
      price: 0
    });
    this.newItem.setValue('');
    this.searchItems(this.searchTerm);
  }

  searchItems(value: string) {
    this.searchTerm = value;
    this.searchedItems = this.items.filter(i => i.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
}
