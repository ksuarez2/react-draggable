(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react-dom"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react-dom", "react"], factory);
	else if(typeof exports === 'object')
		exports["ReactDraggable"] = factory(require("react-dom"), require("react"));
	else
		root["ReactDraggable"] = factory(root["ReactDOM"], root["React"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = findInArray;
/* harmony export (immutable) */ __webpack_exports__["d"] = isFunction;
/* harmony export (immutable) */ __webpack_exports__["e"] = isNum;
/* harmony export (immutable) */ __webpack_exports__["c"] = int;
/* harmony export (immutable) */ __webpack_exports__["a"] = dontSetMe;

// @credits https://gist.github.com/rogozhnikoff/a43cfed27c41e4e68cdc
function findInArray(array /*: Array<any> | TouchList*/, callback /*: Function*/) /*: any*/ {
  for (var i = 0, length = array.length; i < length; i++) {
    if (callback.apply(callback, [array[i], i, array])) return array[i];
  }
}

function isFunction(func /*: any*/) /*: boolean*/ {
  return typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]';
}

function isNum(num /*: any*/) /*: boolean*/ {
  return typeof num === 'number' && !isNaN(num);
}

function int(a /*: string*/) /*: number*/ {
  return parseInt(a, 10);
}

function dontSetMe(props /*: Object*/, propName /*: string*/, componentName /*: string*/) {
  if (props[propName]) {
    return new Error('Invalid prop ' + propName + ' passed to ' + componentName + ' - do not set this, set it on the child.');
  }
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./lib/utils/shims.js
var shims = __webpack_require__(0);

// CONCATENATED MODULE: ./lib/utils/getPrefix.js
var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
function getPrefix() /*: string*/ {
  var prop /*: string*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';

  // Checking specifically for 'window.document' is for pseudo-browser server-side
  // environments that define 'window' as the global context.
  // E.g. React-rails (see https://github.com/reactjs/react-rails/pull/84)
  if (typeof window === 'undefined' || typeof window.document === 'undefined') return '';

  var style = window.document.documentElement.style;

  if (prop in style) return '';

  for (var i = 0; i < prefixes.length; i++) {
    if (browserPrefixToKey(prop, prefixes[i]) in style) return prefixes[i];
  }

  return '';
}

function browserPrefixToKey(prop /*: string*/, prefix /*: string*/) /*: string*/ {
  return prefix ? '' + prefix + kebabToTitleCase(prop) : prop;
}

function browserPrefixToStyle(prop /*: string*/, prefix /*: string*/) /*: string*/ {
  return prefix ? '-' + prefix.toLowerCase() + '-' + prop : prop;
}

function kebabToTitleCase(str /*: string*/) /*: string*/ {
  var out = '';
  var shouldCapitalize = true;
  for (var i = 0; i < str.length; i++) {
    if (shouldCapitalize) {
      out += str[i].toUpperCase();
      shouldCapitalize = false;
    } else if (str[i] === '-') {
      shouldCapitalize = true;
    } else {
      out += str[i];
    }
  }
  return out;
}

// Default export is the prefix itself, like 'Moz', 'Webkit', etc
// Note that you may have to re-test for certain things; for instance, Chrome 50
// can handle unprefixed `transform`, but not unprefixed `user-select`
/* harmony default export */ var utils_getPrefix = (getPrefix());
// CONCATENATED MODULE: ./lib/utils/domFns.js
/* unused harmony export matchesSelector */
/* harmony export (immutable) */ __webpack_exports__["i"] = matchesSelectorAndParentsTo;
/* harmony export (immutable) */ __webpack_exports__["a"] = addEvent;
/* harmony export (immutable) */ __webpack_exports__["m"] = removeEvent;
/* harmony export (immutable) */ __webpack_exports__["k"] = domFns_outerHeight;
/* harmony export (immutable) */ __webpack_exports__["l"] = domFns_outerWidth;
/* harmony export (immutable) */ __webpack_exports__["g"] = domFns_innerHeight;
/* harmony export (immutable) */ __webpack_exports__["h"] = domFns_innerWidth;
/* harmony export (immutable) */ __webpack_exports__["j"] = offsetXYFromParent;
/* harmony export (immutable) */ __webpack_exports__["c"] = createCSSTransform;
/* harmony export (immutable) */ __webpack_exports__["d"] = createSVGTransform;
/* harmony export (immutable) */ __webpack_exports__["e"] = getTouch;
/* harmony export (immutable) */ __webpack_exports__["f"] = getTouchIdentifier;
/* harmony export (immutable) */ __webpack_exports__["b"] = addUserSelectStyles;
/* harmony export (immutable) */ __webpack_exports__["n"] = removeUserSelectStyles;
/* harmony export (immutable) */ __webpack_exports__["o"] = styleHacks;
/* unused harmony export addClassName */
/* unused harmony export removeClassName */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/*:: import type {ControlPosition, MouseTouchEvent} from './types';*/


var matchesSelectorFunc = '';
function matchesSelector(el /*: Node*/, selector /*: string*/) /*: boolean*/ {
  if (!matchesSelectorFunc) {
    matchesSelectorFunc = Object(shims["b" /* findInArray */])(['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'], function (method) {
      // $FlowIgnore: Doesn't think elements are indexable
      return Object(shims["d" /* isFunction */])(el[method]);
    });
  }

  // Might not be found entirely (not an Element?) - in that case, bail
  // $FlowIgnore: Doesn't think elements are indexable
  if (!Object(shims["d" /* isFunction */])(el[matchesSelectorFunc])) return false;

  // $FlowIgnore: Doesn't think elements are indexable
  return el[matchesSelectorFunc](selector);
}

// Works up the tree to the draggable itself attempting to match selector.
function matchesSelectorAndParentsTo(el /*: Node*/, selector /*: string*/, baseNode /*: Node*/) /*: boolean*/ {
  var node = el;
  do {
    if (matchesSelector(node, selector)) return true;
    if (node === baseNode) return false;
    node = node.parentNode;
  } while (node);

  return false;
}

function addEvent(el /*: ?Node*/, event /*: string*/, handler /*: Function*/) /*: void*/ {
  if (!el) {
    return;
  }
  if (el.attachEvent) {
    el.attachEvent('on' + event, handler);
  } else if (el.addEventListener) {
    el.addEventListener(event, handler, true);
  } else {
    // $FlowIgnore: Doesn't think elements are indexable
    el['on' + event] = handler;
  }
}

function removeEvent(el /*: ?Node*/, event /*: string*/, handler /*: Function*/) /*: void*/ {
  if (!el) {
    return;
  }
  if (el.detachEvent) {
    el.detachEvent('on' + event, handler);
  } else if (el.removeEventListener) {
    el.removeEventListener(event, handler, true);
  } else {
    // $FlowIgnore: Doesn't think elements are indexable
    el['on' + event] = null;
  }
}

function domFns_outerHeight(node /*: HTMLElement*/) /*: number*/ {
  // This is deliberately excluding margin for our calculations, since we are using
  // offsetTop which is including margin. See getBoundPosition
  var height = node.clientHeight;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  height += Object(shims["c" /* int */])(computedStyle.borderTopWidth);
  height += Object(shims["c" /* int */])(computedStyle.borderBottomWidth);
  return height;
}

function domFns_outerWidth(node /*: HTMLElement*/) /*: number*/ {
  // This is deliberately excluding margin for our calculations, since we are using
  // offsetLeft which is including margin. See getBoundPosition
  var width = node.clientWidth;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  width += Object(shims["c" /* int */])(computedStyle.borderLeftWidth);
  width += Object(shims["c" /* int */])(computedStyle.borderRightWidth);
  return width;
}
function domFns_innerHeight(node /*: HTMLElement*/) /*: number*/ {
  var height = node.clientHeight;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  height -= Object(shims["c" /* int */])(computedStyle.paddingTop);
  height -= Object(shims["c" /* int */])(computedStyle.paddingBottom);
  return height;
}

function domFns_innerWidth(node /*: HTMLElement*/) /*: number*/ {
  var width = node.clientWidth;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  width -= Object(shims["c" /* int */])(computedStyle.paddingLeft);
  width -= Object(shims["c" /* int */])(computedStyle.paddingRight);
  return width;
}

// Get from offsetParent
function offsetXYFromParent(evt /*: {clientX: number, clientY: number}*/, offsetParent /*: HTMLElement*/) /*: ControlPosition*/ {
  var isBody = offsetParent === offsetParent.ownerDocument.body;
  var offsetParentRect = isBody ? { left: 0, top: 0 } : offsetParent.getBoundingClientRect();

  var x = evt.clientX + offsetParent.scrollLeft - offsetParentRect.left;
  var y = evt.clientY + offsetParent.scrollTop - offsetParentRect.top;

  return { x: x, y: y };
}

function createCSSTransform(_ref) /*: Object*/ {
  var x = _ref.x,
      y = _ref.y;

  // Replace unitless items with px
  return _defineProperty({}, browserPrefixToKey('transform', utils_getPrefix), 'translate(' + x + 'px,' + y + 'px)');
}

function createSVGTransform(_ref3) /*: string*/ {
  var x = _ref3.x,
      y = _ref3.y;

  return 'translate(' + x + ',' + y + ')';
}

function getTouch(e /*: MouseTouchEvent*/, identifier /*: number*/) /*: ?{clientX: number, clientY: number}*/ {
  return e.targetTouches && Object(shims["b" /* findInArray */])(e.targetTouches, function (t) {
    return identifier === t.identifier;
  }) || e.changedTouches && Object(shims["b" /* findInArray */])(e.changedTouches, function (t) {
    return identifier === t.identifier;
  });
}

function getTouchIdentifier(e /*: MouseTouchEvent*/) /*: ?number*/ {
  if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
}

// User-select Hacks:
//
// Useful for preventing blue highlights all over everything when dragging.

// Note we're passing `document` b/c we could be iframed
function addUserSelectStyles(doc /*: ?Document*/) {
  if (!doc) return;
  var styleEl = doc.getElementById('react-draggable-style-el');
  if (!styleEl) {
    styleEl = doc.createElement('style');
    styleEl.type = 'text/css';
    styleEl.id = 'react-draggable-style-el';
    styleEl.innerHTML = '.react-draggable-transparent-selection *::-moz-selection {background: transparent;}\n';
    styleEl.innerHTML += '.react-draggable-transparent-selection *::selection {background: transparent;}\n';
    doc.getElementsByTagName('head')[0].appendChild(styleEl);
  }
  if (doc.body) addClassName(doc.body, 'react-draggable-transparent-selection');
}

function removeUserSelectStyles(doc /*: ?Document*/) {
  try {
    if (doc && doc.body) removeClassName(doc.body, 'react-draggable-transparent-selection');
    // $FlowIgnore: IE
    if (doc.selection) {
      // $FlowIgnore: IE
      doc.selection.empty();
    } else {
      window.getSelection().removeAllRanges(); // remove selection caused by scroll
    }
  } catch (e) {
    // probably IE
  }
}

function styleHacks() /*: Object*/ {
  var childStyle /*: Object*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // Workaround IE pointer events; see #51
  // https://github.com/mzabriskie/react-draggable/issues/51#issuecomment-103488278
  return _extends({
    touchAction: 'none'
  }, childStyle);
}

function addClassName(el /*: HTMLElement*/, className /*: string*/) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    if (!el.className.match(new RegExp('(?:^|\\s)' + className + '(?!\\S)'))) {
      el.className += ' ' + className;
    }
  }
}

function removeClassName(el /*: HTMLElement*/, className /*: string*/) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp('(?:^|\\s)' + className + '(?!\\S)', 'g'), '');
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(10)();
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = getBoundPosition;
/* harmony export (immutable) */ __webpack_exports__["g"] = snapToGrid;
/* harmony export (immutable) */ __webpack_exports__["a"] = canDragX;
/* harmony export (immutable) */ __webpack_exports__["b"] = canDragY;
/* harmony export (immutable) */ __webpack_exports__["f"] = getControlPosition;
/* harmony export (immutable) */ __webpack_exports__["c"] = createCoreData;
/* harmony export (immutable) */ __webpack_exports__["d"] = createDraggableData;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shims__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domFns__ = __webpack_require__(2);




/*:: import type Draggable from '../Draggable';*/
/*:: import type {Bounds, ControlPosition, DraggableData, MouseTouchEvent} from './types';*/
/*:: import type DraggableCore from '../DraggableCore';*/


function getBoundPosition(draggable /*: Draggable*/, x /*: number*/, y /*: number*/) /*: [number, number]*/ {
  // If no bounds, short-circuit and move on
  if (!draggable.props.bounds) return [x, y];

  // Clone new bounds
  var bounds = draggable.props.bounds;

  bounds = typeof bounds === 'string' ? bounds : cloneBounds(bounds);
  var node = findDOMNode(draggable);

  if (typeof bounds === 'string') {
    var ownerDocument = node.ownerDocument;

    var ownerWindow = ownerDocument.defaultView;
    var boundNode = void 0;
    if (bounds === 'parent') {
      boundNode = node.parentNode;
    } else {
      boundNode = ownerDocument.querySelector(bounds);
    }
    if (!(boundNode instanceof ownerWindow.HTMLElement)) {
      throw new Error('Bounds selector "' + bounds + '" could not find an element.');
    }
    var nodeStyle = ownerWindow.getComputedStyle(node);
    var boundNodeStyle = ownerWindow.getComputedStyle(boundNode);
    // Compute bounds. This is a pain with padding and offsets but this gets it exactly right.
    bounds = {
      left: -node.offsetLeft + Object(__WEBPACK_IMPORTED_MODULE_0__shims__["c" /* int */])(boundNodeStyle.paddingLeft) + Object(__WEBPACK_IMPORTED_MODULE_0__shims__["c" /* int */])(nodeStyle.marginLeft),
      top: -node.offsetTop + Object(__WEBPACK_IMPORTED_MODULE_0__shims__["c" /* int */])(boundNodeStyle.paddingTop) + Object(__WEBPACK_IMPORTED_MODULE_0__shims__["c" /* int */])(nodeStyle.marginTop),
      right: Object(__WEBPACK_IMPORTED_MODULE_2__domFns__["h" /* innerWidth */])(boundNode) - Object(__WEBPACK_IMPORTED_MODULE_2__domFns__["l" /* outerWidth */])(node) - node.offsetLeft + Object(__WEBPACK_IMPORTED_MODULE_0__shims__["c" /* int */])(boundNodeStyle.paddingRight) - Object(__WEBPACK_IMPORTED_MODULE_0__shims__["c" /* int */])(nodeStyle.marginRight),
      bottom: Object(__WEBPACK_IMPORTED_MODULE_2__domFns__["g" /* innerHeight */])(boundNode) - Object(__WEBPACK_IMPORTED_MODULE_2__domFns__["k" /* outerHeight */])(node) - node.offsetTop + Object(__WEBPACK_IMPORTED_MODULE_0__shims__["c" /* int */])(boundNodeStyle.paddingBottom) - Object(__WEBPACK_IMPORTED_MODULE_0__shims__["c" /* int */])(nodeStyle.marginBottom)
    };
  }

  // Keep x and y below right and bottom limits...
  if (Object(__WEBPACK_IMPORTED_MODULE_0__shims__["e" /* isNum */])(bounds.right)) x = Math.min(x, bounds.right);
  if (Object(__WEBPACK_IMPORTED_MODULE_0__shims__["e" /* isNum */])(bounds.bottom)) y = Math.min(y, bounds.bottom);

  // But above left and top limits.
  if (Object(__WEBPACK_IMPORTED_MODULE_0__shims__["e" /* isNum */])(bounds.left)) x = Math.max(x, bounds.left);
  if (Object(__WEBPACK_IMPORTED_MODULE_0__shims__["e" /* isNum */])(bounds.top)) y = Math.max(y, bounds.top);

  return [x, y];
}

function snapToGrid(grid /*: [number, number]*/, pendingX /*: number*/, pendingY /*: number*/) /*: [number, number]*/ {
  var x = Math.round(pendingX / grid[0]) * grid[0];
  var y = Math.round(pendingY / grid[1]) * grid[1];
  return [x, y];
}

function canDragX(draggable /*: Draggable*/) /*: boolean*/ {
  return draggable.props.axis === 'both' || draggable.props.axis === 'x';
}

function canDragY(draggable /*: Draggable*/) /*: boolean*/ {
  return draggable.props.axis === 'both' || draggable.props.axis === 'y';
}

// Get {x, y} positions from event.
function getControlPosition(e /*: MouseTouchEvent*/, touchIdentifier /*: ?number*/, draggableCore /*: DraggableCore*/) /*: ?ControlPosition*/ {
  var touchObj = typeof touchIdentifier === 'number' ? Object(__WEBPACK_IMPORTED_MODULE_2__domFns__["e" /* getTouch */])(e, touchIdentifier) : null;
  if (typeof touchIdentifier === 'number' && !touchObj) return null; // not the right touch
  var node = findDOMNode(draggableCore);
  // User can provide an offsetParent if desired.
  var offsetParent = draggableCore.props.offsetParent || node.offsetParent || node.ownerDocument.body;
  return Object(__WEBPACK_IMPORTED_MODULE_2__domFns__["j" /* offsetXYFromParent */])(touchObj || e, offsetParent);
}

// Create an data object exposed by <DraggableCore>'s events
function createCoreData(draggable /*: DraggableCore*/, x /*: number*/, y /*: number*/) /*: DraggableData*/ {
  var state = draggable.state;
  var isStart = !Object(__WEBPACK_IMPORTED_MODULE_0__shims__["e" /* isNum */])(state.lastX);
  var node = findDOMNode(draggable);

  if (isStart) {
    // If this is our first move, use the x and y as last coords.
    return {
      node: node,
      deltaX: 0, deltaY: 0,
      lastX: x, lastY: y,
      x: x, y: y
    };
  } else {
    // Otherwise calculate proper values.
    return {
      node: node,
      deltaX: x - state.lastX, deltaY: y - state.lastY,
      lastX: state.lastX, lastY: state.lastY,
      x: x, y: y
    };
  }
}

// Create an data exposed by <Draggable>'s events
function createDraggableData(draggable /*: Draggable*/, coreData /*: DraggableData*/) /*: DraggableData*/ {
  return {
    node: coreData.node,
    x: draggable.state.x + coreData.deltaX,
    y: draggable.state.y + coreData.deltaY,
    deltaX: coreData.deltaX,
    deltaY: coreData.deltaY,
    lastX: draggable.state.x,
    lastY: draggable.state.y
  };
}

// A lot faster than stringify/parse
function cloneBounds(bounds /*: Bounds*/) /*: Bounds*/ {
  return {
    left: bounds.left,
    top: bounds.top,
    right: bounds.right,
    bottom: bounds.bottom
  };
}

