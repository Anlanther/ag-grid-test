import { Injectable, inject } from '@angular/core';
import { ColDef, ColGroupDef } from 'ag-grid-community';
import { Observable, map } from 'rxjs';
import {
  Column,
  GridColumnState,
} from '../../grid/services/models/grid-column-state.model';
import { ColumnMetadataService } from '../column-metadata/column-metadata.service';
import { ColumnMetadata } from '../column-metadata/models/column-metadata.model';
import { GlobalColumnFormatterService } from '../global-column-formatter/global-column-fromatter.service';

@Injectable({
  providedIn: 'root',
})
export class ColdefGeneratorService {
  private colMetadataService = inject(ColumnMetadataService);
  private globalColFormatterService = inject(GlobalColumnFormatterService);

  generate(columns: GridColumnState[]): Observable<(ColDef | ColGroupDef)[]> {
    return this.getMetadata(columns).pipe(
      map((metadata) => this.generateColumns(columns, metadata))
    );
  }

  private generateColumns(
    columns: GridColumnState[],
    metadata: ColumnMetadata[]
  ): (ColDef | ColGroupDef)[] {
    const colDefs: (ColDef | ColGroupDef)[] = [];
    columns.forEach((col) => {
      if (col.type === 'header') {
        colDefs.push({
          headerName: col.displayName,
          children: col.children.map((child) =>
            this.generateColDef(child, metadata)
          ),
        });
      } else if (col.type === 'column') {
        colDefs.push(this.generateColDef(col, metadata));
      }
    });

    return colDefs;
  }

  private generateColDef(column: Column, metadata: ColumnMetadata[]): ColDef {
    const columnMetadata = metadata.find(
      (data) => column.metadataKey === data.key
    );

    if (!columnMetadata) {
      throw new Error(`Could not find metadata for ${column.metadataKey}`);
    }

    const colDef = {
      field: column.overrideField ?? columnMetadata.key,
      headerName: column.overrideName ?? columnMetadata.name,
    };

    return this.globalColFormatterService.process(colDef, columnMetadata, []);
  }

  private getMetadata(
    columns: GridColumnState[]
  ): Observable<ColumnMetadata[]> {
    const uniqueKeys = new Set<string>();
    columns.forEach((col) => {
      if (col.type === 'header')
        col.children.forEach((child) => uniqueKeys.add(child.metadataKey));
      else if (col.type === 'column') uniqueKeys.add(col.metadataKey);
    });

    return this.colMetadataService.getForKeys([...uniqueKeys]);
  }
}
