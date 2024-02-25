import { StoryObj, argsToTemplate, type Meta } from '@storybook/angular';
import { PureGridComponent } from './pure-grid.component';

const meta: Meta<PureGridComponent> = {
  title: 'Pure Grid',
  component: PureGridComponent,
  tags: ['autodocs'],
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
