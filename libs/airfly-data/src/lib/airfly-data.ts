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
  language: IAirflyLanguage
}


export interface IAirflyAction {
  type: string;
  payload?: never;
}

export interface IAirflyLanguage {
  name: string;
  icon: string;
}
