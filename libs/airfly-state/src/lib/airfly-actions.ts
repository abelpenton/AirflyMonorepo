import {IAirflyAction} from '@airfly-company/airfly-data';
import {createAction} from '@airfly-company/airfly-utils'

export const LIGTH = 'LIGTH MODE';
export const DARK = 'DARK MODE';
export const CHANGE_LANGUAGE = 'CHANGE LANGUAGE';


export const changeLigthTheme : IAirflyAction = createAction(LIGTH);
export const changeDarkTheme : IAirflyAction = createAction(DARK);
export const changeLanguage : IAirflyAction = createAction<string>(CHANGE_LANGUAGE);

