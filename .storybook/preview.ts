import type { Preview } from '@storybook/angular';

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
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
