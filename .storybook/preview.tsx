import React from 'react';
import GlobalStyle from '../src/styles/global';
import Theme from '../src/styles/theme';
import { ThemeProvider } from 'styled-components';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
