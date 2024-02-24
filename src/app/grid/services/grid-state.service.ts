import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { GridState } from './models/grid-state.model';

@Injectable({
  providedIn: 'root',
})
export class GridStateService extends ComponentStore<GridState> {
  constructor() {}
}
