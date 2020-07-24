import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InvoicingRoutingModule} from "./invoicing-routing.module";
import { InvoicingComponent } from './invoicing/invoicing.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [InvoicingComponent],
  imports: [
    CommonModule,
    InvoicingRoutingModule,
    ReactiveFormsModule
  ]
})
export class InvoicingModule { }
