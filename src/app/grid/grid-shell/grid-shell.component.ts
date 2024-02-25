import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PureGridComponent } from '../pure-grid/pure-grid.component';
import { GridStateService } from '../services/grid-state.service';

@Component({
  selector: 'app-grid-shell',
  standalone: true,
  imports: [CommonModule, PureGridComponent],
  templateUrl: './grid-shell.component.html',
  styleUrl: './grid-shell.component.scss',
})
export class GridShellComponent {
  private gridStateService = inject(GridStateService);
}
