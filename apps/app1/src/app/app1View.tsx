import React from 'react';
import {useTheme} from '@airfly-company/airfly-hooks';
import {AirflyTheme} from '@airfly-company/airfly-theme';

export const App1View = () => {
  const theme = useTheme();
  return (
    <div style={{background: theme.color.background}} className="app">
      <AirflyTheme/>
      <h1 style={{color: theme.color.body}}> Welcome App1 </h1>
    </div>
  );
}
