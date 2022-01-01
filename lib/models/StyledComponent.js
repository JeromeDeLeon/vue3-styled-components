"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _css = _interopRequireDefault(require("../constructors/css"));

var _isVueComponent = _interopRequireDefault(require("../utils/isVueComponent"));

var _normalizeProps = _interopRequireDefault(require("../utils/normalizeProps"));

var _commonHtmlAttributes = require("../utils/commonHtmlAttributes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(ComponentStyle) {
  var createStyledComponent = function createStyledComponent(tagOrComponent, rules, propDefinitions) {
    var componentStyle = new ComponentStyle(rules);
    var targetPropDefinitions = (0, _normalizeProps["default"])(tagOrComponent.props);
    var ownPropDefinitions = (0, _normalizeProps["default"])(propDefinitions);
    var targetPropDefinitionKeys = tagOrComponent.props ? Object.keys(targetPropDefinitions) : _commonHtmlAttributes.commonHtmlAttributes;
    var combinedPropDefinition = tagOrComponent.props ? _objectSpread({}, ownPropDefinitions, {}, targetPropDefinitions) : ownPropDefinitions;
    return {
      props: _objectSpread({
        as: [String, Object],
        modelValue: null
      }, combinedPropDefinition),
      emits: ['input', 'update:modelValue'],
      setup: function setup(props, _ref) {
        var slots = _ref.slots,
            attrs = _ref.attrs,
            emit = _ref.emit;
        var theme = (0, _vue.inject)('theme');
        return function () {
          var styleClass = componentStyle.generateAndInjectStyles(_objectSpread({
            theme: theme
          }, props, {}, attrs));
          var classes = [styleClass];

          if (attrs["class"]) {
            classes.push(attrs["class"]);
          }

          var targetProps = {};

          if (targetPropDefinitionKeys.length) {
            for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                  key = _Object$entries$_i[0],
                  value = _Object$entries$_i[1];

              if (targetPropDefinitionKeys.includes(key)) {
                targetProps[key] = value;
              }
            }
          }

          return (0, _vue.h)((0, _isVueComponent["default"])(tagOrComponent) ? tagOrComponent : props.as || tagOrComponent, _objectSpread({
            value: props.modelValue
          }, attrs, {}, targetProps, {
            "class": classes,
            onInput: function onInput(e) {
              emit('update:modelValue', e.target.value);
              emit('input', e);
            }
          }), slots);
        };
      },
      extend: function extend(cssRules) {
        for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          interpolations[_key - 1] = arguments[_key];
        }

        var extendedRules = _css["default"].apply(void 0, [cssRules].concat(interpolations));

        return createStyledComponent(tagOrComponent, rules.concat(extendedRules), propDefinitions);
      },
      withComponent: function withComponent(newTarget) {
        return createStyledComponent(newTarget, rules, propDefinitions);
      }
    };
  };

  return createStyledComponent;
};

exports["default"] = _default;
module.exports = exports.default;