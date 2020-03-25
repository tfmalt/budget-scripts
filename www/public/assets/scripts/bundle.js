/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@material/mwc-base/base-element.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/mwc-base/base-element.js ***!
  \*********************************************************/
/*! exports provided: addHasRemoveClass, BaseElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseElement", function() { return BaseElement; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@material/mwc-base/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addHasRemoveClass", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_1__["addHasRemoveClass"]; });

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


class BaseElement extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
    /**
     * Create and attach the MDC Foundation to the instance
     */
    createFoundation() {
        if (this.mdcFoundation !== undefined) {
            this.mdcFoundation.destroy();
        }
        if (this.mdcFoundationClass) {
            this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter());
            this.mdcFoundation.init();
        }
    }
    firstUpdated() {
        this.createFoundation();
    }
}
//# sourceMappingURL=base-element.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-base/form-element.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/mwc-base/form-element.js ***!
  \*********************************************************/
/*! exports provided: addHasRemoveClass, BaseElement, FormElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormElement", function() { return FormElement; });
/* harmony import */ var _base_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-element.js */ "./node_modules/@material/mwc-base/base-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addHasRemoveClass", function() { return _base_element_js__WEBPACK_IMPORTED_MODULE_0__["addHasRemoveClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseElement", function() { return _base_element_js__WEBPACK_IMPORTED_MODULE_0__["BaseElement"]; });

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


class FormElement extends _base_element_js__WEBPACK_IMPORTED_MODULE_0__["BaseElement"] {
    createRenderRoot() {
        return this.attachShadow({ mode: 'open', delegatesFocus: true });
    }
    click() {
        if (this.formElement) {
            this.formElement.focus();
            this.formElement.click();
        }
    }
    setAriaLabel(label) {
        if (this.formElement) {
            this.formElement.setAttribute('aria-label', label);
        }
    }
    firstUpdated() {
        super.firstUpdated();
        this.mdcRoot.addEventListener('change', (e) => {
            this.dispatchEvent(new Event('change', e));
        });
    }
}
//# sourceMappingURL=form-element.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-base/node_modules/@material/dom/ponyfill.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@material/mwc-base/node_modules/@material/dom/ponyfill.js ***!
  \********************************************************************************/
/*! exports provided: closest, matches, estimateScrollWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateScrollWidth", function() { return estimateScrollWidth; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
    if (element.closest) {
        return element.closest(selector);
    }
    var el = element;
    while (el) {
        if (matches(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
function matches(element, selector) {
    var nativeMatches = element.matches
        || element.webkitMatchesSelector
        || element.msMatchesSelector;
    return nativeMatches.call(element, selector);
}
/**
 * Used to compute the estimated scroll width of elements. When an element is
 * hidden due to display: none; being applied to a parent element, the width is
 * returned as 0. However, the element will have a true width once no longer
 * inside a display: none context. This method computes an estimated width when
 * the element is hidden or returns the true width when the element is visble.
 * @param {Element} element the element whose width to estimate
 */
function estimateScrollWidth(element) {
    // Check the offsetParent. If the element inherits display: none from any
    // parent, the offsetParent property will be null (see
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent).
    // This check ensures we only clone the node when necessary.
    var htmlEl = element;
    if (htmlEl.offsetParent !== null) {
        return htmlEl.scrollWidth;
    }
    var clone = htmlEl.cloneNode(true);
    clone.style.setProperty('position', 'absolute');
    clone.style.setProperty('transform', 'translate(-9999px, -9999px)');
    document.documentElement.appendChild(clone);
    var scrollWidth = clone.scrollWidth;
    document.documentElement.removeChild(clone);
    return scrollWidth;
}
//# sourceMappingURL=ponyfill.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-base/observer.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/mwc-base/observer.js ***!
  \*****************************************************/
/*! exports provided: observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return observer; });
const observer = (observer) => 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(proto, propName) => {
    // if we haven't wrapped `updated` in this class, do so
    if (!proto.constructor._observers) {
        proto.constructor._observers = new Map();
        const userUpdated = proto.updated;
        proto.updated = function (changedProperties) {
            userUpdated.call(this, changedProperties);
            changedProperties.forEach((v, k) => {
                const observer = this.constructor._observers.get(k);
                if (observer !== undefined) {
                    observer.call(this, this[k], v);
                }
            });
        };
        // clone any existing observers (superclasses)
    }
    else if (!proto.constructor.hasOwnProperty('_observers')) {
        const observers = proto.constructor._observers;
        proto.constructor._observers = new Map();
        observers.forEach(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (v, k) => proto.constructor._observers.set(k, v));
    }
    // set this method
    proto.constructor._observers.set(propName, observer);
};
//# sourceMappingURL=observer.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-base/utils.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/mwc-base/utils.js ***!
  \**************************************************/
/*! exports provided: isNodeElement, findAssignedElement, addHasRemoveClass, supportsPassiveEventListener, deepActiveElementPath, doesElementContainFocus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNodeElement", function() { return isNodeElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findAssignedElement", function() { return findAssignedElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addHasRemoveClass", function() { return addHasRemoveClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListener", function() { return supportsPassiveEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepActiveElementPath", function() { return deepActiveElementPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doesElementContainFocus", function() { return doesElementContainFocus; });
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/mwc-base/node_modules/@material/dom/ponyfill.js");
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/**
 * Return an element assigned to a given slot that matches the given selector
 */

/**
 * Determines whether a node is an element.
 *
 * @param node Node to check
 */
const isNodeElement = (node) => {
    return node.nodeType === Node.ELEMENT_NODE;
};
function findAssignedElement(slot, selector) {
    for (const node of slot.assignedNodes({ flatten: true })) {
        if (isNodeElement(node)) {
            const el = node;
            if (Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_0__["matches"])(el, selector)) {
                return el;
            }
        }
    }
    return null;
}
function addHasRemoveClass(element) {
    return {
        addClass: (className) => {
            element.classList.add(className);
        },
        removeClass: (className) => {
            element.classList.remove(className);
        },
        hasClass: (className) => element.classList.contains(className),
    };
}
let supportsPassive = false;
const fn = () => { };
const optionsBlock = {
    get passive() {
        supportsPassive = true;
        return false;
    }
};
document.addEventListener('x', fn, optionsBlock);
document.removeEventListener('x', fn);
/**
 * Do event listeners suport the `passive` option?
 */
const supportsPassiveEventListener = supportsPassive;
const deepActiveElementPath = (doc = window.document) => {
    let activeElement = doc.activeElement;
    const path = [];
    if (!activeElement) {
        return path;
    }
    while (activeElement) {
        path.push(activeElement);
        if (activeElement.shadowRoot) {
            activeElement = activeElement.shadowRoot.activeElement;
        }
        else {
            break;
        }
    }
    return path;
};
const doesElementContainFocus = (element) => {
    const activePath = deepActiveElementPath();
    if (!activePath.length) {
        return false;
    }
    const deepActiveElement = activePath[activePath.length - 1];
    const focusEv = new Event('check-if-focused', { bubbles: true, composed: true });
    let composedPath = [];
    const listener = (ev) => {
        composedPath = ev.composedPath();
    };
    document.body.addEventListener('check-if-focused', listener);
    deepActiveElement.dispatchEvent(focusEv);
    document.body.removeEventListener('check-if-focused', listener);
    return composedPath.indexOf(element) !== -1;
};
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-floating-label/mwc-floating-label-directive.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@material/mwc-floating-label/mwc-floating-label-directive.js ***!
  \***********************************************************************************/
/*! exports provided: floatingLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floatingLabel", function() { return floatingLabel; });
/* harmony import */ var _material_floating_label_foundation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/floating-label/foundation.js */ "./node_modules/@material/mwc-floating-label/node_modules/@material/floating-label/foundation.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");


const createAdapter = (labelElement) => {
    return {
        addClass: (className) => labelElement.classList.add(className),
        removeClass: (className) => labelElement.classList.remove(className),
        getWidth: () => labelElement.scrollWidth,
        registerInteractionHandler: (evtType, handler) => {
            labelElement.addEventListener(evtType, handler);
        },
        deregisterInteractionHandler: (evtType, handler) => {
            labelElement.removeEventListener(evtType, handler);
        },
    };
};
const partToFoundationMap = new WeakMap();
const floatingLabel = Object(lit_html__WEBPACK_IMPORTED_MODULE_1__["directive"])((label) => (part) => {
    const lastFoundation = partToFoundationMap.get(part);
    if (!lastFoundation) {
        const labelElement = part.committer.element;
        labelElement.classList.add('mdc-floating-label');
        const adapter = createAdapter(labelElement);
        const foundation = new _material_floating_label_foundation_js__WEBPACK_IMPORTED_MODULE_0__["MDCFloatingLabelFoundation"](adapter);
        foundation.init();
        part.setValue(foundation);
        partToFoundationMap.set(part, { label, foundation });
    }
    else if (lastFoundation.label !== label) {
        const labelElement = part.committer.element;
        const labelChangeEvent = new Event('labelchange');
        labelElement.dispatchEvent(labelChangeEvent);
    }
});
//# sourceMappingURL=mwc-floating-label-directive.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-floating-label/node_modules/@material/base/foundation.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@material/mwc-floating-label/node_modules/@material/base/foundation.js ***!
  \*********************************************************************************************/
