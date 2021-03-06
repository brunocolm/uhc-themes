interface ITheme {
  color: {
    black: string;
    white: string;
    gray: string;
    lightgray: string;
    primary: string;
    secondary: string;
    tertiary: string;
    dangerPrimary: string;
    dangerSecondary: string;
  };
}

let theme: ITheme = {
  color: {
    black: "#313639",
    white: "#ffffff",
    gray: "#999999",
    lightgray: "#dddddd",
    primary: "#66cc66",
    secondary: "#33a8d5",
    tertiary: "#46B5AD",
    dangerPrimary: "#D9984F",
    dangerSecondary: "#D9534F",
  },
};

export const setPrimaryColor = (color: string) => {
  theme.color.primary = color;
};

export const setSecondaryColor = (color: string) => {
  theme.color.secondary = color;
};

export default theme;
