import React from 'react'; 
import { render as testingLibraryRender } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../src/theme';

export function render(ui: React.ReactNode) {
  return testingLibraryRender(ui, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    ),
  });
}