/*! exports provided: MDCFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFoundation", function() { return MDCFoundation; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = /** @class */ (function () {
    function MDCFoundation(adapter) {
        if (adapter === void 0) { adapter = {}; }
        this.adapter_ = adapter;
    }
    Object.defineProperty(MDCFoundation, "cssClasses", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "strings", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "numbers", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "defaultAdapter", {
        get: function () {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
        },
        enumerable: true,
        configurable: true
    });
    MDCFoundation.prototype.init = function () {
        // Subclasses should override this method to perform initialization routines (registering events, etc.)
    };
    MDCFoundation.prototype.destroy = function () {
        // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };
    return MDCFoundation;
}());

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-floating-label/node_modules/@material/floating-label/constants.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@material/mwc-floating-label/node_modules/@material/floating-label/constants.js ***!
  \******************************************************************************************************/
/*! exports provided: cssClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
    LABEL_SHAKE: 'mdc-floating-label--shake',
    ROOT: 'mdc-floating-label',
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-floating-label/node_modules/@material/floating-label/foundation.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@material/mwc-floating-label/node_modules/@material/floating-label/foundation.js ***!
  \*******************************************************************************************************/
/*! exports provided: MDCFloatingLabelFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFloatingLabelFoundation", function() { return MDCFloatingLabelFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/mwc-floating-label/node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/mwc-floating-label/node_modules/@material/floating-label/constants.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCFloatingLabelFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCFloatingLabelFoundation, _super);
    function MDCFloatingLabelFoundation(adapter) {
        var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCFloatingLabelFoundation.defaultAdapter, adapter)) || this;
        _this.shakeAnimationEndHandler_ = function () { return _this.handleShakeAnimationEnd_(); };
        return _this;
    }
    Object.defineProperty(MDCFloatingLabelFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFloatingLabelFoundation, "defaultAdapter", {
        /**
         * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                getWidth: function () { return 0; },
                registerInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCFloatingLabelFoundation.prototype.init = function () {
        this.adapter_.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
    };
    MDCFloatingLabelFoundation.prototype.destroy = function () {
        this.adapter_.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
    };
    /**
     * Returns the width of the label element.
     */
    MDCFloatingLabelFoundation.prototype.getWidth = function () {
        return this.adapter_.getWidth();
    };
    /**
     * Styles the label to produce a shake animation to indicate an error.
     * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
     */
    MDCFloatingLabelFoundation.prototype.shake = function (shouldShake) {
        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
        if (shouldShake) {
            this.adapter_.addClass(LABEL_SHAKE);
        }
        else {
            this.adapter_.removeClass(LABEL_SHAKE);
        }
    };
    /**
     * Styles the label to float or dock.
     * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
     */
    MDCFloatingLabelFoundation.prototype.float = function (shouldFloat) {
        var _a = MDCFloatingLabelFoundation.cssClasses, LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE, LABEL_SHAKE = _a.LABEL_SHAKE;
        if (shouldFloat) {
            this.adapter_.addClass(LABEL_FLOAT_ABOVE);
        }
        else {
            this.adapter_.removeClass(LABEL_FLOAT_ABOVE);
            this.adapter_.removeClass(LABEL_SHAKE);
        }
    };
    MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd_ = function () {
        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
        this.adapter_.removeClass(LABEL_SHAKE);
    };
    return MDCFloatingLabelFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCFloatingLabelFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-icon/mwc-icon-host-css.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material/mwc-icon/mwc-icon-host-css.js ***!
  \**************************************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const style = lit_element__WEBPACK_IMPORTED_MODULE_0__["css"] `:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;
//# sourceMappingURL=mwc-icon-host-css.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-icon/mwc-icon.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/mwc-icon/mwc-icon.js ***!
  \*****************************************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _mwc_icon_host_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mwc-icon-host-css.js */ "./node_modules/@material/mwc-icon/mwc-icon-host-css.js");

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


let Icon = class Icon extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `<slot></slot>`;
    }
};
Icon.styles = _mwc_icon_host_css_js__WEBPACK_IMPORTED_MODULE_2__["style"];
Icon = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])('mwc-icon')
], Icon);

//# sourceMappingURL=mwc-icon.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-line-ripple/mwc-line-ripple-directive.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@material/mwc-line-ripple/mwc-line-ripple-directive.js ***!
  \*****************************************************************************/
/*! exports provided: lineRipple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineRipple", function() { return lineRipple; });
/* harmony import */ var _material_line_ripple_foundation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/line-ripple/foundation.js */ "./node_modules/@material/mwc-line-ripple/node_modules/@material/line-ripple/foundation.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");


const createAdapter = (lineElement) => {
    return {
        addClass: (className) => lineElement.classList.add(className),
        removeClass: (className) => lineElement.classList.remove(className),
        hasClass: (className) => lineElement.classList.contains(className),
        setStyle: (propertyName, value) => lineElement.style.setProperty(propertyName, value),
        registerEventHandler: (evtType, handler) => {
            lineElement.addEventListener(evtType, handler);
        },
        deregisterEventHandler: (evtType, handler) => {
            lineElement.removeEventListener(evtType, handler);
        },
    };
};
const partToFoundationMap = new WeakMap();
const lineRipple = Object(lit_html__WEBPACK_IMPORTED_MODULE_1__["directive"])(() => (part) => {
    const lastFoundation = partToFoundationMap.get(part);
    if (!lastFoundation) {
        const lineElement = part.committer.element;
        lineElement.classList.add('mdc-line-ripple');
        const adapter = createAdapter(lineElement);
        const foundation = new _material_line_ripple_foundation_js__WEBPACK_IMPORTED_MODULE_0__["MDCLineRippleFoundation"](adapter);
        foundation.init();
        part.setValue(foundation);
        partToFoundationMap.set(part, foundation);
    }
});
//# sourceMappingURL=mwc-line-ripple-directive.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-line-ripple/node_modules/@material/base/foundation.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@material/mwc-line-ripple/node_modules/@material/base/foundation.js ***!
  \******************************************************************************************/
/*! exports provided: MDCFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFoundation", function() { return MDCFoundation; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = /** @class */ (function () {
    function MDCFoundation(adapter) {
        if (adapter === void 0) { adapter = {}; }
        this.adapter_ = adapter;
    }
    Object.defineProperty(MDCFoundation, "cssClasses", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "strings", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "numbers", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "defaultAdapter", {
        get: function () {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
        },
        enumerable: true,
        configurable: true
    });
    MDCFoundation.prototype.init = function () {
        // Subclasses should override this method to perform initialization routines (registering events, etc.)
    };
    MDCFoundation.prototype.destroy = function () {
        // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };
    return MDCFoundation;
}());

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-line-ripple/node_modules/@material/line-ripple/constants.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@material/mwc-line-ripple/node_modules/@material/line-ripple/constants.js ***!
  \************************************************************************************************/
/*! exports provided: cssClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
    LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating',
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-line-ripple/node_modules/@material/line-ripple/foundation.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@material/mwc-line-ripple/node_modules/@material/line-ripple/foundation.js ***!
  \*************************************************************************************************/
/*! exports provided: MDCLineRippleFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCLineRippleFoundation", function() { return MDCLineRippleFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/mwc-line-ripple/node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/mwc-line-ripple/node_modules/@material/line-ripple/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCLineRippleFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCLineRippleFoundation, _super);
    function MDCLineRippleFoundation(adapter) {
        var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCLineRippleFoundation.defaultAdapter, adapter)) || this;
        _this.transitionEndHandler_ = function (evt) { return _this.handleTransitionEnd(evt); };
        return _this;
    }
    Object.defineProperty(MDCLineRippleFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCLineRippleFoundation, "defaultAdapter", {
        /**
         * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                setStyle: function () { return undefined; },
                registerEventHandler: function () { return undefined; },
                deregisterEventHandler: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCLineRippleFoundation.prototype.init = function () {
        this.adapter_.registerEventHandler('transitionend', this.transitionEndHandler_);
    };
    MDCLineRippleFoundation.prototype.destroy = function () {
        this.adapter_.deregisterEventHandler('transitionend', this.transitionEndHandler_);
    };
    MDCLineRippleFoundation.prototype.activate = function () {
        this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_DEACTIVATING);
        this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_ACTIVE);
    };
    MDCLineRippleFoundation.prototype.setRippleCenter = function (xCoordinate) {
        this.adapter_.setStyle('transform-origin', xCoordinate + "px center");
    };
    MDCLineRippleFoundation.prototype.deactivate = function () {
        this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_DEACTIVATING);
    };
    MDCLineRippleFoundation.prototype.handleTransitionEnd = function (evt) {
        // Wait for the line ripple to be either transparent or opaque
        // before emitting the animation end event
        var isDeactivating = this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_DEACTIVATING);
        if (evt.propertyName === 'opacity') {
            if (isDeactivating) {
                this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_ACTIVE);
                this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_DEACTIVATING);
            }
        }
    };
    return MDCLineRippleFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCLineRippleFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-list/mwc-list-base.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material/mwc-list/mwc-list-base.js ***!
  \**********************************************************/
/*! exports provided: createSetFromIndex, isEventMulti, isIndexSet, ListBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBase", function() { return ListBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_mwc_base_base_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-base/base-element.js */ "./node_modules/@material/mwc-base/base-element.js");
/* harmony import */ var _material_mwc_base_observer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-base/observer.js */ "./node_modules/@material/mwc-base/observer.js");
/* harmony import */ var _material_mwc_base_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/mwc-base/utils.js */ "./node_modules/@material/mwc-base/utils.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit-html/directives/if-defined.js */ "./node_modules/lit-html/directives/if-defined.js");
/* harmony import */ var _mwc_list_foundation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mwc-list-foundation.js */ "./node_modules/@material/mwc-list/mwc-list-foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSetFromIndex", function() { return _mwc_list_foundation_js__WEBPACK_IMPORTED_MODULE_6__["createSetFromIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEventMulti", function() { return _mwc_list_foundation_js__WEBPACK_IMPORTED_MODULE_6__["isEventMulti"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIndexSet", function() { return _mwc_list_foundation_js__WEBPACK_IMPORTED_MODULE_6__["isIndexSet"]; });

/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/








const isListItem = (element) => {
    return element.hasAttribute('mwc-list-item');
};
/**
 * @fires selected {SelectedDetail}
 * @fires action {ActionDetail}
 */
class ListBase extends _material_mwc_base_base_element_js__WEBPACK_IMPORTED_MODULE_1__["BaseElement"] {
    constructor() {
        super(...arguments);
        this.mdcAdapter = null;
        this.mdcFoundationClass = _mwc_list_foundation_js__WEBPACK_IMPORTED_MODULE_6__["default"];
        this.activatable = false;
        this.multi = false;
        this.wrapFocus = false;
        this.itemRoles = null;
        this.innerRole = null;
        this.innerAriaLabel = null;
        this.rootTabbable = false;
        this.previousTabindex = null;
        this.noninteractive = false;
        this.items_ = [];
    }
    get assignedElements() {
        const slot = this.slotElement;
        if (slot) {
            return slot.assignedNodes({ flatten: true }).filter(_material_mwc_base_utils_js__WEBPACK_IMPORTED_MODULE_3__["isNodeElement"]);
        }
        return [];
    }
    get items() {
        return this.items_;
    }
    updateItems() {
        const nodes = this.assignedElements;
        const listItems = [];
        for (const node of nodes) {
            if (isListItem(node)) {
                listItems.push(node);
            }
            if (node.hasAttribute('divider') && !node.hasAttribute('role')) {
                node.setAttribute('role', 'separator');
            }
        }
        this.items_ = listItems;
        const selectedIndices = new Set();
        this.items_.forEach((item, index) => {
            if (this.itemRoles) {
                item.setAttribute('role', this.itemRoles);
            }
            else {
                item.removeAttribute('role');
            }
            if (item.selected) {
                selectedIndices.add(index);
            }
        });
        if (this.multi) {
            this.select(selectedIndices);
        }
        else {
            const index = selectedIndices.size ? selectedIndices.entries().next().value[1] : -1;
            this.select(index);
        }
    }
    get selected() {
        const index = this.index;
        if (!Object(_mwc_list_foundation_js__WEBPACK_IMPORTED_MODULE_6__["isIndexSet"])(index)) {
            if (index === -1) {
                return null;
            }
            return this.items[index];
        }
        const selected = [];
        for (const entry of index) {
            selected.push(this.items[entry]);
        }
        return selected;
    }
    get index() {
        if (this.mdcFoundation) {
            return this.mdcFoundation.getSelectedIndex();
        }
        return -1;
    }
    render() {
        const role = this.innerRole === null ? undefined : this.innerRole;
        const ariaLabel = this.innerAriaLabel === null ? undefined : this.innerAriaLabel;
        const tabindex = this.rootTabbable ? '0' : '-1';
        return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"] `
      <!-- @ts-ignore -->
      <ul
          tabindex=${tabindex}
          role="${Object(lit_html_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_5__["ifDefined"])(role)}"
          aria-label="${Object(lit_html_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_5__["ifDefined"])(ariaLabel)}"
          class="mdc-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}
          @list-item-rendered=${this.onListItemConnected}>
        <slot></slot>
      </ul>
    `;
    }
    firstUpdated() {
        super.firstUpdated();
        if (!this.items.length) {
            // required because this is called before observers
            this.mdcFoundation.setMulti(this.multi);
            // for when children upgrade before list
            this.layout();
        }
    }
    onFocusIn(evt) {
        if (this.mdcFoundation && this.mdcRoot) {
            const index = this.getIndexOfTarget(evt);
            this.mdcFoundation.handleFocusIn(evt, index);
        }
    }
    onFocusOut(evt) {
        if (this.mdcFoundation && this.mdcRoot) {
            const index = this.getIndexOfTarget(evt);
            this.mdcFoundation.handleFocusOut(evt, index);
        }
    }
    onKeydown(evt) {
        if (this.mdcFoundation && this.mdcRoot) {
            const index = this.getIndexOfTarget(evt);
            const target = evt.target;
            const isRootListItem = isListItem(target);
            this.mdcFoundation.handleKeydown(evt, isRootListItem, index);
        }
    }
    onRequestSelected(evt) {
        if (this.mdcFoundation) {
            const index = this.getIndexOfTarget(evt);
            if (index === -1) {
                return;
            }
            const element = this.items[index];
            if (element.disabled) {
                return;
            }
            const selected = evt.detail.selected;
            const source = evt.detail.source;
            this.mdcFoundation.handleSingleSelection(index, source === 'interaction', selected);
            evt.stopPropagation();
        }
    }
    getIndexOfTarget(evt) {
        const elements = this.items;
        const path = evt.composedPath();
        for (const pathItem of path) {
            let index = -1;
            if (Object(_material_mwc_base_utils_js__WEBPACK_IMPORTED_MODULE_3__["isNodeElement"])(pathItem) && isListItem(pathItem)) {
                index = elements.indexOf(pathItem);
            }
            if (index !== -1) {
                return index;
            }
        }
        return -1;
    }
    createAdapter() {
        this.mdcAdapter = {
            getListItemCount: () => {
                if (this.mdcRoot) {
                    return this.items.length;
                }
                return 0;
            },
            getFocusedElementIndex: () => {
                if (!this.mdcRoot) {
                    return -1;
                }
                if (!this.items.length) {
                    return -1;
                }
                const activeElementPath = Object(_material_mwc_base_utils_js__WEBPACK_IMPORTED_MODULE_3__["deepActiveElementPath"])();
                if (!activeElementPath.length) {
                    return -1;
                }
                for (let i = activeElementPath.length - 1; i >= 0; i--) {
                    const activeItem = activeElementPath[i];
                    if (isListItem(activeItem)) {
                        return this.items.indexOf(activeItem);
                    }
                }
                return -1;
            },
            getAttributeForElementIndex: (index, attr) => {
                const listElement = this.mdcRoot;
                if (!listElement) {
                    return '';
                }
                const element = this.items[index];
                return element ? element.getAttribute(attr) : '';
            },
            setAttributeForElementIndex: (index, attr, val) => {
                if (!this.mdcRoot) {
                    return;
                }
                const element = this.items[index];
                if (element) {
                    element.setAttribute(attr, val);
                }
            },
            focusItemAtIndex: (index) => {
                const element = this.items[index];
                if (element) {
                    element.focus();
                }
            },
            setTabIndexForElementIndex: (index, value) => {
                const item = this.items[index];
                if (item) {
                    item.tabindex = value;
                }
            },
            notifyAction: (index) => {
                const init = { bubbles: true, composed: true };
                init.detail = { index };
                const ev = new CustomEvent('action', init);
                this.dispatchEvent(ev);
            },
            notifySelected: (index, diff) => {
                const init = { bubbles: true, composed: true };
                init.detail = { index, diff };
                const ev = new CustomEvent('selected', init);
                this.dispatchEvent(ev);
            },
            isFocusInsideList: () => {
                return Object(_material_mwc_base_utils_js__WEBPACK_IMPORTED_MODULE_3__["doesElementContainFocus"])(this);
            },
            isRootFocused: () => {
                const mdcRoot = this.mdcRoot;
                const root = mdcRoot.getRootNode();
                return root.activeElement === mdcRoot;
            },
            setDisabledStateForElementIndex: (index, value) => {
                const item = this.items[index];
                if (!item) {
                    return;
                }
                item.disabled = value;
            },
            getDisabledStateForElementIndex: (index) => {
                const item = this.items[index];
                if (!item) {
                    return false;
                }
                return item.disabled;
            },
            setSelectedStateForElementIndex: (index, value) => {
                const item = this.items[index];
                if (!item) {
                    return;
                }
                item.selected = value;
            },
            getSelectedStateForElementIndex: (index) => {
                const item = this.items[index];
                if (!item) {
                    return false;
                }
                return item.selected;
            },
            setActivatedStateForElementIndex: (index, value) => {
                const item = this.items[index];
                if (!item) {
                    return;
                }
                item.activated = value;
            },
        };
        return this.mdcAdapter;
    }
    selectUi(index, activate = false) {
        const item = this.items[index];
        if (item) {
            item.selected = true;
            item.activated = activate;
        }
    }
    deselectUi(index) {
        const item = this.items[index];
        if (item) {
            item.selected = false;
            item.activated = false;
        }
    }
    select(index) {
        if (!this.mdcFoundation) {
            return;
        }
        this.mdcFoundation.setSelectedIndex(index);
    }
    toggle(index, force) {
        if (this.multi) {
            this.mdcFoundation.toggleMultiAtIndex(index, force);
        }
    }
    onListItemConnected(e) {
        const target = e.target;
        this.layout(this.items.indexOf(target) === -1);
    }
    layout(updateItems = true) {
        if (updateItems) {
            this.updateItems();
        }
        const first = this.items[0];
        for (const item of this.items) {
            item.tabindex = -1;
        }
        if (first) {
            if (this.noninteractive) {
                if (!this.previousTabindex) {
                    this.previousTabindex = first;
                }
            }
            else {
                first.tabindex = 0;
            }
        }
    }
    focus() {
        const root = this.mdcRoot;
        if (root) {
            root.focus();
        }
    }
    blur() {
        const root = this.mdcRoot;
        if (root) {
            root.blur();
        }
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["query"])('.mdc-list')
], ListBase.prototype, "mdcRoot", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["query"])('slot')
], ListBase.prototype, "slotElement", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({ type: Boolean }),
    Object(_material_mwc_base_observer_js__WEBPACK_IMPORTED_MODULE_2__["observer"])(function (value) {
        if (this.mdcFoundation) {
            this.mdcFoundation.setUseActivatedClass(value);
        }
    })
], ListBase.prototype, "activatable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({ type: Boolean }),
    Object(_material_mwc_base_observer_js__WEBPACK_IMPORTED_MODULE_2__["observer"])(function (newValue, oldValue) {
        if (this.mdcFoundation) {
            this.mdcFoundation.setMulti(newValue);
        }
        if (oldValue !== undefined) {
            this.layout();
        }
    })
], ListBase.prototype, "multi", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({ type: Boolean }),
    Object(_material_mwc_base_observer_js__WEBPACK_IMPORTED_MODULE_2__["observer"])(function (value) {
        if (this.mdcFoundation) {
            this.mdcFoundation.setWrapFocus(value);
        }
    })
], ListBase.prototype, "wrapFocus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({ type: String }),
    Object(_material_mwc_base_observer_js__WEBPACK_IMPORTED_MODULE_2__["observer"])(function (_newValue, oldValue) {
        if (oldValue !== undefined) {
            this.updateItems();
        }
    })
], ListBase.prototype, "itemRoles", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({ type: String })
], ListBase.prototype, "innerRole", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({ type: String })
], ListBase.prototype, "innerAriaLabel", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({ type: Boolean })
], ListBase.prototype, "rootTabbable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({ type: Boolean, reflect: true }),
    Object(_material_mwc_base_observer_js__WEBPACK_IMPORTED_MODULE_2__["observer"])(function (value) {
        const slot = this.slotElement;
        if (value && slot) {
            const tabbable = Object(_material_mwc_base_utils_js__WEBPACK_IMPORTED_MODULE_3__["findAssignedElement"])(slot, '[tabindex="0"]');
            this.previousTabindex = tabbable;
            if (tabbable) {
                tabbable.setAttribute('tabindex', '-1');
            }
        }
        else if (!value && this.previousTabindex) {
            this.previousTabindex.setAttribute('tabindex', '0');
            this.previousTabindex = null;
        }
    })
], ListBase.prototype, "noninteractive", void 0);
//# sourceMappingURL=mwc-list-base.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-list/mwc-list-css.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/mwc-list/mwc-list-css.js ***!
  \*********************************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const style = lit_element__WEBPACK_IMPORTED_MODULE_0__["css"] `@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-list:focus{outline:none}.mdc-list-item{height:48px}.mdc-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0,0,0,.12)}.mdc-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc(100% - var(--mdc-list-inset-margin, 72px))}.mdc-list-group[dir=rtl] .mdc-list ::slotted([divider][inset]),[dir=rtl] .mdc-list-group .mdc-list ::slotted([divider][inset]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-list ::slotted([divider][inset][padded]){width:calc(100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px))}.mdc-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-list--two-line.mdc-list--dense ::slotted([mwc-list-item]),.mdc-list--avatar-list.mdc-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-list--avatar-list.mdc-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-list--dense ::slotted(.mdc-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list--dense ::slotted(.mdc-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-list--dense ::slotted(.mdc-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`;
//# sourceMappingURL=mwc-list-css.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-list/mwc-list-foundation.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material/mwc-list/mwc-list-foundation.js ***!
  \****************************************************************/
/*! exports provided: isIndexSet, isEventMulti, createSetFromIndex, MDCListFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIndexSet", function() { return isIndexSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEventMulti", function() { return isEventMulti; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSetFromIndex", function() { return createSetFromIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCListFoundation", function() { return MDCListFoundation; });
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/mwc-list/node_modules/@material/base/foundation.js");
/* harmony import */ var _material_list_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/list/constants */ "./node_modules/@material/mwc-list/node_modules/@material/list/constants.js");
/**
 @license
 Copyright 2020 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */


const findIndexDiff = (oldSet, newSet) => {
    const oldArr = Array.from(oldSet);
    const newArr = Array.from(newSet);
    const diff = { added: [], removed: [] };
    const oldSorted = oldArr.sort();
    const newSorted = newArr.sort();
    let i = 0;
    let j = 0;
    while (i < oldSorted.length || j < newSorted.length) {
        const oldVal = oldSorted[i];
        const newVal = newSorted[j];
        if (oldVal === newVal) {
            i++;
            j++;
            continue;
        }
        if (oldVal !== undefined && (newVal === undefined || oldVal < newVal)) {
            diff.removed.push(oldVal);
            i++;
            continue;
        }
        if (newVal !== undefined && (oldVal === undefined || newVal < oldVal)) {
            diff.added.push(newVal);
            j++;
            continue;
        }
    }
    return diff;
};
const ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];
function isIndexSet(selectedIndex) {
    return selectedIndex instanceof Set;
}
function isEventMulti(evt) {
    return isIndexSet(evt.detail.index);
}
const createSetFromIndex = (index) => {
    const entry = index === _material_list_constants__WEBPACK_IMPORTED_MODULE_1__["numbers"].UNSET_INDEX ? new Set() : index;
    return isIndexSet(entry) ? new Set(entry) : new Set([entry]);
};
class MDCListFoundation extends _material_base_foundation__WEBPACK_IMPORTED_MODULE_0__["MDCFoundation"] {
    constructor(adapter) {
        super(Object.assign(Object.assign({}, MDCListFoundation.defaultAdapter), adapter));
        this.isMulti_ = false;
        this.wrapFocus_ = false;
        this.isVertical_ = true;
        this.selectedIndex_ = _material_list_constants__WEBPACK_IMPORTED_MODULE_1__["numbers"].UNSET_INDEX;
        this.focusedItemIndex_ = _material_list_constants__WEBPACK_IMPORTED_MODULE_1__["numbers"].UNSET_INDEX;
        this.useActivatedClass_ = false;
        this.ariaCurrentAttrValue_ = null;
    }
    static get strings() {
        return _material_list_constants__WEBPACK_IMPORTED_MODULE_1__["strings"];
    }
    static get numbers() {
        return _material_list_constants__WEBPACK_IMPORTED_MODULE_1__["numbers"];
    }
    static get defaultAdapter() {
        return {
            focusItemAtIndex: () => undefined,
            getFocusedElementIndex: () => 0,
            getListItemCount: () => 0,
            isFocusInsideList: () => false,
            isRootFocused: () => false,
            notifyAction: () => undefined,
            notifySelected: () => undefined,
            getSelectedStateForElementIndex: () => false,
            setDisabledStateForElementIndex: () => undefined,
            getDisabledStateForElementIndex: () => false,
            setSelectedStateForElementIndex: () => undefined,
            setActivatedStateForElementIndex: () => undefined,
            setTabIndexForElementIndex: () => undefined,
            setAttributeForElementIndex: () => undefined,
            getAttributeForElementIndex: () => null,
        };
    }
    /**
     * Sets the private wrapFocus_ variable.
     */
    setWrapFocus(value) {
        this.wrapFocus_ = value;
    }
    /**
     * Sets the private wrapFocus_ variable.
     */
    setMulti(value) {
        this.isMulti_ = value;
        const currentIndex = this.selectedIndex_;
        if (value) {
            // number to set
            if (!isIndexSet(currentIndex)) {
                const isUnset = currentIndex === _material_list_constants__WEBPACK_IMPORTED_MODULE_1__["numbers"].UNSET_INDEX;
                this.selectedIndex_ = isUnset ? new Set() : new Set([currentIndex]);
            }
        }
        else {
            // set to first sorted number in set
            if (isIndexSet(currentIndex)) {
                if (currentIndex.size) {
                    const vals = Array.from(currentIndex).sort();
                    this.selectedIndex_ = vals[0];
                }
                else {
                    this.selectedIndex_ = _material_list_constants__WEBPACK_IMPORTED_MODULE_1__["numbers"].UNSET_INDEX;
                }
            }
        }
    }
    /**
     * Sets the isVertical_ private variable.
     */
    setVerticalOrientation(value) {
        this.isVertical_ = value;
    }
    /**
     * Sets the useActivatedClass_ private variable.
     */
    setUseActivatedClass(useActivated) {
        this.useActivatedClass_ = useActivated;
    }
    getSelectedIndex() {
        return this.selectedIndex_;
    }
    setSelectedIndex(index) {
        if (!this.isIndexValid_(index)) {
            return;
        }
        if (this.isMulti_) {
            this.setMultiSelectionAtIndex_(createSetFromIndex(index));
        }
        else {
            this.setSingleSelectionAtIndex_(index);
        }
    }
    /**
     * Focus in handler for the list items.
     */
    handleFocusIn(_, listItemIndex) {
        if (listItemIndex >= 0) {
            this.adapter_.setTabIndexForElementIndex(listItemIndex, 0);
        }
    }
    /**
     * Focus out handler for the list items.
     */
    handleFocusOut(_, listItemIndex) {
        if (listItemIndex >= 0) {
            this.adapter_.setTabIndexForElementIndex(listItemIndex, -1);
        }
        /**
         * Between Focusout & Focusin some browsers do not have focus on any
         * element. Setting a delay to wait till the focus is moved to next element.
         */
        setTimeout(() => {
            if (!this.adapter_.isFocusInsideList()) {
                this.setTabindexToFirstSelectedItem_();
            }
        }, 0);
    }
    /**
     * Key handler for the list.
     */
    handleKeydown(evt, isRootListItem, listItemIndex) {
        const isArrowLeft = evt.key === 'ArrowLeft' || evt.keyCode === 37;
        const isArrowUp = evt.key === 'ArrowUp' || evt.keyCode === 38;
        const isArrowRight = evt.key === 'ArrowRight' || evt.keyCode === 39;
        const isArrowDown = evt.key === 'ArrowDown' || evt.keyCode === 40;
        const isHome = evt.key === 'Home' || evt.keyCode === 36;
        const isEnd = evt.key === 'End' || evt.keyCode === 35;
        const isEnter = evt.key === 'Enter' || evt.keyCode === 13;
        const isSpace = evt.key === 'Space' || evt.keyCode === 32;
        if (this.adapter_.isRootFocused()) {
            if (isArrowUp || isEnd) {
                evt.preventDefault();
                this.focusLastElement();
            }
            else if (isArrowDown || isHome) {
                evt.preventDefault();
                this.focusFirstElement();
            }
            return;
        }
        let currentIndex = this.adapter_.getFocusedElementIndex();
        if (currentIndex === -1) {
            currentIndex = listItemIndex;
            if (currentIndex < 0) {
                // If this event doesn't have a mdc-list-item ancestor from the
                // current list (not from a sublist), return early.
                return;
            }
        }
        let nextIndex;
        if ((this.isVertical_ && isArrowDown) ||
            (!this.isVertical_ && isArrowRight)) {
            this.preventDefaultEvent_(evt);
            nextIndex = this.focusNextElement(currentIndex);
        }
        else if ((this.isVertical_ && isArrowUp) || (!this.isVertical_ && isArrowLeft)) {
            this.preventDefaultEvent_(evt);
            nextIndex = this.focusPrevElement(currentIndex);
        }
        else if (isHome) {
            this.preventDefaultEvent_(evt);
            nextIndex = this.focusFirstElement();
        }
        else if (isEnd) {
            this.preventDefaultEvent_(evt);
            nextIndex = this.focusLastElement();
        }
        else if (isEnter || isSpace) {
            if (isRootListItem) {
                // Return early if enter key is pressed on anchor element which triggers
                // synthetic MouseEvent event.
                const target = evt.target;
                if (target && target.tagName === 'A' && isEnter) {
                    return;
                }
                this.preventDefaultEvent_(evt);
                this.setSelectedIndexOnAction_(currentIndex, true);
            }
        }
        this.focusedItemIndex_ = currentIndex;
        if (nextIndex !== undefined) {
            this.setTabindexAtIndex_(nextIndex);
            this.focusedItemIndex_ = nextIndex;
        }
    }
    /**
     * Click handler for the list.
     */
    handleSingleSelection(index, isInteraction, force) {
        if (index === _material_list_constants__WEBPACK_IMPORTED_MODULE_1__["numbers"].UNSET_INDEX) {
            return;
        }
        this.setSelectedIndexOnAction_(index, isInteraction, force);
        this.setTabindexAtIndex_(index);
        this.focusedItemIndex_ = index;
    }
    /**
     * Focuses the next element on the list.
     */
    focusNextElement(index) {
        const count = this.adapter_.getListItemCount();
        let nextIndex = index + 1;
        if (nextIndex >= count) {
            if (this.wrapFocus_) {
                nextIndex = 0;
            }
            else {
                // Return early because last item is already focused.
                return index;
            }
        }
        this.adapter_.focusItemAtIndex(nextIndex);
        return nextIndex;
    }
    /**
     * Focuses the previous element on the list.
     */
    focusPrevElement(index) {
        let prevIndex = index - 1;
        if (prevIndex < 0) {
            if (this.wrapFocus_) {
                prevIndex = this.adapter_.getListItemCount() - 1;
            }
            else {
                // Return early because first item is already focused.
                return index;
            }
        }
        this.adapter_.focusItemAtIndex(prevIndex);
        return prevIndex;
    }
    focusFirstElement() {
        this.adapter_.focusItemAtIndex(0);
        return 0;
    }
    focusLastElement() {
        const lastIndex = this.adapter_.getListItemCount() - 1;
        this.adapter_.focusItemAtIndex(lastIndex);
        return lastIndex;
    }
    /**
     * @param itemIndex Index of the list item
     * @param isEnabled Sets the list item to enabled or disabled.
     */
    setEnabled(itemIndex, isEnabled) {
        if (!this.isIndexValid_(itemIndex)) {
            return;
        }
        this.adapter_.setDisabledStateForElementIndex(itemIndex, !isEnabled);
    }
    /**
     * Ensures that preventDefault is only called if the containing element
     * doesn't consume the event, and it will cause an unintended scroll.
     */
    preventDefaultEvent_(evt) {
        const target = evt.target;
        const tagName = `${target.tagName}`.toLowerCase();
        if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
            evt.preventDefault();
        }
    }
    setSingleSelectionAtIndex_(index, isInteraction = true) {
        if (this.selectedIndex_ === index) {
            return;
        }
        // unset previous
        if (this.selectedIndex_ !== _material_list_constants__WEBPACK_IMPORTED_MODULE_1__["numbers"].UNSET_INDEX) {
            this.adapter_.setSelectedStateForElementIndex(this.selectedIndex_, false);
            if (this.useActivatedClass_) {
                this.adapter_.setActivatedStateForElementIndex(this.selectedIndex_, false);
            }
        }
        // set new
        if (isInteraction) {
            this.adapter_.setSelectedStateForElementIndex(index, true);
        }
        if (this.useActivatedClass_) {
            this.adapter_.setActivatedStateForElementIndex(index, true);
        }
        this.setAriaForSingleSelectionAtIndex_(index);
        this.selectedIndex_ = index;
        this.adapter_.notifySelected(index);
    }
    setMultiSelectionAtIndex_(newIndex, isInteraction = true) {
        const oldIndex = createSetFromIndex(this.selectedIndex_);
        const diff = findIndexDiff(oldIndex, newIndex);
        if (!diff.removed.length && !diff.added.length) {
            return;
        }
        for (const removed of diff.removed) {
            if (isInteraction) {
                this.adapter_.setSelectedStateForElementIndex(removed, false);
            }
            if (this.useActivatedClass_) {
                this.adapter_.setActivatedStateForElementIndex(removed, false);
            }
        }
        for (const added of diff.added) {
            if (isInteraction) {
                this.adapter_.setSelectedStateForElementIndex(added, true);
            }
            if (this.useActivatedClass_) {
                this.adapter_.setActivatedStateForElementIndex(added, true);
            }
        }
        this.selectedIndex_ = newIndex;
        this.adapter_.notifySelected(newIndex, diff);
    }
    /**
     * Sets aria attribute for single selection at given index.
     */
    setAriaForSingleSelectionAtIndex_(index) {
        // Detect the presence of aria-current and get the value only during list
        // initialization when it is in unset state.
        if (this.selectedIndex_ === _material_list_constants__WEBPACK_IMPORTED_MODULE_1__["numbers"].UNSET_INDEX) {
            this.ariaCurrentAttrValue_ = this.adapter_.getAttributeForElementIndex(index, _material_list_constants__WEBPACK_IMPORTED_MODULE_1__["strings"].ARIA_CURRENT);
        }
        const isAriaCurrent = this.ariaCurrentAttrValue_ !== null;
        const ariaAttribute = isAriaCurrent ? _material_list_constants__WEBPACK_IMPORTED_MODULE_1__["strings"].ARIA_CURRENT : _material_list_constants__WEBPACK_IMPORTED_MODULE_1__["strings"].ARIA_SELECTED;
        if (this.selectedIndex_ !== _material_list_constants__WEBPACK_IMPORTED_MODULE_1__["numbers"].UNSET_INDEX) {
            this.adapter_.setAttributeForElementIndex(this.selectedIndex_, ariaAttribute, 'false');
        }
        const ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue_ : 'true';
        this.adapter_.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
    }
    setTabindexAtIndex_(index) {
        if (this.focusedItemIndex_ === _material_list_constants__WEBPACK_IMPORTED_MODULE_1__["numbers"].UNSET_INDEX && index !== 0) {
            // If no list item was selected set first list item's tabindex to -1.
            // Generally, tabindex is set to 0 on first list item of list that has no
            // preselected items.
            this.adapter_.setTabIndexForElementIndex(0, -1);
        }
        else if (this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== index) {
            this.adapter_.setTabIndexForElementIndex(this.focusedItemIndex_, -1);
        }
        this.adapter_.setTabIndexForElementIndex(index, 0);
    }
    setTabindexToFirstSelectedItem_() {
        let targetIndex = 0;
        if (typeof this.selectedIndex_ === 'number' &&
            this.selectedIndex_ !== _material_list_constants__WEBPACK_IMPORTED_MODULE_1__["numbers"].UNSET_INDEX) {
            targetIndex = this.selectedIndex_;
        }
        else if (isIndexSet(this.selectedIndex_) && this.selectedIndex_.size > 0) {
            targetIndex = Math.min(...this.selectedIndex_);
        }
        this.setTabindexAtIndex_(targetIndex);
    }
    isIndexValid_(index) {
        if (index instanceof Set) {
            if (!this.isMulti_) {
                throw new Error('MDCListFoundation: Array of index is only supported for checkbox based list');
            }
            if (index.size === 0) {
                return true;
            }
            else {
                let isOneInRange = false;
                for (const entry of index) {
                    isOneInRange = this.isIndexInRange_(entry);
                    if (isOneInRange) {
                        break;
                    }
                }
                return isOneInRange;
            }
        }
        else if (typeof index === 'number') {
            if (this.isMulti_) {
                throw new Error('MDCListFoundation: Expected array of index for checkbox based list but got number: ' +
                    index);
            }
            return index === _material_list_constants__WEBPACK_IMPORTED_MODULE_1__["numbers"].UNSET_INDEX || this.isIndexInRange_(index);
        }
        else {
            return false;
        }
    }
    isIndexInRange_(index) {
        const listSize = this.adapter_.getListItemCount();
        return index >= 0 && index < listSize;
    }
    /**
     * Sets selected index on user action, toggles checkbox / radio based on
     * toggleCheckbox value. User interaction should not toggle list item(s) when
     * disabled.
     */
    setSelectedIndexOnAction_(index, isInteraction, force) {
        if (this.adapter_.getDisabledStateForElementIndex(index)) {
            return;
        }
        let checkedIndex = index;
        if (this.isMulti_) {
            checkedIndex = new Set([index]);
        }
        if (!this.isIndexValid_(checkedIndex)) {
            return;
        }
        if (this.isMulti_) {
            this.toggleMultiAtIndex(index, force, isInteraction);
        }
        else {
            if (isInteraction || force) {
                this.setSingleSelectionAtIndex_(index, isInteraction);
            }
            else {
                const isDeselection = this.selectedIndex_ === index;
                if (isDeselection) {
                    this.setSingleSelectionAtIndex_(_material_list_constants__WEBPACK_IMPORTED_MODULE_1__["numbers"].UNSET_INDEX);
                }
            }
        }
        if (isInteraction) {
            this.adapter_.notifyAction(index);
        }
    }
    toggleMultiAtIndex(index, force, isInteraction = true) {
        let newSelectionValue = false;
        if (force === undefined) {
            newSelectionValue = !this.adapter_.getSelectedStateForElementIndex(index);
        }
        else {
            newSelectionValue = force;
        }
        const newSet = createSetFromIndex(this.selectedIndex_);
        if (newSelectionValue) {
            newSet.add(index);
        }
        else {
            newSet.delete(index);
        }
        this.setMultiSelectionAtIndex_(newSet, isInteraction);
    }
}
// tslint:disable-next-line:no-default-export Needed for backward compatibility
// with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCListFoundation);
//# sourceMappingURL=mwc-list-foundation.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-list/mwc-list-item-base.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material/mwc-list/mwc-list-item-base.js ***!
  \***************************************************************/
/*! exports provided: ListItemBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemBase", function() { return ListItemBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_mwc_base_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-base/observer */ "./node_modules/@material/mwc-base/observer.js");
/* harmony import */ var _material_mwc_ripple_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-ripple/ripple-directive */ "./node_modules/@material/mwc-ripple/ripple-directive.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/**
 @license
 Copyright 2020 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */




/**
 * @fires request-selected {RequestSelectedDetail}
 * @fires list-item-rendered
 */
class ListItemBase extends lit_element__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
    constructor() {
        super(...arguments);
        this.value = '';
        this.group = null;
        this.tabindex = -1;
        this.disabled = false;
        this.twoline = false;
        this.activated = false;
        this.graphic = null;
        this.hasMeta = false;
        this.noninteractive = false;
        this.selected = false;
        this.boundOnClick = this.onClick.bind(this);
        this._firstChanged = true;
        this._skipPropRequest = false;
    }
    get text() {
        const textContent = this.textContent;
        return textContent ? textContent.trim() : '';
    }
    render() {
        const text = this.renderText();
        const graphic = this.graphic ? this.renderGraphic() : lit_element__WEBPACK_IMPORTED_MODULE_3__["html"] ``;
        const meta = this.hasMeta ? this.renderMeta() : lit_element__WEBPACK_IMPORTED_MODULE_3__["html"] ``;
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"] `
      ${graphic}
      ${text}
      ${meta}`;
    }
    renderGraphic() {
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"] `
      <span class="mdc-list-item__graphic material-icons">
        <slot name="graphic"></slot>
      </span>`;
    }
    renderMeta() {
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"] `
      <span class="mdc-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
    }
    renderText() {
        const inner = this.twoline ? this.renderTwoline() : this.renderSingleLine();
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"] `
      <span class="mdc-list-item__text">
        ${inner}
      </span>`;
    }
    renderSingleLine() {
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"] `<slot></slot>`;
    }
    renderTwoline() {
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"] `
      <span class="mdc-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `;
    }
    onClick() {
        this.fireRequestSelected(!this.selected, 'interaction');
    }
    fireRequestSelected(selected, source) {
        if (this.noninteractive) {
            return;
        }
        const customEv = new CustomEvent('request-selected', { bubbles: true, composed: true, detail: { source, selected } });
        this.dispatchEvent(customEv);
    }
    connectedCallback() {
        super.connectedCallback();
        if (!this.noninteractive) {
            this.setAttribute('mwc-list-item', '');
        }
        this.addEventListener('click', this.boundOnClick);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('click', this.boundOnClick);
    }
    firstUpdated() {
        this.dispatchEvent(new Event('list-item-rendered', { bubbles: true, composed: true }));
        Object(_material_mwc_ripple_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["rippleNode"])({ surfaceNode: this, unbounded: false });
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["query"])('slot')
], ListItemBase.prototype, "slotElement", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])({ type: String })
], ListItemBase.prototype, "value", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])({ type: String, reflect: true })
], ListItemBase.prototype, "group", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])({ type: Number, reflect: true })
], ListItemBase.prototype, "tabindex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])({ type: Boolean, reflect: true }),
    Object(_material_mwc_base_observer__WEBPACK_IMPORTED_MODULE_1__["observer"])(function (value) {
        if (value) {
            this.setAttribute('aria-disabled', 'true');
        }
        else {
            this.setAttribute('aria-disabled', 'false');
        }
    })
], ListItemBase.prototype, "disabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])({ type: Boolean, reflect: true })
], ListItemBase.prototype, "twoline", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])({ type: Boolean, reflect: true })
], ListItemBase.prototype, "activated", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])({ type: String, reflect: true })
], ListItemBase.prototype, "graphic", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])({ type: Boolean })
], ListItemBase.prototype, "hasMeta", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])({ type: Boolean, reflect: true }),
    Object(_material_mwc_base_observer__WEBPACK_IMPORTED_MODULE_1__["observer"])(function (value) {
        if (value) {
            this.removeAttribute('aria-checked');
            this.removeAttribute('mwc-list-item');
            this.selected = false;
            this.activated = false;
            this.tabIndex = -1;
        }
        else {
            this.setAttribute('mwc-list-item', '');
        }
    })
], ListItemBase.prototype, "noninteractive", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])({ type: Boolean, reflect: true }),
    Object(_material_mwc_base_observer__WEBPACK_IMPORTED_MODULE_1__["observer"])(function (value) {
        if (value) {
            this.setAttribute('aria-selected', 'true');
        }
        else {
            this.setAttribute('aria-selected', 'false');
        }
        if (this._firstChanged) {
            this._firstChanged = false;
            return;
        }
        if (this._skipPropRequest) {
            return;
        }
        this.fireRequestSelected(value, 'property');
    })
], ListItemBase.prototype, "selected", void 0);
//# sourceMappingURL=mwc-list-item-base.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-list/mwc-list-item-css.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material/mwc-list/mwc-list-item-css.js ***!
  \**************************************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const style = lit_element__WEBPACK_IMPORTED_MODULE_0__["css"] `:host{cursor:pointer;user-select:none;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;padding:0 16px;overflow:hidden;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .mdc-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0,0,0,.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-list-item__meta ::slotted(*){line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-list-item__meta ::slotted(.material-icons),.mdc-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}:host[dir=rtl] .mdc-list-item__meta,[dir=rtl] :host .mdc-list-item__meta{margin-left:0;margin-right:auto}.mdc-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-list-item__text ::slotted([for]),.mdc-list-item__text[for]{pointer-events:none}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list--dense .mdc-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-list-item__text{align-self:flex-start}:host(:not([disabled])){--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}:host(:not([disabled]))::before,:host(:not([disabled]))::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:"";top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}:host(:not([disabled]))::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}:host(:not([disabled]))::before,:host(:not([disabled]))::after{background-color:#000}:host(.mdc-ripple-upgraded:not([disabled]))::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}:host(.mdc-ripple-upgraded:not([disabled]))::after{top:0;left:0;transform:scale(0);transform-origin:center center;width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}:host(.mdc-ripple-upgraded--unbounded:not([disabled]))::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}:host(.mdc-ripple-upgraded--foreground-activation:not([disabled]))::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}:host(.mdc-ripple-upgraded--foreground-deactivation:not([disabled]))::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-list-item__text ::slotted(*),:host([disabled]) .mdc-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}:host(:not([disabled]):hover)::before{opacity:.04}:host(:not([disabled]).mdc-ripple-upgraded--background-focused)::before,:host(:not([disabled]):not(.mdc-ripple-upgraded):focus)::before{transition-duration:75ms;opacity:.12}:host(:not([disabled]):not(.mdc-ripple-upgraded))::after{transition:opacity 150ms linear}:host(:not([disabled]):not(.mdc-ripple-upgraded):active)::after{transition-duration:75ms;opacity:.12}:host(:not([disabled]).mdc-ripple-upgraded){--mdc-ripple-fg-opacity: 0.12}:host([activated]:not([disabled]).mdc-ripple-upgraded--background-focused)::before,:host([activated]:not([disabled]):not(.mdc-ripple-upgraded):focus)::before{transition-duration:75ms;opacity:.2}:host([activated]:not([disabled]):not(.mdc-ripple-upgraded):active)::after{opacity:.2}:host([activated]:not([disabled]).mdc-ripple-upgraded){--mdc-ripple-fg-opacity: 0.2}:host([activated]:not([disabled]))::before{opacity:.12}:host([activated]:not([disabled]))::before,:host([activated]:not([disabled]))::after{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}:host([activated]:not([disabled]):hover)::before{opacity:.16}:host([activated]:not([disabled]).mdc-ripple-upgraded--background-focused)::before,:host([activated]:not([disabled]):not(.mdc-ripple-upgraded):focus)::before{transition-duration:75ms;opacity:.24}:host([activated]:not([disabled]):not(.mdc-ripple-upgraded):active)::after{opacity:.24}:host([activated]:not([disabled]).mdc-ripple-upgraded){--mdc-ripple-fg-opacity: 0.24}.mdc-list-item__secondary-text ::slotted(*){color:rgba(0,0,0,.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0,0,0,.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-list-group__subheader ::slotted(*){color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(*){line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}:host[dir=rtl] :host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic,[dir=rtl] :host :host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-list-item__graphic ::slotted(*){line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}:host[dir=rtl] :host([graphic=icon]) .mdc-list-item__graphic,[dir=rtl] :host :host([graphic=icon]) .mdc-list-item__graphic{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-list-item__graphic,:host([graphic=large]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-list-item__graphic ::slotted(*){line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
//# sourceMappingURL=mwc-list-item-css.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-list/mwc-list-item.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material/mwc-list/mwc-list-item.js ***!
  \**********************************************************/
/*! exports provided: ListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _mwc_list_item_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mwc-list-item-base.js */ "./node_modules/@material/mwc-list/mwc-list-item-base.js");
/* harmony import */ var _mwc_list_item_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mwc-list-item-css.js */ "./node_modules/@material/mwc-list/mwc-list-item-css.js");
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




let ListItem = class ListItem extends _mwc_list_item_base_js__WEBPACK_IMPORTED_MODULE_2__["ListItemBase"] {
};
ListItem.styles = _mwc_list_item_css_js__WEBPACK_IMPORTED_MODULE_3__["style"];
ListItem = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])('mwc-list-item')
], ListItem);

//# sourceMappingURL=mwc-list-item.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-list/mwc-list.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/mwc-list/mwc-list.js ***!
  \*****************************************************/
/*! exports provided: createSetFromIndex, isEventMulti, isIndexSet, List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _mwc_list_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mwc-list-base.js */ "./node_modules/@material/mwc-list/mwc-list-base.js");
/* harmony import */ var _mwc_list_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mwc-list-css.js */ "./node_modules/@material/mwc-list/mwc-list-css.js");
/* harmony import */ var _mwc_list_foundation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mwc-list-foundation.js */ "./node_modules/@material/mwc-list/mwc-list-foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSetFromIndex", function() { return _mwc_list_foundation_js__WEBPACK_IMPORTED_MODULE_4__["createSetFromIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEventMulti", function() { return _mwc_list_foundation_js__WEBPACK_IMPORTED_MODULE_4__["isEventMulti"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIndexSet", function() { return _mwc_list_foundation_js__WEBPACK_IMPORTED_MODULE_4__["isIndexSet"]; });

/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/





let List = class List extends _mwc_list_base_js__WEBPACK_IMPORTED_MODULE_2__["ListBase"] {
};
List.styles = _mwc_list_css_js__WEBPACK_IMPORTED_MODULE_3__["style"];
List = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])('mwc-list')
], List);

//# sourceMappingURL=mwc-list.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-list/node_modules/@material/base/foundation.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@material/mwc-list/node_modules/@material/base/foundation.js ***!
  \***********************************************************************************/
/*! exports provided: MDCFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFoundation", function() { return MDCFoundation; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = /** @class */ (function () {
    function MDCFoundation(adapter) {
        if (adapter === void 0) { adapter = {}; }
        this.adapter_ = adapter;
    }
    Object.defineProperty(MDCFoundation, "cssClasses", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "strings", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "numbers", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "defaultAdapter", {
        get: function () {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
        },
        enumerable: true,
        configurable: true
    });
    MDCFoundation.prototype.init = function () {
        // Subclasses should override this method to perform initialization routines (registering events, etc.)
    };
    MDCFoundation.prototype.destroy = function () {
        // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };
    return MDCFoundation;
}());

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-list/node_modules/@material/list/constants.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@material/mwc-list/node_modules/@material/list/constants.js ***!
  \**********************************************************************************/
/*! exports provided: strings, cssClasses, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated',
    LIST_ITEM_CLASS: 'mdc-list-item',
    LIST_ITEM_DISABLED_CLASS: 'mdc-list-item--disabled',
    LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
    ROOT: 'mdc-list',
};
var strings = {
    ACTION_EVENT: 'MDCList:action',
    ARIA_CHECKED: 'aria-checked',
    ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
    ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
    ARIA_CURRENT: 'aria-current',
    ARIA_DISABLED: 'aria-disabled',
    ARIA_ORIENTATION: 'aria-orientation',
    ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
    ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
    ARIA_SELECTED: 'aria-selected',
    CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a\n  ",
    FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a,\n    ." + cssClasses.LIST_ITEM_CLASS + " input[type=\"radio\"]:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " input[type=\"checkbox\"]:not(:disabled)\n  ",
    RADIO_SELECTOR: 'input[type="radio"]',
};
var numbers = {
    UNSET_INDEX: -1,
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-menu/mwc-menu-base.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material/mwc-menu/mwc-menu-base.js ***!
  \**********************************************************/
/*! exports provided: createSetFromIndex, isEventMulti, isIndexSet, MenuBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuBase", function() { return MenuBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_mwc_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-list */ "./node_modules/@material/mwc-list/mwc-list.js");
/* harmony import */ var _mwc_menu_surface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mwc-menu-surface */ "./node_modules/@material/mwc-menu/mwc-menu-surface.js");
/* harmony import */ var _material_menu_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/menu/constants.js */ "./node_modules/@material/mwc-menu/node_modules/@material/menu/constants.js");
/* harmony import */ var _material_menu_foundation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/menu/foundation.js */ "./node_modules/@material/mwc-menu/node_modules/@material/menu/foundation.js");
/* harmony import */ var _material_mwc_base_base_element_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/mwc-base/base-element.js */ "./node_modules/@material/mwc-base/base-element.js");
/* harmony import */ var _material_mwc_base_observer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/mwc-base/observer.js */ "./node_modules/@material/mwc-base/observer.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_list_mwc_list_foundation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material/mwc-list/mwc-list-foundation */ "./node_modules/@material/mwc-list/mwc-list-foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSetFromIndex", function() { return _material_mwc_list_mwc_list_foundation__WEBPACK_IMPORTED_MODULE_8__["createSetFromIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEventMulti", function() { return _material_mwc_list_mwc_list_foundation__WEBPACK_IMPORTED_MODULE_8__["isEventMulti"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIndexSet", function() { return _material_mwc_list_mwc_list_foundation__WEBPACK_IMPORTED_MODULE_8__["isIndexSet"]; });


/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/








/**
 * @fires selected {SelectedDetail}
 * @fires action {ActionDetail}
 * @fires opened
 * @fires closed
 */
class MenuBase extends _material_mwc_base_base_element_js__WEBPACK_IMPORTED_MODULE_5__["BaseElement"] {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = _material_menu_foundation_js__WEBPACK_IMPORTED_MODULE_4__["default"];
        this.listElement_ = null;
        this.anchor = null;
        this.open = false;
        this.quick = false;
        this.wrapFocus = false;
        this.innerRole = 'menu';
        this.corner = 'TOP_START';
        this.x = null;
        this.y = null;
        this.absolute = false;
        this.multi = false;
        this.activatable = false;
        this.fixed = false;
        this.forceGroupSelection = false;
        this.fullwidth = false;
        this.defaultFocus = 'LIST_ROOT';
        this._listUpdateComplete = null;
    }
    get listElement() {
        if (!this.listElement_) {
            this.listElement_ = this.renderRoot.querySelector('mwc-list');
            return this.listElement_;
        }
        return this.listElement_;
    }
    get items() {
        const listElement = this.listElement;
        if (listElement) {
            return listElement.items;
        }
        return [];
    }
    get index() {
        const listElement = this.listElement;
        if (listElement) {
            return listElement.index;
        }
        return -1;
    }
    get selected() {
        const listElement = this.listElement;
        if (listElement) {
            return listElement.selected;
        }
        return null;
    }
    render() {
        const itemRoles = this.innerRole === 'menu' ? 'menuitem' : 'option';
        return lit_element__WEBPACK_IMPORTED_MODULE_7__["html"] `
      <mwc-menu-surface
          ?hidden=${!this.open}
          .anchor=${this.anchor}
          .open=${this.open}
          .quick=${this.quick}
          .corner=${this.corner}
          .x=${this.x}
          .y=${this.y}
          .absolute=${this.absolute}
          .fixed=${this.fixed}
          .fullwidth=${this.fullwidth}
          class="mdc-menu mdc-menu-surface"
          @closed=${this.onClosed}
          @opened=${this.onOpened}
          @keydown=${this.onKeydown}>
        <mwc-list
          rootTabbable
          .innerRole=${this.innerRole}
          .multi=${this.multi}
          class="mdc-list"
          .itemRoles=${itemRoles}
          .wrapFocus=${this.wrapFocus}
          .activatable=${this.activatable}
          @action=${this.onAction}>
        <slot></slot>
      </mwc-list>
    </mwc-menu-surface>`;
    }
    createAdapter() {
        return {
            addClassToElementAtIndex: (index, className) => {
                const listElement = this.listElement;
                if (!listElement) {
                    return;
                }
                const element = listElement.items[index];
                if (!element) {
                    return;
                }
                if (className === 'mdc-menu-item--selected') {
                    if (this.forceGroupSelection && !element.selected) {
                        listElement.toggle(index, true);
                    }
                }
                else {
                    element.classList.add(className);
                }
            },
            removeClassFromElementAtIndex: (index, className) => {
                const listElement = this.listElement;
                if (!listElement) {
                    return;
                }
                const element = listElement.items[index];
                if (!element) {
                    return;
                }
                if (className === 'mdc-menu-item--selected') {
                    if (element.selected) {
                        listElement.toggle(index, false);
                    }
                }
                else {
                    element.classList.remove(className);
                }
            },
            addAttributeToElementAtIndex: (index, attr, value) => {
                const listElement = this.listElement;
                if (!listElement) {
                    return;
                }
                const element = listElement.items[index];
                if (!element) {
                    return;
                }
                element.setAttribute(attr, value);
            },
            removeAttributeFromElementAtIndex: (index, attr) => {
                const listElement = this.listElement;
                if (!listElement) {
                    return;
                }
                const element = listElement.items[index];
                if (!element) {
                    return;
                }
                element.removeAttribute(attr);
            },
            elementContainsClass: (element, className) => element.classList.contains(className),
            closeSurface: () => {
                this.open = false;
            },
            getElementIndex: (element) => {
                const listElement = this.listElement;
                if (listElement) {
                    return listElement.items.indexOf(element);
                }
                return -1;
            },
            notifySelected: () => { },
            getMenuItemCount: () => {
                const listElement = this.listElement;
                if (!listElement) {
                    return 0;
                }
                return listElement.items.length;
            },
            focusItemAtIndex: (index) => {
                const listElement = this.listElement;
                if (!listElement) {
                    return;
                }
                const element = listElement.items[index];
                if (element) {
                    element.focus();
                }
            },
            focusListRoot: () => {
                if (this.listElement) {
                    this.listElement.focus();
                }
            },
            getSelectedSiblingOfItemAtIndex: (index) => {
                const listElement = this.listElement;
                if (!listElement) {
                    return -1;
                }
                const elementAtIndex = listElement.items[index];
                if (!elementAtIndex || !elementAtIndex.group) {
                    return -1;
                }
                for (let i = 0; i < listElement.items.length; i++) {
                    if (i === index) {
                        continue;
                    }
                    const current = listElement.items[i];
                    if (current.selected && current.group === elementAtIndex.group) {
                        return i;
                    }
                }
                return -1;
            },
            isSelectableItemAtIndex: (index) => {
                const listElement = this.listElement;
                if (!listElement) {
                    return false;
                }
                const elementAtIndex = listElement.items[index];
                if (!elementAtIndex) {
                    return false;
                }
                return elementAtIndex.hasAttribute('group');
            },
        };
    }
    onKeydown(evt) {
        if (this.mdcFoundation) {
            this.mdcFoundation.handleKeydown(evt);
        }
    }
    onAction(evt) {
        const listElement = this.listElement;
        if (this.mdcFoundation && listElement) {
            const index = evt.detail.index;
            const el = listElement.items[index];
            if (el) {
                this.mdcFoundation.handleItemAction(el);
            }
        }
    }
    onOpened() {
        this.open = true;
        if (this.mdcFoundation) {
            this.mdcFoundation.handleMenuSurfaceOpened();
        }
    }
    onClosed() {
        this.open = false;
    }
    async _getUpdateComplete() {
        await this._listUpdateComplete;
        await super._getUpdateComplete();
    }
    async firstUpdated() {
        super.firstUpdated();
        const listElement = this.listElement;
        if (listElement) {
            this._listUpdateComplete = listElement.updateComplete;
            await this._listUpdateComplete;
        }
    }
    select(index) {
        const listElement = this.listElement;
        if (listElement) {
            listElement.select(index);
        }
    }
    close() {
        this.open = false;
    }
    show() {
        this.open = true;
    }
    layout(updateItems = true) {
        const listElement = this.listElement;
        if (listElement) {
            listElement.layout(updateItems);
        }
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["query"])('.mdc-menu')
], MenuBase.prototype, "mdcRoot", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["query"])('slot')
], MenuBase.prototype, "slotElement", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({ type: Object })
], MenuBase.prototype, "anchor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({ type: Boolean, reflect: true })
], MenuBase.prototype, "open", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({ type: Boolean })
], MenuBase.prototype, "quick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({ type: Boolean })
], MenuBase.prototype, "wrapFocus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({ type: String })
], MenuBase.prototype, "innerRole", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({ type: String })
], MenuBase.prototype, "corner", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({ type: Number })
], MenuBase.prototype, "x", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({ type: Number })
], MenuBase.prototype, "y", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({ type: Boolean })
], MenuBase.prototype, "absolute", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({ type: Boolean })
], MenuBase.prototype, "multi", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({ type: Boolean })
], MenuBase.prototype, "activatable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({ type: Boolean })
], MenuBase.prototype, "fixed", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({ type: Boolean })
], MenuBase.prototype, "forceGroupSelection", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({ type: Boolean })
], MenuBase.prototype, "fullwidth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({ type: String }),
    Object(_material_mwc_base_observer_js__WEBPACK_IMPORTED_MODULE_6__["observer"])(function (value) {
        if (this.mdcFoundation) {
            this.mdcFoundation.setDefaultFocusState(_material_menu_constants_js__WEBPACK_IMPORTED_MODULE_3__["DefaultFocusState"][value]);
        }
    })
], MenuBase.prototype, "defaultFocus", void 0);
//# sourceMappingURL=mwc-menu-base.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-menu/mwc-menu-css.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/mwc-menu/mwc-menu-css.js ***!
  \*********************************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const style = lit_element__WEBPACK_IMPORTED_MODULE_0__["css"] `mwc-list ::slotted([mwc-list-item]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}mwc-list{max-width:var(--mdc-menu-max-width, auto);min-width:var(--mdc-menu-min-width, auto)}`;
//# sourceMappingURL=mwc-menu-css.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-menu/mwc-menu-surface-base.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material/mwc-menu/mwc-menu-surface-base.js ***!
  \******************************************************************/
/*! exports provided: MenuSurfaceBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuSurfaceBase", function() { return MenuSurfaceBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_menu_surface_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/menu-surface/constants */ "./node_modules/@material/mwc-menu/node_modules/@material/menu-surface/constants.js");
/* harmony import */ var _material_menu_surface_foundation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/menu-surface/foundation.js */ "./node_modules/@material/mwc-menu/node_modules/@material/menu-surface/foundation.js");
/* harmony import */ var _material_menu_surface_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/menu-surface/util */ "./node_modules/@material/mwc-menu/node_modules/@material/menu-surface/util.js");
/* harmony import */ var _material_mwc_base_base_element_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/mwc-base/base-element.js */ "./node_modules/@material/mwc-base/base-element.js");
/* harmony import */ var _material_mwc_base_observer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/mwc-base/observer.js */ "./node_modules/@material/mwc-base/observer.js");
/* harmony import */ var _material_mwc_base_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/mwc-base/utils */ "./node_modules/@material/mwc-base/utils.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lit-html/directives/class-map.js */ "./node_modules/lit-html/directives/class-map.js");









// required for closure compiler
const stringToCorner = {
    'TOP_LEFT': _material_menu_surface_constants__WEBPACK_IMPORTED_MODULE_1__["Corner"].TOP_LEFT,
    'TOP_RIGHT': _material_menu_surface_constants__WEBPACK_IMPORTED_MODULE_1__["Corner"].TOP_RIGHT,
    'BOTTOM_LEFT': _material_menu_surface_constants__WEBPACK_IMPORTED_MODULE_1__["Corner"].BOTTOM_LEFT,
    'BOTTOM_RIGHT': _material_menu_surface_constants__WEBPACK_IMPORTED_MODULE_1__["Corner"].BOTTOM_RIGHT,
    'TOP_START': _material_menu_surface_constants__WEBPACK_IMPORTED_MODULE_1__["Corner"].TOP_START,
    'TOP_END': _material_menu_surface_constants__WEBPACK_IMPORTED_MODULE_1__["Corner"].TOP_END,
    'BOTTOM_START': _material_menu_surface_constants__WEBPACK_IMPORTED_MODULE_1__["Corner"].BOTTOM_START,
    'BOTTOM_END': _material_menu_surface_constants__WEBPACK_IMPORTED_MODULE_1__["Corner"].BOTTOM_END,
};
/**
 * @fires opened
 * @fires closed
 */
class MenuSurfaceBase extends _material_mwc_base_base_element_js__WEBPACK_IMPORTED_MODULE_4__["BaseElement"] {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = _material_menu_surface_foundation_js__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.absolute = false;
        this.fullwidth = false;
        this.fixed = false;
        this.x = null;
        this.y = null;
        // must be defined before open or else race condition in foundation occurs.
        this.quick = false;
        this.open = false;
        this.corner = 'TOP_START';
        this.anchor = null;
        this.previouslyFocused = null;
        this.previousAnchor = null;
        this.onBodyClickBound = () => undefined;
    }
    render() {
        const classes = {
            'mdc-menu-surface--fixed': this.fixed,
            'fullwidth': this.fullwidth,
        };
        return lit_element__WEBPACK_IMPORTED_MODULE_7__["html"] `
      <div
          class="mdc-menu-surface ${Object(lit_html_directives_class_map_js__WEBPACK_IMPORTED_MODULE_8__["classMap"])(classes)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        <slot></slot>
      </div>`;
    }
    createAdapter() {
        return Object.assign(Object.assign({}, Object(_material_mwc_base_base_element_js__WEBPACK_IMPORTED_MODULE_4__["addHasRemoveClass"])(this.mdcRoot)), { hasAnchor: () => {
                return !!this.anchor;
            }, notifyClose: () => {
                const init = { bubbles: true, composed: true };
                const ev = new CustomEvent('closed', init);
                this.open = false;
                this.mdcRoot.dispatchEvent(ev);
            }, notifyOpen: () => {
                const init = { bubbles: true, composed: true };
                const ev = new CustomEvent('opened', init);
                this.open = true;
                this.mdcRoot.dispatchEvent(ev);
            }, isElementInContainer: () => false, isRtl: () => {
                if (this.mdcRoot) {
                    return getComputedStyle(this.mdcRoot).direction === 'rtl';
                }
                return false;
            }, setTransformOrigin: (origin) => {
                const root = this.mdcRoot;
                if (!root) {
                    return;
                }
                const propertyName = `${Object(_material_menu_surface_util__WEBPACK_IMPORTED_MODULE_3__["getTransformPropertyName"])(window)}-origin`;
                root.style.setProperty(propertyName, origin);
            }, isFocused: () => {
                return Object(_material_mwc_base_utils__WEBPACK_IMPORTED_MODULE_6__["doesElementContainFocus"])(this);
            }, saveFocus: () => {
                const activeElementPath = Object(_material_mwc_base_utils__WEBPACK_IMPORTED_MODULE_6__["deepActiveElementPath"])();
                const pathLength = activeElementPath.length;
                if (!pathLength) {
                    this.previouslyFocused = null;
                }
                this.previouslyFocused = activeElementPath[pathLength - 1];
            }, restoreFocus: () => {
                if (!this.previouslyFocused) {
                    return;
                }
                if ('focus' in this.previouslyFocused) {
                    this.previouslyFocused.focus();
                }
            }, getInnerDimensions: () => {
                const mdcRoot = this.mdcRoot;
                if (!mdcRoot) {
                    return { width: 0, height: 0 };
                }
                return { width: mdcRoot.offsetWidth, height: mdcRoot.offsetHeight };
            }, getAnchorDimensions: () => {
                const anchorElement = this.anchor;
                return anchorElement ? anchorElement.getBoundingClientRect() : null;
            }, getBodyDimensions: () => {
                return {
                    width: document.body.clientWidth,
                    height: document.body.clientHeight,
                };
            }, getWindowDimensions: () => {
                return {
                    width: window.innerWidth,
                    height: window.innerHeight,
                };
            }, getWindowScroll: () => {
                return {
                    x: window.pageXOffset,
                    y: window.pageYOffset,
                };
            }, setPosition: (position) => {
                const mdcRoot = this.mdcRoot;
                if (!mdcRoot) {
                    return;
                }
                mdcRoot.style.left = 'left' in position ? `${position.left}px` : '';
                mdcRoot.style.right = 'right' in position ? `${position.right}px` : '';
                mdcRoot.style.top = 'top' in position ? `${position.top}px` : '';
                mdcRoot.style.bottom =
                    'bottom' in position ? `${position.bottom}px` : '';
            }, setMaxHeight: (height) => {
                const mdcRoot = this.mdcRoot;
                if (!mdcRoot) {
                    return;
                }
                mdcRoot.style.maxHeight = height;
            } });
    }
    onKeydown(evt) {
        if (this.mdcFoundation) {
            this.mdcFoundation.handleKeydown(evt);
        }
    }
    onBodyClick(evt) {
        const path = evt.composedPath();
        if (path.indexOf(this) === -1) {
            this.close();
        }
    }
    registerBodyClick() {
        this.onBodyClickBound = this.onBodyClick.bind(this);
        document.body.addEventListener('click', this.onBodyClickBound);
    }
    deregisterBodyClick() {
        document.body.removeEventListener('click', this.onBodyClickBound);
    }
    close() {
        this.open = false;
    }
    show() {
        this.open = true;
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["query"])('.mdc-menu-surface')
], MenuSurfaceBase.prototype, "mdcRoot", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["query"])('slot')
], MenuSurfaceBase.prototype, "slotElement", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({ type: Boolean }),
    Object(_material_mwc_base_observer_js__WEBPACK_IMPORTED_MODULE_5__["observer"])(function (isAbsolute) {
        if (this.mdcFoundation && !this.fixed) {
            this.mdcFoundation.setIsHoisted(isAbsolute);
        }
    })
], MenuSurfaceBase.prototype, "absolute", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({ type: Boolean })
], MenuSurfaceBase.prototype, "fullwidth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({ type: Boolean }),
    Object(_material_mwc_base_observer_js__WEBPACK_IMPORTED_MODULE_5__["observer"])(function (isFixed) {
        if (this.mdcFoundation && !this.absolute) {
            this.mdcFoundation.setIsHoisted(isFixed);
        }
    })
], MenuSurfaceBase.prototype, "fixed", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({ type: Number }),
    Object(_material_mwc_base_observer_js__WEBPACK_IMPORTED_MODULE_5__["observer"])(function (value) {
        if (this.mdcFoundation && this.y !== null && value !== null) {
            this.mdcFoundation.setAbsolutePosition(value, this.y);
            this.mdcFoundation.setAnchorMargin({ left: value, top: this.y, right: -value, bottom: this.y });
        }
    })
], MenuSurfaceBase.prototype, "x", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({ type: Number }),
    Object(_material_mwc_base_observer_js__WEBPACK_IMPORTED_MODULE_5__["observer"])(function (value) {
        if (this.mdcFoundation && this.x !== null && value !== null) {
            this.mdcFoundation.setAbsolutePosition(this.x, value);
            this.mdcFoundation.setAnchorMargin({ left: this.x, top: value, right: -this.x, bottom: value });
        }
    })
], MenuSurfaceBase.prototype, "y", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({ type: Boolean }),
    Object(_material_mwc_base_observer_js__WEBPACK_IMPORTED_MODULE_5__["observer"])(function (value) {
        if (this.mdcFoundation) {
            this.mdcFoundation.setQuickOpen(value);
        }
    })
], MenuSurfaceBase.prototype, "quick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({ type: Boolean, reflect: true }),
    Object(_material_mwc_base_observer_js__WEBPACK_IMPORTED_MODULE_5__["observer"])(function (isOpen, wasOpen) {
        if (this.mdcFoundation) {
            if (isOpen) {
                this.mdcFoundation.open();
                // wasOpen helps with first render (when it is `undefined`) perf
            }
            else if (wasOpen !== undefined) {
                this.mdcFoundation.close();
            }
        }
    })
], MenuSurfaceBase.prototype, "open", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])({ type: String }),
    Object(_material_mwc_base_observer_js__WEBPACK_IMPORTED_MODULE_5__["observer"])(function (value) {
        if (this.mdcFoundation) {
            if (value) {
                this.mdcFoundation.setAnchorCorner(stringToCorner[value]);
            }
            else {
                this.mdcFoundation.setAnchorCorner(_material_menu_surface_constants__WEBPACK_IMPORTED_MODULE_1__["Corner"].TOP_START);
            }
        }
    })
], MenuSurfaceBase.prototype, "corner", void 0);
//# sourceMappingURL=mwc-menu-surface-base.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-menu/mwc-menu-surface-css.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material/mwc-menu/mwc-menu-surface-css.js ***!
  \*****************************************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const style = lit_element__WEBPACK_IMPORTED_MODULE_0__["css"] `.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}:host(:not([open])){display:none}.fullwidth{width:100%}.mdc-menu-surface{border-radius:var(--mdc-shape-medium, 4px)}`;
//# sourceMappingURL=mwc-menu-surface-css.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-menu/mwc-menu-surface.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/mwc-menu/mwc-menu-surface.js ***!
  \*************************************************************/
/*! exports provided: MenuSurface */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuSurface", function() { return MenuSurface; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _mwc_menu_surface_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mwc-menu-surface-base.js */ "./node_modules/@material/mwc-menu/mwc-menu-surface-base.js");
/* harmony import */ var _mwc_menu_surface_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mwc-menu-surface-css.js */ "./node_modules/@material/mwc-menu/mwc-menu-surface-css.js");
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




let MenuSurface = class MenuSurface extends _mwc_menu_surface_base_js__WEBPACK_IMPORTED_MODULE_2__["MenuSurfaceBase"] {
};
MenuSurface.styles = _mwc_menu_surface_css_js__WEBPACK_IMPORTED_MODULE_3__["style"];
MenuSurface = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])('mwc-menu-surface')
], MenuSurface);

//# sourceMappingURL=mwc-menu-surface.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-menu/mwc-menu.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/mwc-menu/mwc-menu.js ***!
  \*****************************************************/
/*! exports provided: DefaultFocusState, createSetFromIndex, isEventMulti, isIndexSet, Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _mwc_menu_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mwc-menu-base.js */ "./node_modules/@material/mwc-menu/mwc-menu-base.js");
/* harmony import */ var _mwc_menu_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mwc-menu-css.js */ "./node_modules/@material/mwc-menu/mwc-menu-css.js");
/* harmony import */ var _material_menu_constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/menu/constants.js */ "./node_modules/@material/mwc-menu/node_modules/@material/menu/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultFocusState", function() { return _material_menu_constants_js__WEBPACK_IMPORTED_MODULE_4__["DefaultFocusState"]; });

/* harmony import */ var _material_mwc_list_mwc_list_foundation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/mwc-list/mwc-list-foundation.js */ "./node_modules/@material/mwc-list/mwc-list-foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSetFromIndex", function() { return _material_mwc_list_mwc_list_foundation_js__WEBPACK_IMPORTED_MODULE_5__["createSetFromIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEventMulti", function() { return _material_mwc_list_mwc_list_foundation_js__WEBPACK_IMPORTED_MODULE_5__["isEventMulti"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIndexSet", function() { return _material_mwc_list_mwc_list_foundation_js__WEBPACK_IMPORTED_MODULE_5__["isIndexSet"]; });

/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/






let Menu = class Menu extends _mwc_menu_base_js__WEBPACK_IMPORTED_MODULE_2__["MenuBase"] {
};
Menu.styles = _mwc_menu_css_js__WEBPACK_IMPORTED_MODULE_3__["style"];
Menu = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])('mwc-menu')
], Menu);

//# sourceMappingURL=mwc-menu.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-menu/node_modules/@material/base/foundation.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@material/mwc-menu/node_modules/@material/base/foundation.js ***!
  \***********************************************************************************/
/*! exports provided: MDCFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFoundation", function() { return MDCFoundation; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = /** @class */ (function () {
    function MDCFoundation(adapter) {
        if (adapter === void 0) { adapter = {}; }
        this.adapter_ = adapter;
    }
    Object.defineProperty(MDCFoundation, "cssClasses", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "strings", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "numbers", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "defaultAdapter", {
        get: function () {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
        },
        enumerable: true,
        configurable: true
    });
    MDCFoundation.prototype.init = function () {
        // Subclasses should override this method to perform initialization routines (registering events, etc.)
    };
    MDCFoundation.prototype.destroy = function () {
        // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };
    return MDCFoundation;
}());

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-menu/node_modules/@material/list/constants.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@material/mwc-menu/node_modules/@material/list/constants.js ***!
  \**********************************************************************************/
/*! exports provided: strings, cssClasses, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated',
    LIST_ITEM_CLASS: 'mdc-list-item',
    LIST_ITEM_DISABLED_CLASS: 'mdc-list-item--disabled',
    LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
    ROOT: 'mdc-list',
};
var strings = {
    ACTION_EVENT: 'MDCList:action',
    ARIA_CHECKED: 'aria-checked',
    ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
    ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
    ARIA_CURRENT: 'aria-current',
    ARIA_DISABLED: 'aria-disabled',
    ARIA_ORIENTATION: 'aria-orientation',
    ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
    ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
    ARIA_SELECTED: 'aria-selected',
    CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a\n  ",
    FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a,\n    ." + cssClasses.LIST_ITEM_CLASS + " input[type=\"radio\"]:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " input[type=\"checkbox\"]:not(:disabled)\n  ",
    RADIO_SELECTOR: 'input[type="radio"]',
};
var numbers = {
    UNSET_INDEX: -1,
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-menu/node_modules/@material/menu-surface/constants.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@material/mwc-menu/node_modules/@material/menu-surface/constants.js ***!
  \******************************************************************************************/
/*! exports provided: cssClasses, strings, numbers, CornerBit, Corner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerBit", function() { return CornerBit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Corner", function() { return Corner; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    ANCHOR: 'mdc-menu-surface--anchor',
    ANIMATING_CLOSED: 'mdc-menu-surface--animating-closed',
    ANIMATING_OPEN: 'mdc-menu-surface--animating-open',
    FIXED: 'mdc-menu-surface--fixed',
    OPEN: 'mdc-menu-surface--open',
    ROOT: 'mdc-menu-surface',
};
// tslint:disable:object-literal-sort-keys
var strings = {
    CLOSED_EVENT: 'MDCMenuSurface:closed',
    OPENED_EVENT: 'MDCMenuSurface:opened',
    FOCUSABLE_ELEMENTS: [
        'button:not(:disabled)', '[href]:not([aria-disabled="true"])', 'input:not(:disabled)',
        'select:not(:disabled)', 'textarea:not(:disabled)', '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])',
    ].join(', '),
};
// tslint:enable:object-literal-sort-keys
var numbers = {
    /** Total duration of menu-surface open animation. */
    TRANSITION_OPEN_DURATION: 120,
    /** Total duration of menu-surface close animation. */
    TRANSITION_CLOSE_DURATION: 75,
    /** Margin left to the edge of the viewport when menu-surface is at maximum possible height. */
    MARGIN_TO_EDGE: 32,
    /** Ratio of anchor width to menu-surface width for switching from corner positioning to center positioning. */
    ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
};
/**
 * Enum for bits in the {@see Corner) bitmap.
 */
var CornerBit;
(function (CornerBit) {
    CornerBit[CornerBit["BOTTOM"] = 1] = "BOTTOM";
    CornerBit[CornerBit["CENTER"] = 2] = "CENTER";
    CornerBit[CornerBit["RIGHT"] = 4] = "RIGHT";
    CornerBit[CornerBit["FLIP_RTL"] = 8] = "FLIP_RTL";
})(CornerBit || (CornerBit = {}));
/**
 * Enum for representing an element corner for positioning the menu-surface.
 *
 * The START constants map to LEFT if element directionality is left
 * to right and RIGHT if the directionality is right to left.
 * Likewise END maps to RIGHT or LEFT depending on the directionality.
 */
var Corner;
(function (Corner) {
    Corner[Corner["TOP_LEFT"] = 0] = "TOP_LEFT";
    Corner[Corner["TOP_RIGHT"] = 4] = "TOP_RIGHT";
    Corner[Corner["BOTTOM_LEFT"] = 1] = "BOTTOM_LEFT";
    Corner[Corner["BOTTOM_RIGHT"] = 5] = "BOTTOM_RIGHT";
    Corner[Corner["TOP_START"] = 8] = "TOP_START";
    Corner[Corner["TOP_END"] = 12] = "TOP_END";
    Corner[Corner["BOTTOM_START"] = 9] = "BOTTOM_START";
    Corner[Corner["BOTTOM_END"] = 13] = "BOTTOM_END";
})(Corner || (Corner = {}));

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-menu/node_modules/@material/menu-surface/foundation.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@material/mwc-menu/node_modules/@material/menu-surface/foundation.js ***!
  \*******************************************************************************************/
/*! exports provided: MDCMenuSurfaceFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCMenuSurfaceFoundation", function() { return MDCMenuSurfaceFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/mwc-menu/node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/mwc-menu/node_modules/@material/menu-surface/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCMenuSurfaceFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCMenuSurfaceFoundation, _super);
    function MDCMenuSurfaceFoundation(adapter) {
        var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCMenuSurfaceFoundation.defaultAdapter, adapter)) || this;
        _this.isOpen_ = false;
        _this.isQuickOpen_ = false;
        _this.isHoistedElement_ = false;
        _this.isFixedPosition_ = false;
        _this.openAnimationEndTimerId_ = 0;
        _this.closeAnimationEndTimerId_ = 0;
        _this.animationRequestId_ = 0;
        _this.anchorCorner_ = _constants__WEBPACK_IMPORTED_MODULE_2__["Corner"].TOP_START;
        _this.anchorMargin_ = { top: 0, right: 0, bottom: 0, left: 0 };
        _this.position_ = { x: 0, y: 0 };
        return _this;
    }
    Object.defineProperty(MDCMenuSurfaceFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "Corner", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["Corner"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "defaultAdapter", {
        /**
         * @see {@link MDCMenuSurfaceAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                hasAnchor: function () { return false; },
                isElementInContainer: function () { return false; },
                isFocused: function () { return false; },
                isRtl: function () { return false; },
                getInnerDimensions: function () { return ({ height: 0, width: 0 }); },
                getAnchorDimensions: function () { return null; },
                getWindowDimensions: function () { return ({ height: 0, width: 0 }); },
                getBodyDimensions: function () { return ({ height: 0, width: 0 }); },
                getWindowScroll: function () { return ({ x: 0, y: 0 }); },
                setPosition: function () { return undefined; },
                setMaxHeight: function () { return undefined; },
                setTransformOrigin: function () { return undefined; },
                saveFocus: function () { return undefined; },
                restoreFocus: function () { return undefined; },
                notifyClose: function () { return undefined; },
                notifyOpen: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCMenuSurfaceFoundation.prototype.init = function () {
        var _a = MDCMenuSurfaceFoundation.cssClasses, ROOT = _a.ROOT, OPEN = _a.OPEN;
        if (!this.adapter_.hasClass(ROOT)) {
            throw new Error(ROOT + " class required in root element.");
        }
        if (this.adapter_.hasClass(OPEN)) {
            this.isOpen_ = true;
        }
    };
    MDCMenuSurfaceFoundation.prototype.destroy = function () {
        clearTimeout(this.openAnimationEndTimerId_);
        clearTimeout(this.closeAnimationEndTimerId_);
        // Cancel any currently running animations.
        cancelAnimationFrame(this.animationRequestId_);
    };
    /**
     * @param corner Default anchor corner alignment of top-left menu surface corner.
     */
    MDCMenuSurfaceFoundation.prototype.setAnchorCorner = function (corner) {
        this.anchorCorner_ = corner;
    };
    /**
     * @param margin Set of margin values from anchor.
     */
    MDCMenuSurfaceFoundation.prototype.setAnchorMargin = function (margin) {
        this.anchorMargin_.top = margin.top || 0;
        this.anchorMargin_.right = margin.right || 0;
        this.anchorMargin_.bottom = margin.bottom || 0;
        this.anchorMargin_.left = margin.left || 0;
    };
    /** Used to indicate if the menu-surface is hoisted to the body. */
    MDCMenuSurfaceFoundation.prototype.setIsHoisted = function (isHoisted) {
        this.isHoistedElement_ = isHoisted;
    };
    /** Used to set the menu-surface calculations based on a fixed position menu. */
    MDCMenuSurfaceFoundation.prototype.setFixedPosition = function (isFixedPosition) {
        this.isFixedPosition_ = isFixedPosition;
    };
    /** Sets the menu-surface position on the page. */
    MDCMenuSurfaceFoundation.prototype.setAbsolutePosition = function (x, y) {
        this.position_.x = this.isFinite_(x) ? x : 0;
        this.position_.y = this.isFinite_(y) ? y : 0;
    };
    MDCMenuSurfaceFoundation.prototype.setQuickOpen = function (quickOpen) {
        this.isQuickOpen_ = quickOpen;
    };
    MDCMenuSurfaceFoundation.prototype.isOpen = function () {
        return this.isOpen_;
    };
    /**
     * Open the menu surface.
     */
    MDCMenuSurfaceFoundation.prototype.open = function () {
        var _this = this;
        this.adapter_.saveFocus();
        if (!this.isQuickOpen_) {
            this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
        }
        this.animationRequestId_ = requestAnimationFrame(function () {
            _this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
            _this.dimensions_ = _this.adapter_.getInnerDimensions();
            _this.autoPosition_();
            if (_this.isQuickOpen_) {
                _this.adapter_.notifyOpen();
            }
            else {
                _this.openAnimationEndTimerId_ = setTimeout(function () {
                    _this.openAnimationEndTimerId_ = 0;
                    _this.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
                    _this.adapter_.notifyOpen();
                }, _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].TRANSITION_OPEN_DURATION);
            }
        });
        this.isOpen_ = true;
    };
    /**
     * Closes the menu surface.
     */
    MDCMenuSurfaceFoundation.prototype.close = function (skipRestoreFocus) {
        var _this = this;
        if (skipRestoreFocus === void 0) { skipRestoreFocus = false; }
        if (!this.isQuickOpen_) {
            this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
        }
        requestAnimationFrame(function () {
            _this.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
            if (_this.isQuickOpen_) {
                _this.adapter_.notifyClose();
            }
            else {
                _this.closeAnimationEndTimerId_ = setTimeout(function () {
                    _this.closeAnimationEndTimerId_ = 0;
                    _this.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
                    _this.adapter_.notifyClose();
                }, _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].TRANSITION_CLOSE_DURATION);
            }
        });
        this.isOpen_ = false;
        if (!skipRestoreFocus) {
            this.maybeRestoreFocus_();
        }
    };
    /** Handle clicks and close if not within menu-surface element. */
    MDCMenuSurfaceFoundation.prototype.handleBodyClick = function (evt) {
        var el = evt.target;
        if (this.adapter_.isElementInContainer(el)) {
            return;
        }
        this.close();
    };
    /** Handle keys that close the surface. */
    MDCMenuSurfaceFoundation.prototype.handleKeydown = function (evt) {
        var keyCode = evt.keyCode, key = evt.key;
        var isEscape = key === 'Escape' || keyCode === 27;
        if (isEscape) {
            this.close();
        }
    };
    MDCMenuSurfaceFoundation.prototype.autoPosition_ = function () {
        var _a;
        // Compute measurements for autoposition methods reuse.
        this.measurements_ = this.getAutoLayoutMeasurements_();
        var corner = this.getOriginCorner_();
        var maxMenuSurfaceHeight = this.getMenuSurfaceMaxHeight_(corner);
        var verticalAlignment = this.hasBit_(corner, _constants__WEBPACK_IMPORTED_MODULE_2__["CornerBit"].BOTTOM) ? 'bottom' : 'top';
        var horizontalAlignment = this.hasBit_(corner, _constants__WEBPACK_IMPORTED_MODULE_2__["CornerBit"].RIGHT) ? 'right' : 'left';
        var horizontalOffset = this.getHorizontalOriginOffset_(corner);
        var verticalOffset = this.getVerticalOriginOffset_(corner);
        var _b = this.measurements_, anchorSize = _b.anchorSize, surfaceSize = _b.surfaceSize;
        var position = (_a = {},
            _a[horizontalAlignment] = horizontalOffset,
            _a[verticalAlignment] = verticalOffset,
            _a);
        // Center align when anchor width is comparable or greater than menu surface, otherwise keep corner.
        if (anchorSize.width / surfaceSize.width > _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO) {
            horizontalAlignment = 'center';
        }
        // If the menu-surface has been hoisted to the body, it's no longer relative to the anchor element
        if (this.isHoistedElement_ || this.isFixedPosition_) {
            this.adjustPositionForHoistedElement_(position);
        }
        this.adapter_.setTransformOrigin(horizontalAlignment + " " + verticalAlignment);
        this.adapter_.setPosition(position);
        this.adapter_.setMaxHeight(maxMenuSurfaceHeight ? maxMenuSurfaceHeight + 'px' : '');
    };
    /**
     * @return Measurements used to position menu surface popup.
     */
    MDCMenuSurfaceFoundation.prototype.getAutoLayoutMeasurements_ = function () {
        var anchorRect = this.adapter_.getAnchorDimensions();
        var bodySize = this.adapter_.getBodyDimensions();
        var viewportSize = this.adapter_.getWindowDimensions();
        var windowScroll = this.adapter_.getWindowScroll();
        if (!anchorRect) {
            // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
            anchorRect = {
                top: this.position_.y,
                right: this.position_.x,
                bottom: this.position_.y,
                left: this.position_.x,
                width: 0,
                height: 0,
            };
            // tslint:enable:object-literal-sort-keys
        }
        return {
            anchorSize: anchorRect,
            bodySize: bodySize,
            surfaceSize: this.dimensions_,
            viewportDistance: {
                // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
                top: anchorRect.top,
                right: viewportSize.width - anchorRect.right,
                bottom: viewportSize.height - anchorRect.bottom,
                left: anchorRect.left,
            },
            viewportSize: viewportSize,
            windowScroll: windowScroll,
        };
    };
    /**
     * Computes the corner of the anchor from which to animate and position the menu surface.
     */
    MDCMenuSurfaceFoundation.prototype.getOriginCorner_ = function () {
        // Defaults: open from the top left.
        var corner = _constants__WEBPACK_IMPORTED_MODULE_2__["Corner"].TOP_LEFT;
        var _a = this.measurements_, viewportDistance = _a.viewportDistance, anchorSize = _a.anchorSize, surfaceSize = _a.surfaceSize;
        var isBottomAligned = this.hasBit_(this.anchorCorner_, _constants__WEBPACK_IMPORTED_MODULE_2__["CornerBit"].BOTTOM);
        var availableTop = isBottomAligned ? viewportDistance.top + anchorSize.height + this.anchorMargin_.bottom
            : viewportDistance.top + this.anchorMargin_.top;
        var availableBottom = isBottomAligned ? viewportDistance.bottom - this.anchorMargin_.bottom
            : viewportDistance.bottom + anchorSize.height - this.anchorMargin_.top;
        var topOverflow = surfaceSize.height - availableTop;
        var bottomOverflow = surfaceSize.height - availableBottom;
        if (bottomOverflow > 0 && topOverflow < bottomOverflow) {
            corner = this.setBit_(corner, _constants__WEBPACK_IMPORTED_MODULE_2__["CornerBit"].BOTTOM);
        }
        var isRtl = this.adapter_.isRtl();
        var isFlipRtl = this.hasBit_(this.anchorCorner_, _constants__WEBPACK_IMPORTED_MODULE_2__["CornerBit"].FLIP_RTL);
        var avoidHorizontalOverlap = this.hasBit_(this.anchorCorner_, _constants__WEBPACK_IMPORTED_MODULE_2__["CornerBit"].RIGHT);
        var isAlignedRight = (avoidHorizontalOverlap && !isRtl) ||
            (!avoidHorizontalOverlap && isFlipRtl && isRtl);
        var availableLeft = isAlignedRight ? viewportDistance.left + anchorSize.width + this.anchorMargin_.right :
            viewportDistance.left + this.anchorMargin_.left;
        var availableRight = isAlignedRight ? viewportDistance.right - this.anchorMargin_.right :
            viewportDistance.right + anchorSize.width - this.anchorMargin_.left;
        var leftOverflow = surfaceSize.width - availableLeft;
        var rightOverflow = surfaceSize.width - availableRight;
        if ((leftOverflow < 0 && isAlignedRight && isRtl) ||
            (avoidHorizontalOverlap && !isAlignedRight && leftOverflow < 0) ||
            (rightOverflow > 0 && leftOverflow < rightOverflow)) {
            corner = this.setBit_(corner, _constants__WEBPACK_IMPORTED_MODULE_2__["CornerBit"].RIGHT);
        }
        return corner;
    };
    /**
     * @param corner Origin corner of the menu surface.
     * @return Maximum height of the menu surface, based on available space. 0 indicates should not be set.
     */
    MDCMenuSurfaceFoundation.prototype.getMenuSurfaceMaxHeight_ = function (corner) {
        var viewportDistance = this.measurements_.viewportDistance;
        var maxHeight = 0;
        var isBottomAligned = this.hasBit_(corner, _constants__WEBPACK_IMPORTED_MODULE_2__["CornerBit"].BOTTOM);
        var isBottomAnchored = this.hasBit_(this.anchorCorner_, _constants__WEBPACK_IMPORTED_MODULE_2__["CornerBit"].BOTTOM);
        var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation.numbers.MARGIN_TO_EDGE;
        // When maximum height is not specified, it is handled from CSS.
        if (isBottomAligned) {
            maxHeight = viewportDistance.top + this.anchorMargin_.top - MARGIN_TO_EDGE;
            if (!isBottomAnchored) {
                maxHeight += this.measurements_.anchorSize.height;
            }
        }
        else {
            maxHeight =
                viewportDistance.bottom - this.anchorMargin_.bottom + this.measurements_.anchorSize.height - MARGIN_TO_EDGE;
            if (isBottomAnchored) {
                maxHeight -= this.measurements_.anchorSize.height;
            }
        }
        return maxHeight;
    };
    /**
     * @param corner Origin corner of the menu surface.
     * @return Horizontal offset of menu surface origin corner from corresponding anchor corner.
     */
    MDCMenuSurfaceFoundation.prototype.getHorizontalOriginOffset_ = function (corner) {
        var anchorSize = this.measurements_.anchorSize;
        // isRightAligned corresponds to using the 'right' property on the surface.
        var isRightAligned = this.hasBit_(corner, _constants__WEBPACK_IMPORTED_MODULE_2__["CornerBit"].RIGHT);
        var avoidHorizontalOverlap = this.hasBit_(this.anchorCorner_, _constants__WEBPACK_IMPORTED_MODULE_2__["CornerBit"].RIGHT);
        if (isRightAligned) {
            var rightOffset = avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin_.left : this.anchorMargin_.right;
            // For hoisted or fixed elements, adjust the offset by the difference between viewport width and body width so
            // when we calculate the right value (`adjustPositionForHoistedElement_`) based on the element position,
            // the right property is correct.
            if (this.isHoistedElement_ || this.isFixedPosition_) {
                return rightOffset - (this.measurements_.viewportSize.width - this.measurements_.bodySize.width);
            }
            return rightOffset;
        }
        return avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin_.right : this.anchorMargin_.left;
    };
    /**
     * @param corner Origin corner of the menu surface.
     * @return Vertical offset of menu surface origin corner from corresponding anchor corner.
     */
    MDCMenuSurfaceFoundation.prototype.getVerticalOriginOffset_ = function (corner) {
        var anchorSize = this.measurements_.anchorSize;
        var isBottomAligned = this.hasBit_(corner, _constants__WEBPACK_IMPORTED_MODULE_2__["CornerBit"].BOTTOM);
        var avoidVerticalOverlap = this.hasBit_(this.anchorCorner_, _constants__WEBPACK_IMPORTED_MODULE_2__["CornerBit"].BOTTOM);
        var y = 0;
        if (isBottomAligned) {
            y = avoidVerticalOverlap ? anchorSize.height - this.anchorMargin_.top : -this.anchorMargin_.bottom;
        }
        else {
            y = avoidVerticalOverlap ? (anchorSize.height + this.anchorMargin_.bottom) : this.anchorMargin_.top;
        }
        return y;
    };
    /** Calculates the offsets for positioning the menu-surface when the menu-surface has been hoisted to the body. */
    MDCMenuSurfaceFoundation.prototype.adjustPositionForHoistedElement_ = function (position) {
        var e_1, _a;
        var _b = this.measurements_, windowScroll = _b.windowScroll, viewportDistance = _b.viewportDistance;
        var props = Object.keys(position);
        try {
            for (var props_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
                var prop = props_1_1.value;
                var value = position[prop] || 0;
                // Hoisted surfaces need to have the anchor elements location on the page added to the
                // position properties for proper alignment on the body.
                value += viewportDistance[prop];
                // Surfaces that are absolutely positioned need to have additional calculations for scroll
                // and bottom positioning.
                if (!this.isFixedPosition_) {
                    if (prop === 'top') {
                        value += windowScroll.y;
                    }
                    else if (prop === 'bottom') {
                        value -= windowScroll.y;
                    }
                    else if (prop === 'left') {
                        value += windowScroll.x;
                    }
                    else { // prop === 'right'
                        value -= windowScroll.x;
                    }
                }
                position[prop] = value;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * The last focused element when the menu surface was opened should regain focus, if the user is
     * focused on or within the menu surface when it is closed.
     */
    MDCMenuSurfaceFoundation.prototype.maybeRestoreFocus_ = function () {
        var isRootFocused = this.adapter_.isFocused();
        var childHasFocus = document.activeElement && this.adapter_.isElementInContainer(document.activeElement);
        if (isRootFocused || childHasFocus) {
            this.adapter_.restoreFocus();
        }
    };
    MDCMenuSurfaceFoundation.prototype.hasBit_ = function (corner, bit) {
        return Boolean(corner & bit); // tslint:disable-line:no-bitwise
    };
    MDCMenuSurfaceFoundation.prototype.setBit_ = function (corner, bit) {
        return corner | bit; // tslint:disable-line:no-bitwise
    };
    /**
     * isFinite that doesn't force conversion to number type.
     * Equivalent to Number.isFinite in ES2015, which is not supported in IE.
     */
    MDCMenuSurfaceFoundation.prototype.isFinite_ = function (num) {
        return typeof num === 'number' && isFinite(num);
    };
    return MDCMenuSurfaceFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCMenuSurfaceFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-menu/node_modules/@material/menu-surface/util.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@material/mwc-menu/node_modules/@material/menu-surface/util.js ***!
  \*************************************************************************************/
/*! exports provided: getTransformPropertyName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransformPropertyName", function() { return getTransformPropertyName; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cachedCssTransformPropertyName_;
/**
 * Returns the name of the correct transform property to use on the current browser.
 */
function getTransformPropertyName(globalObj, forceRefresh) {
    if (forceRefresh === void 0) { forceRefresh = false; }
    if (cachedCssTransformPropertyName_ === undefined || forceRefresh) {
        var el = globalObj.document.createElement('div');
        cachedCssTransformPropertyName_ = 'transform' in el.style ? 'transform' : 'webkitTransform';
    }
    return cachedCssTransformPropertyName_;
}

//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-menu/node_modules/@material/menu/constants.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@material/mwc-menu/node_modules/@material/menu/constants.js ***!
  \**********************************************************************************/
/*! exports provided: cssClasses, strings, numbers, DefaultFocusState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultFocusState", function() { return DefaultFocusState; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    MENU_SELECTED_LIST_ITEM: 'mdc-menu-item--selected',
    MENU_SELECTION_GROUP: 'mdc-menu__selection-group',
    ROOT: 'mdc-menu',
};
var strings = {
    ARIA_CHECKED_ATTR: 'aria-checked',
    ARIA_DISABLED_ATTR: 'aria-disabled',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    LIST_SELECTOR: '.mdc-list',
    SELECTED_EVENT: 'MDCMenu:selected',
};
var numbers = {
    FOCUS_ROOT_INDEX: -1,
};
var DefaultFocusState;
(function (DefaultFocusState) {
    DefaultFocusState[DefaultFocusState["NONE"] = 0] = "NONE";
    DefaultFocusState[DefaultFocusState["LIST_ROOT"] = 1] = "LIST_ROOT";
    DefaultFocusState[DefaultFocusState["FIRST_ITEM"] = 2] = "FIRST_ITEM";
    DefaultFocusState[DefaultFocusState["LAST_ITEM"] = 3] = "LAST_ITEM";
})(DefaultFocusState || (DefaultFocusState = {}));

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-menu/node_modules/@material/menu/foundation.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@material/mwc-menu/node_modules/@material/menu/foundation.js ***!
  \***********************************************************************************/
/*! exports provided: MDCMenuFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCMenuFoundation", function() { return MDCMenuFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/mwc-menu/node_modules/@material/base/foundation.js");
/* harmony import */ var _material_list_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/list/constants */ "./node_modules/@material/mwc-menu/node_modules/@material/list/constants.js");
/* harmony import */ var _material_menu_surface_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/menu-surface/foundation */ "./node_modules/@material/mwc-menu/node_modules/@material/menu-surface/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/mwc-menu/node_modules/@material/menu/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





var MDCMenuFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCMenuFoundation, _super);
    function MDCMenuFoundation(adapter) {
        var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCMenuFoundation.defaultAdapter, adapter)) || this;
        _this.closeAnimationEndTimerId_ = 0;
        _this.defaultFocusState_ = _constants__WEBPACK_IMPORTED_MODULE_4__["DefaultFocusState"].LIST_ROOT;
        return _this;
    }
    Object.defineProperty(MDCMenuFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_4__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenuFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_4__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenuFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_4__["numbers"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCMenuFoundation, "defaultAdapter", {
        /**
         * @see {@link MDCMenuAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClassToElementAtIndex: function () { return undefined; },
                removeClassFromElementAtIndex: function () { return undefined; },
                addAttributeToElementAtIndex: function () { return undefined; },
                removeAttributeFromElementAtIndex: function () { return undefined; },
                elementContainsClass: function () { return false; },
                closeSurface: function () { return undefined; },
                getElementIndex: function () { return -1; },
                notifySelected: function () { return undefined; },
                getMenuItemCount: function () { return 0; },
                focusItemAtIndex: function () { return undefined; },
                focusListRoot: function () { return undefined; },
                getSelectedSiblingOfItemAtIndex: function () { return -1; },
                isSelectableItemAtIndex: function () { return false; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCMenuFoundation.prototype.destroy = function () {
        if (this.closeAnimationEndTimerId_) {
            clearTimeout(this.closeAnimationEndTimerId_);
        }
        this.adapter_.closeSurface();
    };
    MDCMenuFoundation.prototype.handleKeydown = function (evt) {
        var key = evt.key, keyCode = evt.keyCode;
        var isTab = key === 'Tab' || keyCode === 9;
        if (isTab) {
            this.adapter_.closeSurface(/** skipRestoreFocus */ true);
        }
    };
    MDCMenuFoundation.prototype.handleItemAction = function (listItem) {
        var _this = this;
        var index = this.adapter_.getElementIndex(listItem);
        if (index < 0) {
            return;
        }
        this.adapter_.notifySelected({ index: index });
        this.adapter_.closeSurface();
        // Wait for the menu to close before adding/removing classes that affect styles.
        this.closeAnimationEndTimerId_ = setTimeout(function () {
            // Recompute the index in case the menu contents have changed.
            var recomputedIndex = _this.adapter_.getElementIndex(listItem);
            if (_this.adapter_.isSelectableItemAtIndex(recomputedIndex)) {
                _this.setSelectedIndex(recomputedIndex);
            }
        }, _material_menu_surface_foundation__WEBPACK_IMPORTED_MODULE_3__["MDCMenuSurfaceFoundation"].numbers.TRANSITION_CLOSE_DURATION);
    };
    MDCMenuFoundation.prototype.handleMenuSurfaceOpened = function () {
        switch (this.defaultFocusState_) {
            case _constants__WEBPACK_IMPORTED_MODULE_4__["DefaultFocusState"].FIRST_ITEM:
                this.adapter_.focusItemAtIndex(0);
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_4__["DefaultFocusState"].LAST_ITEM:
                this.adapter_.focusItemAtIndex(this.adapter_.getMenuItemCount() - 1);
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_4__["DefaultFocusState"].NONE:
                // Do nothing.
                break;
            default:
                this.adapter_.focusListRoot();
                break;
        }
    };
    /**
     * Sets default focus state where the menu should focus every time when menu
     * is opened. Focuses the list root (`DefaultFocusState.LIST_ROOT`) element by
     * default.
     */
    MDCMenuFoundation.prototype.setDefaultFocusState = function (focusState) {
        this.defaultFocusState_ = focusState;
    };
    /**
     * Selects the list item at `index` within the menu.
     * @param index Index of list item within the menu.
     */
    MDCMenuFoundation.prototype.setSelectedIndex = function (index) {
        this.validatedIndex_(index);
        if (!this.adapter_.isSelectableItemAtIndex(index)) {
            throw new Error('MDCMenuFoundation: No selection group at specified index.');
        }
        var prevSelectedIndex = this.adapter_.getSelectedSiblingOfItemAtIndex(index);
        if (prevSelectedIndex >= 0) {
            this.adapter_.removeAttributeFromElementAtIndex(prevSelectedIndex, _constants__WEBPACK_IMPORTED_MODULE_4__["strings"].ARIA_CHECKED_ATTR);
            this.adapter_.removeClassFromElementAtIndex(prevSelectedIndex, _constants__WEBPACK_IMPORTED_MODULE_4__["cssClasses"].MENU_SELECTED_LIST_ITEM);
        }
        this.adapter_.addClassToElementAtIndex(index, _constants__WEBPACK_IMPORTED_MODULE_4__["cssClasses"].MENU_SELECTED_LIST_ITEM);
        this.adapter_.addAttributeToElementAtIndex(index, _constants__WEBPACK_IMPORTED_MODULE_4__["strings"].ARIA_CHECKED_ATTR, 'true');
    };
    /**
     * Sets the enabled state to isEnabled for the menu item at the given index.
     * @param index Index of the menu item
     * @param isEnabled The desired enabled state of the menu item.
     */
    MDCMenuFoundation.prototype.setEnabled = function (index, isEnabled) {
        this.validatedIndex_(index);
        if (isEnabled) {
            this.adapter_.removeClassFromElementAtIndex(index, _material_list_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LIST_ITEM_DISABLED_CLASS);
            this.adapter_.addAttributeToElementAtIndex(index, _constants__WEBPACK_IMPORTED_MODULE_4__["strings"].ARIA_DISABLED_ATTR, 'false');
        }
        else {
            this.adapter_.addClassToElementAtIndex(index, _material_list_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LIST_ITEM_DISABLED_CLASS);
            this.adapter_.addAttributeToElementAtIndex(index, _constants__WEBPACK_IMPORTED_MODULE_4__["strings"].ARIA_DISABLED_ATTR, 'true');
        }
    };
    MDCMenuFoundation.prototype.validatedIndex_ = function (index) {
        var menuSize = this.adapter_.getMenuItemCount();
        var isIndexInRange = index >= 0 && index < menuSize;
        if (!isIndexInRange) {
            throw new Error('MDCMenuFoundation: No list item at specified index.');
        }
    };
    return MDCMenuFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCMenuFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-notched-outline/mwc-notched-outline-base.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@material/mwc-notched-outline/mwc-notched-outline-base.js ***!
  \********************************************************************************/
/*! exports provided: NotchedOutlineBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotchedOutlineBase", function() { return NotchedOutlineBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_mwc_base_base_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-base/base-element.js */ "./node_modules/@material/mwc-base/base-element.js");
/* harmony import */ var _material_notched_outline_foundation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/notched-outline/foundation.js */ "./node_modules/@material/mwc-notched-outline/node_modules/@material/notched-outline/foundation.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");

/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



class NotchedOutlineBase extends _material_mwc_base_base_element_js__WEBPACK_IMPORTED_MODULE_1__["BaseElement"] {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = _material_notched_outline_foundation_js__WEBPACK_IMPORTED_MODULE_2__["MDCNotchedOutlineFoundation"];
        this.width = 0;
        this.open = false;
        this.lastOpen = this.open;
    }
    createAdapter() {
        return {
            addClass: (className) => this.mdcRoot.classList.add(className),
            removeClass: (className) => this.mdcRoot.classList.remove(className),
            setNotchWidthProperty: (width) => this.notchElement.style.setProperty('width', `${width}px`),
            removeNotchWidthProperty: () => this.notchElement.style.removeProperty('width'),
        };
    }
    openOrClose(shouldOpen, width) {
        if (!this.mdcFoundation) {
            return;
        }
        if (shouldOpen && width !== undefined) {
            this.mdcFoundation.notch(width);
        }
        else {
            this.mdcFoundation.closeNotch();
        }
    }
    render() {
        this.openOrClose(this.open, this.width);
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"] `
      <span class="mdc-notched-outline">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <slot></slot>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>`;
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["query"])('.mdc-notched-outline')
], NotchedOutlineBase.prototype, "mdcRoot", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])({ type: Number })
], NotchedOutlineBase.prototype, "width", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])({ type: Boolean, reflect: true })
], NotchedOutlineBase.prototype, "open", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["query"])('.mdc-notched-outline__notch')
], NotchedOutlineBase.prototype, "notchElement", void 0);
//# sourceMappingURL=mwc-notched-outline-base.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-notched-outline/mwc-notched-outline-css.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material/mwc-notched-outline/mwc-notched-outline-css.js ***!
  \*******************************************************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const style = lit_element__WEBPACK_IMPORTED_MODULE_0__["css"] `.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / .75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{padding:0}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host[dir=rtl]{text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / .75)}.mdc-notched-outline__leading{width:12px;width:var(--mdc-notched-outline-leading-width, 12px);border-radius:4px 0 0 4px;border-radius:var(--mdc-notched-outline-leading-border-radius, 4px 0 0 4px)}.mdc-notched-outline__trailing{border-radius:0 4px 4px 0;border-radius:var(--mdc-notched-outline-trailing-border-radius, 0 4px 4px 0)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}`;
//# sourceMappingURL=mwc-notched-outline-css.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-notched-outline/mwc-notched-outline.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material/mwc-notched-outline/mwc-notched-outline.js ***!
  \***************************************************************************/
/*! exports provided: NotchedOutline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotchedOutline", function() { return NotchedOutline; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _mwc_notched_outline_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mwc-notched-outline-base.js */ "./node_modules/@material/mwc-notched-outline/mwc-notched-outline-base.js");
/* harmony import */ var _mwc_notched_outline_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mwc-notched-outline-css.js */ "./node_modules/@material/mwc-notched-outline/mwc-notched-outline-css.js");

/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



let NotchedOutline = class NotchedOutline extends _mwc_notched_outline_base_js__WEBPACK_IMPORTED_MODULE_2__["NotchedOutlineBase"] {
};
NotchedOutline.styles = _mwc_notched_outline_css_js__WEBPACK_IMPORTED_MODULE_3__["style"];
NotchedOutline = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])('mwc-notched-outline')
], NotchedOutline);

//# sourceMappingURL=mwc-notched-outline.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-notched-outline/node_modules/@material/base/foundation.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@material/mwc-notched-outline/node_modules/@material/base/foundation.js ***!
  \**********************************************************************************************/
/*! exports provided: MDCFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFoundation", function() { return MDCFoundation; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = /** @class */ (function () {
    function MDCFoundation(adapter) {
        if (adapter === void 0) { adapter = {}; }
        this.adapter_ = adapter;
    }
    Object.defineProperty(MDCFoundation, "cssClasses", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "strings", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "numbers", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "defaultAdapter", {
        get: function () {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
        },
        enumerable: true,
        configurable: true
    });
    MDCFoundation.prototype.init = function () {
        // Subclasses should override this method to perform initialization routines (registering events, etc.)
    };
    MDCFoundation.prototype.destroy = function () {
        // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };
    return MDCFoundation;
}());

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-notched-outline/node_modules/@material/notched-outline/constants.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@material/mwc-notched-outline/node_modules/@material/notched-outline/constants.js ***!
  \********************************************************************************************************/
/*! exports provided: cssClasses, numbers, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
    NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch',
};
var numbers = {
    // This should stay in sync with $mdc-notched-outline-padding * 2.
    NOTCH_ELEMENT_PADDING: 8,
};
var cssClasses = {
    NO_LABEL: 'mdc-notched-outline--no-label',
    OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
    OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded',
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-notched-outline/node_modules/@material/notched-outline/foundation.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@material/mwc-notched-outline/node_modules/@material/notched-outline/foundation.js ***!
  \*********************************************************************************************************/
/*! exports provided: MDCNotchedOutlineFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCNotchedOutlineFoundation", function() { return MDCNotchedOutlineFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/mwc-notched-outline/node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/mwc-notched-outline/node_modules/@material/notched-outline/constants.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCNotchedOutlineFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCNotchedOutlineFoundation, _super);
    function MDCNotchedOutlineFoundation(adapter) {
        return _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCNotchedOutlineFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCNotchedOutlineFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "defaultAdapter", {
        /**
         * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                setNotchWidthProperty: function () { return undefined; },
                removeNotchWidthProperty: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds the outline notched selector and updates the notch width calculated based off of notchWidth.
     */
    MDCNotchedOutlineFoundation.prototype.notch = function (notchWidth) {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
        if (notchWidth > 0) {
            notchWidth += _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].NOTCH_ELEMENT_PADDING; // Add padding from left/right.
        }
        this.adapter_.setNotchWidthProperty(notchWidth);
        this.adapter_.addClass(OUTLINE_NOTCHED);
    };
    /**
     * Removes notched outline selector to close the notch in the outline.
     */
    MDCNotchedOutlineFoundation.prototype.closeNotch = function () {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
        this.adapter_.removeClass(OUTLINE_NOTCHED);
        this.adapter_.removeNotchWidthProperty();
    };
    return MDCNotchedOutlineFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCNotchedOutlineFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-ripple/mwc-ripple-global-css.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material/mwc-ripple/mwc-ripple-global-css.js ***!
  \********************************************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const style = lit_element__WEBPACK_IMPORTED_MODULE_0__["css"] `@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}`;
//# sourceMappingURL=mwc-ripple-global-css.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-ripple/node_modules/@material/base/foundation.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@material/mwc-ripple/node_modules/@material/base/foundation.js ***!
  \*************************************************************************************/
/*! exports provided: MDCFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFoundation", function() { return MDCFoundation; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = /** @class */ (function () {
    function MDCFoundation(adapter) {
        if (adapter === void 0) { adapter = {}; }
        this.adapter_ = adapter;
    }
    Object.defineProperty(MDCFoundation, "cssClasses", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "strings", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "numbers", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "defaultAdapter", {
        get: function () {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
        },
        enumerable: true,
        configurable: true
    });
    MDCFoundation.prototype.init = function () {
        // Subclasses should override this method to perform initialization routines (registering events, etc.)
    };
    MDCFoundation.prototype.destroy = function () {
        // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };
    return MDCFoundation;
}());

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-ripple/node_modules/@material/dom/events.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@material/mwc-ripple/node_modules/@material/dom/events.js ***!
  \********************************************************************************/
/*! exports provided: applyPassive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPassive", function() { return applyPassive; });
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */
function applyPassive(globalObj) {
    if (globalObj === void 0) { globalObj = window; }
    return supportsPassiveOption(globalObj) ?
        { passive: true } :
        false;
}
function supportsPassiveOption(globalObj) {
    if (globalObj === void 0) { globalObj = window; }
    // See
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    var passiveSupported = false;
    try {
        var options = {
            // This function will be called when the browser
            // attempts to access the passive property.
            get passive() {
                passiveSupported = true;
                return false;
            }
        };
        var handler = function () { };
        globalObj.document.addEventListener('test', handler, options);
        globalObj.document.removeEventListener('test', handler, options);
    }
    catch (err) {
        passiveSupported = false;
    }
    return passiveSupported;
}
//# sourceMappingURL=events.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-ripple/node_modules/@material/dom/ponyfill.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@material/mwc-ripple/node_modules/@material/dom/ponyfill.js ***!
  \**********************************************************************************/
/*! exports provided: closest, matches, estimateScrollWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateScrollWidth", function() { return estimateScrollWidth; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
    if (element.closest) {
        return element.closest(selector);
    }
    var el = element;
    while (el) {
        if (matches(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
function matches(element, selector) {
    var nativeMatches = element.matches
        || element.webkitMatchesSelector
        || element.msMatchesSelector;
    return nativeMatches.call(element, selector);
}
/**
 * Used to compute the estimated scroll width of elements. When an element is
 * hidden due to display: none; being applied to a parent element, the width is
 * returned as 0. However, the element will have a true width once no longer
 * inside a display: none context. This method computes an estimated width when
 * the element is hidden or returns the true width when the element is visble.
 * @param {Element} element the element whose width to estimate
 */
function estimateScrollWidth(element) {
    // Check the offsetParent. If the element inherits display: none from any
    // parent, the offsetParent property will be null (see
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent).
    // This check ensures we only clone the node when necessary.
    var htmlEl = element;
    if (htmlEl.offsetParent !== null) {
        return htmlEl.scrollWidth;
    }
    var clone = htmlEl.cloneNode(true);
    clone.style.setProperty('position', 'absolute');
    clone.style.setProperty('transform', 'translate(-9999px, -9999px)');
    document.documentElement.appendChild(clone);
    var scrollWidth = clone.scrollWidth;
    document.documentElement.removeChild(clone);
    return scrollWidth;
}
//# sourceMappingURL=ponyfill.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-ripple/node_modules/@material/ripple/constants.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@material/mwc-ripple/node_modules/@material/ripple/constants.js ***!
  \**************************************************************************************/
/*! exports provided: cssClasses, strings, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
    // given that it's an 'upgrade' to an existing component. That being said it is the root
    // CSS class that all other CSS classes derive from.
    BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
    FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
    FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
    ROOT: 'mdc-ripple-upgraded',
    UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
};
var strings = {
    VAR_FG_SCALE: '--mdc-ripple-fg-scale',
    VAR_FG_SIZE: '--mdc-ripple-fg-size',
    VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
    VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
    VAR_LEFT: '--mdc-ripple-left',
    VAR_TOP: '--mdc-ripple-top',
};
var numbers = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300,
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-ripple/node_modules/@material/ripple/foundation.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@material/mwc-ripple/node_modules/@material/ripple/foundation.js ***!
  \***************************************************************************************/
/*! exports provided: MDCRippleFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function() { return MDCRippleFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/mwc-ripple/node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/mwc-ripple/node_modules/@material/ripple/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./node_modules/@material/mwc-ripple/node_modules/@material/ripple/util.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = [
    'touchstart', 'pointerdown', 'mousedown', 'keydown',
];
// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = [
    'touchend', 'pointerup', 'mouseup', 'contextmenu',
];
// simultaneous nested activations
var activatedTargets = [];
var MDCRippleFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCRippleFoundation, _super);
    function MDCRippleFoundation(adapter) {
        var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCRippleFoundation.defaultAdapter, adapter)) || this;
        _this.activationAnimationHasEnded_ = false;
        _this.activationTimer_ = 0;
        _this.fgDeactivationRemovalTimer_ = 0;
        _this.fgScale_ = '0';
        _this.frame_ = { width: 0, height: 0 };
        _this.initialSize_ = 0;
        _this.layoutFrame_ = 0;
        _this.maxRadius_ = 0;
        _this.unboundedCoords_ = { left: 0, top: 0 };
        _this.activationState_ = _this.defaultActivationState_();
        _this.activationTimerCallback_ = function () {
            _this.activationAnimationHasEnded_ = true;
            _this.runDeactivationUXLogicIfReady_();
        };
        _this.activateHandler_ = function (e) { return _this.activate_(e); };
        _this.deactivateHandler_ = function () { return _this.deactivate_(); };
        _this.focusHandler_ = function () { return _this.handleFocus(); };
        _this.blurHandler_ = function () { return _this.handleBlur(); };
        _this.resizeHandler_ = function () { return _this.layout(); };
        return _this;
    }
    Object.defineProperty(MDCRippleFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                browserSupportsCssVars: function () { return true; },
                computeBoundingRect: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                containsEventTarget: function () { return true; },
                deregisterDocumentInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                deregisterResizeHandler: function () { return undefined; },
                getWindowPageOffset: function () { return ({ x: 0, y: 0 }); },
                isSurfaceActive: function () { return true; },
                isSurfaceDisabled: function () { return true; },
                isUnbounded: function () { return true; },
                registerDocumentInteractionHandler: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
                registerResizeHandler: function () { return undefined; },
                removeClass: function () { return undefined; },
                updateCssVariable: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCRippleFoundation.prototype.init = function () {
        var _this = this;
        var supportsPressRipple = this.supportsPressRipple_();
        this.registerRootHandlers_(supportsPressRipple);
        if (supportsPressRipple) {
            var _a = MDCRippleFoundation.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter_.addClass(ROOT_1);
                if (_this.adapter_.isUnbounded()) {
                    _this.adapter_.addClass(UNBOUNDED_1);
                    // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                    _this.layoutInternal_();
                }
            });
        }
    };
    MDCRippleFoundation.prototype.destroy = function () {
        var _this = this;
        if (this.supportsPressRipple_()) {
            if (this.activationTimer_) {
                clearTimeout(this.activationTimer_);
                this.activationTimer_ = 0;
                this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
            }
            if (this.fgDeactivationRemovalTimer_) {
                clearTimeout(this.fgDeactivationRemovalTimer_);
                this.fgDeactivationRemovalTimer_ = 0;
                this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
            }
            var _a = MDCRippleFoundation.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter_.removeClass(ROOT_2);
                _this.adapter_.removeClass(UNBOUNDED_2);
                _this.removeCssVars_();
            });
        }
        this.deregisterRootHandlers_();
        this.deregisterDeactivationHandlers_();
    };
    /**
     * @param evt Optional event containing position information.
     */
    MDCRippleFoundation.prototype.activate = function (evt) {
        this.activate_(evt);
    };
    MDCRippleFoundation.prototype.deactivate = function () {
        this.deactivate_();
    };
    MDCRippleFoundation.prototype.layout = function () {
        var _this = this;
        if (this.layoutFrame_) {
            cancelAnimationFrame(this.layoutFrame_);
        }
        this.layoutFrame_ = requestAnimationFrame(function () {
            _this.layoutInternal_();
            _this.layoutFrame_ = 0;
        });
    };
    MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
        var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
        if (unbounded) {
            this.adapter_.addClass(UNBOUNDED);
        }
        else {
            this.adapter_.removeClass(UNBOUNDED);
        }
    };
    MDCRippleFoundation.prototype.handleFocus = function () {
        var _this = this;
        requestAnimationFrame(function () {
            return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
    };
    MDCRippleFoundation.prototype.handleBlur = function () {
        var _this = this;
        requestAnimationFrame(function () {
            return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
    };
    /**
     * We compute this property so that we are not querying information about the client
     * until the point in time where the foundation requests it. This prevents scenarios where
     * client-side feature-detection may happen too early, such as when components are rendered on the server
     * and then initialized at mount time on the client.
     */
    MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
        return this.adapter_.browserSupportsCssVars();
    };
    MDCRippleFoundation.prototype.defaultActivationState_ = function () {
        return {
            activationEvent: undefined,
            hasDeactivationUXRun: false,
            isActivated: false,
            isProgrammatic: false,
            wasActivatedByPointer: false,
            wasElementMadeActive: false,
        };
    };
    /**
     * supportsPressRipple Passed from init to save a redundant function call
     */
    MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
        var _this = this;
        if (supportsPressRipple) {
            ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                _this.adapter_.registerInteractionHandler(evtType, _this.activateHandler_);
            });
            if (this.adapter_.isUnbounded()) {
                this.adapter_.registerResizeHandler(this.resizeHandler_);
            }
        }
        this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
        this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
    };
    MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
        var _this = this;
        if (evt.type === 'keydown') {
            this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
        }
        else {
            POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                _this.adapter_.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
            });
        }
    };
    MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
        var _this = this;
        ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter_.deregisterInteractionHandler(evtType, _this.activateHandler_);
        });
        this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
        this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
        if (this.adapter_.isUnbounded()) {
            this.adapter_.deregisterResizeHandler(this.resizeHandler_);
        }
    };
    MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
        var _this = this;
        this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter_.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
        });
    };
    MDCRippleFoundation.prototype.removeCssVars_ = function () {
        var _this = this;
        var rippleStrings = MDCRippleFoundation.strings;
        var keys = Object.keys(rippleStrings);
        keys.forEach(function (key) {
            if (key.indexOf('VAR_') === 0) {
                _this.adapter_.updateCssVariable(rippleStrings[key], null);
            }
        });
    };
    MDCRippleFoundation.prototype.activate_ = function (evt) {
        var _this = this;
        if (this.adapter_.isSurfaceDisabled()) {
            return;
        }
        var activationState = this.activationState_;
        if (activationState.isActivated) {
            return;
        }
        // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
        var previousActivationEvent = this.previousActivationEvent_;
        var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
        if (isSameInteraction) {
            return;
        }
        activationState.isActivated = true;
        activationState.isProgrammatic = evt === undefined;
        activationState.activationEvent = evt;
        activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
        var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) { return _this.adapter_.containsEventTarget(target); });
        if (hasActivatedChild) {
            // Immediately reset activation state, while preserving logic that prevents touch follow-on events
            this.resetActivationState_();
            return;
        }
        if (evt !== undefined) {
            activatedTargets.push(evt.target);
            this.registerDeactivationHandlers_(evt);
        }
        activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);
        if (activationState.wasElementMadeActive) {
            this.animateActivation_();
        }
        requestAnimationFrame(function () {
            // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
            activatedTargets = [];
            if (!activationState.wasElementMadeActive
                && evt !== undefined
                && (evt.key === ' ' || evt.keyCode === 32)) {
                // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                // active states inconsistently when they're called within event handling code:
                // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                // variable is set within a rAF callback for a submit button interaction (#2241).
                activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);
                if (activationState.wasElementMadeActive) {
                    _this.animateActivation_();
                }
            }
            if (!activationState.wasElementMadeActive) {
                // Reset activation state immediately if element was not made active.
                _this.activationState_ = _this.defaultActivationState_();
            }
        });
    };
    MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
        return (evt !== undefined && evt.type === 'keydown') ? this.adapter_.isSurfaceActive() : true;
    };
    MDCRippleFoundation.prototype.animateActivation_ = function () {
        var _this = this;
        var _a = MDCRippleFoundation.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
        var _b = MDCRippleFoundation.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
        var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal_();
        var translateStart = '';
        var translateEnd = '';
        if (!this.adapter_.isUnbounded()) {
            var _c = this.getFgTranslationCoordinates_(), startPoint = _c.startPoint, endPoint = _c.endPoint;
            translateStart = startPoint.x + "px, " + startPoint.y + "px";
            translateEnd = endPoint.x + "px, " + endPoint.y + "px";
        }
        this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
        this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
        // Cancel any ongoing activation/deactivation animations
        clearTimeout(this.activationTimer_);
        clearTimeout(this.fgDeactivationRemovalTimer_);
        this.rmBoundedActivationClasses_();
        this.adapter_.removeClass(FG_DEACTIVATION);
        // Force layout in order to re-trigger the animation.
        this.adapter_.computeBoundingRect();
        this.adapter_.addClass(FG_ACTIVATION);
        this.activationTimer_ = setTimeout(function () { return _this.activationTimerCallback_(); }, DEACTIVATION_TIMEOUT_MS);
    };
    MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
        var _a = this.activationState_, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
        var startPoint;
        if (wasActivatedByPointer) {
            startPoint = Object(_util__WEBPACK_IMPORTED_MODULE_3__["getNormalizedEventCoords"])(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
        }
        else {
            startPoint = {
                x: this.frame_.width / 2,
                y: this.frame_.height / 2,
            };
        }
        // Center the element around the start point.
        startPoint = {
            x: startPoint.x - (this.initialSize_ / 2),
            y: startPoint.y - (this.initialSize_ / 2),
        };
        var endPoint = {
            x: (this.frame_.width / 2) - (this.initialSize_ / 2),
            y: (this.frame_.height / 2) - (this.initialSize_ / 2),
        };
        return { startPoint: startPoint, endPoint: endPoint };
    };
    MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
        var _this = this;
        // This method is called both when a pointing device is released, and when the activation animation ends.
        // The deactivation animation should only run after both of those occur.
        var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
        var _a = this.activationState_, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
        var activationHasEnded = hasDeactivationUXRun || !isActivated;
        if (activationHasEnded && this.activationAnimationHasEnded_) {
            this.rmBoundedActivationClasses_();
            this.adapter_.addClass(FG_DEACTIVATION);
            this.fgDeactivationRemovalTimer_ = setTimeout(function () {
                _this.adapter_.removeClass(FG_DEACTIVATION);
            }, _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].FG_DEACTIVATION_MS);
        }
    };
    MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
        this.adapter_.removeClass(FG_ACTIVATION);
        this.activationAnimationHasEnded_ = false;
        this.adapter_.computeBoundingRect();
    };
    MDCRippleFoundation.prototype.resetActivationState_ = function () {
        var _this = this;
        this.previousActivationEvent_ = this.activationState_.activationEvent;
        this.activationState_ = this.defaultActivationState_();
        // Touch devices may fire additional events for the same interaction within a short time.
        // Store the previous event until it's safe to assume that subsequent events are for new interactions.
        setTimeout(function () { return _this.previousActivationEvent_ = undefined; }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    };
    MDCRippleFoundation.prototype.deactivate_ = function () {
        var _this = this;
        var activationState = this.activationState_;
        // This can happen in scenarios such as when you have a keyup event that blurs the element.
        if (!activationState.isActivated) {
            return;
        }
        var state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, activationState);
        if (activationState.isProgrammatic) {
            requestAnimationFrame(function () { return _this.animateDeactivation_(state); });
            this.resetActivationState_();
        }
        else {
            this.deregisterDeactivationHandlers_();
            requestAnimationFrame(function () {
                _this.activationState_.hasDeactivationUXRun = true;
                _this.animateDeactivation_(state);
                _this.resetActivationState_();
            });
        }
    };
    MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
        var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
        if (wasActivatedByPointer || wasElementMadeActive) {
            this.runDeactivationUXLogicIfReady_();
        }
    };
    MDCRippleFoundation.prototype.layoutInternal_ = function () {
        var _this = this;
        this.frame_ = this.adapter_.computeBoundingRect();
        var maxDim = Math.max(this.frame_.height, this.frame_.width);
        // Surface diameter is treated differently for unbounded vs. bounded ripples.
        // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
        // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
        // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
        // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
        // `overflow: hidden`.
        var getBoundedRadius = function () {
            var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
            return hypotenuse + MDCRippleFoundation.numbers.PADDING;
        };
        this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();
        // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
        var initialSize = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
        // Unbounded ripple size should always be even number to equally center align.
        if (this.adapter_.isUnbounded() && initialSize % 2 !== 0) {
            this.initialSize_ = initialSize - 1;
        }
        else {
            this.initialSize_ = initialSize;
        }
        this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
        this.updateLayoutCssVars_();
    };
    MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
        var _a = MDCRippleFoundation.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
        this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
        this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);
        if (this.adapter_.isUnbounded()) {
            this.unboundedCoords_ = {
                left: Math.round((this.frame_.width / 2) - (this.initialSize_ / 2)),
                top: Math.round((this.frame_.height / 2) - (this.initialSize_ / 2)),
            };
            this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
            this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
        }
    };
    return MDCRippleFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCRippleFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-ripple/node_modules/@material/ripple/util.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@material/mwc-ripple/node_modules/@material/ripple/util.js ***!
  \*********************************************************************************/
/*! exports provided: supportsCssVariables, getNormalizedEventCoords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsCssVariables", function() { return supportsCssVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNormalizedEventCoords", function() { return getNormalizedEventCoords; });
/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
var supportsCssVariables_;
function supportsCssVariables(windowObj, forceRefresh) {
    if (forceRefresh === void 0) { forceRefresh = false; }
    var CSS = windowObj.CSS;
    var supportsCssVars = supportsCssVariables_;
    if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
        return supportsCssVariables_;
    }
    var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';
    if (!supportsFunctionPresent) {
        return false;
    }
    var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes');
    // See: https://bugs.webkit.org/show_bug.cgi?id=154669
    // See: README section on Safari
    var weAreFeatureDetectingSafari10plus = (CSS.supports('(--css-vars: yes)') &&
        CSS.supports('color', '#00000000'));
    supportsCssVars =
        explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
    if (!forceRefresh) {
        supportsCssVariables_ = supportsCssVars;
    }
    return supportsCssVars;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
    if (!evt) {
        return { x: 0, y: 0 };
    }
    var x = pageOffset.x, y = pageOffset.y;
    var documentX = x + clientRect.left;
    var documentY = y + clientRect.top;
    var normalizedX;
    var normalizedY;
    // Determine touch point relative to the ripple container.
    if (evt.type === 'touchstart') {
        var touchEvent = evt;
        normalizedX = touchEvent.changedTouches[0].pageX - documentX;
        normalizedY = touchEvent.changedTouches[0].pageY - documentY;
    }
    else {
        var mouseEvent = evt;
        normalizedX = mouseEvent.pageX - documentX;
        normalizedY = mouseEvent.pageY - documentY;
    }
    return { x: normalizedX, y: normalizedY };
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-ripple/ripple-directive.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material/mwc-ripple/ripple-directive.js ***!
  \***************************************************************/
/*! exports provided: rippleNode, ripple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rippleNode", function() { return rippleNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ripple", function() { return ripple; });
/* harmony import */ var _material_dom_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/dom/events */ "./node_modules/@material/mwc-ripple/node_modules/@material/dom/events.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/mwc-ripple/node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _material_ripple_foundation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/ripple/foundation.js */ "./node_modules/@material/mwc-ripple/node_modules/@material/ripple/foundation.js");
/* harmony import */ var _material_ripple_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/ripple/util.js */ "./node_modules/@material/mwc-ripple/node_modules/@material/ripple/util.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/* harmony import */ var _mwc_ripple_global_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mwc-ripple-global-css.js */ "./node_modules/@material/mwc-ripple/mwc-ripple-global-css.js");
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/






const supportsCssVariablesWin = Object(_material_ripple_util_js__WEBPACK_IMPORTED_MODULE_3__["supportsCssVariables"])(window);
// NOTE: This is a workaround for
// https://bugs.webkit.org/show_bug.cgi?id=173027. Since keyframes on
// pseudo-elements (:after) are not supported in Shadow DOM, we put the keyframe
// style into the <head> element.
const isSafari = navigator.userAgent.match(/Safari/);
let didApplyRippleStyle = false;
const applyRippleStyle = () => {
    didApplyRippleStyle = true;
    const styleElement = document.createElement('style');
    const part = new lit_html__WEBPACK_IMPORTED_MODULE_4__["NodePart"]({ templateFactory: lit_html__WEBPACK_IMPORTED_MODULE_4__["templateFactory"] });
    part.appendInto(styleElement);
    part.setValue(_mwc_ripple_global_css_js__WEBPACK_IMPORTED_MODULE_5__["style"]);
    part.commit();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.head.appendChild(styleElement);
};
/**
 * Applied a ripple to the node specified by {surfaceNode}.
 * @param options {RippleNodeOptions}
 */
const rippleNode = (options) => {
    if (isSafari && !didApplyRippleStyle) {
        applyRippleStyle();
    }
    // TODO(sorvell): This directive requires bringing css yourself. We probably
    // need to do this because of ShadyCSS, but on Safari, the keyframes styling
    // must be global. Perhaps this directive could fix that.
    const surfaceNode = options.surfaceNode;
    const interactionNode = options.interactionNode || surfaceNode;
    // only style interaction node if not in the same root
    if (interactionNode.getRootNode() !== surfaceNode.getRootNode()) {
        if (interactionNode.style.position === '') {
            interactionNode.style.position = 'relative';
        }
    }
    const adapter = {
        browserSupportsCssVars: () => supportsCssVariablesWin,
        isUnbounded: () => options.unbounded === undefined ? true : options.unbounded,
        isSurfaceActive: () => Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_1__["matches"])(interactionNode, ':active'),
        isSurfaceDisabled: () => Boolean(interactionNode.hasAttribute('disabled')),
        addClass: (className) => surfaceNode.classList.add(className),
        removeClass: (className) => surfaceNode.classList.remove(className),
        containsEventTarget: (target) => interactionNode.contains(target),
        registerInteractionHandler: (type, handler) => interactionNode.addEventListener(type, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_0__["applyPassive"])()),
        deregisterInteractionHandler: (type, handler) => interactionNode.removeEventListener(type, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_0__["applyPassive"])()),
        registerDocumentInteractionHandler: (evtType, handler) => 
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        document.documentElement.addEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_0__["applyPassive"])()),
        deregisterDocumentInteractionHandler: (evtType, handler) => 
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        document.documentElement.removeEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_0__["applyPassive"])()),
        registerResizeHandler: (handler) => window.addEventListener('resize', handler),
        deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
        updateCssVariable: (varName, value) => surfaceNode.style.setProperty(varName, value),
        computeBoundingRect: () => surfaceNode.getBoundingClientRect(),
        getWindowPageOffset: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
    };
    const rippleFoundation = new _material_ripple_foundation_js__WEBPACK_IMPORTED_MODULE_2__["default"](adapter);
    rippleFoundation.init();
    return rippleFoundation;
};
const rippleInteractionNodes = new WeakMap();
/**
 * A directive that applies a Material ripple to a part node. The directive
 * should be applied to a PropertyPart.
 * @param options {RippleOptions}
 */
const ripple = Object(lit_html__WEBPACK_IMPORTED_MODULE_4__["directive"])((options = {}) => (part) => {
    const surfaceNode = part.committer.element;
    const interactionNode = options.interactionNode || surfaceNode;
    let rippleFoundation = part.value;
    // if the interaction node changes, destroy and invalidate the foundation.
    const existingInteractionNode = rippleInteractionNodes.get(rippleFoundation);
    if (existingInteractionNode !== undefined &&
        existingInteractionNode !== interactionNode) {
        rippleFoundation.destroy();
        rippleFoundation = lit_html__WEBPACK_IMPORTED_MODULE_4__["noChange"];
    }
    // make the ripple, if needed
    if (rippleFoundation === lit_html__WEBPACK_IMPORTED_MODULE_4__["noChange"]) {
        rippleFoundation =
            rippleNode(Object.assign({}, options, { surfaceNode }));
        rippleInteractionNodes.set(rippleFoundation, interactionNode);
        part.setValue(rippleFoundation);
        // otherwise update settings as needed.
    }
    else {
        if (options.unbounded !== undefined) {
            rippleFoundation
                .setUnbounded(options.unbounded);
        }
        if (options.disabled !== undefined) {
            rippleFoundation
                .setUnbounded(options.disabled);
        }
    }
    if (options.active === true) {
        rippleFoundation.activate();
    }
    else if (options.active === false) {
        rippleFoundation.deactivate();
    }
});
//# sourceMappingURL=ripple-directive.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-select/mwc-select-base.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material/mwc-select/mwc-select-base.js ***!
  \**************************************************************/
/*! exports provided: SelectBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBase", function() { return SelectBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_mwc_notched_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-notched-outline */ "./node_modules/@material/mwc-notched-outline/mwc-notched-outline.js");
/* harmony import */ var _material_mwc_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-menu */ "./node_modules/@material/mwc-menu/mwc-menu.js");
/* harmony import */ var _material_mwc_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/mwc-icon */ "./node_modules/@material/mwc-icon/mwc-icon.js");
/* harmony import */ var _material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/mwc-base/form-element.js */ "./node_modules/@material/mwc-base/form-element.js");
/* harmony import */ var _material_mwc_base_observer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/mwc-base/observer.js */ "./node_modules/@material/mwc-base/observer.js");
/* harmony import */ var _material_mwc_floating_label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/mwc-floating-label */ "./node_modules/@material/mwc-floating-label/mwc-floating-label-directive.js");
/* harmony import */ var _material_mwc_line_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material/mwc-line-ripple */ "./node_modules/@material/mwc-line-ripple/mwc-line-ripple-directive.js");
/* harmony import */ var _material_select_foundation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material/select/foundation.js */ "./node_modules/@material/select/foundation.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lit-html/directives/class-map.js */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var lit_html_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lit-html/directives/if-defined.js */ "./node_modules/lit-html/directives/if-defined.js");

/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/











const createValidityObj = (customValidity = {}) => {
    /*
     * We need to make ValidityState an object because it is readonly and
     * we cannot use the spread operator. Also, we don't export
     * `CustomValidityState` because it is a leaky implementation and the user
     * already has access to `ValidityState` in lib.dom.ts. Also an interface
     * {a: Type} can be casted to {readonly a: Type} so passing any object
     * should be fine.
     */
    const objectifiedCustomValidity = {};
    // eslint-disable-next-line guard-for-in
    for (const propName in customValidity) {
        /*
         * Casting is needed because ValidityState's props are all readonly and
         * thus cannot be set on `onjectifiedCustomValidity`. In the end, the
         * interface is the same as ValidityState (but not readonly), but the
         * function signature casts the output to ValidityState (thus readonly).
         */
        objectifiedCustomValidity[propName] =
            customValidity[propName];
    }
    return Object.assign({ badInput: false, customError: false, patternMismatch: false, rangeOverflow: false, rangeUnderflow: false, stepMismatch: false, tooLong: false, tooShort: false, typeMismatch: false, valid: true, valueMissing: false }, objectifiedCustomValidity);
};
/**
 * @fires selected {SelectedDetail}
 * @fires action {ActionDetail}
 * @fires opened
 * @fires closed
 * @fires change
 * @fires invalid
 */
class SelectBase extends _material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_4__["FormElement"] {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = _material_select_foundation_js__WEBPACK_IMPORTED_MODULE_8__["default"];
        this.disabled = false;
        this.outlined = false;
        this.label = '';
        this.outlineOpen = false;
        this.outlineWidth = 0;
        this.value = '';
        this.selectedText = '';
        this.icon = '';
        this.menuOpen = false;
        this.helper = '';
        this.helperPersistent = false;
        this.validateOnInitialRender = false;
        this.validationMessage = '';
        this.required = false;
        this.naturalWidth = false;
        this.isUiValid = true;
        this.listeners = [];
        this.onBodyClickBound = () => undefined;
        this._menuUpdateComplete = null;
        this.renderReady = false;
        this.valueSetDirectly = false;
        this.validityTransform = null;
        this._validity = createValidityObj();
    }
    get items() {
        const menuElement = this.menuElement;
        if (menuElement) {
            return menuElement.items;
        }
        return [];
    }
    get selected() {
        const menuElement = this.menuElement;
        if (menuElement) {
            return menuElement.selected;
        }
        return null;
    }
    get index() {
        const menuElement = this.menuElement;
        if (menuElement) {
            return menuElement.index;
        }
        return -1;
    }
    get shouldRenderHelperText() {
        return !!this.helper || !!this.validationMessage;
    }
    get validity() {
        this._checkValidity(this.value);
        return this._validity;
    }
    render() {
        let outlinedOrUnderlined = lit_element__WEBPACK_IMPORTED_MODULE_9__["html"] ``;
        if (this.outlined) {
            outlinedOrUnderlined = this.renderOutlined();
        }
        else {
            outlinedOrUnderlined = this.renderUnderlined();
        }
        const classes = {
            'mdc-select--disabled': this.disabled,
            'mdc-select--no-label': !this.label,
            'mdc-select--outlined': this.outlined,
            'mdc-select--with-leading-icon': !!this.icon,
            'mdc-select--required': this.required,
            'mdc-select--invalid': !this.isUiValid,
        };
        const describedby = this.shouldRenderHelperText ? 'helper-text' : undefined;
        return lit_element__WEBPACK_IMPORTED_MODULE_9__["html"] `
      <div class="mdc-select ${Object(lit_html_directives_class_map_js__WEBPACK_IMPORTED_MODULE_10__["classMap"])(classes)}">
        <input
            class="formElement"
            .value=${this.value}
            hidden
            ?required=${this.required}>
        ${this.icon ? this.renderIcon(this.icon) : ''}
        <div class="mdc-select__anchor" @click=${this.onClick}>
          <i class="mdc-select__dropdown-icon">
            <svg
                width="10px"
                height="5px"
                viewBox="7 10 10 5"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
              <polygon
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 10 12 15 17 10">
              </polygon>
            </svg>
          </i>
          <!-- @ts-ignore -->
          <div
              class="mdc-select__selected-text"
              role="button"
              aria-invalid=${!this.isUiValid}
              aria-haspopup="listbox"
              aria-labelledby="label"
              aria-required=${this.required}
              aria-describedby=${Object(lit_html_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_11__["ifDefined"])(describedby)}
              @focus=${this.onFocus}
              @blur=${this.onBlur}
              @keydown=${this.onKeydown}>
            ${this.selectedText}
          </div>
          ${outlinedOrUnderlined}
        </div>
        ${this.renderHelperText()}
        <mwc-menu
            innerRole="listbox"
            wrapFocus
            class="mdc-select__menu mdc-menu mdc-menu-surface"
            activatable
            .fullwidth=${!this.naturalWidth}
            .open=${this.menuOpen}
            .anchor=${this.anchorElement}
            @selected=${this.onSelected}
            @opened=${this.onOpened}
            @closed=${this.onClosed}>
          <slot></slot>
        </mwc-menu>
      </div>`;
    }
    renderHelperText() {
        const showValidationMessage = this.validationMessage && !this.isUiValid;
        const classes = {
            'mdc-select-helper-text--persistent': this.helperPersistent || showValidationMessage,
            'mdc-select-helper-text--validation-msg': showValidationMessage,
            'hidden': !this.shouldRenderHelperText,
        };
        return lit_element__WEBPACK_IMPORTED_MODULE_9__["html"] `
        <p class="mdc-select-helper-text ${Object(lit_html_directives_class_map_js__WEBPACK_IMPORTED_MODULE_10__["classMap"])(classes)}" id="helper-text">
          ${showValidationMessage ? this.validationMessage : this.helper}
        </p>`;
    }
    renderOutlined() {
        let labelTemplate = '';
        if (this.label) {
            labelTemplate = this.renderLabel();
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_9__["html"] `
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${labelTemplate}
      </mwc-notched-outline>`;
    }
    renderUnderlined() {
        let labelTemplate = '';
        if (this.label) {
            labelTemplate = this.renderLabel();
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_9__["html"] `
      ${labelTemplate}
      <div .lineRippleFoundation=${Object(_material_mwc_line_ripple__WEBPACK_IMPORTED_MODULE_7__["lineRipple"])()}></div>
    `;
    }
    renderLabel() {
        return lit_element__WEBPACK_IMPORTED_MODULE_9__["html"] `
      <label
          .floatingLabelFoundation=${Object(_material_mwc_floating_label__WEBPACK_IMPORTED_MODULE_6__["floatingLabel"])(this.label)}
          @labelchange=${this.onLabelChange}
          id="label">
        ${this.label}
      </label>
    `;
    }
    renderIcon(icon) {
        return lit_element__WEBPACK_IMPORTED_MODULE_9__["html"] `<mwc-icon class="mdc-select__icon"><div>${icon}</div></mwc-icon>`;
    }
    createAdapter() {
        return Object.assign(Object.assign({}, Object(_material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_4__["addHasRemoveClass"])(this.mdcRoot)), { activateBottomLine: () => {
                if (this.lineRippleElement) {
                    this.lineRippleElement.lineRippleFoundation.activate();
                }
            }, deactivateBottomLine: () => {
                if (this.lineRippleElement) {
                    this.lineRippleElement.lineRippleFoundation.deactivate();
                }
            }, getSelectedMenuItem: () => {
                const menuElement = this.menuElement;
                if (!menuElement) {
                    return null;
                }
                return menuElement.selected;
            }, hasLabel: () => {
                return !!this.label;
            }, floatLabel: (shouldFloat) => {
                if (this.labelElement) {
                    this.labelElement.floatingLabelFoundation.float(shouldFloat);
                }
            }, getLabelWidth: () => {
                if (this.labelElement) {
                    return this.labelElement.floatingLabelFoundation.getWidth();
                }
                return 0;
            }, hasOutline: () => this.outlined, notchOutline: (labelWidth) => {
                const outlineElement = this.outlineElement;
                if (outlineElement && !this.outlineOpen) {
                    this.outlineWidth = labelWidth;
                    this.outlineOpen = true;
                }
            }, closeOutline: () => {
                if (this.outlineElement) {
                    this.outlineOpen = false;
                }
            }, setRippleCenter: (normalizedX) => {
                if (this.lineRippleElement) {
                    const foundation = this.lineRippleElement.lineRippleFoundation;
                    foundation.setRippleCenter(normalizedX);
                }
            }, notifyChange: async (value) => {
                if (!this.valueSetDirectly && value === this.value) {
                    return;
                }
                this.valueSetDirectly = false;
                this.value = value;
                await this.updateComplete;
                const ev = new Event('change', { bubbles: true });
                this.dispatchEvent(ev);
            }, setSelectedText: (value) => this.selectedText = value, isSelectedTextFocused: () => {
                const selectedTextElement = this.selectedTextElement;
                if (!selectedTextElement) {
                    return false;
                }
                const rootNode = selectedTextElement.getRootNode();
                return rootNode.activeElement === selectedTextElement;
            }, getSelectedTextAttr: (attr) => {
                const selectedTextElement = this.selectedTextElement;
                if (!selectedTextElement) {
                    return null;
                }
                return selectedTextElement.getAttribute(attr);
            }, setSelectedTextAttr: (attr, value) => {
                const selectedTextElement = this.selectedTextElement;
                if (!selectedTextElement) {
                    return;
                }
                return selectedTextElement.setAttribute(attr, value);
            }, openMenu: () => {
                this.menuOpen = true;
            }, closeMenu: () => {
                this.menuOpen = false;
            }, getAnchorElement: () => this.anchorElement, setMenuAnchorElement: () => {
                /* Handled by anchor directive */
            }, setMenuAnchorCorner: () => {
                const menuElement = this.menuElement;
                if (menuElement) {
                    menuElement.corner = 'BOTTOM_START';
                }
            }, setMenuWrapFocus: (wrapFocus) => {
                const menuElement = this.menuElement;
                if (menuElement) {
                    menuElement.wrapFocus = wrapFocus;
                }
            }, setAttributeAtIndex: () => undefined, removeAttributeAtIndex: () => undefined, focusMenuItemAtIndex: (index) => {
                const menuElement = this.menuElement;
                if (!menuElement) {
                    return;
                }
                const element = menuElement.items[index];
                if (!element) {
                    return;
                }
                element.focus();
            }, getMenuItemCount: () => {
                const menuElement = this.menuElement;
                if (menuElement) {
                    return menuElement.items.length;
                }
                return 0;
            }, getMenuItemValues: () => {
                const menuElement = this.menuElement;
                if (!menuElement) {
                    return [];
                }
                const items = menuElement.items;
                return items.map((item) => item.value);
            }, getMenuItemTextAtIndex: (index) => {
                const menuElement = this.menuElement;
                if (!menuElement) {
                    return '';
                }
                const element = menuElement.items[index];
                if (!element) {
                    return '';
                }
                return element.text;
            }, getMenuItemAttr: (menuItem) => {
                const listItem = menuItem;
                return listItem.value;
            }, addClassAtIndex: () => undefined, removeClassAtIndex: () => undefined });
    }
    checkValidity() {
        const isValid = this._checkValidity(this.value);
        if (!isValid) {
            const invalidEvent = new Event('invalid', { bubbles: false, cancelable: true });
            this.dispatchEvent(invalidEvent);
        }
        return isValid;
    }
    reportValidity() {
        const isValid = this.checkValidity();
        this.isUiValid = isValid;
        return isValid;
    }
    _checkValidity(value) {
        const nativeValidity = this.formElement.validity;
        let validity = createValidityObj(nativeValidity);
        if (this.validityTransform) {
            const customValidity = this.validityTransform(value, validity);
            validity = Object.assign(Object.assign({}, validity), customValidity);
        }
        this._validity = validity;
        return this._validity.valid;
    }
    setCustomValidity(message) {
        this.validationMessage = message;
        this.formElement.setCustomValidity(message);
    }
    async _getUpdateComplete() {
        await this._menuUpdateComplete;
        await super._getUpdateComplete();
    }
    async firstUpdated() {
        const menuElement = this.menuElement;
        if (menuElement) {
            this._menuUpdateComplete = menuElement.updateComplete;
            await this._menuUpdateComplete;
        }
        super.firstUpdated();
        this.mdcFoundation.isValid = () => true;
        this.mdcFoundation.setValid = () => undefined;
        this.mdcFoundation.setDisabled(this.disabled);
        if (this.validateOnInitialRender) {
            this.reportValidity();
        }
        // init with value set
        if (this.value && !this.selected) {
            if (!this.items.length && this.slotElement &&
                this.slotElement.assignedNodes({ flatten: true }).length) {
                // Shady DOM initial render fix
                await new Promise((res) => requestAnimationFrame(res));
                await this.layout();
            }
            this.selectByValue(this.value);
        }
        this.renderReady = true;
    }
    select(index) {
        const menuElement = this.menuElement;
        if (menuElement) {
            menuElement.select(index);
        }
    }
    selectByValue(value) {
        let indexToSelect = -1;
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            if (item.value === value) {
                indexToSelect = i;
                break;
            }
        }
        this.valueSetDirectly = true;
        this.select(indexToSelect);
        this.mdcFoundation.handleChange();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        for (const listener of this.listeners) {
            listener.target.removeEventListener(listener.name, listener.cb);
        }
    }
    focus() {
        const focusEvt = new CustomEvent('focus');
        const selectedTextElement = this.selectedTextElement;
        if (selectedTextElement) {
            selectedTextElement.dispatchEvent(focusEvt);
            selectedTextElement.focus();
        }
    }
    blur() {
        const focusEvt = new CustomEvent('blur');
        const selectedTextElement = this.selectedTextElement;
        if (selectedTextElement) {
            selectedTextElement.dispatchEvent(focusEvt);
            selectedTextElement.blur();
        }
    }
    onFocus() {
        if (this.mdcFoundation) {
            this.mdcFoundation.handleFocus();
        }
    }
    onBlur() {
        if (this.mdcFoundation) {
            this.mdcFoundation.handleBlur();
        }
        const menuElement = this.menuElement;
        if (menuElement && !menuElement.open) {
            this.reportValidity();
        }
    }
    onClick(evt) {
        if (this.mdcFoundation) {
            this.focus();
            const targetClientRect = evt.target.getBoundingClientRect();
            let xCoord = 0;
            if ('touches' in evt) {
                xCoord = evt.touches[0].clientX;
            }
            else {
                xCoord = evt.clientX;
            }
            const normalizedX = xCoord - targetClientRect.left;
            this.mdcFoundation.handleClick(normalizedX);
        }
    }
    onKeydown(evt) {
        if (this.mdcFoundation) {
            this.mdcFoundation.handleKeydown(evt);
        }
    }
    onSelected(evt) {
        if (this.mdcFoundation) {
            this.mdcFoundation.handleMenuItemAction(evt.detail.index);
        }
    }
    onOpened() {
        if (this.mdcFoundation) {
            this.menuOpen = true;
            this.mdcFoundation.handleMenuOpened();
        }
    }
    onClosed() {
        if (this.mdcFoundation) {
            this.menuOpen = false;
            this.mdcFoundation.handleMenuClosed();
        }
    }
    async onLabelChange() {
        if (this.label) {
            await this.layout(false);
        }
    }
    async layout(updateItems = true) {
        if (this.mdcFoundation) {
            this.mdcFoundation.layout();
        }
        await this.updateComplete;
        const labelElement = this.labelElement;
        if (labelElement && this.outlineElement) {
            /* When the textfield automatically notches due to a value and label
             * being defined, the textfield may be set to `display: none` by the user.
             * this means that the notch is of size 0px. We provide this function so
             * that the user may manually resize the notch to the floated label's
             * width.
             */
            if (this.outlineOpen) {
                const labelWidth = labelElement.floatingLabelFoundation.getWidth();
                this.outlineWidth = labelWidth;
            }
        }
        const menuElement = this.menuElement;
        if (menuElement) {
            menuElement.layout(updateItems);
        }
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["query"])('.mdc-select')
], SelectBase.prototype, "mdcRoot", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["query"])('.formElement')
], SelectBase.prototype, "formElement", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["query"])('slot')
], SelectBase.prototype, "slotElement", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["query"])('select')
], SelectBase.prototype, "nativeSelectElement", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["query"])('input')
], SelectBase.prototype, "nativeInputElement", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["query"])('.mdc-line-ripple')
], SelectBase.prototype, "lineRippleElement", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["query"])('.mdc-floating-label')
], SelectBase.prototype, "labelElement", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["query"])('mwc-notched-outline')
], SelectBase.prototype, "outlineElement", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["query"])('.mdc-menu')
], SelectBase.prototype, "menuElement", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["query"])('.mdc-select__selected-text')
], SelectBase.prototype, "selectedTextElement", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["query"])('.mdc-select__anchor')
], SelectBase.prototype, "anchorElement", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ type: Boolean, attribute: 'disabled', reflect: true }),
    Object(_material_mwc_base_observer_js__WEBPACK_IMPORTED_MODULE_5__["observer"])(function (value) {
        if (this.renderReady) {
            this.mdcFoundation.setDisabled(value);
        }
    })
], SelectBase.prototype, "disabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ type: Boolean })
], SelectBase.prototype, "outlined", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ type: String })
], SelectBase.prototype, "label", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ type: Boolean })
], SelectBase.prototype, "outlineOpen", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ type: Number })
], SelectBase.prototype, "outlineWidth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ type: String }),
    Object(_material_mwc_base_observer_js__WEBPACK_IMPORTED_MODULE_5__["observer"])(function (value) {
        if (this.mdcFoundation) {
            const initialization = this.selected === null && !!value;
            const valueSetByUser = this.selected && this.selected.value !== value;
            if (initialization || valueSetByUser) {
                this.selectByValue(value);
            }
            this.reportValidity();
        }
    })
], SelectBase.prototype, "value", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ type: String })
], SelectBase.prototype, "selectedText", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ type: String })
], SelectBase.prototype, "icon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ type: Boolean })
], SelectBase.prototype, "menuOpen", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ type: String })
], SelectBase.prototype, "helper", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ type: Boolean })
], SelectBase.prototype, "helperPersistent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ type: Boolean })
], SelectBase.prototype, "validateOnInitialRender", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ type: String })
], SelectBase.prototype, "validationMessage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ type: Boolean })
], SelectBase.prototype, "required", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ type: Boolean })
], SelectBase.prototype, "naturalWidth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ type: Boolean })
], SelectBase.prototype, "isUiValid", void 0);
//# sourceMappingURL=mwc-select-base.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-select/mwc-select-css.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/mwc-select/mwc-select-css.js ***!
  \*************************************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const style = lit_element__WEBPACK_IMPORTED_MODULE_0__["css"] `@keyframes mdc-select-float-native-control{0%{transform:translateY(8px);opacity:0}100%{transform:translateY(0);opacity:1}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / .75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{padding:0}.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-select--with-leading-icon:not(.mdc-select--disabled) .mdc-select__icon{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;position:absolute;bottom:16px;box-sizing:border-box;width:24px;height:24px;border:none;background-color:transparent;fill:currentColor;opacity:.54;text-decoration:none;cursor:pointer;user-select:none}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-select-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;will-change:opacity}.mdc-select-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-select-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-select{position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__anchor{background-color:#f5f5f5}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0,0,0,.87)}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:rgba(0,0,0,.6)}.mdc-select:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0,0,0,.42)}.mdc-select:not(.mdc-select--disabled) .mdc-select__anchor+.mdc-select-helper-text{color:rgba(0,0,0,.6)}.mdc-select .mdc-select__anchor{border-radius:4px 4px 0 0}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:rgba(98,0,238,.87)}.mdc-select:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0,0,0,.87)}.mdc-select .mdc-floating-label{left:16px;right:initial;top:21px;pointer-events:none}[dir=rtl] .mdc-select .mdc-floating-label,.mdc-select .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-select.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-select.mdc-select--outlined .mdc-floating-label{left:4px;right:initial;top:17px}[dir=rtl] .mdc-select.mdc-select--outlined .mdc-floating-label,.mdc-select.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{left:36px;right:initial}[dir=rtl] .mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above,.mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above[dir=rtl]{left:initial;right:36px}.mdc-select__dropdown-icon{background:url("data:image/svg+xml,%3Csvg%20width%3D%2210px%22%20height%3D%225px%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%23000%22%20fill-rule%3D%22evenodd%22%20opacity%3D%220.54%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E") no-repeat center;left:auto;right:8px;position:absolute;bottom:16px;width:24px;height:24px;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}[dir=rtl] .mdc-select__dropdown-icon,.mdc-select__dropdown-icon[dir=rtl]{left:8px;right:auto}.mdc-select--focused .mdc-select__dropdown-icon{background:url("data:image/svg+xml,%3Csvg%20width%3D%2210px%22%20height%3D%225px%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%236200ee%22%20fill-rule%3D%22evenodd%22%20opacity%3D%221%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E") no-repeat center}.mdc-select--activated .mdc-select__dropdown-icon{transform:rotate(180deg) translateY(-5px);transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-select__anchor{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-flex;position:relative;box-sizing:border-box;height:56px;overflow:hidden;will-change:opacity,transform,color}.mdc-select__anchor::before,.mdc-select__anchor::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-select__anchor::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-select__anchor.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-select__anchor.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-select__anchor.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor::before,.mdc-select__anchor::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-select__anchor.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-select__anchor::before,.mdc-select__anchor::after{background-color:rgba(0,0,0,.87)}.mdc-select__anchor:hover::before{opacity:.04}.mdc-select__anchor.mdc-ripple-upgraded--background-focused::before,.mdc-select__anchor:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-70%) scale(0.75)}.mdc-select__anchor.mdc-select--focused .mdc-line-ripple::after{transform:scale(1, 2);opacity:1}.mdc-select__anchor+.mdc-select-helper-text{margin-right:12px;margin-left:12px}.mdc-select--outlined .mdc-select__anchor+.mdc-select-helper-text{margin-right:16px;margin-left:16px}.mdc-select--focused .mdc-select__anchor+.mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg){opacity:1}.mdc-select__selected-text{padding-left:16px;padding-right:52px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);box-sizing:border-box;width:100%;min-width:200px;height:56px;padding-top:20px;padding-bottom:4px;border:none;outline:none;background-color:transparent;color:inherit;white-space:nowrap;cursor:pointer;appearance:none}[dir=rtl] .mdc-select__selected-text,.mdc-select__selected-text[dir=rtl]{padding-left:52px;padding-right:16px}.mdc-select__selected-text::-ms-expand{display:none}.mdc-select__selected-text::-ms-value{background-color:transparent;color:inherit}@-moz-document url-prefix(""){.mdc-select__selected-text{text-indent:-2px}}.mdc-select--outlined{border:none}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.38)}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.87)}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-radius:4px 0 0 4px}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-radius:0 4px 4px 0}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-radius:0 4px 4px 0}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-radius:4px 0 0 4px}.mdc-select--outlined .mdc-select__selected-text{border-radius:4px}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined .mdc-select__anchor{overflow:visible}.mdc-select--outlined .mdc-select__anchor::before,.mdc-select--outlined .mdc-select__anchor::after{content:none}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-144%) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-130%) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__selected-text{padding-left:16px;padding-right:52px;display:flex;padding-top:14px;padding-bottom:12px;border:none;background-color:transparent;z-index:1}[dir=rtl] .mdc-select--outlined .mdc-select__selected-text,.mdc-select--outlined .mdc-select__selected-text[dir=rtl]{padding-left:52px;padding-right:16px}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem;pointer-events:auto}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#b00020}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid .mdc-select__anchor+.mdc-select-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid .mdc-select__dropdown-icon{background:url("data:image/svg+xml,%3Csvg%20width%3D%2210px%22%20height%3D%225px%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%23b00020%22%20fill-rule%3D%22evenodd%22%20opacity%3D%221%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E") no-repeat center}.mdc-select--invalid+.mdc-select-helper-text--validation-msg{opacity:1}.mdc-select--required .mdc-floating-label::after{content:"*"}.mdc-select--disabled{cursor:default;pointer-events:none}.mdc-select--disabled .mdc-select__anchor{background-color:#fafafa}.mdc-select--disabled .mdc-floating-label{color:rgba(0,0,0,.38)}.mdc-select--disabled .mdc-select__dropdown-icon{background:url("data:image/svg+xml,%3Csvg%20width%3D%2210px%22%20height%3D%225px%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%23000%22%20fill-rule%3D%22evenodd%22%20opacity%3D%220.38%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E") no-repeat center}.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0,0,0,.38)}.mdc-select--disabled .mdc-line-ripple::before{border-bottom-style:dotted}.mdc-select--disabled .mdc-select__icon{color:rgba(0,0,0,.38)}.mdc-select--disabled .mdc-select__selected-text{color:rgba(0,0,0,.38);pointer-events:none}.mdc-select--disabled.mdc-select--outlined .mdc-select__anchor{background-color:transparent}.mdc-select--disabled.mdc-select--outlined .mdc-notched-outline__leading,.mdc-select--disabled.mdc-select--outlined .mdc-notched-outline__notch,.mdc-select--disabled.mdc-select--outlined .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.16)}.mdc-select--no-label:not(.mdc-select--outlined) .mdc-select__anchor .mdc-select__selected-text{padding-top:14px}.mdc-select--with-leading-icon .mdc-select__icon{left:16px;right:initial}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon,.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{left:initial;right:16px}.mdc-select--with-leading-icon .mdc-select__selected-text{padding-left:48px;padding-right:32px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__selected-text,.mdc-select--with-leading-icon .mdc-select__selected-text[dir=rtl]{padding-left:32px;padding-right:48px}.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above{transform:translateY(-144%) translateX(-32px) scale(1)}[dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above,.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-144%) translateX(32px) scale(1)}.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--with-leading-icon.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--with-leading-icon.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-130%) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--with-leading-icon.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--with-leading-icon.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-130%) translateX(32px) scale(0.75)}.mdc-select--with-leading-icon.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--with-leading-icon.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon 250ms 1}[dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--shake,.mdc-select--with-leading-icon.mdc-select--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-rtl 250ms 1}.mdc-select--with-leading-icon.mdc-select__menu .mdc-list-item__text{padding-left:32px;padding-right:32px}[dir=rtl] .mdc-select--with-leading-icon.mdc-select__menu .mdc-list-item__text,.mdc-select--with-leading-icon.mdc-select__menu .mdc-list-item__text[dir=rtl]{padding-left:32px;padding-right:32px}.mdc-select__menu .mdc-list .mdc-list-item--selected{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-list .mdc-list-item--selected::before,.mdc-select__menu .mdc-list .mdc-list-item--selected::after{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-list .mdc-list-item--selected:hover::before{opacity:.04}.mdc-select__menu .mdc-list .mdc-list-item--selected.mdc-ripple-upgraded--background-focused::before,.mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-select__menu .mdc-list .mdc-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-130%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-130%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-130%) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-130%) scale(0.75)}}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-130%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-130%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-130%) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-130%) scale(0.75)}}:host{display:inline-block;vertical-align:top;outline:none}.hidden,[hidden]{display:none}.mdc-select__icon{z-index:2}.mdc-select--with-leading-icon{--mdc-list-item-graphic-margin: calc(48px - var(--mdc-list-item-graphic-size, 24px) - var(--mdc-list-side-padding, 16px))}.mdc-select .mdc-select__anchor{display:flex;position:relative}.mdc-select .mdc-select__anchor .mdc-select__dropdown-icon{align-items:center;justify-content:center;background:none;color:rgba(0,0,0,.54)}.mdc-select .mdc-select__anchor .mdc-select__dropdown-icon svg{fill:currentColor}.mdc-select .mdc-select__anchor .mdc-select__selected-text{overflow:hidden}.mdc-select .mdc-select__anchor *{display:inline-flex}mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-outlined-idle-border-color, rgba(0, 0, 0, 0.38))}:host(:not([disabled]):hover) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-outlined-hover-border-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0,0,0,.87);color:var(--mdc-select-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0,0,0,.42);border-bottom-color:var(--mdc-select-idle-line-color, rgba(0, 0, 0, 0.42))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0,0,0,.87);border-bottom-color:var(--mdc-select-hover-line-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--outlined):not(.mdc-select--disabled) .mdc-select__anchor{background-color:#f5f5f5;background-color:var(--mdc-select-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-select__dropdown-icon{color:var(--mdc-select-error-dropdown-icon-color, var(--mdc-select-error-color, var(--mdc-theme-error, #b00020)))}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label,:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label::after{color:var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select.mdc-select--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select.mdc-select--invalid mwc-menu{--mdc-theme-primary: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0,0,0,.6);color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-select__dropdown-icon{color:#000;color:var(--mdc-select-dropdown-icon-color, #000);opacity:.54;opacity:var(--mdc-select-dropdown-icon-opacity, 0.54)}:host(:not([disabled])) .mdc-select.mdc-select--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-select__dropdown-icon{color:rgba(98,0,238,.87);color:var(--mdc-select-focused-dropdown-icon-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label::after{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg){color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]) .mdc-select:not(.mdc-select--outlined) .mdc-select__anchor{background-color:#fafafa;background-color:var(--mdc-select-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-select.mdc-select--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-outlined-disabled-border-color, rgba(0, 0, 0, 0.16))}:host([disabled]) .mdc-select .mdc-select__dropdown-icon{color:#000;color:var(--mdc-select-disabled-dropdown-icon-color, #000);opacity:.38;opacity:var(--mdc-select-disabled-dropdown-icon-opacity, 0.38)}:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0,0,0,.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select-helper-text{color:rgba(0,0,0,.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select__selected-text{color:rgba(0,0,0,.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}.mdc-menu{width:100%}`;
//# sourceMappingURL=mwc-select-css.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-select/mwc-select.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/mwc-select/mwc-select.js ***!
  \*********************************************************/
/*! exports provided: Select */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _mwc_select_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mwc-select-base.js */ "./node_modules/@material/mwc-select/mwc-select-base.js");
/* harmony import */ var _mwc_select_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mwc-select-css.js */ "./node_modules/@material/mwc-select/mwc-select-css.js");
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




