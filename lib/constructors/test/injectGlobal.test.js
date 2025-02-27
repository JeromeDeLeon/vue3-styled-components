"use strict";

var _vue = require("vue");

var _expect = _interopRequireDefault(require("expect"));

var _injectGlobal = _interopRequireDefault(require("../injectGlobal"));

var _StyleSheet = _interopRequireDefault(require("../../models/StyleSheet"));

var _utils = require("../../test/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      html {\n        ", "\n      }\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      ", "\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      a {\n        ", "\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      html {\n        ", "\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      html {\n        ", "\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var styled = (0, _utils.resetStyled)();
var rule1 = 'width: 100%;';
var rule2 = 'margin: 0;';
var rule3 = 'color: blue;';
describe('injectGlobal', function () {
  beforeEach(function () {
    (0, _utils.resetStyled)();
  });
  it("should inject rules into the head", function () {
    (0, _injectGlobal["default"])(_templateObject(), rule1);
    (0, _expect["default"])(_StyleSheet["default"].injected).toBe(true);
  });
  it("should non-destructively inject styles when called repeatedly", function () {
    (0, _injectGlobal["default"])(_templateObject2(), rule1);
    (0, _injectGlobal["default"])(_templateObject3(), rule2);
    (0, _utils.expectCSSMatches)("\n      html {".concat(rule1, "}\n      a {").concat(rule2, "}\n    "), {
      styleSheet: _StyleSheet["default"]
    });
  });
  it("should inject styles in a separate sheet from a component", function () {
    var Comp = styled.div(_templateObject4(), rule3);
    var vm = (0, _vue.createApp)(Comp).mount('body');
    (0, _injectGlobal["default"])(_templateObject5(), rule1);
    (0, _utils.expectCSSMatches)("\n      .a {".concat(rule3, "}\n    "), {
      styleSheet: _StyleSheet["default"].componentStyleSheet
    });
    (0, _utils.expectCSSMatches)("\n      html {".concat(rule1, "}\n    "), {
      styleSheet: _StyleSheet["default"].globalStyleSheet
    });
  });
});