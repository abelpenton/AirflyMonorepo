import React from 'react';
import './app.css';
import {useTheme} from '@airfly-company/airfly-hooks';

export const App = () => {
  const theme = useTheme();
  return (
    <div style={{background: theme.color.background}} className="app">
      <h1 style={{color: theme.color.body}}> Welcome App1 </h1>
    </div>
  );
};

export default App;
