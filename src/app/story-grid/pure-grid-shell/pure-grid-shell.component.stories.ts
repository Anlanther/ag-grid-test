import type { Meta, StoryObj } from '@storybook/angular';
import { PureGridShellComponent } from './pure-grid-shell.component';

const meta: Meta<PureGridShellComponent> = {
  component: PureGridShellComponent,
  title: 'Pure Grid Shell',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<PureGridShellComponent>;

export const Default: Story = {};
