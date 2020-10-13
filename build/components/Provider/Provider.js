"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var _helpers = require("../../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  * {\n    box-sizing: border-box;\n    font-size: 12px;\n  }\n\n  html {\n    height: 100vh;\n  }\n\n  body {\n    min-height: 100vh;\n    margin: 0;\n    padding: 0;\n    border: 0;\n  };\n\n  #root {\n    min-height: 100vh;\n    display: flex;\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject());

var Provider = function Provider(_ref) {
  var noDefaultCss = _ref.noDefaultCss,
      children = _ref.children,
      theme = _ref.theme;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !noDefaultCss && /*#__PURE__*/_react["default"].createElement(GlobalStyle, null), /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: (0, _helpers.getTheme)(theme)
  }, children));
};

exports.Provider = Provider;
Provider.defaultProps = {
  theme: {},
  noDefaultCss: false
};