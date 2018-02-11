import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { PdfPageComponent } from './pdf-page/pdf-page.component';

@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule
  ],
  declarations: [PdfPageComponent]
})
export class DemoModule { }