let Select = class Select extends _mwc_select_base_js__WEBPACK_IMPORTED_MODULE_2__["SelectBase"] {
};
Select.styles = _mwc_select_css_js__WEBPACK_IMPORTED_MODULE_3__["style"];
Select = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])('mwc-select')
], Select);

//# sourceMappingURL=mwc-select.js.map

/***/ }),

/***/ "./node_modules/@material/select/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/select/constants.js ***!
  \****************************************************/
/*! exports provided: cssClasses, strings, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    ACTIVATED: 'mdc-select--activated',
    DISABLED: 'mdc-select--disabled',
    FOCUSED: 'mdc-select--focused',
    INVALID: 'mdc-select--invalid',
    OUTLINED: 'mdc-select--outlined',
    REQUIRED: 'mdc-select--required',
    ROOT: 'mdc-select',
    SELECTED_ITEM_CLASS: 'mdc-list-item--selected',
    WITH_LEADING_ICON: 'mdc-select--with-leading-icon',
};
var strings = {
    ARIA_CONTROLS: 'aria-controls',
    ARIA_SELECTED_ATTR: 'aria-selected',
    CHANGE_EVENT: 'MDCSelect:change',
    LABEL_SELECTOR: '.mdc-floating-label',
    LEADING_ICON_SELECTOR: '.mdc-select__icon',
    LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
    MENU_SELECTOR: '.mdc-select__menu',
    OUTLINE_SELECTOR: '.mdc-notched-outline',
    SELECTED_ITEM_SELECTOR: "." + cssClasses.SELECTED_ITEM_CLASS,
    SELECTED_TEXT_SELECTOR: '.mdc-select__selected-text',
    SELECT_ANCHOR_SELECTOR: '.mdc-select__anchor',
    VALUE_ATTR: 'data-value',
};
var numbers = {
    LABEL_SCALE: 0.75,
    UNSET_INDEX: -1,
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/select/foundation.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/select/foundation.js ***!
  \*****************************************************/
