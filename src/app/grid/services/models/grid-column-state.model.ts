export type GridColumnState = ColumnGroup | Column;

export interface ColumnGroup {
  type: 'header';
  displayName: string;
  children: Column[];
}

export interface Column {
  type: 'column';
  metadataKey: string;
  overrideField?: string;
  overrideName?: string;
}
