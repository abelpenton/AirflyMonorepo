import React, { useContext, useState } from 'react';

import './airfly-language.css';
import {changeLanguage} from '@airfly-company/airfly-state';
import {AirflyContext} from '@airfly-company/airfly-provider';
import {languages} from '@airfly-company/airfly-constant';

export const AirflyLanguage = () => {
  const {state, dispatch} = useContext(AirflyContext);
  const [languagesState] = useState([state.language, ...languages.filter(item => item.indexOf(state.language) < 0)])
  const handleLanguage = (language:string) => {
    dispatch(changeLanguage(language));
  }
  return (
    <select className="select-lang" onChange={e => handleLanguage(e.target.value)} data-placeholder="Choose a Language...">
      {languagesState.map(item => <option value={`${item}`}>{item}</option>)}
    </select>
  );
};

export default AirflyLanguage;
