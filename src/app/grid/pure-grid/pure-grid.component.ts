import { Component, Input } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // AG Grid Component
import { ColDef, ColGroupDef } from 'ag-grid-community'; // Column Definition Type Interface
import { BookmarkedStory } from '../models/story.model';
@Component({
  selector: 'app-pure-grid',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './pure-grid.component.html',
  styleUrl: './pure-grid.component.scss',
})
export class PureGridComponent {
  @Input() rowData: BookmarkedStory[] = [];
  @Input() colDefs: (ColDef | ColGroupDef)[] = [];
}
