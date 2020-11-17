import React, { useContext } from 'react';

import './airfly-theme.css';
import {AirflyContext} from '@airfly-company/airfly-provider';
import {changeDarkTheme, changeLigthTheme} from '@airfly-company/airfly-state';
import {darkMode} from '@airfly-company/airfly-constant';


export const AirflyTheme = ({children}) => {
  const {state, dispatch} = useContext(AirflyContext);
  const handleTheme = () => {
    state.theme.mode === darkMode ? dispatch(changeLigthTheme) : dispatch(changeDarkTheme);
  }
  return (
    <div>
      <label>
        <input onChange={handleTheme} className="input" type="checkbox"/>
        <span className="slider round"></span>
      </label>
      {children}
    </div>
  );
};

export default AirflyTheme;