/*! exports provided: MDCSelectFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSelectFoundation", function() { return MDCSelectFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/select/node_modules/@material/base/foundation.js");
/* harmony import */ var _material_menu_surface_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/menu-surface/constants */ "./node_modules/@material/select/node_modules/@material/menu-surface/constants.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/select/constants.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCSelectFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCSelectFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */
    /**
     * @param adapter
     * @param foundationMap Map from subcomponent names to their subfoundations.
     */
    function MDCSelectFoundation(adapter, foundationMap) {
        if (foundationMap === void 0) { foundationMap = {}; }
        var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCSelectFoundation.defaultAdapter, adapter)) || this;
        // Index of the currently selected menu item.
        _this.selectedIndex_ = _constants__WEBPACK_IMPORTED_MODULE_3__["numbers"].UNSET_INDEX;
        // Disabled state
        _this.disabled_ = false;
        // isMenuOpen_ is used to track the state of the menu by listening to the MDCMenuSurface:closed event
        // For reference, menu.open will return false if the menu is still closing, but isMenuOpen_ returns false only after
        // the menu has closed
        _this.isMenuOpen_ = false;
        _this.leadingIcon_ = foundationMap.leadingIcon;
        _this.helperText_ = foundationMap.helperText;
        _this.menuItemValues_ = _this.adapter_.getMenuItemValues();
        return _this;
    }
    Object.defineProperty(MDCSelectFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelectFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_3__["numbers"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelectFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_3__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelectFoundation, "defaultAdapter", {
        /**
         * See {@link MDCSelectAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                activateBottomLine: function () { return undefined; },
                deactivateBottomLine: function () { return undefined; },
                getSelectedMenuItem: function () { return null; },
                hasLabel: function () { return false; },
                floatLabel: function () { return undefined; },
                getLabelWidth: function () { return 0; },
                hasOutline: function () { return false; },
                notchOutline: function () { return undefined; },
                closeOutline: function () { return undefined; },
                setRippleCenter: function () { return undefined; },
                notifyChange: function () { return undefined; },
                setSelectedText: function () { return undefined; },
                isSelectedTextFocused: function () { return false; },
                getSelectedTextAttr: function () { return ''; },
                setSelectedTextAttr: function () { return undefined; },
                openMenu: function () { return undefined; },
                closeMenu: function () { return undefined; },
                getAnchorElement: function () { return null; },
                setMenuAnchorElement: function () { return undefined; },
                setMenuAnchorCorner: function () { return undefined; },
                setMenuWrapFocus: function () { return undefined; },
                setAttributeAtIndex: function () { return undefined; },
                removeAttributeAtIndex: function () { return undefined; },
                focusMenuItemAtIndex: function () { return undefined; },
                getMenuItemCount: function () { return 0; },
                getMenuItemValues: function () { return []; },
                getMenuItemTextAtIndex: function () { return ''; },
                getMenuItemAttr: function () { return ''; },
                addClassAtIndex: function () { return undefined; },
                removeClassAtIndex: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    /** Returns the index of the currently selected menu item, or -1 if none. */
    MDCSelectFoundation.prototype.getSelectedIndex = function () {
        return this.selectedIndex_;
    };
    MDCSelectFoundation.prototype.setSelectedIndex = function (index, closeMenu) {
        if (closeMenu === void 0) { closeMenu = false; }
        if (index >= this.adapter_.getMenuItemCount()) {
            return;
        }
        var previouslySelectedIndex = this.selectedIndex_;
        this.selectedIndex_ = index;
        if (this.selectedIndex_ === _constants__WEBPACK_IMPORTED_MODULE_3__["numbers"].UNSET_INDEX) {
            this.adapter_.setSelectedText('');
        }
        else {
            this.adapter_.setSelectedText(this.adapter_.getMenuItemTextAtIndex(this.selectedIndex_).trim());
        }
        if (previouslySelectedIndex !== _constants__WEBPACK_IMPORTED_MODULE_3__["numbers"].UNSET_INDEX) {
            this.adapter_.removeClassAtIndex(previouslySelectedIndex, _constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].SELECTED_ITEM_CLASS);
            this.adapter_.removeAttributeAtIndex(previouslySelectedIndex, _constants__WEBPACK_IMPORTED_MODULE_3__["strings"].ARIA_SELECTED_ATTR);
        }
        if (this.selectedIndex_ !== _constants__WEBPACK_IMPORTED_MODULE_3__["numbers"].UNSET_INDEX) {
            this.adapter_.addClassAtIndex(this.selectedIndex_, _constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].SELECTED_ITEM_CLASS);
            this.adapter_.setAttributeAtIndex(this.selectedIndex_, _constants__WEBPACK_IMPORTED_MODULE_3__["strings"].ARIA_SELECTED_ATTR, 'true');
        }
        this.layout();
        if (closeMenu) {
            this.adapter_.closeMenu();
        }
        this.handleChange();
    };
    MDCSelectFoundation.prototype.setValue = function (value) {
        var index = this.menuItemValues_.indexOf(value);
        this.setSelectedIndex(index);
    };
    MDCSelectFoundation.prototype.getValue = function () {
        var listItem = this.adapter_.getSelectedMenuItem();
        if (listItem) {
            return this.adapter_.getMenuItemAttr(listItem, _constants__WEBPACK_IMPORTED_MODULE_3__["strings"].VALUE_ATTR) || '';
        }
        return '';
    };
    MDCSelectFoundation.prototype.getDisabled = function () {
        return this.disabled_;
    };
    MDCSelectFoundation.prototype.setDisabled = function (isDisabled) {
        this.disabled_ = isDisabled;
        if (this.disabled_) {
            this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].DISABLED);
            this.adapter_.closeMenu();
        }
        else {
            this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].DISABLED);
        }
        if (this.leadingIcon_) {
            this.leadingIcon_.setDisabled(this.disabled_);
        }
        this.adapter_.setSelectedTextAttr('tabindex', this.disabled_ ? '-1' : '0');
        this.adapter_.setSelectedTextAttr('aria-disabled', this.disabled_.toString());
    };
    /**
     * @param content Sets the content of the helper text.
     */
    MDCSelectFoundation.prototype.setHelperTextContent = function (content) {
        if (this.helperText_) {
            this.helperText_.setContent(content);
        }
    };
    MDCSelectFoundation.prototype.layout = function () {
        if (this.adapter_.hasLabel()) {
            var openNotch = this.getValue().length > 0;
            this.notchOutline(openNotch);
        }
    };
    MDCSelectFoundation.prototype.handleMenuOpened = function () {
        if (this.adapter_.getMenuItemValues().length === 0) {
            return;
        }
        this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].ACTIVATED);
        // Menu should open to the last selected element, should open to first menu item otherwise.
        var focusItemIndex = this.selectedIndex_ >= 0 ? this.selectedIndex_ : 0;
        this.adapter_.focusMenuItemAtIndex(focusItemIndex);
    };
    MDCSelectFoundation.prototype.handleMenuClosed = function () {
        this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].ACTIVATED);
        this.isMenuOpen_ = false;
        this.adapter_.setSelectedTextAttr('aria-expanded', 'false');
        // Unfocus the select if menu is closed without a selection
        if (!this.adapter_.isSelectedTextFocused()) {
            this.blur_();
        }
    };
    /**
     * Handles value changes, via change event or programmatic updates.
     */
    MDCSelectFoundation.prototype.handleChange = function () {
        this.updateLabel_();
        this.adapter_.notifyChange(this.getValue());
        var isRequired = this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].REQUIRED);
        if (isRequired) {
            this.setValid(this.isValid());
            if (this.helperText_) {
                this.helperText_.setValidity(this.isValid());
            }
        }
    };
    MDCSelectFoundation.prototype.handleMenuItemAction = function (index) {
        this.setSelectedIndex(index, /** closeMenu */ true);
    };
    /**
     * Handles focus events from select element.
     */
    MDCSelectFoundation.prototype.handleFocus = function () {
        this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].FOCUSED);
        if (this.adapter_.hasLabel()) {
            this.notchOutline(true);
            this.adapter_.floatLabel(true);
        }
        this.adapter_.activateBottomLine();
        if (this.helperText_) {
            this.helperText_.showToScreenReader();
        }
    };
    /**
     * Handles blur events from select element.
     */
    MDCSelectFoundation.prototype.handleBlur = function () {
        if (this.isMenuOpen_) {
            return;
        }
        this.blur_();
    };
    MDCSelectFoundation.prototype.handleClick = function (normalizedX) {
        if (this.isMenuOpen_) {
            return;
        }
        this.adapter_.setRippleCenter(normalizedX);
        this.adapter_.openMenu();
        this.isMenuOpen_ = true;
        this.adapter_.setSelectedTextAttr('aria-expanded', 'true');
    };
    MDCSelectFoundation.prototype.handleKeydown = function (event) {
        if (this.isMenuOpen_) {
            return;
        }
        var isEnter = event.key === 'Enter' || event.keyCode === 13;
        var isSpace = event.key === 'Space' || event.keyCode === 32;
        var arrowUp = event.key === 'ArrowUp' || event.keyCode === 38;
        var arrowDown = event.key === 'ArrowDown' || event.keyCode === 40;
        if (this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].FOCUSED) && (isEnter || isSpace || arrowUp || arrowDown)) {
            this.adapter_.openMenu();
            this.isMenuOpen_ = true;
            this.adapter_.setSelectedTextAttr('aria-expanded', 'true');
            event.preventDefault();
        }
    };
    /**
     * Opens/closes the notched outline.
     */
    MDCSelectFoundation.prototype.notchOutline = function (openNotch) {
        if (!this.adapter_.hasOutline()) {
            return;
        }
        var isFocused = this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].FOCUSED);
        if (openNotch) {
            var labelScale = _constants__WEBPACK_IMPORTED_MODULE_3__["numbers"].LABEL_SCALE;
            var labelWidth = this.adapter_.getLabelWidth() * labelScale;
            this.adapter_.notchOutline(labelWidth);
        }
        else if (!isFocused) {
            this.adapter_.closeOutline();
        }
    };
    /**
     * Sets the aria label of the leading icon.
     */
    MDCSelectFoundation.prototype.setLeadingIconAriaLabel = function (label) {
        if (this.leadingIcon_) {
            this.leadingIcon_.setAriaLabel(label);
        }
    };
    /**
     * Sets the text content of the leading icon.
     */
    MDCSelectFoundation.prototype.setLeadingIconContent = function (content) {
        if (this.leadingIcon_) {
            this.leadingIcon_.setContent(content);
        }
    };
    MDCSelectFoundation.prototype.setValid = function (isValid) {
        this.adapter_.setSelectedTextAttr('aria-invalid', (!isValid).toString());
        if (isValid) {
            this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].INVALID);
        }
        else {
            this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].INVALID);
        }
    };
    MDCSelectFoundation.prototype.isValid = function () {
        if (this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].REQUIRED) && !this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].DISABLED)) {
            // See notes for required attribute under https://www.w3.org/TR/html52/sec-forms.html#the-select-element
            // TL;DR: Invalid if no index is selected, or if the first index is selected and has an empty value.
            return this.selectedIndex_ !== _constants__WEBPACK_IMPORTED_MODULE_3__["numbers"].UNSET_INDEX &&
                (this.selectedIndex_ !== 0 || Boolean(this.getValue()));
        }
        return true;
    };
    MDCSelectFoundation.prototype.setRequired = function (isRequired) {
        if (isRequired) {
            this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].REQUIRED);
        }
        else {
            this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].REQUIRED);
        }
        this.adapter_.setSelectedTextAttr('aria-required', isRequired.toString());
    };
    MDCSelectFoundation.prototype.getRequired = function () {
        return this.adapter_.getSelectedTextAttr('aria-required') === 'true';
    };
    MDCSelectFoundation.prototype.init = function () {
        var anchorEl = this.adapter_.getAnchorElement();
        if (anchorEl) {
            this.adapter_.setMenuAnchorElement(anchorEl);
            this.adapter_.setMenuAnchorCorner(_material_menu_surface_constants__WEBPACK_IMPORTED_MODULE_2__["Corner"].BOTTOM_START);
        }
        this.adapter_.setMenuWrapFocus(false);
        var value = this.getValue();
        if (value) {
            this.setValue(value);
        }
        // Initially sync floating label
        this.updateLabel_();
    };
    /**
     * Notches the outline and floats the label when appropriate.
     */
    MDCSelectFoundation.prototype.updateLabel_ = function () {
        var value = this.getValue();
        var optionHasValue = value.length > 0;
        if (this.adapter_.hasLabel()) {
            this.notchOutline(optionHasValue);
            if (!this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].FOCUSED)) {
                this.adapter_.floatLabel(optionHasValue);
            }
        }
    };
    /**
     * Unfocuses the select component.
     */
    MDCSelectFoundation.prototype.blur_ = function () {
        this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].FOCUSED);
        this.updateLabel_();
        this.adapter_.deactivateBottomLine();
        var isRequired = this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].REQUIRED);
        if (isRequired) {
            this.setValid(this.isValid());
            if (this.helperText_) {
                this.helperText_.setValidity(this.isValid());
            }
        }
    };
    return MDCSelectFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCSelectFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/select/node_modules/@material/base/foundation.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@material/select/node_modules/@material/base/foundation.js ***!
  \*********************************************************************************/
