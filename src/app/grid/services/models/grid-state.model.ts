import { BookmarkedStory } from '../../models/story.model';
import { GridColumnState } from './grid-column-state.model';

export interface GridState {
  columns: GridColumnState[];
  rows: BookmarkedStory[];
}

export const DEFAULT_STATE: GridState = {
  columns: [
    { type: 'column', metadataKey: 'title' },
    { type: 'column', metadataKey: 'author' },
    { type: 'column', metadataKey: 'lastUpdated' },
    {
      type: 'header',
      displayName: 'Statistics',
      children: [
        { type: 'column', metadataKey: 'words' },
        { type: 'column', metadataKey: 'bookmarks' },
        { type: 'column', metadataKey: 'chapters' },
      ],
    },
  ],
  rows: [],
};
