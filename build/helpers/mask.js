"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  numeric: function numeric(x) {
    return "[".concat('0'.repeat(x), "]");
  },
  cellphone: '+55 ([00]) [00000]-[0000]',
  cpf: '[000].[000].[000]-[00]',
  cep: '[00].[000]-[000]',
  date: '[00]/[00]/[0000]',
  hour: '[00]:[00]',
  money: 'R$[999990],[99]'
};
exports["default"] = _default;