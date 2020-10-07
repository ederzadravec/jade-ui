"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Row = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../Grid/Grid");

var _Column = require("./Column");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = (0, _styledComponents["default"])(_Grid.Grid)(_templateObject());

var Row = function Row(_ref) {
  var config = _ref.config;
  return /*#__PURE__*/_react["default"].createElement(Container, {
    container: true
  }, config.map(function (column, key) {
    return /*#__PURE__*/_react["default"].createElement(_Column.Column, _extends({
      key: key,
      last: config.length - 1 <= key
    }, column));
  }));
};

exports.Row = Row;
Row.defaultProps = {
  config: []
};
Row.propTypes = {
  config: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    size: _propTypes["default"].shape({
      xs: _propTypes["default"].oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
      sm: _propTypes["default"].oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
      md: _propTypes["default"].oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
      lg: _propTypes["default"].oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
      xl: _propTypes["default"].oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    }),
    props: _propTypes["default"].func.isRequired,
    type: _propTypes["default"].node.isRequired,
    hide: _propTypes["default"].func
  })).isRequired
};