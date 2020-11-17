import { AirflyProvider } from '@airfly-company/airfly-provider';
import { AirflyTheme } from '@airfly-company/airfly-theme';
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

ReactDOM.render(
  <React.StrictMode>
    <AirflyProvider>
      <BrowserRouter>
        <AirflyTheme>
            <App />
          </AirflyTheme>
      </BrowserRouter>
    </AirflyProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
