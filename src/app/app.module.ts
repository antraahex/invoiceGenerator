import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { IntlModule } from '@progress/kendo-angular-intl';
import { GridModule } from '@progress/kendo-angular-grid';
import { InvoiceComponent } from './invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IntlModule,
    GridModule,
    PDFExportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
