"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTheme = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var hexToRGB = function hexToRGB(color) {
  var newColor = color;

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
    blue: newColor.slice(4, 6)
  };
};

var readableColor = function readableColor(hex) {
  var color = hexToRGB(hex);
  var r = parseInt(color.red, 16);
  var g = parseInt(color.green, 16);
  var b = parseInt(color.blue, 16);
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000' : '#fff';
};

var getContrastText = function getContrastText(color, text) {
  return readableColor(color) === '#fff' ? text.light : text.dark;
};

var defaultPalette = function defaultPalette() {
  var _theme$palette, _theme$palette2, _theme$palette3, _theme$palette4, _theme$palette5;

  var theme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var text = {
    dark: '#212121',
    light: '#f5f5f5'
  };
  return _objectSpread(_objectSpread({
    text: text
  }, theme.palette), {}, {
    primary: _objectSpread({
      light: '#80D4FF',
      main: '#58B0DB',
      dark: '#2B6D8F',
      text: getContrastText('#58B0DB', text)
    }, (_theme$palette = theme.palette) === null || _theme$palette === void 0 ? void 0 : _theme$palette.primary),
    error: _objectSpread({
      light: '#f44336',
      main: '#d32f2f',
      dark: '#b71c1c',
      text: getContrastText('#d32f2f', text)
    }, (_theme$palette2 = theme.palette) === null || _theme$palette2 === void 0 ? void 0 : _theme$palette2.error),
    alert: _objectSpread({
      light: '#ffeb3b',
      main: '#fbc02d',
      dark: '#f57f17',
      text: getContrastText('#fbc02d', text)
    }, (_theme$palette3 = theme.palette) === null || _theme$palette3 === void 0 ? void 0 : _theme$palette3.alert),
    success: _objectSpread({
      light: '#4caf50',
      main: '#388e3c',
      dark: '#1b5e20',
      text: getContrastText('#388e3c', text)
    }, (_theme$palette4 = theme.palette) === null || _theme$palette4 === void 0 ? void 0 : _theme$palette4.success),
    disabled: _objectSpread({
      light: '#9e9e9e',
      main: '#616161',
      dark: '#212121',
      text: getContrastText('#616161', text)
    }, (_theme$palette5 = theme.palette) === null || _theme$palette5 === void 0 ? void 0 : _theme$palette5.disabled)
  });
};

var getTheme = function getTheme() {
  var _theme$components, _theme$components2, _theme$typography;

  var theme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var palette = defaultPalette(theme);
  return {
    palette: _objectSpread(_objectSpread({}, palette), {}, {
      readableColor: readableColor,
      getContrastText: getContrastText,
      colors: {
        white: '#fff',
        black: '#000'
      }
    }),
    components: _objectSpread({
      header: _objectSpread({
        background: palette.primary.main,
        text: palette.primary.text,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold'
      }, (_theme$components = theme.components) === null || _theme$components === void 0 ? void 0 : _theme$components.header),
      button: _objectSpread({
        height: '36px',
        width: '140px',
        borderRadius: '5px',
        borderWidth: '2px',
        labelPadding: '0',
        labelFontSize: '12px'
      }, (_theme$components2 = theme.components) === null || _theme$components2 === void 0 ? void 0 : _theme$components2.button)
    }, theme.components),
    spacing: _objectSpread({
      unit: 8
    }, theme.spacing),
    typography: _objectSpread({
      fontFamily: 'Open Sans',
      text: _objectSpread({
        color: palette.text.dark,
        fontSize: 14
      }, (_theme$typography = theme.typography) === null || _theme$typography === void 0 ? void 0 : _theme$typography.text)
    }, theme.typography),
    screens: {
      xs: function xs(data, include) {
        return typeof include === 'number' ? "@media only screen and (max-width: 600px) { ".concat(data, " }") : '';
      },
      sm: function sm(data, include) {
        return typeof include === 'number' ? "@media only screen and (min-width: 600px) { ".concat(data, " }") : '';
      },
      md: function md(data, include) {
        return typeof include === 'number' ? "@media only screen and (min-width: 768px)  { ".concat(data, " }") : '';
      },
      lg: function lg(data, include) {
        return typeof include === 'number' ? "@media only screen and (min-width: 992px) { ".concat(data, " }") : '';
      },
      xl: function xl(data, include) {
        return typeof include === 'number' ? "@media only screen and (min-width: 1200px) { ".concat(data, " }") : '';
      }
    }
  };
};

exports.getTheme = getTheme;