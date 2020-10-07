"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormGrid = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Row = require("./Row");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].form(_templateObject());

var FormGrid = function FormGrid(_ref) {
  var config = _ref.config,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["config", "children"]);

  return /*#__PURE__*/_react["default"].createElement(Container, props, config.map(function (row, key) {
    return /*#__PURE__*/_react["default"].createElement(_Row.Row, {
      key: key,
      config: row
    });
  }), children);
};

exports.FormGrid = FormGrid;
FormGrid.defaultProps = {
  config: []
};
FormGrid.propTypes = {
  config: _propTypes["default"].arrayOf(_propTypes["default"].arrayOf(_propTypes["default"].shape({
    schema: _propTypes["default"].string.isRequired,
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
  }))).isRequired
};