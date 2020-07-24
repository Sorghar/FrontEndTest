import { Component, Input, OnInit } from '@angular/core';

import { InvoiceItemModel } from "../models/invoicing-model";

@Component({
  selector: 'app-invoice-row',
  templateUrl: './invoice-row.component.html',
  styleUrls: ['./invoice-row.component.scss']
})
export class InvoiceRowComponent implements OnInit {

  @Input()
  invoice: InvoiceItemModel;

  invoiceState: string;
  invoiceStyle: string;

  constructor() { }

  ngOnInit() {
    if (this.invoice?.price < 0.5){
      this.invoiceState = 'Vystavená';
      this.invoiceStyle = 'badge-primary';
    } else {
      this.invoiceState = 'Uhradená';
      this.invoiceStyle = 'badge-success';
    }

  }

}
