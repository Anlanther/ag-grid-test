import { Routes } from '@angular/router';
import { GridShellComponent } from './story-grid/grid-shell/grid-shell.component';

export const routes: Routes = [{ path: '**', component: GridShellComponent }];
