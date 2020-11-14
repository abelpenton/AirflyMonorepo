import {DARK, LIGTH, CHANGE_LANGUAGE} from './airfly-actions';
import {IAirflyAction, IAirflyState} from '@airfly-company/airfly-data';
import {darkMode, darkColor, ligthColor, ligthMode, ENGLISH} from '@airfly-company/airfly-constant';

export const initAirflyState : IAirflyState = {
  theme: {
    mode: darkMode,
    color: darkColor
  },
  language: ENGLISH
}

export const reducer = (state: IAirflyState = initAirflyState, action: IAirflyAction) : IAirflyState => {
  switch (action.type){
    case DARK:
      return {
        ...state,
        theme: {
          mode: darkMode,
          color: darkColor
        }
      }
    case LIGTH:
      return {
        ...state,
        theme: {
          mode: ligthMode,
          color: ligthColor
        }
      }
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload
      }
  }
}
