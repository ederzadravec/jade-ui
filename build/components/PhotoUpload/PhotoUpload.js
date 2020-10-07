"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoUpload = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var R = _interopRequireWildcard(require("ramda"));

var _fa = require("react-icons/fa");

var _ = require("../../");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  cursor: pointer;\n  color: ", ";\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  max-width: 100px;\n  max-height: 100px;\n  border-radius: 5px;\n  border: 1px solid #ddd;\n  padding: 5px;\n\n  margin-bottom: 4px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  margin-right: 8px;\n  margin-bottom: 8px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100px;\n  height: 100px;\n  color: ", ";\n  cursor: pointer;\n\n  &:hover {\n    color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  margin-top: 24px;\n  flex-wrap: wrap;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  height: auto;\n  left: 0px;\n  cursor: pointer;\n  text-align: ", ";\n  font-size: ", "px;\n\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Label = _styledComponents["default"].label(_templateObject(), function (_ref) {
  var align = _ref.align;
  return align;
}, function (_ref2) {
  var _float = _ref2["float"];
  return _float ? 10 : 12;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.text.dark;
});

var Content = _styledComponents["default"].div(_templateObject2());

var Icon = _styledComponents["default"].span(_templateObject3(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.text.dark;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.palette.primary.main;
});

var ContentImage = _styledComponents["default"].div(_templateObject4());

var Image = _styledComponents["default"].img(_templateObject5());

var Remove = _styledComponents["default"].span(_templateObject6(), function (_ref6) {
  var theme = _ref6.theme;
  return theme.palette.error.main;
});

var PhotoUpload = function PhotoUpload(_ref7) {
  var label = _ref7.label,
      error = _ref7.error,
      align = _ref7.align,
      floatLabel = _ref7.floatLabel,
      onChange = _ref7.onChange,
      onBlur = _ref7.onBlur,
      onFocus = _ref7.onFocus,
      valueProp = _ref7.value,
      maxFiles = _ref7.maxFiles,
      props = _objectWithoutProperties(_ref7, ["label", "error", "align", "floatLabel", "onChange", "onBlur", "onFocus", "value", "maxFiles"]);

  var inputRef = _react["default"].useRef();

  var _hooks$useState = _.hooks.useState({
    init: false,
    value: [],
    isFocused: false
  }),
      _hooks$useState2 = _slicedToArray(_hooks$useState, 2),
      _hooks$useState2$ = _hooks$useState2[0],
      init = _hooks$useState2$.init,
      value = _hooks$useState2$.value,
      isFocused = _hooks$useState2$.isFocused,
      setState = _hooks$useState2[1];

  _react["default"].useEffect(function () {
    if (valueProp && valueProp !== value) {
      setState({
        value: valueProp
      });
    }
  }, [valueProp]);

  var handleOnChange = function handleOnChange(e) {
    var newValue = [].concat(_toConsumableArray(value), _toConsumableArray(Object.values(e.target.files)));
    setState({
      value: newValue,
      init: true
    });
    onChange(null, newValue);
  };

  var handleOnRemove = function handleOnRemove(item) {
    var newValue = R.remove(item, 1, value);
    setState({
      value: newValue,
      init: true
    });
    onChange(null, newValue);
  };

  var handleOnFocus = function handleOnFocus(e) {
    setState({
      isFocused: true,
      init: true
    });
    onFocus(null, value);
  };

  var handleOnBlur = function handleOnBlur(e) {
    setState({
      isFocused: false,
      init: true
    });
    onBlur(null, value);
  };

  var hasValue = !R.isNil(value) && !R.isEmpty(value);
  var floatingLabel = hasValue || floatLabel || isFocused;
  return /*#__PURE__*/_react["default"].createElement(_.BaseInput, {
    error: error,
    align: align
  }, /*#__PURE__*/_react["default"].createElement(Label, {
    align: align,
    "float": floatingLabel,
    focus: isFocused
  }, label), /*#__PURE__*/_react["default"].createElement(Content, null, hasValue && value.map(function (image, key) {
    return /*#__PURE__*/_react["default"].createElement(ContentImage, {
      key: key
    }, /*#__PURE__*/_react["default"].createElement(Image, {
      src: R.is(String, image) ? image : URL.createObjectURL(image)
    }), /*#__PURE__*/_react["default"].createElement(Remove, {
      onClick: function onClick() {
        return handleOnRemove(key);
      }
    }, "excluir"));
  }), maxFiles > value.length && /*#__PURE__*/_react["default"].createElement(Icon, {
    onClick: function onClick() {
      return inputRef.current.click();
    },
    as: _fa.FaPlusSquare
  })), /*#__PURE__*/_react["default"].createElement("input", _extends({
    ref: inputRef,
    type: "file",
    onChange: handleOnChange,
    onBlur: handleOnBlur,
    onFocus: handleOnFocus,
    hidden: true
  }, props)));
};

exports.PhotoUpload = PhotoUpload;
PhotoUpload.defaultProps = {
  align: 'left',
  floatLabel: false,
  multiple: false,
  maxFiles: 1,
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onFocus: function onFocus() {}
};