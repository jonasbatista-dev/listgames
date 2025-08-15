import React from 'react';
import GlobalStyle from '../src/styles/global';
import Theme from '../src/styles/theme';
import { ThemeProvider } from 'styled-components';
import type { Preview } from '@storybook/react';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#000000' },
      ],
    },
  },
};

export default preview;
