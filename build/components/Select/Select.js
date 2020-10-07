"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _fa = require("react-icons/fa");

var R = _interopRequireWildcard(require("ramda"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("../../");

var _List = require("./List");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 16px;\n  right: 8px;\n  color: ", ";\n  cursor: pointer;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border: none;\n  border-bottom: 1px solid ", ";\n  background: none;\n  margin-top: 16px;\n  color: ", ";\n\n  &:focus {\n    outline: none;\n    border-bottom: 1px solid ", ";\n  }\n\n  ", ";\n  text-align: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  left: 0px;\n  cursor: pointer;\n  text-align: ", ";\n  transition: .4s\n\n  color: ", ";\n\n  ", "\n"]);

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

var Input = _styledComponents["default"].input(_templateObject2(), function (_ref4) {
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

var Icon = _styledComponents["default"].span(_templateObject3(), function (_ref9) {
  var focus = _ref9.focus,
      theme = _ref9.theme;
  return focus ? theme.palette.primary.main : theme.palette.text.dark;
});

var Select = function Select(_ref10) {
  var multiple = _ref10.multiple,
      valueProp = _ref10.value,
      label = _ref10.label,
      error = _ref10.error,
      onChange = _ref10.onChange,
      onFocus = _ref10.onFocus,
      onBlur = _ref10.onBlur,
      align = _ref10.align,
      dataProp = _ref10.data,
      configProp = _ref10.config,
      props = _objectWithoutProperties(_ref10, ["multiple", "value", "label", "error", "onChange", "onFocus", "onBlur", "align", "data", "config"]);

  var inputRef = _react["default"].useRef();

  var listRef = _react["default"].useRef();

  var _hooks$useState = _.hooks.useState({
    init: false,
    value: [],
    isFocused: false,
    showList: false,
    config: {},
    data: []
  }),
      _hooks$useState2 = _slicedToArray(_hooks$useState, 2),
      _hooks$useState2$ = _hooks$useState2[0],
      data = _hooks$useState2$.data,
      config = _hooks$useState2$.config,
      value = _hooks$useState2$.value,
      isFocused = _hooks$useState2$.isFocused,
      showList = _hooks$useState2$.showList,
      setState = _hooks$useState2[1];

  _react["default"].useEffect(function () {
    if (value === valueProp) return function () {};
    var newValue = [];
    var newConfig = {
      value: (configProp === null || configProp === void 0 ? void 0 : configProp.value) || 'value',
      label: (configProp === null || configProp === void 0 ? void 0 : configProp.label) || 'label'
    };

    if (multiple && (valueProp === null || valueProp === void 0 ? void 0 : valueProp.length)) {
      newValue = valueProp.map(function (x) {
        return x[newConfig.value];
      });
    }

    if (!multiple && valueProp && typeof valueProp !== 'string' && Object.keys(valueProp).length) {
      newValue = [valueProp[newConfig.value]];
    }

    if (!multiple && typeof valueProp === 'string') {
      newValue = [valueProp];
    }

    setState({
      config: newConfig,
      value: newValue
    });
  }, [valueProp]);

  _react["default"].useEffect(function () {
    var newValue = [];
    var newConfig = {
      value: (configProp === null || configProp === void 0 ? void 0 : configProp.value) || 'value',
      label: (configProp === null || configProp === void 0 ? void 0 : configProp.label) || 'label'
    };
    var newData = (R.is(Array, dataProp) ? dataProp : []).map(function (item) {
      return _objectSpread(_objectSpread({}, item), {}, {
        value: item[newConfig.value],
        label: item[newConfig.label]
      });
    });
    setState({
      data: newData,
      config: newConfig
    });
  }, [dataProp]);

  var getValueToReturn = function getValueToReturn(values) {
    var returnValue = null;

    if (multiple) {
      returnValue = values.length ? data.filter(function (x) {
        return values.includes(x.value);
      }) : [null];
    } else {
      returnValue = values.length ? data.filter(function (x) {
        return values[0] === x.value;
      }) : [null];
    }

    return returnValue;
  };

  var handleOnChange = function handleOnChange(item) {
    var newValue = [];

    if (multiple) {
      newValue = value.includes(item.value) ? value.filter(function (x) {
        return x !== item.value;
      }) : [].concat(_toConsumableArray(value), [item.value]);
    } else {
      newValue = value[0] === item.value ? [] : [item.value];
    }

    setState({
      value: newValue,
      showList: multiple,
      isFocused: multiple,
      init: true
    });
    var returnValue = getValueToReturn(newValue);
    onChange(null, multiple ? returnValue : returnValue[0]);
  };

  var handleOnFocus = function handleOnFocus(e) {
    setState({
      isFocused: true,
      showList: true,
      init: true
    });
    var returnValue = getValueToReturn(value);
    onFocus(e, multiple ? returnValue : returnValue[0]);
  };

  var handleOnClose = function handleOnClose(e) {
    setState({
      showList: false,
      isFocused: false,
      init: true
    });
    var returnValue = getValueToReturn(value);
    onBlur(e, multiple ? returnValue : returnValue[0]);
  };

  var getLabel = function getLabel() {
    var values = value.length ? data.filter(function (x) {
      return value.includes(x.value);
    }) : null;
    return values ? values.map(function (x) {
      return x.label;
    }).join(', ') : 'Selecione';
  };

  var hasValue = !R.isNil(value) && !R.isEmpty(value);
  var floatingLabel = hasValue || isFocused;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_.BaseInput, {
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
    disabled: showList,
    ref: inputRef,
    align: align,
    onFocus: handleOnFocus,
    value: floatingLabel ? getLabel() : ''
  }, props)), /*#__PURE__*/_react["default"].createElement(Icon, {
    as: _fa.FaAngleDown,
    focus: isFocused,
    onClick: function onClick() {
      return inputRef.current.focus();
    }
  }), /*#__PURE__*/_react["default"].createElement(_List.List, {
    innerRef: listRef,
    visible: showList,
    onClose: handleOnClose,
    data: data,
    value: value,
    onChange: handleOnChange
  })));
};

exports.Select = Select;
Select.defaultProps = {
  multiple: false,
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onFocus: function onFocus() {},
  data: []
};
Select.propTypes = {
  align: _propTypes["default"].oneOf(['left', 'center', 'right'])
};