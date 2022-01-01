"use strict";

var _vue = require("vue");

var _chai = require("chai");

var _utils = require("./utils");

function _templateObject() {
  var data = _taggedTemplateLiteral(["color: blue;"]);

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
  it('should change the target element', function () {
    var OldTarget = styled.div(_templateObject());
    var NewTarget = OldTarget.withComponent('a');
    var o = (0, _vue.createApp)(OldTarget).mount('body');
    var n = (0, _vue.createApp)(NewTarget).mount('body');
    (0, _chai.assert)(o.$el instanceof HTMLDivElement);
    (0, _chai.assert)(n.$el instanceof HTMLAnchorElement);
  });
});