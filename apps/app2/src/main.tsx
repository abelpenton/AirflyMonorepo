import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import {AirflyTheme} from '@airfly-company/airfly-theme';
import {AirflyProvider} from '@airfly-company/airfly-provider';
import {AirflyLanguage} from '@airfly-company/airfly-language';

import App from './app/app';

ReactDOM.render(
  <React.StrictMode>
    <AirflyProvider>
      <BrowserRouter>
        <AirflyTheme>
          <AirflyLanguage/>
          <App />
        </AirflyTheme>
      </BrowserRouter>
    </AirflyProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
