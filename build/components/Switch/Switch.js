"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Switch = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("../../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 12px;\n  font-weight: bold;\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: 24px;\n  width: 48px;\n  border-radius: 12px;\n  background: ", ";\n  padding: 2px;\n  display: flex;\n  flex-direction: row;\n  margin: 0 8px;\n  transition: 0.4s;\n\n  &:after {\n    content: ' ';\n    width: 20px;\n    height: 20px;\n    border-radius: 10px;\n    background: #fff;\n    transition: 0.4s;\n    margin-left: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 12px;\n  margin-right: 24px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 13px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Content = _styledComponents["default"].div(_templateObject());

var Label = _styledComponents["default"].label(_templateObject2());

var Input = _styledComponents["default"].div(_templateObject3(), function (_ref) {
  var value = _ref.value,
      theme = _ref.theme;
  return value ? theme.palette.primary.main : theme.palette.disabled.main;
}, function (_ref2) {
  var value = _ref2.value;
  return value ? '24px' : '0px';
});

var InputLabel = _styledComponents["default"].label(_templateObject4(), function (_ref3) {
  var value = _ref3.value,
      theme = _ref3.theme;
  return value ? theme.palette.primary.main : theme.palette.disabled.main;
});

var Switch = function Switch(_ref4) {
  var value = _ref4.value,
      label = _ref4.label,
      labelFalse = _ref4.labelFalse,
      labelTrue = _ref4.labelTrue,
      error = _ref4.error,
      onChange = _ref4.onChange;

  var handleOnChange = function handleOnChange(e) {
    onChange(e, !value);
  };

  return /*#__PURE__*/_react["default"].createElement(_.BaseInput, {
    error: error
  }, /*#__PURE__*/_react["default"].createElement(Content, {
    onClick: handleOnChange
  }, /*#__PURE__*/_react["default"].createElement(Label, null, label), /*#__PURE__*/_react["default"].createElement(InputLabel, {
    value: false
  }, labelFalse), /*#__PURE__*/_react["default"].createElement(Input, {
    value: value
  }), /*#__PURE__*/_react["default"].createElement(InputLabel, {
    value: true
  }, labelTrue)));
};

exports.Switch = Switch;
Switch.defaultProps = {
  value: false,
  onChange: function onChange() {},
  labelTrue: 'Sim',
  labelFalse: 'Não'
};
Switch.propTypes = {
  value: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  label: _propTypes["default"].string,
  labelTrue: _propTypes["default"].string,
  labelFalse: _propTypes["default"].string,
  error: _propTypes["default"].string
};