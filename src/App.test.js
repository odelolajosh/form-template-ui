import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from './App';
import store from './store';
import { theme } from './styles';

test('renders search input', () => {
  const { getByPlaceholderText } = render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>,
  );

  expect(getByPlaceholderText(/Search Templates/i)).toBeInTheDocument();
});
