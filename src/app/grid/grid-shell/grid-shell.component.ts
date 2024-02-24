import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PureGridComponent } from '../pure-grid/pure-grid.component';

@Component({
  selector: 'app-grid-shell',
  standalone: true,
  imports: [CommonModule, PureGridComponent],
  templateUrl: './grid-shell.component.html',
  styleUrl: './grid-shell.component.scss',
})
export class GridShellComponent {}
