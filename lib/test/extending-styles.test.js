"use strict";

var _vue = require("vue");

var _utils = require("./utils");

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      background: green;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      color: blue;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var styled;
describe('extending styled', function () {
  beforeEach(function () {
    styled = (0, _utils.resetStyled)();
  });
  it('should append extended styled to the original class', function () {
    var Base = styled.div(_templateObject());
    var Extended = Base.extend(_templateObject2());
    var b = (0, _vue.createApp)(Base).mount('body');
    var e = (0, _vue.createApp)(Extended).mount('body');
    (0, _utils.expectCSSMatches)('.a {color: blue;} .b {color: blue;background: green;}');
  });
});