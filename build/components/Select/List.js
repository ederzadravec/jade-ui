"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 16px;\n  cursor: pointer;\n\n  background: ", ";\n\n  &:hover {\n    background: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  max-height: 250px;\n\n  top: 35px;\n  left: 0;\n\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n\n  background: #fff;\n  border: 1px solid ", ";\n  z-index: 1001;\n\n  display: ", ";\n  flex-direction: column;\n\n  overflow: auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: transparent;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100%;\n  z-index: 100;\n  display: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Mask = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var visible = _ref.visible;
  return visible ? 'block' : 'none';
});

var Container = _styledComponents["default"].div(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.colors.grey[300];
}, function (_ref3) {
  var visible = _ref3.visible;
  return visible ? 'block' : 'none';
});

var Content = _styledComponents["default"].div(_templateObject3());

var Item = _styledComponents["default"].span(_templateObject4(), function (_ref4) {
  var active = _ref4.active,
      theme = _ref4.theme;
  return active ? theme.palette.colors.grey[100] : 'none';
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.palette.colors.grey[50];
});

var List = function List(_ref6) {
  var visible = _ref6.visible,
      data = _ref6.data,
      value = _ref6.value,
      onClose = _ref6.onClose,
      onChange = _ref6.onChange;

  var handleSelect = function handleSelect(item) {
    onChange(item);
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Mask, {
    visible: visible,
    onClick: onClose
  }), /*#__PURE__*/_react["default"].createElement(Container, {
    visible: visible
  }, /*#__PURE__*/_react["default"].createElement(Content, null, data.map(function (item, key) {
    return /*#__PURE__*/_react["default"].createElement(Item, {
      key: key,
      active: value.includes(item.value),
      onClick: function onClick() {
        return handleSelect(item);
      }
    }, item.label);
  }))));
};

exports.List = List;