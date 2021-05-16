import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppProvider from './hooks';
import GlobalStyle from './styles/global';

ReactDOM.render(
  <AppProvider>
    <App />
    <GlobalStyle />
  </AppProvider>,
  document.getElementById('root'),
);
