import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {
  ColDef,
  ColGroupDef,
  GridApi,
  GridOptions,
  GridReadyEvent,
} from 'ag-grid-community';
import { BookmarkedStory } from '../models/story.model';
@Component({
  selector: 'app-pure-grid',
  standalone: true,
  imports: [CommonModule, AgGridAngular],
  templateUrl: './pure-grid.component.html',
  styleUrl: './pure-grid.component.scss',
})
export class PureGridComponent {
  @Input() rowData: BookmarkedStory[] = [];
  @Input() colDefs: (ColDef | ColGroupDef)[] = [];
  @Input() gridOptions: GridOptions = {};

  private _api!: GridApi;

  onGridReady(event: GridReadyEvent) {
    this._api = event.api;
    this._api.updateGridOptions(this.gridOptions);
  }
}
