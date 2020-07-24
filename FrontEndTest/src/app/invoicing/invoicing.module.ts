import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

import { InvoicingComponent } from './invoicing/invoicing.component';
import { InvoicingRoutingModule } from "./invoicing-routing.module";


@NgModule({
  declarations: [
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
