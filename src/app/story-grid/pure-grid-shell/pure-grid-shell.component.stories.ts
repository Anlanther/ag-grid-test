import {
  componentWrapperDecorator,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { convertToColDefForStorybook } from '../../services/utils';
import { BOOKMARKED_STORIES } from '../dummy-data/bookmarked-stories';
import { DEFAULT_STATE } from '../services/models/grid-state.model';
import { PureGridShellComponent } from './pure-grid-shell.component';

const meta: Meta<PureGridShellComponent> = {
  component: PureGridShellComponent,
  title: 'Pure Story Grid',
  tags: ['autodocs'],
  decorators: [
    componentWrapperDecorator(
      (story) => {
        return `
      @if (myTheme === 'dark'){
        <div class="ag-theme-quartz-dark">
          ${story}
        </div>
      } @else if (myTheme === 'light') {
        <div class="ag-theme-quartz">
          ${story}
        </div>
      }
      `;
      },
      ({ globals }) => ({ myTheme: globals['schema'] })
    ),
  ],
};

export default meta;
type Story = StoryObj<PureGridShellComponent>;

export const Default: Story = {
  args: {
    colDefs: convertToColDefForStorybook(DEFAULT_STATE.columns),
    rowData: BOOKMARKED_STORIES,
  },
};
