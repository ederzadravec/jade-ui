const hexToRGB = (color) => {
  let newColor = color;

  if (newColor.indexOf('#') === 0) {
    newColor = newColor.slice(1);
  }

  if (newColor.length === 3) {
    newColor = newColor[0] + newColor[0] + newColor[1] + newColor[1] + newColor[2] + newColor[2];
  }

  if (newColor.length !== 6) {
    throw new Error('Invalid HEX color.');
  }

  return {
    red: newColor.slice(0, 2),
    green: newColor.slice(2, 4),
    blue: newColor.slice(4, 6),
  };
};

const readableColor = (hex) => {
  const color = hexToRGB(hex);

  const r = parseInt(color.red, 16);
  const g = parseInt(color.green, 16);
  const b = parseInt(color.blue, 16);

  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000' : '#fff';
};

const getContrastText = (color, text) => (readableColor(color) === '#fff' ? text.light : text.dark);

const defaultPalette = (theme = {}) => {
  const text = {
    dark: '#212121',
    light: '#f5f5f5',
  };

  return {
    text,
    ...theme.palette,
    primary: {
      light: '#80D4FF',
      main: '#58B0DB',
      dark: '#2B6D8F',
      text: getContrastText('#58B0DB', text),
      ...theme.palette?.primary,
    },
    error: {
      light: '#f44336',
      main: '#d32f2f',
      dark: '#b71c1c',
      text: getContrastText('#d32f2f', text),
      ...theme.palette?.error,
    },
    alert: {
      light: '#ffeb3b',
      main: '#fbc02d',
      dark: '#f57f17',
      text: getContrastText('#fbc02d', text),
      ...theme.palette?.alert,
    },
    success: {
      light: '#4caf50',
      main: '#388e3c',
      dark: '#1b5e20',
      text: getContrastText('#388e3c', text),
      ...theme.palette?.success,
    },
    disabled: {
      light: '#9e9e9e',
      main: '#616161',
      dark: '#212121',
      text: getContrastText('#616161', text),
      ...theme.palette?.disabled,
    },
  };
};

export const getTheme = (theme = {}) => {
  const palette = defaultPalette(theme);

  return {
    palette: {
      ...palette,
      readableColor,
      getContrastText,
      colors,
    },
    components: {
      header: {
        background: palette.primary.main,
        text: palette.primary.text,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        ...theme.components?.header,
      },
      button: {
        borderRadius: 5,
      },
      ...theme.components,
    },
    spacing: {
      unit: 8,
      ...theme.spacing,
    },
    typography: {
      fontFamily: 'Open Sans',
      text: {
        color: palette.text.dark,
        fontSize: 14,
        ...theme.typography?.text,
      },
      ...theme.typography,
    },
    screens: {
      xs: (data, include) =>
        typeof include === 'number' ? `@media only screen and (max-width: 600px) { ${data} }` : '',
      sm: (data, include) =>
        typeof include === 'number' ? `@media only screen and (min-width: 600px) { ${data} }` : '',
      md: (data, include) =>
        typeof include === 'number' ? `@media only screen and (min-width: 768px)  { ${data} }` : '',
      lg: (data, include) =>
        typeof include === 'number' ? `@media only screen and (min-width: 992px) { ${data} }` : '',
      xl: (data, include) =>
        typeof include === 'number' ? `@media only screen and (min-width: 1200px) { ${data} }` : '',
    },
  };
};
