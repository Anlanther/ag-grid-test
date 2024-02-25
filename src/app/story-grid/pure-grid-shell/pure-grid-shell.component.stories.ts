import type { Meta, StoryObj } from '@storybook/angular';
import { convertToColDefForStorybook } from '../../services/utils';
import { BOOKMARKED_STORIES } from '../dummy-data/bookmarked-stories';
import { DEFAULT_STATE } from '../services/models/grid-state.model';
import { PureGridShellComponent } from './pure-grid-shell.component';

const meta: Meta<PureGridShellComponent> = {
  component: PureGridShellComponent,
  title: 'Pure Story Grid',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<PureGridShellComponent>;

export const Default: Story = {
  args: {
    colDefs: convertToColDefForStorybook(DEFAULT_STATE.columns),
    rowData: BOOKMARKED_STORIES,
  },
};
