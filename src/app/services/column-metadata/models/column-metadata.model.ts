export interface ColumnMetadata {
  key: string;
  name: string;
  type: 'DATE' | 'STRING' | 'NUMERIC';
  attributes: ColumnAttributes;
}

type ColumnAttributes = { [key: string]: any };
