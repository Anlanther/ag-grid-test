export type GridColumnState = ColumnGroup | Column;

export interface ColumnGroup {
  type: 'header';
  metadataKey: string;
  overrideName?: string;
}

export interface Column {
  type: 'column';
  metadataKey: string;
  overrideField?: string;
  overrideName?: string;
}
