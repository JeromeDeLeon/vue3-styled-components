"use strict";

var _vue = require("vue");

var _expect = _interopRequireDefault(require("expect"));

var _StyleSheet = _interopRequireDefault(require("../models/StyleSheet"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      color: blue;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      color: blue;\n    "]);

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
describe('component features', function () {
  beforeEach(function () {
    styled = (0, _utils.resetStyled)();
  });
  it('default slot', function () {
    var Comp = {
      template: "<div><slot>FallbackContent</slot></div>"
    };
    var StyledComp = styled(Comp)(_templateObject());
    var vm = (0, _vue.createApp)({
      components: {
        StyledComp: StyledComp
      },
      template: "<styled-comp>ActualContent</styled-comp>"
    }).mount('body');
    (0, _expect["default"])(vm.$el.innerHTML).toEqual('ActualContent');
  });
  it('named slot', function () {
    var Comp = {
      template: "<div><slot name='content'>FallbackContent</slot></div>"
    };
    var StyledComp = styled(Comp)(_templateObject2());
    var vm = (0, _vue.createApp)({
      components: {
        StyledComp: StyledComp
      },
      template: "\n        <styled-comp>\n          <template v-slot:content>ActualContent</template>\n        </styled-comp>"
    }).mount('body');
    (0, _expect["default"])(vm.$el.innerHTML).toEqual('ActualContent');
  });
  it('scoped slot', function () {
    var Comp = {
      template: "<div><slot name=\"default\" :p='\"ActualContent\"'>FallbackContent</slot></div>"
    };
    var StyledComp = styled(Comp)(_templateObject3());
    var vm = (0, _vue.createApp)({
      components: {
        StyledComp: StyledComp
      },
      template: "\n        <styled-comp>\n          <template #default='{ p }'>{{ p }}</template>\n        </styled-comp>"
    }).mount('body');
    (0, _expect["default"])(vm.$el.innerHTML).toEqual('ActualContent');
  });
  it('named scoped slot', function () {
    var Comp = {
      template: "<div><slot name='content' :p='\"ActualContent\"'>FallbackContent</slot></div>"
    };
    var StyledComp = styled(Comp)(_templateObject4());
    var vm = (0, _vue.createApp)({
      components: {
        StyledComp: StyledComp
      },
      template: "\n        <styled-comp>\n          <template #content='{ p }'>{{ p }}</template>\n        </styled-comp>"
    }).mount('body');
    (0, _expect["default"])(vm.$el.innerHTML).toEqual('ActualContent');
  });
});