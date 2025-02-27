"use strict";

var _vue = require("vue");

var _utils = require("./utils");

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      --custom-prop: some-val;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      margin-bottom: calc(15px - 0.5rem) !important;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      transition: opacity 0.3s;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var styled;

var stripLineBreaks = function stripLineBreaks(str) {
  return str.split('\n').map(function (l) {
    return l.trim();
  }).join('');
};

describe('css features', function () {
  beforeEach(function () {
    styled = (0, _utils.resetStyled)();
  });
  it('should add vendor prefixes in the right order', function () {
    var Comp = styled.div(_templateObject());
    var vm = (0, _vue.createApp)(Comp).mount('body');
    (0, _utils.expectCSSMatches)('.a {-webkit-transition: opacity 0.3s;transition: opacity 0.3s;}');
  });
  it('should add vendor prefixes for display', function () {
    var Comp = styled.div(_templateObject2());
    var vm = (0, _vue.createApp)(Comp).mount('body');
    (0, _utils.expectCSSMatches)(stripLineBreaks("\n      .a {\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n        flex-direction: column;\n        -webkit-align-items: center;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n      }\n    "));
  });
  it('should handle CSS calc()', function () {
    var Comp = styled.div(_templateObject3());
    var vm = (0, _vue.createApp)(Comp).mount('body');
    (0, _utils.expectCSSMatches)('.a {margin-bottom: calc(15px - 0.5rem) !important;}');
  });
  it('should pass through custom properties', function () {
    var Comp = styled.div(_templateObject4());
    var vm = (0, _vue.createApp)(Comp).mount('body');
    (0, _utils.expectCSSMatches)('.a {--custom-prop: some-val;}');
  });
});