import { ColumnMetadata } from '../models/column-metadata.model';

export const COLUMNS: ColumnMetadata[] = [
  { key: 'title', name: 'Title', type: 'STRING', attributes: [] },
  { key: 'author', name: 'Author', type: 'STRING', attributes: [] },
  { key: 'lastUpdated', name: 'Last Updated', type: 'DATE', attributes: [] },
  { key: 'bookmarks', name: 'Bookmarks', type: 'NUMERIC', attributes: [] },
  { key: 'chapters', name: 'Chapters', type: 'NUMERIC', attributes: [] },
  { key: 'words', name: 'Words', type: 'NUMERIC', attributes: [] },
];
