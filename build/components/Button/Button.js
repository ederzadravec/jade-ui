"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSpinners = require("react-spinners");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 30px;\n  color: ", ";\n\n  ", ";\n\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-weight: bold;\n  cursor: pointer;\n\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n  padding: ", ";\n  font-size: ", ";\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  cursor: pointer;\n\n  border: ", ";\n  background: ", ";\n  overflow: hidden;\n  border-radius: ", ";\n  border-width: ", ";\n  height: ", ";\n  width: ", ";\n\n  ", "\n\n  &:focus {\n    outline: none;\n  }\n\n  &:hover {\n    background-color: ", ";\n\n    ", "\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].button(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return console.log('pqp', {
    theme: theme
  });
}, function (_ref2) {
  var theme = _ref2.theme,
      color = _ref2.color;
  return "1px solid ".concat(theme.palette[color].main);
}, function (_ref3) {
  var theme = _ref3.theme,
      color = _ref3.color;
  return theme.palette[color].main;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.components.button.borderRadius;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.components.button.borderWidth;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.components.button.height;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.components.button.width;
}, function (_ref8) {
  var variant = _ref8.variant,
      theme = _ref8.theme;
  if (variant === 'outline') return "\n        background-color: transparent;\n      ";
  if (variant === 'transparent') return "\n          background-color: transparent;\n          border: none;\n        ";
}, function (_ref9) {
  var theme = _ref9.theme,
      color = _ref9.color;
  return theme.palette[color].dark;
}, function (_ref10) {
  var variant = _ref10.variant,
      theme = _ref10.theme;

  if (['outline', 'transparent'].includes(variant)) {
    return "\n          background-color: rgba(0, 0, 0, 0.05);\n        ";
  }
});

var Label = _styledComponents["default"].label(_templateObject2(), function (_ref11) {
  var theme = _ref11.theme;
  return theme.palette.colors.white;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.components.button.labelPadding;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.components.button.labelFontSize;
}, function (_ref14) {
  var variant = _ref14.variant,
      color = _ref14.color,
      theme = _ref14.theme;
  if (variant === 'outline' || variant === 'transparent') return "\n        color: ".concat(theme.palette[color].main, ";\n      ");
});

var ButtonIcon = _styledComponents["default"].span(_templateObject3(), function (_ref15) {
  var theme = _ref15.theme;
  return theme.palette.colors.white;
}, function (_ref16) {
  var margin = _ref16.margin,
      theme = _ref16.theme;
  return "margin-".concat(margin, ": ").concat(theme.spacing.unit, "px");
}, function (_ref17) {
  var variant = _ref17.variant,
      color = _ref17.color,
      theme = _ref17.theme;
  if (variant === 'outline' || variant === 'transparent') return "\n        color: ".concat(theme.palette[color].main, ";\n      ");
});

var Button = function Button(_ref18) {
  var children = _ref18.children,
      variant = _ref18.variant,
      colorProp = _ref18.color,
      disabled = _ref18.disabled,
      iconBefore = _ref18.iconBefore,
      iconAfter = _ref18.iconAfter,
      style = _ref18.style,
      loading = _ref18.loading,
      props = _objectWithoutProperties(_ref18, ["children", "variant", "color", "disabled", "iconBefore", "iconAfter", "style", "loading"]);

  var theme = _react["default"].useContext(_styledComponents.ThemeContext);

  var color = disabled ? 'disabled' : colorProp;

  if (loading) {
    var spinnerCollor = variant === 'outline' || variant === 'transparent' ? theme.palette[color].main : theme.palette.colors.white;
    return /*#__PURE__*/_react["default"].createElement(Container, {
      variant: variant,
      color: color,
      style: style
    }, /*#__PURE__*/_react["default"].createElement(_reactSpinners.BeatLoader, {
      size: 8,
      margin: 4,
      color: spinnerCollor
    }));
  }

  return /*#__PURE__*/_react["default"].createElement(Container, _extends({
    variant: variant,
    color: color,
    disabled: disabled,
    style: style
  }, props), iconBefore && /*#__PURE__*/_react["default"].createElement(ButtonIcon, {
    as: iconBefore,
    variant: variant,
    color: color,
    margin: "right"
  }), /*#__PURE__*/_react["default"].createElement(Label, {
    variant: variant,
    color: color
  }, children), iconAfter && /*#__PURE__*/_react["default"].createElement(ButtonIcon, {
    as: iconAfter,
    variant: variant,
    color: color,
    margin: "left"
  }));
};

exports.Button = Button;
Button.defaultProps = {
  onClick: function onClick() {},
  variant: 'default',
  color: 'primary',
  disabled: false,
  loading: false
};
Button.propTypes = {
  variant: _propTypes["default"].oneOf(['default', 'outline', 'transparent']),
  color: _propTypes["default"].oneOf(['primary', 'error', 'alert', 'success']),
  onClick: _propTypes["default"].func,
  disabled: _propTypes["default"].bool,
  iconBefore: _propTypes["default"].string,
  iconAfter: _propTypes["default"].string,
  loading: _propTypes["default"].bool
};