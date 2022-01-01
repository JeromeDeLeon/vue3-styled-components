"use strict";

var _vue = require("vue");

var _utils = require("./utils");

var _ThemeProvider = _interopRequireDefault(require("../providers/ThemeProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      color: ", ";\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      color: ", ";\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var styled;
describe('props', function () {
  beforeEach(function () {
    styled = (0, _utils.resetStyled)();
  });
  it('should execute interpolations and fall back', function () {
    var compProps = {
      fg: String
    };
    var Comp = styled('div', compProps)(_templateObject(), function (props) {
      return props.fg || 'black';
    });
    var vm = (0, _vue.createApp)(Comp).mount('body');
    (0, _utils.expectCSSMatches)('.a {color: black;}');
  });
  it('should add any injected theme to the component', function () {
    var theme = {
      blue: "blue"
    };
    var Comp = styled.div(_templateObject2(), function (props) {
      return props.theme.blue;
    });
    var Themed = {
      render: function render() {
        return (0, _vue.h)(_ThemeProvider["default"], {
          theme: theme
        }, [(0, _vue.h)(Comp)]);
      }
    };
    var vm = (0, _vue.createApp)(Themed).mount('body');
    (0, _utils.expectCSSMatches)('.a {color: blue;}');
  });
});