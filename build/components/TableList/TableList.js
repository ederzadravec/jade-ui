"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableList = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _TableHeader = require("./TableHeader");

var _TableItem = require("./TableItem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: ", "px;\n  background: rgba(0, 0, 0, 0.02);\n  font-size: 12px;\n  text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NoData = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.unit * 1.5;
});

var TableList = function TableList(_ref2) {
  var config = _ref2.config,
      data = _ref2.data,
      onSelect = _ref2.onSelect;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_TableHeader.TableHeader, {
    config: config
  }), /*#__PURE__*/_react["default"].createElement(_TableItem.TableItem, {
    config: config,
    data: data,
    onSelect: onSelect
  }), (data === null || data === void 0 ? void 0 : data.length) <= 0 && /*#__PURE__*/_react["default"].createElement(NoData, null, "Sem resultados"));
};

exports.TableList = TableList;
TableList.defaultProps = {
  onSelect: function onSelect() {}
};