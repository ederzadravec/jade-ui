"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  flex-wrap: wrap;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].section(_templateObject());

var Content = _styledComponents["default"].div(_templateObject2(), function (_ref) {
  var theme = _ref.theme,
      size = _ref.size;
  return "\n    width: ".concat(100 / 12 * (size.xl || size.lg || size.md || size.sm || size.xs || 12), "%;\n\n    ").concat(Object.keys(size).map(function (key) {
    return theme.screens[key]("width:".concat(100 / 12 * size[key], "%"), size[key]);
  }).join(';'), "\n  ");
});

var Grid = function Grid(_ref2) {
  var container = _ref2.container,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["container", "children"]);

  return container ? /*#__PURE__*/_react["default"].createElement(Container, props, children) : /*#__PURE__*/_react["default"].createElement(Content, props, children);
};

exports.Grid = Grid;
Grid.defaultProps = {
  container: false,
  size: {
    md: 12
  }
};
Grid.propTypes = {
  container: _propTypes["default"].bool,
  size: _propTypes["default"].shape({
    xs: _propTypes["default"].oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    sm: _propTypes["default"].oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    md: _propTypes["default"].oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    lg: _propTypes["default"].oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    xl: _propTypes["default"].oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
  })
};