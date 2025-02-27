"use strict";

var _vue = require("vue");

var _expect = _interopRequireDefault(require("expect"));

var _StyleSheet = _interopRequireDefault(require("../models/StyleSheet"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var styled;
describe('basic', function () {
  beforeEach(function () {
    styled = (0, _utils.resetStyled)();
  });
  it('should not throw an error when called', function () {
    styled.div(_templateObject());
  });
  it('should inject a stylesheet when a component is created', function () {
    var Comp = styled.div(_templateObject2());
    var vm = (0, _vue.createApp)(Comp).mount('body');
    (0, _expect["default"])(_StyleSheet["default"].injected).toBe(true);
  });
  it('should not generate any styles by default', function () {
    styled.div(_templateObject3());
    (0, _utils.expectCSSMatches)('');
  });
  it('should throw an error when called', function () {
    (0, _expect["default"])(function () {
      return styled(_templateObject4());
    }).toThrow();
    (0, _expect["default"])(function () {
      return styled.notExistTag(_templateObject5());
    }).toThrow();
  });
  it('should allow for inheriting components that are not styled', function () {
    var componentConfig = {
      name: 'Parent',
      template: '<div><slot/></div>',
      methods: {}
    };
    (0, _expect["default"])(function () {
      return styled(componentConfig, {})(_templateObject6());
    }).not.toThrow();
  });
});