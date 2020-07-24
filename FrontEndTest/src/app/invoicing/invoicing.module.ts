import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceRowComponent } from './invoice-row/invoice-row.component';
import { InvoicingComponent } from './invoicing/invoicing.component';
import { InvoicingRoutingModule } from "./invoicing-routing.module";


@NgModule({
  declarations: [
    InvoiceListComponent,
    InvoiceRowComponent,
    InvoicingComponent
  ],
  imports: [
    CommonModule,
    InvoicingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InvoicingModule { }