function findDOMNode(draggable /*: Draggable | DraggableCore*/) /*: HTMLElement*/ {
  var node = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(draggable);
  if (!node) {
    throw new Error('<DraggableCore>: Unmounted during event!');
  }
  // $FlowIgnore we can't assert on HTMLElement due to tests... FIXME
  return node;
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_domFns__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_positionFns__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_shims__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_log__ = __webpack_require__(7);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









/*:: import type {EventHandler, MouseTouchEvent} from './utils/types';*/


// Simple abstraction for dragging events names.
/*:: import type {Element as ReactElement} from 'react';*/
var eventsFor = {
  touch: {
    start: 'touchstart',
    move: 'touchmove',
    stop: 'touchend'
  },
  mouse: {
    start: 'mousedown',
    move: 'mousemove',
    stop: 'mouseup'
  }
};

// Default to mouse events.
var dragEventFor = eventsFor.mouse;

/*:: type DraggableCoreState = {
  dragging: boolean,
  lastX: number,
  lastY: number,
  touchIdentifier: ?number
};*/
/*:: export type DraggableBounds = {
  left: number,
  right: number,
  top: number,
  bottom: number,
};*/
/*:: export type DraggableData = {
  node: HTMLElement,
  x: number, y: number,
  deltaX: number, deltaY: number,
  lastX: number, lastY: number,
};*/
/*:: export type DraggableEventHandler = (e: MouseEvent, data: DraggableData) => void;*/
/*:: export type ControlPosition = {x: number, y: number};*/


//
// Define <DraggableCore>.
//
// <DraggableCore> is for advanced usage of <Draggable>. It maintains minimal internal state so it can
// work well with libraries that require more control over the element.
//

/*:: export type DraggableCoreProps = {
  allowAnyClick: boolean,
  cancel: string,
  children: ReactElement<any>,
  disabled: boolean,
  enableUserSelectHack: boolean,
  offsetParent: HTMLElement,
  grid: [number, number],
  handle: string,
  onStart: DraggableEventHandler,
  onDrag: DraggableEventHandler,
  onStop: DraggableEventHandler,
  onMouseDown: (e: MouseEvent) => void,
};*/

var DraggableCore = function (_React$Component) {
  _inherits(DraggableCore, _React$Component);

  function DraggableCore() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DraggableCore);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DraggableCore.__proto__ || Object.getPrototypeOf(DraggableCore)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      dragging: false,
      // Used while dragging to determine deltas.
      lastX: NaN, lastY: NaN,
      touchIdentifier: null,
      settingPosition: false
    }, _this.handleDragStart = function (e) {
      // Make it possible to attach event handlers on top of this one.
      _this.props.onMouseDown(e);

      // Only accept left-clicks.
      if (!_this.props.allowAnyClick && typeof e.button === 'number' && e.button !== 0) return false;

      // Get nodes. Be sure to grab relative document (could be iframed)
      var thisNode = __WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.findDOMNode(_this);
      if (!thisNode || !thisNode.ownerDocument || !thisNode.ownerDocument.body) {
        throw new Error('<DraggableCore> not mounted on DragStart!');
      }
      var ownerDocument = thisNode.ownerDocument;

      // Short circuit if handle or cancel prop was provided and selector doesn't match.

      if (_this.props.disabled || !(e.target instanceof ownerDocument.defaultView.Node) || _this.props.handle && !Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["i" /* matchesSelectorAndParentsTo */])(e.target, _this.props.handle, thisNode) || _this.props.cancel && Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["i" /* matchesSelectorAndParentsTo */])(e.target, _this.props.cancel, thisNode)) {
        return;
      }

      // Set touch identifier in component state if this is a touch event. This allows us to
      // distinguish between individual touches on multitouch screens by identifying which
      // touchpoint was set to this element.
      var touchIdentifier = Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["f" /* getTouchIdentifier */])(e);
      _this.setState({ touchIdentifier: touchIdentifier });

      // Get the current drag point from the event. This is used as the offset.
      var position = Object(__WEBPACK_IMPORTED_MODULE_4__utils_positionFns__["f" /* getControlPosition */])(e, touchIdentifier, _this);
      if (position == null) return; // not possible but satisfies flow
      var x = position.x,
          y = position.y;

      // Create an event object with all the data parents need to make a decision here.

      var coreEvent = Object(__WEBPACK_IMPORTED_MODULE_4__utils_positionFns__["c" /* createCoreData */])(_this, x, y);

      Object(__WEBPACK_IMPORTED_MODULE_6__utils_log__["a" /* default */])('DraggableCore: handleDragStart: %j', coreEvent);

      // Call event handler. If it returns explicit false, cancel.
      Object(__WEBPACK_IMPORTED_MODULE_6__utils_log__["a" /* default */])('calling', _this.props.onStart);
      var shouldUpdate = _this.props.onStart(e, coreEvent);
      if (shouldUpdate === false) return;

      // Add a style to the body to disable user-select. This prevents text from
      // being selected all over the page.
      if (_this.props.enableUserSelectHack) Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["b" /* addUserSelectStyles */])(ownerDocument);

      // Initiate dragging. Set the current x and y as offsets
      // so we know how much we've moved during the drag. This allows us
      // to drag elements around even if they have been moved, without issue.
      _this.setState({
        dragging: true,

        lastX: x,
        lastY: y
      });

      // Add events to the document directly so we catch when the user's mouse/touch moves outside of
      // this element. We use different events depending on whether or not we have detected that this
      // is a touch-capable device.
      Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["a" /* addEvent */])(ownerDocument, dragEventFor.move, _this.handleDrag);
      Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["a" /* addEvent */])(ownerDocument, dragEventFor.stop, _this.handleDragStop);
    }, _this.handleDrag = function (e) {

      if (_this.state.settingPosition) {
        return;
      }

      // Prevent scrolling on mobile devices, like ipad/iphone.
      if (e.type === 'touchmove') e.preventDefault();

      // Get the current drag point from the event. This is used as the offset.
      var position = Object(__WEBPACK_IMPORTED_MODULE_4__utils_positionFns__["f" /* getControlPosition */])(e, _this.state.touchIdentifier, _this);
      if (position == null) return;
      var x = position.x,
          y = position.y;

      // Snap to grid if prop has been provided

      if (Array.isArray(_this.props.grid)) {
        var _deltaX = x - _this.state.lastX,
            _deltaY = y - _this.state.lastY;

        var _snapToGrid = Object(__WEBPACK_IMPORTED_MODULE_4__utils_positionFns__["g" /* snapToGrid */])(_this.props.grid, _deltaX, _deltaY);

        var _snapToGrid2 = _slicedToArray(_snapToGrid, 2);

        _deltaX = _snapToGrid2[0];
        _deltaY = _snapToGrid2[1];

        if (!_deltaX && !_deltaY) return; // skip useless drag
        x = _this.state.lastX + _deltaX, y = _this.state.lastY + _deltaY;

        var _snapToGrid3 = Object(__WEBPACK_IMPORTED_MODULE_4__utils_positionFns__["g" /* snapToGrid */])(_this.props.grid, x, y);

        var _snapToGrid4 = _slicedToArray(_snapToGrid3, 2);

        x = _snapToGrid4[0];
        y = _snapToGrid4[1];
      }

      var coreEvent = Object(__WEBPACK_IMPORTED_MODULE_4__utils_positionFns__["c" /* createCoreData */])(_this, x, y);

      Object(__WEBPACK_IMPORTED_MODULE_6__utils_log__["a" /* default */])('DraggableCore: handleDrag: %j', coreEvent);

      // Call event handler. If it returns explicit false, trigger end.
      var shouldUpdate = _this.props.onDrag(e, coreEvent);
      if (shouldUpdate === false) {
        try {
          // $FlowIgnore
          _this.handleDragStop(new MouseEvent('mouseup'));
        } catch (err) {
          // Old browsers
          var event = ((document.createEvent('MouseEvents') /*: any*/) /*: MouseTouchEvent*/);
          // I see why this insanity was deprecated
          // $FlowIgnore
          event.initMouseEvent('mouseup', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
          _this.handleDragStop(event);
        }
        return;
      }

      _this.setState({
        settingPosition: true
      }, function () {
        this.setState({
          lastX: x,
          lastY: y
        }, function () {
          this.setState({
            settingPosition: false
          });
        });
      });
    }, _this.handleDragStop = function (e) {
      if (!_this.state.dragging) return;

      var position = Object(__WEBPACK_IMPORTED_MODULE_4__utils_positionFns__["f" /* getControlPosition */])(e, _this.state.touchIdentifier, _this);
      if (position == null) return;
      var x = position.x,
          y = position.y;

      var coreEvent = Object(__WEBPACK_IMPORTED_MODULE_4__utils_positionFns__["c" /* createCoreData */])(_this, x, y);

      var thisNode = __WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.findDOMNode(_this);
      if (thisNode) {
        // Remove user-select hack
        if (_this.props.enableUserSelectHack) Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["n" /* removeUserSelectStyles */])(thisNode.ownerDocument);
      }

      Object(__WEBPACK_IMPORTED_MODULE_6__utils_log__["a" /* default */])('DraggableCore: handleDragStop: %j', coreEvent);

      // Reset the el.
      _this.setState({
        dragging: false,
        lastX: NaN,
        lastY: NaN
      });

      // Call event handler
      _this.props.onStop(e, coreEvent);

      if (thisNode) {
        // Remove event handlers
        Object(__WEBPACK_IMPORTED_MODULE_6__utils_log__["a" /* default */])('DraggableCore: Removing handlers');
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["m" /* removeEvent */])(thisNode.ownerDocument, dragEventFor.move, _this.handleDrag);
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["m" /* removeEvent */])(thisNode.ownerDocument, dragEventFor.stop, _this.handleDragStop);
      }
    }, _this.onMouseDown = function (e) {
      dragEventFor = eventsFor.mouse; // on touchscreen laptops we could switch back to mouse

      return _this.handleDragStart(e);
    }, _this.onMouseUp = function (e) {
      dragEventFor = eventsFor.mouse;

      return _this.handleDragStop(e);
    }, _this.onTouchStart = function (e) {
      // We're on a touch device now, so change the event handlers
      dragEventFor = eventsFor.touch;

      return _this.handleDragStart(e);
    }, _this.onTouchEnd = function (e) {
      // We're on a touch device now, so change the event handlers
      dragEventFor = eventsFor.touch;

      return _this.handleDragStop(e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DraggableCore, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // Remove any leftover event handlers. Remove both touch and mouse handlers in case
      // some browser quirk caused a touch event to fire during a mouse move, or vice versa.
      var thisNode = __WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.findDOMNode(this);
      if (thisNode) {
        var ownerDocument = thisNode.ownerDocument;

        Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["m" /* removeEvent */])(ownerDocument, eventsFor.mouse.move, this.handleDrag);
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["m" /* removeEvent */])(ownerDocument, eventsFor.touch.move, this.handleDrag);
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["m" /* removeEvent */])(ownerDocument, eventsFor.mouse.stop, this.handleDragStop);
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["m" /* removeEvent */])(ownerDocument, eventsFor.touch.stop, this.handleDragStop);
        if (this.props.enableUserSelectHack) Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["n" /* removeUserSelectStyles */])(ownerDocument);
      }
    }

    // Same as onMouseDown (start drag), but now consider this a touch device.

  }, {
    key: 'render',
    value: function render() {
      // Reuse the child provided
      // This makes it flexible to use whatever element is wanted (div, ul, etc)
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.only(this.props.children), {
        style: Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["o" /* styleHacks */])(this.props.children.props.style),

        // Note: mouseMove handler is attached to document so it will still function
        // when the user drags quickly and leaves the bounds of the element.
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        onMouseUp: this.onMouseUp,
        onTouchEnd: this.onTouchEnd
      });
    }
  }]);

  return DraggableCore;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

DraggableCore.displayName = 'DraggableCore';
DraggableCore.propTypes = {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,

  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,

  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,

  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function offsetParent(props /*: DraggableCoreProps*/, propName /*: $Keys<DraggableCoreProps>*/) {
    if (props[propName] && props[propName].nodeType !== 1) {
      throw new Error('Draggable\'s offsetParent must be a DOM Node.');
    }
  },

  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number),

  /**
   * `handle` specifies a selector to be used as the handle that initiates drag.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable handle=".handle">
   *              <div>
   *                  <div className="handle">Click me to drag</div>
   *                  <div>This is some other content</div>
   *              </div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  handle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,

  /**
   * `cancel` specifies a selector to be used to prevent drag initialization.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *           return(
   *               <Draggable cancel=".cancel">
   *                   <div>
   *                     <div className="cancel">You can't drag from here</div>
   *                     <div>Dragging here works fine</div>
   *                   </div>
   *               </Draggable>
   *           );
   *       }
   *   });
   * ```
   */
  cancel: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,

  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,

  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,

  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,

  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,

  /**
   * These properties should be defined on the child, not here.
   */
  className: __WEBPACK_IMPORTED_MODULE_5__utils_shims__["a" /* dontSetMe */],
  style: __WEBPACK_IMPORTED_MODULE_5__utils_shims__["a" /* dontSetMe */],
  transform: __WEBPACK_IMPORTED_MODULE_5__utils_shims__["a" /* dontSetMe */]
};
DraggableCore.defaultProps = {
  allowAnyClick: false, // by default only accept left click
  cancel: null,
  disabled: false,
  enableUserSelectHack: true,
  offsetParent: null,
  handle: null,
  grid: null,
  transform: null,
  onStart: function onStart() {},
  onDrag: function onDrag() {},
  onStop: function onStop() {},
  onMouseDown: function onMouseDown() {}
};
/* harmony default export */ __webpack_exports__["default"] = (DraggableCore);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = log;