/*! exports provided: MDCFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFoundation", function() { return MDCFoundation; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = /** @class */ (function () {
    function MDCFoundation(adapter) {
        if (adapter === void 0) { adapter = {}; }
        this.adapter_ = adapter;
    }
    Object.defineProperty(MDCFoundation, "cssClasses", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "strings", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "numbers", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "defaultAdapter", {
        get: function () {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
        },
        enumerable: true,
        configurable: true
    });
    MDCFoundation.prototype.init = function () {
        // Subclasses should override this method to perform initialization routines (registering events, etc.)
    };
    MDCFoundation.prototype.destroy = function () {
        // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };
    return MDCFoundation;
}());

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ "./node_modules/@material/select/node_modules/@material/menu-surface/constants.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@material/select/node_modules/@material/menu-surface/constants.js ***!
  \****************************************************************************************/
/*! exports provided: cssClasses, strings, numbers, CornerBit, Corner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerBit", function() { return CornerBit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Corner", function() { return Corner; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    ANCHOR: 'mdc-menu-surface--anchor',
    ANIMATING_CLOSED: 'mdc-menu-surface--animating-closed',
    ANIMATING_OPEN: 'mdc-menu-surface--animating-open',
    FIXED: 'mdc-menu-surface--fixed',
    OPEN: 'mdc-menu-surface--open',
    ROOT: 'mdc-menu-surface',
};
// tslint:disable:object-literal-sort-keys
var strings = {
    CLOSED_EVENT: 'MDCMenuSurface:closed',
    OPENED_EVENT: 'MDCMenuSurface:opened',
    FOCUSABLE_ELEMENTS: [
        'button:not(:disabled)', '[href]:not([aria-disabled="true"])', 'input:not(:disabled)',
        'select:not(:disabled)', 'textarea:not(:disabled)', '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])',
    ].join(', '),
};
// tslint:enable:object-literal-sort-keys
var numbers = {
    /** Total duration of menu-surface open animation. */
    TRANSITION_OPEN_DURATION: 120,
    /** Total duration of menu-surface close animation. */
    TRANSITION_CLOSE_DURATION: 75,
    /** Margin left to the edge of the viewport when menu-surface is at maximum possible height. */
    MARGIN_TO_EDGE: 32,
    /** Ratio of anchor width to menu-surface width for switching from corner positioning to center positioning. */
    ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
};
/**
 * Enum for bits in the {@see Corner) bitmap.
 */
