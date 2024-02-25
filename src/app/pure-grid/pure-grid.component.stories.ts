import { StoryObj, argsToTemplate, type Meta } from '@storybook/angular';
import { PureGridComponent } from './pure-grid.component';

const meta: Meta<PureGridComponent> = {
  title: 'Pure Grid Component',
  component: PureGridComponent,
  tags: ['autodocs'],
  decorators: [
    // moduleMetadata({
    //   declarations: [],
    //   imports: [AgGridAngular],
    // }),
    // componentWrapperDecorator(
    //   (story) => `<div style="margin: 3em">${story}</div>`
    // ),
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
