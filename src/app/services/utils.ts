import { ColDef, ColGroupDef } from 'ag-grid-community';
import { GridColumnState } from '../story-grid/services/models/grid-column-state.model';

export function convertToColDefForStorybook(columnState: GridColumnState[]) {
  const colDefs: (ColDef | ColGroupDef)[] = [];
  columnState.forEach((col) => {
    if (col.type === 'header') {
      colDefs.push({
        headerName: col.displayName,
        children: col.children.map((child) => ({
          field: child.overrideField ?? child.metadataKey,
          headerName: child.overrideName ?? child.overrideName,
        })),
      });
    } else if (col.type === 'column') {
      colDefs.push({
        field: col.overrideField ?? col.metadataKey,
        headerName: col.overrideName ?? col.overrideName,
      });
    }
  });
  return colDefs;
}
