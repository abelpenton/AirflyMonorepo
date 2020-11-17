import {IAirflyAction} from '@airfly-company/airfly-data';
import {createAction} from '@airfly-company/airfly-utils'

export const LIGTH = 'LIGTH MODE';
export const DARK = 'DARK MODE';
export const CHANGE_LANGUAGE = 'CHANGE LANGUAGE';


export const changeLigthTheme = createAction(LIGTH);
export const changeDarkTheme = createAction(DARK);
export const changeLanguage = createAction<string>(CHANGE_LANGUAGE);

