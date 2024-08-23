import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { mainRoute } from './router/Router'
import { ThemeProvider } from './globalTheme/ThemeContext';
import GlobalStyles from './globalTheme/ThemeStyles';

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <RouterProvider router={mainRoute} />
    </ThemeProvider>
  );
};

export default App;