/*eslint no-console:0*/
function log() {
  var _console;

  if (true) (_console = console).log.apply(_console, arguments);
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var Draggable = __webpack_require__(9).default;

// Previous versions of this lib exported <Draggable> as the root export. As to not break
// them, or TypeScript, we export *both* as the root and as 'default'.
// See https://github.com/mzabriskie/react-draggable/pull/254
// and https://github.com/mzabriskie/react-draggable/issues/266
module.exports = Draggable;
module.exports.default = Draggable;
module.exports.DraggableCore = __webpack_require__(6).default;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_domFns__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_positionFns__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_shims__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DraggableCore__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_log__ = __webpack_require__(7);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









/*:: import type {ControlPosition, DraggableBounds, DraggableCoreProps} from './DraggableCore';*/


/*:: import type {DraggableEventHandler} from './utils/types';*/
/*:: import type {Element as ReactElement} from 'react';*/
/*:: type DraggableState = {
  dragging: boolean,
  dragged: boolean,
  x: number, y: number,
  slackX: number, slackY: number,
  isElementSVG: boolean
};*/


//
// Define <Draggable>
//

/*:: export type DraggableProps = {
  ...$Exact<DraggableCoreProps>,
  axis: 'both' | 'x' | 'y' | 'none',
  bounds: DraggableBounds | string | false,
  defaultClassName: string,
  defaultClassNameDragging: string,
  defaultClassNameDragged: string,
  defaultPosition: ControlPosition,
  position: ControlPosition,
};*/

var Draggable = function (_React$Component) {
  _inherits(Draggable, _React$Component);

  function Draggable(props /*: DraggableProps*/) {
    _classCallCheck(this, Draggable);

    var _this = _possibleConstructorReturn(this, (Draggable.__proto__ || Object.getPrototypeOf(Draggable)).call(this, props));

    _this.onDragStart = function (e, coreData) {
      Object(__WEBPACK_IMPORTED_MODULE_8__utils_log__["a" /* default */])('Draggable: onDragStart: %j', coreData);

      // Short-circuit if user's callback killed it.
      var shouldStart = _this.props.onStart(e, Object(__WEBPACK_IMPORTED_MODULE_5__utils_positionFns__["d" /* createDraggableData */])(_this, coreData));
      // Kills start event on core as well, so move handlers are never bound.
      if (shouldStart === false) return false;

      _this.setState({ dragging: true, dragged: true });
    };

    _this.onDrag = function (e, coreData) {
      if (!_this.state.dragging) return false;
      Object(__WEBPACK_IMPORTED_MODULE_8__utils_log__["a" /* default */])('Draggable: onDrag: %j', coreData);

      var uiData = Object(__WEBPACK_IMPORTED_MODULE_5__utils_positionFns__["d" /* createDraggableData */])(_this, coreData);

      var newState /*: $Shape<DraggableState>*/ = {
        x: uiData.x,
        y: uiData.y
      };

      // Keep within bounds.
      if (_this.props.bounds) {
        // Save original x and y.
        var _x = newState.x,
            _y = newState.y;

        // Add slack to the values used to calculate bound position. This will ensure that if
        // we start removing slack, the element won't react to it right away until it's been
        // completely removed.

        newState.x += _this.state.slackX;
        newState.y += _this.state.slackY;

        // Get bound position. This will ceil/floor the x and y within the boundaries.

        var _getBoundPosition = Object(__WEBPACK_IMPORTED_MODULE_5__utils_positionFns__["e" /* getBoundPosition */])(_this, newState.x, newState.y),
            _getBoundPosition2 = _slicedToArray(_getBoundPosition, 2),
            newStateX = _getBoundPosition2[0],
            newStateY = _getBoundPosition2[1];

        newState.x = newStateX;
        newState.y = newStateY;

        // Recalculate slack by noting how much was shaved by the boundPosition handler.
        newState.slackX = _this.state.slackX + (_x - newState.x);
        newState.slackY = _this.state.slackY + (_y - newState.y);

        // Update the event we fire to reflect what really happened after bounds took effect.
        uiData.x = newState.x;
        uiData.y = newState.y;
        uiData.deltaX = newState.x - _this.state.x;
        uiData.deltaY = newState.y - _this.state.y;
      }

      // Short-circuit if user's callback killed it.
      var shouldUpdate = _this.props.onDrag(e, uiData);
      if (shouldUpdate === false) return false;

      _this.setState(newState);
    };

    _this.onDragStop = function (e, coreData) {
      if (!_this.state.dragging) return false;

      // Short-circuit if user's callback killed it.
      var shouldStop = _this.props.onStop(e, Object(__WEBPACK_IMPORTED_MODULE_5__utils_positionFns__["d" /* createDraggableData */])(_this, coreData));
      if (shouldStop === false) return false;

      Object(__WEBPACK_IMPORTED_MODULE_8__utils_log__["a" /* default */])('Draggable: onDragStop: %j', coreData);

      var newState /*: $Shape<DraggableState>*/ = {
        dragging: false,
        slackX: 0,
        slackY: 0
      };

      // If this is a controlled component, the result of this operation will be to
      // revert back to the old position. We expect a handler on `onDragStop`, at the least.
      var controlled = Boolean(_this.props.position);
      if (controlled) {
        var _this$props$position = _this.props.position,
            _x2 = _this$props$position.x,
            _y2 = _this$props$position.y;

        newState.x = _x2;
        newState.y = _y2;
      }

      _this.setState(newState);
    };

    _this.state = {
      // Whether or not we are currently dragging.
      dragging: false,

      // Whether or not we have been dragged before.
      dragged: false,

      // Current transform x and y.
      x: props.position ? props.position.x : props.defaultPosition.x,
      y: props.position ? props.position.y : props.defaultPosition.y,

      // Used for compensating for out-of-bounds drags
      slackX: 0, slackY: 0,

      // Can only determine if SVG after mounting
      isElementSVG: false
    };
    return _this;
  }

  _createClass(Draggable, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.position && !(this.props.onDrag || this.props.onStop)) {
        // eslint-disable-next-line
        console.warn('A `position` was applied to this <Draggable>, without drag handlers. This will make this ' + 'component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the ' + '`position` of this element.');
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Check to see if the element passed is an instanceof SVGElement
      if (typeof window.SVGElement !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.findDOMNode(this) instanceof window.SVGElement) {
        this.setState({ isElementSVG: true });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps /*: Object*/) {
      // Set x/y if position has changed
      if (nextProps.position && (!this.props.position || nextProps.position.x !== this.props.position.x || nextProps.position.y !== this.props.position.y)) {
        this.setState({ x: nextProps.position.x, y: nextProps.position.y });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.setState({ dragging: false }); // prevents invariant if unmounted while dragging
    }
  }, {
    key: 'render',
    value: function render() /*: ReactElement<any>*/ {
      var _classNames;

      var style = {},
          svgTransform = null;

      // If this is controlled, we don't want to move it - unless it's dragging.
      var controlled = Boolean(this.props.position);
      var draggable = !controlled || this.state.dragging;

      var position = this.props.position || this.props.defaultPosition;
      var transformOpts = {
        // Set left if horizontal drag is enabled
        x: Object(__WEBPACK_IMPORTED_MODULE_5__utils_positionFns__["a" /* canDragX */])(this) && draggable ? this.state.x : position.x,

        // Set top if vertical drag is enabled
        y: Object(__WEBPACK_IMPORTED_MODULE_5__utils_positionFns__["b" /* canDragY */])(this) && draggable ? this.state.y : position.y
      };

      // If this element was SVG, we use the `transform` attribute.
      if (this.state.isElementSVG) {
        svgTransform = Object(__WEBPACK_IMPORTED_MODULE_4__utils_domFns__["d" /* createSVGTransform */])(transformOpts);
      } else {
        // Add a CSS transform to move the element around. This allows us to move the element around
        // without worrying about whether or not it is relatively or absolutely positioned.
        // If the item you are dragging already has a transform set, wrap it in a <span> so <Draggable>
        // has a clean slate.
        style = Object(__WEBPACK_IMPORTED_MODULE_4__utils_domFns__["c" /* createCSSTransform */])(transformOpts);
      }

      var _props = this.props,
          defaultClassName = _props.defaultClassName,
          defaultClassNameDragging = _props.defaultClassNameDragging,
          defaultClassNameDragged = _props.defaultClassNameDragged;


      var children = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.only(this.props.children);

      // Mark with class while dragging
      var className = __WEBPACK_IMPORTED_MODULE_3_classnames___default()(children.props.className || '', defaultClassName, (_classNames = {}, _defineProperty(_classNames, defaultClassNameDragging, this.state.dragging), _defineProperty(_classNames, defaultClassNameDragged, this.state.dragged), _classNames));

      // Reuse the child provided
      // This makes it flexible to use whatever element is wanted (div, ul, etc)
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7__DraggableCore__["default"],
        _extends({}, this.props, { onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(children, {
          className: className,
          style: _extends({}, children.props.style, style),
          transform: svgTransform
        })
      );
    }
  }]);

  return Draggable;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Draggable.displayName = 'Draggable';
Draggable.propTypes = _extends({}, __WEBPACK_IMPORTED_MODULE_7__DraggableCore__["default"].propTypes, {

  /**
   * `axis` determines which axis the draggable can move.
   *
   *  Note that all callbacks will still return data as normal. This only
   *  controls flushing to the DOM.
   *
   * 'both' allows movement horizontally and vertically.
   * 'x' limits movement to horizontal axis.
   * 'y' limits movement to vertical axis.
   * 'none' limits all movement.
   *
   * Defaults to 'both'.
   */
  axis: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['both', 'x', 'y', 'none']),

  /**
   * `bounds` determines the range of movement available to the element.
   * Available values are:
   *
   * 'parent' restricts movement within the Draggable's parent node.
   *
   * Alternatively, pass an object with the following properties, all of which are optional:
   *
   * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
   *
   * All values are in px.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable bounds={{right: 300, bottom: 300}}>
   *              <div>Content</div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  bounds: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    left: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    right: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    top: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    bottom: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
  }), __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf([false])]),

  defaultClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  defaultClassNameDragging: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  defaultClassNameDragged: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,

  /**
   * `defaultPosition` specifies the x and y that the dragged item should start at
   *
   * Example:
   *
   * ```jsx
   *      let App = React.createClass({
   *          render: function () {
   *              return (
   *                  <Draggable defaultPosition={{x: 25, y: 25}}>
   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
   *                  </Draggable>
   *              );
   *          }
   *      });
   * ```
   */
  defaultPosition: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    x: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    y: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
  }),

  /**
   * `position`, if present, defines the current position of the element.
   *
   *  This is similar to how form elements in React work - if no `position` is supplied, the component
   *  is uncontrolled.
   *
   * Example:
   *
   * ```jsx
   *      let App = React.createClass({
   *          render: function () {
   *              return (
   *                  <Draggable position={{x: 25, y: 25}}>
   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
   *                  </Draggable>
   *              );
   *          }
   *      });
   * ```
   */
  position: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    x: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    y: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
  }),

  /**
   * These properties should be defined on the child, not here.
   */
  className: __WEBPACK_IMPORTED_MODULE_6__utils_shims__["a" /* dontSetMe */],
  style: __WEBPACK_IMPORTED_MODULE_6__utils_shims__["a" /* dontSetMe */],
  transform: __WEBPACK_IMPORTED_MODULE_6__utils_shims__["a" /* dontSetMe */]
});
Draggable.defaultProps = _extends({}, __WEBPACK_IMPORTED_MODULE_7__DraggableCore__["default"].defaultProps, {
  axis: 'both',
  bounds: false,
  defaultClassName: 'react-draggable',
  defaultClassNameDragging: 'react-draggable-dragging',
  defaultClassNameDragged: 'react-draggable-dragged',
  defaultPosition: { x: 0, y: 0 },
  position: null
});
/* harmony default export */ __webpack_exports__["default"] = (Draggable);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(11);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIi4uL3dlYnBhY2svYm9vdHN0cmFwIDk5MjE0NzExNWY1ZTRmNjkwMTA4IiwiLi4vLi9saWIvdXRpbHMvc2hpbXMuanMiLCIuLi9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwicmVhY3QtZG9tXCIsXCJjb21tb25qczJcIjpcInJlYWN0LWRvbVwiLFwiYW1kXCI6XCJyZWFjdC1kb21cIixcInJvb3RcIjpcIlJlYWN0RE9NXCJ9IiwiLi4vLi9saWIvdXRpbHMvZ2V0UHJlZml4LmpzIiwiLi4vLi9saWIvdXRpbHMvZG9tRm5zLmpzIiwiLi4vZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCIsXCJyb290XCI6XCJSZWFjdFwifSIsIi4uLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCIuLi8uL2xpYi91dGlscy9wb3NpdGlvbkZucy5qcyIsIi4uLy4vbGliL0RyYWdnYWJsZUNvcmUuanMiLCIuLi8uL2xpYi91dGlscy9sb2cuanMiLCIuLi8uL2luZGV4LmpzIiwiLi4vLi9saWIvRHJhZ2dhYmxlLmpzIiwiLi4vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanMiLCIuLi8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIi4uLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZmluZEluQXJyYXkiLCJhcnJheSIsImNhbGxiYWNrIiwiaSIsImxlbmd0aCIsImFwcGx5IiwiaXNGdW5jdGlvbiIsImZ1bmMiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJpc051bSIsIm51bSIsImlzTmFOIiwiaW50IiwiYSIsInBhcnNlSW50IiwiZG9udFNldE1lIiwicHJvcHMiLCJwcm9wTmFtZSIsImNvbXBvbmVudE5hbWUiLCJFcnJvciIsInByZWZpeGVzIiwiZ2V0UHJlZml4IiwicHJvcCIsIndpbmRvdyIsImRvY3VtZW50Iiwic3R5bGUiLCJkb2N1bWVudEVsZW1lbnQiLCJicm93c2VyUHJlZml4VG9LZXkiLCJwcmVmaXgiLCJrZWJhYlRvVGl0bGVDYXNlIiwiYnJvd3NlclByZWZpeFRvU3R5bGUiLCJ0b0xvd2VyQ2FzZSIsInN0ciIsIm91dCIsInNob3VsZENhcGl0YWxpemUiLCJ0b1VwcGVyQ2FzZSIsIm1hdGNoZXNTZWxlY3RvckZ1bmMiLCJtYXRjaGVzU2VsZWN0b3IiLCJlbCIsInNlbGVjdG9yIiwibWV0aG9kIiwibWF0Y2hlc1NlbGVjdG9yQW5kUGFyZW50c1RvIiwiYmFzZU5vZGUiLCJub2RlIiwicGFyZW50Tm9kZSIsImFkZEV2ZW50IiwiZXZlbnQiLCJoYW5kbGVyIiwiYXR0YWNoRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnQiLCJkZXRhY2hFdmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvdXRlckhlaWdodCIsImhlaWdodCIsImNsaWVudEhlaWdodCIsImNvbXB1dGVkU3R5bGUiLCJvd25lckRvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJnZXRDb21wdXRlZFN0eWxlIiwiYm9yZGVyVG9wV2lkdGgiLCJib3JkZXJCb3R0b21XaWR0aCIsIm91dGVyV2lkdGgiLCJ3aWR0aCIsImNsaWVudFdpZHRoIiwiYm9yZGVyTGVmdFdpZHRoIiwiYm9yZGVyUmlnaHRXaWR0aCIsImlubmVySGVpZ2h0IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJpbm5lcldpZHRoIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJvZmZzZXRYWUZyb21QYXJlbnQiLCJldnQiLCJvZmZzZXRQYXJlbnQiLCJpc0JvZHkiLCJib2R5Iiwib2Zmc2V0UGFyZW50UmVjdCIsImxlZnQiLCJ0b3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ4IiwiY2xpZW50WCIsInNjcm9sbExlZnQiLCJ5IiwiY2xpZW50WSIsInNjcm9sbFRvcCIsImNyZWF0ZUNTU1RyYW5zZm9ybSIsImJyb3dzZXJQcmVmaXgiLCJjcmVhdGVTVkdUcmFuc2Zvcm0iLCJnZXRUb3VjaCIsImUiLCJpZGVudGlmaWVyIiwidGFyZ2V0VG91Y2hlcyIsInQiLCJjaGFuZ2VkVG91Y2hlcyIsImdldFRvdWNoSWRlbnRpZmllciIsImFkZFVzZXJTZWxlY3RTdHlsZXMiLCJkb2MiLCJzdHlsZUVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImlkIiwiaW5uZXJIVE1MIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJhcHBlbmRDaGlsZCIsImFkZENsYXNzTmFtZSIsInJlbW92ZVVzZXJTZWxlY3RTdHlsZXMiLCJyZW1vdmVDbGFzc05hbWUiLCJzZWxlY3Rpb24iLCJlbXB0eSIsImdldFNlbGVjdGlvbiIsInJlbW92ZUFsbFJhbmdlcyIsInN0eWxlSGFja3MiLCJjaGlsZFN0eWxlIiwidG91Y2hBY3Rpb24iLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJtYXRjaCIsIlJlZ0V4cCIsInJlbW92ZSIsInJlcGxhY2UiLCJnZXRCb3VuZFBvc2l0aW9uIiwiZHJhZ2dhYmxlIiwiYm91bmRzIiwiY2xvbmVCb3VuZHMiLCJmaW5kRE9NTm9kZSIsIm93bmVyV2luZG93IiwiYm91bmROb2RlIiwicXVlcnlTZWxlY3RvciIsIkhUTUxFbGVtZW50Iiwibm9kZVN0eWxlIiwiYm91bmROb2RlU3R5bGUiLCJvZmZzZXRMZWZ0IiwibWFyZ2luTGVmdCIsIm9mZnNldFRvcCIsIm1hcmdpblRvcCIsInJpZ2h0IiwibWFyZ2luUmlnaHQiLCJib3R0b20iLCJtYXJnaW5Cb3R0b20iLCJNYXRoIiwibWluIiwibWF4Iiwic25hcFRvR3JpZCIsImdyaWQiLCJwZW5kaW5nWCIsInBlbmRpbmdZIiwicm91bmQiLCJjYW5EcmFnWCIsImF4aXMiLCJjYW5EcmFnWSIsImdldENvbnRyb2xQb3NpdGlvbiIsInRvdWNoSWRlbnRpZmllciIsImRyYWdnYWJsZUNvcmUiLCJ0b3VjaE9iaiIsImNyZWF0ZUNvcmVEYXRhIiwic3RhdGUiLCJpc1N0YXJ0IiwibGFzdFgiLCJkZWx0YVgiLCJkZWx0YVkiLCJsYXN0WSIsImNyZWF0ZURyYWdnYWJsZURhdGEiLCJjb3JlRGF0YSIsIlJlYWN0RE9NIiwiZXZlbnRzRm9yIiwidG91Y2giLCJzdGFydCIsIm1vdmUiLCJzdG9wIiwibW91c2UiLCJkcmFnRXZlbnRGb3IiLCJEcmFnZ2FibGVDb3JlIiwiZHJhZ2dpbmciLCJOYU4iLCJzZXR0aW5nUG9zaXRpb24iLCJoYW5kbGVEcmFnU3RhcnQiLCJvbk1vdXNlRG93biIsImFsbG93QW55Q2xpY2siLCJidXR0b24iLCJ0aGlzTm9kZSIsImRpc2FibGVkIiwidGFyZ2V0IiwiTm9kZSIsImhhbmRsZSIsImNhbmNlbCIsInNldFN0YXRlIiwicG9zaXRpb24iLCJjb3JlRXZlbnQiLCJsb2ciLCJvblN0YXJ0Iiwic2hvdWxkVXBkYXRlIiwiZW5hYmxlVXNlclNlbGVjdEhhY2siLCJoYW5kbGVEcmFnIiwiaGFuZGxlRHJhZ1N0b3AiLCJwcmV2ZW50RGVmYXVsdCIsIkFycmF5IiwiaXNBcnJheSIsIm9uRHJhZyIsIk1vdXNlRXZlbnQiLCJlcnIiLCJjcmVhdGVFdmVudCIsImluaXRNb3VzZUV2ZW50Iiwib25TdG9wIiwib25Nb3VzZVVwIiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VjaEVuZCIsIlJlYWN0IiwiY2xvbmVFbGVtZW50IiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRyZW4iLCJDb21wb25lbnQiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJub2RlVHlwZSIsImFycmF5T2YiLCJudW1iZXIiLCJzdHJpbmciLCJ0cmFuc2Zvcm0iLCJkZWZhdWx0UHJvcHMiLCJwcm9jZXNzIiwiRHJhZ2dhYmxlIiwicmVxdWlyZSIsImRlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwib25EcmFnU3RhcnQiLCJzaG91bGRTdGFydCIsImRyYWdnZWQiLCJ1aURhdGEiLCJuZXdTdGF0ZSIsInNsYWNrWCIsInNsYWNrWSIsIm5ld1N0YXRlWCIsIm5ld1N0YXRlWSIsIm9uRHJhZ1N0b3AiLCJzaG91bGRTdG9wIiwiY29udHJvbGxlZCIsIkJvb2xlYW4iLCJkZWZhdWx0UG9zaXRpb24iLCJpc0VsZW1lbnRTVkciLCJjb25zb2xlIiwid2FybiIsIlNWR0VsZW1lbnQiLCJuZXh0UHJvcHMiLCJzdmdUcmFuc2Zvcm0iLCJ0cmFuc2Zvcm1PcHRzIiwiZGVmYXVsdENsYXNzTmFtZSIsImRlZmF1bHRDbGFzc05hbWVEcmFnZ2luZyIsImRlZmF1bHRDbGFzc05hbWVEcmFnZ2VkIiwiY2xhc3NOYW1lcyIsIm9uZU9mIiwib25lT2ZUeXBlIiwic2hhcGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNURBO0FBQ08sU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsK0JBQW9EQyxRQUFwRCwyQkFBNkU7QUFDbEYsT0FBSyxJQUFJQyxJQUFJLENBQVIsRUFBV0MsU0FBU0gsTUFBTUcsTUFBL0IsRUFBdUNELElBQUlDLE1BQTNDLEVBQW1E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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViOztBQUVBOzs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZ0JBQWdCOztBQUVoQjtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxVQUFVLElBQTRFO0FBQ3hGO0FBQ0EsRUFBRSxpQ0FBcUIsRUFBRSxtQ0FBRTtBQUMzQjtBQUNBLEdBQUc7QUFBQSxvR0FBQztBQUNKLEVBQUU7QUFDRjtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIuL2Rpc3QvcmVhY3QtZHJhZ2dhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3QtZG9tXCIpLCByZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3QtZG9tXCIsIFwicmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUmVhY3REcmFnZ2FibGVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdC1kb21cIiksIHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY3REcmFnZ2FibGVcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdERPTVwiXSwgcm9vdFtcIlJlYWN0XCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTkyMTQ3MTE1ZjVlNGY2OTAxMDgiLCIvLyBAZmxvd1xyXG4vLyBAY3JlZGl0cyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9yb2dvemhuaWtvZmYvYTQzY2ZlZDI3YzQxZTRlNjhjZGNcclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRJbkFycmF5KGFycmF5OiBBcnJheTxhbnk+IHwgVG91Y2hMaXN0LCBjYWxsYmFjazogRnVuY3Rpb24pOiBhbnkge1xyXG4gIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBhcnJheS5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGNhbGxiYWNrLmFwcGx5KGNhbGxiYWNrLCBbYXJyYXlbaV0sIGksIGFycmF5XSkpIHJldHVybiBhcnJheVtpXTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKGZ1bmM6IGFueSk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiB0eXBlb2YgZnVuYyA9PT0gJ2Z1bmN0aW9uJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZnVuYykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bShudW06IGFueSk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4obnVtKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGludChhOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gIHJldHVybiBwYXJzZUludChhLCAxMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkb250U2V0TWUocHJvcHM6IE9iamVjdCwgcHJvcE5hbWU6IHN0cmluZywgY29tcG9uZW50TmFtZTogc3RyaW5nKSB7XHJcbiAgaWYgKHByb3BzW3Byb3BOYW1lXSkge1xyXG4gICAgcmV0dXJuIG5ldyBFcnJvcihgSW52YWxpZCBwcm9wICR7cHJvcE5hbWV9IHBhc3NlZCB0byAke2NvbXBvbmVudE5hbWV9IC0gZG8gbm90IHNldCB0aGlzLCBzZXQgaXQgb24gdGhlIGNoaWxkLmApO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvdXRpbHMvc2hpbXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJyZWFjdC1kb21cIixcImNvbW1vbmpzMlwiOlwicmVhY3QtZG9tXCIsXCJhbWRcIjpcInJlYWN0LWRvbVwiLFwicm9vdFwiOlwiUmVhY3RET01cIn1cbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQGZsb3dcclxuY29uc3QgcHJlZml4ZXMgPSBbJ01veicsICdXZWJraXQnLCAnTycsICdtcyddO1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJlZml4KHByb3A6IHN0cmluZz0ndHJhbnNmb3JtJyk6IHN0cmluZyB7XHJcbiAgLy8gQ2hlY2tpbmcgc3BlY2lmaWNhbGx5IGZvciAnd2luZG93LmRvY3VtZW50JyBpcyBmb3IgcHNldWRvLWJyb3dzZXIgc2VydmVyLXNpZGVcclxuICAvLyBlbnZpcm9ubWVudHMgdGhhdCBkZWZpbmUgJ3dpbmRvdycgYXMgdGhlIGdsb2JhbCBjb250ZXh0LlxyXG4gIC8vIEUuZy4gUmVhY3QtcmFpbHMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZWFjdC1yYWlscy9wdWxsLzg0KVxyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93LmRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuICcnO1xyXG5cclxuICBjb25zdCBzdHlsZSA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XHJcblxyXG4gIGlmIChwcm9wIGluIHN0eWxlKSByZXR1cm4gJyc7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChicm93c2VyUHJlZml4VG9LZXkocHJvcCwgcHJlZml4ZXNbaV0pIGluIHN0eWxlKSByZXR1cm4gcHJlZml4ZXNbaV07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gJyc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBicm93c2VyUHJlZml4VG9LZXkocHJvcDogc3RyaW5nLCBwcmVmaXg6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIHByZWZpeCA/IGAke3ByZWZpeH0ke2tlYmFiVG9UaXRsZUNhc2UocHJvcCl9YCA6IHByb3A7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBicm93c2VyUHJlZml4VG9TdHlsZShwcm9wOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nKTogc3RyaW5nIHtcclxuICByZXR1cm4gcHJlZml4ID8gYC0ke3ByZWZpeC50b0xvd2VyQ2FzZSgpfS0ke3Byb3B9YCA6IHByb3A7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGtlYmFiVG9UaXRsZUNhc2Uoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIGxldCBvdXQgPSAnJztcclxuICBsZXQgc2hvdWxkQ2FwaXRhbGl6ZSA9IHRydWU7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChzaG91bGRDYXBpdGFsaXplKSB7XHJcbiAgICAgIG91dCArPSBzdHJbaV0udG9VcHBlckNhc2UoKTtcclxuICAgICAgc2hvdWxkQ2FwaXRhbGl6ZSA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmIChzdHJbaV0gPT09ICctJykge1xyXG4gICAgICBzaG91bGRDYXBpdGFsaXplID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG91dCArPSBzdHJbaV07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBvdXQ7XHJcbn1cclxuXHJcbi8vIERlZmF1bHQgZXhwb3J0IGlzIHRoZSBwcmVmaXggaXRzZWxmLCBsaWtlICdNb3onLCAnV2Via2l0JywgZXRjXHJcbi8vIE5vdGUgdGhhdCB5b3UgbWF5IGhhdmUgdG8gcmUtdGVzdCBmb3IgY2VydGFpbiB0aGluZ3M7IGZvciBpbnN0YW5jZSwgQ2hyb21lIDUwXHJcbi8vIGNhbiBoYW5kbGUgdW5wcmVmaXhlZCBgdHJhbnNmb3JtYCwgYnV0IG5vdCB1bnByZWZpeGVkIGB1c2VyLXNlbGVjdGBcclxuZXhwb3J0IGRlZmF1bHQgZ2V0UHJlZml4KCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi91dGlscy9nZXRQcmVmaXguanMiLCIvLyBAZmxvd1xyXG5pbXBvcnQge2ZpbmRJbkFycmF5LCBpc0Z1bmN0aW9uLCBpbnR9IGZyb20gJy4vc2hpbXMnO1xyXG5pbXBvcnQgYnJvd3NlclByZWZpeCwge2Jyb3dzZXJQcmVmaXhUb0tleX0gZnJvbSAnLi9nZXRQcmVmaXgnO1xyXG5cclxuaW1wb3J0IHR5cGUge0NvbnRyb2xQb3NpdGlvbiwgTW91c2VUb3VjaEV2ZW50fSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmxldCBtYXRjaGVzU2VsZWN0b3JGdW5jID0gJyc7XHJcbmV4cG9ydCBmdW5jdGlvbiBtYXRjaGVzU2VsZWN0b3IoZWw6IE5vZGUsIHNlbGVjdG9yOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICBpZiAoIW1hdGNoZXNTZWxlY3RvckZ1bmMpIHtcclxuICAgIG1hdGNoZXNTZWxlY3RvckZ1bmMgPSBmaW5kSW5BcnJheShbXHJcbiAgICAgICdtYXRjaGVzJyxcclxuICAgICAgJ3dlYmtpdE1hdGNoZXNTZWxlY3RvcicsXHJcbiAgICAgICdtb3pNYXRjaGVzU2VsZWN0b3InLFxyXG4gICAgICAnbXNNYXRjaGVzU2VsZWN0b3InLFxyXG4gICAgICAnb01hdGNoZXNTZWxlY3RvcidcclxuICAgIF0sIGZ1bmN0aW9uKG1ldGhvZCl7XHJcbiAgICAgIC8vICRGbG93SWdub3JlOiBEb2Vzbid0IHRoaW5rIGVsZW1lbnRzIGFyZSBpbmRleGFibGVcclxuICAgICAgcmV0dXJuIGlzRnVuY3Rpb24oZWxbbWV0aG9kXSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIE1pZ2h0IG5vdCBiZSBmb3VuZCBlbnRpcmVseSAobm90IGFuIEVsZW1lbnQ/KSAtIGluIHRoYXQgY2FzZSwgYmFpbFxyXG4gIC8vICRGbG93SWdub3JlOiBEb2Vzbid0IHRoaW5rIGVsZW1lbnRzIGFyZSBpbmRleGFibGVcclxuICBpZiAoIWlzRnVuY3Rpb24oZWxbbWF0Y2hlc1NlbGVjdG9yRnVuY10pKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gIC8vICRGbG93SWdub3JlOiBEb2Vzbid0IHRoaW5rIGVsZW1lbnRzIGFyZSBpbmRleGFibGVcclxuICByZXR1cm4gZWxbbWF0Y2hlc1NlbGVjdG9yRnVuY10oc2VsZWN0b3IpO1xyXG59XHJcblxyXG4vLyBXb3JrcyB1cCB0aGUgdHJlZSB0byB0aGUgZHJhZ2dhYmxlIGl0c2VsZiBhdHRlbXB0aW5nIHRvIG1hdGNoIHNlbGVjdG9yLlxyXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hlc1NlbGVjdG9yQW5kUGFyZW50c1RvKGVsOiBOb2RlLCBzZWxlY3Rvcjogc3RyaW5nLCBiYXNlTm9kZTogTm9kZSk6IGJvb2xlYW4ge1xyXG4gIGxldCBub2RlID0gZWw7XHJcbiAgZG8ge1xyXG4gICAgaWYgKG1hdGNoZXNTZWxlY3Rvcihub2RlLCBzZWxlY3RvcikpIHJldHVybiB0cnVlO1xyXG4gICAgaWYgKG5vZGUgPT09IGJhc2VOb2RlKSByZXR1cm4gZmFsc2U7XHJcbiAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gIH0gd2hpbGUgKG5vZGUpO1xyXG5cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRFdmVudChlbDogP05vZGUsIGV2ZW50OiBzdHJpbmcsIGhhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgaWYgKCFlbCkgeyByZXR1cm47IH1cclxuICBpZiAoZWwuYXR0YWNoRXZlbnQpIHtcclxuICAgIGVsLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudCwgaGFuZGxlcik7XHJcbiAgfSBlbHNlIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKSB7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCB0cnVlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gJEZsb3dJZ25vcmU6IERvZXNuJ3QgdGhpbmsgZWxlbWVudHMgYXJlIGluZGV4YWJsZVxyXG4gICAgZWxbJ29uJyArIGV2ZW50XSA9IGhhbmRsZXI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRXZlbnQoZWw6ID9Ob2RlLCBldmVudDogc3RyaW5nLCBoYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gIGlmICghZWwpIHsgcmV0dXJuOyB9XHJcbiAgaWYgKGVsLmRldGFjaEV2ZW50KSB7XHJcbiAgICBlbC5kZXRhY2hFdmVudCgnb24nICsgZXZlbnQsIGhhbmRsZXIpO1xyXG4gIH0gZWxzZSBpZiAoZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgdHJ1ZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vICRGbG93SWdub3JlOiBEb2Vzbid0IHRoaW5rIGVsZW1lbnRzIGFyZSBpbmRleGFibGVcclxuICAgIGVsWydvbicgKyBldmVudF0gPSBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG91dGVySGVpZ2h0KG5vZGU6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcclxuICAvLyBUaGlzIGlzIGRlbGliZXJhdGVseSBleGNsdWRpbmcgbWFyZ2luIGZvciBvdXIgY2FsY3VsYXRpb25zLCBzaW5jZSB3ZSBhcmUgdXNpbmdcclxuICAvLyBvZmZzZXRUb3Agd2hpY2ggaXMgaW5jbHVkaW5nIG1hcmdpbi4gU2VlIGdldEJvdW5kUG9zaXRpb25cclxuICBsZXQgaGVpZ2h0ID0gbm9kZS5jbGllbnRIZWlnaHQ7XHJcbiAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xyXG4gIGhlaWdodCArPSBpbnQoY29tcHV0ZWRTdHlsZS5ib3JkZXJUb3BXaWR0aCk7XHJcbiAgaGVpZ2h0ICs9IGludChjb21wdXRlZFN0eWxlLmJvcmRlckJvdHRvbVdpZHRoKTtcclxuICByZXR1cm4gaGVpZ2h0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3V0ZXJXaWR0aChub2RlOiBIVE1MRWxlbWVudCk6IG51bWJlciB7XHJcbiAgLy8gVGhpcyBpcyBkZWxpYmVyYXRlbHkgZXhjbHVkaW5nIG1hcmdpbiBmb3Igb3VyIGNhbGN1bGF0aW9ucywgc2luY2Ugd2UgYXJlIHVzaW5nXHJcbiAgLy8gb2Zmc2V0TGVmdCB3aGljaCBpcyBpbmNsdWRpbmcgbWFyZ2luLiBTZWUgZ2V0Qm91bmRQb3NpdGlvblxyXG4gIGxldCB3aWR0aCA9IG5vZGUuY2xpZW50V2lkdGg7XHJcbiAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xyXG4gIHdpZHRoICs9IGludChjb21wdXRlZFN0eWxlLmJvcmRlckxlZnRXaWR0aCk7XHJcbiAgd2lkdGggKz0gaW50KGNvbXB1dGVkU3R5bGUuYm9yZGVyUmlnaHRXaWR0aCk7XHJcbiAgcmV0dXJuIHdpZHRoO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpbm5lckhlaWdodChub2RlOiBIVE1MRWxlbWVudCk6IG51bWJlciB7XHJcbiAgbGV0IGhlaWdodCA9IG5vZGUuY2xpZW50SGVpZ2h0O1xyXG4gIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcclxuICBoZWlnaHQgLT0gaW50KGNvbXB1dGVkU3R5bGUucGFkZGluZ1RvcCk7XHJcbiAgaGVpZ2h0IC09IGludChjb21wdXRlZFN0eWxlLnBhZGRpbmdCb3R0b20pO1xyXG4gIHJldHVybiBoZWlnaHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbm5lcldpZHRoKG5vZGU6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcclxuICBsZXQgd2lkdGggPSBub2RlLmNsaWVudFdpZHRoO1xyXG4gIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcclxuICB3aWR0aCAtPSBpbnQoY29tcHV0ZWRTdHlsZS5wYWRkaW5nTGVmdCk7XHJcbiAgd2lkdGggLT0gaW50KGNvbXB1dGVkU3R5bGUucGFkZGluZ1JpZ2h0KTtcclxuICByZXR1cm4gd2lkdGg7XHJcbn1cclxuXHJcbi8vIEdldCBmcm9tIG9mZnNldFBhcmVudFxyXG5leHBvcnQgZnVuY3Rpb24gb2Zmc2V0WFlGcm9tUGFyZW50KGV2dDoge2NsaWVudFg6IG51bWJlciwgY2xpZW50WTogbnVtYmVyfSwgb2Zmc2V0UGFyZW50OiBIVE1MRWxlbWVudCk6IENvbnRyb2xQb3NpdGlvbiB7XHJcbiAgY29uc3QgaXNCb2R5ID0gb2Zmc2V0UGFyZW50ID09PSBvZmZzZXRQYXJlbnQub3duZXJEb2N1bWVudC5ib2R5O1xyXG4gIGNvbnN0IG9mZnNldFBhcmVudFJlY3QgPSBpc0JvZHkgPyB7bGVmdDogMCwgdG9wOiAwfSA6IG9mZnNldFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgY29uc3QgeCA9IGV2dC5jbGllbnRYICsgb2Zmc2V0UGFyZW50LnNjcm9sbExlZnQgLSBvZmZzZXRQYXJlbnRSZWN0LmxlZnQ7XHJcbiAgY29uc3QgeSA9IGV2dC5jbGllbnRZICsgb2Zmc2V0UGFyZW50LnNjcm9sbFRvcCAtIG9mZnNldFBhcmVudFJlY3QudG9wO1xyXG5cclxuICByZXR1cm4ge3gsIHl9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ1NTVHJhbnNmb3JtKHt4LCB5fToge3g6IG51bWJlciwgeTogbnVtYmVyfSk6IE9iamVjdCB7XHJcbiAgLy8gUmVwbGFjZSB1bml0bGVzcyBpdGVtcyB3aXRoIHB4XHJcbiAgcmV0dXJuIHtbYnJvd3NlclByZWZpeFRvS2V5KCd0cmFuc2Zvcm0nLCBicm93c2VyUHJlZml4KV06ICd0cmFuc2xhdGUoJyArIHggKyAncHgsJyArIHkgKyAncHgpJ307XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTVkdUcmFuc2Zvcm0oe3gsIHl9OiB7eDogbnVtYmVyLCB5OiBudW1iZXJ9KTogc3RyaW5nIHtcclxuICByZXR1cm4gJ3RyYW5zbGF0ZSgnICsgeCArICcsJyArIHkgKyAnKSc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3VjaChlOiBNb3VzZVRvdWNoRXZlbnQsIGlkZW50aWZpZXI6IG51bWJlcik6ID97Y2xpZW50WDogbnVtYmVyLCBjbGllbnRZOiBudW1iZXJ9IHtcclxuICByZXR1cm4gKGUudGFyZ2V0VG91Y2hlcyAmJiBmaW5kSW5BcnJheShlLnRhcmdldFRvdWNoZXMsIHQgPT4gaWRlbnRpZmllciA9PT0gdC5pZGVudGlmaWVyKSkgfHxcclxuICAgICAgICAgKGUuY2hhbmdlZFRvdWNoZXMgJiYgZmluZEluQXJyYXkoZS5jaGFuZ2VkVG91Y2hlcywgdCA9PiBpZGVudGlmaWVyID09PSB0LmlkZW50aWZpZXIpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvdWNoSWRlbnRpZmllcihlOiBNb3VzZVRvdWNoRXZlbnQpOiA/bnVtYmVyIHtcclxuICBpZiAoZS50YXJnZXRUb3VjaGVzICYmIGUudGFyZ2V0VG91Y2hlc1swXSkgcmV0dXJuIGUudGFyZ2V0VG91Y2hlc1swXS5pZGVudGlmaWVyO1xyXG4gIGlmIChlLmNoYW5nZWRUb3VjaGVzICYmIGUuY2hhbmdlZFRvdWNoZXNbMF0pIHJldHVybiBlLmNoYW5nZWRUb3VjaGVzWzBdLmlkZW50aWZpZXI7XHJcbn1cclxuXHJcbi8vIFVzZXItc2VsZWN0IEhhY2tzOlxyXG4vL1xyXG4vLyBVc2VmdWwgZm9yIHByZXZlbnRpbmcgYmx1ZSBoaWdobGlnaHRzIGFsbCBvdmVyIGV2ZXJ5dGhpbmcgd2hlbiBkcmFnZ2luZy5cclxuXHJcbi8vIE5vdGUgd2UncmUgcGFzc2luZyBgZG9jdW1lbnRgIGIvYyB3ZSBjb3VsZCBiZSBpZnJhbWVkXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRVc2VyU2VsZWN0U3R5bGVzKGRvYzogP0RvY3VtZW50KSB7XHJcbiAgaWYgKCFkb2MpIHJldHVybjtcclxuICBsZXQgc3R5bGVFbCA9IGRvYy5nZXRFbGVtZW50QnlJZCgncmVhY3QtZHJhZ2dhYmxlLXN0eWxlLWVsJyk7XHJcbiAgaWYgKCFzdHlsZUVsKSB7XHJcbiAgICBzdHlsZUVsID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgICBzdHlsZUVsLnR5cGUgPSAndGV4dC9jc3MnO1xyXG4gICAgc3R5bGVFbC5pZCA9ICdyZWFjdC1kcmFnZ2FibGUtc3R5bGUtZWwnO1xyXG4gICAgc3R5bGVFbC5pbm5lckhUTUwgPSAnLnJlYWN0LWRyYWdnYWJsZS10cmFuc3BhcmVudC1zZWxlY3Rpb24gKjo6LW1vei1zZWxlY3Rpb24ge2JhY2tncm91bmQ6IHRyYW5zcGFyZW50O31cXG4nO1xyXG4gICAgc3R5bGVFbC5pbm5lckhUTUwgKz0gJy5yZWFjdC1kcmFnZ2FibGUtdHJhbnNwYXJlbnQtc2VsZWN0aW9uICo6OnNlbGVjdGlvbiB7YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7fVxcbic7XHJcbiAgICBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzdHlsZUVsKTtcclxuICB9XHJcbiAgaWYgKGRvYy5ib2R5KSBhZGRDbGFzc05hbWUoZG9jLmJvZHksICdyZWFjdC1kcmFnZ2FibGUtdHJhbnNwYXJlbnQtc2VsZWN0aW9uJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVVc2VyU2VsZWN0U3R5bGVzKGRvYzogP0RvY3VtZW50KSB7XHJcbiAgdHJ5IHtcclxuICAgIGlmIChkb2MgJiYgZG9jLmJvZHkpIHJlbW92ZUNsYXNzTmFtZShkb2MuYm9keSwgJ3JlYWN0LWRyYWdnYWJsZS10cmFuc3BhcmVudC1zZWxlY3Rpb24nKTtcclxuICAgIC8vICRGbG93SWdub3JlOiBJRVxyXG4gICAgaWYgKGRvYy5zZWxlY3Rpb24pIHtcclxuICAgICAgLy8gJEZsb3dJZ25vcmU6IElFXHJcbiAgICAgIGRvYy5zZWxlY3Rpb24uZW1wdHkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTsgIC8vIHJlbW92ZSBzZWxlY3Rpb24gY2F1c2VkIGJ5IHNjcm9sbFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIC8vIHByb2JhYmx5IElFXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVIYWNrcyhjaGlsZFN0eWxlOiBPYmplY3QgPSB7fSk6IE9iamVjdCB7XHJcbiAgLy8gV29ya2Fyb3VuZCBJRSBwb2ludGVyIGV2ZW50czsgc2VlICM1MVxyXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9temFicmlza2llL3JlYWN0LWRyYWdnYWJsZS9pc3N1ZXMvNTEjaXNzdWVjb21tZW50LTEwMzQ4ODI3OFxyXG4gIHJldHVybiB7XHJcbiAgICB0b3VjaEFjdGlvbjogJ25vbmUnLFxyXG4gICAgLi4uY2hpbGRTdHlsZVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzc05hbWUoZWw6IEhUTUxFbGVtZW50LCBjbGFzc05hbWU6IHN0cmluZykge1xyXG4gIGlmIChlbC5jbGFzc0xpc3QpIHtcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKCFlbC5jbGFzc05hbWUubWF0Y2gobmV3IFJlZ0V4cChgKD86XnxcXFxccykke2NsYXNzTmFtZX0oPyFcXFxcUylgKSkpIHtcclxuICAgICAgZWwuY2xhc3NOYW1lICs9IGAgJHtjbGFzc05hbWV9YDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzc05hbWUoZWw6IEhUTUxFbGVtZW50LCBjbGFzc05hbWU6IHN0cmluZykge1xyXG4gIGlmIChlbC5jbGFzc0xpc3QpIHtcclxuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cChgKD86XnxcXFxccykke2NsYXNzTmFtZX0oPyFcXFxcUylgLCAnZycpLCAnJyk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi91dGlscy9kb21GbnMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwiLFwicm9vdFwiOlwiUmVhY3RcIn1cbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcbiAgICBTeW1ib2wuZm9yICYmXG4gICAgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpKSB8fFxuICAgIDB4ZWFjNztcblxuICB2YXIgaXNWYWxpZEVsZW1lbnQgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIG9iamVjdCAhPT0gbnVsbCAmJlxuICAgICAgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH07XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBAZmxvd1xyXG5pbXBvcnQge2lzTnVtLCBpbnR9IGZyb20gJy4vc2hpbXMnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHtnZXRUb3VjaCwgaW5uZXJXaWR0aCwgaW5uZXJIZWlnaHQsIG9mZnNldFhZRnJvbVBhcmVudCwgb3V0ZXJXaWR0aCwgb3V0ZXJIZWlnaHR9IGZyb20gJy4vZG9tRm5zJztcclxuXHJcbmltcG9ydCB0eXBlIERyYWdnYWJsZSBmcm9tICcuLi9EcmFnZ2FibGUnO1xyXG5pbXBvcnQgdHlwZSB7Qm91bmRzLCBDb250cm9sUG9zaXRpb24sIERyYWdnYWJsZURhdGEsIE1vdXNlVG91Y2hFdmVudH0gZnJvbSAnLi90eXBlcyc7XHJcbmltcG9ydCB0eXBlIERyYWdnYWJsZUNvcmUgZnJvbSAnLi4vRHJhZ2dhYmxlQ29yZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm91bmRQb3NpdGlvbihkcmFnZ2FibGU6IERyYWdnYWJsZSwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBbbnVtYmVyLCBudW1iZXJdIHtcclxuICAvLyBJZiBubyBib3VuZHMsIHNob3J0LWNpcmN1aXQgYW5kIG1vdmUgb25cclxuICBpZiAoIWRyYWdnYWJsZS5wcm9wcy5ib3VuZHMpIHJldHVybiBbeCwgeV07XHJcblxyXG4gIC8vIENsb25lIG5ldyBib3VuZHNcclxuICBsZXQge2JvdW5kc30gPSBkcmFnZ2FibGUucHJvcHM7XHJcbiAgYm91bmRzID0gdHlwZW9mIGJvdW5kcyA9PT0gJ3N0cmluZycgPyBib3VuZHMgOiBjbG9uZUJvdW5kcyhib3VuZHMpO1xyXG4gIGNvbnN0IG5vZGUgPSBmaW5kRE9NTm9kZShkcmFnZ2FibGUpO1xyXG5cclxuICBpZiAodHlwZW9mIGJvdW5kcyA9PT0gJ3N0cmluZycpIHtcclxuICAgIGNvbnN0IHtvd25lckRvY3VtZW50fSA9IG5vZGU7XHJcbiAgICBjb25zdCBvd25lcldpbmRvdyA9IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XHJcbiAgICBsZXQgYm91bmROb2RlO1xyXG4gICAgaWYgKGJvdW5kcyA9PT0gJ3BhcmVudCcpIHtcclxuICAgICAgYm91bmROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYm91bmROb2RlID0gb3duZXJEb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJvdW5kcyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIShib3VuZE5vZGUgaW5zdGFuY2VvZiBvd25lcldpbmRvdy5IVE1MRWxlbWVudCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdCb3VuZHMgc2VsZWN0b3IgXCInICsgYm91bmRzICsgJ1wiIGNvdWxkIG5vdCBmaW5kIGFuIGVsZW1lbnQuJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBub2RlU3R5bGUgPSBvd25lcldpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xyXG4gICAgY29uc3QgYm91bmROb2RlU3R5bGUgPSBvd25lcldpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGJvdW5kTm9kZSk7XHJcbiAgICAvLyBDb21wdXRlIGJvdW5kcy4gVGhpcyBpcyBhIHBhaW4gd2l0aCBwYWRkaW5nIGFuZCBvZmZzZXRzIGJ1dCB0aGlzIGdldHMgaXQgZXhhY3RseSByaWdodC5cclxuICAgIGJvdW5kcyA9IHtcclxuICAgICAgbGVmdDogLW5vZGUub2Zmc2V0TGVmdCArIGludChib3VuZE5vZGVTdHlsZS5wYWRkaW5nTGVmdCkgKyBpbnQobm9kZVN0eWxlLm1hcmdpbkxlZnQpLFxyXG4gICAgICB0b3A6IC1ub2RlLm9mZnNldFRvcCArIGludChib3VuZE5vZGVTdHlsZS5wYWRkaW5nVG9wKSArIGludChub2RlU3R5bGUubWFyZ2luVG9wKSxcclxuICAgICAgcmlnaHQ6IGlubmVyV2lkdGgoYm91bmROb2RlKSAtIG91dGVyV2lkdGgobm9kZSkgLSBub2RlLm9mZnNldExlZnQgK1xyXG4gICAgICAgIGludChib3VuZE5vZGVTdHlsZS5wYWRkaW5nUmlnaHQpIC0gaW50KG5vZGVTdHlsZS5tYXJnaW5SaWdodCksXHJcbiAgICAgIGJvdHRvbTogaW5uZXJIZWlnaHQoYm91bmROb2RlKSAtIG91dGVySGVpZ2h0KG5vZGUpIC0gbm9kZS5vZmZzZXRUb3AgK1xyXG4gICAgICAgIGludChib3VuZE5vZGVTdHlsZS5wYWRkaW5nQm90dG9tKSAtIGludChub2RlU3R5bGUubWFyZ2luQm90dG9tKVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8vIEtlZXAgeCBhbmQgeSBiZWxvdyByaWdodCBhbmQgYm90dG9tIGxpbWl0cy4uLlxyXG4gIGlmIChpc051bShib3VuZHMucmlnaHQpKSB4ID0gTWF0aC5taW4oeCwgYm91bmRzLnJpZ2h0KTtcclxuICBpZiAoaXNOdW0oYm91bmRzLmJvdHRvbSkpIHkgPSBNYXRoLm1pbih5LCBib3VuZHMuYm90dG9tKTtcclxuXHJcbiAgLy8gQnV0IGFib3ZlIGxlZnQgYW5kIHRvcCBsaW1pdHMuXHJcbiAgaWYgKGlzTnVtKGJvdW5kcy5sZWZ0KSkgeCA9IE1hdGgubWF4KHgsIGJvdW5kcy5sZWZ0KTtcclxuICBpZiAoaXNOdW0oYm91bmRzLnRvcCkpIHkgPSBNYXRoLm1heCh5LCBib3VuZHMudG9wKTtcclxuXHJcbiAgcmV0dXJuIFt4LCB5XTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNuYXBUb0dyaWQoZ3JpZDogW251bWJlciwgbnVtYmVyXSwgcGVuZGluZ1g6IG51bWJlciwgcGVuZGluZ1k6IG51bWJlcik6IFtudW1iZXIsIG51bWJlcl0ge1xyXG4gIGNvbnN0IHggPSBNYXRoLnJvdW5kKHBlbmRpbmdYIC8gZ3JpZFswXSkgKiBncmlkWzBdO1xyXG4gIGNvbnN0IHkgPSBNYXRoLnJvdW5kKHBlbmRpbmdZIC8gZ3JpZFsxXSkgKiBncmlkWzFdO1xyXG4gIHJldHVybiBbeCwgeV07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYW5EcmFnWChkcmFnZ2FibGU6IERyYWdnYWJsZSk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiBkcmFnZ2FibGUucHJvcHMuYXhpcyA9PT0gJ2JvdGgnIHx8IGRyYWdnYWJsZS5wcm9wcy5heGlzID09PSAneCc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYW5EcmFnWShkcmFnZ2FibGU6IERyYWdnYWJsZSk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiBkcmFnZ2FibGUucHJvcHMuYXhpcyA9PT0gJ2JvdGgnIHx8IGRyYWdnYWJsZS5wcm9wcy5heGlzID09PSAneSc7XHJcbn1cclxuXHJcbi8vIEdldCB7eCwgeX0gcG9zaXRpb25zIGZyb20gZXZlbnQuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250cm9sUG9zaXRpb24oZTogTW91c2VUb3VjaEV2ZW50LCB0b3VjaElkZW50aWZpZXI6ID9udW1iZXIsIGRyYWdnYWJsZUNvcmU6IERyYWdnYWJsZUNvcmUpOiA/Q29udHJvbFBvc2l0aW9uIHtcclxuICBjb25zdCB0b3VjaE9iaiA9IHR5cGVvZiB0b3VjaElkZW50aWZpZXIgPT09ICdudW1iZXInID8gZ2V0VG91Y2goZSwgdG91Y2hJZGVudGlmaWVyKSA6IG51bGw7XHJcbiAgaWYgKHR5cGVvZiB0b3VjaElkZW50aWZpZXIgPT09ICdudW1iZXInICYmICF0b3VjaE9iaikgcmV0dXJuIG51bGw7IC8vIG5vdCB0aGUgcmlnaHQgdG91Y2hcclxuICBjb25zdCBub2RlID0gZmluZERPTU5vZGUoZHJhZ2dhYmxlQ29yZSk7XHJcbiAgLy8gVXNlciBjYW4gcHJvdmlkZSBhbiBvZmZzZXRQYXJlbnQgaWYgZGVzaXJlZC5cclxuICBjb25zdCBvZmZzZXRQYXJlbnQgPSBkcmFnZ2FibGVDb3JlLnByb3BzLm9mZnNldFBhcmVudCB8fCBub2RlLm9mZnNldFBhcmVudCB8fCBub2RlLm93bmVyRG9jdW1lbnQuYm9keTtcclxuICByZXR1cm4gb2Zmc2V0WFlGcm9tUGFyZW50KHRvdWNoT2JqIHx8IGUsIG9mZnNldFBhcmVudCk7XHJcbn1cclxuXHJcbi8vIENyZWF0ZSBhbiBkYXRhIG9iamVjdCBleHBvc2VkIGJ5IDxEcmFnZ2FibGVDb3JlPidzIGV2ZW50c1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29yZURhdGEoZHJhZ2dhYmxlOiBEcmFnZ2FibGVDb3JlLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IERyYWdnYWJsZURhdGEge1xyXG4gIGNvbnN0IHN0YXRlID0gZHJhZ2dhYmxlLnN0YXRlO1xyXG4gIGNvbnN0IGlzU3RhcnQgPSAhaXNOdW0oc3RhdGUubGFzdFgpO1xyXG4gIGNvbnN0IG5vZGUgPSBmaW5kRE9NTm9kZShkcmFnZ2FibGUpO1xyXG5cclxuICBpZiAoaXNTdGFydCkge1xyXG4gICAgLy8gSWYgdGhpcyBpcyBvdXIgZmlyc3QgbW92ZSwgdXNlIHRoZSB4IGFuZCB5IGFzIGxhc3QgY29vcmRzLlxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbm9kZSxcclxuICAgICAgZGVsdGFYOiAwLCBkZWx0YVk6IDAsXHJcbiAgICAgIGxhc3RYOiB4LCBsYXN0WTogeSxcclxuICAgICAgeCwgeSxcclxuICAgIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIE90aGVyd2lzZSBjYWxjdWxhdGUgcHJvcGVyIHZhbHVlcy5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5vZGUsXHJcbiAgICAgIGRlbHRhWDogeCAtIHN0YXRlLmxhc3RYLCBkZWx0YVk6IHkgLSBzdGF0ZS5sYXN0WSxcclxuICAgICAgbGFzdFg6IHN0YXRlLmxhc3RYLCBsYXN0WTogc3RhdGUubGFzdFksXHJcbiAgICAgIHgsIHksXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gQ3JlYXRlIGFuIGRhdGEgZXhwb3NlZCBieSA8RHJhZ2dhYmxlPidzIGV2ZW50c1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRHJhZ2dhYmxlRGF0YShkcmFnZ2FibGU6IERyYWdnYWJsZSwgY29yZURhdGE6IERyYWdnYWJsZURhdGEpOiBEcmFnZ2FibGVEYXRhIHtcclxuICByZXR1cm4ge1xyXG4gICAgbm9kZTogY29yZURhdGEubm9kZSxcclxuICAgIHg6IGRyYWdnYWJsZS5zdGF0ZS54ICsgY29yZURhdGEuZGVsdGFYLFxyXG4gICAgeTogZHJhZ2dhYmxlLnN0YXRlLnkgKyBjb3JlRGF0YS5kZWx0YVksXHJcbiAgICBkZWx0YVg6IGNvcmVEYXRhLmRlbHRhWCxcclxuICAgIGRlbHRhWTogY29yZURhdGEuZGVsdGFZLFxyXG4gICAgbGFzdFg6IGRyYWdnYWJsZS5zdGF0ZS54LFxyXG4gICAgbGFzdFk6IGRyYWdnYWJsZS5zdGF0ZS55XHJcbiAgfTtcclxufVxyXG5cclxuLy8gQSBsb3QgZmFzdGVyIHRoYW4gc3RyaW5naWZ5L3BhcnNlXHJcbmZ1bmN0aW9uIGNsb25lQm91bmRzKGJvdW5kczogQm91bmRzKTogQm91bmRzIHtcclxuICByZXR1cm4ge1xyXG4gICAgbGVmdDogYm91bmRzLmxlZnQsXHJcbiAgICB0b3A6IGJvdW5kcy50b3AsXHJcbiAgICByaWdodDogYm91bmRzLnJpZ2h0LFxyXG4gICAgYm90dG9tOiBib3VuZHMuYm90dG9tXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmluZERPTU5vZGUoZHJhZ2dhYmxlOiBEcmFnZ2FibGUgfCBEcmFnZ2FibGVDb3JlKTogSFRNTEVsZW1lbnQge1xyXG4gIGNvbnN0IG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZShkcmFnZ2FibGUpO1xyXG4gIGlmICghbm9kZSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCc8RHJhZ2dhYmxlQ29yZT46IFVubW91bnRlZCBkdXJpbmcgZXZlbnQhJyk7XHJcbiAgfVxyXG4gIC8vICRGbG93SWdub3JlIHdlIGNhbid0IGFzc2VydCBvbiBIVE1MRWxlbWVudCBkdWUgdG8gdGVzdHMuLi4gRklYTUVcclxuICByZXR1cm4gbm9kZTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvdXRpbHMvcG9zaXRpb25GbnMuanMiLCIvLyBAZmxvd1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHttYXRjaGVzU2VsZWN0b3JBbmRQYXJlbnRzVG8sIGFkZEV2ZW50LCByZW1vdmVFdmVudCwgYWRkVXNlclNlbGVjdFN0eWxlcywgZ2V0VG91Y2hJZGVudGlmaWVyLFxyXG4gICAgICAgIHJlbW92ZVVzZXJTZWxlY3RTdHlsZXMsIHN0eWxlSGFja3N9IGZyb20gJy4vdXRpbHMvZG9tRm5zJztcclxuaW1wb3J0IHtjcmVhdGVDb3JlRGF0YSwgZ2V0Q29udHJvbFBvc2l0aW9uLCBzbmFwVG9HcmlkfSBmcm9tICcuL3V0aWxzL3Bvc2l0aW9uRm5zJztcclxuaW1wb3J0IHtkb250U2V0TWV9IGZyb20gJy4vdXRpbHMvc2hpbXMnO1xyXG5pbXBvcnQgbG9nIGZyb20gJy4vdXRpbHMvbG9nJztcclxuXHJcbmltcG9ydCB0eXBlIHtFdmVudEhhbmRsZXIsIE1vdXNlVG91Y2hFdmVudH0gZnJvbSAnLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB0eXBlIHtFbGVtZW50IGFzIFJlYWN0RWxlbWVudH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gU2ltcGxlIGFic3RyYWN0aW9uIGZvciBkcmFnZ2luZyBldmVudHMgbmFtZXMuXHJcbmNvbnN0IGV2ZW50c0ZvciA9IHtcclxuICB0b3VjaDoge1xyXG4gICAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcclxuICAgIG1vdmU6ICd0b3VjaG1vdmUnLFxyXG4gICAgc3RvcDogJ3RvdWNoZW5kJ1xyXG4gIH0sXHJcbiAgbW91c2U6IHtcclxuICAgIHN0YXJ0OiAnbW91c2Vkb3duJyxcclxuICAgIG1vdmU6ICdtb3VzZW1vdmUnLFxyXG4gICAgc3RvcDogJ21vdXNldXAnXHJcbiAgfVxyXG59O1xyXG5cclxuLy8gRGVmYXVsdCB0byBtb3VzZSBldmVudHMuXHJcbmxldCBkcmFnRXZlbnRGb3IgPSBldmVudHNGb3IubW91c2U7XHJcblxyXG50eXBlIERyYWdnYWJsZUNvcmVTdGF0ZSA9IHtcclxuICBkcmFnZ2luZzogYm9vbGVhbixcclxuICBsYXN0WDogbnVtYmVyLFxyXG4gIGxhc3RZOiBudW1iZXIsXHJcbiAgdG91Y2hJZGVudGlmaWVyOiA/bnVtYmVyXHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBEcmFnZ2FibGVCb3VuZHMgPSB7XHJcbiAgbGVmdDogbnVtYmVyLFxyXG4gIHJpZ2h0OiBudW1iZXIsXHJcbiAgdG9wOiBudW1iZXIsXHJcbiAgYm90dG9tOiBudW1iZXIsXHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBEcmFnZ2FibGVEYXRhID0ge1xyXG4gIG5vZGU6IEhUTUxFbGVtZW50LFxyXG4gIHg6IG51bWJlciwgeTogbnVtYmVyLFxyXG4gIGRlbHRhWDogbnVtYmVyLCBkZWx0YVk6IG51bWJlcixcclxuICBsYXN0WDogbnVtYmVyLCBsYXN0WTogbnVtYmVyLFxyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgRHJhZ2dhYmxlRXZlbnRIYW5kbGVyID0gKGU6IE1vdXNlRXZlbnQsIGRhdGE6IERyYWdnYWJsZURhdGEpID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgdHlwZSBDb250cm9sUG9zaXRpb24gPSB7eDogbnVtYmVyLCB5OiBudW1iZXJ9O1xyXG5cclxuZXhwb3J0IHR5cGUgRHJhZ2dhYmxlQ29yZVByb3BzID0ge1xyXG4gIGFsbG93QW55Q2xpY2s6IGJvb2xlYW4sXHJcbiAgY2FuY2VsOiBzdHJpbmcsXHJcbiAgY2hpbGRyZW46IFJlYWN0RWxlbWVudDxhbnk+LFxyXG4gIGRpc2FibGVkOiBib29sZWFuLFxyXG4gIGVuYWJsZVVzZXJTZWxlY3RIYWNrOiBib29sZWFuLFxyXG4gIG9mZnNldFBhcmVudDogSFRNTEVsZW1lbnQsXHJcbiAgZ3JpZDogW251bWJlciwgbnVtYmVyXSxcclxuICBoYW5kbGU6IHN0cmluZyxcclxuICBvblN0YXJ0OiBEcmFnZ2FibGVFdmVudEhhbmRsZXIsXHJcbiAgb25EcmFnOiBEcmFnZ2FibGVFdmVudEhhbmRsZXIsXHJcbiAgb25TdG9wOiBEcmFnZ2FibGVFdmVudEhhbmRsZXIsXHJcbiAgb25Nb3VzZURvd246IChlOiBNb3VzZUV2ZW50KSA9PiB2b2lkLFxyXG59O1xyXG5cclxuLy9cclxuLy8gRGVmaW5lIDxEcmFnZ2FibGVDb3JlPi5cclxuLy9cclxuLy8gPERyYWdnYWJsZUNvcmU+IGlzIGZvciBhZHZhbmNlZCB1c2FnZSBvZiA8RHJhZ2dhYmxlPi4gSXQgbWFpbnRhaW5zIG1pbmltYWwgaW50ZXJuYWwgc3RhdGUgc28gaXQgY2FuXHJcbi8vIHdvcmsgd2VsbCB3aXRoIGxpYnJhcmllcyB0aGF0IHJlcXVpcmUgbW9yZSBjb250cm9sIG92ZXIgdGhlIGVsZW1lbnQuXHJcbi8vXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnZ2FibGVDb3JlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PERyYWdnYWJsZUNvcmVQcm9wcywgRHJhZ2dhYmxlQ29yZVN0YXRlPiB7XHJcblxyXG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdEcmFnZ2FibGVDb3JlJztcclxuXHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogYGFsbG93QW55Q2xpY2tgIGFsbG93cyBkcmFnZ2luZyB1c2luZyBhbnkgbW91c2UgYnV0dG9uLlxyXG4gICAgICogQnkgZGVmYXVsdCwgd2Ugb25seSBhY2NlcHQgdGhlIGxlZnQgYnV0dG9uLlxyXG4gICAgICpcclxuICAgICAqIERlZmF1bHRzIHRvIGBmYWxzZWAuXHJcbiAgICAgKi9cclxuICAgIGFsbG93QW55Q2xpY2s6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYGRpc2FibGVkYCwgaWYgdHJ1ZSwgc3RvcHMgdGhlIDxEcmFnZ2FibGU+IGZyb20gZHJhZ2dpbmcuIEFsbCBoYW5kbGVycyxcclxuICAgICAqIHdpdGggdGhlIGV4Y2VwdGlvbiBvZiBgb25Nb3VzZURvd25gLCB3aWxsIG5vdCBmaXJlLlxyXG4gICAgICovXHJcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCeSBkZWZhdWx0LCB3ZSBhZGQgJ3VzZXItc2VsZWN0Om5vbmUnIGF0dHJpYnV0ZXMgdG8gdGhlIGRvY3VtZW50IGJvZHlcclxuICAgICAqIHRvIHByZXZlbnQgdWdseSB0ZXh0IHNlbGVjdGlvbiBkdXJpbmcgZHJhZy4gSWYgdGhpcyBpcyBjYXVzaW5nIHByb2JsZW1zXHJcbiAgICAgKiBmb3IgeW91ciBhcHAsIHNldCB0aGlzIHRvIGBmYWxzZWAuXHJcbiAgICAgKi9cclxuICAgIGVuYWJsZVVzZXJTZWxlY3RIYWNrOiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIGBvZmZzZXRQYXJlbnRgLCBpZiBzZXQsIHVzZXMgdGhlIHBhc3NlZCBET00gbm9kZSB0byBjb21wdXRlIGRyYWcgb2Zmc2V0c1xyXG4gICAgICogaW5zdGVhZCBvZiB1c2luZyB0aGUgcGFyZW50IG5vZGUuXHJcbiAgICAgKi9cclxuICAgIG9mZnNldFBhcmVudDogZnVuY3Rpb24ocHJvcHM6IERyYWdnYWJsZUNvcmVQcm9wcywgcHJvcE5hbWU6ICRLZXlzPERyYWdnYWJsZUNvcmVQcm9wcz4pIHtcclxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSAmJiBwcm9wc1twcm9wTmFtZV0ubm9kZVR5cGUgIT09IDEpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RyYWdnYWJsZVxcJ3Mgb2Zmc2V0UGFyZW50IG11c3QgYmUgYSBET00gTm9kZS4nKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIGBncmlkYCBzcGVjaWZpZXMgdGhlIHggYW5kIHkgdGhhdCBkcmFnZ2luZyBzaG91bGQgc25hcCB0by5cclxuICAgICAqL1xyXG4gICAgZ3JpZDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlciksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBgaGFuZGxlYCBzcGVjaWZpZXMgYSBzZWxlY3RvciB0byBiZSB1c2VkIGFzIHRoZSBoYW5kbGUgdGhhdCBpbml0aWF0ZXMgZHJhZy5cclxuICAgICAqXHJcbiAgICAgKiBFeGFtcGxlOlxyXG4gICAgICpcclxuICAgICAqIGBgYGpzeFxyXG4gICAgICogICBsZXQgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgICogICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgKiAgICAgICAgIHJldHVybiAoXHJcbiAgICAgKiAgICAgICAgICAgIDxEcmFnZ2FibGUgaGFuZGxlPVwiLmhhbmRsZVwiPlxyXG4gICAgICogICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgKiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFuZGxlXCI+Q2xpY2sgbWUgdG8gZHJhZzwvZGl2PlxyXG4gICAgICogICAgICAgICAgICAgICAgICA8ZGl2PlRoaXMgaXMgc29tZSBvdGhlciBjb250ZW50PC9kaXY+XHJcbiAgICAgKiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgKiAgICAgICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICAgKiAgICAgICAgICk7XHJcbiAgICAgKiAgICAgICB9XHJcbiAgICAgKiAgIH0pO1xyXG4gICAgICogYGBgXHJcbiAgICAgKi9cclxuICAgIGhhbmRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIGBjYW5jZWxgIHNwZWNpZmllcyBhIHNlbGVjdG9yIHRvIGJlIHVzZWQgdG8gcHJldmVudCBkcmFnIGluaXRpYWxpemF0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEV4YW1wbGU6XHJcbiAgICAgKlxyXG4gICAgICogYGBganN4XHJcbiAgICAgKiAgIGxldCBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICAgKiAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAqICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgKiAgICAgICAgICAgICAgIDxEcmFnZ2FibGUgY2FuY2VsPVwiLmNhbmNlbFwiPlxyXG4gICAgICogICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAqICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWxcIj5Zb3UgY2FuJ3QgZHJhZyBmcm9tIGhlcmU8L2Rpdj5cclxuICAgICAqICAgICAgICAgICAgICAgICAgICAgPGRpdj5EcmFnZ2luZyBoZXJlIHdvcmtzIGZpbmU8L2Rpdj5cclxuICAgICAqICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICogICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cclxuICAgICAqICAgICAgICAgICApO1xyXG4gICAgICogICAgICAgfVxyXG4gICAgICogICB9KTtcclxuICAgICAqIGBgYFxyXG4gICAgICovXHJcbiAgICBjYW5jZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiBkcmFnZ2luZyBzdGFydHMuXHJcbiAgICAgKiBJZiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIGJvb2xlYW4gZmFsc2UsIGRyYWdnaW5nIHdpbGwgYmUgY2FuY2VsZWQuXHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnQ6IFByb3BUeXBlcy5mdW5jLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoaWxlIGRyYWdnaW5nLlxyXG4gICAgICogSWYgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBib29sZWFuIGZhbHNlLCBkcmFnZ2luZyB3aWxsIGJlIGNhbmNlbGVkLlxyXG4gICAgICovXHJcbiAgICBvbkRyYWc6IFByb3BUeXBlcy5mdW5jLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gZHJhZ2dpbmcgc3RvcHMuXHJcbiAgICAgKiBJZiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIGJvb2xlYW4gZmFsc2UsIHRoZSBkcmFnIHdpbGwgcmVtYWluIGFjdGl2ZS5cclxuICAgICAqL1xyXG4gICAgb25TdG9wOiBQcm9wVHlwZXMuZnVuYyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgd29ya2Fyb3VuZCBvcHRpb24gd2hpY2ggY2FuIGJlIHBhc3NlZCBpZiBvbk1vdXNlRG93biBuZWVkcyB0byBiZSBhY2Nlc3NlZCxcclxuICAgICAqIHNpbmNlIGl0J2xsIGFsd2F5cyBiZSBibG9ja2VkIChhcyB0aGVyZSBpcyBpbnRlcm5hbCB1c2Ugb2Ygb25Nb3VzZURvd24pXHJcbiAgICAgKi9cclxuICAgIG9uTW91c2VEb3duOiBQcm9wVHlwZXMuZnVuYyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZXNlIHByb3BlcnRpZXMgc2hvdWxkIGJlIGRlZmluZWQgb24gdGhlIGNoaWxkLCBub3QgaGVyZS5cclxuICAgICAqL1xyXG4gICAgY2xhc3NOYW1lOiBkb250U2V0TWUsXHJcbiAgICBzdHlsZTogZG9udFNldE1lLFxyXG4gICAgdHJhbnNmb3JtOiBkb250U2V0TWVcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgYWxsb3dBbnlDbGljazogZmFsc2UsIC8vIGJ5IGRlZmF1bHQgb25seSBhY2NlcHQgbGVmdCBjbGlja1xyXG4gICAgY2FuY2VsOiBudWxsLFxyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgZW5hYmxlVXNlclNlbGVjdEhhY2s6IHRydWUsXHJcbiAgICBvZmZzZXRQYXJlbnQ6IG51bGwsXHJcbiAgICBoYW5kbGU6IG51bGwsXHJcbiAgICBncmlkOiBudWxsLFxyXG4gICAgdHJhbnNmb3JtOiBudWxsLFxyXG4gICAgb25TdGFydDogZnVuY3Rpb24oKXt9LFxyXG4gICAgb25EcmFnOiBmdW5jdGlvbigpe30sXHJcbiAgICBvblN0b3A6IGZ1bmN0aW9uKCl7fSxcclxuICAgIG9uTW91c2VEb3duOiBmdW5jdGlvbigpe31cclxuICB9O1xyXG5cclxuICBzdGF0ZSA9IHtcclxuICAgIGRyYWdnaW5nOiBmYWxzZSxcclxuICAgIC8vIFVzZWQgd2hpbGUgZHJhZ2dpbmcgdG8gZGV0ZXJtaW5lIGRlbHRhcy5cclxuICAgIGxhc3RYOiBOYU4sIGxhc3RZOiBOYU4sXHJcbiAgICB0b3VjaElkZW50aWZpZXI6IG51bGwsXHJcbiAgICBzZXR0aW5nUG9zaXRpb246IGZhbHNlXHJcbiAgfTtcclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAvLyBSZW1vdmUgYW55IGxlZnRvdmVyIGV2ZW50IGhhbmRsZXJzLiBSZW1vdmUgYm90aCB0b3VjaCBhbmQgbW91c2UgaGFuZGxlcnMgaW4gY2FzZVxyXG4gICAgLy8gc29tZSBicm93c2VyIHF1aXJrIGNhdXNlZCBhIHRvdWNoIGV2ZW50IHRvIGZpcmUgZHVyaW5nIGEgbW91c2UgbW92ZSwgb3IgdmljZSB2ZXJzYS5cclxuICAgIGNvbnN0IHRoaXNOb2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XHJcbiAgICBpZiAodGhpc05vZGUpIHtcclxuICAgICAgY29uc3Qge293bmVyRG9jdW1lbnR9ID0gdGhpc05vZGU7XHJcbiAgICAgIHJlbW92ZUV2ZW50KG93bmVyRG9jdW1lbnQsIGV2ZW50c0Zvci5tb3VzZS5tb3ZlLCB0aGlzLmhhbmRsZURyYWcpO1xyXG4gICAgICByZW1vdmVFdmVudChvd25lckRvY3VtZW50LCBldmVudHNGb3IudG91Y2gubW92ZSwgdGhpcy5oYW5kbGVEcmFnKTtcclxuICAgICAgcmVtb3ZlRXZlbnQob3duZXJEb2N1bWVudCwgZXZlbnRzRm9yLm1vdXNlLnN0b3AsIHRoaXMuaGFuZGxlRHJhZ1N0b3ApO1xyXG4gICAgICByZW1vdmVFdmVudChvd25lckRvY3VtZW50LCBldmVudHNGb3IudG91Y2guc3RvcCwgdGhpcy5oYW5kbGVEcmFnU3RvcCk7XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLmVuYWJsZVVzZXJTZWxlY3RIYWNrKSByZW1vdmVVc2VyU2VsZWN0U3R5bGVzKG93bmVyRG9jdW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRHJhZ1N0YXJ0OiBFdmVudEhhbmRsZXI8TW91c2VUb3VjaEV2ZW50PiA9IChlKSA9PiB7XHJcbiAgICAvLyBNYWtlIGl0IHBvc3NpYmxlIHRvIGF0dGFjaCBldmVudCBoYW5kbGVycyBvbiB0b3Agb2YgdGhpcyBvbmUuXHJcbiAgICB0aGlzLnByb3BzLm9uTW91c2VEb3duKGUpO1xyXG5cclxuICAgIC8vIE9ubHkgYWNjZXB0IGxlZnQtY2xpY2tzLlxyXG4gICAgaWYgKCF0aGlzLnByb3BzLmFsbG93QW55Q2xpY2sgJiYgdHlwZW9mIGUuYnV0dG9uID09PSAnbnVtYmVyJyAmJiBlLmJ1dHRvbiAhPT0gMCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIC8vIEdldCBub2Rlcy4gQmUgc3VyZSB0byBncmFiIHJlbGF0aXZlIGRvY3VtZW50IChjb3VsZCBiZSBpZnJhbWVkKVxyXG4gICAgY29uc3QgdGhpc05vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcclxuICAgIGlmICghdGhpc05vZGUgfHwgIXRoaXNOb2RlLm93bmVyRG9jdW1lbnQgfHwgIXRoaXNOb2RlLm93bmVyRG9jdW1lbnQuYm9keSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJzxEcmFnZ2FibGVDb3JlPiBub3QgbW91bnRlZCBvbiBEcmFnU3RhcnQhJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB7b3duZXJEb2N1bWVudH0gPSB0aGlzTm9kZTtcclxuXHJcbiAgICAvLyBTaG9ydCBjaXJjdWl0IGlmIGhhbmRsZSBvciBjYW5jZWwgcHJvcCB3YXMgcHJvdmlkZWQgYW5kIHNlbGVjdG9yIGRvZXNuJ3QgbWF0Y2guXHJcbiAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCB8fFxyXG4gICAgICAoIShlLnRhcmdldCBpbnN0YW5jZW9mIG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuTm9kZSkpIHx8XHJcbiAgICAgICh0aGlzLnByb3BzLmhhbmRsZSAmJiAhbWF0Y2hlc1NlbGVjdG9yQW5kUGFyZW50c1RvKGUudGFyZ2V0LCB0aGlzLnByb3BzLmhhbmRsZSwgdGhpc05vZGUpKSB8fFxyXG4gICAgICAodGhpcy5wcm9wcy5jYW5jZWwgJiYgbWF0Y2hlc1NlbGVjdG9yQW5kUGFyZW50c1RvKGUudGFyZ2V0LCB0aGlzLnByb3BzLmNhbmNlbCwgdGhpc05vZGUpKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0IHRvdWNoIGlkZW50aWZpZXIgaW4gY29tcG9uZW50IHN0YXRlIGlmIHRoaXMgaXMgYSB0b3VjaCBldmVudC4gVGhpcyBhbGxvd3MgdXMgdG9cclxuICAgIC8vIGRpc3Rpbmd1aXNoIGJldHdlZW4gaW5kaXZpZHVhbCB0b3VjaGVzIG9uIG11bHRpdG91Y2ggc2NyZWVucyBieSBpZGVudGlmeWluZyB3aGljaFxyXG4gICAgLy8gdG91Y2hwb2ludCB3YXMgc2V0IHRvIHRoaXMgZWxlbWVudC5cclxuICAgIGNvbnN0IHRvdWNoSWRlbnRpZmllciA9IGdldFRvdWNoSWRlbnRpZmllcihlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3RvdWNoSWRlbnRpZmllcn0pO1xyXG5cclxuICAgIC8vIEdldCB0aGUgY3VycmVudCBkcmFnIHBvaW50IGZyb20gdGhlIGV2ZW50LiBUaGlzIGlzIHVzZWQgYXMgdGhlIG9mZnNldC5cclxuICAgIGNvbnN0IHBvc2l0aW9uID0gZ2V0Q29udHJvbFBvc2l0aW9uKGUsIHRvdWNoSWRlbnRpZmllciwgdGhpcyk7XHJcbiAgICBpZiAocG9zaXRpb24gPT0gbnVsbCkgcmV0dXJuOyAvLyBub3QgcG9zc2libGUgYnV0IHNhdGlzZmllcyBmbG93XHJcbiAgICBjb25zdCB7eCwgeX0gPSBwb3NpdGlvbjtcclxuXHJcbiAgICAvLyBDcmVhdGUgYW4gZXZlbnQgb2JqZWN0IHdpdGggYWxsIHRoZSBkYXRhIHBhcmVudHMgbmVlZCB0byBtYWtlIGEgZGVjaXNpb24gaGVyZS5cclxuICAgIGNvbnN0IGNvcmVFdmVudCA9IGNyZWF0ZUNvcmVEYXRhKHRoaXMsIHgsIHkpO1xyXG5cclxuICAgIGxvZygnRHJhZ2dhYmxlQ29yZTogaGFuZGxlRHJhZ1N0YXJ0OiAlaicsIGNvcmVFdmVudCk7XHJcblxyXG4gICAgLy8gQ2FsbCBldmVudCBoYW5kbGVyLiBJZiBpdCByZXR1cm5zIGV4cGxpY2l0IGZhbHNlLCBjYW5jZWwuXHJcbiAgICBsb2coJ2NhbGxpbmcnLCB0aGlzLnByb3BzLm9uU3RhcnQpO1xyXG4gICAgY29uc3Qgc2hvdWxkVXBkYXRlID0gdGhpcy5wcm9wcy5vblN0YXJ0KGUsIGNvcmVFdmVudCk7XHJcbiAgICBpZiAoc2hvdWxkVXBkYXRlID09PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIC8vIEFkZCBhIHN0eWxlIHRvIHRoZSBib2R5IHRvIGRpc2FibGUgdXNlci1zZWxlY3QuIFRoaXMgcHJldmVudHMgdGV4dCBmcm9tXHJcbiAgICAvLyBiZWluZyBzZWxlY3RlZCBhbGwgb3ZlciB0aGUgcGFnZS5cclxuICAgIGlmICh0aGlzLnByb3BzLmVuYWJsZVVzZXJTZWxlY3RIYWNrKSBhZGRVc2VyU2VsZWN0U3R5bGVzKG93bmVyRG9jdW1lbnQpO1xyXG5cclxuICAgIC8vIEluaXRpYXRlIGRyYWdnaW5nLiBTZXQgdGhlIGN1cnJlbnQgeCBhbmQgeSBhcyBvZmZzZXRzXHJcbiAgICAvLyBzbyB3ZSBrbm93IGhvdyBtdWNoIHdlJ3ZlIG1vdmVkIGR1cmluZyB0aGUgZHJhZy4gVGhpcyBhbGxvd3MgdXNcclxuICAgIC8vIHRvIGRyYWcgZWxlbWVudHMgYXJvdW5kIGV2ZW4gaWYgdGhleSBoYXZlIGJlZW4gbW92ZWQsIHdpdGhvdXQgaXNzdWUuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZHJhZ2dpbmc6IHRydWUsXHJcblxyXG4gICAgICBsYXN0WDogeCxcclxuICAgICAgbGFzdFk6IHlcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEFkZCBldmVudHMgdG8gdGhlIGRvY3VtZW50IGRpcmVjdGx5IHNvIHdlIGNhdGNoIHdoZW4gdGhlIHVzZXIncyBtb3VzZS90b3VjaCBtb3ZlcyBvdXRzaWRlIG9mXHJcbiAgICAvLyB0aGlzIGVsZW1lbnQuIFdlIHVzZSBkaWZmZXJlbnQgZXZlbnRzIGRlcGVuZGluZyBvbiB3aGV0aGVyIG9yIG5vdCB3ZSBoYXZlIGRldGVjdGVkIHRoYXQgdGhpc1xyXG4gICAgLy8gaXMgYSB0b3VjaC1jYXBhYmxlIGRldmljZS5cclxuICAgIGFkZEV2ZW50KG93bmVyRG9jdW1lbnQsIGRyYWdFdmVudEZvci5tb3ZlLCB0aGlzLmhhbmRsZURyYWcpO1xyXG4gICAgYWRkRXZlbnQob3duZXJEb2N1bWVudCwgZHJhZ0V2ZW50Rm9yLnN0b3AsIHRoaXMuaGFuZGxlRHJhZ1N0b3ApO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZURyYWc6IEV2ZW50SGFuZGxlcjxNb3VzZVRvdWNoRXZlbnQ+ID0gKGUpID0+IHtcclxuXHJcbiAgICBpZih0aGlzLnN0YXRlLnNldHRpbmdQb3NpdGlvbil7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcmV2ZW50IHNjcm9sbGluZyBvbiBtb2JpbGUgZGV2aWNlcywgbGlrZSBpcGFkL2lwaG9uZS5cclxuICAgIGlmIChlLnR5cGUgPT09ICd0b3VjaG1vdmUnKSBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy8gR2V0IHRoZSBjdXJyZW50IGRyYWcgcG9pbnQgZnJvbSB0aGUgZXZlbnQuIFRoaXMgaXMgdXNlZCBhcyB0aGUgb2Zmc2V0LlxyXG4gICAgY29uc3QgcG9zaXRpb24gPSBnZXRDb250cm9sUG9zaXRpb24oZSwgdGhpcy5zdGF0ZS50b3VjaElkZW50aWZpZXIsIHRoaXMpO1xyXG4gICAgaWYgKHBvc2l0aW9uID09IG51bGwpIHJldHVybjtcclxuICAgIGxldCB7eCwgeX0gPSBwb3NpdGlvbjtcclxuXHJcbiAgICAvLyBTbmFwIHRvIGdyaWQgaWYgcHJvcCBoYXMgYmVlbiBwcm92aWRlZFxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5wcm9wcy5ncmlkKSkge1xyXG4gICAgICBsZXQgZGVsdGFYID0geCAtIHRoaXMuc3RhdGUubGFzdFgsIGRlbHRhWSA9IHkgLSB0aGlzLnN0YXRlLmxhc3RZO1xyXG4gICAgICBbZGVsdGFYLCBkZWx0YVldID0gc25hcFRvR3JpZCh0aGlzLnByb3BzLmdyaWQsIGRlbHRhWCwgZGVsdGFZKTtcclxuICAgICAgaWYgKCFkZWx0YVggJiYgIWRlbHRhWSkgcmV0dXJuOyAvLyBza2lwIHVzZWxlc3MgZHJhZ1xyXG4gICAgICB4ID0gdGhpcy5zdGF0ZS5sYXN0WCArIGRlbHRhWCwgeSA9IHRoaXMuc3RhdGUubGFzdFkgKyBkZWx0YVk7XHJcbiAgICAgIFt4LCB5XSA9IHNuYXBUb0dyaWQodGhpcy5wcm9wcy5ncmlkLCB4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb3JlRXZlbnQgPSBjcmVhdGVDb3JlRGF0YSh0aGlzLCB4LCB5KTtcclxuXHJcbiAgICBsb2coJ0RyYWdnYWJsZUNvcmU6IGhhbmRsZURyYWc6ICVqJywgY29yZUV2ZW50KTtcclxuXHJcbiAgICAvLyBDYWxsIGV2ZW50IGhhbmRsZXIuIElmIGl0IHJldHVybnMgZXhwbGljaXQgZmFsc2UsIHRyaWdnZXIgZW5kLlxyXG4gICAgY29uc3Qgc2hvdWxkVXBkYXRlID0gdGhpcy5wcm9wcy5vbkRyYWcoZSwgY29yZUV2ZW50KTtcclxuICAgIGlmIChzaG91bGRVcGRhdGUgPT09IGZhbHNlKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gJEZsb3dJZ25vcmVcclxuICAgICAgICB0aGlzLmhhbmRsZURyYWdTdG9wKG5ldyBNb3VzZUV2ZW50KCdtb3VzZXVwJykpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAvLyBPbGQgYnJvd3NlcnNcclxuICAgICAgICBjb25zdCBldmVudCA9ICgoZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnRzJyk6IGFueSk6IE1vdXNlVG91Y2hFdmVudCk7XHJcbiAgICAgICAgLy8gSSBzZWUgd2h5IHRoaXMgaW5zYW5pdHkgd2FzIGRlcHJlY2F0ZWRcclxuICAgICAgICAvLyAkRmxvd0lnbm9yZVxyXG4gICAgICAgIGV2ZW50LmluaXRNb3VzZUV2ZW50KCdtb3VzZXVwJywgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAwLCAwLCAwLCAwLCAwLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgMCwgbnVsbCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVEcmFnU3RvcChldmVudCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzZXR0aW5nUG9zaXRpb246IHRydWVcclxuICAgIH0sIGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGxhc3RYOiB4LFxyXG4gICAgICAgIGxhc3RZOiB5XHJcbiAgICAgIH0sIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBzZXR0aW5nUG9zaXRpb246IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG5cclxuICAgIFxyXG4gIH07XHJcblxyXG4gIGhhbmRsZURyYWdTdG9wOiBFdmVudEhhbmRsZXI8TW91c2VUb3VjaEV2ZW50PiA9IChlKSA9PiB7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUuZHJhZ2dpbmcpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBwb3NpdGlvbiA9IGdldENvbnRyb2xQb3NpdGlvbihlLCB0aGlzLnN0YXRlLnRvdWNoSWRlbnRpZmllciwgdGhpcyk7XHJcbiAgICBpZiAocG9zaXRpb24gPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgY29uc3Qge3gsIHl9ID0gcG9zaXRpb247XHJcbiAgICBjb25zdCBjb3JlRXZlbnQgPSBjcmVhdGVDb3JlRGF0YSh0aGlzLCB4LCB5KTtcclxuXHJcbiAgICBjb25zdCB0aGlzTm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgaWYgKHRoaXNOb2RlKSB7XHJcbiAgICAgIC8vIFJlbW92ZSB1c2VyLXNlbGVjdCBoYWNrXHJcbiAgICAgIGlmICh0aGlzLnByb3BzLmVuYWJsZVVzZXJTZWxlY3RIYWNrKSByZW1vdmVVc2VyU2VsZWN0U3R5bGVzKHRoaXNOb2RlLm93bmVyRG9jdW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZygnRHJhZ2dhYmxlQ29yZTogaGFuZGxlRHJhZ1N0b3A6ICVqJywgY29yZUV2ZW50KTtcclxuXHJcbiAgICAvLyBSZXNldCB0aGUgZWwuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxyXG4gICAgICBsYXN0WDogTmFOLFxyXG4gICAgICBsYXN0WTogTmFOXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDYWxsIGV2ZW50IGhhbmRsZXJcclxuICAgIHRoaXMucHJvcHMub25TdG9wKGUsIGNvcmVFdmVudCk7XHJcblxyXG4gICAgaWYgKHRoaXNOb2RlKSB7XHJcbiAgICAgIC8vIFJlbW92ZSBldmVudCBoYW5kbGVyc1xyXG4gICAgICBsb2coJ0RyYWdnYWJsZUNvcmU6IFJlbW92aW5nIGhhbmRsZXJzJyk7XHJcbiAgICAgIHJlbW92ZUV2ZW50KHRoaXNOb2RlLm93bmVyRG9jdW1lbnQsIGRyYWdFdmVudEZvci5tb3ZlLCB0aGlzLmhhbmRsZURyYWcpO1xyXG4gICAgICByZW1vdmVFdmVudCh0aGlzTm9kZS5vd25lckRvY3VtZW50LCBkcmFnRXZlbnRGb3Iuc3RvcCwgdGhpcy5oYW5kbGVEcmFnU3RvcCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgb25Nb3VzZURvd246IEV2ZW50SGFuZGxlcjxNb3VzZVRvdWNoRXZlbnQ+ID0gKGUpID0+IHtcclxuICAgIGRyYWdFdmVudEZvciA9IGV2ZW50c0Zvci5tb3VzZTsgLy8gb24gdG91Y2hzY3JlZW4gbGFwdG9wcyB3ZSBjb3VsZCBzd2l0Y2ggYmFjayB0byBtb3VzZVxyXG5cclxuICAgIHJldHVybiB0aGlzLmhhbmRsZURyYWdTdGFydChlKTtcclxuICB9O1xyXG5cclxuICBvbk1vdXNlVXA6IEV2ZW50SGFuZGxlcjxNb3VzZVRvdWNoRXZlbnQ+ID0gKGUpID0+IHtcclxuICAgIGRyYWdFdmVudEZvciA9IGV2ZW50c0Zvci5tb3VzZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVEcmFnU3RvcChlKTtcclxuICB9O1xyXG5cclxuICAvLyBTYW1lIGFzIG9uTW91c2VEb3duIChzdGFydCBkcmFnKSwgYnV0IG5vdyBjb25zaWRlciB0aGlzIGEgdG91Y2ggZGV2aWNlLlxyXG4gIG9uVG91Y2hTdGFydDogRXZlbnRIYW5kbGVyPE1vdXNlVG91Y2hFdmVudD4gPSAoZSkgPT4ge1xyXG4gICAgLy8gV2UncmUgb24gYSB0b3VjaCBkZXZpY2Ugbm93LCBzbyBjaGFuZ2UgdGhlIGV2ZW50IGhhbmRsZXJzXHJcbiAgICBkcmFnRXZlbnRGb3IgPSBldmVudHNGb3IudG91Y2g7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlRHJhZ1N0YXJ0KGUpO1xyXG4gIH07XHJcblxyXG4gIG9uVG91Y2hFbmQ6IEV2ZW50SGFuZGxlcjxNb3VzZVRvdWNoRXZlbnQ+ID0gKGUpID0+IHtcclxuICAgIC8vIFdlJ3JlIG9uIGEgdG91Y2ggZGV2aWNlIG5vdywgc28gY2hhbmdlIHRoZSBldmVudCBoYW5kbGVyc1xyXG4gICAgZHJhZ0V2ZW50Rm9yID0gZXZlbnRzRm9yLnRvdWNoO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmhhbmRsZURyYWdTdG9wKGUpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIC8vIFJldXNlIHRoZSBjaGlsZCBwcm92aWRlZFxyXG4gICAgLy8gVGhpcyBtYWtlcyBpdCBmbGV4aWJsZSB0byB1c2Ugd2hhdGV2ZXIgZWxlbWVudCBpcyB3YW50ZWQgKGRpdiwgdWwsIGV0YylcclxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKSwge1xyXG4gICAgICBzdHlsZTogc3R5bGVIYWNrcyh0aGlzLnByb3BzLmNoaWxkcmVuLnByb3BzLnN0eWxlKSxcclxuXHJcbiAgICAgIC8vIE5vdGU6IG1vdXNlTW92ZSBoYW5kbGVyIGlzIGF0dGFjaGVkIHRvIGRvY3VtZW50IHNvIGl0IHdpbGwgc3RpbGwgZnVuY3Rpb25cclxuICAgICAgLy8gd2hlbiB0aGUgdXNlciBkcmFncyBxdWlja2x5IGFuZCBsZWF2ZXMgdGhlIGJvdW5kcyBvZiB0aGUgZWxlbWVudC5cclxuICAgICAgb25Nb3VzZURvd246IHRoaXMub25Nb3VzZURvd24sXHJcbiAgICAgIG9uVG91Y2hTdGFydDogdGhpcy5vblRvdWNoU3RhcnQsXHJcbiAgICAgIG9uTW91c2VVcDogdGhpcy5vbk1vdXNlVXAsXHJcbiAgICAgIG9uVG91Y2hFbmQ6IHRoaXMub25Ub3VjaEVuZFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9EcmFnZ2FibGVDb3JlLmpzIiwiLy8gQGZsb3dcclxuLyplc2xpbnQgbm8tY29uc29sZTowKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9nKC4uLmFyZ3M6IGFueSkge1xyXG4gIGlmIChwcm9jZXNzLmVudi5EUkFHR0FCTEVfREVCVUcpIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi91dGlscy9sb2cuanMiLCJ2YXIgRHJhZ2dhYmxlID0gcmVxdWlyZSgnLi9saWIvRHJhZ2dhYmxlJykuZGVmYXVsdDtcclxuXHJcbi8vIFByZXZpb3VzIHZlcnNpb25zIG9mIHRoaXMgbGliIGV4cG9ydGVkIDxEcmFnZ2FibGU+IGFzIHRoZSByb290IGV4cG9ydC4gQXMgdG8gbm90IGJyZWFrXHJcbi8vIHRoZW0sIG9yIFR5cGVTY3JpcHQsIHdlIGV4cG9ydCAqYm90aCogYXMgdGhlIHJvb3QgYW5kIGFzICdkZWZhdWx0Jy5cclxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9temFicmlza2llL3JlYWN0LWRyYWdnYWJsZS9wdWxsLzI1NFxyXG4vLyBhbmQgaHR0cHM6Ly9naXRodWIuY29tL216YWJyaXNraWUvcmVhY3QtZHJhZ2dhYmxlL2lzc3Vlcy8yNjZcclxubW9kdWxlLmV4cG9ydHMgPSBEcmFnZ2FibGU7XHJcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBEcmFnZ2FibGU7XHJcbm1vZHVsZS5leHBvcnRzLkRyYWdnYWJsZUNvcmUgPSByZXF1aXJlKCcuL2xpYi9EcmFnZ2FibGVDb3JlJykuZGVmYXVsdDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5kZXguanMiLCIvLyBAZmxvd1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7Y3JlYXRlQ1NTVHJhbnNmb3JtLCBjcmVhdGVTVkdUcmFuc2Zvcm19IGZyb20gJy4vdXRpbHMvZG9tRm5zJztcclxuaW1wb3J0IHtjYW5EcmFnWCwgY2FuRHJhZ1ksIGNyZWF0ZURyYWdnYWJsZURhdGEsIGdldEJvdW5kUG9zaXRpb259IGZyb20gJy4vdXRpbHMvcG9zaXRpb25GbnMnO1xyXG5pbXBvcnQge2RvbnRTZXRNZX0gZnJvbSAnLi91dGlscy9zaGltcyc7XHJcbmltcG9ydCBEcmFnZ2FibGVDb3JlIGZyb20gJy4vRHJhZ2dhYmxlQ29yZSc7XHJcbmltcG9ydCB0eXBlIHtDb250cm9sUG9zaXRpb24sIERyYWdnYWJsZUJvdW5kcywgRHJhZ2dhYmxlQ29yZVByb3BzfSBmcm9tICcuL0RyYWdnYWJsZUNvcmUnO1xyXG5pbXBvcnQgbG9nIGZyb20gJy4vdXRpbHMvbG9nJztcclxuaW1wb3J0IHR5cGUge0RyYWdnYWJsZUV2ZW50SGFuZGxlcn0gZnJvbSAnLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB0eXBlIHtFbGVtZW50IGFzIFJlYWN0RWxlbWVudH0gZnJvbSAncmVhY3QnO1xyXG5cclxudHlwZSBEcmFnZ2FibGVTdGF0ZSA9IHtcclxuICBkcmFnZ2luZzogYm9vbGVhbixcclxuICBkcmFnZ2VkOiBib29sZWFuLFxyXG4gIHg6IG51bWJlciwgeTogbnVtYmVyLFxyXG4gIHNsYWNrWDogbnVtYmVyLCBzbGFja1k6IG51bWJlcixcclxuICBpc0VsZW1lbnRTVkc6IGJvb2xlYW5cclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIERyYWdnYWJsZVByb3BzID0ge1xyXG4gIC4uLiRFeGFjdDxEcmFnZ2FibGVDb3JlUHJvcHM+LFxyXG4gIGF4aXM6ICdib3RoJyB8ICd4JyB8ICd5JyB8ICdub25lJyxcclxuICBib3VuZHM6IERyYWdnYWJsZUJvdW5kcyB8IHN0cmluZyB8IGZhbHNlLFxyXG4gIGRlZmF1bHRDbGFzc05hbWU6IHN0cmluZyxcclxuICBkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dpbmc6IHN0cmluZyxcclxuICBkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dlZDogc3RyaW5nLFxyXG4gIGRlZmF1bHRQb3NpdGlvbjogQ29udHJvbFBvc2l0aW9uLFxyXG4gIHBvc2l0aW9uOiBDb250cm9sUG9zaXRpb24sXHJcbn07XHJcblxyXG4vL1xyXG4vLyBEZWZpbmUgPERyYWdnYWJsZT5cclxuLy9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdnYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxEcmFnZ2FibGVQcm9wcywgRHJhZ2dhYmxlU3RhdGU+IHtcclxuXHJcbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0RyYWdnYWJsZSc7XHJcblxyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAvLyBBY2NlcHRzIGFsbCBwcm9wcyA8RHJhZ2dhYmxlQ29yZT4gYWNjZXB0cy5cclxuICAgIC4uLkRyYWdnYWJsZUNvcmUucHJvcFR5cGVzLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYGF4aXNgIGRldGVybWluZXMgd2hpY2ggYXhpcyB0aGUgZHJhZ2dhYmxlIGNhbiBtb3ZlLlxyXG4gICAgICpcclxuICAgICAqICBOb3RlIHRoYXQgYWxsIGNhbGxiYWNrcyB3aWxsIHN0aWxsIHJldHVybiBkYXRhIGFzIG5vcm1hbC4gVGhpcyBvbmx5XHJcbiAgICAgKiAgY29udHJvbHMgZmx1c2hpbmcgdG8gdGhlIERPTS5cclxuICAgICAqXHJcbiAgICAgKiAnYm90aCcgYWxsb3dzIG1vdmVtZW50IGhvcml6b250YWxseSBhbmQgdmVydGljYWxseS5cclxuICAgICAqICd4JyBsaW1pdHMgbW92ZW1lbnQgdG8gaG9yaXpvbnRhbCBheGlzLlxyXG4gICAgICogJ3knIGxpbWl0cyBtb3ZlbWVudCB0byB2ZXJ0aWNhbCBheGlzLlxyXG4gICAgICogJ25vbmUnIGxpbWl0cyBhbGwgbW92ZW1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogRGVmYXVsdHMgdG8gJ2JvdGgnLlxyXG4gICAgICovXHJcbiAgICBheGlzOiBQcm9wVHlwZXMub25lT2YoWydib3RoJywgJ3gnLCAneScsICdub25lJ10pLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYGJvdW5kc2AgZGV0ZXJtaW5lcyB0aGUgcmFuZ2Ugb2YgbW92ZW1lbnQgYXZhaWxhYmxlIHRvIHRoZSBlbGVtZW50LlxyXG4gICAgICogQXZhaWxhYmxlIHZhbHVlcyBhcmU6XHJcbiAgICAgKlxyXG4gICAgICogJ3BhcmVudCcgcmVzdHJpY3RzIG1vdmVtZW50IHdpdGhpbiB0aGUgRHJhZ2dhYmxlJ3MgcGFyZW50IG5vZGUuXHJcbiAgICAgKlxyXG4gICAgICogQWx0ZXJuYXRpdmVseSwgcGFzcyBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXMsIGFsbCBvZiB3aGljaCBhcmUgb3B0aW9uYWw6XHJcbiAgICAgKlxyXG4gICAgICoge2xlZnQ6IExFRlRfQk9VTkQsIHJpZ2h0OiBSSUdIVF9CT1VORCwgYm90dG9tOiBCT1RUT01fQk9VTkQsIHRvcDogVE9QX0JPVU5EfVxyXG4gICAgICpcclxuICAgICAqIEFsbCB2YWx1ZXMgYXJlIGluIHB4LlxyXG4gICAgICpcclxuICAgICAqIEV4YW1wbGU6XHJcbiAgICAgKlxyXG4gICAgICogYGBganN4XHJcbiAgICAgKiAgIGxldCBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICAgKiAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAqICAgICAgICAgcmV0dXJuIChcclxuICAgICAqICAgICAgICAgICAgPERyYWdnYWJsZSBib3VuZHM9e3tyaWdodDogMzAwLCBib3R0b206IDMwMH19PlxyXG4gICAgICogICAgICAgICAgICAgIDxkaXY+Q29udGVudDwvZGl2PlxyXG4gICAgICogICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICogICAgICAgICApO1xyXG4gICAgICogICAgICAgfVxyXG4gICAgICogICB9KTtcclxuICAgICAqIGBgYFxyXG4gICAgICovXHJcbiAgICBib3VuZHM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIGxlZnQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgcmlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgdG9wOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIGJvdHRvbTogUHJvcFR5cGVzLm51bWJlclxyXG4gICAgICB9KSxcclxuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgUHJvcFR5cGVzLm9uZU9mKFtmYWxzZV0pXHJcbiAgICBdKSxcclxuXHJcbiAgICBkZWZhdWx0Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZGVmYXVsdENsYXNzTmFtZURyYWdnaW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZGVmYXVsdENsYXNzTmFtZURyYWdnZWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBgZGVmYXVsdFBvc2l0aW9uYCBzcGVjaWZpZXMgdGhlIHggYW5kIHkgdGhhdCB0aGUgZHJhZ2dlZCBpdGVtIHNob3VsZCBzdGFydCBhdFxyXG4gICAgICpcclxuICAgICAqIEV4YW1wbGU6XHJcbiAgICAgKlxyXG4gICAgICogYGBganN4XHJcbiAgICAgKiAgICAgIGxldCBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICAgKiAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAqICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICogICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGRlZmF1bHRQb3NpdGlvbj17e3g6IDI1LCB5OiAyNX19PlxyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgPGRpdj5JIHN0YXJ0IHdpdGggdHJhbnNmb3JtWDogMjVweCBhbmQgdHJhbnNmb3JtWTogMjVweDs8L2Rpdj5cclxuICAgICAqICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICAgKiAgICAgICAgICAgICAgKTtcclxuICAgICAqICAgICAgICAgIH1cclxuICAgICAqICAgICAgfSk7XHJcbiAgICAgKiBgYGBcclxuICAgICAqL1xyXG4gICAgZGVmYXVsdFBvc2l0aW9uOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICB4OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICB5OiBQcm9wVHlwZXMubnVtYmVyXHJcbiAgICB9KSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIGBwb3NpdGlvbmAsIGlmIHByZXNlbnQsIGRlZmluZXMgdGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIGVsZW1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogIFRoaXMgaXMgc2ltaWxhciB0byBob3cgZm9ybSBlbGVtZW50cyBpbiBSZWFjdCB3b3JrIC0gaWYgbm8gYHBvc2l0aW9uYCBpcyBzdXBwbGllZCwgdGhlIGNvbXBvbmVudFxyXG4gICAgICogIGlzIHVuY29udHJvbGxlZC5cclxuICAgICAqXHJcbiAgICAgKiBFeGFtcGxlOlxyXG4gICAgICpcclxuICAgICAqIGBgYGpzeFxyXG4gICAgICogICAgICBsZXQgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgICogICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgKiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAqICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZSBwb3NpdGlvbj17e3g6IDI1LCB5OiAyNX19PlxyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgPGRpdj5JIHN0YXJ0IHdpdGggdHJhbnNmb3JtWDogMjVweCBhbmQgdHJhbnNmb3JtWTogMjVweDs8L2Rpdj5cclxuICAgICAqICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICAgKiAgICAgICAgICAgICAgKTtcclxuICAgICAqICAgICAgICAgIH1cclxuICAgICAqICAgICAgfSk7XHJcbiAgICAgKiBgYGBcclxuICAgICAqL1xyXG4gICAgcG9zaXRpb246IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIHg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgIHk6IFByb3BUeXBlcy5udW1iZXJcclxuICAgIH0pLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlc2UgcHJvcGVydGllcyBzaG91bGQgYmUgZGVmaW5lZCBvbiB0aGUgY2hpbGQsIG5vdCBoZXJlLlxyXG4gICAgICovXHJcbiAgICBjbGFzc05hbWU6IGRvbnRTZXRNZSxcclxuICAgIHN0eWxlOiBkb250U2V0TWUsXHJcbiAgICB0cmFuc2Zvcm06IGRvbnRTZXRNZVxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAuLi5EcmFnZ2FibGVDb3JlLmRlZmF1bHRQcm9wcyxcclxuICAgIGF4aXM6ICdib3RoJyxcclxuICAgIGJvdW5kczogZmFsc2UsXHJcbiAgICBkZWZhdWx0Q2xhc3NOYW1lOiAncmVhY3QtZHJhZ2dhYmxlJyxcclxuICAgIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2luZzogJ3JlYWN0LWRyYWdnYWJsZS1kcmFnZ2luZycsXHJcbiAgICBkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dlZDogJ3JlYWN0LWRyYWdnYWJsZS1kcmFnZ2VkJyxcclxuICAgIGRlZmF1bHRQb3NpdGlvbjoge3g6IDAsIHk6IDB9LFxyXG4gICAgcG9zaXRpb246IG51bGxcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogRHJhZ2dhYmxlUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAvLyBXaGV0aGVyIG9yIG5vdCB3ZSBhcmUgY3VycmVudGx5IGRyYWdnaW5nLlxyXG4gICAgICBkcmFnZ2luZzogZmFsc2UsXHJcblxyXG4gICAgICAvLyBXaGV0aGVyIG9yIG5vdCB3ZSBoYXZlIGJlZW4gZHJhZ2dlZCBiZWZvcmUuXHJcbiAgICAgIGRyYWdnZWQ6IGZhbHNlLFxyXG5cclxuICAgICAgLy8gQ3VycmVudCB0cmFuc2Zvcm0geCBhbmQgeS5cclxuICAgICAgeDogcHJvcHMucG9zaXRpb24gPyBwcm9wcy5wb3NpdGlvbi54IDogcHJvcHMuZGVmYXVsdFBvc2l0aW9uLngsXHJcbiAgICAgIHk6IHByb3BzLnBvc2l0aW9uID8gcHJvcHMucG9zaXRpb24ueSA6IHByb3BzLmRlZmF1bHRQb3NpdGlvbi55LFxyXG5cclxuICAgICAgLy8gVXNlZCBmb3IgY29tcGVuc2F0aW5nIGZvciBvdXQtb2YtYm91bmRzIGRyYWdzXHJcbiAgICAgIHNsYWNrWDogMCwgc2xhY2tZOiAwLFxyXG5cclxuICAgICAgLy8gQ2FuIG9ubHkgZGV0ZXJtaW5lIGlmIFNWRyBhZnRlciBtb3VudGluZ1xyXG4gICAgICBpc0VsZW1lbnRTVkc6IGZhbHNlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMucG9zaXRpb24gJiYgISh0aGlzLnByb3BzLm9uRHJhZyB8fCB0aGlzLnByb3BzLm9uU3RvcCkpIHtcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgIGNvbnNvbGUud2FybignQSBgcG9zaXRpb25gIHdhcyBhcHBsaWVkIHRvIHRoaXMgPERyYWdnYWJsZT4sIHdpdGhvdXQgZHJhZyBoYW5kbGVycy4gVGhpcyB3aWxsIG1ha2UgdGhpcyAnICtcclxuICAgICAgICAnY29tcG9uZW50IGVmZmVjdGl2ZWx5IHVuZHJhZ2dhYmxlLiBQbGVhc2UgYXR0YWNoIGBvbkRyYWdgIG9yIGBvblN0b3BgIGhhbmRsZXJzIHNvIHlvdSBjYW4gYWRqdXN0IHRoZSAnICtcclxuICAgICAgICAnYHBvc2l0aW9uYCBvZiB0aGlzIGVsZW1lbnQuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGUgZWxlbWVudCBwYXNzZWQgaXMgYW4gaW5zdGFuY2VvZiBTVkdFbGVtZW50XHJcbiAgICBpZih0eXBlb2Ygd2luZG93LlNWR0VsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpIGluc3RhbmNlb2Ygd2luZG93LlNWR0VsZW1lbnQpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRWxlbWVudFNWRzogdHJ1ZSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBPYmplY3QpIHtcclxuICAgIC8vIFNldCB4L3kgaWYgcG9zaXRpb24gaGFzIGNoYW5nZWRcclxuICAgIGlmIChuZXh0UHJvcHMucG9zaXRpb24gJiZcclxuICAgICAgICAoIXRoaXMucHJvcHMucG9zaXRpb24gfHxcclxuICAgICAgICAgIG5leHRQcm9wcy5wb3NpdGlvbi54ICE9PSB0aGlzLnByb3BzLnBvc2l0aW9uLnggfHxcclxuICAgICAgICAgIG5leHRQcm9wcy5wb3NpdGlvbi55ICE9PSB0aGlzLnByb3BzLnBvc2l0aW9uLnlcclxuICAgICAgICApXHJcbiAgICAgICkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgeDogbmV4dFByb3BzLnBvc2l0aW9uLngsIHk6IG5leHRQcm9wcy5wb3NpdGlvbi55IH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtkcmFnZ2luZzogZmFsc2V9KTsgLy8gcHJldmVudHMgaW52YXJpYW50IGlmIHVubW91bnRlZCB3aGlsZSBkcmFnZ2luZ1xyXG4gIH1cclxuXHJcbiAgb25EcmFnU3RhcnQ6IERyYWdnYWJsZUV2ZW50SGFuZGxlciA9IChlLCBjb3JlRGF0YSkgPT4ge1xyXG4gICAgbG9nKCdEcmFnZ2FibGU6IG9uRHJhZ1N0YXJ0OiAlaicsIGNvcmVEYXRhKTtcclxuXHJcbiAgICAvLyBTaG9ydC1jaXJjdWl0IGlmIHVzZXIncyBjYWxsYmFjayBraWxsZWQgaXQuXHJcbiAgICBjb25zdCBzaG91bGRTdGFydCA9IHRoaXMucHJvcHMub25TdGFydChlLCBjcmVhdGVEcmFnZ2FibGVEYXRhKHRoaXMsIGNvcmVEYXRhKSk7XHJcbiAgICAvLyBLaWxscyBzdGFydCBldmVudCBvbiBjb3JlIGFzIHdlbGwsIHNvIG1vdmUgaGFuZGxlcnMgYXJlIG5ldmVyIGJvdW5kLlxyXG4gICAgaWYgKHNob3VsZFN0YXJ0ID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe2RyYWdnaW5nOiB0cnVlLCBkcmFnZ2VkOiB0cnVlfSk7XHJcbiAgfTtcclxuXHJcbiAgb25EcmFnOiBEcmFnZ2FibGVFdmVudEhhbmRsZXIgPSAoZSwgY29yZURhdGEpID0+IHtcclxuICAgIGlmICghdGhpcy5zdGF0ZS5kcmFnZ2luZykgcmV0dXJuIGZhbHNlO1xyXG4gICAgbG9nKCdEcmFnZ2FibGU6IG9uRHJhZzogJWonLCBjb3JlRGF0YSk7XHJcblxyXG4gICAgY29uc3QgdWlEYXRhID0gY3JlYXRlRHJhZ2dhYmxlRGF0YSh0aGlzLCBjb3JlRGF0YSk7XHJcblxyXG4gICAgY29uc3QgbmV3U3RhdGU6ICRTaGFwZTxEcmFnZ2FibGVTdGF0ZT4gPSB7XHJcbiAgICAgIHg6IHVpRGF0YS54LFxyXG4gICAgICB5OiB1aURhdGEueVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBLZWVwIHdpdGhpbiBib3VuZHMuXHJcbiAgICBpZiAodGhpcy5wcm9wcy5ib3VuZHMpIHtcclxuICAgICAgLy8gU2F2ZSBvcmlnaW5hbCB4IGFuZCB5LlxyXG4gICAgICBjb25zdCB7eCwgeX0gPSBuZXdTdGF0ZTtcclxuXHJcbiAgICAgIC8vIEFkZCBzbGFjayB0byB0aGUgdmFsdWVzIHVzZWQgdG8gY2FsY3VsYXRlIGJvdW5kIHBvc2l0aW9uLiBUaGlzIHdpbGwgZW5zdXJlIHRoYXQgaWZcclxuICAgICAgLy8gd2Ugc3RhcnQgcmVtb3Zpbmcgc2xhY2ssIHRoZSBlbGVtZW50IHdvbid0IHJlYWN0IHRvIGl0IHJpZ2h0IGF3YXkgdW50aWwgaXQncyBiZWVuXHJcbiAgICAgIC8vIGNvbXBsZXRlbHkgcmVtb3ZlZC5cclxuICAgICAgbmV3U3RhdGUueCArPSB0aGlzLnN0YXRlLnNsYWNrWDtcclxuICAgICAgbmV3U3RhdGUueSArPSB0aGlzLnN0YXRlLnNsYWNrWTtcclxuXHJcbiAgICAgIC8vIEdldCBib3VuZCBwb3NpdGlvbi4gVGhpcyB3aWxsIGNlaWwvZmxvb3IgdGhlIHggYW5kIHkgd2l0aGluIHRoZSBib3VuZGFyaWVzLlxyXG4gICAgICBjb25zdCBbbmV3U3RhdGVYLCBuZXdTdGF0ZVldID0gZ2V0Qm91bmRQb3NpdGlvbih0aGlzLCBuZXdTdGF0ZS54LCBuZXdTdGF0ZS55KTtcclxuICAgICAgbmV3U3RhdGUueCA9IG5ld1N0YXRlWDtcclxuICAgICAgbmV3U3RhdGUueSA9IG5ld1N0YXRlWTtcclxuXHJcbiAgICAgIC8vIFJlY2FsY3VsYXRlIHNsYWNrIGJ5IG5vdGluZyBob3cgbXVjaCB3YXMgc2hhdmVkIGJ5IHRoZSBib3VuZFBvc2l0aW9uIGhhbmRsZXIuXHJcbiAgICAgIG5ld1N0YXRlLnNsYWNrWCA9IHRoaXMuc3RhdGUuc2xhY2tYICsgKHggLSBuZXdTdGF0ZS54KTtcclxuICAgICAgbmV3U3RhdGUuc2xhY2tZID0gdGhpcy5zdGF0ZS5zbGFja1kgKyAoeSAtIG5ld1N0YXRlLnkpO1xyXG5cclxuICAgICAgLy8gVXBkYXRlIHRoZSBldmVudCB3ZSBmaXJlIHRvIHJlZmxlY3Qgd2hhdCByZWFsbHkgaGFwcGVuZWQgYWZ0ZXIgYm91bmRzIHRvb2sgZWZmZWN0LlxyXG4gICAgICB1aURhdGEueCA9IG5ld1N0YXRlLng7XHJcbiAgICAgIHVpRGF0YS55ID0gbmV3U3RhdGUueTtcclxuICAgICAgdWlEYXRhLmRlbHRhWCA9IG5ld1N0YXRlLnggLSB0aGlzLnN0YXRlLng7XHJcbiAgICAgIHVpRGF0YS5kZWx0YVkgPSBuZXdTdGF0ZS55IC0gdGhpcy5zdGF0ZS55O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNob3J0LWNpcmN1aXQgaWYgdXNlcidzIGNhbGxiYWNrIGtpbGxlZCBpdC5cclxuICAgIGNvbnN0IHNob3VsZFVwZGF0ZSA9IHRoaXMucHJvcHMub25EcmFnKGUsIHVpRGF0YSk7XHJcbiAgICBpZiAoc2hvdWxkVXBkYXRlID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xyXG4gIH07XHJcblxyXG4gIG9uRHJhZ1N0b3A6IERyYWdnYWJsZUV2ZW50SGFuZGxlciA9IChlLCBjb3JlRGF0YSkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlLmRyYWdnaW5nKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgLy8gU2hvcnQtY2lyY3VpdCBpZiB1c2VyJ3MgY2FsbGJhY2sga2lsbGVkIGl0LlxyXG4gICAgY29uc3Qgc2hvdWxkU3RvcCA9IHRoaXMucHJvcHMub25TdG9wKGUsIGNyZWF0ZURyYWdnYWJsZURhdGEodGhpcywgY29yZURhdGEpKTtcclxuICAgIGlmIChzaG91bGRTdG9wID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGxvZygnRHJhZ2dhYmxlOiBvbkRyYWdTdG9wOiAlaicsIGNvcmVEYXRhKTtcclxuXHJcbiAgICBjb25zdCBuZXdTdGF0ZTogJFNoYXBlPERyYWdnYWJsZVN0YXRlPiA9IHtcclxuICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxyXG4gICAgICBzbGFja1g6IDAsXHJcbiAgICAgIHNsYWNrWTogMFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBJZiB0aGlzIGlzIGEgY29udHJvbGxlZCBjb21wb25lbnQsIHRoZSByZXN1bHQgb2YgdGhpcyBvcGVyYXRpb24gd2lsbCBiZSB0b1xyXG4gICAgLy8gcmV2ZXJ0IGJhY2sgdG8gdGhlIG9sZCBwb3NpdGlvbi4gV2UgZXhwZWN0IGEgaGFuZGxlciBvbiBgb25EcmFnU3RvcGAsIGF0IHRoZSBsZWFzdC5cclxuICAgIGNvbnN0IGNvbnRyb2xsZWQgPSBCb29sZWFuKHRoaXMucHJvcHMucG9zaXRpb24pO1xyXG4gICAgaWYgKGNvbnRyb2xsZWQpIHtcclxuICAgICAgY29uc3Qge3gsIHl9ID0gdGhpcy5wcm9wcy5wb3NpdGlvbjtcclxuICAgICAgbmV3U3RhdGUueCA9IHg7XHJcbiAgICAgIG5ld1N0YXRlLnkgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpOiBSZWFjdEVsZW1lbnQ8YW55PiB7XHJcbiAgICBsZXQgc3R5bGUgPSB7fSwgc3ZnVHJhbnNmb3JtID0gbnVsbDtcclxuXHJcbiAgICAvLyBJZiB0aGlzIGlzIGNvbnRyb2xsZWQsIHdlIGRvbid0IHdhbnQgdG8gbW92ZSBpdCAtIHVubGVzcyBpdCdzIGRyYWdnaW5nLlxyXG4gICAgY29uc3QgY29udHJvbGxlZCA9IEJvb2xlYW4odGhpcy5wcm9wcy5wb3NpdGlvbik7XHJcbiAgICBjb25zdCBkcmFnZ2FibGUgPSAhY29udHJvbGxlZCB8fCB0aGlzLnN0YXRlLmRyYWdnaW5nO1xyXG5cclxuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5wcm9wcy5wb3NpdGlvbiB8fCB0aGlzLnByb3BzLmRlZmF1bHRQb3NpdGlvbjtcclxuICAgIGNvbnN0IHRyYW5zZm9ybU9wdHMgPSB7XHJcbiAgICAgIC8vIFNldCBsZWZ0IGlmIGhvcml6b250YWwgZHJhZyBpcyBlbmFibGVkXHJcbiAgICAgIHg6IGNhbkRyYWdYKHRoaXMpICYmIGRyYWdnYWJsZSA/XHJcbiAgICAgICAgdGhpcy5zdGF0ZS54IDpcclxuICAgICAgICBwb3NpdGlvbi54LFxyXG5cclxuICAgICAgLy8gU2V0IHRvcCBpZiB2ZXJ0aWNhbCBkcmFnIGlzIGVuYWJsZWRcclxuICAgICAgeTogY2FuRHJhZ1kodGhpcykgJiYgZHJhZ2dhYmxlID9cclxuICAgICAgICB0aGlzLnN0YXRlLnkgOlxyXG4gICAgICAgIHBvc2l0aW9uLnlcclxuICAgIH07XHJcblxyXG4gICAgLy8gSWYgdGhpcyBlbGVtZW50IHdhcyBTVkcsIHdlIHVzZSB0aGUgYHRyYW5zZm9ybWAgYXR0cmlidXRlLlxyXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNFbGVtZW50U1ZHKSB7XHJcbiAgICAgIHN2Z1RyYW5zZm9ybSA9IGNyZWF0ZVNWR1RyYW5zZm9ybSh0cmFuc2Zvcm1PcHRzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEFkZCBhIENTUyB0cmFuc2Zvcm0gdG8gbW92ZSB0aGUgZWxlbWVudCBhcm91bmQuIFRoaXMgYWxsb3dzIHVzIHRvIG1vdmUgdGhlIGVsZW1lbnQgYXJvdW5kXHJcbiAgICAgIC8vIHdpdGhvdXQgd29ycnlpbmcgYWJvdXQgd2hldGhlciBvciBub3QgaXQgaXMgcmVsYXRpdmVseSBvciBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuXHJcbiAgICAgIC8vIElmIHRoZSBpdGVtIHlvdSBhcmUgZHJhZ2dpbmcgYWxyZWFkeSBoYXMgYSB0cmFuc2Zvcm0gc2V0LCB3cmFwIGl0IGluIGEgPHNwYW4+IHNvIDxEcmFnZ2FibGU+XHJcbiAgICAgIC8vIGhhcyBhIGNsZWFuIHNsYXRlLlxyXG4gICAgICBzdHlsZSA9IGNyZWF0ZUNTU1RyYW5zZm9ybSh0cmFuc2Zvcm1PcHRzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGRlZmF1bHRDbGFzc05hbWUsXHJcbiAgICAgIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2luZyxcclxuICAgICAgZGVmYXVsdENsYXNzTmFtZURyYWdnZWRcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIGNvbnN0IGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcclxuXHJcbiAgICAvLyBNYXJrIHdpdGggY2xhc3Mgd2hpbGUgZHJhZ2dpbmdcclxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoKGNoaWxkcmVuLnByb3BzLmNsYXNzTmFtZSB8fCAnJyksIGRlZmF1bHRDbGFzc05hbWUsIHtcclxuICAgICAgW2RlZmF1bHRDbGFzc05hbWVEcmFnZ2luZ106IHRoaXMuc3RhdGUuZHJhZ2dpbmcsXHJcbiAgICAgIFtkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dlZF06IHRoaXMuc3RhdGUuZHJhZ2dlZFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUmV1c2UgdGhlIGNoaWxkIHByb3ZpZGVkXHJcbiAgICAvLyBUaGlzIG1ha2VzIGl0IGZsZXhpYmxlIHRvIHVzZSB3aGF0ZXZlciBlbGVtZW50IGlzIHdhbnRlZCAoZGl2LCB1bCwgZXRjKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPERyYWdnYWJsZUNvcmUgey4uLnRoaXMucHJvcHN9IG9uU3RhcnQ9e3RoaXMub25EcmFnU3RhcnR9IG9uRHJhZz17dGhpcy5vbkRyYWd9IG9uU3RvcD17dGhpcy5vbkRyYWdTdG9wfT5cclxuICAgICAgICB7UmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XHJcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcclxuICAgICAgICAgIHN0eWxlOiB7Li4uY2hpbGRyZW4ucHJvcHMuc3R5bGUsIC4uLnN0eWxlfSxcclxuICAgICAgICAgIHRyYW5zZm9ybTogc3ZnVHJhbnNmb3JtXHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvRHJhZ2dhYmxlQ29yZT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9EcmFnZ2FibGUuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB0aHJvdyBlcnI7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBlbXB0eUZ1bmN0aW9uO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=