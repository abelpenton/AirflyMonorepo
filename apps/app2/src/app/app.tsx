import React from 'react';
import './app.css';
import {useTheme, useLanguage} from '@airfly-company/airfly-hooks';

export const App = () => {
  const theme = useTheme();
  const language = useLanguage();
  return (
    <div style={{background: theme.color.background}} className="app">
        <h1 style={{color: theme.color.body}}>{language === 'EN' ? "Welcome App2" : "Bienvenidos a App2"}</h1>
    </div>

  );
};

export default App;
