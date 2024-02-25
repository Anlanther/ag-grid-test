import { Injectable } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { ColumnMetadata } from '../column-metadata/models/column-metadata.model';
import { ColumnProcessor } from './models/column-processor.model';

@Injectable({
  providedIn: 'root',
})
export class GlobalColumnFormatterService {
  processors: ColumnProcessor[];

  constructor() {
    this.processors = [];
  }

  process(
    colDef: ColDef,
    colMetadata: ColumnMetadata,
    customFormatters: ColumnProcessor[]
  ) {
    [...this.processors, ...customFormatters].forEach((formatter) => {
      if (formatter.filter(colMetadata)) {
        formatter.columnProcessor(colMetadata, colDef);
      }
    });
    return colDef;
  }
}
