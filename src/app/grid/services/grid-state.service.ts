import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { DEFAULT_STATE, GridState } from './models/grid-state.model';

@Injectable({
  providedIn: 'root',
})
export class GridStateService extends ComponentStore<GridState> {
  constructor() {
    super(DEFAULT_STATE);
  }
}
