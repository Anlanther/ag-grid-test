import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ColDef, ColGroupDef, GridOptions } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { BookmarkedStory } from '../models/story.model';
import { PureGridShellComponent } from '../pure-grid-shell/pure-grid-shell.component';
import { GridStateService } from '../services/grid-state.service';

@Component({
  selector: 'app-grid-shell',
  standalone: true,
  imports: [CommonModule, PureGridShellComponent],
  templateUrl: './grid-shell.component.html',
  styleUrl: './grid-shell.component.scss',
})
export class GridShellComponent {
  colDefs$: Observable<(ColDef | ColGroupDef)[]>;
  rowData$: Observable<BookmarkedStory[]>;

  gridOptions: GridOptions = {};

  private gridStateService = inject(GridStateService);

  constructor() {
    this.colDefs$ = this.gridStateService.getColDefs();
    this.rowData$ = this.gridStateService.getRows();
  }
}
