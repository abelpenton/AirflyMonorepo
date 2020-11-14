import React, { useReducer, Dispatch } from 'react';
import {initAirflyState, reducer} from '@airfly-company/airfly-state';
import {IAirflyState, IAirflyAction} from '@airfly-company/airfly-data';

const AirflyContext = React.createContext<{ state: IAirflyState, dispatch: Dispatch<IAirflyAction> }>({
    state: initAirflyState,
    dispatch: () => null
});

const AirflyProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initAirflyState);

    return (
        <AirflyContext.Provider value={{ state, dispatch }}>
            {children}
        </AirflyContext.Provider>
    );
};

export { AirflyContext, AirflyProvider };
