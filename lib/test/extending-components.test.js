"use strict";

var _vue = require("vue");

var _expect = _interopRequireDefault(require("expect"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject14() {
  var data = _taggedTemplateLiteral(["background-color: green;"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n      color: ", ";\n    "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["background-color: green;"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n      color: ", ";\n    "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["color: red;"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n      color: blue;\n      > h1 { font-size: 4rem; }\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["color: red;"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["color: blue;"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["color: red;"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["background-color: blue;"]);

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
  var data = _taggedTemplateLiteral(["color: blue;"]);

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
  var data = _taggedTemplateLiteral(["color: blue;"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var styled;
describe('extending components', function () {
  beforeEach(function () {
    styled = (0, _utils.resetStyled)();
  });
  it('should generate a single class if only parent has styles', function () {
    var Parent = styled.div(_templateObject());
    var Child = styled(Parent)(_templateObject2());
    var p = (0, _vue.createApp)(Parent).mount('body');
    var c = (0, _vue.createApp)(Child).mount('body');
    (0, _utils.expectCSSMatches)('.a {color: blue;}');
  });
  it('should generate a single class if only child has styles', function () {
    var Parent = styled.div(_templateObject3());
    var Child = styled(Parent)(_templateObject4());
    var p = (0, _vue.createApp)(Parent).mount('body');
    var c = (0, _vue.createApp)(Child).mount('body');
    (0, _utils.expectCSSMatches)('.a {color: blue;}');
  });
  it('should generate a new class for the child with the added rules', function () {
    var Parent = styled.div(_templateObject5());
    var Child = styled(Parent)(_templateObject6());
    var p = (0, _vue.createApp)(Parent).mount('body');
    var c = (0, _vue.createApp)(Child).mount('body');
    (0, _utils.expectCSSMatches)('.a {background-color: blue;} .b {color: red;}');
  });
  it('should generate different classes for both parent and child', function () {
    var Parent = styled.div(_templateObject7());
    var Child = styled(Parent)(_templateObject8());
    var p = (0, _vue.createApp)(Parent).mount('body');
    var c = (0, _vue.createApp)(Child).mount('body');
    (0, _utils.expectCSSMatches)('.a {color: blue;} .b {color: red;}');
  });
  it('should keep nested rules to the child', function () {
    var Parent = styled.div(_templateObject9());
    var Child = styled(Parent)(_templateObject10());
    var p = (0, _vue.createApp)(Parent).mount('body');
    var c = (0, _vue.createApp)(Child).mount('body');
    (0, _utils.expectCSSMatches)('.a {color: blue;}.a > h1 {font-size: 4rem;} .b {color: red;}');
  });
  it('should keep default props from parent', function () {
    var parentProps = {
      color: {
        type: String,
        "default": 'red'
      }
    };
    var Parent = styled('div', parentProps)(_templateObject11(), function (props) {
      return props.color;
    });
    var Child = styled(Parent)(_templateObject12());
    var p = (0, _vue.createApp)(Parent).mount('body');
    var c = (0, _vue.createApp)(Child).mount('body');
    (0, _utils.expectCSSMatches)("\n      .a {color: red;}\n      .b {background-color: green;}\n    ");
  });
  it('should keep prop types from parent', function () {
    var parentProps = {
      color: {
        type: String
      }
    };
    var Parent = styled.div(_templateObject13(), function (props) {
      return props.color;
    });
    var Child = styled(Parent)(_templateObject14());
    var c = (0, _vue.createApp)(Child).mount('body');
    var p = (0, _vue.createApp)(Parent).mount('body');
    (0, _expect["default"])(c.$props).toEqual(p.$props);
  });
});