import React from 'react';
import './app.css';
import {App1View} from './app1View';
import {AirflyProvider} from '@airfly-company/airfly-provider';

export const App = () => {
  return (
    <AirflyProvider>
        <App1View/>
    </AirflyProvider>
  );
};

export default App;
