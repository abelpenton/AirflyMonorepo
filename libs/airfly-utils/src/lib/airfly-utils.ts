import { Action } from 'redux';

export const createAction = <P = never>(
  type: string
): ActionCreator<P> => {
  function actionCreator(): Action<string>;
  function actionCreator(payload: P): PayloadAction<P>;

  function actionCreator(
    payload?: P
  ): Action<string> | PayloadAction<P> {
    return { type, payload };
  }

  actionCreator.type = type;
  actionCreator.toString = () => type.toString();
  return actionCreator;
};

export interface ActionCreator<P = never> {
  (): Action<string>;
  (payload: P): PayloadAction<P>;
  type: string;
}
export interface PayloadAction<P> extends Action<string> {
  payload: P;
}
