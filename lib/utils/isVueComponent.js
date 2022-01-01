"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isVueComponent;

function isVueComponent(target) {
  return target && (typeof target.setup === 'function' || typeof target.render === 'function' || typeof target.template === 'string');
}

module.exports = exports.default;