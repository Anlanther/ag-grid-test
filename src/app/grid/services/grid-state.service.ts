import { Injectable, inject } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { ColDef, ColGroupDef } from 'ag-grid-community';
import { Observable, of, switchMap } from 'rxjs';
import { ColdefGeneratorService } from '../../services/coldef-generator/coldef-generator.service';
import { BookmarkedStory } from '../models/story.model';
import { BOOKMARKED_STORIES } from '../pure-grid/dummy-data/bookmarked-stories';
import { GridColumnState } from './models/grid-column-state.model';
import { DEFAULT_STATE, GridState } from './models/grid-state.model';
@Injectable({
  providedIn: 'root',
})
export class GridStateService extends ComponentStore<GridState> {
  colGeneratorService = inject(ColdefGeneratorService);

  constructor() {
    super(DEFAULT_STATE);
  }

  getColumns(): Observable<GridColumnState[]> {
    return this.select((state) => state.columns);
  }

  getColDefs(): Observable<(ColDef | ColGroupDef)[]> {
    return this.getColumns().pipe(
      switchMap((columns) => this.colGeneratorService.generate(columns))
    );
  }

  getRows(): Observable<BookmarkedStory[]> {
    return of(BOOKMARKED_STORIES);
  }
}
