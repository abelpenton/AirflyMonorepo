import {useContext} from 'react';
import {AirflyContext} from '@airfly-company/airfly-provider';

export const useTheme = () => {
  const {state} = useContext(AirflyContext);
  return state.theme;
}

export const useLanguage = () => {
  const {state} = useContext(AirflyContext);
  return state.language
}
