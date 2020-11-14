import React, {useContext} from 'react';
import {AirflyContext} from '@airfly-company/airfly-provider';

export const App1View = () => {
  const {state} = useContext(AirflyContext);
  return (
    <div style={{color: state.theme.color.background}} className="app">
        <h1>Welcome App1</h1>
    </div>
  );
}
