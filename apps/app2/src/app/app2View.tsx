import React from 'react';
import {useTheme} from '@airfly-company/airfly-hooks';

export const App2View = () => {
  const theme = useTheme();
  return (
    <div style={{color: theme.color.background}} className="app">
        <h1>Welcome App2</h1>
    </div>
  );
}
