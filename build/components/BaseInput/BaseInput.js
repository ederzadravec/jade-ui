"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseInput = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 4px;\n  font-size: 10px;\n  color: ", ";\n  text-align: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n\n  min-height: 56px;\n\n  margin-bottom: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.unit * 1;
});

var Error = _styledComponents["default"].label(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.error.main;
}, function (_ref3) {
  var align = _ref3.align;
  return align;
});

var BaseInput = function BaseInput(_ref4) {
  var error = _ref4.error,
      children = _ref4.children,
      align = _ref4.align,
      props = _objectWithoutProperties(_ref4, ["error", "children", "align"]);

  return /*#__PURE__*/_react["default"].createElement(Container, props, children, /*#__PURE__*/_react["default"].createElement(Error, {
    align: align
  }, error));
};

exports.BaseInput = BaseInput;
BaseInput.defaultProps = {
  align: 'left'
};