var CornerBit;
(function (CornerBit) {
    CornerBit[CornerBit["BOTTOM"] = 1] = "BOTTOM";
    CornerBit[CornerBit["CENTER"] = 2] = "CENTER";
    CornerBit[CornerBit["RIGHT"] = 4] = "RIGHT";
    CornerBit[CornerBit["FLIP_RTL"] = 8] = "FLIP_RTL";
})(CornerBit || (CornerBit = {}));
/**
 * Enum for representing an element corner for positioning the menu-surface.
 *
 * The START constants map to LEFT if element directionality is left
 * to right and RIGHT if the directionality is right to left.
 * Likewise END maps to RIGHT or LEFT depending on the directionality.
 */
var Corner;
(function (Corner) {
    Corner[Corner["TOP_LEFT"] = 0] = "TOP_LEFT";
    Corner[Corner["TOP_RIGHT"] = 4] = "TOP_RIGHT";
    Corner[Corner["BOTTOM_LEFT"] = 1] = "BOTTOM_LEFT";
    Corner[Corner["BOTTOM_RIGHT"] = 5] = "BOTTOM_RIGHT";
    Corner[Corner["TOP_START"] = 8] = "TOP_START";
    Corner[Corner["TOP_END"] = 12] = "TOP_END";
    Corner[Corner["BOTTOM_START"] = 9] = "BOTTOM_START";
    Corner[Corner["BOTTOM_END"] = 13] = "BOTTOM_END";
})(Corner || (Corner = {}));

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/google-charts/dist/googleCharts.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/google-charts/dist/googleCharts.esm.js ***!
  \*************************************************************/
/*! exports provided: default, GoogleCharts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleCharts", function() { return GoogleCharts; });
/* googleCharts.js Version: 1.5.0 Built On: 2018-12-30 */
const loadScript = Symbol('loadScript');
const instance = Symbol('instance');
let _instance;

class GoogleChartsManager {
    get [instance]() {
        return _instance
    }

    set [instance](value) {
        _instance = value;
    }

    constructor() {
        if (this[instance]) {
            return this[instance]
        }

        this[instance] = this;
    }

    reset() {
        _instance = null;
    }

    [loadScript]() {
        if (!this.scriptPromise) {
            this.scriptPromise = new Promise(resolve => {
                const body = document.getElementsByTagName('body')[0];
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.onload = function() {
                    GoogleCharts.api = window.google;
                    GoogleCharts.api.charts.load('current', {
                        packages: ['corechart', 'table'],
                    });
                    GoogleCharts.api.charts.setOnLoadCallback(() => {
                        resolve();
                    });
                };
                script.src = 'https://www.gstatic.com/charts/loader.js';
                body.appendChild(script);
            });
        }
        return this.scriptPromise
    }

    load(callback, type) {
        return this[loadScript]().then(() => {
            if (type) {
                let config = {};
                if (type instanceof Object) {
                    config = type;
                } else if (Array.isArray(type)) {
                    config = { packages: type };
                } else {
                    config = { packages: [type] };
                }
                this.api.charts.load('current', config);
                this.api.charts.setOnLoadCallback(callback);
            } else {
                if(typeof callback != 'function') {
                    throw('callback must be a function');
                } else {
                    callback();               
                }
            }
        })
    }
}

const GoogleCharts = new GoogleChartsManager();

/* harmony default export */ __webpack_exports__["default"] = (GoogleChartsManager);



/***/ }),

/***/ "./node_modules/lit-element/lib/css-tag.js":
/*!*************************************************!*\
  !*** ./node_modules/lit-element/lib/css-tag.js ***!
  \*************************************************/
/*! exports provided: supportsAdoptingStyleSheets, CSSResult, unsafeCSS, css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return supportsAdoptingStyleSheets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return CSSResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return unsafeCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const supportsAdoptingStyleSheets = ('adoptedStyleSheets' in Document.prototype) &&
    ('replace' in CSSStyleSheet.prototype);
const constructionToken = Symbol();
class CSSResult {
    constructor(cssText, safeToken) {
        if (safeToken !== constructionToken) {
            throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
        }
        this.cssText = cssText;
    }
    // Note, this is a getter so that it's lazy. In practice, this means
    // stylesheets are not created until the first element instance is made.
    get styleSheet() {
        if (this._styleSheet === undefined) {
            // Note, if `adoptedStyleSheets` is supported then we assume CSSStyleSheet
            // is constructable.
            if (supportsAdoptingStyleSheets) {
                this._styleSheet = new CSSStyleSheet();
                this._styleSheet.replaceSync(this.cssText);
            }
            else {
                this._styleSheet = null;
            }
        }
        return this._styleSheet;
    }
    toString() {
        return this.cssText;
    }
}
/**
 * Wrap a value for interpolation in a css tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */
const unsafeCSS = (value) => {
    return new CSSResult(String(value), constructionToken);
};
const textFromCSSResult = (value) => {
    if (value instanceof CSSResult) {
        return value.cssText;
    }
    else if (typeof value === 'number') {
        return value;
    }
    else {
        throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
    }
};
/**
 * Template tag which which can be used with LitElement's `style` property to
 * set element styles. For security reasons, only literal string values may be
 * used. To incorporate non-literal values `unsafeCSS` may be used inside a
 * template string part.
 */
const css = (strings, ...values) => {
    const cssText = values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
    return new CSSResult(cssText, constructionToken);
};
//# sourceMappingURL=css-tag.js.map

/***/ }),

/***/ "./node_modules/lit-element/lib/decorators.js":
/*!****************************************************!*\
  !*** ./node_modules/lit-element/lib/decorators.js ***!
  \****************************************************/
/*! exports provided: customElement, property, internalProperty, query, queryAsync, queryAll, eventOptions, queryAssignedNodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customElement", function() { return customElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "property", function() { return property; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "internalProperty", function() { return internalProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAsync", function() { return queryAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return queryAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventOptions", function() { return eventOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAssignedNodes", function() { return queryAssignedNodes; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const legacyCustomElement = (tagName, clazz) => {
    window.customElements.define(tagName, clazz);
    // Cast as any because TS doesn't recognize the return type as being a
    // subtype of the decorated class when clazz is typed as
    // `Constructor<HTMLElement>` for some reason.
    // `Constructor<HTMLElement>` is helpful to make sure the decorator is
    // applied to elements however.
    // tslint:disable-next-line:no-any
    return clazz;
};
const standardCustomElement = (tagName, descriptor) => {
    const { kind, elements } = descriptor;
    return {
        kind,
        elements,
        // This callback is called once the class is otherwise fully defined
        finisher(clazz) {
            window.customElements.define(tagName, clazz);
        }
    };
};
/**
 * Class decorator factory that defines the decorated class as a custom element.
 *
 * ```
 * @customElement('my-element')
 * class MyElement {
 *   render() {
 *     return html``;
 *   }
 * }
 * ```
 *
 * @param tagName The name of the custom element to define.
 */
const customElement = (tagName) => (classOrDescriptor) => (typeof classOrDescriptor === 'function') ?
    legacyCustomElement(tagName, classOrDescriptor) :
    standardCustomElement(tagName, classOrDescriptor);
const standardProperty = (options, element) => {
    // When decorating an accessor, pass it through and add property metadata.
    // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
    // stomp over the user's accessor.
    if (element.kind === 'method' && element.descriptor &&
        !('value' in element.descriptor)) {
        return Object.assign(Object.assign({}, element), { finisher(clazz) {
                clazz.createProperty(element.key, options);
            } });
    }
    else {
        // createProperty() takes care of defining the property, but we still
        // must return some kind of descriptor, so return a descriptor for an
        // unused prototype field. The finisher calls createProperty().
        return {
            kind: 'field',
            key: Symbol(),
            placement: 'own',
            descriptor: {},
            // When @babel/plugin-proposal-decorators implements initializers,
            // do this instead of the initializer below. See:
            // https://github.com/babel/babel/issues/9260 extras: [
            //   {
            //     kind: 'initializer',
            //     placement: 'own',
            //     initializer: descriptor.initializer,
            //   }
            // ],
            initializer() {
                if (typeof element.initializer === 'function') {
                    this[element.key] = element.initializer.call(this);
                }
            },
            finisher(clazz) {
                clazz.createProperty(element.key, options);
            }
        };
    }
};
const legacyProperty = (options, proto, name) => {
    proto.constructor
        .createProperty(name, options);
};
/**
 * A property decorator which creates a LitElement property which reflects a
 * corresponding attribute value. A `PropertyDeclaration` may optionally be
 * supplied to configure property features.
 *
 * This decorator should only be used for public fields. Private or protected
 * fields should use the internalProperty decorator.
 *
 * @example
 *
 *     class MyElement {
 *       @property({ type: Boolean })
 *       clicked = false;
 *     }
 *
 * @ExportDecoratedItems
 */
function property(options) {
    // tslint:disable-next-line:no-any decorator
    return (protoOrDescriptor, name) => (name !== undefined) ?
        legacyProperty(options, protoOrDescriptor, name) :
        standardProperty(options, protoOrDescriptor);
}
/**
 * Declares a private or protected property that still triggers updates to the
 * element when it changes.
 *
 * Properties declared this way must not be used from HTML or HTML templating
 * systems, they're solely for properties internal to the element. These
 * properties may be renamed by optimization tools like closure compiler.
 */
function internalProperty(options) {
    return property({ attribute: false, hasChanged: options === null || options === void 0 ? void 0 : options.hasChanged });
}
/**
 * A property decorator that converts a class property into a getter that
 * executes a querySelector on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * @example
 *
 *     class MyElement {
 *       @query('#first')
 *       first;
 *
 *       render() {
 *         return html`
 *           <div id="first"></div>
 *           <div id="second"></div>
 *         `;
 *       }
 *     }
 *
 */
function query(selector) {
    return (protoOrDescriptor, 
    // tslint:disable-next-line:no-any decorator
    name) => {
        const descriptor = {
            get() {
                return this.renderRoot.querySelector(selector);
            },
            enumerable: true,
            configurable: true,
        };
        return (name !== undefined) ?
            legacyQuery(descriptor, protoOrDescriptor, name) :
            standardQuery(descriptor, protoOrDescriptor);
    };
}
// Note, in the future, we may extend this decorator to support the use case
// where the queried element may need to do work to become ready to interact
// with (e.g. load some implementation code). If so, we might elect to
// add a second argument defining a function that can be run to make the
// queried element loaded/updated/ready.
/**
 * A property decorator that converts a class property into a getter that
 * returns a promise that resolves to the result of a querySelector on the
 * element's renderRoot done after the element's `updateComplete` promise
 * resolves. When the queried property may change with element state, this
 * decorator can be used instead of requiring users to await the
 * `updateComplete` before accessing the property.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * @example
 *
 *     class MyElement {
 *       @queryAsync('#first')
 *       first;
 *
 *       render() {
 *         return html`
 *           <div id="first"></div>
 *           <div id="second"></div>
 *         `;
 *       }
 *     }
 *
 *     // external usage
 *     async doSomethingWithFirst() {
 *      (await aMyElement.first).doSomething();
 *     }
 */
function queryAsync(selector) {
    return (protoOrDescriptor, 
    // tslint:disable-next-line:no-any decorator
    name) => {
        const descriptor = {
            async get() {
                await this.updateComplete;
                return this.renderRoot.querySelector(selector);
            },
            enumerable: true,
            configurable: true,
        };
        return (name !== undefined) ?
            legacyQuery(descriptor, protoOrDescriptor, name) :
            standardQuery(descriptor, protoOrDescriptor);
    };
}
/**
 * A property decorator that converts a class property into a getter
 * that executes a querySelectorAll on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See:
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
 *
 * @example
 *
 *     class MyElement {
 *       @queryAll('div')
 *       divs;
 *
 *       render() {
 *         return html`
 *           <div id="first"></div>
 *           <div id="second"></div>
 *         `;
 *       }
 *     }
 */
function queryAll(selector) {
    return (protoOrDescriptor, 
    // tslint:disable-next-line:no-any decorator
    name) => {
        const descriptor = {
            get() {
                return this.renderRoot.querySelectorAll(selector);
            },
            enumerable: true,
            configurable: true,
        };
        return (name !== undefined) ?
            legacyQuery(descriptor, protoOrDescriptor, name) :
            standardQuery(descriptor, protoOrDescriptor);
    };
}
const legacyQuery = (descriptor, proto, name) => {
    Object.defineProperty(proto, name, descriptor);
};
const standardQuery = (descriptor, element) => ({
    kind: 'method',
    placement: 'prototype',
    key: element.key,
    descriptor,
});
const standardEventOptions = (options, element) => {
    return Object.assign(Object.assign({}, element), { finisher(clazz) {
            Object.assign(clazz.prototype[element.key], options);
        } });
};
const legacyEventOptions = 
// tslint:disable-next-line:no-any legacy decorator
(options, proto, name) => {
    Object.assign(proto[name], options);
};
/**
 * Adds event listener options to a method used as an event listener in a
 * lit-html template.
 *
 * @param options An object that specifies event listener options as accepted by
 * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
 *
 * Current browsers support the `capture`, `passive`, and `once` options. See:
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
 *
 * @example
 *
 *     class MyElement {
 *       clicked = false;
 *
 *       render() {
 *         return html`
 *           <div @click=${this._onClick}`>
 *             <button></button>
 *           </div>
 *         `;
 *       }
 *
 *       @eventOptions({capture: true})
 *       _onClick(e) {
 *         this.clicked = true;
 *       }
 *     }
 */
function eventOptions(options) {
    // Return value typed as any to prevent TypeScript from complaining that
    // standard decorator function signature does not match TypeScript decorator
    // signature
    // TODO(kschaaf): unclear why it was only failing on this decorator and not
    // the others
    return ((protoOrDescriptor, name) => (name !== undefined) ?
        legacyEventOptions(options, protoOrDescriptor, name) :
        standardEventOptions(options, protoOrDescriptor));
}
/**
 * A property decorator that converts a class property into a getter that
 * returns the `assignedNodes` of the given named `slot`. Note, the type of
 * this property should be annotated as `NodeListOf<HTMLElement>`.
 *
 */
function queryAssignedNodes(slotName = '', flatten = false) {
    return (protoOrDescriptor, 
    // tslint:disable-next-line:no-any decorator
    name) => {
        const descriptor = {
            get() {
                const selector = `slot${slotName ? `[name=${slotName}]` : ''}`;
                const slot = this.renderRoot.querySelector(selector);
                return slot && slot.assignedNodes({ flatten });
            },
            enumerable: true,
            configurable: true,
        };
        return (name !== undefined) ?
            legacyQuery(descriptor, protoOrDescriptor, name) :
            standardQuery(descriptor, protoOrDescriptor);
    };
}
//# sourceMappingURL=decorators.js.map

/***/ }),

/***/ "./node_modules/lit-element/lib/updating-element.js":
/*!**********************************************************!*\
  !*** ./node_modules/lit-element/lib/updating-element.js ***!
  \**********************************************************/
/*! exports provided: defaultConverter, notEqual, UpdatingElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultConverter", function() { return defaultConverter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return notEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatingElement", function() { return UpdatingElement; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var _a;
/**
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */
window.JSCompiler_renameProperty =
    (prop, _obj) => prop;
const defaultConverter = {
    toAttribute(value, type) {
        switch (type) {
            case Boolean:
                return value ? '' : null;
            case Object:
            case Array:
                // if the value is `null` or `undefined` pass this through
                // to allow removing/no change behavior.
                return value == null ? value : JSON.stringify(value);
        }
        return value;
    },
    fromAttribute(value, type) {
        switch (type) {
            case Boolean:
                return value !== null;
            case Number:
                return value === null ? null : Number(value);
            case Object:
            case Array:
                return JSON.parse(value);
        }
        return value;
    }
};
/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */
const notEqual = (value, old) => {
    // This ensures (old==NaN, value==NaN) always returns false
    return old !== value && (old === old || value === value);
};
const defaultPropertyDeclaration = {
    attribute: true,
    type: String,
    converter: defaultConverter,
    reflect: false,
    hasChanged: notEqual
};
const STATE_HAS_UPDATED = 1;
const STATE_UPDATE_REQUESTED = 1 << 2;
const STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
const STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
/**
 * The Closure JS Compiler doesn't currently have good support for static
 * property semantics where "this" is dynamic (e.g.
 * https://github.com/google/closure-compiler/issues/3177 and others) so we use
 * this hack to bypass any rewriting by the compiler.
 */
const finalized = 'finalized';
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclassers to render updates as desired.
 */
