"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Space = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-top: ", "px;\n  margin-left:  ", "px;\n  margin-bottom:  ", "px;\n  margin-right:  ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var top = _ref.top,
      theme = _ref.theme;
  return theme.spacing.unit * top;
}, function (_ref2) {
  var left = _ref2.left,
      theme = _ref2.theme;
  return theme.spacing.unit * left;
}, function (_ref3) {
  var bottom = _ref3.bottom,
      theme = _ref3.theme;
  return theme.spacing.unit * bottom;
}, function (_ref4) {
  var right = _ref4.right,
      theme = _ref4.theme;
  return theme.spacing.unit * right;
});

var Space = function Space(props) {
  return /*#__PURE__*/_react["default"].createElement(Container, props);
};

exports.Space = Space;
Space.defaultProps = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
};
Space.propTypes = {
  top: _propTypes["default"].number,
  left: _propTypes["default"].number,
  right: _propTypes["default"].number,
  bottom: _propTypes["default"].number
};