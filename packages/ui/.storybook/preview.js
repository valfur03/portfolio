import React from 'react';
import { GlobalStyle, ThemeProvider, defaultTheme } from '../src';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: defaultTheme.color.background,
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
