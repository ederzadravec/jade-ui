"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var R = _interopRequireWildcard(require("ramda"));

var _ = require("../");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 12px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: ", "px;\n  background: rgba(0, 0, 0, 0.02);\n\n  &:nth-child(even) {\n    background: rgba(0, 0, 0, 0.06);\n  }\n\n  &:hover {\n    cursor: pointer;\n    background: rgba(0, 0, 0, 0.1);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Content = (0, _styledComponents["default"])(_.Grid)(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.unit * 1.5;
});

var Value = _styledComponents["default"].label(_templateObject2());

var TableItem = function TableItem(_ref2) {
  var config = _ref2.config,
      data = _ref2.data,
      onSelect = _ref2.onSelect;

  var getValue = function getValue(value, _ref3) {
    var dataPath = _ref3.dataPath;
    var type = {
      String: function String() {
        return R.path(dataPath.split('.'), value);
      },
      Array: function Array() {
        return R.path(dataPath, value);
      },
      Function: function Function() {
        return dataPath(value);
      }
    };
    return type[R.type(dataPath)]();
  };

  var handleColumnClick = function handleColumnClick(value, item) {
    return function (e) {
      if (!item.onClick) return;
      e.stopPropagation();
      item.onClick(value);
    };
  };

  return data.map(function (value) {
    return /*#__PURE__*/_react["default"].createElement(Content, {
      key: JSON.stringify(value),
      container: true,
      onClick: function onClick() {
        return onSelect(value);
      }
    }, config.map(function (item) {
      return /*#__PURE__*/_react["default"].createElement(_.Grid, {
        key: JSON.stringify(item),
        size: item.size,
        onClick: handleColumnClick(value, item)
      }, /*#__PURE__*/_react["default"].createElement(Value, null, getValue(value, item)));
    }));
  });
};

exports.TableItem = TableItem;