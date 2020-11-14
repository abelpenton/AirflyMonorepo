import React from 'react';
import './app.css';
import {App2View} from './app2View';
import {AirflyProvider} from '@airfly-company/airfly-provider';

export const App = () => {
  return (
    <AirflyProvider>
      <div>
        <App2View/>
      </div>
    </AirflyProvider>

  );
};

export default App;
