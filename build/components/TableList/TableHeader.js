"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableHeader = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 14px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: ", "px;\n  background: ", ";\n  color: #fff;\n  font-weight: bold;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = (0, _styledComponents["default"])(_.Grid)(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.unit * 1.5;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.primary.main;
});

var Label = _styledComponents["default"].label(_templateObject2());

var TableHeader = function TableHeader(_ref3) {
  var config = _ref3.config;
  return /*#__PURE__*/_react["default"].createElement(Container, {
    container: true
  }, config.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_.Grid, {
      key: JSON.stringify(item),
      size: item.size
    }, /*#__PURE__*/_react["default"].createElement(Label, null, item.name));
  }));
};

exports.TableHeader = TableHeader;