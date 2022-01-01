"use strict";

var _vue = require("vue");

var _expect = _interopRequireDefault(require("expect"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      background: ", ";\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      color: blue;\n    "]);

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
describe('"as" polymorphic prop', function () {
  beforeEach(function () {
    styled = (0, _utils.resetStyled)();
  });
  it('should render "as" polymorphic prop element', function () {
    var Base = styled.div(_templateObject());
    var b = (0, _vue.createApp)({
      render: function render() {
        return (0, _vue.h)(Base, {
          as: 'button'
        });
      }
    }).mount('body');
    (0, _expect["default"])(b.$el.tagName.toLowerCase()).toEqual('button');
  });
  it('should append base class to new components composing lower level styled components', function () {
    var Base = styled.div(_templateObject2());
    var Composed = styled(Base, {
      bg: String
    })(_templateObject3(), function (props) {
      return props.bg;
    });
    var b = (0, _vue.createApp)(Base).mount('body');
    var c = (0, _vue.createApp)({
      render: function render() {
        return (0, _vue.h)(Composed, {
          bg: 'yellow',
          as: 'dialog'
        });
      }
    }).mount('body');
    (0, _expect["default"])(c.$el.tagName.toLowerCase()).toEqual('dialog');
    (0, _expect["default"])(c.$el.classList.contains(b.$el.classList.toString())).toBeTruthy();
    (0, _utils.expectCSSMatches)('.a{color: blue;} .b{background:yellow;}');
  });
});