class UpdatingElement extends HTMLElement {
    constructor() {
        super();
        this._updateState = 0;
        this._instanceProperties = undefined;
        // Initialize to an unresolved Promise so we can make sure the element has
        // connected before first update.
        this._updatePromise = new Promise((res) => this._enableUpdatingResolver = res);
        /**
         * Map with keys for any properties that have changed since the last
         * update cycle with previous values.
         */
        this._changedProperties = new Map();
        /**
         * Map with keys of properties that should be reflected when updated.
         */
        this._reflectingProperties = undefined;
        this.initialize();
    }
    /**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     */
    static get observedAttributes() {
        // note: piggy backing on this to ensure we're finalized.
        this.finalize();
        const attributes = [];
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this._classProperties.forEach((v, p) => {
            const attr = this._attributeNameForProperty(p, v);
            if (attr !== undefined) {
                this._attributeToPropertyMap.set(attr, p);
                attributes.push(attr);
            }
        });
        return attributes;
    }
    /**
     * Ensures the private `_classProperties` property metadata is created.
     * In addition to `finalize` this is also called in `createProperty` to
     * ensure the `@property` decorator can add property metadata.
     */
    /** @nocollapse */
    static _ensureClassProperties() {
        // ensure private storage for property declarations.
        if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
            this._classProperties = new Map();
            // NOTE: Workaround IE11 not supporting Map constructor argument.
            const superProperties = Object.getPrototypeOf(this)._classProperties;
            if (superProperties !== undefined) {
                superProperties.forEach((v, k) => this._classProperties.set(k, v));
            }
        }
    }
    /**
     * Creates a property accessor on the element prototype if one does not exist
     * and stores a PropertyDeclaration for the property with the given options.
     * The property setter calls the property's `hasChanged` property option
     * or uses a strict identity check to determine whether or not to request
     * an update.
     *
     * This method may be overridden to customize properties; however,
     * when doing so, it's important to call `super.createProperty` to ensure
     * the property is setup correctly. This method calls
     * `getPropertyDescriptor` internally to get a descriptor to install.
     * To customize what properties do when they are get or set, override
     * `getPropertyDescriptor`. To customize the options for a property,
     * implement `createProperty` like this:
     *
     * static createProperty(name, options) {
     *   options = Object.assign(options, {myOption: true});
     *   super.createProperty(name, options);
     * }
     *
     * @nocollapse
     */
    static createProperty(name, options = defaultPropertyDeclaration) {
        // Note, since this can be called by the `@property` decorator which
        // is called before `finalize`, we ensure storage exists for property
        // metadata.
        this._ensureClassProperties();
        this._classProperties.set(name, options);
        // Do not generate an accessor if the prototype already has one, since
        // it would be lost otherwise and that would never be the user's intention;
        // Instead, we expect users to call `requestUpdate` themselves from
        // user-defined accessors. Note that if the super has an accessor we will
        // still overwrite it
        if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
            return;
        }
        const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
        const descriptor = this.getPropertyDescriptor(name, key, options);
        if (descriptor !== undefined) {
            Object.defineProperty(this.prototype, name, descriptor);
        }
    }
    /**
     * Returns a property descriptor to be defined on the given named property.
     * If no descriptor is returned, the property will not become an accessor.
     * For example,
     *
     *   class MyElement extends LitElement {
     *     static getPropertyDescriptor(name, key, options) {
     *       const defaultDescriptor =
     *           super.getPropertyDescriptor(name, key, options);
     *       const setter = defaultDescriptor.set;
     *       return {
     *         get: defaultDescriptor.get,
     *         set(value) {
     *           setter.call(this, value);
     *           // custom action.
     *         },
     *         configurable: true,
     *         enumerable: true
     *       }
     *     }
     *   }
     *
     * @nocollapse
     */
    static getPropertyDescriptor(name, key, _options) {
        return {
            // tslint:disable-next-line:no-any no symbol in index
            get() {
                return this[key];
            },
            set(value) {
                const oldValue = this[name];
                this[key] = value;
                this._requestUpdate(name, oldValue);
            },
            configurable: true,
            enumerable: true
        };
    }
    /**
     * Returns the property options associated with the given property.
     * These options are defined with a PropertyDeclaration via the `properties`
     * object or the `@property` decorator and are registered in
     * `createProperty(...)`.
     *
     * Note, this method should be considered "final" and not overridden. To
     * customize the options for a given property, override `createProperty`.
     *
     * @nocollapse
     * @final
     */
    static getPropertyOptions(name) {
        return this._classProperties && this._classProperties.get(name) ||
            defaultPropertyDeclaration;
    }
    /**
     * Creates property accessors for registered properties and ensures
     * any superclasses are also finalized.
     * @nocollapse
     */
    static finalize() {
        // finalize any superclasses
        const superCtor = Object.getPrototypeOf(this);
        if (!superCtor.hasOwnProperty(finalized)) {
            superCtor.finalize();
        }
        this[finalized] = true;
        this._ensureClassProperties();
        // initialize Map populated in observedAttributes
        this._attributeToPropertyMap = new Map();
        // make any properties
        // Note, only process "own" properties since this element will inherit
        // any properties defined on the superClass, and finalization ensures
        // the entire prototype chain is finalized.
        if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
            const props = this.properties;
            // support symbols in properties (IE11 does not support this)
            const propKeys = [
                ...Object.getOwnPropertyNames(props),
                ...(typeof Object.getOwnPropertySymbols === 'function') ?
                    Object.getOwnPropertySymbols(props) :
                    []
            ];
            // This for/of is ok because propKeys is an array
            for (const p of propKeys) {
                // note, use of `any` is due to TypeSript lack of support for symbol in
                // index types
                // tslint:disable-next-line:no-any no symbol in index
                this.createProperty(p, props[p]);
            }
        }
    }
    /**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */
    static _attributeNameForProperty(name, options) {
        const attribute = options.attribute;
        return attribute === false ?
            undefined :
            (typeof attribute === 'string' ?
                attribute :
                (typeof name === 'string' ? name.toLowerCase() : undefined));
    }
    /**
     * Returns true if a property should request an update.
     * Called when a property value is set and uses the `hasChanged`
     * option for the property if present or a strict identity check.
     * @nocollapse
     */
    static _valueHasChanged(value, old, hasChanged = notEqual) {
        return hasChanged(value, old);
    }
    /**
     * Returns the property value for the given attribute value.
     * Called via the `attributeChangedCallback` and uses the property's
     * `converter` or `converter.fromAttribute` property option.
     * @nocollapse
     */
    static _propertyValueFromAttribute(value, options) {
        const type = options.type;
        const converter = options.converter || defaultConverter;
        const fromAttribute = (typeof converter === 'function' ? converter : converter.fromAttribute);
        return fromAttribute ? fromAttribute(value, type) : value;
    }
    /**
     * Returns the attribute value for the given property value. If this
     * returns undefined, the property will *not* be reflected to an attribute.
     * If this returns null, the attribute will be removed, otherwise the
     * attribute will be set to the value.
     * This uses the property's `reflect` and `type.toAttribute` property options.
     * @nocollapse
     */
    static _propertyValueToAttribute(value, options) {
        if (options.reflect === undefined) {
            return;
        }
        const type = options.type;
        const converter = options.converter;
        const toAttribute = converter && converter.toAttribute ||
            defaultConverter.toAttribute;
        return toAttribute(value, type);
    }
    /**
     * Performs element initialization. By default captures any pre-set values for
     * registered properties.
     */
    initialize() {
        this._saveInstanceProperties();
        // ensures first update will be caught by an early access of
        // `updateComplete`
        this._requestUpdate();
    }
    /**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */
    _saveInstanceProperties() {
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this.constructor
            ._classProperties.forEach((_v, p) => {
            if (this.hasOwnProperty(p)) {
                const value = this[p];
                delete this[p];
                if (!this._instanceProperties) {
                    this._instanceProperties = new Map();
                }
                this._instanceProperties.set(p, value);
            }
        });
    }
    /**
     * Applies previously saved instance properties.
     */
    _applyInstanceProperties() {
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        // tslint:disable-next-line:no-any
        this._instanceProperties.forEach((v, p) => this[p] = v);
        this._instanceProperties = undefined;
    }
    connectedCallback() {
        // Ensure first connection completes an update. Updates cannot complete
        // before connection.
        this.enableUpdating();
    }
    enableUpdating() {
        if (this._enableUpdatingResolver !== undefined) {
            this._enableUpdatingResolver();
            this._enableUpdatingResolver = undefined;
        }
    }
    /**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     */
    disconnectedCallback() {
    }
    /**
     * Synchronizes property values when attributes change.
     */
    attributeChangedCallback(name, old, value) {
        if (old !== value) {
            this._attributeToProperty(name, value);
        }
    }
    _propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
        const ctor = this.constructor;
        const attr = ctor._attributeNameForProperty(name, options);
        if (attr !== undefined) {
            const attrValue = ctor._propertyValueToAttribute(value, options);
            // an undefined value does not change the attribute.
            if (attrValue === undefined) {
                return;
            }
            // Track if the property is being reflected to avoid
            // setting the property again via `attributeChangedCallback`. Note:
            // 1. this takes advantage of the fact that the callback is synchronous.
            // 2. will behave incorrectly if multiple attributes are in the reaction
            // stack at time of calling. However, since we process attributes
            // in `update` this should not be possible (or an extreme corner case
            // that we'd like to discover).
            // mark state reflecting
            this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;
            if (attrValue == null) {
                this.removeAttribute(attr);
            }
            else {
                this.setAttribute(attr, attrValue);
            }
            // mark state not reflecting
            this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
        }
    }
    _attributeToProperty(name, value) {
        // Use tracking info to avoid deserializing attribute value if it was
        // just set from a property setter.
        if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
            return;
        }
        const ctor = this.constructor;
        // Note, hint this as an `AttributeMap` so closure clearly understands
        // the type; it has issues with tracking types through statics
        // tslint:disable-next-line:no-unnecessary-type-assertion
        const propName = ctor._attributeToPropertyMap.get(name);
        if (propName !== undefined) {
            const options = ctor.getPropertyOptions(propName);
            // mark state reflecting
            this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
            this[propName] =
                // tslint:disable-next-line:no-any
                ctor._propertyValueFromAttribute(value, options);
            // mark state not reflecting
            this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
        }
    }
    /**
     * This private version of `requestUpdate` does not access or return the
     * `updateComplete` promise. This promise can be overridden and is therefore
     * not free to access.
     */
    _requestUpdate(name, oldValue) {
        let shouldRequestUpdate = true;
        // If we have a property key, perform property update steps.
        if (name !== undefined) {
            const ctor = this.constructor;
            const options = ctor.getPropertyOptions(name);
            if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
                if (!this._changedProperties.has(name)) {
                    this._changedProperties.set(name, oldValue);
                }
                // Add to reflecting properties set.
                // Note, it's important that every change has a chance to add the
                // property to `_reflectingProperties`. This ensures setting
                // attribute + property reflects correctly.
                if (options.reflect === true &&
                    !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
                    if (this._reflectingProperties === undefined) {
                        this._reflectingProperties = new Map();
                    }
                    this._reflectingProperties.set(name, options);
                }
            }
            else {
                // Abort the request if the property should not be considered changed.
                shouldRequestUpdate = false;
            }
        }
        if (!this._hasRequestedUpdate && shouldRequestUpdate) {
            this._updatePromise = this._enqueueUpdate();
        }
    }
    /**
     * Requests an update which is processed asynchronously. This should
     * be called when an element should update based on some state not triggered
     * by setting a property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored. Returns the `updateComplete` Promise which is resolved
     * when the update completes.
     *
     * @param name {PropertyKey} (optional) name of requesting property
     * @param oldValue {any} (optional) old value of requesting property
     * @returns {Promise} A Promise that is resolved when the update completes.
     */
    requestUpdate(name, oldValue) {
        this._requestUpdate(name, oldValue);
        return this.updateComplete;
    }
    /**
     * Sets up the element to asynchronously update.
     */
    async _enqueueUpdate() {
        this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
        try {
            // Ensure any previous update has resolved before updating.
            // This `await` also ensures that property changes are batched.
            await this._updatePromise;
        }
        catch (e) {
            // Ignore any previous errors. We only care that the previous cycle is
            // done. Any error should have been handled in the previous update.
        }
        const result = this.performUpdate();
        // If `performUpdate` returns a Promise, we await it. This is done to
        // enable coordinating updates with a scheduler. Note, the result is
        // checked to avoid delaying an additional microtask unless we need to.
        if (result != null) {
            await result;
        }
        return !this._hasRequestedUpdate;
    }
    get _hasRequestedUpdate() {
        return (this._updateState & STATE_UPDATE_REQUESTED);
    }
    get hasUpdated() {
        return (this._updateState & STATE_HAS_UPDATED);
    }
    /**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * You can override this method to change the timing of updates. If this
     * method is overridden, `super.performUpdate()` must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```
     * protected async performUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.performUpdate();
     * }
     * ```
     */
    performUpdate() {
        // Mixin instance properties once, if they exist.
        if (this._instanceProperties) {
            this._applyInstanceProperties();
        }
        let shouldUpdate = false;
        const changedProperties = this._changedProperties;
        try {
            shouldUpdate = this.shouldUpdate(changedProperties);
            if (shouldUpdate) {
                this.update(changedProperties);
            }
            else {
                this._markUpdated();
            }
        }
        catch (e) {
            // Prevent `firstUpdated` and `updated` from running when there's an
            // update exception.
            shouldUpdate = false;
            // Ensure element can accept additional updates after an exception.
            this._markUpdated();
            throw e;
        }
        if (shouldUpdate) {
            if (!(this._updateState & STATE_HAS_UPDATED)) {
                this._updateState = this._updateState | STATE_HAS_UPDATED;
                this.firstUpdated(changedProperties);
            }
            this.updated(changedProperties);
        }
    }
    _markUpdated() {
        this._changedProperties = new Map();
        this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
    }
    /**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update.
     *
     * To await additional asynchronous work, override the `_getUpdateComplete`
     * method. For example, it is sometimes useful to await a rendered element
     * before fulfilling this Promise. To do this, first await
     * `super._getUpdateComplete()`, then any subsequent state.
     *
     * @returns {Promise} The Promise returns a boolean that indicates if the
     * update resolved without triggering another update.
     */
    get updateComplete() {
        return this._getUpdateComplete();
    }
    /**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     *   class MyElement extends LitElement {
     *     async _getUpdateComplete() {
     *       await super._getUpdateComplete();
     *       await this._myChild.updateComplete;
     *     }
     *   }
     */
    _getUpdateComplete() {
        return this._updatePromise;
    }
    /**
     * Controls whether or not `update` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * @param _changedProperties Map of changed properties with old values
     */
    shouldUpdate(_changedProperties) {
        return true;
    }
    /**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * @param _changedProperties Map of changed properties with old values
     */
    update(_changedProperties) {
        if (this._reflectingProperties !== undefined &&
            this._reflectingProperties.size > 0) {
            // Use forEach so this works even if for/of loops are compiled to for
            // loops expecting arrays
            this._reflectingProperties.forEach((v, k) => this._propertyToAttribute(k, this[k], v));
            this._reflectingProperties = undefined;
        }
        this._markUpdated();
    }
    /**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     */
    updated(_changedProperties) {
    }
    /**
     * Invoked when the element is first updated. Implement to perform one time
     * work on the element after update.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     */
    firstUpdated(_changedProperties) {
    }
}
_a = finalized;
/**
 * Marks class as having finished creating properties.
 */
UpdatingElement[_a] = true;
//# sourceMappingURL=updating-element.js.map

/***/ }),

/***/ "./node_modules/lit-element/lit-element.js":
/*!*************************************************!*\
  !*** ./node_modules/lit-element/lit-element.js ***!
  \*************************************************/
/*! exports provided: defaultConverter, notEqual, UpdatingElement, customElement, property, internalProperty, query, queryAsync, queryAll, eventOptions, queryAssignedNodes, html, svg, TemplateResult, SVGTemplateResult, supportsAdoptingStyleSheets, CSSResult, unsafeCSS, css, LitElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LitElement", function() { return LitElement; });
/* harmony import */ var lit_html_lib_shady_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/lib/shady-render.js */ "./node_modules/lit-html/lib/shady-render.js");
/* harmony import */ var _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/updating-element.js */ "./node_modules/lit-element/lib/updating-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultConverter", function() { return _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_1__["defaultConverter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_1__["notEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdatingElement", function() { return _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_1__["UpdatingElement"]; });

/* harmony import */ var _lib_decorators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/decorators.js */ "./node_modules/lit-element/lib/decorators.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customElement", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_2__["customElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "property", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_2__["property"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "internalProperty", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_2__["internalProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "query", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_2__["query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAsync", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_2__["queryAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_2__["queryAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventOptions", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_2__["eventOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAssignedNodes", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_2__["queryAssignedNodes"]; });

/* harmony import */ var lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/lit-html.js */ "./node_modules/lit-html/lit-html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__["svg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__["TemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__["SVGTemplateResult"]; });

/* harmony import */ var _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/css-tag.js */ "./node_modules/lit-element/lib/css-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["supportsAdoptingStyleSheets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["CSSResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["unsafeCSS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["css"]; });

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */







// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time
(window['litElementVersions'] || (window['litElementVersions'] = []))
    .push('2.3.1');
/**
 * Sentinal value used to avoid calling lit-html's render function when
 * subclasses do not implement `render`
 */
const renderNotImplemented = {};
class LitElement extends _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_1__["UpdatingElement"] {
    /**
     * Return the array of styles to apply to the element.
     * Override this method to integrate into a style management system.
     *
     * @nocollapse
     */
    static getStyles() {
        return this.styles;
    }
    /** @nocollapse */
    static _getUniqueStyles() {
        // Only gather styles once per class
        if (this.hasOwnProperty(JSCompiler_renameProperty('_styles', this))) {
            return;
        }
        // Take care not to call `this.getStyles()` multiple times since this
        // generates new CSSResults each time.
        // TODO(sorvell): Since we do not cache CSSResults by input, any
        // shared styles will generate new stylesheet objects, which is wasteful.
        // This should be addressed when a browser ships constructable
        // stylesheets.
        const userStyles = this.getStyles();
        if (userStyles === undefined) {
            this._styles = [];
        }
        else if (Array.isArray(userStyles)) {
            // De-duplicate styles preserving the _last_ instance in the set.
            // This is a performance optimization to avoid duplicated styles that can
            // occur especially when composing via subclassing.
            // The last item is kept to try to preserve the cascade order with the
            // assumption that it's most important that last added styles override
            // previous styles.
            const addStyles = (styles, set) => styles.reduceRight((set, s) => 
            // Note: On IE set.add() does not return the set
            Array.isArray(s) ? addStyles(s, set) : (set.add(s), set), set);
            // Array.from does not work on Set in IE, otherwise return
            // Array.from(addStyles(userStyles, new Set<CSSResult>())).reverse()
            const set = addStyles(userStyles, new Set());
            const styles = [];
            set.forEach((v) => styles.unshift(v));
            this._styles = styles;
        }
        else {
            this._styles = [userStyles];
        }
    }
    /**
     * Performs element initialization. By default this calls `createRenderRoot`
     * to create the element `renderRoot` node and captures any pre-set values for
     * registered properties.
     */
    initialize() {
        super.initialize();
        this.constructor._getUniqueStyles();
        this.renderRoot =
            this.createRenderRoot();
        // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
        // element's getRootNode(). While this could be done, we're choosing not to
        // support this now since it would require different logic around de-duping.
        if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
            this.adoptStyles();
        }
    }
    /**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     * @returns {Element|DocumentFragment} Returns a node into which to render.
     */
    createRenderRoot() {
        return this.attachShadow({ mode: 'open' });
    }
    /**
     * Applies styling to the element shadowRoot using the `static get styles`
     * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
     * available and will fallback otherwise. When Shadow DOM is polyfilled,
     * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
     * is available but `adoptedStyleSheets` is not, styles are appended to the
     * end of the `shadowRoot` to [mimic spec
     * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
     */
    adoptStyles() {
        const styles = this.constructor._styles;
        if (styles.length === 0) {
            return;
        }
        // There are three separate cases here based on Shadow DOM support.
        // (1) shadowRoot polyfilled: use ShadyCSS
        // (2) shadowRoot.adoptedStyleSheets available: use it.
        // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
        // rendering
        if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
            window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map((s) => s.cssText), this.localName);
        }
        else if (_lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["supportsAdoptingStyleSheets"]) {
            this.renderRoot.adoptedStyleSheets =
                styles.map((s) => s.styleSheet);
        }
        else {
            // This must be done after rendering so the actual style insertion is done
            // in `update`.
            this._needsShimAdoptedStyleSheets = true;
        }
    }
    connectedCallback() {
        super.connectedCallback();
        // Note, first update/render handles styleElement so we only call this if
        // connected after first update.
        if (this.hasUpdated && window.ShadyCSS !== undefined) {
            window.ShadyCSS.styleElement(this);
        }
    }
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * @param _changedProperties Map of changed properties with old values
     */
    update(changedProperties) {
        // Setting properties in `render` should not trigger an update. Since
        // updates are allowed after super.update, it's important to call `render`
        // before that.
        const templateResult = this.render();
        super.update(changedProperties);
        // If render is not implemented by the component, don't call lit-html render
        if (templateResult !== renderNotImplemented) {
            this.constructor
                .render(templateResult, this.renderRoot, { scopeName: this.localName, eventContext: this });
        }
        // When native Shadow DOM is used but adoptedStyles are not supported,
        // insert styling after rendering to ensure adoptedStyles have highest
        // priority.
        if (this._needsShimAdoptedStyleSheets) {
            this._needsShimAdoptedStyleSheets = false;
            this.constructor._styles.forEach((s) => {
                const style = document.createElement('style');
                style.textContent = s.cssText;
                this.renderRoot.appendChild(style);
            });
        }
    }
    /**
     * Invoked on each update to perform rendering tasks. This method may return
     * any value renderable by lit-html's NodePart - typically a TemplateResult.
     * Setting properties inside this method will *not* trigger the element to
     * update.
     */
    render() {
        return renderNotImplemented;
    }
}
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 *
 * Note this property name is a string to prevent breaking Closure JS Compiler
 * optimizations. See updating-element.ts for more information.
 */
LitElement['finalized'] = true;
/**
 * Render method used to render the value to the element's DOM.
 * @param result The value to render.
 * @param container Node into which to render.
 * @param options Element name.
 * @nocollapse
 */
LitElement.render = lit_html_lib_shady_render_js__WEBPACK_IMPORTED_MODULE_0__["render"];
//# sourceMappingURL=lit-element.js.map

/***/ }),

/***/ "./node_modules/lit-html/directives/class-map.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/directives/class-map.js ***!
  \*******************************************************/
/*! exports provided: classMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classMap", function() { return classMap; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

// IE11 doesn't support classList on SVG elements, so we emulate it with a Set
class ClassList {
    constructor(element) {
        this.classes = new Set();
        this.changed = false;
        this.element = element;
        const classList = (element.getAttribute('class') || '').split(/\s+/);
        for (const cls of classList) {
            this.classes.add(cls);
        }
    }
    add(cls) {
        this.classes.add(cls);
        this.changed = true;
    }
    remove(cls) {
        this.classes.delete(cls);
        this.changed = true;
    }
    commit() {
        if (this.changed) {
            let classString = '';
            this.classes.forEach((cls) => classString += cls + ' ');
            this.element.setAttribute('class', classString);
        }
    }
}
/**
 * Stores the ClassInfo object applied to a given AttributePart.
 * Used to unset existing values when a new ClassInfo object is applied.
 */
const previousClassesCache = new WeakMap();
/**
 * A directive that applies CSS classes. This must be used in the `class`
 * attribute and must be the only part used in the attribute. It takes each
 * property in the `classInfo` argument and adds the property name to the
 * element's `class` if the property value is truthy; if the property value is
 * falsey, the property name is removed from the element's `class`. For example
 * `{foo: bar}` applies the class `foo` if the value of `bar` is truthy.
 * @param classInfo {ClassInfo}
 */
const classMap = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])((classInfo) => (part) => {
    if (!(part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"]) || (part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["PropertyPart"]) ||
        part.committer.name !== 'class' || part.committer.parts.length > 1) {
        throw new Error('The `classMap` directive must be used in the `class` attribute ' +
            'and must be the only part in the attribute.');
    }
    const { committer } = part;
    const { element } = committer;
    let previousClasses = previousClassesCache.get(part);
    if (previousClasses === undefined) {
        // Write static classes once
        // Use setAttribute() because className isn't a string on SVG elements
        element.setAttribute('class', committer.strings.join(' '));
        previousClassesCache.set(part, previousClasses = new Set());
    }
    const classList = (element.classList || new ClassList(element));
    // Remove old classes that no longer apply
    // We use forEach() instead of for-of so that re don't require down-level
    // iteration.
    previousClasses.forEach((name) => {
        if (!(name in classInfo)) {
            classList.remove(name);
            previousClasses.delete(name);
        }
    });
    // Add or remove classes based on their classMap value
    for (const name in classInfo) {
        const value = classInfo[name];
        if (value != previousClasses.has(name)) {
            // We explicitly want a loose truthy check of `value` because it seems
            // more convenient that '' and 0 are skipped.
            if (value) {
                classList.add(name);
                previousClasses.add(name);
            }
            else {
                classList.remove(name);
                previousClasses.delete(name);
            }
        }
    }
    if (typeof classList.commit === 'function') {
        classList.commit();
    }
});
//# sourceMappingURL=class-map.js.map

/***/ }),

/***/ "./node_modules/lit-html/directives/if-defined.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/directives/if-defined.js ***!
  \********************************************************/
/*! exports provided: ifDefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifDefined", function() { return ifDefined; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

const previousValues = new WeakMap();
/**
 * For AttributeParts, sets the attribute if the value is defined and removes
 * the attribute if the value is undefined.
 *
 * For other part types, this directive is a no-op.
 */
const ifDefined = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])((value) => (part) => {
    const previousValue = previousValues.get(part);
    if (value === undefined && part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"]) {
        // If the value is undefined, remove the attribute, but only if the value
        // was previously defined.
        if (previousValue !== undefined || !previousValues.has(part)) {
            const name = part.committer.name;
            part.committer.element.removeAttribute(name);
        }
    }
    else if (value !== previousValue) {
        part.setValue(value);
    }
    previousValues.set(part, value);
});
//# sourceMappingURL=if-defined.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/default-template-processor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/lit-html/lib/default-template-processor.js ***!
  \*****************************************************************/
/*! exports provided: DefaultTemplateProcessor, defaultTemplateProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return DefaultTemplateProcessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return defaultTemplateProcessor; });
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts.js */ "./node_modules/lit-html/lib/parts.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Creates Parts when a template is instantiated.
 */
class DefaultTemplateProcessor {
    /**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     *
     * @param element The element containing the binding
     * @param name  The attribute name
     * @param strings The string literals. There are always at least two strings,
     *   event for fully-controlled bindings with a single expression.
     */
    handleAttributeExpressions(element, name, strings, options) {
        const prefix = name[0];
        if (prefix === '.') {
            const committer = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["PropertyCommitter"](element, name.slice(1), strings);
            return committer.parts;
        }
        if (prefix === '@') {
            return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["EventPart"](element, name.slice(1), options.eventContext)];
        }
        if (prefix === '?') {
            return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["BooleanAttributePart"](element, name.slice(1), strings)];
        }
        const committer = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["AttributeCommitter"](element, name, strings);
        return committer.parts;
    }
    /**
     * Create parts for a text-position binding.
     * @param templateFactory
     */
    handleTextExpression(options) {
        return new _parts_js__WEBPACK_IMPORTED_MODULE_0__["NodePart"](options);
    }
}
const defaultTemplateProcessor = new DefaultTemplateProcessor();
//# sourceMappingURL=default-template-processor.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/directive.js":
/*!************************************************!*\
  !*** ./node_modules/lit-html/lib/directive.js ***!
  \************************************************/
/*! exports provided: directive, isDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return isDirective; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const directives = new WeakMap();
/**
 * Brands a function as a directive factory function so that lit-html will call
 * the function during template rendering, rather than passing as a value.
 *
 * A _directive_ is a function that takes a Part as an argument. It has the
 * signature: `(part: Part) => void`.
 *
 * A directive _factory_ is a function that takes arguments for data and
 * configuration and returns a directive. Users of directive usually refer to
 * the directive factory as the directive. For example, "The repeat directive".
 *
 * Usually a template author will invoke a directive factory in their template
 * with relevant arguments, which will then return a directive function.
 *
 * Here's an example of using the `repeat()` directive factory that takes an
 * array and a function to render an item:
 *
 * ```js
 * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
 * ```
 *
 * When `repeat` is invoked, it returns a directive function that closes over
 * `items` and the template function. When the outer template is rendered, the
 * return directive function is called with the Part for the expression.
 * `repeat` then performs it's custom logic to render multiple items.
 *
 * @param f The directive factory function. Must be a function that returns a
 * function of the signature `(part: Part) => void`. The returned function will
 * be called with the part object.
 *
 * @example
 *
 * import {directive, html} from 'lit-html';
 *
 * const immutable = directive((v) => (part) => {
 *   if (part.value !== v) {
 *     part.setValue(v)
 *   }
 * });
 */
const directive = (f) => ((...args) => {
    const d = f(...args);
    directives.set(d, true);
    return d;
});
const isDirective = (o) => {
    return typeof o === 'function' && directives.has(o);
};
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/dom.js":
/*!******************************************!*\
  !*** ./node_modules/lit-html/lib/dom.js ***!
  \******************************************/
/*! exports provided: isCEPolyfill, reparentNodes, removeNodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCEPolyfill", function() { return isCEPolyfill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return reparentNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return removeNodes; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * True if the custom elements polyfill is in use.
 */
const isCEPolyfill = typeof window !== 'undefined' &&
    window.customElements != null &&
    window.customElements.polyfillWrapFlushCallback !==
        undefined;
/**
 * Reparents nodes, starting from `start` (inclusive) to `end` (exclusive),
 * into another container (could be the same container), before `before`. If
 * `before` is null, it appends the nodes to the container.
 */
const reparentNodes = (container, start, end = null, before = null) => {
    while (start !== end) {
        const n = start.nextSibling;
        container.insertBefore(start, before);
        start = n;
    }
};
/**
 * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
 * `container`.
 */
const removeNodes = (container, start, end = null) => {
    while (start !== end) {
        const n = start.nextSibling;
        container.removeChild(start);
        start = n;
    }
};
//# sourceMappingURL=dom.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/modify-template.js":
/*!******************************************************!*\
  !*** ./node_modules/lit-html/lib/modify-template.js ***!
  \******************************************************/
/*! exports provided: removeNodesFromTemplate, insertNodeIntoTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodesFromTemplate", function() { return removeNodesFromTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertNodeIntoTemplate", function() { return insertNodeIntoTemplate; });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @module shady-render
 */

const walkerNodeFilter = 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */;
/**
 * Removes the list of nodes from a Template safely. In addition to removing
 * nodes from the Template, the Template part indices are updated to match
 * the mutated Template DOM.
 *
 * As the template is walked the removal state is tracked and
 * part indices are adjusted as needed.
 *
 * div
 *   div#1 (remove) <-- start removing (removing node is div#1)
 *     div
 *       div#2 (remove)  <-- continue removing (removing node is still div#1)
 *         div
 * div <-- stop removing since previous sibling is the removing node (div#1,
 * removed 4 nodes)
 */
function removeNodesFromTemplate(template, nodesToRemove) {
    const { element: { content }, parts } = template;
    const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    let partIndex = nextActiveIndexInTemplateParts(parts);
    let part = parts[partIndex];
    let nodeIndex = -1;
    let removeCount = 0;
    const nodesToRemoveInTemplate = [];
    let currentRemovingNode = null;
    while (walker.nextNode()) {
        nodeIndex++;
        const node = walker.currentNode;
        // End removal if stepped past the removing node
        if (node.previousSibling === currentRemovingNode) {
            currentRemovingNode = null;
        }
        // A node to remove was found in the template
        if (nodesToRemove.has(node)) {
            nodesToRemoveInTemplate.push(node);
            // Track node we're removing
            if (currentRemovingNode === null) {
                currentRemovingNode = node;
            }
        }
        // When removing, increment count by which to adjust subsequent part indices
        if (currentRemovingNode !== null) {
            removeCount++;
        }
        while (part !== undefined && part.index === nodeIndex) {
            // If part is in a removed node deactivate it by setting index to -1 or
            // adjust the index as needed.
            part.index = currentRemovingNode !== null ? -1 : part.index - removeCount;
            // go to the next active part.
            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
            part = parts[partIndex];
        }
    }
    nodesToRemoveInTemplate.forEach((n) => n.parentNode.removeChild(n));
}
const countNodes = (node) => {
    let count = (node.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */) ? 0 : 1;
    const walker = document.createTreeWalker(node, walkerNodeFilter, null, false);
    while (walker.nextNode()) {
        count++;
    }
    return count;
};
const nextActiveIndexInTemplateParts = (parts, startIndex = -1) => {
    for (let i = startIndex + 1; i < parts.length; i++) {
        const part = parts[i];
        if (Object(_template_js__WEBPACK_IMPORTED_MODULE_0__["isTemplatePartActive"])(part)) {
            return i;
        }
    }
    return -1;
};
/**
 * Inserts the given node into the Template, optionally before the given
 * refNode. In addition to inserting the node into the Template, the Template
 * part indices are updated to match the mutated Template DOM.
 */
function insertNodeIntoTemplate(template, node, refNode = null) {
    const { element: { content }, parts } = template;
    // If there's no refNode, then put node at end of template.
    // No part indices need to be shifted in this case.
    if (refNode === null || refNode === undefined) {
        content.appendChild(node);
        return;
    }
    const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    let partIndex = nextActiveIndexInTemplateParts(parts);
    let insertCount = 0;
    let walkerIndex = -1;
    while (walker.nextNode()) {
        walkerIndex++;
        const walkerNode = walker.currentNode;
        if (walkerNode === refNode) {
            insertCount = countNodes(node);
            refNode.parentNode.insertBefore(node, refNode);
        }
        while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
            // If we've inserted the node, simply adjust all subsequent parts
            if (insertCount > 0) {
                while (partIndex !== -1) {
                    parts[partIndex].index += insertCount;
                    partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
                }
                return;
            }
            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
        }
    }
}
//# sourceMappingURL=modify-template.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/part.js":
/*!*******************************************!*\
  !*** ./node_modules/lit-html/lib/part.js ***!
  \*******************************************/
/*! exports provided: noChange, nothing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return noChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return nothing; });
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */
const nothing = {};
//# sourceMappingURL=part.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/parts.js":
/*!********************************************!*\
  !*** ./node_modules/lit-html/lib/parts.js ***!
  \********************************************/
/*! exports provided: isPrimitive, isIterable, AttributeCommitter, AttributePart, NodePart, BooleanAttributePart, PropertyCommitter, PropertyPart, EventPart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return isIterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return AttributeCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return AttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return NodePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return BooleanAttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return PropertyCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return PropertyPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return EventPart; });
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive.js */ "./node_modules/lit-html/lib/directive.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _part_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./part.js */ "./node_modules/lit-html/lib/part.js");
/* harmony import */ var _template_instance_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony import */ var _template_result_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template-result.js */ "./node_modules/lit-html/lib/template-result.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @module lit-html
 */






const isPrimitive = (value) => {
    return (value === null ||
        !(typeof value === 'object' || typeof value === 'function'));
};
const isIterable = (value) => {
    return Array.isArray(value) ||
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        !!(value && value[Symbol.iterator]);
};
/**
 * Writes attribute values to the DOM for a group of AttributeParts bound to a
 * single attribute. The value is only set once even if there are multiple parts
 * for an attribute.
 */
class AttributeCommitter {
    constructor(element, name, strings) {
        this.dirty = true;
        this.element = element;
        this.name = name;
        this.strings = strings;
        this.parts = [];
        for (let i = 0; i < strings.length - 1; i++) {
            this.parts[i] = this._createPart();
        }
    }
    /**
     * Creates a single part. Override this to create a differnt type of part.
     */
    _createPart() {
        return new AttributePart(this);
    }
    _getValue() {
        const strings = this.strings;
        const l = strings.length - 1;
        let text = '';
        for (let i = 0; i < l; i++) {
            text += strings[i];
            const part = this.parts[i];
            if (part !== undefined) {
                const v = part.value;
                if (isPrimitive(v) || !isIterable(v)) {
                    text += typeof v === 'string' ? v : String(v);
                }
                else {
                    for (const t of v) {
                        text += typeof t === 'string' ? t : String(t);
                    }
                }
            }
        }
        text += strings[l];
        return text;
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            this.element.setAttribute(this.name, this._getValue());
        }
    }
}
/**
 * A Part that controls all or part of an attribute value.
 */
class AttributePart {
    constructor(committer) {
        this.value = undefined;
        this.committer = committer;
    }
    setValue(value) {
        if (value !== _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"] && (!isPrimitive(value) || value !== this.value)) {
            this.value = value;
            // If the value is a not a directive, dirty the committer so that it'll
            // call setAttribute. If the value is a directive, it'll dirty the
            // committer if it calls setValue().
            if (!Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(value)) {
                this.committer.dirty = true;
            }
        }
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.value)) {
            const directive = this.value;
            this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        if (this.value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        this.committer.commit();
    }
}
/**
 * A Part that controls a location within a Node tree. Like a Range, NodePart
 * has start and end locations and can set and update the Nodes between those
 * locations.
 *
 * NodeParts support several value types: primitives, Nodes, TemplateResults,
 * as well as arrays and iterables of those types.
 */
