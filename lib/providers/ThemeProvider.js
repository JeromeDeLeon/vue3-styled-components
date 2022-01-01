"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _default = {
  props: {
    theme: Object
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    (0, _vue.provide)('theme', props.theme);
  },
  render: function render() {
    return (0, _vue.h)('div', {}, this.$slots["default"]());
  }
};
exports["default"] = _default;
module.exports = exports.default;