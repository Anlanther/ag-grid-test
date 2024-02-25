import { ColDef } from 'ag-grid-community';
import { ColumnMetadata } from '../../column-metadata/models/column-metadata.model';

export interface ColumnProcessor {
  filter: (metadata: ColumnMetadata) => boolean;
  columnProcessor: (metadata: ColumnMetadata, colDef: ColDef) => void;
}