class NodePart {
    constructor(options) {
        this.value = undefined;
        this.__pendingValue = undefined;
        this.options = options;
    }
    /**
     * Appends this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendInto(container) {
        this.startNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
        this.endNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
    }
    /**
     * Inserts this part after the `ref` node (between `ref` and `ref`'s next
     * sibling). Both `ref` and its next sibling must be static, unchanging nodes
     * such as those that appear in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterNode(ref) {
        this.startNode = ref;
        this.endNode = ref.nextSibling;
    }
    /**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendIntoPart(part) {
        part.__insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
        part.__insert(this.endNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
    }
    /**
     * Inserts this part after the `ref` part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterPart(ref) {
        ref.__insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
        this.endNode = ref.endNode;
        ref.endNode = this.startNode;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        if (this.startNode.parentNode === null) {
            return;
        }
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        const value = this.__pendingValue;
        if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        if (isPrimitive(value)) {
            if (value !== this.value) {
                this.__commitText(value);
            }
        }
        else if (value instanceof _template_result_js__WEBPACK_IMPORTED_MODULE_4__["TemplateResult"]) {
            this.__commitTemplateResult(value);
        }
        else if (value instanceof Node) {
            this.__commitNode(value);
        }
        else if (isIterable(value)) {
            this.__commitIterable(value);
        }
        else if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__["nothing"]) {
            this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["nothing"];
            this.clear();
        }
        else {
            // Fallback, will render the string representation
            this.__commitText(value);
        }
    }
    __insert(node) {
        this.endNode.parentNode.insertBefore(node, this.endNode);
    }
    __commitNode(value) {
        if (this.value === value) {
            return;
        }
        this.clear();
        this.__insert(value);
        this.value = value;
    }
    __commitText(value) {
        const node = this.startNode.nextSibling;
        value = value == null ? '' : value;
        // If `value` isn't already a string, we explicitly convert it here in case
        // it can't be implicitly converted - i.e. it's a symbol.
        const valueAsString = typeof value === 'string' ? value : String(value);
        if (node === this.endNode.previousSibling &&
            node.nodeType === 3 /* Node.TEXT_NODE */) {
            // If we only have a single text node between the markers, we can just
            // set its value, rather than replacing it.
            // TODO(justinfagnani): Can we just check if this.value is primitive?
            node.data = valueAsString;
        }
        else {
            this.__commitNode(document.createTextNode(valueAsString));
        }
        this.value = value;
    }
    __commitTemplateResult(value) {
        const template = this.options.templateFactory(value);
        if (this.value instanceof _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"] &&
            this.value.template === template) {
            this.value.update(value.values);
        }
        else {
            // Make sure we propagate the template processor from the TemplateResult
            // so that we use its syntax extension, etc. The template factory comes
            // from the render function options so that it can control template
            // caching and preprocessing.
            const instance = new _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"](template, value.processor, this.options);
            const fragment = instance._clone();
            instance.update(value.values);
            this.__commitNode(fragment);
            this.value = instance;
        }
    }
    __commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If _value is an array, then the previous render was of an
        // iterable and _value will contain the NodeParts from the previous
        // render. If _value is not an array, clear this part and make a new
        // array for NodeParts.
        if (!Array.isArray(this.value)) {
            this.value = [];
            this.clear();
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this.value;
        let partIndex = 0;
        let itemPart;
        for (const item of value) {
            // Try to reuse an existing part
            itemPart = itemParts[partIndex];
            // If no existing part, create a new one
            if (itemPart === undefined) {
                itemPart = new NodePart(this.options);
                itemParts.push(itemPart);
                if (partIndex === 0) {
                    itemPart.appendIntoPart(this);
                }
                else {
                    itemPart.insertAfterPart(itemParts[partIndex - 1]);
                }
            }
            itemPart.setValue(item);
            itemPart.commit();
            partIndex++;
        }
        if (partIndex < itemParts.length) {
            // Truncate the parts array so _value reflects the current state
            itemParts.length = partIndex;
            this.clear(itemPart && itemPart.endNode);
        }
    }
    clear(startNode = this.startNode) {
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["removeNodes"])(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
}
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */
class BooleanAttributePart {
    constructor(element, name, strings) {
        this.value = undefined;
        this.__pendingValue = undefined;
        if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
            throw new Error('Boolean attributes can only contain a single expression');
        }
        this.element = element;
        this.name = name;
        this.strings = strings;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        if (this.__pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        const value = !!this.__pendingValue;
        if (this.value !== value) {
            if (value) {
                this.element.setAttribute(this.name, '');
            }
            else {
                this.element.removeAttribute(this.name);
            }
            this.value = value;
        }
        this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
    }
}
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */
class PropertyCommitter extends AttributeCommitter {
    constructor(element, name, strings) {
        super(element, name, strings);
        this.single =
            (strings.length === 2 && strings[0] === '' && strings[1] === '');
    }
    _createPart() {
        return new PropertyPart(this);
    }
    _getValue() {
        if (this.single) {
            return this.parts[0].value;
        }
        return super._getValue();
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.element[this.name] = this._getValue();
        }
    }
}
class PropertyPart extends AttributePart {
}
// Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the third
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.
let eventOptionsSupported = false;
// Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
// blocks right into the body of a module
(() => {
    try {
        const options = {
            get capture() {
                eventOptionsSupported = true;
                return false;
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.addEventListener('test', options, options);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.removeEventListener('test', options, options);
    }
    catch (_e) {
        // event options not supported
    }
})();
class EventPart {
    constructor(element, eventName, eventContext) {
        this.value = undefined;
        this.__pendingValue = undefined;
        this.element = element;
        this.eventName = eventName;
        this.eventContext = eventContext;
        this.__boundHandleEvent = (e) => this.handleEvent(e);
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        if (this.__pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        const newListener = this.__pendingValue;
        const oldListener = this.value;
        const shouldRemoveListener = newListener == null ||
            oldListener != null &&
                (newListener.capture !== oldListener.capture ||
                    newListener.once !== oldListener.once ||
                    newListener.passive !== oldListener.passive);
        const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
        if (shouldRemoveListener) {
            this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        if (shouldAddListener) {
            this.__options = getOptions(newListener);
            this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        this.value = newListener;
        this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
    }
    handleEvent(event) {
        if (typeof this.value === 'function') {
            this.value.call(this.eventContext || this.element, event);
        }
        else {
            this.value.handleEvent(event);
        }
    }
}
// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.
const getOptions = (o) => o &&
    (eventOptionsSupported ?
        { capture: o.capture, passive: o.passive, once: o.once } :
        o.capture);
//# sourceMappingURL=parts.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/render.js":
/*!*********************************************!*\
  !*** ./node_modules/lit-html/lib/render.js ***!
  \*********************************************/
/*! exports provided: parts, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return parts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts.js */ "./node_modules/lit-html/lib/parts.js");
/* harmony import */ var _template_factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @module lit-html
 */



const parts = new WeakMap();
/**
 * Renders a template result or other value to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result Any value renderable by NodePart - typically a TemplateResult
 *     created by evaluating a template tag like `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */
const render = (result, container, options) => {
    let part = parts.get(container);
    if (part === undefined) {
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["removeNodes"])(container, container.firstChild);
        parts.set(container, part = new _parts_js__WEBPACK_IMPORTED_MODULE_1__["NodePart"](Object.assign({ templateFactory: _template_factory_js__WEBPACK_IMPORTED_MODULE_2__["templateFactory"] }, options)));
        part.appendInto(container);
    }
    part.setValue(result);
    part.commit();
};
//# sourceMappingURL=render.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/shady-render.js":
/*!***************************************************!*\
  !*** ./node_modules/lit-html/lib/shady-render.js ***!
  \***************************************************/
/*! exports provided: html, svg, TemplateResult, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _modify_template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modify-template.js */ "./node_modules/lit-html/lib/modify-template.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render.js */ "./node_modules/lit-html/lib/render.js");
/* harmony import */ var _template_factory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");
/* harmony import */ var _template_instance_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_6__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_6__["svg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_6__["TemplateResult"]; });

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * Module to add shady DOM/shady CSS polyfill support to lit-html template
 * rendering. See the [[render]] method for details.
 *
 * @module shady-render
 * @preferred
 */
/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */







// Get a key to lookup in `templateCaches`.
const getTemplateCacheKey = (type, scopeName) => `${type}--${scopeName}`;
let compatibleShadyCSSVersion = true;
if (typeof window.ShadyCSS === 'undefined') {
    compatibleShadyCSSVersion = false;
}
else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
    console.warn(`Incompatible ShadyCSS version detected. ` +
        `Please update to at least @webcomponents/webcomponentsjs@2.0.2 and ` +
        `@webcomponents/shadycss@1.3.1.`);
    compatibleShadyCSSVersion = false;
}
/**
 * Template factory which scopes template DOM using ShadyCSS.
 * @param scopeName {string}
 */
const shadyTemplateFactory = (scopeName) => (result) => {
    const cacheKey = getTemplateCacheKey(result.type, scopeName);
    let templateCache = _template_factory_js__WEBPACK_IMPORTED_MODULE_3__["templateCaches"].get(cacheKey);
    if (templateCache === undefined) {
        templateCache = {
            stringsArray: new WeakMap(),
            keyString: new Map()
        };
        _template_factory_js__WEBPACK_IMPORTED_MODULE_3__["templateCaches"].set(cacheKey, templateCache);
    }
    let template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) {
        return template;
    }
    const key = result.strings.join(_template_js__WEBPACK_IMPORTED_MODULE_5__["marker"]);
    template = templateCache.keyString.get(key);
    if (template === undefined) {
        const element = result.getTemplateElement();
        if (compatibleShadyCSSVersion) {
            window.ShadyCSS.prepareTemplateDom(element, scopeName);
        }
        template = new _template_js__WEBPACK_IMPORTED_MODULE_5__["Template"](result, element);
        templateCache.keyString.set(key, template);
    }
    templateCache.stringsArray.set(result.strings, template);
    return template;
};
const TEMPLATE_TYPES = ['html', 'svg'];
/**
 * Removes all style elements from Templates for the given scopeName.
 */
const removeStylesFromLitTemplates = (scopeName) => {
    TEMPLATE_TYPES.forEach((type) => {
        const templates = _template_factory_js__WEBPACK_IMPORTED_MODULE_3__["templateCaches"].get(getTemplateCacheKey(type, scopeName));
        if (templates !== undefined) {
            templates.keyString.forEach((template) => {
                const { element: { content } } = template;
                // IE 11 doesn't support the iterable param Set constructor
                const styles = new Set();
                Array.from(content.querySelectorAll('style')).forEach((s) => {
                    styles.add(s);
                });
                Object(_modify_template_js__WEBPACK_IMPORTED_MODULE_1__["removeNodesFromTemplate"])(template, styles);
            });
        }
    });
};
const shadyRenderSet = new Set();
/**
 * For the given scope name, ensures that ShadyCSS style scoping is performed.
 * This is done just once per scope name so the fragment and template cannot
 * be modified.
 * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
 * to be scoped and appended to the document
 * (2) removes style elements from all lit-html Templates for this scope name.
 *
 * Note, <style> elements can only be placed into templates for the
 * initial rendering of the scope. If <style> elements are included in templates
 * dynamically rendered to the scope (after the first scope render), they will
 * not be scoped and the <style> will be left in the template and rendered
 * output.
 */
const prepareTemplateStyles = (scopeName, renderedDOM, template) => {
    shadyRenderSet.add(scopeName);
    // If `renderedDOM` is stamped from a Template, then we need to edit that
    // Template's underlying template element. Otherwise, we create one here
    // to give to ShadyCSS, which still requires one while scoping.
    const templateElement = !!template ? template.element : document.createElement('template');
    // Move styles out of rendered DOM and store.
    const styles = renderedDOM.querySelectorAll('style');
    const { length } = styles;
    // If there are no styles, skip unnecessary work
    if (length === 0) {
        // Ensure prepareTemplateStyles is called to support adding
        // styles via `prepareAdoptedCssText` since that requires that
        // `prepareTemplateStyles` is called.
        //
        // ShadyCSS will only update styles containing @apply in the template
        // given to `prepareTemplateStyles`. If no lit Template was given,
        // ShadyCSS will not be able to update uses of @apply in any relevant
        // template. However, this is not a problem because we only create the
        // template for the purpose of supporting `prepareAdoptedCssText`,
        // which doesn't support @apply at all.
        window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
        return;
    }
    const condensedStyle = document.createElement('style');
    // Collect styles into a single style. This helps us make sure ShadyCSS
    // manipulations will not prevent us from being able to fix up template
    // part indices.
    // NOTE: collecting styles is inefficient for browsers but ShadyCSS
    // currently does this anyway. When it does not, this should be changed.
    for (let i = 0; i < length; i++) {
        const style = styles[i];
        style.parentNode.removeChild(style);
        condensedStyle.textContent += style.textContent;
    }
    // Remove styles from nested templates in this scope.
    removeStylesFromLitTemplates(scopeName);
    // And then put the condensed style into the "root" template passed in as
    // `template`.
    const content = templateElement.content;
    if (!!template) {
        Object(_modify_template_js__WEBPACK_IMPORTED_MODULE_1__["insertNodeIntoTemplate"])(template, condensedStyle, content.firstChild);
    }
    else {
        content.insertBefore(condensedStyle, content.firstChild);
    }
    // Note, it's important that ShadyCSS gets the template that `lit-html`
    // will actually render so that it can update the style inside when
    // needed (e.g. @apply native Shadow DOM case).
    window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
    const style = content.querySelector('style');
    if (window.ShadyCSS.nativeShadow && style !== null) {
        // When in native Shadow DOM, ensure the style created by ShadyCSS is
        // included in initially rendered output (`renderedDOM`).
        renderedDOM.insertBefore(style.cloneNode(true), renderedDOM.firstChild);
    }
    else if (!!template) {
        // When no style is left in the template, parts will be broken as a
        // result. To fix this, we put back the style node ShadyCSS removed
        // and then tell lit to remove that node from the template.
        // There can be no style in the template in 2 cases (1) when Shady DOM
        // is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
        // is in use ShadyCSS removes the style if it contains no content.
        // NOTE, ShadyCSS creates its own style so we can safely add/remove
        // `condensedStyle` here.
        content.insertBefore(condensedStyle, content.firstChild);
        const removes = new Set();
        removes.add(condensedStyle);
        Object(_modify_template_js__WEBPACK_IMPORTED_MODULE_1__["removeNodesFromTemplate"])(template, removes);
    }
};
/**
 * Extension to the standard `render` method which supports rendering
 * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
 * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
 * or when the webcomponentsjs
 * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
 *
 * Adds a `scopeName` option which is used to scope element DOM and stylesheets
 * when native ShadowDOM is unavailable. The `scopeName` will be added to
 * the class attribute of all rendered DOM. In addition, any style elements will
 * be automatically re-written with this `scopeName` selector and moved out
 * of the rendered DOM and into the document `<head>`.
 *
 * It is common to use this render method in conjunction with a custom element
 * which renders a shadowRoot. When this is done, typically the element's
 * `localName` should be used as the `scopeName`.
 *
 * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
 * custom properties (needed only on older browsers like IE11) and a shim for
 * a deprecated feature called `@apply` that supports applying a set of css
 * custom properties to a given location.
 *
 * Usage considerations:
 *
 * * Part values in `<style>` elements are only applied the first time a given
 * `scopeName` renders. Subsequent changes to parts in style elements will have
 * no effect. Because of this, parts in style elements should only be used for
 * values that will never change, for example parts that set scope-wide theme
 * values or parts which render shared style elements.
 *
 * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
 * custom element's `constructor` is not supported. Instead rendering should
 * either done asynchronously, for example at microtask timing (for example
 * `Promise.resolve()`), or be deferred until the first time the element's
 * `connectedCallback` runs.
 *
 * Usage considerations when using shimmed custom properties or `@apply`:
 *
 * * Whenever any dynamic changes are made which affect
 * css custom properties, `ShadyCSS.styleElement(element)` must be called
 * to update the element. There are two cases when this is needed:
 * (1) the element is connected to a new parent, (2) a class is added to the
 * element that causes it to match different custom properties.
 * To address the first case when rendering a custom element, `styleElement`
 * should be called in the element's `connectedCallback`.
 *
 * * Shimmed custom properties may only be defined either for an entire
 * shadowRoot (for example, in a `:host` rule) or via a rule that directly
 * matches an element with a shadowRoot. In other words, instead of flowing from
 * parent to child as do native css custom properties, shimmed custom properties
 * flow only from shadowRoots to nested shadowRoots.
 *
 * * When using `@apply` mixing css shorthand property names with
 * non-shorthand names (for example `border` and `border-width`) is not
 * supported.
 */
const render = (result, container, options) => {
    if (!options || typeof options !== 'object' || !options.scopeName) {
        throw new Error('The `scopeName` option is required.');
    }
    const scopeName = options.scopeName;
    const hasRendered = _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].has(container);
    const needsScoping = compatibleShadyCSSVersion &&
        container.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */ &&
        !!container.host;
    // Handle first render to a scope specially...
    const firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName);
    // On first scope render, render into a fragment; this cannot be a single
    // fragment that is reused since nested renders can occur synchronously.
    const renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
    Object(_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(result, renderContainer, Object.assign({ templateFactory: shadyTemplateFactory(scopeName) }, options));
    // When performing first scope render,
    // (1) We've rendered into a fragment so that there's a chance to
    // `prepareTemplateStyles` before sub-elements hit the DOM
    // (which might cause them to render based on a common pattern of
    // rendering in a custom element's `connectedCallback`);
    // (2) Scope the template with ShadyCSS one time only for this scope.
    // (3) Render the fragment into the container and make sure the
    // container knows its `part` is the one we just rendered. This ensures
    // DOM will be re-used on subsequent renders.
    if (firstScopeRender) {
        const part = _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].get(renderContainer);
        _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].delete(renderContainer);
        // ShadyCSS might have style sheets (e.g. from `prepareAdoptedCssText`)
        // that should apply to `renderContainer` even if the rendered value is
        // not a TemplateInstance. However, it will only insert scoped styles
        // into the document if `prepareTemplateStyles` has already been called
        // for the given scope name.
        const template = part.value instanceof _template_instance_js__WEBPACK_IMPORTED_MODULE_4__["TemplateInstance"] ?
            part.value.template :
            undefined;
        prepareTemplateStyles(scopeName, renderContainer, template);
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["removeNodes"])(container, container.firstChild);
        container.appendChild(renderContainer);
        _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].set(container, part);
    }
    // After elements have hit the DOM, update styling if this is the
    // initial render to this container.
    // This is needed whenever dynamic changes are made so it would be
    // safest to do every render; however, this would regress performance
    // so we leave it up to the user to call `ShadyCSS.styleElement`
    // for dynamic changes.
    if (!hasRendered && needsScoping) {
        window.ShadyCSS.styleElement(container.host);
    }
};
//# sourceMappingURL=shady-render.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/template-factory.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/lib/template-factory.js ***!
  \*******************************************************/
/*! exports provided: templateFactory, templateCaches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return templateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return templateCaches; });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */
function templateFactory(result) {
    let templateCache = templateCaches.get(result.type);
    if (templateCache === undefined) {
        templateCache = {
            stringsArray: new WeakMap(),
            keyString: new Map()
        };
        templateCaches.set(result.type, templateCache);
    }
    let template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) {
        return template;
    }
    // If the TemplateStringsArray is new, generate a key from the strings
    // This key is shared between all templates with identical content
    const key = result.strings.join(_template_js__WEBPACK_IMPORTED_MODULE_0__["marker"]);
    // Check if we already have a Template for this key
    template = templateCache.keyString.get(key);
    if (template === undefined) {
        // If we have not seen this key before, create a new Template
        template = new _template_js__WEBPACK_IMPORTED_MODULE_0__["Template"](result, result.getTemplateElement());
        // Cache the Template for this key
        templateCache.keyString.set(key, template);
    }
    // Cache all future queries for this TemplateStringsArray
    templateCache.stringsArray.set(result.strings, template);
    return template;
}
const templateCaches = new Map();
//# sourceMappingURL=template-factory.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/template-instance.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/lib/template-instance.js ***!
  \********************************************************/
/*! exports provided: TemplateInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return TemplateInstance; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @module lit-html
 */


/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */
class TemplateInstance {
    constructor(template, processor, options) {
        this.__parts = [];
        this.template = template;
        this.processor = processor;
        this.options = options;
    }
    update(values) {
        let i = 0;
        for (const part of this.__parts) {
            if (part !== undefined) {
                part.setValue(values[i]);
            }
            i++;
        }
        for (const part of this.__parts) {
            if (part !== undefined) {
                part.commit();
            }
        }
    }
    _clone() {
        // There are a number of steps in the lifecycle of a template instance's
        // DOM fragment:
        //  1. Clone - create the instance fragment
        //  2. Adopt - adopt into the main document
        //  3. Process - find part markers and create parts
        //  4. Upgrade - upgrade custom elements
        //  5. Update - set node, attribute, property, etc., values
        //  6. Connect - connect to the document. Optional and outside of this
        //     method.
        //
        // We have a few constraints on the ordering of these steps:
        //  * We need to upgrade before updating, so that property values will pass
        //    through any property setters.
        //  * We would like to process before upgrading so that we're sure that the
        //    cloned fragment is inert and not disturbed by self-modifying DOM.
        //  * We want custom elements to upgrade even in disconnected fragments.
        //
        // Given these constraints, with full custom elements support we would
        // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
        //
        // But Safari does not implement CustomElementRegistry#upgrade, so we
        // can not implement that order and still have upgrade-before-update and
        // upgrade disconnected fragments. So we instead sacrifice the
        // process-before-upgrade constraint, since in Custom Elements v1 elements
        // must not modify their light DOM in the constructor. We still have issues
        // when co-existing with CEv0 elements like Polymer 1, and with polyfills
        // that don't strictly adhere to the no-modification rule because shadow
        // DOM, which may be created in the constructor, is emulated by being placed
        // in the light DOM.
        //
        // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
        // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
        // in one step.
        //
        // The Custom Elements v1 polyfill supports upgrade(), so the order when
        // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
        // Connect.
        const fragment = _dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"] ?
            this.template.element.content.cloneNode(true) :
            document.importNode(this.template.element.content, true);
        const stack = [];
        const parts = this.template.parts;
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
        let partIndex = 0;
        let nodeIndex = 0;
        let part;
        let node = walker.nextNode();
        // Loop through all the nodes and parts of a template
        while (partIndex < parts.length) {
            part = parts[partIndex];
            if (!Object(_template_js__WEBPACK_IMPORTED_MODULE_1__["isTemplatePartActive"])(part)) {
                this.__parts.push(undefined);
                partIndex++;
                continue;
            }
            // Progress the tree walker until we find our next part's node.
            // Note that multiple parts may share the same node (attribute parts
            // on a single element), so this loop may not run at all.
            while (nodeIndex < part.index) {
                nodeIndex++;
                if (node.nodeName === 'TEMPLATE') {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
                if ((node = walker.nextNode()) === null) {
                    // We've exhausted the content inside a nested template element.
                    // Because we still have parts (the outer for-loop), we know:
                    // - There is a template in the stack
                    // - The walker will find a nextNode outside the template
                    walker.currentNode = stack.pop();
                    node = walker.nextNode();
                }
            }
            // We've arrived at our part's node.
            if (part.type === 'node') {
                const part = this.processor.handleTextExpression(this.options);
                part.insertAfterNode(node.previousSibling);
                this.__parts.push(part);
            }
            else {
                this.__parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
            }
            partIndex++;
        }
        if (_dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"]) {
            document.adoptNode(fragment);
            customElements.upgrade(fragment);
        }
        return fragment;
    }
}
//# sourceMappingURL=template-instance.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/template-result.js":
/*!******************************************************!*\
  !*** ./node_modules/lit-html/lib/template-result.js ***!
  \******************************************************/
/*! exports provided: TemplateResult, SVGTemplateResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return TemplateResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return SVGTemplateResult; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @module lit-html
 */


const commentMarker = ` ${_template_js__WEBPACK_IMPORTED_MODULE_1__["marker"]} `;
/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */
class TemplateResult {
    constructor(strings, values, type, processor) {
        this.strings = strings;
        this.values = values;
        this.type = type;
        this.processor = processor;
    }
    /**
     * Returns a string of HTML used to create a `<template>` element.
     */
    getHTML() {
        const l = this.strings.length - 1;
        let html = '';
        let isCommentBinding = false;
        for (let i = 0; i < l; i++) {
            const s = this.strings[i];
            // For each binding we want to determine the kind of marker to insert
            // into the template source before it's parsed by the browser's HTML
            // parser. The marker type is based on whether the expression is in an
            // attribute, text, or comment position.
            //   * For node-position bindings we insert a comment with the marker
            //     sentinel as its text content, like <!--{{lit-guid}}-->.
            //   * For attribute bindings we insert just the marker sentinel for the
            //     first binding, so that we support unquoted attribute bindings.
            //     Subsequent bindings can use a comment marker because multi-binding
            //     attributes must be quoted.
            //   * For comment bindings we insert just the marker sentinel so we don't
            //     close the comment.
            //
            // The following code scans the template source, but is *not* an HTML
            // parser. We don't need to track the tree structure of the HTML, only
            // whether a binding is inside a comment, and if not, if it appears to be
            // the first binding in an attribute.
            const commentOpen = s.lastIndexOf('<!--');
            // We're in comment position if we have a comment open with no following
            // comment close. Because <-- can appear in an attribute value there can
            // be false positives.
            isCommentBinding = (commentOpen > -1 || isCommentBinding) &&
                s.indexOf('-->', commentOpen + 1) === -1;
            // Check to see if we have an attribute-like sequence preceding the
            // expression. This can match "name=value" like structures in text,
            // comments, and attribute values, so there can be false-positives.
            const attributeMatch = _template_js__WEBPACK_IMPORTED_MODULE_1__["lastAttributeNameRegex"].exec(s);
            if (attributeMatch === null) {
                // We're only in this branch if we don't have a attribute-like
                // preceding sequence. For comments, this guards against unusual
                // attribute values like <div foo="<!--${'bar'}">. Cases like
                // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
                // below.
                html += s + (isCommentBinding ? commentMarker : _template_js__WEBPACK_IMPORTED_MODULE_1__["nodeMarker"]);
            }
            else {
                // For attributes we use just a marker sentinel, and also append a
                // $lit$ suffix to the name to opt-out of attribute-specific parsing
                // that IE and Edge do for style and certain SVG attributes.
                html += s.substr(0, attributeMatch.index) + attributeMatch[1] +
                    attributeMatch[2] + _template_js__WEBPACK_IMPORTED_MODULE_1__["boundAttributeSuffix"] + attributeMatch[3] +
                    _template_js__WEBPACK_IMPORTED_MODULE_1__["marker"];
            }
        }
        html += this.strings[l];
        return html;
    }
    getTemplateElement() {
        const template = document.createElement('template');
        template.innerHTML = this.getHTML();
        return template;
    }
}
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTML in an `<svg>` tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the `<svg>` tag so that
 * clones only container the original fragment.
 */
class SVGTemplateResult extends TemplateResult {
    getHTML() {
        return `<svg>${super.getHTML()}</svg>`;
    }
    getTemplateElement() {
        const template = super.getTemplateElement();
        const content = template.content;
        const svgElement = content.firstChild;
        content.removeChild(svgElement);
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["reparentNodes"])(content, svgElement.firstChild);
        return template;
    }
}
//# sourceMappingURL=template-result.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/template.js":
/*!***********************************************!*\
  !*** ./node_modules/lit-html/lib/template.js ***!
  \***********************************************/
/*! exports provided: marker, nodeMarker, markerRegex, boundAttributeSuffix, Template, isTemplatePartActive, createMarker, lastAttributeNameRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marker", function() { return marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeMarker", function() { return nodeMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markerRegex", function() { return markerRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundAttributeSuffix", function() { return boundAttributeSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return isTemplatePartActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return createMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastAttributeNameRegex", function() { return lastAttributeNameRegex; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */
const nodeMarker = `<!--${marker}-->`;
const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
/**
 * Suffix appended to all bound attribute names.
 */
const boundAttributeSuffix = '$lit$';
/**
 * An updatable Template that tracks the location of dynamic parts.
 */
class Template {
    constructor(result, element) {
        this.parts = [];
        this.element = element;
        const nodesToRemove = [];
        const stack = [];
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(element.content, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
        // Keeps track of the last index associated with a part. We try to delete
        // unnecessary nodes, but we never want to associate two different parts
        // to the same index. They must have a constant node between.
        let lastPartIndex = 0;
        let index = -1;
        let partIndex = 0;
        const { strings, values: { length } } = result;
        while (partIndex < length) {
            const node = walker.nextNode();
            if (node === null) {
                // We've exhausted the content inside a nested template element.
                // Because we still have parts (the outer for-loop), we know:
                // - There is a template in the stack
                // - The walker will find a nextNode outside the template
                walker.currentNode = stack.pop();
                continue;
            }
            index++;
            if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
                if (node.hasAttributes()) {
                    const attributes = node.attributes;
                    const { length } = attributes;
                    // Per
                    // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                    // attributes are not guaranteed to be returned in document order.
                    // In particular, Edge/IE can return them out of order, so we cannot
                    // assume a correspondence between part index and attribute index.
                    let count = 0;
                    for (let i = 0; i < length; i++) {
                        if (endsWith(attributes[i].name, boundAttributeSuffix)) {
                            count++;
                        }
                    }
                    while (count-- > 0) {
                        // Get the template literal section leading up to the first
                        // expression in this attribute
                        const stringForPart = strings[partIndex];
                        // Find the attribute name
                        const name = lastAttributeNameRegex.exec(stringForPart)[2];
                        // Find the corresponding attribute
                        // All bound attributes have had a suffix added in
                        // TemplateResult#getHTML to opt out of special attribute
                        // handling. To look up the attribute value we also need to add
                        // the suffix.
                        const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
                        const attributeValue = node.getAttribute(attributeLookupName);
                        node.removeAttribute(attributeLookupName);
                        const statics = attributeValue.split(markerRegex);
                        this.parts.push({ type: 'attribute', index, name, strings: statics });
                        partIndex += statics.length - 1;
                    }
                }
                if (node.tagName === 'TEMPLATE') {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
            }
            else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                const data = node.data;
                if (data.indexOf(marker) >= 0) {
                    const parent = node.parentNode;
                    const strings = data.split(markerRegex);
                    const lastIndex = strings.length - 1;
                    // Generate a new text node for each literal section
                    // These nodes are also used as the markers for node parts
                    for (let i = 0; i < lastIndex; i++) {
                        let insert;
                        let s = strings[i];
                        if (s === '') {
                            insert = createMarker();
                        }
                        else {
                            const match = lastAttributeNameRegex.exec(s);
                            if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                                s = s.slice(0, match.index) + match[1] +
                                    match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                            }
                            insert = document.createTextNode(s);
                        }
                        parent.insertBefore(insert, node);
                        this.parts.push({ type: 'node', index: ++index });
                    }
                    // If there's no text, we must insert a comment to mark our place.
                    // Else, we can trust it will stick around after cloning.
                    if (strings[lastIndex] === '') {
                        parent.insertBefore(createMarker(), node);
                        nodesToRemove.push(node);
                    }
                    else {
                        node.data = strings[lastIndex];
                    }
                    // We have a part for each match found
                    partIndex += lastIndex;
                }
            }
            else if (node.nodeType === 8 /* Node.COMMENT_NODE */) {
                if (node.data === marker) {
                    const parent = node.parentNode;
                    // Add a new marker node to be the startNode of the Part if any of
                    // the following are true:
                    //  * We don't have a previousSibling
                    //  * The previousSibling is already the start of a previous part
                    if (node.previousSibling === null || index === lastPartIndex) {
                        index++;
                        parent.insertBefore(createMarker(), node);
                    }
                    lastPartIndex = index;
                    this.parts.push({ type: 'node', index });
                    // If we don't have a nextSibling, keep this node so we have an end.
                    // Else, we can remove it to save future costs.
                    if (node.nextSibling === null) {
                        node.data = '';
                    }
                    else {
                        nodesToRemove.push(node);
                        index--;
                    }
                    partIndex++;
                }
                else {
                    let i = -1;
                    while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
                        // Comment node has a binding marker inside, make an inactive part
                        // The binding won't work, but subsequent bindings will
                        // TODO (justinfagnani): consider whether it's even worth it to
                        // make bindings in comments work
                        this.parts.push({ type: 'node', index: -1 });
                        partIndex++;
                    }
                }
            }
        }
        // Remove text binding nodes after the walk to not disturb the TreeWalker
        for (const n of nodesToRemove) {
            n.parentNode.removeChild(n);
        }
    }
}
const endsWith = (str, suffix) => {
    const index = str.length - suffix.length;
    return index >= 0 && str.slice(index) === suffix;
};
const isTemplatePartActive = (part) => part.index !== -1;
// Allows `document.createComment('')` to be renamed for a
// small manual size-savings.
const createMarker = () => document.createComment('');
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-characters
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
 * space character except " ".
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
const lastAttributeNameRegex = 
// eslint-disable-next-line no-control-regex
/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
//# sourceMappingURL=template.js.map

/***/ }),

/***/ "./node_modules/lit-html/lit-html.js":
/*!*******************************************!*\
  !*** ./node_modules/lit-html/lit-html.js ***!
  \*******************************************/
/*! exports provided: DefaultTemplateProcessor, defaultTemplateProcessor, directive, isDirective, removeNodes, reparentNodes, noChange, nothing, AttributeCommitter, AttributePart, BooleanAttributePart, EventPart, isIterable, isPrimitive, NodePart, PropertyCommitter, PropertyPart, parts, render, templateCaches, templateFactory, TemplateInstance, SVGTemplateResult, TemplateResult, createMarker, isTemplatePartActive, Template, html, svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony import */ var _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/default-template-processor.js */ "./node_modules/lit-html/lib/default-template-processor.js");
/* harmony import */ var _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/template-result.js */ "./node_modules/lit-html/lib/template-result.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["DefaultTemplateProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]; });

/* harmony import */ var _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/directive.js */ "./node_modules/lit-html/lib/directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["isDirective"]; });

/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["removeNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["reparentNodes"]; });

/* harmony import */ var _lib_part_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/part.js */ "./node_modules/lit-html/lib/part.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["noChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["nothing"]; });

/* harmony import */ var _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/parts.js */ "./node_modules/lit-html/lib/parts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributeCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["BooleanAttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["EventPart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["isIterable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["NodePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyPart"]; });

/* harmony import */ var _lib_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/render.js */ "./node_modules/lit-html/lib/render.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["parts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["render"]; });

/* harmony import */ var _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateCaches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateFactory"]; });

/* harmony import */ var _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__["TemplateInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"]; });

/* harmony import */ var _lib_template_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/template.js */ "./node_modules/lit-html/lib/template.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["createMarker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["isTemplatePartActive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["Template"]; });

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 *
 * Main lit-html module.
 *
 * Main exports:
 *
 * -  [[html]]
 * -  [[svg]]
 * -  [[render]]
 *
 * @module lit-html
 * @preferred
 */
/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */




// TODO(justinfagnani): remove line when we get NodePart moving methods








// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
if (typeof window !== 'undefined') {
    (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.2.1');
}
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */
const html = (strings, ...values) => new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"](strings, values, 'html', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */
const svg = (strings, ...values) => new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"](strings, values, 'svg', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);
//# sourceMappingURL=lit-html.js.map

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/scripts/components/budget-sankey.js":
/*!*************************************************!*\
  !*** ./src/scripts/components/budget-sankey.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var google_charts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-charts */ "./node_modules/google-charts/dist/googleCharts.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

 // import years from '../Years';

(function () {
  var url = 'https://script.google.com/macros/s/AKfycbyL4WsxNK-88L1cdvmgruVaLXFyndHkOlSpLK9ZWFjMuf-YUewd/exec';

  var BudgetSankey = /*#__PURE__*/function (_HTMLElement) {
    _inherits(BudgetSankey, _HTMLElement);

    var _super = _createSuper(BudgetSankey);

    function BudgetSankey() {
      var _this;

      _classCallCheck(this, BudgetSankey);

      _this = _super.call(this);
      _this.drawChart = _this.drawChart.bind(_assertThisInitialized(_this));

      _this.attachShadow({
        mode: 'open'
      }); // @import "./assets/styles/main.css";


      var style = document.createElement('style');
      style.textContent = "\n        #budget-sankey-container {\n            width: inherit;\n            height: inherit;\n            margin: inherit;\n        }\n      ";
      var div = document.createElement('div');
      div.id = 'budget-sankey-container';

      _this.shadowRoot.appendChild(style);

      _this.shadowRoot.appendChild(div);

      return _this;
    }

    _createClass(BudgetSankey, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;

        console.log('connected callback called');
        google_charts__WEBPACK_IMPORTED_MODULE_0__["GoogleCharts"].load(this.drawChart, {
          packages: ['sankey']
        });
        window.addEventListener('budget-select-changed', function (e) {
          console.log('got budget-select-change:', e.detail);

          _this2.getBudgetData(e.detail.year, e.detail.month).then(_this2.drawChart);
        });
        window.addEventListener('resize', function () {
          return _this2.drawChart();
        });
      }
    }, {
      key: "drawChart",
      value: function () {
        var _drawChart = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
          var budget, rows, options, chart;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  console.log('doing draw chart', this);
                  _context.t0 = data;

                  if (_context.t0) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 5;
                  return this.getBudgetData();

                case 5:
                  _context.t0 = _context.sent;

                case 6:
                  budget = _context.t0;
                  console.log('This is budget:', budget);
                  rows = [];
                  budget.expenses.categories.forEach(function (row) {
                    if (row.amount < 1000) {
                      return;
                    }

                    rows.push(['Income', row.name, row.amount]);
                    var other = 0;
                    row.categories.forEach(function (sr) {
                      if (sr.amount < 1000) {
                        other += sr.amount;
                      } else {
                        rows.push([row.name, sr.name, sr.amount]);
                      }
                    });

                    if (other >= 1000) {
                      rows.push([row.name, "".concat(row.name, " other"), other]);
                    }
                  });
                  rows.push(['Thomas', 'skatt', budget.salary.skatt]);
                  budget.income.categories.forEach(function (row) {
                    if (row.amount > 1000) {
                      rows.push([row.name, 'Income', row.amount]);
                    }
                  }); // console.log('Got budget:', budget);
                  // console.log('Calculated rows:', rows);

                  data = new google.visualization.DataTable();
                  data.addColumn('string', 'From');
                  data.addColumn('string', 'To');
                  data.addColumn('number', 'Weight');
                  data.addRows(rows);
                  options = {}; // Instantiate and draw our chart, passing in some options.

                  chart = new google_charts__WEBPACK_IMPORTED_MODULE_0__["GoogleCharts"].api.visualization.Sankey(this.shadowRoot.querySelector('#budget-sankey-container'));
                  chart.draw(data, options);

                case 20:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function drawChart(_x) {
          return _drawChart.apply(this, arguments);
        }

        return drawChart;
      }()
    }, {
      key: "getBudgetData",
      value: function () {
        var _getBudgetData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var year,
              month,
              timeout,
              key,
              item,
              myurl,
              _args2 = arguments;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  year = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 2019;
                  month = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 0;
                  timeout = 30 * 60 * 1000; // 30 minutes

                  key = [year, month].join('-');
                  console.log('getting budget data: ', key);
                  item = JSON.parse(localStorage.getItem(key));

                  if (!item) {
                    _context2.next = 10;
                    break;
                  }

                  if (!(new Date(parseInt(item.timestamp, 10)).getTime() >= Date.now() - timeout)) {
                    _context2.next = 10;
                    break;
                  }

                  console.log('found data in local storage:', key, item);
                  return _context2.abrupt("return", item.data);

                case 10:
                  myurl = "".concat(url, "?y=").concat(year, "&m=").concat(month);
                  console.log('calling url:', myurl);
                  return _context2.abrupt("return", fetch(myurl).then(function (res) {
                    return res.json();
                  }).then(function (json) {
                    console.log('Fetched data from web service', json);
                    var data = {
                      timestamp: Date.now(),
                      data: json
                    };
                    localStorage.setItem(key, JSON.stringify(data));
                    return json;
                  }).catch(function (err) {
                    return console.log('got error:', err);
                  }));

                case 13:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        function getBudgetData() {
          return _getBudgetData.apply(this, arguments);
        }

        return getBudgetData;
      }()
    }]);

    return BudgetSankey;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

  customElements.define('budget-sankey', BudgetSankey);
})();

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_budget_sankey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/budget-sankey */ "./src/scripts/components/budget-sankey.js");
/* harmony import */ var _material_mwc_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-select */ "./node_modules/@material/mwc-select/mwc-select.js");
/* harmony import */ var _material_mwc_list_mwc_list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/mwc-list/mwc-list-item */ "./node_modules/@material/mwc-list/mwc-list-item.js");




window.addEventListener('load', function (e) {
  console.log('window loaded');
  var year = document.querySelector('#budget-year-select');
  var month = document.querySelector('#budget-month-select');

  var dispatch = function dispatch() {
    console.log('dispatching change:', year.value, month.index, month.selected.innerText);
    window.dispatchEvent(new CustomEvent('budget-select-changed', {
      detail: {
        year: year.value,
        month: month.index
      }
    }));
  };

  year.addEventListener('change', function () {
    return dispatch();
  });
  month.addEventListener('change', function () {
    return dispatch();
  });
});

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!**********************************************************!*\
  !*** multi ./src/scripts/main.js ./src/styles/main.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/scripts/main.js */"./src/scripts/main.js");
module.exports = __webpack_require__(/*! ./src/styles/main.scss */"./src/styles/main.scss");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map