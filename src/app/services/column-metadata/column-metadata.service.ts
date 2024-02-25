import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { COLUMNS } from './dummy-data/columns';
import { ColumnMetadata } from './models/column-metadata.model';

@Injectable({
  providedIn: 'root',
})
export class ColumnMetadataService {
  getForKeys(keys: string[]): Observable<ColumnMetadata[]> {
    const metadata = COLUMNS.filter((col) => keys.includes(col.key));
    const metadataMissing = keys.filter(
      (key) => !COLUMNS.some((col) => key.includes(col.key))
    );

    if (metadataMissing.length > 0) {
      throw Error(`Metadata missing for: ${metadataMissing}`);
    }

    // API Simulation
    return of(metadata);
  }
}
