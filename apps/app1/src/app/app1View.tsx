import React from 'react';
import {useTheme, useLanguage} from '@airfly-company/airfly-hooks';

export const App1View = () => {
  const theme = useTheme();
  const language = useLanguage();
  console.log(language)
  return (
    <div style={{color: theme.color.background}} className="app">
        <h1>Welcome App1</h1>
    </div>
  );
}
