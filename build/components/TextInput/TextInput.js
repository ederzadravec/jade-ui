"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInput = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _throttleDebounce = require("throttle-debounce");

var R = _interopRequireWildcard(require("ramda"));

var _reactTextMask = _interopRequireDefault(require("react-text-mask"));

var _createNumberMask = _interopRequireDefault(require("text-mask-addons/dist/createNumberMask"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border: none;\n  border-bottom: 1px solid ", ";\n  background: none;\n  margin-top: 16px;\n  color: ", ";\n\n  &:focus {\n    outline: none;\n    border-bottom: 1px solid ", ";\n  }\n\n  ", ";\n  text-align: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  left: 0px;\n  cursor: pointer;\n  text-align: ", ";\n  transition: 0.4s;\n\n  color: ", ";\n\n  ", "\n"]);

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
  return theme.components.textInput.lineColor;
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

var unMask = function unMask(variant, value) {
  var masks = {
    "default": function _default() {
      return value;
    },
    money: function money() {
      return value.replace('.', '').replace(',', '.');
    },
    decimal: function decimal() {
      return value.replace('.', '').replace(',', '.');
    },
    cpf: function cpf() {
      return value.replace(/\D/g, '');
    },
    cnpj: function cnpj() {
      return value.replace(/\D/g, '');
    },
    phone: function phone() {
      return value.replace(/\D/g, '');
    },
    'postal-code': function postalCode() {
      return value.replace(/\D/g, '');
    }
  };
  return masks[variant] ? masks[variant]() : masks["default"]();
};

var getMask = function getMask(variant, config) {
  var masks = {
    "default": function _default() {
      return null;
    },
    numeric: function numeric() {
      return {
        mask: (0, _createNumberMask["default"])({
          prefix: '',
          includeThousandsSeparator: false,
          decimalSymbol: '',
          thousandsSeparatorSymbol: '',
          decimalLimit: 0,
          integerLimit: config.maxlength || 1
        })
      };
    },
    date: function date() {
      return {
        mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
      };
    },
    timedate: function timedate() {
      return {
        mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ':', /\d/, /\d/]
      };
    },
    money: function money() {
      return {
        mask: (0, _createNumberMask["default"])(_objectSpread({
          prefix: 'R$',
          includeThousandsSeparator: true,
          decimalSymbol: ',',
          thousandsSeparatorSymbol: '.',
          allowDecimal: true,
          allowNegative: true
        }, config))
      };
    },
    decimal: function decimal() {
      return {
        mask: (0, _createNumberMask["default"])(_objectSpread({
          prefix: '',
          integerLimit: 3,
          decimalLimit: 2,
          decimalSymbol: ',',
          allowDecimal: true,
          requireDecimal: true,
          allowNegative: true
        }, config))
      };
    },
    percent: function percent() {
      return {
        mask: (0, _createNumberMask["default"])(_objectSpread({
          prefix: '',
          sufix: '%',
          integerLimit: 3,
          decimalLimit: 2,
          decimalSymbol: '.',
          allowDecimal: true,
          requireDecimal: true
        }, config))
      };
    },
    cpf: function cpf() {
      return {
        mask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
      };
    },
    cnpj: function cnpj() {
      return {
        mask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
      };
    },
    phone: function phone() {
      return {
        placeholderChar: "\u2000",
        mask: ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/]
      };
    },
    'postal-code': function postalCode() {
      return {
        mask: [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]
      };
    }
  };
  return masks[variant] ? masks[variant]() : masks["default"]();
};

var TextInput = function TextInput(_ref9) {
  var variant = _ref9.variant,
      valueProp = _ref9.value,
      label = _ref9.label,
      error = _ref9.error,
      floatLabel = _ref9.floatLabel,
      placeholder = _ref9.placeholder,
      debounce = _ref9.debounce,
      onChange = _ref9.onChange,
      onBlur = _ref9.onBlur,
      onFocus = _ref9.onFocus,
      mask = _ref9.mask,
      maskConfig = _ref9.maskConfig,
      align = _ref9.align,
      props = _objectWithoutProperties(_ref9, ["variant", "value", "label", "error", "floatLabel", "placeholder", "debounce", "onChange", "onBlur", "onFocus", "mask", "maskConfig", "align"]);

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
      return onChange(null, value, unMask(value));
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
  var floatingLabel = mask || hasValue || !!placeholder || floatLabel || isFocused;

  var generateMask = _react["default"].useMemo(function () {
    return getMask(variant, maskConfig);
  }, [maskConfig, variant]);

  return /*#__PURE__*/_react["default"].createElement(_.BaseInput, {
    error: error,
    align: align
  }, /*#__PURE__*/_react["default"].createElement(Label, {
    align: align,
    "float": floatingLabel,
    focus: isFocused,
    onClick: function onClick() {
      return mask || generateMask ? inputRef.current.inputElement.focus() : inputRef.current.focus();
    }
  }, label), /*#__PURE__*/_react["default"].createElement(Input, _extends({
    ref: inputRef,
    innerRef: inputRef
  }, mask || generateMask ? {
    as: _reactTextMask["default"]
  } : {}, {
    align: align,
    value: value,
    placeholder: placeholder,
    onChange: handleOnChange,
    onFocus: handleOnFocus,
    onBlur: handleOnBlur
  }, generateMask, props)));
};

exports.TextInput = TextInput;
TextInput.defaultProps = {
  maskConfig: {},
  floatLabel: false,
  debounce: 250,
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onFocus: function onFocus() {},
  variant: 'default'
};
TextInput.propTypes = {
  variant: _propTypes["default"].oneOf(['default', 'numeric', 'percent', 'money', 'decimal', 'date', 'timedate', 'money', 'cpf', 'phone', 'postal-code']),
  align: _propTypes["default"].oneOf(['left', 'center', 'right'])
};