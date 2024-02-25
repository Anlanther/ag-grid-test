import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
} from '@storybook/angular';
import { AgGridAngular } from 'ag-grid-angular';
import { GridShellComponent } from '../grid-shell/grid-shell.component';
import { PureGridComponent } from './pure-grid.component';

const meta: Meta<PureGridComponent> = {
  title: 'Grid Component',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [GridShellComponent],
      imports: [AgGridAngular],
    }),
    componentWrapperDecorator(
      (story) => `<div style="margin: 3em">${story}</div>`
    ),
  ],
};
