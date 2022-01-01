"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _vue = _interopRequireWildcard(require("vue"));

var _utils = require("./utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n        ", "\n        ", "\n      "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n        ", "\n      "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n        ", "\n      "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n        ", "\n      "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n        ", "\n      "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n      ", "\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      ", "\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      ", "\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      ", "\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n        ", "\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        ", "\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        ", "\n        ", "\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        ", "\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var styled;
describe('with styles', function () {
  beforeEach(function () {
    styled = (0, _utils.resetStyled)();
  });
  it('should append a style', function () {
    var rule = 'color: blue;';
    var Comp = styled.div(_templateObject(), rule);
    var vm = (0, _vue.createApp)(Comp).mount('body');
    (0, _utils.expectCSSMatches)('.a {color: blue;}');
  });
  it('should append multiple styles', function () {
    var rule1 = 'color: blue;';
    var rule2 = 'background: red;';
    var Comp = styled.div(_templateObject2(), rule1, rule2);
    var vm = (0, _vue.createApp)(Comp).mount('body');
    (0, _utils.expectCSSMatches)('.a {color: blue;background: red;}');
  });
  it('should handle inline style objects', function () {
    var rule1 = {
      backgroundColor: 'blue'
    };
    var Comp = styled.div(_templateObject3(), rule1);
    var vm = (0, _vue.createApp)(Comp).mount('body');
    (0, _utils.expectCSSMatches)('.a {background-color: blue;}');
  });
  it('should handle inline style objects with media queries', function () {
    var rule1 = {
      backgroundColor: 'blue',
      '@media screen and (min-width: 250px)': {
        backgroundColor: 'red'
      }
    };
    var Comp = styled.div(_templateObject4(), rule1);
    var vm = (0, _vue.createApp)(Comp).mount('body');
    (0, _utils.expectCSSMatches)('.a {background-color: blue;}@media screen and (min-width: 250px) {.a {background-color: red;}}');
  });
  it('should handle inline style objects with pseudo selectors', function () {
    var rule1 = {
      backgroundColor: 'blue',
      '&:hover': {
        textDecoration: 'underline'
      }
    };
    var Comp = styled.div(_templateObject5(), rule1);
    var vm = (0, _vue.createApp)(Comp).mount('body');
    (0, _utils.expectCSSMatches)('.a {background-color: blue;}.a:hover {-webkit-text-decoration: underline;text-decoration: underline;}');
  });
  it('should handle inline style objects with pseudo selectors', function () {
    var rule1 = {
      backgroundColor: 'blue',
      '&:hover': {
        textDecoration: 'underline'
      }
    };
    var Comp = styled.div(_templateObject6(), rule1);
    var vm = (0, _vue.createApp)(Comp).mount('body');
    (0, _utils.expectCSSMatches)('.a {background-color: blue;}.a:hover {-webkit-text-decoration: underline;text-decoration: underline;}');
  });
  it('should handle inline style objects with nesting', function () {
    var rule1 = {
      backgroundColor: 'blue',
      '> h1': {
        color: 'white'
      }
    };
    var Comp = styled.div(_templateObject7(), rule1);
    var vm = (0, _vue.createApp)(Comp).mount('body');
    (0, _utils.expectCSSMatches)('.a {background-color: blue;}.a > h1 {color: white;}');
  });
  it('should handle inline style objects with contextual selectors', function () {
    var rule1 = {
      backgroundColor: 'blue',
      'html.something &': {
        color: 'white'
      }
    };
    var Comp = styled.div(_templateObject8(), rule1);
    var vm = (0, _vue.createApp)(Comp).mount('body');
    (0, _utils.expectCSSMatches)('.a {background-color: blue;}html.something .a {color: white;}');
  });
  it('should inject styles of multiple components', function () {
    var firstRule = 'background: blue;';
    var secondRule = 'background: red;';
    var FirstComp = styled.div(_templateObject9(), firstRule);
    var SecondComp = styled.div(_templateObject10(), secondRule);
    var vm1 = (0, _vue.createApp)(FirstComp).mount('body');
    var vm2 = (0, _vue.createApp)(SecondComp).mount('body');
    (0, _utils.expectCSSMatches)('.a {background: blue;} .b {background: red;}');
  });
  it('should inject styles of multiple components based on creation, not rendering order', function () {
    var firstRule = 'content: "first rule";';
    var secondRule = 'content: "second rule";';
    var FirstComp = styled.div(_templateObject11(), firstRule);
    var SecondComp = styled.div(_templateObject12(), secondRule);
    var vm2 = (0, _vue.createApp)(SecondComp).mount('body');
    var vm1 = (0, _vue.createApp)(FirstComp).mount('body');
    (0, _utils.expectCSSMatches)("\n        .b {content: \"first rule\";}\n        .a {content: \"second rule\";}\n      ");
  });
  it('should strip a JS-style (invalid) comment in the styles', function () {
    var comment = '// This is an invalid comment';
    var rule = 'color: blue;';
    var Comp = styled.div(_templateObject13(), comment, rule);
    var vm = (0, _vue.createApp)(Comp).mount('body');
    (0, _utils.expectCSSMatches)("\n        .a {color: blue;}\n      ");
  });
});