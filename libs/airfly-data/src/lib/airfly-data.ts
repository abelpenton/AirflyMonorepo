export interface IColor {
  background: string;
  body: string;
}

export interface IAirflyTheme {
  mode: string;
  color: IColor;
}

export interface IAirflyState {
  theme: IAirflyTheme,
  language: string
}


export interface IAirflyAction {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}
