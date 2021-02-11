import { Component } from '@angular/core';
import { invoiceData } from './invoice-data';
import { InvoiceRow} from './invoice-row';

@Component({
  selector: 'app-root',
  template: `
    <div class="example-config">
      <button kendo-button (click)="pdf.saveAs('invoice.pdf')">
        Save As PDF...
      </button>
    </div>

    <kendo-pdf-export #pdf paperSize="A4" margin="2cm">
      <my-invoice></my-invoice>
    </kendo-pdf-export>
  `,
  styles: [`
    kendo-pdf-export {
      font-family: "DejaVu Sans", "Arial", sans-serif;
      font-size: 12px;
    }
  `]
})
export class AppComponent {
  public data: InvoiceRow[] = invoiceData;
  public edited = false;

}
