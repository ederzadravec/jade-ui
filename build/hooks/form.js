"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useForm = void 0;

var _react = _interopRequireDefault(require("react"));

var R = _interopRequireWildcard(require("ramda"));

var _ = require("./");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var useForm = function useForm() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    initialValues: {},
    validations: {}
  },
      initialValues = _ref.initialValues,
      validations = _ref.validations;

  var _useState = (0, _.useState)({
    values: {},
    errors: {},
    touched: [],
    triedSave: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      values = _useState2$.values,
      errors = _useState2$.errors,
      touched = _useState2$.touched,
      triedSave = _useState2$.triedSave,
      setState = _useState2[1];

  _react["default"].useEffect(function () {
    var data = initialValues || {};

    var newErrors = _objectSpread({}, validateData(data));

    setState({
      values: data,
      errors: newErrors
    });
  }, []);

  var validateData = function validateData() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return Object.keys(validations).reduce(function (acc, key) {
      var error = R.reduceWhile(function (acc, v) {
        return !acc;
      }, function (acc, v) {
        return v[0](getValue(key, data), data) ? v[1] : acc;
      }, null, validations[key]);
      return _objectSpread(_objectSpread({}, acc), error ? _defineProperty({}, key, error) : {});
    }, []);
  };

  var onChange = _react["default"].useCallback(function (name) {
    var remove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    return function (value) {
      var data = _defineProperty({}, name, value);

      setValues(data, remove);
    };
  }, [values]);

  var setValues = function setValues(data) {
    var remove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var newValues = _objectSpread(_objectSpread({}, R.omit(remove, values)), data);

    var newErrors = _objectSpread({}, validateData(newValues));

    var newTouched = [].concat(_toConsumableArray(touched), _toConsumableArray(Object.keys(data)));
    setState({
      values: newValues,
      errors: newErrors,
      touched: _toConsumableArray(new Set(newTouched))
    });
  };

  var setError = function setError(errors) {
    var newTouched = [].concat(_toConsumableArray(touched), _toConsumableArray(Object.keys(errors)));
    setState({
      errors: errors,
      touched: _toConsumableArray(new Set(newTouched))
    });
  };

  var getError = function getError(name) {
    return errors[name] && (touched.indexOf(name) !== -1 || triedSave) ? errors[name] : null;
  };

  var getValue = function getValue(name) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : values;
    return data[name] === undefined ? null : data[name];
  };

  var trySave = function trySave() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
    return function (e) {
      e.preventDefault();
      e.stopPropagation();

      if (!R.isEmpty(errors) && !R.isNil(errors)) {
        setState({
          triedSave: true
        });
        return false;
      }

      callback(e);
    };
  };

  var form = {
    hasErrors: !R.isEmpty(errors) && !R.isNil(errors),
    getValue: getValue,
    setError: setError,
    getError: getError,
    errors: errors,
    values: values,
    touched: touched,
    trySave: trySave,
    setValues: setValues
  };
  return [form, onChange];
};

exports.useForm = useForm;