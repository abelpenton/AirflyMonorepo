import {IAirflyAction} from '@airfly-company/airfly-data';


export const LIGTH = 'LIGTH MODE';
export const DARK = 'DARK MODE';
export const CHANGE_LANGUAGE = 'CHANGE LANGUAGE';


export const changeLigthTheme = () : IAirflyAction => ({type: LIGTH});
export const changeDarkTheme = () : IAirflyAction => ({type: DARK});
export const changeLanguage = (language:string): IAirflyAction => ({type: CHANGE_LANGUAGE, payload: language});

