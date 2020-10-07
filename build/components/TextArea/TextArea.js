"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var R = _interopRequireWildcard(require("ramda"));

var _throttleDebounce = require("throttle-debounce");

var _ = require("../../");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border: none;\n  border-bottom: 1px solid ", ";\n  background: none;\n  margin-top: 16px;\n  color: ", ";\n  resize: vertical;\n\n  &:focus {\n    outline: none;\n    border-bottom: 1px solid ", ";\n  }\n\n  ", ";\n  text-align: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  height: auto;\n  left: 0px;\n  cursor: pointer;\n  text-align: ", ";\n  transition: 0.4s;\n\n  color: ", ";\n\n  ", "\n"]);

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
  var focus = _ref2.focus,
      theme = _ref2.theme;
  return focus ? theme.palette.primary.main : theme.palette.text.dark;
}, function (_ref3) {
  var _float = _ref3["float"];
  return _float ? "\n      margin-top: 0px;\n      font-size: 10px\n  " : "\n      margin-top: 16px;\n      font-size: 12px\n    ";
});

var Input = _styledComponents["default"].textarea(_templateObject2(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.colors.grey[300];
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.palette.text.dark;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.palette.primary.main;
}, function (_ref7) {
  var error = _ref7.error,
      theme = _ref7.theme;
  return error ? "border-color: ".concat(theme.palette.error.main) : '';
}, function (_ref8) {
  var align = _ref8.align;
  return align;
});

var createDebounce = function createDebounce(debounce) {
  return (0, _throttleDebounce.debounce)(debounce, function (exec) {
    return exec();
  });
};

var TextArea = function TextArea(_ref9) {
  var label = _ref9.label,
      error = _ref9.error,
      align = _ref9.align,
      valueProp = _ref9.value,
      debounce = _ref9.debounce,
      floatLabel = _ref9.floatLabel,
      placeholder = _ref9.placeholder,
      onFocus = _ref9.onFocus,
      onChange = _ref9.onChange,
      onBlur = _ref9.onBlur,
      props = _objectWithoutProperties(_ref9, ["label", "error", "align", "value", "debounce", "floatLabel", "placeholder", "onFocus", "onChange", "onBlur"]);

  var inputRef = _react["default"].useRef();

  var _hooks$useState = _.hooks.useState({
    init: false,
    value: '',
    isFocused: false
  }),
      _hooks$useState2 = _slicedToArray(_hooks$useState, 2),
      _hooks$useState2$ = _hooks$useState2[0],
      init = _hooks$useState2$.init,
      value = _hooks$useState2$.value,
      isFocused = _hooks$useState2$.isFocused,
      setState = _hooks$useState2[1];

  _react["default"].useEffect(function () {
    if (value !== valueProp) setState({
      value: valueProp
    });
  }, [valueProp]);

  var onChangeDebounce = _react["default"].useCallback(createDebounce(debounce), []);

  _react["default"].useEffect(function () {
    if (init && value !== valueProp) onChangeDebounce(function () {
      return onChange(null, value);
    });
  }, [value]);

  var handleOnChange = function handleOnChange(e) {
    setState({
      value: e.target.value,
      init: true
    });
  };

  var handleOnFocus = function handleOnFocus(e) {
    setState({
      isFocused: true,
      init: true
    });
    onFocus(e, value);
  };

  var handleOnBlur = function handleOnBlur(e) {
    setState({
      isFocused: false,
      init: true
    });
    onBlur(e, value);
  };

  var hasValue = !R.isNil(value) && !R.isEmpty(value);
  var floatingLabel = hasValue || !!placeholder || floatLabel || isFocused;
  return /*#__PURE__*/_react["default"].createElement(_.BaseInput, {
    error: error,
    align: align
  }, /*#__PURE__*/_react["default"].createElement(Label, {
    align: align,
    "float": floatingLabel,
    focus: isFocused,
    onClick: function onClick() {
      return inputRef.current.focus();
    }
  }, label), /*#__PURE__*/_react["default"].createElement(Input, _extends({
    ref: inputRef,
    align: align,
    value: value,
    placeholder: placeholder,
    onChange: handleOnChange,
    onFocus: handleOnFocus,
    onBlur: handleOnBlur
  }, props)));
};

exports.TextArea = TextArea;
TextArea.defaultProps = {
  align: 'left',
  floatLabel: false,
  debounce: 250,
  rows: 5,
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onFocus: function onFocus() {}
};