import type { Preview } from '@storybook/angular';
import { fn } from '@storybook/test';

export const preview: Preview = {
  parameters: {
    args: { onClick: fn() },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const globalTypes = {
  schema: {
    name: 'Scheme',
    description: 'Select light or dark theme',
    defaultValue: 'light',
    toolbar: { icon: 'mirror', items: ['light', 'dark'] },
    dynamicTitle: true,
  },
};
