import {
  StoryObj,
  argsToTemplate,
  componentWrapperDecorator,
  type Meta,
} from '@storybook/angular';
import { PureGridComponent } from './pure-grid.component';

const meta: Meta<PureGridComponent> = {
  title: 'Pure Grid',
  component: PureGridComponent,
  tags: ['autodocs'],
  decorators: [
    componentWrapperDecorator(
      (story) => {
        return `
        @if (myTheme === 'dark') {
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
  render: (args: PureGridComponent) => ({
    props: { ...args },
    template: `<app-pure-grid ${argsToTemplate(args)}></app-pure-grid>`,
  }),
};

export default meta;
type Story = StoryObj<PureGridComponent>;

export const Default: Story = {
  args: {
    colDefs: [],
    rowData: [],
    gridOptions: {},
  },
};
