"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxInput = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _BaseInput = require("../BaseInput/BaseInput");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 16px;\n  display: flex;\n  flex-wrap: wrap;\n  width: calc(100% - 30px);\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n\n  background: ", ";\n  border-radius: ", ";\n  transition: 0.4s;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border-radius: ", ";\n  border: 2px solid #aaa;\n  margin-right: 10px;\n  padding: 2px;\n  width: 19px;\n  height: 19px;\n  box-sizing: border-box;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject());

var Check = _styledComponents["default"].div(_templateObject2(), function (_ref) {
  var variant = _ref.variant;
  return variant === 'radio' ? '50%' : '5px';
});

var Checked = _styledComponents["default"].div(_templateObject3(), function (_ref2) {
  var theme = _ref2.theme,
      color = _ref2.color,
      value = _ref2.value;
  return value ? theme.palette[color].main : 'transparent';
}, function (_ref3) {
  var variant = _ref3.variant;
  return variant === 'radio' ? '50%' : '3px';
});

var Label = _styledComponents["default"].div(_templateObject4());

var BoxInput = function BoxInput(_ref4) {
  var color = _ref4.color,
      variant = _ref4.variant,
      value = _ref4.value,
      label = _ref4.label,
      children = _ref4.children,
      onChange = _ref4.onChange,
      error = _ref4.error,
      props = _objectWithoutProperties(_ref4, ["color", "variant", "value", "label", "children", "onChange", "error"]);

  return /*#__PURE__*/_react["default"].createElement(_BaseInput.BaseInput, {
    error: error
  }, /*#__PURE__*/_react["default"].createElement(Container, _extends({}, props, {
    onClick: function onClick(e) {
      onChange(e, !value);
    }
  }), /*#__PURE__*/_react["default"].createElement(Check, {
    variant: variant
  }, /*#__PURE__*/_react["default"].createElement(Checked, {
    color: color,
    variant: variant,
    value: value
  })), label && /*#__PURE__*/_react["default"].createElement(Label, {
    dangerouslySetInnerHTML: {
      __html: label
    }
  }), children && /*#__PURE__*/_react["default"].createElement(Label, null, children)));
};

exports.BoxInput = BoxInput;
BoxInput.defaultProps = {
  onChange: function onChange() {},
  variant: 'radio',
  color: 'primary'
};