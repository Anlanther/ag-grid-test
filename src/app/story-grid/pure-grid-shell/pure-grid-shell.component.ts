import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ColDef, ColGroupDef, GridOptions } from 'ag-grid-community';
import { PureGridComponent } from '../../pure-grid/pure-grid.component';
import { BookmarkedStory } from '../models/story.model';

@Component({
  selector: 'app-pure-grid-shell',
  templateUrl: './pure-grid-shell.component.html',
  standalone: true,
  imports: [CommonModule, PureGridComponent],
  styleUrl: './pure-grid-shell.component.scss',
})
export class PureGridShellComponent {
  @Input() rowData: BookmarkedStory[] = [];
  @Input() colDefs: (ColDef | ColGroupDef)[] = [];
  @Input() gridOptions: GridOptions = {};
}
