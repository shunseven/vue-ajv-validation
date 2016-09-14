/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _index = __webpack_require__(3);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	new _vue2.default({
	    mixins: [_index2.default],
	    validate: {
	        schema: {
	            properties: {
	                name: {
	                    type: 'number'
	                }
	            }
	        },
	        target: "user"
	    },
	    el: '#app',
	    data: {
	        user: {
	            name: '33'
	        }
	    }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/*!
	 * Vue.js v1.0.26
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';

	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}

	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */

	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    if (obj._isVue) {
	      delete obj._data[key];
	      obj._digest();
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */

	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}

	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;

	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}

	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */

	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}

	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function _toString(value) {
	  return value == null ? '' : value.toString();
	}

	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */

	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}

	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */

	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}

	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */

	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}

	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var camelizeRE = /-(\w)/g;

	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}

	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}

	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var hyphenateRE = /([a-z\d])([A-Z])/g;

	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	}

	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var classifyRE = /(?:^|[-_\/])(\w)/g;

	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}

	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */

	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}

	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */

	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}

	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */

	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';

	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}

	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var isArray = Array.isArray;

	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */

	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}

	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */

	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}

	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */

	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}

	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */

	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */

	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}

	var hasProto = ('__proto__' in {});

	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && UA.indexOf('trident') > 0;
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIos = UA && /(iphone|ipad|ipod|ios)/i.test(UA);
	var iosVersionMatch = isIos && UA.match(/os ([\d_]+)/);
	var iosVersion = iosVersionMatch && iosVersionMatch[1].split('_');

	// detecting iOS UIWebView by indexedDB
	var hasMutationObserverBug = iosVersion && Number(iosVersion[0]) >= 9 && Number(iosVersion[1]) >= 3 && !window.indexedDB;

	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;

	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}

	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */

	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks = [];
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }

	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined' && !hasMutationObserverBug) {
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(counter);
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = counter;
	    };
	  } else {
	    // webpack attempts to inject a shim for setImmediate
	    // if it is used as a global, so we have to work around that to
	    // avoid bundling unnecessary code.
	    var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
	    timerFunc = context.setImmediate || setTimeout;
	  }
	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();

	var _Set = undefined;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && Set.toString().match(/native code/)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = function () {
	    this.set = Object.create(null);
	  };
	  _Set.prototype.has = function (key) {
	    return this.set[key] !== undefined;
	  };
	  _Set.prototype.add = function (key) {
	    this.set[key] = 1;
	  };
	  _Set.prototype.clear = function () {
	    this.set = Object.create(null);
	  };
	}

	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}

	var p = Cache.prototype;

	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */

	p.put = function (key, value) {
	  var removed;

	  var entry = this.get(key, true);
	  if (!entry) {
	    if (this.size === this.limit) {
	      removed = this.shift();
	    }
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;

	  return removed;
	};

	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */

	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};

	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */

	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};

	var cache$1 = new Cache(1000);
	var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
	var reservedArgRE = /^in$|^-?\d+/;

	/**
	 * Parser state
	 */

	var str;
	var dir;
	var c;
	var prev;
	var i;
	var l;
	var lastFilterIndex;
	var inSingle;
	var inDouble;
	var curly;
	var square;
	var paren;
	/**
	 * Push a filter to the current directive object
	 */

	function pushFilter() {
	  var exp = str.slice(lastFilterIndex, i).trim();
	  var filter;
	  if (exp) {
	    filter = {};
	    var tokens = exp.match(filterTokenRE);
	    filter.name = tokens[0];
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg);
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter);
	  }
	  lastFilterIndex = i + 1;
	}

	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */

	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}

	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} s
	 * @return {Object}
	 */

	function parseDirective(s) {
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }

	  // reset parser state
	  str = s;
	  inSingle = inDouble = false;
	  curly = square = paren = 0;
	  lastFilterIndex = 0;
	  dir = {};

	  for (i = 0, l = str.length; i < l; i++) {
	    prev = c;
	    c = str.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
	    } else if (c === 0x7C && // pipe
	    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
	      if (dir.expression == null) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        dir.expression = str.slice(0, i).trim();
	      } else {
	        // already has filter
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22:
	          inDouble = true;break; // "
	        case 0x27:
	          inSingle = true;break; // '
	        case 0x28:
	          paren++;break; // (
	        case 0x29:
	          paren--;break; // )
	        case 0x5B:
	          square++;break; // [
	        case 0x5D:
	          square--;break; // ]
	        case 0x7B:
	          curly++;break; // {
	        case 0x7D:
	          curly--;break; // }
	      }
	    }
	  }

	  if (dir.expression == null) {
	    dir.expression = str.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }

	  cache$1.put(s, dir);
	  return dir;
	}

	var directive = Object.freeze({
	  parseDirective: parseDirective
	});

	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */

	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}

	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}

	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */

	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}

	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */

	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}

	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */

	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}

	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */

	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}

	var text = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});

	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];

	var config = Object.defineProperties({

	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */

	  debug: false,

	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */

	  silent: false,

	  /**
	   * Whether to use async rendering.
	   */

	  async: true,

	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */

	  warnExpressionErrors: true,

	  /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */

	  devtools: process.env.NODE_ENV !== 'production',

	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */

	  _delimitersChanged: true,

	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */

	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

	  /**
	   * prop binding modes
	   */

	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },

	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */

	  _maxUpdateCount: 100

	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */

	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});

	var warn = undefined;
	var formatComponentName = undefined;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';

	    warn = function (msg, vm) {
	      if (hasConsole && !config.silent) {
	        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
	      }
	    };

	    formatComponentName = function (vm) {
	      var name = vm._isVue ? vm.$options.name : vm.name;
	      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
	    };
	  })();
	}

	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}

	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}

	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}

	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}

	var transition = Object.freeze({
	  appendWithTransition: appendWithTransition,
	  beforeWithTransition: beforeWithTransition,
	  removeWithTransition: removeWithTransition,
	  applyTransition: applyTransition
	});

	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */

	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}

	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function inDoc(node) {
	  if (!node) return false;
	  var doc = node.ownerDocument.documentElement;
	  var parent = node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}

	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */

	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}

	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */

	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}

	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */

	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}

	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}

	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}

	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */

	function remove(el) {
	  el.parentNode.removeChild(el);
	}

	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}

	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */

	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}

	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */

	function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}

	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */

	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}

	/**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getClass(el) {
	  var classname = el.className;
	  if (typeof classname === 'object') {
	    classname = classname.baseVal || '';
	  }
	  return classname;
	}

	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}

	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}

	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}

	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */

	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}

	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */

	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}

	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}

	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */

	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}

	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */

	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
	}

	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */

	var refRE = /^v-ref:/;

	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}

	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */

	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}

	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */

	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}

	/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isFragment(node) {
	  return node && node.nodeType === 11;
	}

	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}

	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
	var reservedTagRE = /^(slot|partial|component)$/i;

	var isUnknownElement = undefined;
	if (process.env.NODE_ENV !== 'production') {
	  isUnknownElement = function (el, tag) {
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return (/HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        // Firefox returns unknown for some "Interactive elements."
	        !/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag)
	      );
	    }
	  };
	}

	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el, options);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
	        if (expectedTag) {
	          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
	        } else if (isUnknownElement(el, tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el, options);
	  }
	}

	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function getIsBinding(el, options) {
	  // dynamic syntax
	  var exp = el.getAttribute('is');
	  if (exp != null) {
	    if (resolveAsset(options, 'components', exp)) {
	      el.removeAttribute('is');
	      return { id: exp };
	    }
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */

	var strats = config.optionMergeStrategies = Object.create(null);

	/**
	 * Helper that recursively merges two data objects together.
	 */

	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}

	/**
	 * Data
	 */

	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};

	/**
	 * El
	 */

	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};

	/**
	 * Hooks and param attributes are merged as arrays.
	 */

	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */

	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */

	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};

	/**
	 * Other object hashes.
	 */

	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};

	/**
	 * Default strategy.
	 */

	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};

	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */

	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var ids = Object.keys(components);
	    var def;
	    if (process.env.NODE_ENV !== 'production') {
	      var map = options._componentNameMap = {};
	    }
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      // record a all lowercase <-> kebab-case mapping for
	      // possible custom element case error warning
	      if (process.env.NODE_ENV !== 'production') {
	        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */

	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}

	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */

	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */

	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  if (process.env.NODE_ENV !== 'production') {
	    if (child.propsData && !vm) {
	      warn('propsData can only be used as an instantiation option.');
	    }
	  }
	  var options = {};
	  var key;
	  if (child['extends']) {
	    parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      var mixinOptions = mixin.prototype instanceof Vue ? mixin.options : mixin;
	      parent = mergeOptions(parent, mixinOptions, vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @param {Boolean} warnMissing
	 * @return {Object|Function}
	 */

	function resolveAsset(options, type, id, warnMissing) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  var res = assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
	  }
	  return res;
	}

	var uid$1 = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
	}

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;

	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};

	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};

	/**
	 * Add self as a dependency to the target watcher.
	 */

	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};

	/**
	 * Notify all subscribers of a new value.
	 */

	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)

	/**
	 * Intercept mutating methods and emit events
	 */

	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});

	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */

	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});

	/**
	 * Convenience method to remove the element at given index or target element reference.
	 *
	 * @param {*} item
	 */

	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However in certain cases, e.g.
	 * v-for scope alias and props, we don't want to force conversion
	 * because the value may be a nested value under a frozen data structure.
	 *
	 * So whenever we want to set a reactive property without forcing
	 * conversion on the new value, we wrap that call inside this function.
	 */

	var shouldConvert = true;

	function withoutConversion(fn) {
	  shouldConvert = false;
	  fn();
	  shouldConvert = true;
	}

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */

	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}

	// Instance methods

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */

	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};

	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */

	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};

	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */

	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};

	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};

	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */

	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */

	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */

	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}

	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */

	function defineReactive(obj, key, val) {
	  var dep = new Dep();

	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;

	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}



	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		isIE: isIE,
		isIE9: isIE9,
		isAndroid: isAndroid,
		isIos: isIos,
		iosVersionMatch: iosVersionMatch,
		iosVersion: iosVersion,
		hasMutationObserverBug: hasMutationObserverBug,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		get _Set () { return _Set; },
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		isFragment: isFragment,
		getOuterHTML: getOuterHTML,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		checkComponentAttr: checkComponentAttr,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});

	var uid = 0;

	function initMixin (Vue) {
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */

	  Vue.prototype._init = function (options) {
	    options = options || {};

	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives

	    // a uid
	    this._uid = uid++;

	    // a flag to avoid this being observed
	    this._isVue = true;

	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization

	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}

	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;

	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;

	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;

	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to reigster itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }

	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }

	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);

	    // set ref
	    this._updateRef();

	    // initialize data as empty object.
	    // it will be filled up in _initData().
	    this._data = {};

	    // call init hook
	    this._callHook('init');

	    // initialize data observation and scope inheritance.
	    this._initState();

	    // setup event system and option events.
	    this._initEvents();

	    // call created hook
	    this._callHook('created');

	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}

	var pathCache = new Cache(1000);

	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;

	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;

	var pathStateMachine = [];

	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};

	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};

	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};

	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};

	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};

	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */

	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }

	  var code = ch.charCodeAt(0);

	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;

	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';

	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }

	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }

	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }

	  return 'else';
	}

	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */

	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}

	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;

	  var actions = [];

	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };

	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };

	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };

	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };

	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }

	  while (mode != null) {
	    index++;
	    c = path[index];

	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }

	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;

	    if (transition === ERROR) {
	      return; // parse error
	    }

	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }

	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}

	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}

	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */

	function getPath(obj, path) {
	  return parseExpression(path).get(obj);
	}

	/**
	 * Warn against setting non-existent root path on a vm.
	 */

	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path, vm) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
	  };
	}

	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */

	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path, last);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path, obj);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}

	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});

	var expressionCache = new Cache(1000);

	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var literalValueRE$1 = /^(?:true|false|null|undefined|Infinity|NaN)$/;

	function noop() {}

	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */

	var saved = [];

	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */

	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}

	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */

	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}

	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */

	function restore(str, i) {
	  return saved[i];
	}

	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */

	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here because the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}

	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */

	function makeGetterFn(body) {
	  try {
	    /* eslint-disable no-new-func */
	    return new Function('scope', 'return ' + body + ';');
	    /* eslint-enable no-new-func */
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      /* istanbul ignore if */
	      if (e.toString().match(/unsafe-eval|CSP/)) {
	        warn('It seems you are using the default build of Vue.js in an environment ' + 'with Content Security Policy that prohibits unsafe-eval. ' + 'Use the CSP-compliant build instead: ' + 'http://vuejs.org/guide/installation.html#CSP-compliant-build');
	      } else {
	        warn('Invalid expression. ' + 'Generated function body: ' + body);
	      }
	    }
	    return noop;
	  }
	}

	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */

	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}

	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */

	function parseExpression(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}

	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat literal values as paths
	  !literalValueRE$1.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}

	var expression = Object.freeze({
	  parseExpression: parseExpression,
	  isSimplePath: isSimplePath
	});

	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.

	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;

	/**
	 * Reset the batcher's state.
	 */

	function resetBatcherState() {
	  queue.length = 0;
	  userQueue.length = 0;
	  has = {};
	  circular = {};
	  waiting = false;
	}

	/**
	 * Flush both queues and run the watchers.
	 */

	function flushBatcherQueue() {
	  var _again = true;

	  _function: while (_again) {
	    _again = false;

	    runBatcherQueue(queue);
	    runBatcherQueue(userQueue);
	    // user watchers triggered more watchers,
	    // keep flushing until it depletes
	    if (queue.length) {
	      _again = true;
	      continue _function;
	    }
	    // dev tool hook
	    /* istanbul ignore if */
	    if (devtools && config.devtools) {
	      devtools.emit('flush');
	    }
	    resetBatcherState();
	  }
	}

	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */

	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
	        break;
	      }
	    }
	  }
	  queue.length = 0;
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */

	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushBatcherQueue);
	    }
	  }
	}

	var uid$2 = 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */

	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};

	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */

	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};

	/**
	 * Prepare for dependency collection.
	 */

	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	};

	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */

	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};

	/**
	 * Clean up for dependency collection.
	 */

	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */

	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};

	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */

	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */

	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */

	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subcriber list.
	 */

	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};

	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */

	var seenObjects = new _Set();
	function traverse(val, seen) {
	  var i = undefined,
	      keys = undefined;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  var isA = isArray(val);
	  var isO = isObject(val);
	  if ((isA || isO) && Object.isExtensible(val)) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return;
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) traverse(val[i], seen);
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) traverse(val[keys[i]], seen);
	    }
	  }
	}

	var text$1 = {

	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },

	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};

	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);

	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};

	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isRealTemplate(node) {
	  return isTemplate(node) && isFragment(node.content);
	}

	var tagRE$1 = /<([\w:-]+)/;
	var entityRE = /&#?\w+?;/;
	var commentRE = /<!--/;

	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */

	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }

	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);
	  var commentMatch = commentRE.test(templateString);

	  if (!tagMatch && !entityMatch && !commentMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');

	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }

	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}

	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */

	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment. However, iOS Safari has
	  // bug when using directly cloned template content with touch
	  // events and can cause crashes when the nodes are removed from DOM, so we
	  // have to treat template elements as string templates. (#2805)
	  /* istanbul ignore if */
	  if (isRealTemplate(node)) {
	    return stringToFragment(node.innerHTML);
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}

	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();

	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();

	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */

	function cloneNode(node) {
	  /* istanbul ignore if */
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */

	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;

	  // if the template is already a document fragment,
	  // do nothing
	  if (isFragment(template)) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }

	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }

	  return frag && shouldClone ? cloneNode(frag) : frag;
	}

	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});

	var html = {

	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },

	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },

	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};

	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 * @param {Fragment} [parentFrag]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__v_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__v_frag = this;
	}

	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */

	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};

	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, single node version
	 */

	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, multi-nodes version
	 */

	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Prepare the fragment for removal.
	 */

	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};

	/**
	 * Destroy the fragment.
	 */

	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__v_frag = null;
	  this.unlink();
	};

	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function attach(child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached');
	  }
	}

	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function detach(child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached');
	  }
	}

	var linkerCache = new Cache(5000);

	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : getOuterHTML(el));
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}

	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */

	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};

	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var IF = 2100;
	var FOR = 2200;
	var SLOT = 2300;

	var uid$3 = 0;

	var vFor = {

	  priority: FOR,
	  terminal: true,

	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

	  bind: function bind() {
	    // support "item in/of items" syntax
	    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }

	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
	      return;
	    }

	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$3;

	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);

	    // cache
	    this.cache = Object.create(null);

	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },

	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },

	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */

	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;

	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          withoutConversion(function () {
	            frag.scope[alias] = value;
	          });
	        }
	      } else {
	        // new isntance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }

	    // we're done for the initial render.
	    if (init) {
	      return;
	    }

	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    if (removalIndex) {
	      this.vm._watchers = this.vm._watchers.filter(function (w) {
	        return w.active;
	      });
	    }

	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },

	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */

	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    // important: define the scope alias without forced conversion
	    // so that frozen data structures remain non-reactive.
	    withoutConversion(function () {
	      defineReactive(scope, alias, value);
	    });
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },

	  /**
	   * Update the v-ref on owner vm.
	   */

	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },

	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */

	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },

	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */

	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__v_frag = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      var target = prevEl.nextSibling;
	      /* istanbul ignore if */
	      if (!target) {
	        // reset end anchor position in case the position was messed up
	        // by an external drag-n-drop library.
	        after(this.end, prevEl);
	        target = this.end;
	      }
	      frag.before(target);
	    }
	  },

	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */

	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },

	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */

	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },

	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */

	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = getTrackByKey(index, key, value, trackByKey);
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else if (Object.isExtensible(value)) {
	        def(value, id, frag);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
	      }
	    }
	    frag.raw = value;
	  },

	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */

	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },

	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */

	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },

	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */

	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },

	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */

	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },

	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * watcher's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */

	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },

	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};

	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */

	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__v_frag;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__v_frag;
	  }
	  return frag;
	}

	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */

	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}

	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */

	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}

	/**
	 * Get the track by key for an item.
	 *
	 * @param {Number} index
	 * @param {String} key
	 * @param {*} value
	 * @param {String} [trackByKey]
	 */

	function getTrackByKey(index, key, value, trackByKey) {
	  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
	}

	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
	  };
	}

	var vIf = {

	  priority: IF,
	  terminal: true,

	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseEl = next;
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
	      this.invalid = true;
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },

	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    // lazy init factory
	    if (!this.factory) {
	      this.factory = new FragmentFactory(this.vm, this.el);
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },

	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseEl && !this.elseFrag) {
	      if (!this.elseFactory) {
	        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
	      }
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};

	var show = {

	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },

	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },

	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};

	var text$2 = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;

	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }

	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }

	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };

	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }

	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.rawListener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.rawListener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }

	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }

	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    // #3029 only update when the value changes. This prevent
	    // browsers from overwriting values like selectionStart
	    value = _toString(value);
	    if (value !== this.el.value) this.el.value = value;
	  },

	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};

	var radio = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };

	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);

	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};

	var select = {

	  bind: function bind() {
	    var _this = this;

	    var self = this;
	    var el = this.el;

	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };

	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');

	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);

	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }

	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', function () {
	      nextTick(_this.forceUpdate);
	    });
	    if (!inDoc(el)) {
	      nextTick(this.forceUpdate);
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },

	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};

	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */

	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */

	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}

	var checkbox = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };

	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }

	    this.listener = function () {
	      var model = self._watcher.value;
	      if (isArray(model)) {
	        var val = self.getValue();
	        if (el.checked) {
	          if (indexOf(model, val) < 0) {
	            model.push(val);
	          }
	        } else {
	          model.$remove(val);
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };

	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};

	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};

	var model = {

	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],

	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */

	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },

	  /**
	   * Check read/write filter stats.
	   */

	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },

	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};

	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};

	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}

	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}

	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}

	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}

	var on$1 = {

	  priority: ON,
	  acceptStatement: true,
	  keyCodes: keyCodes,

	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },

	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }

	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
	      return;
	    }

	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }

	    this.reset();
	    this.handler = handler;

	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },

	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },

	  unbind: function unbind() {
	    this.reset();
	  }
	};

	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);

	var testEl = null;

	var style = {

	  deep: true,

	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },

	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
	        }
	        value = value.replace(importantRE, '').trim();
	        this.el.style.setProperty(prop.kebab, value, isImportant);
	      } else {
	        this.el.style[prop.camel] = value;
	      }
	    } else {
	      this.el.style[prop.camel] = '';
	    }
	  }

	};

	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}

	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  if (camel !== 'filter' && camel in testEl.style) {
	    return {
	      kebab: prop,
	      camel: camel
	    };
	  }
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return {
	        kebab: prefixes[i] + prop,
	        camel: prefixed
	      };
	    }
	  }
	}

	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;

	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	// these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;

	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};

	var bind$1 = {

	  priority: BIND,

	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }

	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }

	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
	        }

	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
	        }
	      }
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  // share object handler with v-bind:class
	  handleObject: style.handleObject,

	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;

	      if (el[attr] !== attrValue) {
	        el[attr] = attrValue;
	      }
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (enumeratedAttrRE.test(attr)) {
	      el.setAttribute(attr, value ? 'true' : 'false');
	    } else if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};

	var el = {

	  priority: EL,

	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },

	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};

	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
	  }
	};

	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};

	// must export plain object
	var directives = {
	  text: text$1,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on$1,
	  bind: bind$1,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};

	var vClass = {

	  deep: true,

	  update: function update(value) {
	    if (!value) {
	      this.cleanup();
	    } else if (typeof value === 'string') {
	      this.setClass(value.trim().split(/\s+/));
	    } else {
	      this.setClass(normalize$1(value));
	    }
	  },

	  setClass: function setClass(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      var val = value[i];
	      if (val) {
	        apply(this.el, val, addClass);
	      }
	    }
	    this.prevKeys = value;
	  },

	  cleanup: function cleanup(value) {
	    var prevKeys = this.prevKeys;
	    if (!prevKeys) return;
	    var i = prevKeys.length;
	    while (i--) {
	      var key = prevKeys[i];
	      if (!value || value.indexOf(key) < 0) {
	        apply(this.el, key, removeClass);
	      }
	    }
	  }
	};

	/**
	 * Normalize objects and arrays (potentially containing objects)
	 * into array of strings.
	 *
	 * @param {Object|Array<String|Object>} value
	 * @return {Array<String>}
	 */

	function normalize$1(value) {
	  var res = [];
	  if (isArray(value)) {
	    for (var i = 0, l = value.length; i < l; i++) {
	      var _key = value[i];
	      if (_key) {
	        if (typeof _key === 'string') {
	          res.push(_key);
	        } else {
	          for (var k in _key) {
	            if (_key[k]) res.push(k);
	          }
	        }
	      }
	    }
	  } else if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) res.push(key);
	    }
	  }
	  return res;
	}

	/**
	 * Add or remove a class/classes on an element
	 *
	 * @param {Element} el
	 * @param {String} key The class name. This may or may not
	 *                     contain a space character, in such a
	 *                     case we'll deal with multiple class
	 *                     names at once.
	 * @param {Function} fn
	 */

	function apply(el, key, fn) {
	  key = key.trim();
	  if (key.indexOf(' ') === -1) {
	    fn(el, key);
	    return;
	  }
	  // The key contains one or more space characters.
	  // Since a class name doesn't accept such characters, we
	  // treat it as multiple classes.
	  var keys = key.split(/\s+/);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    fn(el, keys[i]);
	  }
	}

	var component = {

	  priority: COMPONENT,

	  params: ['keep-alive', 'transition-mode', 'inline-template'],

	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */

	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      this.el.removeAttribute(':is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },

	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */

	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },

	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */

	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },

	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  resolveComponent: function resolveComponent(value, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(value, this.pendingComponentCb);
	  },

	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */

	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHooks = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHooks && !cached) {
	      this.waitingFor = newComponent;
	      callActivateHooks(activateHooks, newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },

	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */

	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },

	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */

	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
	      }
	      return child;
	    }
	  },

	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */

	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },

	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */

	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      if (!this.keepAlive) {
	        this.waitingFor.$destroy();
	      }
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._inactive = true;
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },

	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */

	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },

	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */

	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (current) current._inactive = true;
	    target._inactive = false;
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },

	  /**
	   * Unbind.
	   */

	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};

	/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */

	function callActivateHooks(hooks, vm, cb) {
	  var total = hooks.length;
	  var called = 0;
	  hooks[0].call(vm, next);
	  function next() {
	    if (++called >= total) {
	      cb();
	    } else {
	      hooks[called].call(vm, next);
	    }
	  }
	}

	var propBindingModes = config._propBindingModes;
	var empty = {};

	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @param {Vue} vm
	 * @return {Function} propsLinkFn
	 */

	function compileProps(el, propOptions, vm) {
	  var props = [];
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;

	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.', vm);
	      continue;
	    }

	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
	      continue;
	    }

	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };

	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
	        }
	      }
	      prop.parentPath = value;

	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.', vm);
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (process.env.NODE_ENV !== 'production') {
	      // check possible camelCase prop usage
	      var lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
	      } else if (options.required) {
	        // warn missing required
	        warn('Missing required prop: ' + name, vm);
	      }
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}

	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */

	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var inlineProps = vm.$options.propsData;
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (inlineProps && hasOwn(inlineProps, path)) {
	        initProp(vm, prop, inlineProps[path]);
	      }if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, undefined);
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (prop.mode === propBindingModes.ONE_TIME) {
	          // one time binding
	          value = (scope || vm._context || vm).$get(prop.parentPath);
	          initProp(vm, prop, value);
	        } else {
	          if (vm._context) {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          } else {
	              // root instance
	              initProp(vm, prop, vm.$get(prop.parentPath));
	            }
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value, or with same
	        // literal value (e.g. disabled="disabled")
	        // see https://github.com/vuejs/vue-loader/issues/182
	        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}

	/**
	 * Process a prop with a rawValue, applying necessary coersions,
	 * default values & assertions and call the given callback with
	 * processed value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} rawValue
	 * @param {Function} fn
	 */

	function processPropValue(vm, prop, rawValue, fn) {
	  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
	  var value = rawValue;
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop);
	  }
	  value = coerceProp(prop, value, vm);
	  var coerced = value !== rawValue;
	  if (!assertProp(prop, value, vm)) {
	    value = undefined;
	  }
	  if (isSimple && !coerced) {
	    withoutConversion(function () {
	      fn(value);
	    });
	  } else {
	    fn(value);
	  }
	}

	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function initProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    defineReactive(vm, prop.path, value);
	  });
	}

	/**
	 * Update a prop's value on a vm.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function updateProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    vm[prop.path] = value;
	  });
	}

	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @return {*}
	 */

	function getPropDefaultValue(vm, prop) {
	  // no default, return undefined
	  var options = prop.options;
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}

	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 * @param {Vue} vm
	 */

	function assertProp(prop, value, vm) {
	  if (!prop.options.required && ( // non-required
	  prop.raw === null || // abscent
	  value == null) // null or undefined
	  ) {
	      return true;
	    }
	  var options = prop.options;
	  var type = options.type;
	  var valid = !type;
	  var expectedTypes = [];
	  if (type) {
	    if (!isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
	    }
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator(value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
	      return false;
	    }
	  }
	  return true;
	}

	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */

	function coerceProp(prop, value, vm) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  if (typeof coerce === 'function') {
	    return coerce(value);
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid coerce for prop "' + prop.name + '": expected function, got ' + typeof coerce + '.', vm);
	    return value;
	  }
	}

	/**
	 * Assert the type of a value
	 *
	 * @param {*} value
	 * @param {Function} type
	 * @return {Object}
	 */

	function assertType(value, type) {
	  var valid;
	  var expectedType;
	  if (type === String) {
	    expectedType = 'string';
	    valid = typeof value === expectedType;
	  } else if (type === Number) {
	    expectedType = 'number';
	    valid = typeof value === expectedType;
	  } else if (type === Boolean) {
	    expectedType = 'boolean';
	    valid = typeof value === expectedType;
	  } else if (type === Function) {
	    expectedType = 'function';
	    valid = typeof value === expectedType;
	  } else if (type === Object) {
	    expectedType = 'object';
	    valid = isPlainObject(value);
	  } else if (type === Array) {
	    expectedType = 'array';
	    valid = isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  };
	}

	/**
	 * Format type for output
	 *
	 * @param {String} type
	 * @return {String}
	 */

	function formatType(type) {
	  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
	}

	/**
	 * Format value
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}

	var bindingModes = config._propBindingModes;

	var propDef = {

	  bind: function bind() {
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;

	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      updateProp(child, prop, val);
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });

	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);

	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },

	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};

	var queue$1 = [];
	var queued = false;

	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */

	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}

	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */

	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}

	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';

	/**
	 * If a just-entered element is applied the
	 * leave class while its enter transition hasn't started yet,
	 * and the transitioned property has the same value for both
	 * enter/leave, then the leave transition will be skipped and
	 * the transitionend event never fires. This function ensures
	 * its callback to be called after a transition has started
	 * by waiting for double raf.
	 *
	 * It falls back to setTimeout on devices that support CSS
	 * transitions but not raf (e.g. Android 4.2 browser) - since
	 * these environments are usually slow, we are giving it a
	 * relatively large timeout.
	 */

	var raf = inBrowser && window.requestAnimationFrame;
	var waitForTransitionStart = raf
	/* istanbul ignore next */
	? function (fn) {
	  raf(function () {
	    raf(fn);
	  });
	} : function (fn) {
	  setTimeout(fn, 50);
	};

	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind(self[m], self);
	  });
	}

	var p$1 = Transition.prototype;

	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */

	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};

	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */

	p$1.enterNextTick = function () {
	  var _this = this;

	  // prevent transition skipping
	  this.justEntered = true;
	  waitForTransitionStart(function () {
	    _this.justEntered = false;
	  });
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};

	/**
	 * The "cleanup" phase of an entering transition.
	 */

	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};

	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */

	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};

	/**
	 * The "nextTick" phase of a leaving transition.
	 */

	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};

	/**
	 * The "cleanup" phase of a leaving transition.
	 */

	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};

	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */

	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};

	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */

	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};

	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */

	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};

	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */

	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};

	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */

	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on(el, event, onEnd);
	};

	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */

	function isHidden(el) {
	  if (/svg$/.test(el.namespaceURI)) {
	    // SVG elements do not have offset(Width|Height)
	    // so we need to check the client rect
	    var rect = el.getBoundingClientRect();
	    return !(rect.width || rect.height);
	  } else {
	    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	  }
	}

	var transition$1 = {

	  priority: TRANSITION,

	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    oldId = oldId || 'v';
	    el.__v_trans = new Transition(el, id, hooks, this.vm);
	    removeClass(el, oldId + '-transition');
	    addClass(el, id + '-transition');
	  }
	};

	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition$1
	};

	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;

	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	var DEFAULT_TERMINAL_PRIORITY = 2000;

	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */

	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */

	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}

	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */

	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV === 'production') {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  dirs.sort(directiveComparator);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}

	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */

	function directiveComparator(a, b) {
	  a = a.descriptor.def.priority || DEFAULT_PRIORITY;
	  b = b.descriptor.def.priority || DEFAULT_PRIORITY;
	  return a > b ? -1 : a === b ? 0 : 1;
	}

	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */

	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}

	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */

	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (process.env.NODE_ENV !== 'production' && !destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}

	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */

	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props, vm);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}

	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */

	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;

	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;
	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
	    }
	  }

	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }

	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);

	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}

	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && !isScript(node)) {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}

	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  var attrs = hasAttrs && toArray(el.attributes);
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, attrs, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(attrs, options);
	  }
	  return linkFn;
	}

	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */

	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }

	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }

	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }

	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}

	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */

	function removeText(vm, node) {
	  remove(node);
	}

	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */

	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: directives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}

	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */

	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = _toString(value);
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}

	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}

	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */

	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}

	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */

	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) {
	    return;
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}

	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}

	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */

	function checkTerminalDirectives(el, attrs, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }

	  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
	  for (var i = 0, j = attrs.length; i < j; i++) {
	    attr = attrs[i];
	    name = attr.name.replace(modifierRE, '');
	    if (matched = name.match(dirAttrRE)) {
	      def = resolveAsset(options, 'directives', matched[1]);
	      if (def && def.terminal) {
	        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
	          termDef = def;
	          rawName = attr.name;
	          modifiers = parseModifiers(attr.name);
	          value = attr.value;
	          dirName = matched[1];
	          arg = matched[2];
	        }
	      }
	    }
	  }

	  if (termDef) {
	    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
	  }
	}

	function skip() {}
	skip.terminal = true;

	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} def
	 * @param {String} [rawName]
	 * @param {String} [arg]
	 * @param {Object} [modifiers]
	 * @return {Function} terminalLinkFn
	 */

	function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    arg: arg,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    attr: rawName,
	    modifiers: modifiers,
	    def: def
	  };
	  // check ref for v-for and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}

	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */

	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');

	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', directives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
	        }
	      }
	    } else

	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else

	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', directives.on);
	        } else

	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', directives.bind);
	            }
	          } else

	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];

	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }

	              dirDef = resolveAsset(options, 'directives', dirName, true);
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }

	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */

	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }

	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}

	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */

	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}

	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */

	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}

	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */

	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}

	function isScript(el) {
	  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
	}

	var specialCharRE = /[^\w\-:\.]/;

	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (isFragment(el)) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}

	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}

	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */

	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}

	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */

	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
	      value.split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}

	/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */

	function resolveSlots(vm, content) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = Object.create(null);
	  var el, name;
	  for (var i = 0, l = content.children.length; i < l; i++) {
	    el = content.children[i];
	    /* eslint-disable no-cond-assign */
	    if (name = el.getAttribute('slot')) {
	      (contents[name] || (contents[name] = [])).push(el);
	    }
	    /* eslint-enable no-cond-assign */
	    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
	      warn('The "slot" attribute must be static.', vm.$parent);
	    }
	  }
	  for (name in contents) {
	    contents[name] = extractFragment(contents[name], content);
	  }
	  if (content.hasChildNodes()) {
	    var nodes = content.childNodes;
	    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
	      return;
	    }
	    contents['default'] = extractFragment(content.childNodes, content);
	  }
	}

	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */

	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      parent.removeChild(node);
	      node = parseTemplate(node, true);
	    }
	    frag.appendChild(node);
	  }
	  return frag;
	}



	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		transclude: transclude,
		resolveSlots: resolveSlots
	});

	function stateMixin (Vue) {
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */

	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });

	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */

	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };

	  /**
	   * Initialize props.
	   */

	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };

	  /**
	   * Initialize the data.
	   */

	  Vue.prototype._initData = function () {
	    var dataFn = this.$options.data;
	    var data = this._data = dataFn ? dataFn() : {};
	    if (!isPlainObject(data)) {
	      data = {};
	      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.', this);
	    }
	    var props = this._props;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      // there are two scenarios where we can proxy a data key:
	      // 1. it's not already defined as a prop
	      // 2. it's provided via a instantiation option AND there are no
	      //    template prop present
	      if (!props || !hasOwn(props, key)) {
	        this._proxy(key);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
	      }
	    }
	    // observe data
	    observe(data, this);
	  };

	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */

	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };

	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */

	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };

	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */

	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };

	  /**
	   * Force update on every watcher in scope.
	   */

	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };

	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */

	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
	          def.set = userDef.set ? bind(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };

	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }

	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */

	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind(methods[key], this);
	      }
	    }
	  };

	  /**
	   * Initialize meta information like $index, $key & $value.
	   */

	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}

	var eventRE = /^v-on:|^@/;

	function eventsMixin (Vue) {
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */

	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };

	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */

	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, value, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        // force the expression into a statement so that
	        // it always dynamically resolves the method to call (#2670)
	        // kinda ugly hack, but does the job.
	        value = attrs[i].value;
	        if (isSimplePath(value)) {
	          value += '.apply(this, $arguments)';
	        }
	        handler = (vm._scope || vm._context).$eval(value, true);
	        handler._fromParent = true;
	        vm.$on(name.replace(eventRE), handler);
	      }
	    }
	  }

	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */

	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }

	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */

	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }

	  /**
	   * Setup recursive attached/detached calls
	   */

	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };

	  /**
	   * Callback to recursively call attached hook on children
	   */

	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }

	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */

	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }

	  /**
	   * Callback to recursively call detached hook on children
	   */

	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }

	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */

	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }

	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */

	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}

	function noop$1() {}

	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Object} [modifiers]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} arg
	 *                 - {String} raw
	 *                 - {String} [ref]
	 *                 - {Array<Object>} [interp]
	 *                 - {Boolean} [hasOneTime]
	 * @param {Vue} vm
	 * @param {Node} el
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}

	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 */

	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;

	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }

	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }

	  // setup directive params
	  this._setupParams();

	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;

	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop$1;
	    }
	    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};

	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */

	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = hyphenate(params[i]);
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};

	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */

	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};

	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */

	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};

	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */

	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};

	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */

	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};

	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */

	Directive.prototype.on = function (event, handler, useCapture) {
	  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};

	/**
	 * Teardown the watcher and call unbind.
	 */

	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};

	function lifecycleMixin (Vue) {
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */

	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };

	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._compile = function (el) {
	    var options = this.$options;

	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);

	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }

	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);

	    // resolve slot distribution
	    resolveSlots(this, options._content);

	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }

	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };

	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }

	    this._isCompiled = true;
	    this._callHook('compiled');
	  };

	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._initElement = function (el) {
	    if (isFragment(el)) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };

	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {Object} descriptor - parsed directive descriptor
	   * @param {Node} node   - target node
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */

	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };

	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */

	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }

	    var destroyReady;
	    var pendingRemoval;

	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };

	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }

	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }

	    destroyReady = true;
	    cleanupIfPossible();
	  };

	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */

	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data && this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}

	function miscMixin (Vue) {
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */

	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[write ? l - i - 1 : i];
	      fn = resolveAsset(this.$options, 'filters', filter.name, true);
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };

	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  Vue.prototype._resolveComponent = function (value, cb) {
	    var factory;
	    if (typeof value === 'function') {
	      factory = value;
	    } else {
	      factory = resolveAsset(this.$options, 'components', value, true);
	    }
	    /* istanbul ignore if */
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory.call(this, function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}

	var filterRE$1 = /[^|]\|[^|]/;

	function dataAPI (Vue) {
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */

	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression(exp);
	    if (res) {
	      if (asStatement) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };

	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */

	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };

	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */

	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };

	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */

	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };

	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */

	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE$1.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };

	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */

	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };

	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */

	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      var key;
	      for (key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	      if (this._props) {
	        for (key in this._props) {
	          data[key] = clean(this[key]);
	        }
	      }
	    }
	    console.log(data);
	  };

	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */

	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}

	function domAPI (Vue) {
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */

	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };

	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };

	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };

	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };

	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */

	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }

	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */

	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }

	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }

	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }

	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}

	function eventsAPI (Vue) {
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };

	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };

	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };

	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */

	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };

	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };

	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };

	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */

	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}

	function lifecycleAPI (Vue) {
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */

	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.', this);
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };

	  /**
	   * Mark an instance as ready.
	   */

	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }

	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   *
	   * @param {Boolean} remove
	   * @param {Boolean} deferCleanup
	   */

	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };

	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @param {Object} [scope]
	   * @param {Fragment} [frag]
	   * @return {Function}
	   */

	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}

	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */

	function Vue(options) {
	  this._init(options);
	}

	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);

	// install instance APIs
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);

	var slot = {

	  priority: SLOT,
	  params: ['name'],

	  bind: function bind() {
	    // this was resolved during component transclusion
	    var name = this.params.name || 'default';
	    var content = this.vm._slotContents && this.vm._slotContents[name];
	    if (!content || !content.hasChildNodes()) {
	      this.fallback();
	    } else {
	      this.compile(content.cloneNode(true), this.vm._context, this.vm);
	    }
	  },

	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        // the else block should be compiled in child scope
	        elseBlock._context = this.vm;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },

	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },

	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};

	var partial = {

	  priority: PARTIAL,

	  params: ['name'],

	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },

	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },

	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};

	var elementDirectives = {
	  slot: slot,
	  partial: partial
	};

	var convertArray = vFor._postProcess;

	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */

	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}

	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */

	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}

	/**
	 * Filter filter for arrays
	 *
	 * @param {String|Array<String>|Function} ...sortKeys
	 * @param {Number} [order]
	 */

	function orderBy(arr) {
	  var comparator = null;
	  var sortKeys = undefined;
	  arr = convertArray(arr);

	  // determine order (last argument)
	  var args = toArray(arguments, 1);
	  var order = args[args.length - 1];
	  if (typeof order === 'number') {
	    order = order < 0 ? -1 : 1;
	    args = args.length > 1 ? args.slice(0, -1) : args;
	  } else {
	    order = 1;
	  }

	  // determine sortKeys & comparator
	  var firstArg = args[0];
	  if (!firstArg) {
	    return arr;
	  } else if (typeof firstArg === 'function') {
	    // custom comparator
	    comparator = function (a, b) {
	      return firstArg(a, b) * order;
	    };
	  } else {
	    // string keys. flatten first
	    sortKeys = Array.prototype.concat.apply([], args);
	    comparator = function (a, b, i) {
	      i = i || 0;
	      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
	    };
	  }

	  function baseCompare(a, b, sortKeyIndex) {
	    var sortKey = sortKeys[sortKeyIndex];
	    if (sortKey) {
	      if (sortKey !== '$key') {
	        if (isObject(a) && '$value' in a) a = a.$value;
	        if (isObject(b) && '$value' in b) b = b.$value;
	      }
	      a = isObject(a) ? getPath(a, sortKey) : a;
	      b = isObject(b) ? getPath(b, sortKey) : b;
	    }
	    return a === b ? 0 : a > b ? order : -order;
	  }

	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(comparator);
	}

	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */

	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}

	var digitsRE = /(\d{3})(?=\d)/g;

	// asset collections must be a plain object.
	var filters = {

	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,

	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */

	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, arguments.length > 1 ? indent : 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },

	  /**
	   * 'abc' => 'Abc'
	   */

	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },

	  /**
	   * 'abc' => 'ABC'
	   */

	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },

	  /**
	   * 'AbC' => 'abc'
	   */

	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },

	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   * @param {Number} decimals Decimal places
	   */

	  currency: function currency(value, _currency, decimals) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    decimals = decimals != null ? decimals : 2;
	    var stringified = Math.abs(value).toFixed(decimals);
	    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = decimals ? stringified.slice(-1 - decimals) : '';
	    var sign = value < 0 ? '-' : '';
	    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },

	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */

	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    var length = args.length;
	    if (length > 1) {
	      var index = value % 10 - 1;
	      return index in args ? args[index] : args[length - 1];
	    } else {
	      return args[0] + (value === 1 ? '' : 's');
	    }
	  },

	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */

	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};

	function installGlobalAPI (Vue) {
	  /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */

	  Vue.options = {
	    directives: directives,
	    elementDirectives: elementDirectives,
	    filters: filters,
	    transitions: {},
	    components: {},
	    partials: {},
	    replace: true
	  };

	  /**
	   * Expose useful internals
	   */

	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;

	  /**
	   * The following are exposed for advanced usage / plugins
	   */

	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text,
	    template: template,
	    directive: directive,
	    expression: expression
	  };

	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */

	  Vue.cid = 0;
	  var cid = 1;

	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */

	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };

	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */

	  function createClass(name) {
	    /* eslint-disable no-new-func */
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	    /* eslint-enable no-new-func */
	  }

	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */

	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };

	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */

	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };

	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */

	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          if (!definition.name) {
	            definition.name = id;
	          }
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });

	  // expose internal transition API
	  extend(Vue.transition, transition);
	}

	installGlobalAPI(Vue);

	Vue.version = '1.0.26';

	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue);
	    } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	    }
	  }
	}, 0);

	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                   * Created by seven.zhong on 2016/9/5.
	                                                                                                                                                                                                                                                   */


	var _ajvBundle = __webpack_require__(4);

	var _ajvBundle2 = _interopRequireDefault(_ajvBundle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    data: function data() {
	        return {
	            validateState: {},
	            validateError: {}
	        };
	    },
	    created: function created() {
	        var ajv = new _ajvBundle2.default({ allErrors: true });
	        var vm = this;
	        var option = this.$options.validate;
	        if (!option) return;
	        var target = option.target;
	        var vmTarget = vm.$get(target);
	        var labels = option.labels;
	        var validator = option.validator;
	        var schema = option.schema;

	        // schema 优先于 validator
	        if (schema) {
	            console.log(schema);
	            validator = ajv.compile(schema);
	        } else {
	            if (typeof validator === 'function') {
	                validator = validator();
	            }
	        }

	        vm.$validator = validator;

	        function setObjectPathValue(object, path, value) {
	            var pathAry = path.replace(']', '').replace('[', '.').split('.');
	            pathAry.forEach(function (item, i) {
	                if (pathAry.length - 1 == i) {
	                    object[item] = value;
	                }
	                object = object[item];
	            });
	        }

	        function getObjectPathValue(object, path) {
	            var pathAry = path.replace(']', '').replace('[', '.').split('.');
	            var value = '';
	            pathAry.forEach(function (item, i) {
	                if (pathAry.length - 1 == i) {
	                    value = object[item];
	                }
	            });
	            return value;
	        }

	        function setValidateValue(itemProp, error) {
	            if (error) {
	                console.log(error);
	                console.log(itemProp);
	                setObjectPathValue(vm.validateState, itemProp, false);
	                setObjectPathValue(vm.validateError, itemProp, error);
	            } else {
	                setObjectPathValue(vm.validateState, itemProp, true);
	                setObjectPathValue(vm.validateError, itemProp, "");
	            }
	        }

	        function initValidateProp(watchExp, prop) {
	            Object.keys(watchExp).forEach(function (key) {
	                var itemProp = '';
	                if (prop) {
	                    if (Array.isArray(watchExp)) {
	                        itemProp = prop + '[' + key + ']';
	                    } else {
	                        itemProp = prop + '.' + key;
	                    }
	                } else {
	                    itemProp = key;
	                }

	                if (_typeof(watchExp[key]) == 'object') {
	                    return initValidateProp(watchExp[key], itemProp);
	                }
	                vm.$watch(target + '.' + itemProp, function () {
	                    validator(vmTarget);
	                    console.log(validator.errors);
	                    if (!validator.errors) return setValidateValue(itemProp, '');
	                    var hasError = validator.errors.some(function (error) {
	                        if (error.dataPath == '.' + itemProp) {
	                            setValidateValue(itemProp, error.message);
	                        }
	                        return error.dataPath == '.' + itemProp;
	                    });
	                    if (!hasError) {
	                        setValidateValue(itemProp, '');
	                    }
	                });
	                vm.$set('validateState.' + itemProp, true);
	                vm.$set('validateError.' + itemProp, '');
	            });
	        }
	        initValidateProp(vmTarget, '');
	    }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var require;var require;/* WEBPACK VAR INJECTION */(function(global) {(function(f){if(true){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Ajv = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
	'use strict';

	module.exports = {
	  setup: setupAsync,
	  compile: compileAsync
	};


	var util = require('./compile/util');

	var ASYNC = {
	  '*': checkGenerators,
	  'co*': checkGenerators,
	  'es7': checkAsyncFunction
	};

	var TRANSPILE = {
	  'nodent': getNodent,
	  'regenerator': getRegenerator
	};

	var MODES = [
	  { async: 'co*' },
	  { async: 'es7', transpile: 'nodent' },
	  { async: 'co*', transpile: 'regenerator' }
	];


	var regenerator, nodent;


	function setupAsync(opts, required) {
	  if (required !== false) required = true;
	  var async = opts.async
	    , transpile = opts.transpile
	    , check;

	  switch (typeof transpile) {
	    case 'string':
	      var get = TRANSPILE[transpile];
	      if (!get) throw new Error('bad transpiler: ' + transpile);
	      return (opts._transpileFunc = get(opts, required));
	    case 'undefined':
	    case 'boolean':
	      if (typeof async == 'string') {
	        check = ASYNC[async];
	        if (!check) throw new Error('bad async mode: ' + async);
	        return (opts.transpile = check(opts, required));
	      }

	      for (var i=0; i<MODES.length; i++) {
	        var _opts = MODES[i];
	        if (setupAsync(_opts, false)) {
	          util.copy(_opts, opts);
	          return opts.transpile;
	        }
	      }
	      /* istanbul ignore next */
	      throw new Error('generators, nodent and regenerator are not available');
	    case 'function':
	      return (opts._transpileFunc = opts.transpile);
	    default:
	      throw new Error('bad transpiler: ' + transpile);
	  }
	}


	function checkGenerators(opts, required) {
	  /* jshint evil: true */
	  try {
	    eval('(function*(){})()');
	    return true;
	  } catch(e) {
	    /* istanbul ignore next */
	    if (required) throw new Error('generators not supported');
	  }
	}


	function checkAsyncFunction(opts, required) {
	  /* jshint evil: true */
	  try {
	    eval('(async function(){})()');
	    /* istanbul ignore next */
	    return true;
	  } catch(e) {
	    if (required) throw new Error('es7 async functions not supported');
	  }
	}


	function getRegenerator(opts, required) {
	  try {
	    if (!regenerator) {
	      regenerator = require('' + 'regenerator');
	      regenerator.runtime();
	    }
	    if (!opts.async || opts.async === true)
	      opts.async = 'es7';
	    return regeneratorTranspile;
	  } catch(e) {
	    /* istanbul ignore next */
	    if (required) throw new Error('regenerator not available');
	  }
	}


	function regeneratorTranspile(code) {
	  return regenerator.compile(code).code;
	}


	function getNodent(opts, required) {
	  /* jshint evil: true */
	  try {
	    if (!nodent) nodent = require('' + 'nodent')({ log: false, dontInstallRequireHook: true });
	    if (opts.async != 'es7') {
	      if (opts.async && opts.async !== true) console.warn('nodent transpiles only es7 async functions');
	      opts.async = 'es7';
	    }
	    return nodentTranspile;
	  } catch(e) {
	    /* istanbul ignore next */
	    if (required) throw new Error('nodent not available');
	  }
	}


	function nodentTranspile(code) {
	  return nodent.compile(code, '', { promises: true, sourcemap: false }).code;
	}


	/**
	 * Creates validating function for passed schema with asynchronous loading of missing schemas.
	 * `loadSchema` option should be a function that accepts schema uri and node-style callback.
	 * @this  Ajv
	 * @param {Object}   schema schema object
	 * @param {Function} callback node-style callback, it is always called with 2 parameters: error (or null) and validating function.
	 */
	function compileAsync(schema, callback) {
	  /* eslint no-shadow: 0 */
	  /* jshint validthis: true */
	  var schemaObj;
	  var self = this;
	  try {
	    schemaObj = this._addSchema(schema);
	  } catch(e) {
	    setTimeout(function() { callback(e); });
	    return;
	  }
	  if (schemaObj.validate) {
	    setTimeout(function() { callback(null, schemaObj.validate); });
	  } else {
	    if (typeof this._opts.loadSchema != 'function')
	      throw new Error('options.loadSchema should be a function');
	    _compileAsync(schema, callback, true);
	  }


	  function _compileAsync(schema, callback, firstCall) {
	    var validate;
	    try { validate = self.compile(schema); }
	    catch(e) {
	      if (e.missingSchema) loadMissingSchema(e);
	      else deferCallback(e);
	      return;
	    }
	    deferCallback(null, validate);

	    function loadMissingSchema(e) {
	      var ref = e.missingSchema;
	      if (self._refs[ref] || self._schemas[ref])
	        return callback(new Error('Schema ' + ref + ' is loaded but ' + e.missingRef + ' cannot be resolved'));
	      var _callbacks = self._loadingSchemas[ref];
	      if (_callbacks) {
	        if (typeof _callbacks == 'function')
	          self._loadingSchemas[ref] = [_callbacks, schemaLoaded];
	        else
	          _callbacks[_callbacks.length] = schemaLoaded;
	      } else {
	        self._loadingSchemas[ref] = schemaLoaded;
	        self._opts.loadSchema(ref, function (err, sch) {
	          var _callbacks = self._loadingSchemas[ref];
	          delete self._loadingSchemas[ref];
	          if (typeof _callbacks == 'function') {
	            _callbacks(err, sch);
	          } else {
	            for (var i=0; i<_callbacks.length; i++)
	              _callbacks[i](err, sch);
	          }
	        });
	      }

	      function schemaLoaded(err, sch) {
	        if (err) return callback(err);
	        if (!(self._refs[ref] || self._schemas[ref])) {
	          try {
	            self.addSchema(sch, ref);
	          } catch(e) {
	            callback(e);
	            return;
	          }
	        }
	        _compileAsync(schema, callback);
	      }
	    }

	    function deferCallback(err, validate) {
	      if (firstCall) setTimeout(function() { callback(err, validate); });
	      else return callback(err, validate);
	    }
	  }
	}

	},{"./compile/util":10}],2:[function(require,module,exports){
	'use strict';


	var Cache = module.exports = function Cache() {
	  this._cache = {};
	};


	Cache.prototype.put = function Cache_put(key, value) {
	  this._cache[key] = value;
	};


	Cache.prototype.get = function Cache_get(key) {
	  return this._cache[key];
	};


	Cache.prototype.del = function Cache_del(key) {
	  delete this._cache[key];
	};


	Cache.prototype.clear = function Cache_clear() {
	  this._cache = {};
	};

	},{}],3:[function(require,module,exports){
	'use strict';

	//all requires must be explicit because browserify won't work with dynamic requires
	module.exports = {
	  '$ref': require('../dotjs/ref'),
	  allOf: require('../dotjs/allOf'),
	  anyOf: require('../dotjs/anyOf'),
	  dependencies: require('../dotjs/dependencies'),
	  'enum': require('../dotjs/enum'),
	  format: require('../dotjs/format'),
	  items: require('../dotjs/items'),
	  maximum: require('../dotjs/_limit'),
	  minimum: require('../dotjs/_limit'),
	  maxItems: require('../dotjs/_limitItems'),
	  minItems: require('../dotjs/_limitItems'),
	  maxLength: require('../dotjs/_limitLength'),
	  minLength: require('../dotjs/_limitLength'),
	  maxProperties: require('../dotjs/_limitProperties'),
	  minProperties: require('../dotjs/_limitProperties'),
	  multipleOf: require('../dotjs/multipleOf'),
	  not: require('../dotjs/not'),
	  oneOf: require('../dotjs/oneOf'),
	  pattern: require('../dotjs/pattern'),
	  properties: require('../dotjs/properties'),
	  required: require('../dotjs/required'),
	  uniqueItems: require('../dotjs/uniqueItems'),
	  validate: require('../dotjs/validate')
	};

	},{"../dotjs/_limit":13,"../dotjs/_limitItems":14,"../dotjs/_limitLength":15,"../dotjs/_limitProperties":16,"../dotjs/allOf":17,"../dotjs/anyOf":18,"../dotjs/dependencies":21,"../dotjs/enum":22,"../dotjs/format":23,"../dotjs/items":24,"../dotjs/multipleOf":25,"../dotjs/not":26,"../dotjs/oneOf":27,"../dotjs/pattern":28,"../dotjs/properties":30,"../dotjs/ref":31,"../dotjs/required":32,"../dotjs/uniqueItems":34,"../dotjs/validate":35}],4:[function(require,module,exports){
	'use strict';

	module.exports = function equal(a, b) {
	  if (a === b) return true;

	  var arrA = Array.isArray(a)
	    , arrB = Array.isArray(b)
	    , i;

	  if (arrA && arrB) {
	    if (a.length != b.length) return false;
	    for (i = 0; i < a.length; i++)
	      if (!equal(a[i], b[i])) return false;
	    return true;
	  }

	  if (arrA != arrB) return false;

	  if (a && b && typeof a === 'object' && typeof b === 'object') {
	    var keys = Object.keys(a);

	    if (keys.length !== Object.keys(b).length) return false;

	    for (i = 0; i < keys.length; i++)
	      if (b[keys[i]] === undefined) return false;

	    for (i = 0; i < keys.length; i++)
	      if(!equal(a[keys[i]], b[keys[i]])) return false;

	    return true;
	  }

	  return false;
	};

	},{}],5:[function(require,module,exports){
	'use strict';

	var util = require('./util');

	var DATE = /^\d\d\d\d-(\d\d)-(\d\d)$/;
	var DAYS = [0,31,29,31,30,31,30,31,31,30,31,30,31];
	var TIME = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d:\d\d)?$/i;
	var HOSTNAME = /^[a-z](?:(?:[-0-9a-z]{0,61})?[0-9a-z])?(\.[a-z](?:(?:[-0-9a-z]{0,61})?[0-9a-z])?)*$/i;
	var URI = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@\/?]|%[0-9a-f]{2})*)?(?:\#(?:[a-z0-9\-._~!$&'()*+,;=:@\/?]|%[0-9a-f]{2})*)?$/i;
	var UUID = /^(?:urn\:uuid\:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
	var JSON_POINTER = /^(?:\/(?:[^~\/]|~0|~1)+)*(?:\/)?$|^\#(?:\/(?:[a-z0-9_\-\.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)+)*(?:\/)?$/i;
	var RELATIVE_JSON_POINTER = /^(?:0|[1-9][0-9]*)(?:\#|(?:\/(?:[^~\/]|~0|~1)+)*(?:\/)?)$/;


	module.exports = formats;

	function formats(mode) {
	  mode = mode == 'full' ? 'full' : 'fast';
	  var formatDefs = util.copy(formats[mode]);
	  for (var fName in formats.compare) {
	    formatDefs[fName] = {
	      validate: formatDefs[fName],
	      compare: formats.compare[fName]
	    };
	  }
	  return formatDefs;
	}


	formats.fast = {
	  // date: http://tools.ietf.org/html/rfc3339#section-5.6
	  date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/,
	  // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
	  time: /^[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?(?:z|[+-]\d\d:\d\d)?$/i,
	  'date-time': /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s][0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?(?:z|[+-]\d\d:\d\d)$/i,
	  // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
	  uri: /^(?:[a-z][a-z0-9+-.]*)?(?:\:|\/)\/?[^\s]*$/i,
	  // email (sources from jsen validator):
	  // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
	  // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'willful violation')
	  email: /^[a-z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
	  hostname: HOSTNAME,
	  // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
	  ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
	  // optimized http://stackoverflow.com/questions/53497/regular-expression-that-matches-valid-ipv6-addresses
	  ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
	  regex: regex,
	  // uuid: http://tools.ietf.org/html/rfc4122
	  uuid: UUID,
	  // JSON-pointer: https://tools.ietf.org/html/rfc6901
	  // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
	  'json-pointer': JSON_POINTER,
	  // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
	  'relative-json-pointer': RELATIVE_JSON_POINTER
	};


	formats.full = {
	  date: date,
	  time: time,
	  'date-time': date_time,
	  uri: uri,
	  email: /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&''*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
	  hostname: hostname,
	  ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
	  ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
	  regex: regex,
	  uuid: UUID,
	  'json-pointer': JSON_POINTER,
	  'relative-json-pointer': RELATIVE_JSON_POINTER
	};


	formats.compare = {
	  date: compareDate,
	  time: compareTime,
	  'date-time': compareDateTime
	};


	function date(str) {
	  // full-date from http://tools.ietf.org/html/rfc3339#section-5.6
	  var matches = str.match(DATE);
	  if (!matches) return false;

	  var month = +matches[1];
	  var day = +matches[2];
	  return month >= 1 && month <= 12 && day >= 1 && day <= DAYS[month];
	}


	function time(str, full) {
	  var matches = str.match(TIME);
	  if (!matches) return false;

	  var hour = matches[1];
	  var minute = matches[2];
	  var second = matches[3];
	  var timeZone = matches[5];
	  return hour <= 23 && minute <= 59 && second <= 59 && (!full || timeZone);
	}


	var DATE_TIME_SEPARATOR = /t|\s/i;
	function date_time(str) {
	  // http://tools.ietf.org/html/rfc3339#section-5.6
	  var dateTime = str.split(DATE_TIME_SEPARATOR);
	  return dateTime.length == 2 && date(dateTime[0]) && time(dateTime[1], true);
	}


	function hostname(str) {
	  // http://tools.ietf.org/html/rfc1034#section-3.5
	  return str.length <= 255 && HOSTNAME.test(str);
	}


	var NOT_URI_FRAGMENT = /\/|\:/;
	function uri(str) {
	  // http://jmrware.com/articles/2009/uri_regexp/URI_regex.html + optional protocol + required "."
	  return NOT_URI_FRAGMENT.test(str) && URI.test(str);
	}


	function regex(str) {
	  try {
	    new RegExp(str);
	    return true;
	  } catch(e) {
	    return false;
	  }
	}


	function compareDate(d1, d2) {
	  if (!(d1 && d2)) return;
	  if (d1 > d2) return 1;
	  if (d1 < d2) return -1;
	  if (d1 === d2) return 0;
	}


	function compareTime(t1, t2) {
	  if (!(t1 && t2)) return;
	  t1 = t1.match(TIME);
	  t2 = t2.match(TIME);
	  if (!(t1 && t2)) return;
	  t1 = t1[1] + t1[2] + t1[3] + (t1[4]||'');
	  t2 = t2[1] + t2[2] + t2[3] + (t2[4]||'');
	  if (t1 > t2) return 1;
	  if (t1 < t2) return -1;
	  if (t1 === t2) return 0;
	}


	function compareDateTime(dt1, dt2) {
	  if (!(dt1 && dt2)) return;
	  dt1 = dt1.split(DATE_TIME_SEPARATOR);
	  dt2 = dt2.split(DATE_TIME_SEPARATOR);
	  var res = compareDate(dt1[0], dt2[0]);
	  if (res === undefined) return;
	  return res || compareTime(dt1[1], dt2[1]);
	}

	},{"./util":10}],6:[function(require,module,exports){
	'use strict';

	var resolve = require('./resolve')
	  , util = require('./util')
	  , stableStringify = require('json-stable-stringify')
	  , async = require('../async');

	var beautify = (function() { try { return require('' + 'js-beautify').js_beautify; } catch(e) {/*empty*/} })();

	var validateGenerator = require('../dotjs/validate');

	/**
	 * Functions below are used inside compiled validations function
	 */

	var co = require('co');
	var ucs2length = util.ucs2length;
	var equal = require('./equal');

	// this error is thrown by async schemas to return validation errors via exception
	var ValidationError = require('./validation_error');

	module.exports = compile;


	/**
	 * Compiles schema to validation function
	 * @this   Ajv
	 * @param  {Object} schema schema object
	 * @param  {Object} root object with information about the root schema for this schema
	 * @param  {Object} localRefs the hash of local references inside the schema (created by resolve.id), used for inline resolution
	 * @param  {String} baseId base ID for IDs in the schema
	 * @return {Function} validation function
	 */
	function compile(schema, root, localRefs, baseId) {
	  /* jshint validthis: true, evil: true */
	  /* eslint no-shadow: 0 */
	  var self = this
	    , opts = this._opts
	    , refVal = [ undefined ]
	    , refs = {}
	    , patterns = []
	    , patternsHash = {}
	    , defaults = []
	    , defaultsHash = {}
	    , customRules = []
	    , keepSourceCode = this._opts.sourceCode !== false;

	  root = root || { schema: schema, refVal: refVal, refs: refs };

	  var c = checkCompiling.call(this, schema, root, baseId);
	  var compilation = this._compilations[c.index];
	  if (c.compiling) return (compilation.callValidate = callValidate);

	  var formats = this._formats;
	  var RULES = this.RULES;

	  try {
	    var v = localCompile(schema, root, localRefs, baseId);
	    compilation.validate = v;
	    var cv = compilation.callValidate;
	    if (cv) {
	      cv.schema = v.schema;
	      cv.errors = null;
	      cv.refs = v.refs;
	      cv.refVal = v.refVal;
	      cv.root = v.root;
	      cv.$async = v.$async;
	      if (keepSourceCode) cv.sourceCode = v.sourceCode;
	    }
	    return v;
	  } finally {
	    endCompiling.call(this, schema, root, baseId);
	  }

	  function callValidate() {
	    var validate = compilation.validate;
	    var result = validate.apply(null, arguments);
	    callValidate.errors = validate.errors;
	    return result;
	  }

	  function localCompile(_schema, _root, localRefs, baseId) {
	    var isRoot = !_root || (_root && _root.schema == _schema);
	    if (_root.schema != root.schema)
	      return compile.call(self, _schema, _root, localRefs, baseId);

	    var $async = _schema.$async === true;
	    if ($async && !opts.transpile) async.setup(opts);

	    var sourceCode = validateGenerator({
	      isTop: true,
	      schema: _schema,
	      isRoot: isRoot,
	      baseId: baseId,
	      root: _root,
	      schemaPath: '',
	      errSchemaPath: '#',
	      errorPath: '""',
	      RULES: RULES,
	      validate: validateGenerator,
	      util: util,
	      resolve: resolve,
	      resolveRef: resolveRef,
	      usePattern: usePattern,
	      useDefault: useDefault,
	      useCustomRule: useCustomRule,
	      opts: opts,
	      formats: formats,
	      self: self
	    });

	    sourceCode = vars(refVal, refValCode) + vars(patterns, patternCode)
	                   + vars(defaults, defaultCode) + vars(customRules, customRuleCode)
	                   + sourceCode + 'return validate;';

	    if (opts.beautify) {
	      /* istanbul ignore else */
	      if (beautify) sourceCode = beautify(sourceCode, opts.beautify);
	      else console.error('"npm install js-beautify" to use beautify option');
	    }
	    // console.log('\n\n\n *** \n', sourceCode);
	    var validate, validateCode
	      , transpile = opts._transpileFunc;
	    try {
	      validateCode = $async && transpile
	                      ? transpile(sourceCode)
	                      : sourceCode;

	      var makeValidate = new Function(
	        'self',
	        'RULES',
	        'formats',
	        'root',
	        'refVal',
	        'defaults',
	        'customRules',
	        'co',
	        'equal',
	        'ucs2length',
	        'ValidationError',
	        validateCode
	      );

	      validate = makeValidate(
	        self,
	        RULES,
	        formats,
	        root,
	        refVal,
	        defaults,
	        customRules,
	        co,
	        equal,
	        ucs2length,
	        ValidationError
	      );

	      refVal[0] = validate;
	    } catch(e) {
	      console.error('Error compiling schema, function code:', validateCode);
	      throw e;
	    }

	    validate.schema = _schema;
	    validate.errors = null;
	    validate.refs = refs;
	    validate.refVal = refVal;
	    validate.root = isRoot ? validate : _root;
	    if ($async) validate.$async = true;
	    if (keepSourceCode) validate.sourceCode = sourceCode;

	    return validate;
	  }

	  function resolveRef(baseId, ref, isRoot) {
	    ref = resolve.url(baseId, ref);
	    var refIndex = refs[ref];
	    var _refVal, refCode;
	    if (refIndex !== undefined) {
	      _refVal = refVal[refIndex];
	      refCode = 'refVal[' + refIndex + ']';
	      return resolvedRef(_refVal, refCode);
	    }
	    if (!isRoot && root.refs) {
	      var rootRefId = root.refs[ref];
	      if (rootRefId !== undefined) {
	        _refVal = root.refVal[rootRefId];
	        refCode = addLocalRef(ref, _refVal);
	        return resolvedRef(_refVal, refCode);
	      }
	    }

	    refCode = addLocalRef(ref);
	    var v = resolve.call(self, localCompile, root, ref);
	    if (!v) {
	      var localSchema = localRefs && localRefs[ref];
	      if (localSchema) {
	        v = resolve.inlineRef(localSchema, opts.inlineRefs)
	            ? localSchema
	            : compile.call(self, localSchema, root, localRefs, baseId);
	      }
	    }

	    if (v) {
	      replaceLocalRef(ref, v);
	      return resolvedRef(v, refCode);
	    }
	  }

	  function addLocalRef(ref, v) {
	    var refId = refVal.length;
	    refVal[refId] = v;
	    refs[ref] = refId;
	    return 'refVal' + refId;
	  }

	  function replaceLocalRef(ref, v) {
	    var refId = refs[ref];
	    refVal[refId] = v;
	  }

	  function resolvedRef(refVal, code) {
	    return typeof refVal == 'object'
	            ? { code: code, schema: refVal, inline: true }
	            : { code: code, $async: refVal && refVal.$async };
	  }

	  function usePattern(regexStr) {
	    var index = patternsHash[regexStr];
	    if (index === undefined) {
	      index = patternsHash[regexStr] = patterns.length;
	      patterns[index] = regexStr;
	    }
	    return 'pattern' + index;
	  }

	  function useDefault(value) {
	    switch (typeof value) {
	      case 'boolean':
	      case 'number':
	        return '' + value;
	      case 'string':
	        return util.toQuotedString(value);
	      case 'object':
	        if (value === null) return 'null';
	        var valueStr = stableStringify(value);
	        var index = defaultsHash[valueStr];
	        if (index === undefined) {
	          index = defaultsHash[valueStr] = defaults.length;
	          defaults[index] = value;
	        }
	        return 'default' + index;
	    }
	  }

	  function useCustomRule(rule, schema, parentSchema, it) {
	    var validateSchema = rule.definition.validateSchema;
	    if (validateSchema && self._opts.validateSchema !== false) {
	      var valid = validateSchema(schema);
	      if (!valid) {
	        var message = 'keyword schema is invalid: ' + self.errorsText(validateSchema.errors);
	        if (self._opts.validateSchema == 'log') console.error(message);
	        else throw new Error(message);
	      }
	    }

	    var compile = rule.definition.compile
	      , inline = rule.definition.inline
	      , macro = rule.definition.macro;

	    var validate;
	    if (compile) {
	      validate = compile.call(self, schema, parentSchema, it);
	    } else if (macro) {
	      validate = macro.call(self, schema, parentSchema, it);
	      if (opts.validateSchema !== false) self.validateSchema(validate, true);
	    } else if (inline) {
	      validate = inline.call(self, it, rule.keyword, schema, parentSchema);
	    } else {
	      validate = rule.definition.validate;
	    }

	    var index = customRules.length;
	    customRules[index] = validate;

	    return {
	      code: 'customRule' + index,
	      validate: validate
	    };
	  }
	}


	/**
	 * Checks if the schema is currently compiled
	 * @this   Ajv
	 * @param  {Object} schema schema to compile
	 * @param  {Object} root root object
	 * @param  {String} baseId base schema ID
	 * @return {Object} object with properties "index" (compilation index) and "compiling" (boolean)
	 */
	function checkCompiling(schema, root, baseId) {
	  /* jshint validthis: true */
	  var index = compIndex.call(this, schema, root, baseId);
	  if (index >= 0) return { index: index, compiling: true };
	  index = this._compilations.length;
	  this._compilations[index] = {
	    schema: schema,
	    root: root,
	    baseId: baseId
	  };
	  return { index: index, compiling: false };
	}


	/**
	 * Removes the schema from the currently compiled list
	 * @this   Ajv
	 * @param  {Object} schema schema to compile
	 * @param  {Object} root root object
	 * @param  {String} baseId base schema ID
	 */
	function endCompiling(schema, root, baseId) {
	  /* jshint validthis: true */
	  var i = compIndex.call(this, schema, root, baseId);
	  if (i >= 0) this._compilations.splice(i, 1);
	}


	/**
	 * Index of schema compilation in the currently compiled list
	 * @this   Ajv
	 * @param  {Object} schema schema to compile
	 * @param  {Object} root root object
	 * @param  {String} baseId base schema ID
	 * @return {Integer} compilation index
	 */
	function compIndex(schema, root, baseId) {
	  /* jshint validthis: true */
	  for (var i=0; i<this._compilations.length; i++) {
	    var c = this._compilations[i];
	    if (c.schema == schema && c.root == root && c.baseId == baseId) return i;
	  }
	  return -1;
	}


	function patternCode(i, patterns) {
	  return 'var pattern' + i + ' = new RegExp(' + util.toQuotedString(patterns[i]) + ');';
	}


	function defaultCode(i) {
	  return 'var default' + i + ' = defaults[' + i + '];';
	}


	function refValCode(i, refVal) {
	  return refVal[i] ? 'var refVal' + i + ' = refVal[' + i + '];' : '';
	}


	function customRuleCode(i) {
	  return 'var customRule' + i + ' = customRules[' + i + '];';
	}


	function vars(arr, statement) {
	  if (!arr.length) return '';
	  var code = '';
	  for (var i=0; i<arr.length; i++)
	    code += statement(i, arr);
	  return code;
	}

	},{"../async":1,"../dotjs/validate":35,"./equal":4,"./resolve":7,"./util":10,"./validation_error":11,"co":46,"json-stable-stringify":47}],7:[function(require,module,exports){
	'use strict';

	var url = require('url')
	  , equal = require('./equal')
	  , util = require('./util')
	  , SchemaObject = require('./schema_obj');

	module.exports = resolve;

	resolve.normalizeId = normalizeId;
	resolve.fullPath = getFullPath;
	resolve.url = resolveUrl;
	resolve.ids = resolveIds;
	resolve.inlineRef = inlineRef;
	resolve.schema = resolveSchema;

	/**
	 * [resolve and compile the references ($ref)]
	 * @this   Ajv
	 * @param  {Function} compile reference to schema compilation funciton (localCompile)
	 * @param  {Object} root object with information about the root schema for the current schema
	 * @param  {String} ref reference to resolve
	 * @return {Object|Function} schema object (if the schema can be inlined) or validation function
	 */
	function resolve(compile, root, ref) {
	  /* jshint validthis: true */
	  var refVal = this._refs[ref];
	  if (typeof refVal == 'string') {
	    if (this._refs[refVal]) refVal = this._refs[refVal];
	    else return resolve.call(this, compile, root, refVal);
	  }

	  refVal = refVal || this._schemas[ref];
	  if (refVal instanceof SchemaObject) {
	    return inlineRef(refVal.schema, this._opts.inlineRefs)
	            ? refVal.schema
	            : refVal.validate || this._compile(refVal);
	  }

	  var res = resolveSchema.call(this, root, ref);
	  var schema, v, baseId;
	  if (res) {
	    schema = res.schema;
	    root = res.root;
	    baseId = res.baseId;
	  }

	  if (schema instanceof SchemaObject) {
	    v = schema.validate || compile.call(this, schema.schema, root, undefined, baseId);
	  } else if (schema) {
	    v = inlineRef(schema, this._opts.inlineRefs)
	        ? schema
	        : compile.call(this, schema, root, undefined, baseId);
	  }

	  return v;
	}


	/**
	 * Resolve schema, its root and baseId
	 * @this Ajv
	 * @param  {Object} root root object with properties schema, refVal, refs
	 * @param  {String} ref  reference to resolve
	 * @return {Object} object with properties schema, root, baseId
	 */
	function resolveSchema(root, ref) {
	  /* jshint validthis: true */
	  var p = url.parse(ref, false, true)
	    , refPath = _getFullPath(p)
	    , baseId = getFullPath(root.schema.id);
	  if (refPath !== baseId) {
	    var id = normalizeId(refPath);
	    var refVal = this._refs[id];
	    if (typeof refVal == 'string') {
	      return resolveRecursive.call(this, root, refVal, p);
	    } else if (refVal instanceof SchemaObject) {
	      if (!refVal.validate) this._compile(refVal);
	      root = refVal;
	    } else {
	      refVal = this._schemas[id];
	      if (refVal instanceof SchemaObject) {
	        if (!refVal.validate) this._compile(refVal);
	        if (id == normalizeId(ref))
	          return { schema: refVal, root: root, baseId: baseId };
	        root = refVal;
	      } else {
	        return;
	      }
	    }
	    if (!root.schema) return;
	    baseId = getFullPath(root.schema.id);
	  }
	  return getJsonPointer.call(this, p, baseId, root.schema, root);
	}


	/* @this Ajv */
	function resolveRecursive(root, ref, parsedRef) {
	  /* jshint validthis: true */
	  var res = resolveSchema.call(this, root, ref);
	  if (res) {
	    var schema = res.schema;
	    var baseId = res.baseId;
	    root = res.root;
	    if (schema.id) baseId = resolveUrl(baseId, schema.id);
	    return getJsonPointer.call(this, parsedRef, baseId, schema, root);
	  }
	}


	var PREVENT_SCOPE_CHANGE = util.toHash(['properties', 'patternProperties', 'enum', 'dependencies', 'definitions']);
	/* @this Ajv */
	function getJsonPointer(parsedRef, baseId, schema, root) {
	  /* jshint validthis: true */
	  parsedRef.hash = parsedRef.hash || '';
	  if (parsedRef.hash.slice(0,2) != '#/') return;
	  var parts = parsedRef.hash.split('/');

	  for (var i = 1; i < parts.length; i++) {
	    var part = parts[i];
	    if (part) {
	      part = util.unescapeFragment(part);
	      schema = schema[part];
	      if (!schema) break;
	      if (schema.id && !PREVENT_SCOPE_CHANGE[part]) baseId = resolveUrl(baseId, schema.id);
	      if (schema.$ref) {
	        var $ref = resolveUrl(baseId, schema.$ref);
	        var res = resolveSchema.call(this, root, $ref);
	        if (res) {
	          schema = res.schema;
	          root = res.root;
	          baseId = res.baseId;
	        }
	      }
	    }
	  }
	  if (schema && schema != root.schema)
	    return { schema: schema, root: root, baseId: baseId };
	}


	var SIMPLE_INLINED = util.toHash([
	  'type', 'format', 'pattern',
	  'maxLength', 'minLength',
	  'maxProperties', 'minProperties',
	  'maxItems', 'minItems',
	  'maximum', 'minimum',
	  'uniqueItems', 'multipleOf',
	  'required', 'enum'
	]);
	function inlineRef(schema, limit) {
	  if (limit === false) return false;
	  if (limit === undefined || limit === true) return checkNoRef(schema);
	  else if (limit) return countKeys(schema) <= limit;
	}


	function checkNoRef(schema) {
	  var item;
	  if (Array.isArray(schema)) {
	    for (var i=0; i<schema.length; i++) {
	      item = schema[i];
	      if (typeof item == 'object' && !checkNoRef(item)) return false;
	    }
	  } else {
	    for (var key in schema) {
	      if (key == '$ref') return false;
	      item = schema[key];
	      if (typeof item == 'object' && !checkNoRef(item)) return false;
	    }
	  }
	  return true;
	}


	function countKeys(schema) {
	  var count = 0, item;
	  if (Array.isArray(schema)) {
	    for (var i=0; i<schema.length; i++) {
	      item = schema[i];
	      if (typeof item == 'object') count += countKeys(item);
	      if (count == Infinity) return Infinity;
	    }
	  } else {
	    for (var key in schema) {
	      if (key == '$ref') return Infinity;
	      if (SIMPLE_INLINED[key]) {
	        count++;
	      } else {
	        item = schema[key];
	        if (typeof item == 'object') count += countKeys(item) + 1;
	        if (count == Infinity) return Infinity;
	      }
	    }
	  }
	  return count;
	}


	function getFullPath(id, normalize) {
	  if (normalize !== false) id = normalizeId(id);
	  var p = url.parse(id, false, true);
	  return _getFullPath(p);
	}


	function _getFullPath(p) {
	  var protocolSeparator = p.protocol || p.href.slice(0,2) == '//' ? '//' : '';
	  return (p.protocol||'') + protocolSeparator + (p.host||'') + (p.path||'')  + '#';
	}


	var TRAILING_SLASH_HASH = /#\/?$/;
	function normalizeId(id) {
	  return id ? id.replace(TRAILING_SLASH_HASH, '') : '';
	}


	function resolveUrl(baseId, id) {
	  id = normalizeId(id);
	  return url.resolve(baseId, id);
	}


	/* @this Ajv */
	function resolveIds(schema) {
	  /* eslint no-shadow: 0 */
	  /* jshint validthis: true */
	  var id = normalizeId(schema.id);
	  var localRefs = {};
	  _resolveIds.call(this, schema, getFullPath(id, false), id);
	  return localRefs;

	  /* @this Ajv */
	  function _resolveIds(schema, fullPath, baseId) {
	    /* jshint validthis: true */
	    if (Array.isArray(schema)) {
	      for (var i=0; i<schema.length; i++)
	        _resolveIds.call(this, schema[i], fullPath+'/'+i, baseId);
	    } else if (schema && typeof schema == 'object') {
	      if (typeof schema.id == 'string') {
	        var id = baseId = baseId
	                          ? url.resolve(baseId, schema.id)
	                          : schema.id;
	        id = normalizeId(id);

	        var refVal = this._refs[id];
	        if (typeof refVal == 'string') refVal = this._refs[refVal];
	        if (refVal && refVal.schema) {
	          if (!equal(schema, refVal.schema))
	            throw new Error('id "' + id + '" resolves to more than one schema');
	        } else if (id != normalizeId(fullPath)) {
	          if (id[0] == '#') {
	            if (localRefs[id] && !equal(schema, localRefs[id]))
	              throw new Error('id "' + id + '" resolves to more than one schema');
	            localRefs[id] = schema;
	          } else {
	            this._refs[id] = fullPath;
	          }
	        }
	      }
	      for (var key in schema)
	        _resolveIds.call(this, schema[key], fullPath+'/'+util.escapeFragment(key), baseId);
	    }
	  }
	}

	},{"./equal":4,"./schema_obj":9,"./util":10,"url":44}],8:[function(require,module,exports){
	'use strict';

	var ruleModules = require('./_rules')
	  , toHash = require('./util').toHash;

	module.exports = function rules() {
	  var RULES = [
	    { type: 'number',
	      rules: [ 'maximum', 'minimum', 'multipleOf'] },
	    { type: 'string',
	      rules: [ 'maxLength', 'minLength', 'pattern', 'format' ] },
	    { type: 'array',
	      rules: [ 'maxItems', 'minItems', 'uniqueItems', 'items' ] },
	    { type: 'object',
	      rules: [ 'maxProperties', 'minProperties', 'required', 'dependencies', 'properties' ] },
	    { rules: [ '$ref', 'enum', 'not', 'anyOf', 'oneOf', 'allOf' ] }
	  ];

	  var ALL = [ 'type', 'additionalProperties', 'patternProperties' ];
	  var KEYWORDS = [ 'additionalItems', '$schema', 'id', 'title', 'description', 'default' ];
	  var TYPES = [ 'number', 'integer', 'string', 'array', 'object', 'boolean', 'null' ];
	  RULES.all = toHash(ALL);

	  RULES.forEach(function (group) {
	    group.rules = group.rules.map(function (keyword) {
	      ALL.push(keyword);
	      var rule = RULES.all[keyword] = {
	        keyword: keyword,
	        code: ruleModules[keyword]
	      };
	      return rule;
	    });
	  });

	  RULES.keywords = toHash(ALL.concat(KEYWORDS));
	  RULES.types = toHash(TYPES);
	  RULES.custom = {};

	  return RULES;
	};

	},{"./_rules":3,"./util":10}],9:[function(require,module,exports){
	'use strict';

	var util = require('./util');

	module.exports = SchemaObject;

	function SchemaObject(obj) {
	  util.copy(obj, this);
	}

	},{"./util":10}],10:[function(require,module,exports){
	'use strict';


	module.exports = {
	  copy: copy,
	  checkDataType: checkDataType,
	  checkDataTypes: checkDataTypes,
	  coerceToTypes: coerceToTypes,
	  toHash: toHash,
	  getProperty: getProperty,
	  escapeQuotes: escapeQuotes,
	  ucs2length: ucs2length,
	  varOccurences: varOccurences,
	  varReplace: varReplace,
	  cleanUpCode: cleanUpCode,
	  cleanUpVarErrors: cleanUpVarErrors,
	  schemaHasRules: schemaHasRules,
	  schemaHasRulesExcept: schemaHasRulesExcept,
	  stableStringify: require('json-stable-stringify'),
	  toQuotedString: toQuotedString,
	  getPathExpr: getPathExpr,
	  getPath: getPath,
	  getData: getData,
	  unescapeFragment: unescapeFragment,
	  escapeFragment: escapeFragment,
	  escapeJsonPointer: escapeJsonPointer
	};


	function copy(o, to) {
	  to = to || {};
	  for (var key in o) to[key] = o[key];
	  return to;
	}


	function checkDataType(dataType, data, negate) {
	  var EQUAL = negate ? ' !== ' : ' === '
	    , AND = negate ? ' || ' : ' && '
	    , OK = negate ? '!' : ''
	    , NOT = negate ? '' : '!';
	  switch (dataType) {
	    case 'null': return data + EQUAL + 'null';
	    case 'array': return OK + 'Array.isArray(' + data + ')';
	    case 'object': return '(' + OK + data + AND +
	                          'typeof ' + data + EQUAL + '"object"' + AND +
	                          NOT + 'Array.isArray(' + data + '))';
	    case 'integer': return '(typeof ' + data + EQUAL + '"number"' + AND +
	                           NOT + '(' + data + ' % 1)' +
	                           AND + data + EQUAL + data + ')';
	    default: return 'typeof ' + data + EQUAL + '"' + dataType + '"';
	  }
	}


	function checkDataTypes(dataTypes, data) {
	  switch (dataTypes.length) {
	    case 1: return checkDataType(dataTypes[0], data, true);
	    default:
	      var code = '';
	      var types = toHash(dataTypes);
	      if (types.array && types.object) {
	        code = types.null ? '(': '(!' + data + ' || ';
	        code += 'typeof ' + data + ' !== "object")';
	        delete types.null;
	        delete types.array;
	        delete types.object;
	      }
	      if (types.number) delete types.integer;
	      for (var t in types)
	        code += (code ? ' && ' : '' ) + checkDataType(t, data, true);

	      return code;
	  }
	}


	var COERCE_TO_TYPES = toHash([ 'string', 'number', 'integer', 'boolean', 'null' ]);
	function coerceToTypes(optionCoerceTypes, dataTypes) {
	  if (Array.isArray(dataTypes)) {
	    var types = [];
	    for (var i=0; i<dataTypes.length; i++) {
	      var t = dataTypes[i];
	      if (COERCE_TO_TYPES[t]) types[types.length] = t;
	      else if (optionCoerceTypes === 'array' && t === 'array') types[types.length] = t;
	    }
	    if (types.length) return types;
	  } else if (COERCE_TO_TYPES[dataTypes]) {
	    return [dataTypes];
	  } else if (optionCoerceTypes === 'array' && dataTypes === 'array') {
	    return ['array'];
	  }
	}


	function toHash(arr) {
	  var hash = {};
	  for (var i=0; i<arr.length; i++) hash[arr[i]] = true;
	  return hash;
	}


	var IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
	var SINGLE_QUOTE = /'|\\/g;
	function getProperty(key) {
	  return typeof key == 'number'
	          ? '[' + key + ']'
	          : IDENTIFIER.test(key)
	            ? '.' + key
	            : "['" + escapeQuotes(key) + "']";
	}


	function escapeQuotes(str) {
	  return str.replace(SINGLE_QUOTE, '\\$&')
	            .replace(/\n/g, '\\n')
	            .replace(/\r/g, '\\r')
	            .replace(/\f/g, '\\f')
	            .replace(/\t/g, '\\t');
	}


	// https://mathiasbynens.be/notes/javascript-encoding
	// https://github.com/bestiejs/punycode.js - punycode.ucs2.decode
	function ucs2length(str) {
	  var length = 0
	    , len = str.length
	    , pos = 0
	    , value;
	  while (pos < len) {
	    length++;
	    value = str.charCodeAt(pos++);
	    if (value >= 0xD800 && value <= 0xDBFF && pos < len) {
	      // high surrogate, and there is a next character
	      value = str.charCodeAt(pos);
	      if ((value & 0xFC00) == 0xDC00) pos++; // low surrogate
	    }
	  }
	  return length;
	}


	function varOccurences(str, dataVar) {
	  dataVar += '[^0-9]';
	  var matches = str.match(new RegExp(dataVar, 'g'));
	  return matches ? matches.length : 0;
	}


	function varReplace(str, dataVar, expr) {
	  dataVar += '([^0-9])';
	  expr = expr.replace(/\$/g, '$$$$');
	  return str.replace(new RegExp(dataVar, 'g'), expr + '$1');
	}


	var EMPTY_ELSE = /else\s*{\s*}/g
	  , EMPTY_IF_NO_ELSE = /if\s*\([^)]+\)\s*\{\s*\}(?!\s*else)/g
	  , EMPTY_IF_WITH_ELSE = /if\s*\(([^)]+)\)\s*\{\s*\}\s*else(?!\s*if)/g;
	function cleanUpCode(out) {
	  return out.replace(EMPTY_ELSE, '')
	            .replace(EMPTY_IF_NO_ELSE, '')
	            .replace(EMPTY_IF_WITH_ELSE, 'if (!($1))');
	}


	var ERRORS_REGEXP = /[^v\.]errors/g
	  , REMOVE_ERRORS = /var errors = 0;|var vErrors = null;|validate.errors = vErrors;/g
	  , REMOVE_ERRORS_ASYNC = /var errors = 0;|var vErrors = null;/g
	  , RETURN_VALID = 'return errors === 0;'
	  , RETURN_TRUE = 'validate.errors = null; return true;'
	  , RETURN_ASYNC = /if \(errors === 0\) return true;\s*else throw new ValidationError\(vErrors\);/
	  , RETURN_TRUE_ASYNC = 'return true;';

	function cleanUpVarErrors(out, async) {
	  var matches = out.match(ERRORS_REGEXP);
	  if (!matches || matches.length !== 2) return out;
	  return async
	          ? out.replace(REMOVE_ERRORS_ASYNC, '')
	               .replace(RETURN_ASYNC, RETURN_TRUE_ASYNC)
	          : out.replace(REMOVE_ERRORS, '')
	               .replace(RETURN_VALID, RETURN_TRUE);
	}


	function schemaHasRules(schema, rules) {
	  for (var key in schema) if (rules[key]) return true;
	}


	function schemaHasRulesExcept(schema, rules, exceptKeyword) {
	  for (var key in schema) if (key != exceptKeyword && rules[key]) return true;
	}


	function toQuotedString(str) {
	  return '\'' + escapeQuotes(str) + '\'';
	}


	function getPathExpr(currentPath, expr, jsonPointers, isNumber) {
	  var path = jsonPointers // false by default
	              ? '\'/\' + ' + expr + (isNumber ? '' : '.replace(/~/g, \'~0\').replace(/\\//g, \'~1\')')
	              : (isNumber ? '\'[\' + ' + expr + ' + \']\'' : '\'[\\\'\' + ' + expr + ' + \'\\\']\'');
	  return joinPaths(currentPath, path);
	}


	function getPath(currentPath, prop, jsonPointers) {
	  var path = jsonPointers // false by default
	              ? toQuotedString('/' + escapeJsonPointer(prop))
	              : toQuotedString(getProperty(prop));
	  return joinPaths(currentPath, path);
	}


	var JSON_POINTER = /^\/(?:[^~]|~0|~1)*$/;
	var RELATIVE_JSON_POINTER = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
	function getData($data, lvl, paths) {
	  var up, jsonPointer, data, matches;
	  if ($data === '') return 'rootData';
	  if ($data[0] == '/') {
	    if (!JSON_POINTER.test($data)) throw new Error('Invalid JSON-pointer: ' + $data);
	    jsonPointer = $data;
	    data = 'rootData';
	  } else {
	    matches = $data.match(RELATIVE_JSON_POINTER);
	    if (!matches) throw new Error('Invalid JSON-pointer: ' + $data);
	    up = +matches[1];
	    jsonPointer = matches[2];
	    if (jsonPointer == '#') {
	      if (up >= lvl) throw new Error('Cannot access property/index ' + up + ' levels up, current level is ' + lvl);
	      return paths[lvl - up];
	    }

	    if (up > lvl) throw new Error('Cannot access data ' + up + ' levels up, current level is ' + lvl);
	    data = 'data' + ((lvl - up) || '');
	    if (!jsonPointer) return data;
	  }

	  var expr = data;
	  var segments = jsonPointer.split('/');
	  for (var i=0; i<segments.length; i++) {
	    var segment = segments[i];
	    if (segment) {
	      data += getProperty(unescapeJsonPointer(segment));
	      expr += ' && ' + data;
	    }
	  }
	  return expr;
	}


	function joinPaths (a, b) {
	  if (a == '""') return b;
	  return (a + ' + ' + b).replace(/' \+ '/g, '');
	}


	function unescapeFragment(str) {
	  return unescapeJsonPointer(decodeURIComponent(str));
	}


	function escapeFragment(str) {
	  return encodeURIComponent(escapeJsonPointer(str));
	}


	function escapeJsonPointer(str) {
	  return str.replace(/~/g, '~0').replace(/\//g, '~1');
	}


	function unescapeJsonPointer(str) {
	  return str.replace(/~1/g, '/').replace(/~0/g, '~');
	}

	},{"json-stable-stringify":47}],11:[function(require,module,exports){
	'use strict';

	module.exports = ValidationError;


	function ValidationError(errors) {
	  this.message = 'validation failed';
	  this.errors = errors;
	  this.ajv = this.validation = true;
	}


	ValidationError.prototype = Object.create(Error.prototype);
	ValidationError.prototype.constructor = ValidationError;

	},{}],12:[function(require,module,exports){
	'use strict';
	module.exports = function generate__formatLimit(it, $keyword) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + '.' + $keyword;
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $errorKeyword;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  out += 'var ' + ($valid) + ' = undefined;';
	  if (it.opts.format === false) {
	    out += ' ' + ($valid) + ' = true; ';
	    return out;
	  }
	  var $schemaFormat = it.schema.format,
	    $isDataFormat = it.opts.v5 && $schemaFormat.$data,
	    $closingBraces = '';
	  if ($isDataFormat) {
	    var $schemaValueFormat = it.util.getData($schemaFormat.$data, $dataLvl, it.dataPathArr),
	      $format = 'format' + $lvl,
	      $compare = 'compare' + $lvl;
	    out += ' var ' + ($format) + ' = formats[' + ($schemaValueFormat) + '] , ' + ($compare) + ' = ' + ($format) + ' && ' + ($format) + '.compare;';
	  } else {
	    var $format = it.formats[$schemaFormat];
	    if (!($format && $format.compare)) {
	      out += '  ' + ($valid) + ' = true; ';
	      return out;
	    }
	    var $compare = 'formats' + it.util.getProperty($schemaFormat) + '.compare';
	  }
	  var $isMax = $keyword == 'formatMaximum',
	    $exclusiveKeyword = 'formatExclusive' + ($isMax ? 'Maximum' : 'Minimum'),
	    $schemaExcl = it.schema[$exclusiveKeyword],
	    $isDataExcl = it.opts.v5 && $schemaExcl && $schemaExcl.$data,
	    $op = $isMax ? '<' : '>',
	    $result = 'result' + $lvl;
	  var $isData = it.opts.v5 && $schema.$data,
	    $schemaValue;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	    $schemaValue = 'schema' + $lvl;
	  } else {
	    $schemaValue = $schema;
	  }
	  if ($isDataExcl) {
	    var $schemaValueExcl = it.util.getData($schemaExcl.$data, $dataLvl, it.dataPathArr),
	      $exclusive = 'exclusive' + $lvl,
	      $opExpr = 'op' + $lvl,
	      $opStr = '\' + ' + $opExpr + ' + \'';
	    out += ' var schemaExcl' + ($lvl) + ' = ' + ($schemaValueExcl) + '; ';
	    $schemaValueExcl = 'schemaExcl' + $lvl;
	    out += ' if (typeof ' + ($schemaValueExcl) + ' != \'boolean\' && ' + ($schemaValueExcl) + ' !== undefined) { ' + ($valid) + ' = false; ';
	    var $errorKeyword = $exclusiveKeyword;
	    var $$outStack = $$outStack || [];
	    $$outStack.push(out);
	    out = ''; /* istanbul ignore else */
	    if (it.createErrors !== false) {
	      out += ' { keyword: \'' + ($errorKeyword || '_formatExclusiveLimit') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: {} ';
	      if (it.opts.messages !== false) {
	        out += ' , message: \'' + ($exclusiveKeyword) + ' should be boolean\' ';
	      }
	      if (it.opts.verbose) {
	        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	      }
	      out += ' } ';
	    } else {
	      out += ' {} ';
	    }
	    var __err = out;
	    out = $$outStack.pop();
	    if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
	      if (it.async) {
	        out += ' throw new ValidationError([' + (__err) + ']); ';
	      } else {
	        out += ' validate.errors = [' + (__err) + ']; return false; ';
	      }
	    } else {
	      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	    }
	    out += ' }  ';
	    if ($breakOnError) {
	      $closingBraces += '}';
	      out += ' else { ';
	    }
	    if ($isData) {
	      out += ' if (' + ($schemaValue) + ' === undefined) ' + ($valid) + ' = true; else if (typeof ' + ($schemaValue) + ' != \'string\') ' + ($valid) + ' = false; else { ';
	      $closingBraces += '}';
	    }
	    if ($isDataFormat) {
	      out += ' if (!' + ($compare) + ') ' + ($valid) + ' = true; else { ';
	      $closingBraces += '}';
	    }
	    out += ' var ' + ($result) + ' = ' + ($compare) + '(' + ($data) + ',  ';
	    if ($isData) {
	      out += '' + ($schemaValue);
	    } else {
	      out += '' + (it.util.toQuotedString($schema));
	    }
	    out += ' ); if (' + ($result) + ' === undefined) ' + ($valid) + ' = false; var ' + ($exclusive) + ' = ' + ($schemaValueExcl) + ' === true; if (' + ($valid) + ' === undefined) { ' + ($valid) + ' = ' + ($exclusive) + ' ? ' + ($result) + ' ' + ($op) + ' 0 : ' + ($result) + ' ' + ($op) + '= 0; } if (!' + ($valid) + ') var op' + ($lvl) + ' = ' + ($exclusive) + ' ? \'' + ($op) + '\' : \'' + ($op) + '=\';';
	  } else {
	    var $exclusive = $schemaExcl === true,
	      $opStr = $op;
	    if (!$exclusive) $opStr += '=';
	    var $opExpr = '\'' + $opStr + '\'';
	    if ($isData) {
	      out += ' if (' + ($schemaValue) + ' === undefined) ' + ($valid) + ' = true; else if (typeof ' + ($schemaValue) + ' != \'string\') ' + ($valid) + ' = false; else { ';
	      $closingBraces += '}';
	    }
	    if ($isDataFormat) {
	      out += ' if (!' + ($compare) + ') ' + ($valid) + ' = true; else { ';
	      $closingBraces += '}';
	    }
	    out += ' var ' + ($result) + ' = ' + ($compare) + '(' + ($data) + ',  ';
	    if ($isData) {
	      out += '' + ($schemaValue);
	    } else {
	      out += '' + (it.util.toQuotedString($schema));
	    }
	    out += ' ); if (' + ($result) + ' === undefined) ' + ($valid) + ' = false; if (' + ($valid) + ' === undefined) ' + ($valid) + ' = ' + ($result) + ' ' + ($op);
	    if (!$exclusive) {
	      out += '=';
	    }
	    out += ' 0;';
	  }
	  out += '' + ($closingBraces) + 'if (!' + ($valid) + ') { ';
	  var $errorKeyword = $keyword;
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = ''; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ($errorKeyword || '_formatLimit') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: { comparison: ' + ($opExpr) + ', limit:  ';
	    if ($isData) {
	      out += '' + ($schemaValue);
	    } else {
	      out += '' + (it.util.toQuotedString($schema));
	    }
	    out += ' , exclusive: ' + ($exclusive) + ' } ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should be ' + ($opStr) + ' "';
	      if ($isData) {
	        out += '\' + ' + ($schemaValue) + ' + \'';
	      } else {
	        out += '' + (it.util.escapeQuotes($schema));
	      }
	      out += '"\' ';
	    }
	    if (it.opts.verbose) {
	      out += ' , schema:  ';
	      if ($isData) {
	        out += 'validate.schema' + ($schemaPath);
	      } else {
	        out += '' + (it.util.toQuotedString($schema));
	      }
	      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  var __err = out;
	  out = $$outStack.pop();
	  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError([' + (__err) + ']); ';
	    } else {
	      out += ' validate.errors = [' + (__err) + ']; return false; ';
	    }
	  } else {
	    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  }
	  out += '}';
	  return out;
	}

	},{}],13:[function(require,module,exports){
	'use strict';
	module.exports = function generate__limit(it, $keyword) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + '.' + $keyword;
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $errorKeyword;
	  var $data = 'data' + ($dataLvl || '');
	  var $isData = it.opts.v5 && $schema.$data,
	    $schemaValue;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	    $schemaValue = 'schema' + $lvl;
	  } else {
	    $schemaValue = $schema;
	  }
	  var $isMax = $keyword == 'maximum',
	    $exclusiveKeyword = $isMax ? 'exclusiveMaximum' : 'exclusiveMinimum',
	    $schemaExcl = it.schema[$exclusiveKeyword],
	    $isDataExcl = it.opts.v5 && $schemaExcl && $schemaExcl.$data,
	    $op = $isMax ? '<' : '>',
	    $notOp = $isMax ? '>' : '<';
	  if ($isDataExcl) {
	    var $schemaValueExcl = it.util.getData($schemaExcl.$data, $dataLvl, it.dataPathArr),
	      $exclusive = 'exclusive' + $lvl,
	      $opExpr = 'op' + $lvl,
	      $opStr = '\' + ' + $opExpr + ' + \'';
	    out += ' var schemaExcl' + ($lvl) + ' = ' + ($schemaValueExcl) + '; ';
	    $schemaValueExcl = 'schemaExcl' + $lvl;
	    out += ' var exclusive' + ($lvl) + '; if (typeof ' + ($schemaValueExcl) + ' != \'boolean\' && typeof ' + ($schemaValueExcl) + ' != \'undefined\') { ';
	    var $errorKeyword = $exclusiveKeyword;
	    var $$outStack = $$outStack || [];
	    $$outStack.push(out);
	    out = ''; /* istanbul ignore else */
	    if (it.createErrors !== false) {
	      out += ' { keyword: \'' + ($errorKeyword || '_exclusiveLimit') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: {} ';
	      if (it.opts.messages !== false) {
	        out += ' , message: \'' + ($exclusiveKeyword) + ' should be boolean\' ';
	      }
	      if (it.opts.verbose) {
	        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	      }
	      out += ' } ';
	    } else {
	      out += ' {} ';
	    }
	    var __err = out;
	    out = $$outStack.pop();
	    if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
	      if (it.async) {
	        out += ' throw new ValidationError([' + (__err) + ']); ';
	      } else {
	        out += ' validate.errors = [' + (__err) + ']; return false; ';
	      }
	    } else {
	      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	    }
	    out += ' } else if( ';
	    if ($isData) {
	      out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
	    }
	    out += ' ((exclusive' + ($lvl) + ' = ' + ($schemaValueExcl) + ' === true) ? ' + ($data) + ' ' + ($notOp) + '= ' + ($schemaValue) + ' : ' + ($data) + ' ' + ($notOp) + ' ' + ($schemaValue) + ') || ' + ($data) + ' !== ' + ($data) + ') { var op' + ($lvl) + ' = exclusive' + ($lvl) + ' ? \'' + ($op) + '\' : \'' + ($op) + '=\';';
	  } else {
	    var $exclusive = $schemaExcl === true,
	      $opStr = $op;
	    if (!$exclusive) $opStr += '=';
	    var $opExpr = '\'' + $opStr + '\'';
	    out += ' if ( ';
	    if ($isData) {
	      out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
	    }
	    out += ' ' + ($data) + ' ' + ($notOp);
	    if ($exclusive) {
	      out += '=';
	    }
	    out += ' ' + ($schemaValue) + ' || ' + ($data) + ' !== ' + ($data) + ') {';
	  }
	  var $errorKeyword = $keyword;
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = ''; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ($errorKeyword || '_limit') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: { comparison: ' + ($opExpr) + ', limit: ' + ($schemaValue) + ', exclusive: ' + ($exclusive) + ' } ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should be ' + ($opStr) + ' ';
	      if ($isData) {
	        out += '\' + ' + ($schemaValue);
	      } else {
	        out += '' + ($schema) + '\'';
	      }
	    }
	    if (it.opts.verbose) {
	      out += ' , schema:  ';
	      if ($isData) {
	        out += 'validate.schema' + ($schemaPath);
	      } else {
	        out += '' + ($schema);
	      }
	      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  var __err = out;
	  out = $$outStack.pop();
	  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError([' + (__err) + ']); ';
	    } else {
	      out += ' validate.errors = [' + (__err) + ']; return false; ';
	    }
	  } else {
	    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  }
	  out += ' } ';
	  if ($breakOnError) {
	    out += ' else { ';
	  }
	  return out;
	}

	},{}],14:[function(require,module,exports){
	'use strict';
	module.exports = function generate__limitItems(it, $keyword) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + '.' + $keyword;
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $errorKeyword;
	  var $data = 'data' + ($dataLvl || '');
	  var $isData = it.opts.v5 && $schema.$data,
	    $schemaValue;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	    $schemaValue = 'schema' + $lvl;
	  } else {
	    $schemaValue = $schema;
	  }
	  var $op = $keyword == 'maxItems' ? '>' : '<';
	  out += 'if ( ';
	  if ($isData) {
	    out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
	  }
	  out += ' ' + ($data) + '.length ' + ($op) + ' ' + ($schemaValue) + ') { ';
	  var $errorKeyword = $keyword;
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = ''; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ($errorKeyword || '_limitItems') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: { limit: ' + ($schemaValue) + ' } ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should NOT have ';
	      if ($keyword == 'maxItems') {
	        out += 'more';
	      } else {
	        out += 'less';
	      }
	      out += ' than ';
	      if ($isData) {
	        out += '\' + ' + ($schemaValue) + ' + \'';
	      } else {
	        out += '' + ($schema);
	      }
	      out += ' items\' ';
	    }
	    if (it.opts.verbose) {
	      out += ' , schema:  ';
	      if ($isData) {
	        out += 'validate.schema' + ($schemaPath);
	      } else {
	        out += '' + ($schema);
	      }
	      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  var __err = out;
	  out = $$outStack.pop();
	  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError([' + (__err) + ']); ';
	    } else {
	      out += ' validate.errors = [' + (__err) + ']; return false; ';
	    }
	  } else {
	    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  }
	  out += '} ';
	  if ($breakOnError) {
	    out += ' else { ';
	  }
	  return out;
	}

	},{}],15:[function(require,module,exports){
	'use strict';
	module.exports = function generate__limitLength(it, $keyword) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + '.' + $keyword;
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $errorKeyword;
	  var $data = 'data' + ($dataLvl || '');
	  var $isData = it.opts.v5 && $schema.$data,
	    $schemaValue;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	    $schemaValue = 'schema' + $lvl;
	  } else {
	    $schemaValue = $schema;
	  }
	  var $op = $keyword == 'maxLength' ? '>' : '<';
	  out += 'if ( ';
	  if ($isData) {
	    out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
	  }
	  if (it.opts.unicode === false) {
	    out += ' ' + ($data) + '.length ';
	  } else {
	    out += ' ucs2length(' + ($data) + ') ';
	  }
	  out += ' ' + ($op) + ' ' + ($schemaValue) + ') { ';
	  var $errorKeyword = $keyword;
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = ''; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ($errorKeyword || '_limitLength') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: { limit: ' + ($schemaValue) + ' } ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should NOT be ';
	      if ($keyword == 'maxLength') {
	        out += 'longer';
	      } else {
	        out += 'shorter';
	      }
	      out += ' than ';
	      if ($isData) {
	        out += '\' + ' + ($schemaValue) + ' + \'';
	      } else {
	        out += '' + ($schema);
	      }
	      out += ' characters\' ';
	    }
	    if (it.opts.verbose) {
	      out += ' , schema:  ';
	      if ($isData) {
	        out += 'validate.schema' + ($schemaPath);
	      } else {
	        out += '' + ($schema);
	      }
	      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  var __err = out;
	  out = $$outStack.pop();
	  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError([' + (__err) + ']); ';
	    } else {
	      out += ' validate.errors = [' + (__err) + ']; return false; ';
	    }
	  } else {
	    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  }
	  out += '} ';
	  if ($breakOnError) {
	    out += ' else { ';
	  }
	  return out;
	}

	},{}],16:[function(require,module,exports){
	'use strict';
	module.exports = function generate__limitProperties(it, $keyword) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + '.' + $keyword;
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $errorKeyword;
	  var $data = 'data' + ($dataLvl || '');
	  var $isData = it.opts.v5 && $schema.$data,
	    $schemaValue;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	    $schemaValue = 'schema' + $lvl;
	  } else {
	    $schemaValue = $schema;
	  }
	  var $op = $keyword == 'maxProperties' ? '>' : '<';
	  out += 'if ( ';
	  if ($isData) {
	    out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
	  }
	  out += ' Object.keys(' + ($data) + ').length ' + ($op) + ' ' + ($schemaValue) + ') { ';
	  var $errorKeyword = $keyword;
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = ''; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ($errorKeyword || '_limitProperties') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: { limit: ' + ($schemaValue) + ' } ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should NOT have ';
	      if ($keyword == 'maxProperties') {
	        out += 'more';
	      } else {
	        out += 'less';
	      }
	      out += ' than ';
	      if ($isData) {
	        out += '\' + ' + ($schemaValue) + ' + \'';
	      } else {
	        out += '' + ($schema);
	      }
	      out += ' properties\' ';
	    }
	    if (it.opts.verbose) {
	      out += ' , schema:  ';
	      if ($isData) {
	        out += 'validate.schema' + ($schemaPath);
	      } else {
	        out += '' + ($schema);
	      }
	      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  var __err = out;
	  out = $$outStack.pop();
	  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError([' + (__err) + ']); ';
	    } else {
	      out += ' validate.errors = [' + (__err) + ']; return false; ';
	    }
	  } else {
	    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  }
	  out += '} ';
	  if ($breakOnError) {
	    out += ' else { ';
	  }
	  return out;
	}

	},{}],17:[function(require,module,exports){
	'use strict';
	module.exports = function generate_allOf(it, $keyword) {
	  var out = ' ';
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + '.' + $keyword;
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $it = it.util.copy(it);
	  var $closingBraces = '';
	  $it.level++;
	  var $currentBaseId = $it.baseId;
	  var arr1 = $schema;
	  if (arr1) {
	    var $sch, $i = -1,
	      l1 = arr1.length - 1;
	    while ($i < l1) {
	      $sch = arr1[$i += 1];
	      if (it.util.schemaHasRules($sch, it.RULES.all)) {
	        $it.schema = $sch;
	        $it.schemaPath = $schemaPath + '[' + $i + ']';
	        $it.errSchemaPath = $errSchemaPath + '/' + $i;
	        out += '  ' + (it.validate($it)) + ' ';
	        $it.baseId = $currentBaseId;
	        if ($breakOnError) {
	          out += ' if (valid' + ($it.level) + ') { ';
	          $closingBraces += '}';
	        }
	      }
	    }
	  }
	  if ($breakOnError) {
	    out += ' ' + ($closingBraces.slice(0, -1));
	  }
	  out = it.util.cleanUpCode(out);
	  return out;
	}

	},{}],18:[function(require,module,exports){
	'use strict';
	module.exports = function generate_anyOf(it, $keyword) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + '.' + $keyword;
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $errorKeyword;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $errs = 'errs__' + $lvl;
	  var $it = it.util.copy(it);
	  var $closingBraces = '';
	  $it.level++;
	  var $noEmptySchema = $schema.every(function($sch) {
	    return it.util.schemaHasRules($sch, it.RULES.all);
	  });
	  if ($noEmptySchema) {
	    var $currentBaseId = $it.baseId;
	    out += ' var ' + ($errs) + ' = errors; var ' + ($valid) + ' = false;  ';
	    var $wasComposite = it.compositeRule;
	    it.compositeRule = $it.compositeRule = true;
	    var arr1 = $schema;
	    if (arr1) {
	      var $sch, $i = -1,
	        l1 = arr1.length - 1;
	      while ($i < l1) {
	        $sch = arr1[$i += 1];
	        $it.schema = $sch;
	        $it.schemaPath = $schemaPath + '[' + $i + ']';
	        $it.errSchemaPath = $errSchemaPath + '/' + $i;
	        out += '  ' + (it.validate($it)) + ' ';
	        $it.baseId = $currentBaseId;
	        out += ' ' + ($valid) + ' = ' + ($valid) + ' || valid' + ($it.level) + '; if (!' + ($valid) + ') { ';
	        $closingBraces += '}';
	      }
	    }
	    it.compositeRule = $it.compositeRule = $wasComposite;
	    out += ' ' + ($closingBraces) + ' if (!' + ($valid) + ') {  var err =   '; /* istanbul ignore else */
	    if (it.createErrors !== false) {
	      out += ' { keyword: \'' + ($errorKeyword || 'anyOf') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: {} ';
	      if (it.opts.messages !== false) {
	        out += ' , message: \'should match some schema in anyOf\' ';
	      }
	      if (it.opts.verbose) {
	        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	      }
	      out += ' } ';
	    } else {
	      out += ' {} ';
	    }
	    out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else {  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; } ';
	    if (it.opts.allErrors) {
	      out += ' } ';
	    }
	    out = it.util.cleanUpCode(out);
	  } else {
	    if ($breakOnError) {
	      out += ' if (true) { ';
	    }
	  }
	  return out;
	}

	},{}],19:[function(require,module,exports){
	'use strict';
	module.exports = function generate_constant(it, $keyword) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + '.' + $keyword;
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $errorKeyword;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $isData = it.opts.v5 && $schema.$data,
	    $schemaValue;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	    $schemaValue = 'schema' + $lvl;
	  } else {
	    $schemaValue = $schema;
	  }
	  if (!$isData) {
	    out += ' var schema' + ($lvl) + ' = validate.schema' + ($schemaPath) + ';';
	  }
	  out += 'var ' + ($valid) + ' = equal(' + ($data) + ', schema' + ($lvl) + '); if (!' + ($valid) + ') {   ';
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = ''; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ($errorKeyword || 'constant') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: {} ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should be equal to constant\' ';
	    }
	    if (it.opts.verbose) {
	      out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  var __err = out;
	  out = $$outStack.pop();
	  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError([' + (__err) + ']); ';
	    } else {
	      out += ' validate.errors = [' + (__err) + ']; return false; ';
	    }
	  } else {
	    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  }
	  out += ' }';
	  return out;
	}

	},{}],20:[function(require,module,exports){
	'use strict';
	module.exports = function generate_custom(it, $keyword) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + '.' + $keyword;
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $errorKeyword;
	  var $data = 'data' + ($dataLvl || '');
	  var $errs = 'errs__' + $lvl;
	  var $isData = it.opts.v5 && $schema.$data,
	    $schemaValue;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	    $schemaValue = 'schema' + $lvl;
	  } else {
	    $schemaValue = $schema;
	  }
	  var $rule = this,
	    $definition = 'definition' + $lvl,
	    $rDef = $rule.definition,
	    $validate = $rDef.validate,
	    $compile, $inline, $macro, $ruleValidate, $validateCode;
	  if ($isData && $rDef.$data) {
	    $validateCode = 'keywordValidate' + $lvl;
	    var $validateSchema = $rDef.validateSchema;
	    out += ' var ' + ($definition) + ' = RULES.custom[\'' + ($keyword) + '\'].definition; var ' + ($validateCode) + ' = ' + ($definition) + '.validate;';
	  } else {
	    $ruleValidate = it.useCustomRule($rule, $schema, it.schema, it);
	    $schemaValue = 'validate.schema' + $schemaPath;
	    $validateCode = $ruleValidate.code;
	    $compile = $rDef.compile;
	    $inline = $rDef.inline;
	    $macro = $rDef.macro;
	  }
	  var $ruleErrs = $validateCode + '.errors',
	    $i = 'i' + $lvl,
	    $ruleErr = 'ruleErr' + $lvl,
	    $asyncKeyword = $rDef.async;
	  if ($asyncKeyword && !it.async) throw new Error('async keyword in sync schema');
	  if (!($inline || $macro)) {
	    out += '' + ($ruleErrs) + ' = null;';
	  }
	  out += 'var ' + ($errs) + ' = errors;var valid' + ($lvl) + ';';
	  if ($inline && $rDef.statements) {
	    out += ' ' + ($ruleValidate.validate);
	  } else if ($macro) {
	    var $it = it.util.copy(it);
	    $it.level++;
	    $it.schema = $ruleValidate.validate;
	    $it.schemaPath = '';
	    var $wasComposite = it.compositeRule;
	    it.compositeRule = $it.compositeRule = true;
	    var $code = it.validate($it).replace(/validate\.schema/g, $validateCode);
	    it.compositeRule = $it.compositeRule = $wasComposite;
	    out += ' ' + ($code);
	  } else if (!$inline) {
	    var $$outStack = $$outStack || [];
	    $$outStack.push(out);
	    out = '';
	    out += '  ' + ($validateCode) + '.call( ';
	    if (it.opts.passContext) {
	      out += 'this';
	    } else {
	      out += 'self';
	    }
	    if ($compile || $rDef.schema === false) {
	      out += ' , ' + ($data) + ' ';
	    } else {
	      out += ' , ' + ($schemaValue) + ' , ' + ($data) + ' , validate.schema' + (it.schemaPath) + ' ';
	    }
	    out += ' , (dataPath || \'\')';
	    if (it.errorPath != '""') {
	      out += ' + ' + (it.errorPath);
	    }
	    if ($dataLvl) {
	      out += ' , data' + (($dataLvl - 1) || '') + ' , ' + (it.dataPathArr[$dataLvl]) + ' ';
	    } else {
	      out += ' , parentData , parentDataProperty ';
	    }
	    out += ' , rootData )  ';
	    var def_callRuleValidate = out;
	    out = $$outStack.pop();
	    if ($rDef.errors !== false) {
	      if ($asyncKeyword) {
	        $ruleErrs = 'customErrors' + $lvl;
	        out += ' var ' + ($ruleErrs) + ' = null; try { valid' + ($lvl) + ' = ' + (it.yieldAwait) + (def_callRuleValidate) + '; } catch (e) { valid' + ($lvl) + ' = false; if (e instanceof ValidationError) ' + ($ruleErrs) + ' = e.errors; else throw e; } ';
	      } else {
	        out += ' ' + ($validateCode) + '.errors = null; ';
	      }
	    }
	  }
	  out += 'if (';
	  if ($validateSchema) {
	    out += ' !' + ($definition) + '.validateSchema(' + ($schemaValue) + ') || ';
	  }
	  out += ' ! ';
	  if ($inline) {
	    if ($rDef.statements) {
	      out += ' valid' + ($lvl) + ' ';
	    } else {
	      out += ' (' + ($ruleValidate.validate) + ') ';
	    }
	  } else if ($macro) {
	    out += ' valid' + ($it.level) + ' ';
	  } else {
	    if ($asyncKeyword) {
	      if ($rDef.errors === false) {
	        out += ' (' + (it.yieldAwait) + (def_callRuleValidate) + ') ';
	      } else {
	        out += ' valid' + ($lvl) + ' ';
	      }
	    } else {
	      out += ' ' + (def_callRuleValidate) + ' ';
	    }
	  }
	  out += ') { ';
	  $errorKeyword = $rule.keyword;
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = '';
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = ''; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ($errorKeyword || 'custom') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: { keyword: \'' + ($rule.keyword) + '\' } ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should pass "' + ($rule.keyword) + '" keyword validation\' ';
	    }
	    if (it.opts.verbose) {
	      out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  var __err = out;
	  out = $$outStack.pop();
	  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError([' + (__err) + ']); ';
	    } else {
	      out += ' validate.errors = [' + (__err) + ']; return false; ';
	    }
	  } else {
	    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  }
	  var def_customError = out;
	  out = $$outStack.pop();
	  if ($inline) {
	    if ($rDef.errors) {
	      if ($rDef.errors != 'full') {
	        out += '  for (var ' + ($i) + '=' + ($errs) + '; ' + ($i) + '<errors; ' + ($i) + '++) { var ' + ($ruleErr) + ' = vErrors[' + ($i) + ']; if (' + ($ruleErr) + '.dataPath === undefined) { ' + ($ruleErr) + '.dataPath = (dataPath || \'\') + ' + (it.errorPath) + '; } if (' + ($ruleErr) + '.schemaPath === undefined) { ' + ($ruleErr) + '.schemaPath = "' + ($errSchemaPath) + '"; } ';
	        if (it.opts.verbose) {
	          out += ' ' + ($ruleErr) + '.schema = ' + ($schemaValue) + '; ' + ($ruleErr) + '.data = ' + ($data) + '; ';
	        }
	        out += ' } ';
	      }
	    } else {
	      if ($rDef.errors === false) {
	        out += ' ' + (def_customError) + ' ';
	      } else {
	        out += ' if (' + ($errs) + ' == errors) { ' + (def_customError) + ' } else {  for (var ' + ($i) + '=' + ($errs) + '; ' + ($i) + '<errors; ' + ($i) + '++) { var ' + ($ruleErr) + ' = vErrors[' + ($i) + ']; if (' + ($ruleErr) + '.dataPath === undefined) { ' + ($ruleErr) + '.dataPath = (dataPath || \'\') + ' + (it.errorPath) + '; } if (' + ($ruleErr) + '.schemaPath === undefined) { ' + ($ruleErr) + '.schemaPath = "' + ($errSchemaPath) + '"; } ';
	        if (it.opts.verbose) {
	          out += ' ' + ($ruleErr) + '.schema = ' + ($schemaValue) + '; ' + ($ruleErr) + '.data = ' + ($data) + '; ';
	        }
	        out += ' } } ';
	      }
	    }
	  } else if ($macro) {
	    out += '   var err =   '; /* istanbul ignore else */
	    if (it.createErrors !== false) {
	      out += ' { keyword: \'' + ($errorKeyword || 'custom') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: { keyword: \'' + ($rule.keyword) + '\' } ';
	      if (it.opts.messages !== false) {
	        out += ' , message: \'should pass "' + ($rule.keyword) + '" keyword validation\' ';
	      }
	      if (it.opts.verbose) {
	        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	      }
	      out += ' } ';
	    } else {
	      out += ' {} ';
	    }
	    out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	    if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
	      if (it.async) {
	        out += ' throw new ValidationError(vErrors); ';
	      } else {
	        out += ' validate.errors = vErrors; return false ';
	      }
	    }
	  } else {
	    if ($rDef.errors === false) {
	      out += ' ' + (def_customError) + ' ';
	    } else {
	      out += ' if (Array.isArray(' + ($ruleErrs) + ')) { if (vErrors === null) vErrors = ' + ($ruleErrs) + '; else vErrors = vErrors.concat(' + ($ruleErrs) + '); errors = vErrors.length;  for (var ' + ($i) + '=' + ($errs) + '; ' + ($i) + '<errors; ' + ($i) + '++) { var ' + ($ruleErr) + ' = vErrors[' + ($i) + '];  ' + ($ruleErr) + '.dataPath = (dataPath || \'\') + ' + (it.errorPath) + ';   ' + ($ruleErr) + '.schemaPath = "' + ($errSchemaPath) + '";  ';
	      if (it.opts.verbose) {
	        out += ' ' + ($ruleErr) + '.schema = ' + ($schemaValue) + '; ' + ($ruleErr) + '.data = ' + ($data) + '; ';
	      }
	      out += ' } } else { ' + (def_customError) + ' } ';
	    }
	  }
	  out += ' } ';
	  if ($breakOnError) {
	    out += ' else { ';
	  }
	  return out;
	}

	},{}],21:[function(require,module,exports){
	'use strict';
	module.exports = function generate_dependencies(it, $keyword) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + '.' + $keyword;
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $errorKeyword;
	  var $data = 'data' + ($dataLvl || '');
	  var $errs = 'errs__' + $lvl;
	  var $it = it.util.copy(it);
	  var $closingBraces = '';
	  $it.level++;
	  var $schemaDeps = {},
	    $propertyDeps = {};
	  for ($property in $schema) {
	    var $sch = $schema[$property];
	    var $deps = Array.isArray($sch) ? $propertyDeps : $schemaDeps;
	    $deps[$property] = $sch;
	  }
	  out += 'var ' + ($errs) + ' = errors;';
	  var $currentErrorPath = it.errorPath;
	  out += 'var missing' + ($lvl) + ';';
	  for (var $property in $propertyDeps) {
	    $deps = $propertyDeps[$property];
	    out += ' if (' + ($data) + (it.util.getProperty($property)) + ' !== undefined ';
	    if ($breakOnError) {
	      out += ' && ( ';
	      var arr1 = $deps;
	      if (arr1) {
	        var _$property, $i = -1,
	          l1 = arr1.length - 1;
	        while ($i < l1) {
	          _$property = arr1[$i += 1];
	          if ($i) {
	            out += ' || ';
	          }
	          var $prop = it.util.getProperty(_$property);
	          out += ' ( ' + ($data) + ($prop) + ' === undefined && (missing' + ($lvl) + ' = ' + (it.util.toQuotedString(it.opts.jsonPointers ? _$property : $prop)) + ') ) ';
	        }
	      }
	      out += ')) {  ';
	      var $propertyPath = 'missing' + $lvl,
	        $missingProperty = '\' + ' + $propertyPath + ' + \'';
	      if (it.opts._errorDataPathProperty) {
	        it.errorPath = it.opts.jsonPointers ? it.util.getPathExpr($currentErrorPath, $propertyPath, true) : $currentErrorPath + ' + ' + $propertyPath;
	      }
	      var $$outStack = $$outStack || [];
	      $$outStack.push(out);
	      out = ''; /* istanbul ignore else */
	      if (it.createErrors !== false) {
	        out += ' { keyword: \'' + ($errorKeyword || 'dependencies') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: { property: \'' + (it.util.escapeQuotes($property)) + '\', missingProperty: \'' + ($missingProperty) + '\', depsCount: ' + ($deps.length) + ', deps: \'' + (it.util.escapeQuotes($deps.length == 1 ? $deps[0] : $deps.join(", "))) + '\' } ';
	        if (it.opts.messages !== false) {
	          out += ' , message: \'should have ';
	          if ($deps.length == 1) {
	            out += 'property ' + (it.util.escapeQuotes($deps[0]));
	          } else {
	            out += 'properties ' + (it.util.escapeQuotes($deps.join(", ")));
	          }
	          out += ' when property ' + (it.util.escapeQuotes($property)) + ' is present\' ';
	        }
	        if (it.opts.verbose) {
	          out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	        }
	        out += ' } ';
	      } else {
	        out += ' {} ';
	      }
	      var __err = out;
	      out = $$outStack.pop();
	      if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
	        if (it.async) {
	          out += ' throw new ValidationError([' + (__err) + ']); ';
	        } else {
	          out += ' validate.errors = [' + (__err) + ']; return false; ';
	        }
	      } else {
	        out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	      }
	    } else {
	      out += ' ) { ';
	      var arr2 = $deps;
	      if (arr2) {
	        var $reqProperty, i2 = -1,
	          l2 = arr2.length - 1;
	        while (i2 < l2) {
	          $reqProperty = arr2[i2 += 1];
	          var $prop = it.util.getProperty($reqProperty),
	            $missingProperty = it.util.escapeQuotes($reqProperty);
	          if (it.opts._errorDataPathProperty) {
	            it.errorPath = it.util.getPath($currentErrorPath, $reqProperty, it.opts.jsonPointers);
	          }
	          out += ' if (' + ($data) + ($prop) + ' === undefined) {  var err =   '; /* istanbul ignore else */
	          if (it.createErrors !== false) {
	            out += ' { keyword: \'' + ($errorKeyword || 'dependencies') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: { property: \'' + (it.util.escapeQuotes($property)) + '\', missingProperty: \'' + ($missingProperty) + '\', depsCount: ' + ($deps.length) + ', deps: \'' + (it.util.escapeQuotes($deps.length == 1 ? $deps[0] : $deps.join(", "))) + '\' } ';
	            if (it.opts.messages !== false) {
	              out += ' , message: \'should have ';
	              if ($deps.length == 1) {
	                out += 'property ' + (it.util.escapeQuotes($deps[0]));
	              } else {
	                out += 'properties ' + (it.util.escapeQuotes($deps.join(", ")));
	              }
	              out += ' when property ' + (it.util.escapeQuotes($property)) + ' is present\' ';
	            }
	            if (it.opts.verbose) {
	              out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	            }
	            out += ' } ';
	          } else {
	            out += ' {} ';
	          }
	          out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ';
	        }
	      }
	    }
	    out += ' }   ';
	    if ($breakOnError) {
	      $closingBraces += '}';
	      out += ' else { ';
	    }
	  }
	  it.errorPath = $currentErrorPath;
	  var $currentBaseId = $it.baseId;
	  for (var $property in $schemaDeps) {
	    var $sch = $schemaDeps[$property];
	    if (it.util.schemaHasRules($sch, it.RULES.all)) {
	      out += ' valid' + ($it.level) + ' = true; if (' + ($data) + '[\'' + ($property) + '\'] !== undefined) { ';
	      $it.schema = $sch;
	      $it.schemaPath = $schemaPath + it.util.getProperty($property);
	      $it.errSchemaPath = $errSchemaPath + '/' + it.util.escapeFragment($property);
	      out += '  ' + (it.validate($it)) + ' ';
	      $it.baseId = $currentBaseId;
	      out += ' }  ';
	      if ($breakOnError) {
	        out += ' if (valid' + ($it.level) + ') { ';
	        $closingBraces += '}';
	      }
	    }
	  }
	  if ($breakOnError) {
	    out += '   ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
	  }
	  out = it.util.cleanUpCode(out);
	  return out;
	}

	},{}],22:[function(require,module,exports){
	'use strict';
	module.exports = function generate_enum(it, $keyword) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + '.' + $keyword;
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $errorKeyword;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $isData = it.opts.v5 && $schema.$data,
	    $schemaValue;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	    $schemaValue = 'schema' + $lvl;
	  } else {
	    $schemaValue = $schema;
	  }
	  var $i = 'i' + $lvl;
	  if (!$isData) {
	    out += ' var schema' + ($lvl) + ' = validate.schema' + ($schemaPath) + ';';
	  }
	  out += 'var ' + ($valid) + ';';
	  if ($isData) {
	    out += ' if (schema' + ($lvl) + ' === undefined) ' + ($valid) + ' = true; else if (!Array.isArray(schema' + ($lvl) + ')) ' + ($valid) + ' = false; else {';
	  }
	  out += '' + ($valid) + ' = false;for (var ' + ($i) + '=0; ' + ($i) + '<schema' + ($lvl) + '.length; ' + ($i) + '++) if (equal(' + ($data) + ', schema' + ($lvl) + '[' + ($i) + '])) { ' + ($valid) + ' = true; break; }';
	  if ($isData) {
	    out += '  }  ';
	  }
	  out += ' if (!' + ($valid) + ') {   ';
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = ''; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ($errorKeyword || 'enum') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: { allowedValues: schema' + ($lvl) + ' } ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should be equal to one of the allowed values\' ';
	    }
	    if (it.opts.verbose) {
	      out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  var __err = out;
	  out = $$outStack.pop();
	  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError([' + (__err) + ']); ';
	    } else {
	      out += ' validate.errors = [' + (__err) + ']; return false; ';
	    }
	  } else {
	    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  }
	  out += ' }';
	  if ($breakOnError) {
	    out += ' else { ';
	  }
	  return out;
	}

	},{}],23:[function(require,module,exports){
	'use strict';
	module.exports = function generate_format(it, $keyword) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + '.' + $keyword;
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $errorKeyword;
	  var $data = 'data' + ($dataLvl || '');
	  if (it.opts.format === false) {
	    if ($breakOnError) {
	      out += ' if (true) { ';
	    }
	    return out;
	  }
	  var $isData = it.opts.v5 && $schema.$data,
	    $schemaValue;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	    $schemaValue = 'schema' + $lvl;
	  } else {
	    $schemaValue = $schema;
	  }
	  if ($isData) {
	    var $format = 'format' + $lvl;
	    out += ' var ' + ($format) + ' = formats[' + ($schemaValue) + ']; var isObject' + ($lvl) + ' = typeof ' + ($format) + ' == \'object\' && !(' + ($format) + ' instanceof RegExp) && ' + ($format) + '.validate; if (isObject' + ($lvl) + ') { var async' + ($lvl) + ' = ' + ($format) + '.async; ' + ($format) + ' = ' + ($format) + '.validate; } if (  ';
	    if ($isData) {
	      out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'string\') || ';
	    }
	    out += ' (' + ($format) + ' && !(typeof ' + ($format) + ' == \'function\' ? ';
	    if (it.async) {
	      out += ' (async' + ($lvl) + ' ? ' + (it.yieldAwait) + ' ' + ($format) + '(' + ($data) + ') : ' + ($format) + '(' + ($data) + ')) ';
	    } else {
	      out += ' ' + ($format) + '(' + ($data) + ') ';
	    }
	    out += ' : ' + ($format) + '.test(' + ($data) + ')))) {';
	  } else {
	    var $format = it.formats[$schema];
	    if (!$format) {
	      if ($breakOnError) {
	        out += ' if (true) { ';
	      }
	      return out;
	    }
	    var $isObject = typeof $format == 'object' && !($format instanceof RegExp) && $format.validate;
	    if ($isObject) {
	      var $async = $format.async === true;
	      $format = $format.validate;
	    }
	    if ($async) {
	      if (!it.async) throw new Error('async format in sync schema');
	      var $formatRef = 'formats' + it.util.getProperty($schema) + '.validate';
	      out += ' if (!(' + (it.yieldAwait) + ' ' + ($formatRef) + '(' + ($data) + '))) { ';
	    } else {
	      out += ' if (! ';
	      var $formatRef = 'formats' + it.util.getProperty($schema);
	      if ($isObject) $formatRef += '.validate';
	      if (typeof $format == 'function') {
	        out += ' ' + ($formatRef) + '(' + ($data) + ') ';
	      } else {
	        out += ' ' + ($formatRef) + '.test(' + ($data) + ') ';
	      }
	      out += ') { ';
	    }
	  }
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = ''; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ($errorKeyword || 'format') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: { format:  ';
	    if ($isData) {
	      out += '' + ($schemaValue);
	    } else {
	      out += '' + (it.util.toQuotedString($schema));
	    }
	    out += '  } ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should match format "';
	      if ($isData) {
	        out += '\' + ' + ($schemaValue) + ' + \'';
	      } else {
	        out += '' + (it.util.escapeQuotes($schema));
	      }
	      out += '"\' ';
	    }
	    if (it.opts.verbose) {
	      out += ' , schema:  ';
	      if ($isData) {
	        out += 'validate.schema' + ($schemaPath);
	      } else {
	        out += '' + (it.util.toQuotedString($schema));
	      }
	      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  var __err = out;
	  out = $$outStack.pop();
	  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError([' + (__err) + ']); ';
	    } else {
	      out += ' validate.errors = [' + (__err) + ']; return false; ';
	    }
	  } else {
	    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  }
	  out += ' } ';
	  if ($breakOnError) {
	    out += ' else { ';
	  }
	  return out;
	}

	},{}],24:[function(require,module,exports){
	'use strict';
	module.exports = function generate_items(it, $keyword) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + '.' + $keyword;
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $errorKeyword;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $errs = 'errs__' + $lvl;
	  var $it = it.util.copy(it);
	  var $closingBraces = '';
	  $it.level++;
	  var $dataNxt = $it.dataLevel = it.dataLevel + 1,
	    $nextData = 'data' + $dataNxt,
	    $currentBaseId = it.baseId;
	  out += 'var ' + ($errs) + ' = errors;var ' + ($valid) + ';';
	  if (Array.isArray($schema)) {
	    var $additionalItems = it.schema.additionalItems;
	    if ($additionalItems === false) {
	      out += ' ' + ($valid) + ' = ' + ($data) + '.length <= ' + ($schema.length) + '; ';
	      var $currErrSchemaPath = $errSchemaPath;
	      $errSchemaPath = it.errSchemaPath + '/additionalItems';
	      out += '  if (!' + ($valid) + ') {   ';
	      var $$outStack = $$outStack || [];
	      $$outStack.push(out);
	      out = ''; /* istanbul ignore else */
	      if (it.createErrors !== false) {
	        out += ' { keyword: \'' + ($errorKeyword || 'additionalItems') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: { limit: ' + ($schema.length) + ' } ';
	        if (it.opts.messages !== false) {
	          out += ' , message: \'should NOT have more than ' + ($schema.length) + ' items\' ';
	        }
	        if (it.opts.verbose) {
	          out += ' , schema: false , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	        }
	        out += ' } ';
	      } else {
	        out += ' {} ';
	      }
	      var __err = out;
	      out = $$outStack.pop();
	      if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
	        if (it.async) {
	          out += ' throw new ValidationError([' + (__err) + ']); ';
	        } else {
	          out += ' validate.errors = [' + (__err) + ']; return false; ';
	        }
	      } else {
	        out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	      }
	      out += ' } ';
	      $errSchemaPath = $currErrSchemaPath;
	      if ($breakOnError) {
	        $closingBraces += '}';
	        out += ' else { ';
	      }
	    }
	    var arr1 = $schema;
	    if (arr1) {
	      var $sch, $i = -1,
	        l1 = arr1.length - 1;
	      while ($i < l1) {
	        $sch = arr1[$i += 1];
	        if (it.util.schemaHasRules($sch, it.RULES.all)) {
	          out += ' valid' + ($it.level) + ' = true; if (' + ($data) + '.length > ' + ($i) + ') { ';
	          var $passData = $data + '[' + $i + ']';
	          $it.schema = $sch;
	          $it.schemaPath = $schemaPath + '[' + $i + ']';
	          $it.errSchemaPath = $errSchemaPath + '/' + $i;
	          $it.errorPath = it.util.getPathExpr(it.errorPath, $i, it.opts.jsonPointers, true);
	          $it.dataPathArr[$dataNxt] = $i;
	          var $code = it.validate($it);
	          $it.baseId = $currentBaseId;
	          if (it.util.varOccurences($code, $nextData) < 2) {
	            out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
	          } else {
	            out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
	          }
	          out += ' }  ';
	          if ($breakOnError) {
	            out += ' if (valid' + ($it.level) + ') { ';
	            $closingBraces += '}';
	          }
	        }
	      }
	    }
	    if (typeof $additionalItems == 'object' && it.util.schemaHasRules($additionalItems, it.RULES.all)) {
	      $it.schema = $additionalItems;
	      $it.schemaPath = it.schemaPath + '.additionalItems';
	      $it.errSchemaPath = it.errSchemaPath + '/additionalItems';
	      out += ' valid' + ($it.level) + ' = true; if (' + ($data) + '.length > ' + ($schema.length) + ') {  for (var i' + ($lvl) + ' = ' + ($schema.length) + '; i' + ($lvl) + ' < ' + ($data) + '.length; i' + ($lvl) + '++) { ';
	      $it.errorPath = it.util.getPathExpr(it.errorPath, 'i' + $lvl, it.opts.jsonPointers, true);
	      var $passData = $data + '[i' + $lvl + ']';
	      $it.dataPathArr[$dataNxt] = 'i' + $lvl;
	      var $code = it.validate($it);
	      $it.baseId = $currentBaseId;
	      if (it.util.varOccurences($code, $nextData) < 2) {
	        out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
	      } else {
	        out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
	      }
	      if ($breakOnError) {
	        out += ' if (!valid' + ($it.level) + ') break; ';
	      }
	      out += ' } }  ';
	      if ($breakOnError) {
	        out += ' if (valid' + ($it.level) + ') { ';
	        $closingBraces += '}';
	      }
	    }
	  } else if (it.util.schemaHasRules($schema, it.RULES.all)) {
	    $it.schema = $schema;
	    $it.schemaPath = $schemaPath;
	    $it.errSchemaPath = $errSchemaPath;
	    out += '  for (var i' + ($lvl) + ' = ' + (0) + '; i' + ($lvl) + ' < ' + ($data) + '.length; i' + ($lvl) + '++) { ';
	    $it.errorPath = it.util.getPathExpr(it.errorPath, 'i' + $lvl, it.opts.jsonPointers, true);
	    var $passData = $data + '[i' + $lvl + ']';
	    $it.dataPathArr[$dataNxt] = 'i' + $lvl;
	    var $code = it.validate($it);
	    $it.baseId = $currentBaseId;
	    if (it.util.varOccurences($code, $nextData) < 2) {
	      out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
	    } else {
	      out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
	    }
	    if ($breakOnError) {
	      out += ' if (!valid' + ($it.level) + ') break; ';
	    }
	    out += ' }  ';
	    if ($breakOnError) {
	      out += ' if (valid' + ($it.level) + ') { ';
	      $closingBraces += '}';
	    }
	  }
	  if ($breakOnError) {
	    out += ' ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
	  }
	  out = it.util.cleanUpCode(out);
	  return out;
	}

	},{}],25:[function(require,module,exports){
	'use strict';
	module.exports = function generate_multipleOf(it, $keyword) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + '.' + $keyword;
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $errorKeyword;
	  var $data = 'data' + ($dataLvl || '');
	  var $isData = it.opts.v5 && $schema.$data,
	    $schemaValue;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	    $schemaValue = 'schema' + $lvl;
	  } else {
	    $schemaValue = $schema;
	  }
	  out += 'var division' + ($lvl) + ';if (';
	  if ($isData) {
	    out += ' ' + ($schemaValue) + ' !== undefined && ( typeof ' + ($schemaValue) + ' != \'number\' || ';
	  }
	  out += ' (division' + ($lvl) + ' = ' + ($data) + ' / ' + ($schemaValue) + ', ';
	  if (it.opts.multipleOfPrecision) {
	    out += ' Math.abs(Math.round(division' + ($lvl) + ') - division' + ($lvl) + ') > 1e-' + (it.opts.multipleOfPrecision) + ' ';
	  } else {
	    out += ' division' + ($lvl) + ' !== parseInt(division' + ($lvl) + ') ';
	  }
	  out += ' ) ';
	  if ($isData) {
	    out += '  )  ';
	  }
	  out += ' ) {   ';
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = ''; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ($errorKeyword || 'multipleOf') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: { multipleOf: ' + ($schemaValue) + ' } ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should be multiple of ';
	      if ($isData) {
	        out += '\' + ' + ($schemaValue);
	      } else {
	        out += '' + ($schema) + '\'';
	      }
	    }
	    if (it.opts.verbose) {
	      out += ' , schema:  ';
	      if ($isData) {
	        out += 'validate.schema' + ($schemaPath);
	      } else {
	        out += '' + ($schema);
	      }
	      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  var __err = out;
	  out = $$outStack.pop();
	  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError([' + (__err) + ']); ';
	    } else {
	      out += ' validate.errors = [' + (__err) + ']; return false; ';
	    }
	  } else {
	    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  }
	  out += '} ';
	  if ($breakOnError) {
	    out += ' else { ';
	  }
	  return out;
	}

	},{}],26:[function(require,module,exports){
	'use strict';
	module.exports = function generate_not(it, $keyword) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + '.' + $keyword;
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $errorKeyword;
	  var $data = 'data' + ($dataLvl || '');
	  var $errs = 'errs__' + $lvl;
	  var $it = it.util.copy(it);
	  $it.level++;
	  if (it.util.schemaHasRules($schema, it.RULES.all)) {
	    $it.schema = $schema;
	    $it.schemaPath = $schemaPath;
	    $it.errSchemaPath = $errSchemaPath;
	    out += ' var ' + ($errs) + ' = errors;  ';
	    var $wasComposite = it.compositeRule;
	    it.compositeRule = $it.compositeRule = true;
	    $it.createErrors = false;
	    var $allErrorsOption;
	    if ($it.opts.allErrors) {
	      $allErrorsOption = $it.opts.allErrors;
	      $it.opts.allErrors = false;
	    }
	    out += ' ' + (it.validate($it)) + ' ';
	    $it.createErrors = true;
	    if ($allErrorsOption) $it.opts.allErrors = $allErrorsOption;
	    it.compositeRule = $it.compositeRule = $wasComposite;
	    out += ' if (valid' + ($it.level) + ') {   ';
	    var $$outStack = $$outStack || [];
	    $$outStack.push(out);
	    out = ''; /* istanbul ignore else */
	    if (it.createErrors !== false) {
	      out += ' { keyword: \'' + ($errorKeyword || 'not') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: {} ';
	      if (it.opts.messages !== false) {
	        out += ' , message: \'should NOT be valid\' ';
	      }
	      if (it.opts.verbose) {
	        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	      }
	      out += ' } ';
	    } else {
	      out += ' {} ';
	    }
	    var __err = out;
	    out = $$outStack.pop();
	    if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
	      if (it.async) {
	        out += ' throw new ValidationError([' + (__err) + ']); ';
	      } else {
	        out += ' validate.errors = [' + (__err) + ']; return false; ';
	      }
	    } else {
	      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	    }
	    out += ' } else {  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; } ';
	    if (it.opts.allErrors) {
	      out += ' } ';
	    }
	  } else {
	    out += '  var err =   '; /* istanbul ignore else */
	    if (it.createErrors !== false) {
	      out += ' { keyword: \'' + ($errorKeyword || 'not') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: {} ';
	      if (it.opts.messages !== false) {
	        out += ' , message: \'should NOT be valid\' ';
	      }
	      if (it.opts.verbose) {
	        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	      }
	      out += ' } ';
	    } else {
	      out += ' {} ';
	    }
	    out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	    if ($breakOnError) {
	      out += ' if (false) { ';
	    }
	  }
	  return out;
	}

	},{}],27:[function(require,module,exports){
	'use strict';
	module.exports = function generate_oneOf(it, $keyword) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + '.' + $keyword;
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $errorKeyword;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $errs = 'errs__' + $lvl;
	  var $it = it.util.copy(it);
	  var $closingBraces = '';
	  $it.level++;
	  out += 'var ' + ($errs) + ' = errors;var prevValid' + ($lvl) + ' = false;var ' + ($valid) + ' = false;';
	  var $currentBaseId = $it.baseId;
	  var $wasComposite = it.compositeRule;
	  it.compositeRule = $it.compositeRule = true;
	  var arr1 = $schema;
	  if (arr1) {
	    var $sch, $i = -1,
	      l1 = arr1.length - 1;
	    while ($i < l1) {
	      $sch = arr1[$i += 1];
	      if (it.util.schemaHasRules($sch, it.RULES.all)) {
	        $it.schema = $sch;
	        $it.schemaPath = $schemaPath + '[' + $i + ']';
	        $it.errSchemaPath = $errSchemaPath + '/' + $i;
	        out += '  ' + (it.validate($it)) + ' ';
	        $it.baseId = $currentBaseId;
	      } else {
	        out += ' var valid' + ($it.level) + ' = true; ';
	      }
	      if ($i) {
	        out += ' if (valid' + ($it.level) + ' && prevValid' + ($lvl) + ') ' + ($valid) + ' = false; else { ';
	        $closingBraces += '}';
	      }
	      out += ' if (valid' + ($it.level) + ') ' + ($valid) + ' = prevValid' + ($lvl) + ' = true;';
	    }
	  }
	  it.compositeRule = $it.compositeRule = $wasComposite;
	  out += '' + ($closingBraces) + 'if (!' + ($valid) + ') {   ';
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = ''; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ($errorKeyword || 'oneOf') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: {} ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should match exactly one schema in oneOf\' ';
	    }
	    if (it.opts.verbose) {
	      out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  var __err = out;
	  out = $$outStack.pop();
	  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError([' + (__err) + ']); ';
	    } else {
	      out += ' validate.errors = [' + (__err) + ']; return false; ';
	    }
	  } else {
	    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  }
	  out += '} else {  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; }';
	  if (it.opts.allErrors) {
	    out += ' } ';
	  }
	  return out;
	}

	},{}],28:[function(require,module,exports){
	'use strict';
	module.exports = function generate_pattern(it, $keyword) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + '.' + $keyword;
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $errorKeyword;
	  var $data = 'data' + ($dataLvl || '');
	  var $isData = it.opts.v5 && $schema.$data,
	    $schemaValue;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	    $schemaValue = 'schema' + $lvl;
	  } else {
	    $schemaValue = $schema;
	  }
	  var $regexp = $isData ? '(new RegExp(' + $schemaValue + '))' : it.usePattern($schema);
	  out += 'if ( ';
	  if ($isData) {
	    out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'string\') || ';
	  }
	  out += ' !' + ($regexp) + '.test(' + ($data) + ') ) {   ';
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = ''; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ($errorKeyword || 'pattern') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: { pattern:  ';
	    if ($isData) {
	      out += '' + ($schemaValue);
	    } else {
	      out += '' + (it.util.toQuotedString($schema));
	    }
	    out += '  } ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should match pattern "';
	      if ($isData) {
	        out += '\' + ' + ($schemaValue) + ' + \'';
	      } else {
	        out += '' + (it.util.escapeQuotes($schema));
	      }
	      out += '"\' ';
	    }
	    if (it.opts.verbose) {
	      out += ' , schema:  ';
	      if ($isData) {
	        out += 'validate.schema' + ($schemaPath);
	      } else {
	        out += '' + (it.util.toQuotedString($schema));
	      }
	      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  var __err = out;
	  out = $$outStack.pop();
	  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError([' + (__err) + ']); ';
	    } else {
	      out += ' validate.errors = [' + (__err) + ']; return false; ';
	    }
	  } else {
	    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  }
	  out += '} ';
	  if ($breakOnError) {
	    out += ' else { ';
	  }
	  return out;
	}

	},{}],29:[function(require,module,exports){
	'use strict';
	module.exports = function generate_patternRequired(it, $keyword) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + '.' + $keyword;
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $errorKeyword;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $key = 'key' + $lvl,
	    $matched = 'patternMatched' + $lvl,
	    $closingBraces = '',
	    $ownProperties = it.opts.ownProperties;
	  out += 'var ' + ($valid) + ' = true;';
	  var arr1 = $schema;
	  if (arr1) {
	    var $pProperty, i1 = -1,
	      l1 = arr1.length - 1;
	    while (i1 < l1) {
	      $pProperty = arr1[i1 += 1];
	      out += ' var ' + ($matched) + ' = false; for (var ' + ($key) + ' in ' + ($data) + ') {  ';
	      if ($ownProperties) {
	        out += ' if (!Object.prototype.hasOwnProperty.call(' + ($data) + ', ' + ($key) + ')) continue; ';
	      }
	      out += ' ' + ($matched) + ' = ' + (it.usePattern($pProperty)) + '.test(' + ($key) + '); if (' + ($matched) + ') break; } ';
	      var $missingPattern = it.util.escapeQuotes($pProperty);
	      out += ' if (!' + ($matched) + ') { ' + ($valid) + ' = false;  var err =   '; /* istanbul ignore else */
	      if (it.createErrors !== false) {
	        out += ' { keyword: \'' + ($errorKeyword || 'patternRequired') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: { missingPattern: \'' + ($missingPattern) + '\' } ';
	        if (it.opts.messages !== false) {
	          out += ' , message: \'should have property matching pattern \\\'' + ($missingPattern) + '\\\'\' ';
	        }
	        if (it.opts.verbose) {
	          out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	        }
	        out += ' } ';
	      } else {
	        out += ' {} ';
	      }
	      out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; }   ';
	      if ($breakOnError) {
	        $closingBraces += '}';
	        out += ' else { ';
	      }
	    }
	  }
	  out += '' + ($closingBraces);
	  return out;
	}

	},{}],30:[function(require,module,exports){
	'use strict';
	module.exports = function generate_properties(it, $keyword) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + '.' + $keyword;
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $errorKeyword;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $errs = 'errs__' + $lvl;
	  var $it = it.util.copy(it);
	  var $closingBraces = '';
	  $it.level++;
	  var $key = 'key' + $lvl,
	    $dataNxt = $it.dataLevel = it.dataLevel + 1,
	    $nextData = 'data' + $dataNxt;
	  var $schemaKeys = Object.keys($schema || {}),
	    $pProperties = it.schema.patternProperties || {},
	    $pPropertyKeys = Object.keys($pProperties),
	    $aProperties = it.schema.additionalProperties,
	    $someProperties = $schemaKeys.length || $pPropertyKeys.length,
	    $noAdditional = $aProperties === false,
	    $additionalIsSchema = typeof $aProperties == 'object' && Object.keys($aProperties).length,
	    $removeAdditional = it.opts.removeAdditional,
	    $checkAdditional = $noAdditional || $additionalIsSchema || $removeAdditional,
	    $ownProperties = it.opts.ownProperties,
	    $currentBaseId = it.baseId;
	  var $required = it.schema.required;
	  if ($required && !(it.opts.v5 && $required.$data) && $required.length < it.opts.loopRequired) var $requiredHash = it.util.toHash($required);
	  if (it.opts.v5) {
	    var $pgProperties = it.schema.patternGroups || {},
	      $pgPropertyKeys = Object.keys($pgProperties);
	  }
	  out += 'var ' + ($errs) + ' = errors;var valid' + ($it.level) + ' = true;';
	  if ($checkAdditional) {
	    out += ' for (var ' + ($key) + ' in ' + ($data) + ') {  ';
	    if ($ownProperties) {
	      out += ' if (!Object.prototype.hasOwnProperty.call(' + ($data) + ', ' + ($key) + ')) continue; ';
	    }
	    if ($someProperties) {
	      out += ' var isAdditional' + ($lvl) + ' = !(false ';
	      if ($schemaKeys.length) {
	        if ($schemaKeys.length > 5) {
	          out += ' || validate.schema' + ($schemaPath) + '[' + ($key) + '] ';
	        } else {
	          var arr1 = $schemaKeys;
	          if (arr1) {
	            var $propertyKey, i1 = -1,
	              l1 = arr1.length - 1;
	            while (i1 < l1) {
	              $propertyKey = arr1[i1 += 1];
	              out += ' || ' + ($key) + ' == ' + (it.util.toQuotedString($propertyKey)) + ' ';
	            }
	          }
	        }
	      }
	      if ($pPropertyKeys.length) {
	        var arr2 = $pPropertyKeys;
	        if (arr2) {
	          var $pProperty, $i = -1,
	            l2 = arr2.length - 1;
	          while ($i < l2) {
	            $pProperty = arr2[$i += 1];
	            out += ' || ' + (it.usePattern($pProperty)) + '.test(' + ($key) + ') ';
	          }
	        }
	      }
	      if (it.opts.v5 && $pgPropertyKeys && $pgPropertyKeys.length) {
	        var arr3 = $pgPropertyKeys;
	        if (arr3) {
	          var $pgProperty, $i = -1,
	            l3 = arr3.length - 1;
	          while ($i < l3) {
	            $pgProperty = arr3[$i += 1];
	            out += ' || ' + (it.usePattern($pgProperty)) + '.test(' + ($key) + ') ';
	          }
	        }
	      }
	      out += ' ); if (isAdditional' + ($lvl) + ') { ';
	    }
	    if ($removeAdditional == 'all') {
	      out += ' delete ' + ($data) + '[' + ($key) + ']; ';
	    } else {
	      var $currentErrorPath = it.errorPath;
	      var $additionalProperty = '\' + key' + $lvl + ' + \'';
	      if (it.opts._errorDataPathProperty) {
	        it.errorPath = it.util.getPathExpr(it.errorPath, 'key' + $lvl, it.opts.jsonPointers);
	      }
	      if ($noAdditional) {
	        if ($removeAdditional) {
	          out += ' delete ' + ($data) + '[' + ($key) + ']; ';
	        } else {
	          out += ' valid' + ($it.level) + ' = false; ';
	          var $currErrSchemaPath = $errSchemaPath;
	          $errSchemaPath = it.errSchemaPath + '/additionalProperties';
	          var $$outStack = $$outStack || [];
	          $$outStack.push(out);
	          out = ''; /* istanbul ignore else */
	          if (it.createErrors !== false) {
	            out += ' { keyword: \'' + ($errorKeyword || 'additionalProperties') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: { additionalProperty: \'' + ($additionalProperty) + '\' } ';
	            if (it.opts.messages !== false) {
	              out += ' , message: \'should NOT have additional properties\' ';
	            }
	            if (it.opts.verbose) {
	              out += ' , schema: false , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	            }
	            out += ' } ';
	          } else {
	            out += ' {} ';
	          }
	          var __err = out;
	          out = $$outStack.pop();
	          if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
	            if (it.async) {
	              out += ' throw new ValidationError([' + (__err) + ']); ';
	            } else {
	              out += ' validate.errors = [' + (__err) + ']; return false; ';
	            }
	          } else {
	            out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	          }
	          $errSchemaPath = $currErrSchemaPath;
	          if ($breakOnError) {
	            out += ' break; ';
	          }
	        }
	      } else if ($additionalIsSchema) {
	        if ($removeAdditional == 'failing') {
	          out += ' var ' + ($errs) + ' = errors;  ';
	          var $wasComposite = it.compositeRule;
	          it.compositeRule = $it.compositeRule = true;
	          $it.schema = $aProperties;
	          $it.schemaPath = it.schemaPath + '.additionalProperties';
	          $it.errSchemaPath = it.errSchemaPath + '/additionalProperties';
	          $it.errorPath = it.opts._errorDataPathProperty ? it.errorPath : it.util.getPathExpr(it.errorPath, 'key' + $lvl, it.opts.jsonPointers);
	          var $passData = $data + '[key' + $lvl + ']';
	          $it.dataPathArr[$dataNxt] = 'key' + $lvl;
	          var $code = it.validate($it);
	          $it.baseId = $currentBaseId;
	          if (it.util.varOccurences($code, $nextData) < 2) {
	            out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
	          } else {
	            out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
	          }
	          out += ' if (!valid' + ($it.level) + ') { errors = ' + ($errs) + '; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete ' + ($data) + '[' + ($key) + ']; }  ';
	          it.compositeRule = $it.compositeRule = $wasComposite;
	        } else {
	          $it.schema = $aProperties;
	          $it.schemaPath = it.schemaPath + '.additionalProperties';
	          $it.errSchemaPath = it.errSchemaPath + '/additionalProperties';
	          $it.errorPath = it.opts._errorDataPathProperty ? it.errorPath : it.util.getPathExpr(it.errorPath, 'key' + $lvl, it.opts.jsonPointers);
	          var $passData = $data + '[key' + $lvl + ']';
	          $it.dataPathArr[$dataNxt] = 'key' + $lvl;
	          var $code = it.validate($it);
	          $it.baseId = $currentBaseId;
	          if (it.util.varOccurences($code, $nextData) < 2) {
	            out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
	          } else {
	            out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
	          }
	          if ($breakOnError) {
	            out += ' if (!valid' + ($it.level) + ') break; ';
	          }
	        }
	      }
	      it.errorPath = $currentErrorPath;
	    }
	    if ($someProperties) {
	      out += ' } ';
	    }
	    out += ' }  ';
	    if ($breakOnError) {
	      out += ' if (valid' + ($it.level) + ') { ';
	      $closingBraces += '}';
	    }
	  }
	  var $useDefaults = it.opts.useDefaults && !it.compositeRule;
	  if ($schemaKeys.length) {
	    var arr4 = $schemaKeys;
	    if (arr4) {
	      var $propertyKey, i4 = -1,
	        l4 = arr4.length - 1;
	      while (i4 < l4) {
	        $propertyKey = arr4[i4 += 1];
	        var $sch = $schema[$propertyKey];
	        if (it.util.schemaHasRules($sch, it.RULES.all)) {
	          var $prop = it.util.getProperty($propertyKey),
	            $passData = $data + $prop,
	            $hasDefault = $useDefaults && $sch.default !== undefined;
	          $it.schema = $sch;
	          $it.schemaPath = $schemaPath + $prop;
	          $it.errSchemaPath = $errSchemaPath + '/' + it.util.escapeFragment($propertyKey);
	          $it.errorPath = it.util.getPath(it.errorPath, $propertyKey, it.opts.jsonPointers);
	          $it.dataPathArr[$dataNxt] = it.util.toQuotedString($propertyKey);
	          var $code = it.validate($it);
	          $it.baseId = $currentBaseId;
	          if (it.util.varOccurences($code, $nextData) < 2) {
	            $code = it.util.varReplace($code, $nextData, $passData);
	            var $useData = $passData;
	          } else {
	            var $useData = $nextData;
	            out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ';
	          }
	          if ($hasDefault) {
	            out += ' ' + ($code) + ' ';
	          } else {
	            if ($requiredHash && $requiredHash[$propertyKey]) {
	              out += ' if (' + ($useData) + ' === undefined) { valid' + ($it.level) + ' = false; ';
	              var $currentErrorPath = it.errorPath,
	                $currErrSchemaPath = $errSchemaPath,
	                $missingProperty = it.util.escapeQuotes($propertyKey);
	              if (it.opts._errorDataPathProperty) {
	                it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
	              }
	              $errSchemaPath = it.errSchemaPath + '/required';
	              var $$outStack = $$outStack || [];
	              $$outStack.push(out);
	              out = ''; /* istanbul ignore else */
	              if (it.createErrors !== false) {
	                out += ' { keyword: \'' + ($errorKeyword || 'required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
	                if (it.opts.messages !== false) {
	                  out += ' , message: \'';
	                  if (it.opts._errorDataPathProperty) {
	                    out += 'is a required property';
	                  } else {
	                    out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
	                  }
	                  out += '\' ';
	                }
	                if (it.opts.verbose) {
	                  out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	                }
	                out += ' } ';
	              } else {
	                out += ' {} ';
	              }
	              var __err = out;
	              out = $$outStack.pop();
	              if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
	                if (it.async) {
	                  out += ' throw new ValidationError([' + (__err) + ']); ';
	                } else {
	                  out += ' validate.errors = [' + (__err) + ']; return false; ';
	                }
	              } else {
	                out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	              }
	              $errSchemaPath = $currErrSchemaPath;
	              it.errorPath = $currentErrorPath;
	              out += ' } else { ';
	            } else {
	              if ($breakOnError) {
	                out += ' if (' + ($useData) + ' === undefined) { valid' + ($it.level) + ' = true; } else { ';
	              } else {
	                out += ' if (' + ($useData) + ' !== undefined) { ';
	              }
	            }
	            out += ' ' + ($code) + ' } ';
	          }
	        }
	        if ($breakOnError) {
	          out += ' if (valid' + ($it.level) + ') { ';
	          $closingBraces += '}';
	        }
	      }
	    }
	  }
	  var arr5 = $pPropertyKeys;
	  if (arr5) {
	    var $pProperty, i5 = -1,
	      l5 = arr5.length - 1;
	    while (i5 < l5) {
	      $pProperty = arr5[i5 += 1];
	      var $sch = $pProperties[$pProperty];
	      if (it.util.schemaHasRules($sch, it.RULES.all)) {
	        $it.schema = $sch;
	        $it.schemaPath = it.schemaPath + '.patternProperties' + it.util.getProperty($pProperty);
	        $it.errSchemaPath = it.errSchemaPath + '/patternProperties/' + it.util.escapeFragment($pProperty);
	        out += ' for (var ' + ($key) + ' in ' + ($data) + ') {  ';
	        if ($ownProperties) {
	          out += ' if (!Object.prototype.hasOwnProperty.call(' + ($data) + ', ' + ($key) + ')) continue; ';
	        }
	        out += ' if (' + (it.usePattern($pProperty)) + '.test(' + ($key) + ')) { ';
	        $it.errorPath = it.util.getPathExpr(it.errorPath, 'key' + $lvl, it.opts.jsonPointers);
	        var $passData = $data + '[key' + $lvl + ']';
	        $it.dataPathArr[$dataNxt] = 'key' + $lvl;
	        var $code = it.validate($it);
	        $it.baseId = $currentBaseId;
	        if (it.util.varOccurences($code, $nextData) < 2) {
	          out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
	        } else {
	          out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
	        }
	        if ($breakOnError) {
	          out += ' if (!valid' + ($it.level) + ') break; ';
	        }
	        out += ' } ';
	        if ($breakOnError) {
	          out += ' else valid' + ($it.level) + ' = true; ';
	        }
	        out += ' }  ';
	        if ($breakOnError) {
	          out += ' if (valid' + ($it.level) + ') { ';
	          $closingBraces += '}';
	        }
	      }
	    }
	  }
	  if (it.opts.v5) {
	    var arr6 = $pgPropertyKeys;
	    if (arr6) {
	      var $pgProperty, i6 = -1,
	        l6 = arr6.length - 1;
	      while (i6 < l6) {
	        $pgProperty = arr6[i6 += 1];
	        var $pgSchema = $pgProperties[$pgProperty],
	          $sch = $pgSchema.schema;
	        if (it.util.schemaHasRules($sch, it.RULES.all)) {
	          $it.schema = $sch;
	          $it.schemaPath = it.schemaPath + '.patternGroups' + it.util.getProperty($pgProperty) + '.schema';
	          $it.errSchemaPath = it.errSchemaPath + '/patternGroups/' + it.util.escapeFragment($pgProperty) + '/schema';
	          out += ' var pgPropCount' + ($lvl) + ' = 0; for (var ' + ($key) + ' in ' + ($data) + ') {  ';
	          if ($ownProperties) {
	            out += ' if (!Object.prototype.hasOwnProperty.call(' + ($data) + ', ' + ($key) + ')) continue; ';
	          }
	          out += ' if (' + (it.usePattern($pgProperty)) + '.test(' + ($key) + ')) { pgPropCount' + ($lvl) + '++; ';
	          $it.errorPath = it.util.getPathExpr(it.errorPath, 'key' + $lvl, it.opts.jsonPointers);
	          var $passData = $data + '[key' + $lvl + ']';
	          $it.dataPathArr[$dataNxt] = 'key' + $lvl;
	          var $code = it.validate($it);
	          $it.baseId = $currentBaseId;
	          if (it.util.varOccurences($code, $nextData) < 2) {
	            out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
	          } else {
	            out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
	          }
	          if ($breakOnError) {
	            out += ' if (!valid' + ($it.level) + ') break; ';
	          }
	          out += ' } ';
	          if ($breakOnError) {
	            out += ' else valid' + ($it.level) + ' = true; ';
	          }
	          out += ' }  ';
	          if ($breakOnError) {
	            out += ' if (valid' + ($it.level) + ') { ';
	            $closingBraces += '}';
	          }
	          var $pgMin = $pgSchema.minimum,
	            $pgMax = $pgSchema.maximum;
	          if ($pgMin !== undefined || $pgMax !== undefined) {
	            out += ' var ' + ($valid) + ' = true; ';
	            var $currErrSchemaPath = $errSchemaPath;
	            if ($pgMin !== undefined) {
	              var $limit = $pgMin,
	                $reason = 'minimum',
	                $moreOrLess = 'less';
	              out += ' ' + ($valid) + ' = pgPropCount' + ($lvl) + ' >= ' + ($pgMin) + '; ';
	              $errSchemaPath = it.errSchemaPath + '/patternGroups/minimum';
	              out += '  if (!' + ($valid) + ') {   ';
	              var $$outStack = $$outStack || [];
	              $$outStack.push(out);
	              out = ''; /* istanbul ignore else */
	              if (it.createErrors !== false) {
	                out += ' { keyword: \'' + ($errorKeyword || 'patternGroups') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: { reason: \'' + ($reason) + '\', limit: ' + ($limit) + ', pattern: \'' + (it.util.escapeQuotes($pgProperty)) + '\' } ';
	                if (it.opts.messages !== false) {
	                  out += ' , message: \'should NOT have ' + ($moreOrLess) + ' than ' + ($limit) + ' properties matching pattern "' + (it.util.escapeQuotes($pgProperty)) + '"\' ';
	                }
	                if (it.opts.verbose) {
	                  out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	                }
	                out += ' } ';
	              } else {
	                out += ' {} ';
	              }
	              var __err = out;
	              out = $$outStack.pop();
	              if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
	                if (it.async) {
	                  out += ' throw new ValidationError([' + (__err) + ']); ';
	                } else {
	                  out += ' validate.errors = [' + (__err) + ']; return false; ';
	                }
	              } else {
	                out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	              }
	              out += ' } ';
	              if ($pgMax !== undefined) {
	                out += ' else ';
	              }
	            }
	            if ($pgMax !== undefined) {
	              var $limit = $pgMax,
	                $reason = 'maximum',
	                $moreOrLess = 'more';
	              out += ' ' + ($valid) + ' = pgPropCount' + ($lvl) + ' <= ' + ($pgMax) + '; ';
	              $errSchemaPath = it.errSchemaPath + '/patternGroups/maximum';
	              out += '  if (!' + ($valid) + ') {   ';
	              var $$outStack = $$outStack || [];
	              $$outStack.push(out);
	              out = ''; /* istanbul ignore else */
	              if (it.createErrors !== false) {
	                out += ' { keyword: \'' + ($errorKeyword || 'patternGroups') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: { reason: \'' + ($reason) + '\', limit: ' + ($limit) + ', pattern: \'' + (it.util.escapeQuotes($pgProperty)) + '\' } ';
	                if (it.opts.messages !== false) {
	                  out += ' , message: \'should NOT have ' + ($moreOrLess) + ' than ' + ($limit) + ' properties matching pattern "' + (it.util.escapeQuotes($pgProperty)) + '"\' ';
	                }
	                if (it.opts.verbose) {
	                  out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	                }
	                out += ' } ';
	              } else {
	                out += ' {} ';
	              }
	              var __err = out;
	              out = $$outStack.pop();
	              if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
	                if (it.async) {
	                  out += ' throw new ValidationError([' + (__err) + ']); ';
	                } else {
	                  out += ' validate.errors = [' + (__err) + ']; return false; ';
	                }
	              } else {
	                out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	              }
	              out += ' } ';
	            }
	            $errSchemaPath = $currErrSchemaPath;
	            if ($breakOnError) {
	              out += ' if (' + ($valid) + ') { ';
	              $closingBraces += '}';
	            }
	          }
	        }
	      }
	    }
	  }
	  if ($breakOnError) {
	    out += ' ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
	  }
	  out = it.util.cleanUpCode(out);
	  return out;
	}

	},{}],31:[function(require,module,exports){
	'use strict';
	module.exports = function generate_ref(it, $keyword) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $errorKeyword;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $async, $refCode;
	  if ($schema == '#' || $schema == '#/') {
	    if (it.isRoot) {
	      $async = it.async;
	      $refCode = 'validate';
	    } else {
	      $async = it.root.schema.$async === true;
	      $refCode = 'root.refVal[0]';
	    }
	  } else {
	    var $refVal = it.resolveRef(it.baseId, $schema, it.isRoot);
	    if ($refVal === undefined) {
	      var $message = 'can\'t resolve reference ' + $schema + ' from id ' + it.baseId;
	      if (it.opts.missingRefs == 'fail') {
	        console.log($message);
	        var $$outStack = $$outStack || [];
	        $$outStack.push(out);
	        out = ''; /* istanbul ignore else */
	        if (it.createErrors !== false) {
	          out += ' { keyword: \'' + ($errorKeyword || '$ref') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: { ref: \'' + (it.util.escapeQuotes($schema)) + '\' } ';
	          if (it.opts.messages !== false) {
	            out += ' , message: \'can\\\'t resolve reference ' + (it.util.escapeQuotes($schema)) + '\' ';
	          }
	          if (it.opts.verbose) {
	            out += ' , schema: ' + (it.util.toQuotedString($schema)) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	          }
	          out += ' } ';
	        } else {
	          out += ' {} ';
	        }
	        var __err = out;
	        out = $$outStack.pop();
	        if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
	          if (it.async) {
	            out += ' throw new ValidationError([' + (__err) + ']); ';
	          } else {
	            out += ' validate.errors = [' + (__err) + ']; return false; ';
	          }
	        } else {
	          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	        }
	        if ($breakOnError) {
	          out += ' if (false) { ';
	        }
	      } else if (it.opts.missingRefs == 'ignore') {
	        console.log($message);
	        if ($breakOnError) {
	          out += ' if (true) { ';
	        }
	      } else {
	        var $error = new Error($message);
	        $error.missingRef = it.resolve.url(it.baseId, $schema);
	        $error.missingSchema = it.resolve.normalizeId(it.resolve.fullPath($error.missingRef));
	        throw $error;
	      }
	    } else if ($refVal.inline) {
	      var $it = it.util.copy(it);
	      $it.level++;
	      $it.schema = $refVal.schema;
	      $it.schemaPath = '';
	      $it.errSchemaPath = $schema;
	      var $code = it.validate($it).replace(/validate\.schema/g, $refVal.code);
	      out += ' ' + ($code) + ' ';
	      if ($breakOnError) {
	        out += ' if (valid' + ($it.level) + ') { ';
	      }
	    } else {
	      $async = $refVal.$async === true;
	      $refCode = $refVal.code;
	    }
	  }
	  if ($refCode) {
	    var $$outStack = $$outStack || [];
	    $$outStack.push(out);
	    out = '';
	    if (it.opts.passContext) {
	      out += ' ' + ($refCode) + '.call(this, ';
	    } else {
	      out += ' ' + ($refCode) + '( ';
	    }
	    out += ' ' + ($data) + ', (dataPath || \'\')';
	    if (it.errorPath != '""') {
	      out += ' + ' + (it.errorPath);
	    }
	    if ($dataLvl) {
	      out += ' , data' + (($dataLvl - 1) || '') + ' , ' + (it.dataPathArr[$dataLvl]) + ' ';
	    } else {
	      out += ' , parentData , parentDataProperty ';
	    }
	    out += ', rootData)  ';
	    var __callValidate = out;
	    out = $$outStack.pop();
	    if ($async) {
	      if (!it.async) throw new Error('async schema referenced by sync schema');
	      out += ' try { ';
	      if ($breakOnError) {
	        out += 'var ' + ($valid) + ' =';
	      }
	      out += ' ' + (it.yieldAwait) + ' ' + (__callValidate) + '; } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; } ';
	      if ($breakOnError) {
	        out += ' if (' + ($valid) + ') { ';
	      }
	    } else {
	      out += ' if (!' + (__callValidate) + ') { if (vErrors === null) vErrors = ' + ($refCode) + '.errors; else vErrors = vErrors.concat(' + ($refCode) + '.errors); errors = vErrors.length; } ';
	      if ($breakOnError) {
	        out += ' else { ';
	      }
	    }
	  }
	  return out;
	}

	},{}],32:[function(require,module,exports){
	'use strict';
	module.exports = function generate_required(it, $keyword) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + '.' + $keyword;
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $errorKeyword;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $isData = it.opts.v5 && $schema.$data,
	    $schemaValue;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	    $schemaValue = 'schema' + $lvl;
	  } else {
	    $schemaValue = $schema;
	  }
	  if (!$isData) {
	    if ($schema.length < it.opts.loopRequired && it.schema.properties && Object.keys(it.schema.properties).length) {
	      var $required = [];
	      var arr1 = $schema;
	      if (arr1) {
	        var $property, i1 = -1,
	          l1 = arr1.length - 1;
	        while (i1 < l1) {
	          $property = arr1[i1 += 1];
	          var $propertySch = it.schema.properties[$property];
	          if (!($propertySch && it.util.schemaHasRules($propertySch, it.RULES.all))) {
	            $required[$required.length] = $property;
	          }
	        }
	      }
	    } else {
	      var $required = $schema;
	    }
	  }
	  if ($isData || $required.length) {
	    var $currentErrorPath = it.errorPath,
	      $loopRequired = $isData || $required.length >= it.opts.loopRequired;
	    if ($breakOnError) {
	      out += ' var missing' + ($lvl) + '; ';
	      if ($loopRequired) {
	        if (!$isData) {
	          out += ' var schema' + ($lvl) + ' = validate.schema' + ($schemaPath) + '; ';
	        }
	        var $i = 'i' + $lvl,
	          $propertyPath = 'schema' + $lvl + '[' + $i + ']',
	          $missingProperty = '\' + ' + $propertyPath + ' + \'';
	        if (it.opts._errorDataPathProperty) {
	          it.errorPath = it.util.getPathExpr($currentErrorPath, $propertyPath, it.opts.jsonPointers);
	        }
	        out += ' var ' + ($valid) + ' = true; ';
	        if ($isData) {
	          out += ' if (schema' + ($lvl) + ' === undefined) ' + ($valid) + ' = true; else if (!Array.isArray(schema' + ($lvl) + ')) ' + ($valid) + ' = false; else {';
	        }
	        out += ' for (var ' + ($i) + ' = 0; ' + ($i) + ' < schema' + ($lvl) + '.length; ' + ($i) + '++) { ' + ($valid) + ' = ' + ($data) + '[schema' + ($lvl) + '[' + ($i) + ']] !== undefined; if (!' + ($valid) + ') break; } ';
	        if ($isData) {
	          out += '  }  ';
	        }
	        out += '  if (!' + ($valid) + ') {   ';
	        var $$outStack = $$outStack || [];
	        $$outStack.push(out);
	        out = ''; /* istanbul ignore else */
	        if (it.createErrors !== false) {
	          out += ' { keyword: \'' + ($errorKeyword || 'required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
	          if (it.opts.messages !== false) {
	            out += ' , message: \'';
	            if (it.opts._errorDataPathProperty) {
	              out += 'is a required property';
	            } else {
	              out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
	            }
	            out += '\' ';
	          }
	          if (it.opts.verbose) {
	            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	          }
	          out += ' } ';
	        } else {
	          out += ' {} ';
	        }
	        var __err = out;
	        out = $$outStack.pop();
	        if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
	          if (it.async) {
	            out += ' throw new ValidationError([' + (__err) + ']); ';
	          } else {
	            out += ' validate.errors = [' + (__err) + ']; return false; ';
	          }
	        } else {
	          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	        }
	        out += ' } else { ';
	      } else {
	        out += ' if ( ';
	        var arr2 = $required;
	        if (arr2) {
	          var _$property, $i = -1,
	            l2 = arr2.length - 1;
	          while ($i < l2) {
	            _$property = arr2[$i += 1];
	            if ($i) {
	              out += ' || ';
	            }
	            var $prop = it.util.getProperty(_$property);
	            out += ' ( ' + ($data) + ($prop) + ' === undefined && (missing' + ($lvl) + ' = ' + (it.util.toQuotedString(it.opts.jsonPointers ? _$property : $prop)) + ') ) ';
	          }
	        }
	        out += ') {  ';
	        var $propertyPath = 'missing' + $lvl,
	          $missingProperty = '\' + ' + $propertyPath + ' + \'';
	        if (it.opts._errorDataPathProperty) {
	          it.errorPath = it.opts.jsonPointers ? it.util.getPathExpr($currentErrorPath, $propertyPath, true) : $currentErrorPath + ' + ' + $propertyPath;
	        }
	        var $$outStack = $$outStack || [];
	        $$outStack.push(out);
	        out = ''; /* istanbul ignore else */
	        if (it.createErrors !== false) {
	          out += ' { keyword: \'' + ($errorKeyword || 'required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
	          if (it.opts.messages !== false) {
	            out += ' , message: \'';
	            if (it.opts._errorDataPathProperty) {
	              out += 'is a required property';
	            } else {
	              out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
	            }
	            out += '\' ';
	          }
	          if (it.opts.verbose) {
	            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	          }
	          out += ' } ';
	        } else {
	          out += ' {} ';
	        }
	        var __err = out;
	        out = $$outStack.pop();
	        if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
	          if (it.async) {
	            out += ' throw new ValidationError([' + (__err) + ']); ';
	          } else {
	            out += ' validate.errors = [' + (__err) + ']; return false; ';
	          }
	        } else {
	          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	        }
	        out += ' } else { ';
	      }
	    } else {
	      if ($loopRequired) {
	        if (!$isData) {
	          out += ' var schema' + ($lvl) + ' = validate.schema' + ($schemaPath) + '; ';
	        }
	        var $i = 'i' + $lvl,
	          $propertyPath = 'schema' + $lvl + '[' + $i + ']',
	          $missingProperty = '\' + ' + $propertyPath + ' + \'';
	        if (it.opts._errorDataPathProperty) {
	          it.errorPath = it.util.getPathExpr($currentErrorPath, $propertyPath, it.opts.jsonPointers);
	        }
	        if ($isData) {
	          out += ' if (schema' + ($lvl) + ' && !Array.isArray(schema' + ($lvl) + ')) {  var err =   '; /* istanbul ignore else */
	          if (it.createErrors !== false) {
	            out += ' { keyword: \'' + ($errorKeyword || 'required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
	            if (it.opts.messages !== false) {
	              out += ' , message: \'';
	              if (it.opts._errorDataPathProperty) {
	                out += 'is a required property';
	              } else {
	                out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
	              }
	              out += '\' ';
	            }
	            if (it.opts.verbose) {
	              out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	            }
	            out += ' } ';
	          } else {
	            out += ' {} ';
	          }
	          out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (schema' + ($lvl) + ' !== undefined) { ';
	        }
	        out += ' for (var ' + ($i) + ' = 0; ' + ($i) + ' < schema' + ($lvl) + '.length; ' + ($i) + '++) { if (' + ($data) + '[schema' + ($lvl) + '[' + ($i) + ']] === undefined) {  var err =   '; /* istanbul ignore else */
	        if (it.createErrors !== false) {
	          out += ' { keyword: \'' + ($errorKeyword || 'required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
	          if (it.opts.messages !== false) {
	            out += ' , message: \'';
	            if (it.opts._errorDataPathProperty) {
	              out += 'is a required property';
	            } else {
	              out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
	            }
	            out += '\' ';
	          }
	          if (it.opts.verbose) {
	            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	          }
	          out += ' } ';
	        } else {
	          out += ' {} ';
	        }
	        out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ';
	        if ($isData) {
	          out += '  }  ';
	        }
	      } else {
	        var arr3 = $required;
	        if (arr3) {
	          var $reqProperty, i3 = -1,
	            l3 = arr3.length - 1;
	          while (i3 < l3) {
	            $reqProperty = arr3[i3 += 1];
	            var $prop = it.util.getProperty($reqProperty),
	              $missingProperty = it.util.escapeQuotes($reqProperty);
	            if (it.opts._errorDataPathProperty) {
	              it.errorPath = it.util.getPath($currentErrorPath, $reqProperty, it.opts.jsonPointers);
	            }
	            out += ' if (' + ($data) + ($prop) + ' === undefined) {  var err =   '; /* istanbul ignore else */
	            if (it.createErrors !== false) {
	              out += ' { keyword: \'' + ($errorKeyword || 'required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
	              if (it.opts.messages !== false) {
	                out += ' , message: \'';
	                if (it.opts._errorDataPathProperty) {
	                  out += 'is a required property';
	                } else {
	                  out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
	                }
	                out += '\' ';
	              }
	              if (it.opts.verbose) {
	                out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	              }
	              out += ' } ';
	            } else {
	              out += ' {} ';
	            }
	            out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ';
	          }
	        }
	      }
	    }
	    it.errorPath = $currentErrorPath;
	  } else if ($breakOnError) {
	    out += ' if (true) {';
	  }
	  return out;
	}

	},{}],33:[function(require,module,exports){
	'use strict';
	module.exports = function generate_switch(it, $keyword) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + '.' + $keyword;
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $errorKeyword;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $errs = 'errs__' + $lvl;
	  var $it = it.util.copy(it);
	  var $closingBraces = '';
	  $it.level++;
	  var $ifPassed = 'ifPassed' + it.level,
	    $currentBaseId = $it.baseId,
	    $shouldContinue;
	  out += 'var ' + ($ifPassed) + ';';
	  var arr1 = $schema;
	  if (arr1) {
	    var $sch, $caseIndex = -1,
	      l1 = arr1.length - 1;
	    while ($caseIndex < l1) {
	      $sch = arr1[$caseIndex += 1];
	      if ($caseIndex && !$shouldContinue) {
	        out += ' if (!' + ($ifPassed) + ') { ';
	        $closingBraces += '}';
	      }
	      if ($sch.if && it.util.schemaHasRules($sch.if, it.RULES.all)) {
	        out += ' var ' + ($errs) + ' = errors;   ';
	        var $wasComposite = it.compositeRule;
	        it.compositeRule = $it.compositeRule = true;
	        $it.createErrors = false;
	        $it.schema = $sch.if;
	        $it.schemaPath = $schemaPath + '[' + $caseIndex + '].if';
	        $it.errSchemaPath = $errSchemaPath + '/' + $caseIndex + '/if';
	        out += '  ' + (it.validate($it)) + ' ';
	        $it.baseId = $currentBaseId;
	        $it.createErrors = true;
	        it.compositeRule = $it.compositeRule = $wasComposite;
	        out += ' ' + ($ifPassed) + ' = valid' + ($it.level) + '; if (' + ($ifPassed) + ') {  ';
	        if (typeof $sch.then == 'boolean') {
	          if ($sch.then === false) {
	            var $$outStack = $$outStack || [];
	            $$outStack.push(out);
	            out = ''; /* istanbul ignore else */
	            if (it.createErrors !== false) {
	              out += ' { keyword: \'' + ($errorKeyword || 'switch') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: { caseIndex: ' + ($caseIndex) + ' } ';
	              if (it.opts.messages !== false) {
	                out += ' , message: \'should pass "switch" keyword validation\' ';
	              }
	              if (it.opts.verbose) {
	                out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	              }
	              out += ' } ';
	            } else {
	              out += ' {} ';
	            }
	            var __err = out;
	            out = $$outStack.pop();
	            if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
	              if (it.async) {
	                out += ' throw new ValidationError([' + (__err) + ']); ';
	              } else {
	                out += ' validate.errors = [' + (__err) + ']; return false; ';
	              }
	            } else {
	              out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	            }
	          }
	          out += ' var valid' + ($it.level) + ' = ' + ($sch.then) + '; ';
	        } else {
	          $it.schema = $sch.then;
	          $it.schemaPath = $schemaPath + '[' + $caseIndex + '].then';
	          $it.errSchemaPath = $errSchemaPath + '/' + $caseIndex + '/then';
	          out += '  ' + (it.validate($it)) + ' ';
	          $it.baseId = $currentBaseId;
	        }
	        out += '  } else {  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; } } ';
	      } else {
	        out += ' ' + ($ifPassed) + ' = true;  ';
	        if (typeof $sch.then == 'boolean') {
	          if ($sch.then === false) {
	            var $$outStack = $$outStack || [];
	            $$outStack.push(out);
	            out = ''; /* istanbul ignore else */
	            if (it.createErrors !== false) {
	              out += ' { keyword: \'' + ($errorKeyword || 'switch') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: { caseIndex: ' + ($caseIndex) + ' } ';
	              if (it.opts.messages !== false) {
	                out += ' , message: \'should pass "switch" keyword validation\' ';
	              }
	              if (it.opts.verbose) {
	                out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	              }
	              out += ' } ';
	            } else {
	              out += ' {} ';
	            }
	            var __err = out;
	            out = $$outStack.pop();
	            if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
	              if (it.async) {
	                out += ' throw new ValidationError([' + (__err) + ']); ';
	              } else {
	                out += ' validate.errors = [' + (__err) + ']; return false; ';
	              }
	            } else {
	              out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	            }
	          }
	          out += ' var valid' + ($it.level) + ' = ' + ($sch.then) + '; ';
	        } else {
	          $it.schema = $sch.then;
	          $it.schemaPath = $schemaPath + '[' + $caseIndex + '].then';
	          $it.errSchemaPath = $errSchemaPath + '/' + $caseIndex + '/then';
	          out += '  ' + (it.validate($it)) + ' ';
	          $it.baseId = $currentBaseId;
	        }
	      }
	      $shouldContinue = $sch.continue
	    }
	  }
	  out += '' + ($closingBraces) + 'var ' + ($valid) + ' = valid' + ($it.level) + '; ';
	  out = it.util.cleanUpCode(out);
	  return out;
	}

	},{}],34:[function(require,module,exports){
	'use strict';
	module.exports = function generate_uniqueItems(it, $keyword) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + '.' + $keyword;
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $errorKeyword;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $isData = it.opts.v5 && $schema.$data,
	    $schemaValue;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	    $schemaValue = 'schema' + $lvl;
	  } else {
	    $schemaValue = $schema;
	  }
	  if (($schema || $isData) && it.opts.uniqueItems !== false) {
	    if ($isData) {
	      out += ' var ' + ($valid) + '; if (' + ($schemaValue) + ' === false || ' + ($schemaValue) + ' === undefined) ' + ($valid) + ' = true; else if (typeof ' + ($schemaValue) + ' != \'boolean\') ' + ($valid) + ' = false; else { ';
	    }
	    out += ' var ' + ($valid) + ' = true; if (' + ($data) + '.length > 1) { var i = ' + ($data) + '.length, j; outer: for (;i--;) { for (j = i; j--;) { if (equal(' + ($data) + '[i], ' + ($data) + '[j])) { ' + ($valid) + ' = false; break outer; } } } } ';
	    if ($isData) {
	      out += '  }  ';
	    }
	    out += ' if (!' + ($valid) + ') {   ';
	    var $$outStack = $$outStack || [];
	    $$outStack.push(out);
	    out = ''; /* istanbul ignore else */
	    if (it.createErrors !== false) {
	      out += ' { keyword: \'' + ($errorKeyword || 'uniqueItems') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: { i: i, j: j } ';
	      if (it.opts.messages !== false) {
	        out += ' , message: \'should NOT have duplicate items (items ## \' + j + \' and \' + i + \' are identical)\' ';
	      }
	      if (it.opts.verbose) {
	        out += ' , schema:  ';
	        if ($isData) {
	          out += 'validate.schema' + ($schemaPath);
	        } else {
	          out += '' + ($schema);
	        }
	        out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	      }
	      out += ' } ';
	    } else {
	      out += ' {} ';
	    }
	    var __err = out;
	    out = $$outStack.pop();
	    if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
	      if (it.async) {
	        out += ' throw new ValidationError([' + (__err) + ']); ';
	      } else {
	        out += ' validate.errors = [' + (__err) + ']; return false; ';
	      }
	    } else {
	      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	    }
	    out += ' } ';
	    if ($breakOnError) {
	      out += ' else { ';
	    }
	  } else {
	    if ($breakOnError) {
	      out += ' if (true) { ';
	    }
	  }
	  return out;
	}

	},{}],35:[function(require,module,exports){
	'use strict';
	module.exports = function generate_validate(it, $keyword) {
	  var out = '';
	  var $async = it.schema.$async === true;
	  if (it.isTop) {
	    var $top = it.isTop,
	      $lvl = it.level = 0,
	      $dataLvl = it.dataLevel = 0,
	      $data = 'data';
	    it.rootId = it.resolve.fullPath(it.root.schema.id);
	    it.baseId = it.baseId || it.rootId;
	    if ($async) {
	      it.async = true;
	      var $es7 = it.opts.async == 'es7';
	      it.yieldAwait = $es7 ? 'await' : 'yield';
	    }
	    delete it.isTop;
	    it.dataPathArr = [undefined];
	    out += ' var validate = ';
	    if ($async) {
	      if ($es7) {
	        out += ' (async function ';
	      } else {
	        if (it.opts.async == 'co*') {
	          out += 'co.wrap';
	        }
	        out += '(function* ';
	      }
	    } else {
	      out += ' (function ';
	    }
	    out += ' (data, dataPath, parentData, parentDataProperty, rootData) { \'use strict\'; var vErrors = null; ';
	    out += ' var errors = 0;     ';
	    out += ' if (rootData === undefined) rootData = data;';
	  } else {
	    var $lvl = it.level,
	      $dataLvl = it.dataLevel,
	      $data = 'data' + ($dataLvl || '');
	    if (it.schema.id) it.baseId = it.resolve.url(it.baseId, it.schema.id);
	    if ($async && !it.async) throw new Error('async schema in sync schema');
	    out += ' var errs_' + ($lvl) + ' = errors;';
	  }
	  var $valid = 'valid' + $lvl,
	    $breakOnError = !it.opts.allErrors,
	    $closingBraces1 = '',
	    $closingBraces2 = '',
	    $errorKeyword;
	  var $typeSchema = it.schema.type,
	    $typeIsArray = Array.isArray($typeSchema);
	  if ($typeSchema && it.opts.coerceTypes) {
	    var $coerceToTypes = it.util.coerceToTypes(it.opts.coerceTypes, $typeSchema);
	    if ($coerceToTypes) {
	      var $schemaPath = it.schemaPath + '.type',
	        $errSchemaPath = it.errSchemaPath + '/type',
	        $method = $typeIsArray ? 'checkDataTypes' : 'checkDataType';
	      out += ' if (' + (it.util[$method]($typeSchema, $data, true)) + ') {  ';
	      var $dataType = 'dataType' + $lvl,
	        $coerced = 'coerced' + $lvl;
	      out += ' var ' + ($dataType) + ' = typeof ' + ($data) + '; ';
	      if (it.opts.coerceTypes == 'array') {
	        out += ' if (' + ($dataType) + ' == \'object\' && Array.isArray(' + ($data) + ')) ' + ($dataType) + ' = \'array\'; ';
	      }
	      out += ' var ' + ($coerced) + ' = undefined; ';
	      var $bracesCoercion = '';
	      var arr1 = $coerceToTypes;
	      if (arr1) {
	        var $type, $i = -1,
	          l1 = arr1.length - 1;
	        while ($i < l1) {
	          $type = arr1[$i += 1];
	          if ($i) {
	            out += ' if (' + ($coerced) + ' === undefined) { ';
	            $bracesCoercion += '}';
	          }
	          if (it.opts.coerceTypes == 'array' && $type != 'array') {
	            out += ' if (' + ($dataType) + ' == \'array\' && ' + ($data) + '.length == 1) { ' + ($coerced) + ' = ' + ($data) + ' = ' + ($data) + '[0]; ' + ($dataType) + ' = typeof ' + ($data) + ';  } ';
	          }
	          if ($type == 'string') {
	            out += ' if (' + ($dataType) + ' == \'number\' || ' + ($dataType) + ' == \'boolean\') ' + ($coerced) + ' = \'\' + ' + ($data) + '; else if (' + ($data) + ' === null) ' + ($coerced) + ' = \'\'; ';
	          } else if ($type == 'number' || $type == 'integer') {
	            out += ' if (' + ($dataType) + ' == \'boolean\' || ' + ($data) + ' === null || (' + ($dataType) + ' == \'string\' && ' + ($data) + ' && ' + ($data) + ' == +' + ($data) + ' ';
	            if ($type == 'integer') {
	              out += ' && !(' + ($data) + ' % 1)';
	            }
	            out += ')) ' + ($coerced) + ' = +' + ($data) + '; ';
	          } else if ($type == 'boolean') {
	            out += ' if (' + ($data) + ' === \'false\' || ' + ($data) + ' === 0 || ' + ($data) + ' === null) ' + ($coerced) + ' = false; else if (' + ($data) + ' === \'true\' || ' + ($data) + ' === 1) ' + ($coerced) + ' = true; ';
	          } else if ($type == 'null') {
	            out += ' if (' + ($data) + ' === \'\' || ' + ($data) + ' === 0 || ' + ($data) + ' === false) ' + ($coerced) + ' = null; ';
	          } else if (it.opts.coerceTypes == 'array' && $type == 'array') {
	            out += ' if (' + ($dataType) + ' == \'string\' || ' + ($dataType) + ' == \'number\' || ' + ($dataType) + ' == \'boolean\' || ' + ($data) + ' == null) ' + ($coerced) + ' = [' + ($data) + ']; ';
	          }
	        }
	      }
	      out += ' ' + ($bracesCoercion) + ' if (' + ($coerced) + ' === undefined) {   ';
	      var $$outStack = $$outStack || [];
	      $$outStack.push(out);
	      out = ''; /* istanbul ignore else */
	      if (it.createErrors !== false) {
	        out += ' { keyword: \'' + ($errorKeyword || 'type') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: { type: \'';
	        if ($typeIsArray) {
	          out += '' + ($typeSchema.join(","));
	        } else {
	          out += '' + ($typeSchema);
	        }
	        out += '\' } ';
	        if (it.opts.messages !== false) {
	          out += ' , message: \'should be ';
	          if ($typeIsArray) {
	            out += '' + ($typeSchema.join(","));
	          } else {
	            out += '' + ($typeSchema);
	          }
	          out += '\' ';
	        }
	        if (it.opts.verbose) {
	          out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	        }
	        out += ' } ';
	      } else {
	        out += ' {} ';
	      }
	      var __err = out;
	      out = $$outStack.pop();
	      if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
	        if (it.async) {
	          out += ' throw new ValidationError([' + (__err) + ']); ';
	        } else {
	          out += ' validate.errors = [' + (__err) + ']; return false; ';
	        }
	      } else {
	        out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	      }
	      out += ' } else { ';
	      if ($dataLvl) {
	        var $parentData = 'data' + (($dataLvl - 1) || ''),
	          $dataProperty = it.dataPathArr[$dataLvl];
	        out += ' ' + ($data) + ' = ' + ($parentData) + '[' + ($dataProperty) + '] = ' + ($coerced) + '; ';
	      } else {
	        out += ' data = ' + ($coerced) + '; if (parentData !== undefined) parentData[parentDataProperty] = ' + ($coerced) + '; ';
	      }
	      out += ' } } ';
	    }
	  }
	  var $refKeywords;
	  if (it.schema.$ref && ($refKeywords = it.util.schemaHasRulesExcept(it.schema, it.RULES.all, '$ref'))) {
	    if (it.opts.extendRefs == 'fail') {
	      throw new Error('$ref: validation keywords used in schema at ' + it.errorPath);
	    } else if (it.opts.extendRefs == 'ignore') {
	      $refKeywords = false;
	      console.log('$ref: keywords ignored in schema at path', it.errorPath);
	    } else {
	      console.log('$ref: all keywords used in schema at path', it.errorPath, '(it will change in the next major version, see issue #260)');
	    }
	  }
	  if (it.schema.$ref && !$refKeywords) {
	    out += ' ' + (it.RULES.all.$ref.code(it, '$ref')) + ' ';
	    if ($breakOnError) {
	      out += ' } if (errors === ';
	      if ($top) {
	        out += '0';
	      } else {
	        out += 'errs_' + ($lvl);
	      }
	      out += ') { ';
	      $closingBraces2 += '}';
	    }
	  } else {
	    var arr2 = it.RULES;
	    if (arr2) {
	      var $rulesGroup, i2 = -1,
	        l2 = arr2.length - 1;
	      while (i2 < l2) {
	        $rulesGroup = arr2[i2 += 1];
	        if ($shouldUseGroup($rulesGroup)) {
	          if ($rulesGroup.type) {
	            out += ' if (' + (it.util.checkDataType($rulesGroup.type, $data)) + ') { ';
	          }
	          if (it.opts.useDefaults && !it.compositeRule) {
	            if ($rulesGroup.type == 'object' && it.schema.properties) {
	              var $schema = it.schema.properties,
	                $schemaKeys = Object.keys($schema);
	              var arr3 = $schemaKeys;
	              if (arr3) {
	                var $propertyKey, i3 = -1,
	                  l3 = arr3.length - 1;
	                while (i3 < l3) {
	                  $propertyKey = arr3[i3 += 1];
	                  var $sch = $schema[$propertyKey];
	                  if ($sch.default !== undefined) {
	                    var $passData = $data + it.util.getProperty($propertyKey);
	                    out += '  if (' + ($passData) + ' === undefined) ' + ($passData) + ' = ';
	                    if (it.opts.useDefaults == 'shared') {
	                      out += ' ' + (it.useDefault($sch.default)) + ' ';
	                    } else {
	                      out += ' ' + (JSON.stringify($sch.default)) + ' ';
	                    }
	                    out += '; ';
	                  }
	                }
	              }
	            } else if ($rulesGroup.type == 'array' && Array.isArray(it.schema.items)) {
	              var arr4 = it.schema.items;
	              if (arr4) {
	                var $sch, $i = -1,
	                  l4 = arr4.length - 1;
	                while ($i < l4) {
	                  $sch = arr4[$i += 1];
	                  if ($sch.default !== undefined) {
	                    var $passData = $data + '[' + $i + ']';
	                    out += '  if (' + ($passData) + ' === undefined) ' + ($passData) + ' = ';
	                    if (it.opts.useDefaults == 'shared') {
	                      out += ' ' + (it.useDefault($sch.default)) + ' ';
	                    } else {
	                      out += ' ' + (JSON.stringify($sch.default)) + ' ';
	                    }
	                    out += '; ';
	                  }
	                }
	              }
	            }
	          }
	          var arr5 = $rulesGroup.rules;
	          if (arr5) {
	            var $rule, i5 = -1,
	              l5 = arr5.length - 1;
	            while (i5 < l5) {
	              $rule = arr5[i5 += 1];
	              if ($shouldUseRule($rule)) {
	                out += ' ' + ($rule.code(it, $rule.keyword)) + ' ';
	                if ($breakOnError) {
	                  $closingBraces1 += '}';
	                }
	              }
	            }
	          }
	          if ($breakOnError) {
	            out += ' ' + ($closingBraces1) + ' ';
	            $closingBraces1 = '';
	          }
	          if ($rulesGroup.type) {
	            out += ' } ';
	            if ($typeSchema && $typeSchema === $rulesGroup.type) {
	              var $typeChecked = true;
	              out += ' else { ';
	              var $schemaPath = it.schemaPath + '.type',
	                $errSchemaPath = it.errSchemaPath + '/type';
	              var $$outStack = $$outStack || [];
	              $$outStack.push(out);
	              out = ''; /* istanbul ignore else */
	              if (it.createErrors !== false) {
	                out += ' { keyword: \'' + ($errorKeyword || 'type') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: { type: \'';
	                if ($typeIsArray) {
	                  out += '' + ($typeSchema.join(","));
	                } else {
	                  out += '' + ($typeSchema);
	                }
	                out += '\' } ';
	                if (it.opts.messages !== false) {
	                  out += ' , message: \'should be ';
	                  if ($typeIsArray) {
	                    out += '' + ($typeSchema.join(","));
	                  } else {
	                    out += '' + ($typeSchema);
	                  }
	                  out += '\' ';
	                }
	                if (it.opts.verbose) {
	                  out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	                }
	                out += ' } ';
	              } else {
	                out += ' {} ';
	              }
	              var __err = out;
	              out = $$outStack.pop();
	              if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
	                if (it.async) {
	                  out += ' throw new ValidationError([' + (__err) + ']); ';
	                } else {
	                  out += ' validate.errors = [' + (__err) + ']; return false; ';
	                }
	              } else {
	                out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	              }
	              out += ' } ';
	            }
	          }
	          if ($breakOnError) {
	            out += ' if (errors === ';
	            if ($top) {
	              out += '0';
	            } else {
	              out += 'errs_' + ($lvl);
	            }
	            out += ') { ';
	            $closingBraces2 += '}';
	          }
	        }
	      }
	    }
	  }
	  if ($typeSchema && !$typeChecked && !(it.opts.coerceTypes && $coerceToTypes)) {
	    var $schemaPath = it.schemaPath + '.type',
	      $errSchemaPath = it.errSchemaPath + '/type',
	      $method = $typeIsArray ? 'checkDataTypes' : 'checkDataType';
	    out += ' if (' + (it.util[$method]($typeSchema, $data, true)) + ') {   ';
	    var $$outStack = $$outStack || [];
	    $$outStack.push(out);
	    out = ''; /* istanbul ignore else */
	    if (it.createErrors !== false) {
	      out += ' { keyword: \'' + ($errorKeyword || 'type') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: "' + ($errSchemaPath) + '" , params: { type: \'';
	      if ($typeIsArray) {
	        out += '' + ($typeSchema.join(","));
	      } else {
	        out += '' + ($typeSchema);
	      }
	      out += '\' } ';
	      if (it.opts.messages !== false) {
	        out += ' , message: \'should be ';
	        if ($typeIsArray) {
	          out += '' + ($typeSchema.join(","));
	        } else {
	          out += '' + ($typeSchema);
	        }
	        out += '\' ';
	      }
	      if (it.opts.verbose) {
	        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	      }
	      out += ' } ';
	    } else {
	      out += ' {} ';
	    }
	    var __err = out;
	    out = $$outStack.pop();
	    if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
	      if (it.async) {
	        out += ' throw new ValidationError([' + (__err) + ']); ';
	      } else {
	        out += ' validate.errors = [' + (__err) + ']; return false; ';
	      }
	    } else {
	      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	    }
	    out += ' }';
	  }
	  if ($breakOnError) {
	    out += ' ' + ($closingBraces2) + ' ';
	  }
	  if ($top) {
	    if ($async) {
	      out += ' if (errors === 0) return true;           ';
	      out += ' else throw new ValidationError(vErrors); ';
	    } else {
	      out += ' validate.errors = vErrors; ';
	      out += ' return errors === 0;       ';
	    }
	    out += ' }); return validate;';
	  } else {
	    out += ' var ' + ($valid) + ' = errors === errs_' + ($lvl) + ';';
	  }
	  out = it.util.cleanUpCode(out);
	  if ($top && $breakOnError) {
	    out = it.util.cleanUpVarErrors(out, $async);
	  }

	  function $shouldUseGroup($rulesGroup) {
	    for (var i = 0; i < $rulesGroup.rules.length; i++)
	      if ($shouldUseRule($rulesGroup.rules[i])) return true;
	  }

	  function $shouldUseRule($rule) {
	    return it.schema[$rule.keyword] !== undefined || ($rule.keyword == 'properties' && (it.schema.additionalProperties === false || typeof it.schema.additionalProperties == 'object' || (it.schema.patternProperties && Object.keys(it.schema.patternProperties).length) || (it.opts.v5 && it.schema.patternGroups && Object.keys(it.schema.patternGroups).length)));
	  }
	  return out;
	}

	},{}],36:[function(require,module,exports){
	'use strict';

	var IDENTIFIER = /^[a-z_$][a-z0-9_$]*$/i;
	var customRuleCode = require('./dotjs/custom');

	/**
	 * Define custom keyword
	 * @this  Ajv
	 * @param {String} keyword custom keyword, should be a valid identifier, should be different from all standard, custom and macro keywords.
	 * @param {Object} definition keyword definition object with properties `type` (type(s) which the keyword applies to), `validate` or `compile`.
	 */
	module.exports = function addKeyword(keyword, definition) {
	  /* eslint no-shadow: 0 */
	  var self = this;
	  if (this.RULES.keywords[keyword])
	    throw new Error('Keyword ' + keyword + ' is already defined');

	  if (!IDENTIFIER.test(keyword))
	    throw new Error('Keyword ' + keyword + ' is not a valid identifier');

	  if (definition) {
	    var dataType = definition.type;
	    if (Array.isArray(dataType)) {
	      var i, len = dataType.length;
	      for (i=0; i<len; i++) checkDataType(dataType[i]);
	      for (i=0; i<len; i++) _addRule(keyword, dataType[i], definition);
	    } else {
	      if (dataType) checkDataType(dataType);
	      _addRule(keyword, dataType, definition);
	    }

	    var $data = definition.$data === true && this._opts.v5;
	    if ($data && !definition.validate)
	      throw new Error('$data support: neither "validate" nor "compile" functions are defined');

	    var metaSchema = definition.metaSchema;
	    if (metaSchema) {
	      if ($data) {
	        metaSchema = {
	          anyOf: [
	            metaSchema,
	            { '$ref': 'https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/json-schema-v5.json#/definitions/$data' }
	          ]
	        };
	      }
	      definition.validateSchema = self.compile(metaSchema, true);
	    }
	  }

	  this.RULES.keywords[keyword] = this.RULES.all[keyword] = true;


	  function _addRule(keyword, dataType, definition) {
	    var ruleGroup;
	    for (var i=0; i<self.RULES.length; i++) {
	      var rg = self.RULES[i];
	      if (rg.type == dataType) {
	        ruleGroup = rg;
	        break;
	      }
	    }

	    if (!ruleGroup) {
	      ruleGroup = { type: dataType, rules: [] };
	      self.RULES.push(ruleGroup);
	    }

	    var rule = {
	      keyword: keyword,
	      definition: definition,
	      custom: true,
	      code: customRuleCode
	    };
	    ruleGroup.rules.push(rule);
	    self.RULES.custom[keyword] = rule;
	  }


	  function checkDataType(dataType) {
	    if (!self.RULES.types[dataType]) throw new Error('Unknown type ' + dataType);
	  }
	};

	},{"./dotjs/custom":20}],37:[function(require,module,exports){
	module.exports={
	    "id": "http://json-schema.org/draft-04/schema#",
	    "$schema": "http://json-schema.org/draft-04/schema#",
	    "description": "Core schema meta-schema",
	    "definitions": {
	        "schemaArray": {
	            "type": "array",
	            "minItems": 1,
	            "items": { "$ref": "#" }
	        },
	        "positiveInteger": {
	            "type": "integer",
	            "minimum": 0
	        },
	        "positiveIntegerDefault0": {
	            "allOf": [ { "$ref": "#/definitions/positiveInteger" }, { "default": 0 } ]
	        },
	        "simpleTypes": {
	            "enum": [ "array", "boolean", "integer", "null", "number", "object", "string" ]
	        },
	        "stringArray": {
	            "type": "array",
	            "items": { "type": "string" },
	            "minItems": 1,
	            "uniqueItems": true
	        }
	    },
	    "type": "object",
	    "properties": {
	        "id": {
	            "type": "string",
	            "format": "uri"
	        },
	        "$schema": {
	            "type": "string",
	            "format": "uri"
	        },
	        "title": {
	            "type": "string"
	        },
	        "description": {
	            "type": "string"
	        },
	        "default": {},
	        "multipleOf": {
	            "type": "number",
	            "minimum": 0,
	            "exclusiveMinimum": true
	        },
	        "maximum": {
	            "type": "number"
	        },
	        "exclusiveMaximum": {
	            "type": "boolean",
	            "default": false
	        },
	        "minimum": {
	            "type": "number"
	        },
	        "exclusiveMinimum": {
	            "type": "boolean",
	            "default": false
	        },
	        "maxLength": { "$ref": "#/definitions/positiveInteger" },
	        "minLength": { "$ref": "#/definitions/positiveIntegerDefault0" },
	        "pattern": {
	            "type": "string",
	            "format": "regex"
	        },
	        "additionalItems": {
	            "anyOf": [
	                { "type": "boolean" },
	                { "$ref": "#" }
	            ],
	            "default": {}
	        },
	        "items": {
	            "anyOf": [
	                { "$ref": "#" },
	                { "$ref": "#/definitions/schemaArray" }
	            ],
	            "default": {}
	        },
	        "maxItems": { "$ref": "#/definitions/positiveInteger" },
	        "minItems": { "$ref": "#/definitions/positiveIntegerDefault0" },
	        "uniqueItems": {
	            "type": "boolean",
	            "default": false
	        },
	        "maxProperties": { "$ref": "#/definitions/positiveInteger" },
	        "minProperties": { "$ref": "#/definitions/positiveIntegerDefault0" },
	        "required": { "$ref": "#/definitions/stringArray" },
	        "additionalProperties": {
	            "anyOf": [
	                { "type": "boolean" },
	                { "$ref": "#" }
	            ],
	            "default": {}
	        },
	        "definitions": {
	            "type": "object",
	            "additionalProperties": { "$ref": "#" },
	            "default": {}
	        },
	        "properties": {
	            "type": "object",
	            "additionalProperties": { "$ref": "#" },
	            "default": {}
	        },
	        "patternProperties": {
	            "type": "object",
	            "additionalProperties": { "$ref": "#" },
	            "default": {}
	        },
	        "dependencies": {
	            "type": "object",
	            "additionalProperties": {
	                "anyOf": [
	                    { "$ref": "#" },
	                    { "$ref": "#/definitions/stringArray" }
	                ]
	            }
	        },
	        "enum": {
	            "type": "array",
	            "minItems": 1,
	            "uniqueItems": true
	        },
	        "type": {
	            "anyOf": [
	                { "$ref": "#/definitions/simpleTypes" },
	                {
	                    "type": "array",
	                    "items": { "$ref": "#/definitions/simpleTypes" },
	                    "minItems": 1,
	                    "uniqueItems": true
	                }
	            ]
	        },
	        "allOf": { "$ref": "#/definitions/schemaArray" },
	        "anyOf": { "$ref": "#/definitions/schemaArray" },
	        "oneOf": { "$ref": "#/definitions/schemaArray" },
	        "not": { "$ref": "#" }
	    },
	    "dependencies": {
	        "exclusiveMaximum": [ "maximum" ],
	        "exclusiveMinimum": [ "minimum" ]
	    },
	    "default": {}
	}

	},{}],38:[function(require,module,exports){
	module.exports={
	    "id": "https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/json-schema-v5.json#",
	    "$schema": "http://json-schema.org/draft-04/schema#",
	    "description": "Core schema meta-schema (v5 proposals)",
	    "definitions": {
	        "schemaArray": {
	            "type": "array",
	            "minItems": 1,
	            "items": { "$ref": "#" }
	        },
	        "positiveInteger": {
	            "type": "integer",
	            "minimum": 0
	        },
	        "positiveIntegerDefault0": {
	            "allOf": [ { "$ref": "#/definitions/positiveInteger" }, { "default": 0 } ]
	        },
	        "simpleTypes": {
	            "enum": [ "array", "boolean", "integer", "null", "number", "object", "string" ]
	        },
	        "stringArray": {
	            "type": "array",
	            "items": { "type": "string" },
	            "minItems": 1,
	            "uniqueItems": true
	        },
	        "$data": {
	            "type": "object",
	            "required": [ "$data" ],
	            "properties": {
	                "$data": {
	                    "type": "string",
	                    "anyOf": [
	                        { "format": "relative-json-pointer" }, 
	                        { "format": "json-pointer" }
	                    ]
	                }
	            },
	            "additionalProperties": false
	        }
	    },
	    "type": "object",
	    "properties": {
	        "id": {
	            "type": "string",
	            "format": "uri"
	        },
	        "$schema": {
	            "type": "string",
	            "format": "uri"
	        },
	        "title": {
	            "type": "string"
	        },
	        "description": {
	            "type": "string"
	        },
	        "default": {},
	        "multipleOf": {
	            "anyOf": [
	                {
	                    "type": "number",
	                    "minimum": 0,
	                    "exclusiveMinimum": true
	                },
	                { "$ref": "#/definitions/$data" }
	            ]
	        },
	        "maximum": {
	            "anyOf": [
	                { "type": "number" },
	                { "$ref": "#/definitions/$data" }
	            ]
	        },
	        "exclusiveMaximum": {
	            "anyOf": [
	                {
	                    "type": "boolean",
	                    "default": false
	                },
	                { "$ref": "#/definitions/$data" }
	            ]
	        },
	        "minimum": {
	            "anyOf": [
	                { "type": "number" },
	                { "$ref": "#/definitions/$data" }
	            ]
	        },
	        "exclusiveMinimum": {
	            "anyOf": [
	                {
	                    "type": "boolean",
	                    "default": false
	                },
	                { "$ref": "#/definitions/$data" }
	            ]
	        },
	        "maxLength": {
	            "anyOf": [
	                { "$ref": "#/definitions/positiveInteger" },
	                { "$ref": "#/definitions/$data" }
	            ]
	        },
	        "minLength": {
	            "anyOf": [
	                { "$ref": "#/definitions/positiveIntegerDefault0" },
	                { "$ref": "#/definitions/$data" }
	            ]
	        },
	        "pattern": {
	            "anyOf": [
	                {
	                    "type": "string",
	                    "format": "regex"
	                },
	                { "$ref": "#/definitions/$data" }
	            ]
	        },
	        "additionalItems": {
	            "anyOf": [
	                { "type": "boolean" },
	                { "$ref": "#" },
	                { "$ref": "#/definitions/$data" }
	            ],
	            "default": {}
	        },
	        "items": {
	            "anyOf": [
	                { "$ref": "#" },
	                { "$ref": "#/definitions/schemaArray" }
	            ],
	            "default": {}
	        },
	        "maxItems": {
	            "anyOf": [
	                { "$ref": "#/definitions/positiveInteger" },
	                { "$ref": "#/definitions/$data" }
	            ]
	        },
	        "minItems": {
	            "anyOf": [
	                { "$ref": "#/definitions/positiveIntegerDefault0" },
	                { "$ref": "#/definitions/$data" }
	            ]
	        },
	        "uniqueItems": {
	            "anyOf": [
	                {
	                    "type": "boolean",
	                    "default": false
	                },
	                { "$ref": "#/definitions/$data" }
	            ]
	        },
	        "maxProperties": {
	            "anyOf": [
	                { "$ref": "#/definitions/positiveInteger" },
	                { "$ref": "#/definitions/$data" }
	            ]
	        },
	        "minProperties": {
	            "anyOf": [
	                { "$ref": "#/definitions/positiveIntegerDefault0" },
	                { "$ref": "#/definitions/$data" }
	            ]
	        },
	        "required": {
	            "anyOf": [
	                { "$ref": "#/definitions/stringArray" },
	                { "$ref": "#/definitions/$data" }
	            ]
	        },
	        "additionalProperties": {
	            "anyOf": [
	                { "type": "boolean" },
	                { "$ref": "#" },
	                { "$ref": "#/definitions/$data" }
	            ],
	            "default": {}
	        },
	        "definitions": {
	            "type": "object",
	            "additionalProperties": { "$ref": "#" },
	            "default": {}
	        },
	        "properties": {
	            "type": "object",
	            "additionalProperties": { "$ref": "#" },
	            "default": {}
	        },
	        "patternProperties": {
	            "type": "object",
	            "additionalProperties": { "$ref": "#" },
	            "default": {}
	        },
	        "dependencies": {
	            "type": "object",
	            "additionalProperties": {
	                "anyOf": [
	                    { "$ref": "#" },
	                    { "$ref": "#/definitions/stringArray" }
	                ]
	            }
	        },
	        "enum": {
	            "anyOf": [
	                {
	                    "type": "array",
	                    "minItems": 1,
	                    "uniqueItems": true
	                },
	                { "$ref": "#/definitions/$data" }
	            ]
	        },
	        "type": {
	            "anyOf": [
	                { "$ref": "#/definitions/simpleTypes" },
	                {
	                    "type": "array",
	                    "items": { "$ref": "#/definitions/simpleTypes" },
	                    "minItems": 1,
	                    "uniqueItems": true
	                }
	            ]
	        },
	        "allOf": { "$ref": "#/definitions/schemaArray" },
	        "anyOf": { "$ref": "#/definitions/schemaArray" },
	        "oneOf": { "$ref": "#/definitions/schemaArray" },
	        "not": { "$ref": "#" },
	        "format": {
	            "anyOf": [
	                { "type": "string" },
	                { "$ref": "#/definitions/$data" }
	            ]
	        },
	        "formatMaximum": {
	            "anyOf": [
	                { "type": "string" },
	                { "$ref": "#/definitions/$data" }
	            ]
	        },
	        "formatMinimum": {
	            "anyOf": [
	                { "type": "string" },
	                { "$ref": "#/definitions/$data" }
	            ]
	        },
	        "formatExclusiveMaximum": {
	            "anyOf": [
	                {
	                    "type": "boolean",
	                    "default": false
	                },
	                { "$ref": "#/definitions/$data" }
	            ]
	        },
	        "formatExclusiveMinimum": {
	            "anyOf": [
	                {
	                    "type": "boolean",
	                    "default": false
	                },
	                { "$ref": "#/definitions/$data" }
	            ]
	        },
	        "constant": {
	            "anyOf": [
	                {},
	                { "$ref": "#/definitions/$data" }
	            ]
	        },
	        "contains": { "$ref": "#" },
	        "patternGroups": {
	            "type": "object",
	            "additionalProperties": {
	                "type": "object",
	                "required": [ "schema" ],
	                "properties": {
	                    "maximum": {
	                        "anyOf": [
	                            { "$ref": "#/definitions/positiveInteger" },
	                            { "$ref": "#/definitions/$data" }
	                        ]
	                    },
	                    "minimum": {
	                        "anyOf": [
	                            { "$ref": "#/definitions/positiveIntegerDefault0" },
	                            { "$ref": "#/definitions/$data" }
	                        ]
	                    },
	                    "schema": { "$ref": "#" }
	                },
	                "additionalProperties": false
	            },
	            "default": {}
	        },
	        "switch": {
	            "type": "array",
	            "items": {
	                "required": [ "then" ],
	                "properties": {
	                    "if": { "$ref": "#" },
	                    "then": {
	                        "anyOf": [
	                            { "type": "boolean" },
	                            { "$ref": "#" }
	                        ]
	                    },
	                    "continue": { "type": "boolean" }
	                },
	                "additionalProperties": false,
	                "dependencies": {
	                    "continue": [ "if" ]
	                }
	            }
	        }
	    },
	    "dependencies": {
	        "exclusiveMaximum": [ "maximum" ],
	        "exclusiveMinimum": [ "minimum" ],
	        "formatMaximum": [ "format" ],
	        "formatMinimum": [ "format" ],
	        "formatExclusiveMaximum": [ "formatMaximum" ],
	        "formatExclusiveMinimum": [ "formatMinimum" ]
	    },
	    "default": {}
	}

	},{}],39:[function(require,module,exports){
	'use strict';

	var META_SCHEMA_ID = 'https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/json-schema-v5.json';

	module.exports = {
	  enable: enableV5,
	  META_SCHEMA_ID: META_SCHEMA_ID
	};


	function enableV5(ajv) {
	  var inlineFunctions = {
	    'switch': require('./dotjs/switch'),
	    'constant': require('./dotjs/constant'),
	    '_formatLimit': require('./dotjs/_formatLimit'),
	    'patternRequired': require('./dotjs/patternRequired')
	  };

	  if (ajv._opts.meta !== false) {
	    var metaSchema = require('./refs/json-schema-v5.json');
	    ajv.addMetaSchema(metaSchema, META_SCHEMA_ID);
	  }
	  _addKeyword('constant');
	  ajv.addKeyword('contains', { type: 'array', macro: containsMacro });

	  _addKeyword('formatMaximum', 'string', inlineFunctions._formatLimit);
	  _addKeyword('formatMinimum', 'string', inlineFunctions._formatLimit);
	  ajv.addKeyword('formatExclusiveMaximum');
	  ajv.addKeyword('formatExclusiveMinimum');

	  ajv.addKeyword('patternGroups'); // implemented in properties.jst
	  _addKeyword('patternRequired', 'object');
	  _addKeyword('switch');


	  function _addKeyword(keyword, types, inlineFunc) {
	    var definition = {
	      inline: inlineFunc || inlineFunctions[keyword],
	      statements: true,
	      errors: 'full'
	    };
	    if (types) definition.type = types;
	    ajv.addKeyword(keyword, definition);
	  }
	}


	function containsMacro(schema) {
	  return {
	    not: { items: { not: schema } }
	  };
	}

	},{"./dotjs/_formatLimit":12,"./dotjs/constant":19,"./dotjs/patternRequired":29,"./dotjs/switch":33,"./refs/json-schema-v5.json":38}],40:[function(require,module,exports){
	(function (global){
	/*! https://mths.be/punycode v1.4.1 by @mathias */
	;(function(root) {

		/** Detect free variables */
		var freeExports = typeof exports == 'object' && exports &&
			!exports.nodeType && exports;
		var freeModule = typeof module == 'object' && module &&
			!module.nodeType && module;
		var freeGlobal = typeof global == 'object' && global;
		if (
			freeGlobal.global === freeGlobal ||
			freeGlobal.window === freeGlobal ||
			freeGlobal.self === freeGlobal
		) {
			root = freeGlobal;
		}

		/**
		 * The `punycode` object.
		 * @name punycode
		 * @type Object
		 */
		var punycode,

		/** Highest positive signed 32-bit float value */
		maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

		/** Bootstring parameters */
		base = 36,
		tMin = 1,
		tMax = 26,
		skew = 38,
		damp = 700,
		initialBias = 72,
		initialN = 128, // 0x80
		delimiter = '-', // '\x2D'

		/** Regular expressions */
		regexPunycode = /^xn--/,
		regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

		/** Error messages */
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},

		/** Convenience shortcuts */
		baseMinusTMin = base - tMin,
		floor = Math.floor,
		stringFromCharCode = String.fromCharCode,

		/** Temporary variable */
		key;

		/*--------------------------------------------------------------------------*/

		/**
		 * A generic error utility function.
		 * @private
		 * @param {String} type The error type.
		 * @returns {Error} Throws a `RangeError` with the applicable error message.
		 */
		function error(type) {
			throw new RangeError(errors[type]);
		}

		/**
		 * A generic `Array#map` utility function.
		 * @private
		 * @param {Array} array The array to iterate over.
		 * @param {Function} callback The function that gets called for every array
		 * item.
		 * @returns {Array} A new array of values returned by the callback function.
		 */
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}

		/**
		 * A simple `Array#map`-like wrapper to work with domain name strings or email
		 * addresses.
		 * @private
		 * @param {String} domain The domain name or email address.
		 * @param {Function} callback The function that gets called for every
		 * character.
		 * @returns {Array} A new string of characters returned by the callback
		 * function.
		 */
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				// In email addresses, only the domain name should be punycoded. Leave
				// the local part (i.e. everything up to `@`) intact.
				result = parts[0] + '@';
				string = parts[1];
			}
			// Avoid `split(regex)` for IE8 compatibility. See #17.
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}

		/**
		 * Creates an array containing the numeric code points of each Unicode
		 * character in the string. While JavaScript uses UCS-2 internally,
		 * this function will convert a pair of surrogate halves (each of which
		 * UCS-2 exposes as separate characters) into a single code point,
		 * matching UTF-16.
		 * @see `punycode.ucs2.encode`
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode.ucs2
		 * @name decode
		 * @param {String} string The Unicode input string (UCS-2).
		 * @returns {Array} The new array of code points.
		 */
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		/**
		 * Creates a string based on an array of numeric code points.
		 * @see `punycode.ucs2.decode`
		 * @memberOf punycode.ucs2
		 * @name encode
		 * @param {Array} codePoints The array of numeric code points.
		 * @returns {String} The new Unicode string (UCS-2).
		 */
		function ucs2encode(array) {
			return map(array, function(value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}

		/**
		 * Converts a basic code point into a digit/integer.
		 * @see `digitToBasic()`
		 * @private
		 * @param {Number} codePoint The basic numeric code point value.
		 * @returns {Number} The numeric value of a basic code point (for use in
		 * representing integers) in the range `0` to `base - 1`, or `base` if
		 * the code point does not represent a value.
		 */
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}

		/**
		 * Converts a digit/integer into a basic code point.
		 * @see `basicToDigit()`
		 * @private
		 * @param {Number} digit The numeric value of a basic code point.
		 * @returns {Number} The basic code point whose value (when used for
		 * representing integers) is `digit`, which needs to be in the range
		 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
		 * used; else, the lowercase form is used. The behavior is undefined
		 * if `flag` is non-zero and `digit` has no uppercase form.
		 */
		function digitToBasic(digit, flag) {
			//  0..25 map to ASCII a..z or A..Z
			// 26..35 map to ASCII 0..9
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}

		/**
		 * Bias adaptation function as per section 3.4 of RFC 3492.
		 * https://tools.ietf.org/html/rfc3492#section-3.4
		 * @private
		 */
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}

		/**
		 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
		 * symbols.
		 * @memberOf punycode
		 * @param {String} input The Punycode string of ASCII-only symbols.
		 * @returns {String} The resulting string of Unicode symbols.
		 */
		function decode(input) {
			// Don't use UCS-2
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,
			    /** Cached calculation results */
			    baseMinusT;

			// Handle the basic code points: let `basic` be the number of input code
			// points before the last delimiter, or `0` if there is none, then copy
			// the first basic code points to the output.

			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}

			for (j = 0; j < basic; ++j) {
				// if it's not a basic code point
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}

			// Main decoding loop: start just after the last delimiter if any basic code
			// points were copied; start at the beginning otherwise.

			for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

				// `index` is the index of the next character to be consumed.
				// Decode a generalized variable-length integer into `delta`,
				// which gets added to `i`. The overflow checking is easier
				// if we increase `i` as we go, then subtract off its starting
				// value at the end to obtain `delta`.
				for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

					if (index >= inputLength) {
						error('invalid-input');
					}

					digit = basicToDigit(input.charCodeAt(index++));

					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}

					i += digit * w;
					t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

					if (digit < t) {
						break;
					}

					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}

					w *= baseMinusT;

				}

				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);

				// `i` was supposed to wrap around from `out` to `0`,
				// incrementing `n` each time, so we'll fix that now:
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}

				n += floor(i / out);
				i %= out;

				// Insert `n` at position `i` of the output
				output.splice(i++, 0, n);

			}

			return ucs2encode(output);
		}

		/**
		 * Converts a string of Unicode symbols (e.g. a domain name label) to a
		 * Punycode string of ASCII-only symbols.
		 * @memberOf punycode
		 * @param {String} input The string of Unicode symbols.
		 * @returns {String} The resulting Punycode string of ASCII-only symbols.
		 */
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],
			    /** `inputLength` will hold the number of code points in `input`. */
			    inputLength,
			    /** Cached calculation results */
			    handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;

			// Convert the input in UCS-2 to Unicode
			input = ucs2decode(input);

			// Cache the length
			inputLength = input.length;

			// Initialize the state
			n = initialN;
			delta = 0;
			bias = initialBias;

			// Handle the basic code points
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}

			handledCPCount = basicLength = output.length;

			// `handledCPCount` is the number of code points that have been handled;
			// `basicLength` is the number of basic code points.

			// Finish the basic string - if it is not empty - with a delimiter
			if (basicLength) {
				output.push(delimiter);
			}

			// Main encoding loop:
			while (handledCPCount < inputLength) {

				// All non-basic code points < n have been handled already. Find the next
				// larger one:
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}

				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}

				delta += (m - n) * handledCPCountPlusOne;
				n = m;

				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];

					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}

					if (currentValue == n) {
						// Represent delta as a generalized variable-length integer
						for (q = delta, k = base; /* no condition */; k += base) {
							t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(
								stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
							);
							q = floor(qMinusT / baseMinusT);
						}

						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}

				++delta;
				++n;

			}
			return output.join('');
		}

		/**
		 * Converts a Punycode string representing a domain name or an email address
		 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
		 * it doesn't matter if you call it on a string that has already been
		 * converted to Unicode.
		 * @memberOf punycode
		 * @param {String} input The Punycoded domain name or email address to
		 * convert to Unicode.
		 * @returns {String} The Unicode representation of the given Punycode
		 * string.
		 */
		function toUnicode(input) {
			return mapDomain(input, function(string) {
				return regexPunycode.test(string)
					? decode(string.slice(4).toLowerCase())
					: string;
			});
		}

		/**
		 * Converts a Unicode string representing a domain name or an email address to
		 * Punycode. Only the non-ASCII parts of the domain name will be converted,
		 * i.e. it doesn't matter if you call it with a domain that's already in
		 * ASCII.
		 * @memberOf punycode
		 * @param {String} input The domain name or email address to convert, as a
		 * Unicode string.
		 * @returns {String} The Punycode representation of the given domain name or
		 * email address.
		 */
		function toASCII(input) {
			return mapDomain(input, function(string) {
				return regexNonASCII.test(string)
					? 'xn--' + encode(string)
					: string;
			});
		}

		/*--------------------------------------------------------------------------*/

		/** Define the public API */
		punycode = {
			/**
			 * A string representing the current Punycode.js version number.
			 * @memberOf punycode
			 * @type String
			 */
			'version': '1.4.1',
			/**
			 * An object of methods to convert from JavaScript's internal character
			 * representation (UCS-2) to Unicode code points, and back.
			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
			 * @memberOf punycode
			 * @type Object
			 */
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};

		/** Expose `punycode` */
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			typeof define == 'function' &&
			typeof define.amd == 'object' &&
			define.amd
		) {
			define('punycode', function() {
				return punycode;
			});
		} else if (freeExports && freeModule) {
			if (module.exports == freeExports) {
				// in Node.js, io.js, or RingoJS v0.8.0+
				freeModule.exports = punycode;
			} else {
				// in Narwhal or RingoJS v0.7.0-
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else {
			// in Rhino or a web browser
			root.punycode = punycode;
		}

	}(this));

	}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{}],41:[function(require,module,exports){
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};

	var isArray = Array.isArray || function (xs) {
	  return Object.prototype.toString.call(xs) === '[object Array]';
	};

	},{}],42:[function(require,module,exports){
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if (typeof obj === 'object') {
	    return map(objectKeys(obj), function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (isArray(obj[k])) {
	        return map(obj[k], function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);

	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};

	var isArray = Array.isArray || function (xs) {
	  return Object.prototype.toString.call(xs) === '[object Array]';
	};

	function map (xs, f) {
	  if (xs.map) return xs.map(f);
	  var res = [];
	  for (var i = 0; i < xs.length; i++) {
	    res.push(f(xs[i], i));
	  }
	  return res;
	}

	var objectKeys = Object.keys || function (obj) {
	  var res = [];
	  for (var key in obj) {
	    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
	  }
	  return res;
	};

	},{}],43:[function(require,module,exports){
	'use strict';

	exports.decode = exports.parse = require('./decode');
	exports.encode = exports.stringify = require('./encode');

	},{"./decode":41,"./encode":42}],44:[function(require,module,exports){
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var punycode = require('punycode');
	var util = require('./util');

	exports.parse = urlParse;
	exports.resolve = urlResolve;
	exports.resolveObject = urlResolveObject;
	exports.format = urlFormat;

	exports.Url = Url;

	function Url() {
	  this.protocol = null;
	  this.slashes = null;
	  this.auth = null;
	  this.host = null;
	  this.port = null;
	  this.hostname = null;
	  this.hash = null;
	  this.search = null;
	  this.query = null;
	  this.pathname = null;
	  this.path = null;
	  this.href = null;
	}

	// Reference: RFC 3986, RFC 1808, RFC 2396

	// define these here so at least they only have to be
	// compiled once on the first module load.
	var protocolPattern = /^([a-z0-9.+-]+:)/i,
	    portPattern = /:[0-9]*$/,

	    // Special case for a simple path URL
	    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

	    // RFC 2396: characters reserved for delimiting URLs.
	    // We actually just auto-escape these.
	    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

	    // RFC 2396: characters not allowed for various reasons.
	    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

	    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
	    autoEscape = ['\''].concat(unwise),
	    // Characters that are never ever allowed in a hostname.
	    // Note that any invalid chars are also handled, but these
	    // are the ones that are *expected* to be seen, so we fast-path
	    // them.
	    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
	    hostEndingChars = ['/', '?', '#'],
	    hostnameMaxLen = 255,
	    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
	    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
	    // protocols that can allow "unsafe" and "unwise" chars.
	    unsafeProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that never have a hostname.
	    hostlessProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that always contain a // bit.
	    slashedProtocol = {
	      'http': true,
	      'https': true,
	      'ftp': true,
	      'gopher': true,
	      'file': true,
	      'http:': true,
	      'https:': true,
	      'ftp:': true,
	      'gopher:': true,
	      'file:': true
	    },
	    querystring = require('querystring');

	function urlParse(url, parseQueryString, slashesDenoteHost) {
	  if (url && util.isObject(url) && url instanceof Url) return url;

	  var u = new Url;
	  u.parse(url, parseQueryString, slashesDenoteHost);
	  return u;
	}

	Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
	  if (!util.isString(url)) {
	    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
	  }

	  // Copy chrome, IE, opera backslash-handling behavior.
	  // Back slashes before the query string get converted to forward slashes
	  // See: https://code.google.com/p/chromium/issues/detail?id=25916
	  var queryIndex = url.indexOf('?'),
	      splitter =
	          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
	      uSplit = url.split(splitter),
	      slashRegex = /\\/g;
	  uSplit[0] = uSplit[0].replace(slashRegex, '/');
	  url = uSplit.join(splitter);

	  var rest = url;

	  // trim before proceeding.
	  // This is to support parse stuff like "  http://foo.com  \n"
	  rest = rest.trim();

	  if (!slashesDenoteHost && url.split('#').length === 1) {
	    // Try fast path regexp
	    var simplePath = simplePathPattern.exec(rest);
	    if (simplePath) {
	      this.path = rest;
	      this.href = rest;
	      this.pathname = simplePath[1];
	      if (simplePath[2]) {
	        this.search = simplePath[2];
	        if (parseQueryString) {
	          this.query = querystring.parse(this.search.substr(1));
	        } else {
	          this.query = this.search.substr(1);
	        }
	      } else if (parseQueryString) {
	        this.search = '';
	        this.query = {};
	      }
	      return this;
	    }
	  }

	  var proto = protocolPattern.exec(rest);
	  if (proto) {
	    proto = proto[0];
	    var lowerProto = proto.toLowerCase();
	    this.protocol = lowerProto;
	    rest = rest.substr(proto.length);
	  }

	  // figure out if it's got a host
	  // user@server is *always* interpreted as a hostname, and url
	  // resolution will treat //foo/bar as host=foo,path=bar because that's
	  // how the browser resolves relative URLs.
	  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
	    var slashes = rest.substr(0, 2) === '//';
	    if (slashes && !(proto && hostlessProtocol[proto])) {
	      rest = rest.substr(2);
	      this.slashes = true;
	    }
	  }

	  if (!hostlessProtocol[proto] &&
	      (slashes || (proto && !slashedProtocol[proto]))) {

	    // there's a hostname.
	    // the first instance of /, ?, ;, or # ends the host.
	    //
	    // If there is an @ in the hostname, then non-host chars *are* allowed
	    // to the left of the last @ sign, unless some host-ending character
	    // comes *before* the @-sign.
	    // URLs are obnoxious.
	    //
	    // ex:
	    // http://a@b@c/ => user:a@b host:c
	    // http://a@b?@c => user:a host:c path:/?@c

	    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
	    // Review our test case against browsers more comprehensively.

	    // find the first instance of any hostEndingChars
	    var hostEnd = -1;
	    for (var i = 0; i < hostEndingChars.length; i++) {
	      var hec = rest.indexOf(hostEndingChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }

	    // at this point, either we have an explicit point where the
	    // auth portion cannot go past, or the last @ char is the decider.
	    var auth, atSign;
	    if (hostEnd === -1) {
	      // atSign can be anywhere.
	      atSign = rest.lastIndexOf('@');
	    } else {
	      // atSign must be in auth portion.
	      // http://a@b/c@d => host:b auth:a path:/c@d
	      atSign = rest.lastIndexOf('@', hostEnd);
	    }

	    // Now we have a portion which is definitely the auth.
	    // Pull that off.
	    if (atSign !== -1) {
	      auth = rest.slice(0, atSign);
	      rest = rest.slice(atSign + 1);
	      this.auth = decodeURIComponent(auth);
	    }

	    // the host is the remaining to the left of the first non-host char
	    hostEnd = -1;
	    for (var i = 0; i < nonHostChars.length; i++) {
	      var hec = rest.indexOf(nonHostChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }
	    // if we still have not hit it, then the entire thing is a host.
	    if (hostEnd === -1)
	      hostEnd = rest.length;

	    this.host = rest.slice(0, hostEnd);
	    rest = rest.slice(hostEnd);

	    // pull out port.
	    this.parseHost();

	    // we've indicated that there is a hostname,
	    // so even if it's empty, it has to be present.
	    this.hostname = this.hostname || '';

	    // if hostname begins with [ and ends with ]
	    // assume that it's an IPv6 address.
	    var ipv6Hostname = this.hostname[0] === '[' &&
	        this.hostname[this.hostname.length - 1] === ']';

	    // validate a little.
	    if (!ipv6Hostname) {
	      var hostparts = this.hostname.split(/\./);
	      for (var i = 0, l = hostparts.length; i < l; i++) {
	        var part = hostparts[i];
	        if (!part) continue;
	        if (!part.match(hostnamePartPattern)) {
	          var newpart = '';
	          for (var j = 0, k = part.length; j < k; j++) {
	            if (part.charCodeAt(j) > 127) {
	              // we replace non-ASCII char with a temporary placeholder
	              // we need this to make sure size of hostname is not
	              // broken by replacing non-ASCII by nothing
	              newpart += 'x';
	            } else {
	              newpart += part[j];
	            }
	          }
	          // we test again with ASCII char only
	          if (!newpart.match(hostnamePartPattern)) {
	            var validParts = hostparts.slice(0, i);
	            var notHost = hostparts.slice(i + 1);
	            var bit = part.match(hostnamePartStart);
	            if (bit) {
	              validParts.push(bit[1]);
	              notHost.unshift(bit[2]);
	            }
	            if (notHost.length) {
	              rest = '/' + notHost.join('.') + rest;
	            }
	            this.hostname = validParts.join('.');
	            break;
	          }
	        }
	      }
	    }

	    if (this.hostname.length > hostnameMaxLen) {
	      this.hostname = '';
	    } else {
	      // hostnames are always lower case.
	      this.hostname = this.hostname.toLowerCase();
	    }

	    if (!ipv6Hostname) {
	      // IDNA Support: Returns a punycoded representation of "domain".
	      // It only converts parts of the domain name that
	      // have non-ASCII characters, i.e. it doesn't matter if
	      // you call it with a domain that already is ASCII-only.
	      this.hostname = punycode.toASCII(this.hostname);
	    }

	    var p = this.port ? ':' + this.port : '';
	    var h = this.hostname || '';
	    this.host = h + p;
	    this.href += this.host;

	    // strip [ and ] from the hostname
	    // the host field still retains them, though
	    if (ipv6Hostname) {
	      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
	      if (rest[0] !== '/') {
	        rest = '/' + rest;
	      }
	    }
	  }

	  // now rest is set to the post-host stuff.
	  // chop off any delim chars.
	  if (!unsafeProtocol[lowerProto]) {

	    // First, make 100% sure that any "autoEscape" chars get
	    // escaped, even if encodeURIComponent doesn't think they
	    // need to be.
	    for (var i = 0, l = autoEscape.length; i < l; i++) {
	      var ae = autoEscape[i];
	      if (rest.indexOf(ae) === -1)
	        continue;
	      var esc = encodeURIComponent(ae);
	      if (esc === ae) {
	        esc = escape(ae);
	      }
	      rest = rest.split(ae).join(esc);
	    }
	  }


	  // chop off from the tail first.
	  var hash = rest.indexOf('#');
	  if (hash !== -1) {
	    // got a fragment string.
	    this.hash = rest.substr(hash);
	    rest = rest.slice(0, hash);
	  }
	  var qm = rest.indexOf('?');
	  if (qm !== -1) {
	    this.search = rest.substr(qm);
	    this.query = rest.substr(qm + 1);
	    if (parseQueryString) {
	      this.query = querystring.parse(this.query);
	    }
	    rest = rest.slice(0, qm);
	  } else if (parseQueryString) {
	    // no query string, but parseQueryString still requested
	    this.search = '';
	    this.query = {};
	  }
	  if (rest) this.pathname = rest;
	  if (slashedProtocol[lowerProto] &&
	      this.hostname && !this.pathname) {
	    this.pathname = '/';
	  }

	  //to support http.request
	  if (this.pathname || this.search) {
	    var p = this.pathname || '';
	    var s = this.search || '';
	    this.path = p + s;
	  }

	  // finally, reconstruct the href based on what has been validated.
	  this.href = this.format();
	  return this;
	};

	// format a parsed object into a url string
	function urlFormat(obj) {
	  // ensure it's an object, and not a string url.
	  // If it's an obj, this is a no-op.
	  // this way, you can call url_format() on strings
	  // to clean up potentially wonky urls.
	  if (util.isString(obj)) obj = urlParse(obj);
	  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
	  return obj.format();
	}

	Url.prototype.format = function() {
	  var auth = this.auth || '';
	  if (auth) {
	    auth = encodeURIComponent(auth);
	    auth = auth.replace(/%3A/i, ':');
	    auth += '@';
	  }

	  var protocol = this.protocol || '',
	      pathname = this.pathname || '',
	      hash = this.hash || '',
	      host = false,
	      query = '';

	  if (this.host) {
	    host = auth + this.host;
	  } else if (this.hostname) {
	    host = auth + (this.hostname.indexOf(':') === -1 ?
	        this.hostname :
	        '[' + this.hostname + ']');
	    if (this.port) {
	      host += ':' + this.port;
	    }
	  }

	  if (this.query &&
	      util.isObject(this.query) &&
	      Object.keys(this.query).length) {
	    query = querystring.stringify(this.query);
	  }

	  var search = this.search || (query && ('?' + query)) || '';

	  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

	  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
	  // unless they had them to begin with.
	  if (this.slashes ||
	      (!protocol || slashedProtocol[protocol]) && host !== false) {
	    host = '//' + (host || '');
	    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
	  } else if (!host) {
	    host = '';
	  }

	  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
	  if (search && search.charAt(0) !== '?') search = '?' + search;

	  pathname = pathname.replace(/[?#]/g, function(match) {
	    return encodeURIComponent(match);
	  });
	  search = search.replace('#', '%23');

	  return protocol + host + pathname + search + hash;
	};

	function urlResolve(source, relative) {
	  return urlParse(source, false, true).resolve(relative);
	}

	Url.prototype.resolve = function(relative) {
	  return this.resolveObject(urlParse(relative, false, true)).format();
	};

	function urlResolveObject(source, relative) {
	  if (!source) return relative;
	  return urlParse(source, false, true).resolveObject(relative);
	}

	Url.prototype.resolveObject = function(relative) {
	  if (util.isString(relative)) {
	    var rel = new Url();
	    rel.parse(relative, false, true);
	    relative = rel;
	  }

	  var result = new Url();
	  var tkeys = Object.keys(this);
	  for (var tk = 0; tk < tkeys.length; tk++) {
	    var tkey = tkeys[tk];
	    result[tkey] = this[tkey];
	  }

	  // hash is always overridden, no matter what.
	  // even href="" will remove it.
	  result.hash = relative.hash;

	  // if the relative url is empty, then there's nothing left to do here.
	  if (relative.href === '') {
	    result.href = result.format();
	    return result;
	  }

	  // hrefs like //foo/bar always cut to the protocol.
	  if (relative.slashes && !relative.protocol) {
	    // take everything except the protocol from relative
	    var rkeys = Object.keys(relative);
	    for (var rk = 0; rk < rkeys.length; rk++) {
	      var rkey = rkeys[rk];
	      if (rkey !== 'protocol')
	        result[rkey] = relative[rkey];
	    }

	    //urlParse appends trailing / to urls like http://www.example.com
	    if (slashedProtocol[result.protocol] &&
	        result.hostname && !result.pathname) {
	      result.path = result.pathname = '/';
	    }

	    result.href = result.format();
	    return result;
	  }

	  if (relative.protocol && relative.protocol !== result.protocol) {
	    // if it's a known url protocol, then changing
	    // the protocol does weird things
	    // first, if it's not file:, then we MUST have a host,
	    // and if there was a path
	    // to begin with, then we MUST have a path.
	    // if it is file:, then the host is dropped,
	    // because that's known to be hostless.
	    // anything else is assumed to be absolute.
	    if (!slashedProtocol[relative.protocol]) {
	      var keys = Object.keys(relative);
	      for (var v = 0; v < keys.length; v++) {
	        var k = keys[v];
	        result[k] = relative[k];
	      }
	      result.href = result.format();
	      return result;
	    }

	    result.protocol = relative.protocol;
	    if (!relative.host && !hostlessProtocol[relative.protocol]) {
	      var relPath = (relative.pathname || '').split('/');
	      while (relPath.length && !(relative.host = relPath.shift()));
	      if (!relative.host) relative.host = '';
	      if (!relative.hostname) relative.hostname = '';
	      if (relPath[0] !== '') relPath.unshift('');
	      if (relPath.length < 2) relPath.unshift('');
	      result.pathname = relPath.join('/');
	    } else {
	      result.pathname = relative.pathname;
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    result.host = relative.host || '';
	    result.auth = relative.auth;
	    result.hostname = relative.hostname || relative.host;
	    result.port = relative.port;
	    // to support http.request
	    if (result.pathname || result.search) {
	      var p = result.pathname || '';
	      var s = result.search || '';
	      result.path = p + s;
	    }
	    result.slashes = result.slashes || relative.slashes;
	    result.href = result.format();
	    return result;
	  }

	  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
	      isRelAbs = (
	          relative.host ||
	          relative.pathname && relative.pathname.charAt(0) === '/'
	      ),
	      mustEndAbs = (isRelAbs || isSourceAbs ||
	                    (result.host && relative.pathname)),
	      removeAllDots = mustEndAbs,
	      srcPath = result.pathname && result.pathname.split('/') || [],
	      relPath = relative.pathname && relative.pathname.split('/') || [],
	      psychotic = result.protocol && !slashedProtocol[result.protocol];

	  // if the url is a non-slashed url, then relative
	  // links like ../.. should be able
	  // to crawl up to the hostname, as well.  This is strange.
	  // result.protocol has already been set by now.
	  // Later on, put the first path part into the host field.
	  if (psychotic) {
	    result.hostname = '';
	    result.port = null;
	    if (result.host) {
	      if (srcPath[0] === '') srcPath[0] = result.host;
	      else srcPath.unshift(result.host);
	    }
	    result.host = '';
	    if (relative.protocol) {
	      relative.hostname = null;
	      relative.port = null;
	      if (relative.host) {
	        if (relPath[0] === '') relPath[0] = relative.host;
	        else relPath.unshift(relative.host);
	      }
	      relative.host = null;
	    }
	    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
	  }

	  if (isRelAbs) {
	    // it's absolute.
	    result.host = (relative.host || relative.host === '') ?
	                  relative.host : result.host;
	    result.hostname = (relative.hostname || relative.hostname === '') ?
	                      relative.hostname : result.hostname;
	    result.search = relative.search;
	    result.query = relative.query;
	    srcPath = relPath;
	    // fall through to the dot-handling below.
	  } else if (relPath.length) {
	    // it's relative
	    // throw away the existing file, and take the new path instead.
	    if (!srcPath) srcPath = [];
	    srcPath.pop();
	    srcPath = srcPath.concat(relPath);
	    result.search = relative.search;
	    result.query = relative.query;
	  } else if (!util.isNullOrUndefined(relative.search)) {
	    // just pull out the search.
	    // like href='?foo'.
	    // Put this after the other two cases because it simplifies the booleans
	    if (psychotic) {
	      result.hostname = result.host = srcPath.shift();
	      //occationaly the auth can get stuck only in host
	      //this especially happens in cases like
	      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	      var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                       result.host.split('@') : false;
	      if (authInHost) {
	        result.auth = authInHost.shift();
	        result.host = result.hostname = authInHost.shift();
	      }
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    //to support http.request
	    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
	      result.path = (result.pathname ? result.pathname : '') +
	                    (result.search ? result.search : '');
	    }
	    result.href = result.format();
	    return result;
	  }

	  if (!srcPath.length) {
	    // no path at all.  easy.
	    // we've already handled the other stuff above.
	    result.pathname = null;
	    //to support http.request
	    if (result.search) {
	      result.path = '/' + result.search;
	    } else {
	      result.path = null;
	    }
	    result.href = result.format();
	    return result;
	  }

	  // if a url ENDs in . or .., then it must get a trailing slash.
	  // however, if it ends in anything else non-slashy,
	  // then it must NOT get a trailing slash.
	  var last = srcPath.slice(-1)[0];
	  var hasTrailingSlash = (
	      (result.host || relative.host || srcPath.length > 1) &&
	      (last === '.' || last === '..') || last === '');

	  // strip single dots, resolve double dots to parent dir
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = srcPath.length; i >= 0; i--) {
	    last = srcPath[i];
	    if (last === '.') {
	      srcPath.splice(i, 1);
	    } else if (last === '..') {
	      srcPath.splice(i, 1);
	      up++;
	    } else if (up) {
	      srcPath.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (!mustEndAbs && !removeAllDots) {
	    for (; up--; up) {
	      srcPath.unshift('..');
	    }
	  }

	  if (mustEndAbs && srcPath[0] !== '' &&
	      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
	    srcPath.unshift('');
	  }

	  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
	    srcPath.push('');
	  }

	  var isAbsolute = srcPath[0] === '' ||
	      (srcPath[0] && srcPath[0].charAt(0) === '/');

	  // put the host back
	  if (psychotic) {
	    result.hostname = result.host = isAbsolute ? '' :
	                                    srcPath.length ? srcPath.shift() : '';
	    //occationaly the auth can get stuck only in host
	    //this especially happens in cases like
	    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	    var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                     result.host.split('@') : false;
	    if (authInHost) {
	      result.auth = authInHost.shift();
	      result.host = result.hostname = authInHost.shift();
	    }
	  }

	  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

	  if (mustEndAbs && !isAbsolute) {
	    srcPath.unshift('');
	  }

	  if (!srcPath.length) {
	    result.pathname = null;
	    result.path = null;
	  } else {
	    result.pathname = srcPath.join('/');
	  }

	  //to support request.http
	  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
	    result.path = (result.pathname ? result.pathname : '') +
	                  (result.search ? result.search : '');
	  }
	  result.auth = relative.auth || result.auth;
	  result.slashes = result.slashes || relative.slashes;
	  result.href = result.format();
	  return result;
	};

	Url.prototype.parseHost = function() {
	  var host = this.host;
	  var port = portPattern.exec(host);
	  if (port) {
	    port = port[0];
	    if (port !== ':') {
	      this.port = port.substr(1);
	    }
	    host = host.substr(0, host.length - port.length);
	  }
	  if (host) this.hostname = host;
	};

	},{"./util":45,"punycode":40,"querystring":43}],45:[function(require,module,exports){
	'use strict';

	module.exports = {
	  isString: function(arg) {
	    return typeof(arg) === 'string';
	  },
	  isObject: function(arg) {
	    return typeof(arg) === 'object' && arg !== null;
	  },
	  isNull: function(arg) {
	    return arg === null;
	  },
	  isNullOrUndefined: function(arg) {
	    return arg == null;
	  }
	};

	},{}],46:[function(require,module,exports){

	/**
	 * slice() reference.
	 */

	var slice = Array.prototype.slice;

	/**
	 * Expose `co`.
	 */

	module.exports = co['default'] = co.co = co;

	/**
	 * Wrap the given generator `fn` into a
	 * function that returns a promise.
	 * This is a separate function so that
	 * every `co()` call doesn't create a new,
	 * unnecessary closure.
	 *
	 * @param {GeneratorFunction} fn
	 * @return {Function}
	 * @api public
	 */

	co.wrap = function (fn) {
	  createPromise.__generatorFunction__ = fn;
	  return createPromise;
	  function createPromise() {
	    return co.call(this, fn.apply(this, arguments));
	  }
	};

	/**
	 * Execute the generator function or a generator
	 * and return a promise.
	 *
	 * @param {Function} fn
	 * @return {Promise}
	 * @api public
	 */

	function co(gen) {
	  var ctx = this;
	  var args = slice.call(arguments, 1)

	  // we wrap everything in a promise to avoid promise chaining,
	  // which leads to memory leak errors.
	  // see https://github.com/tj/co/issues/180
	  return new Promise(function(resolve, reject) {
	    if (typeof gen === 'function') gen = gen.apply(ctx, args);
	    if (!gen || typeof gen.next !== 'function') return resolve(gen);

	    onFulfilled();

	    /**
	     * @param {Mixed} res
	     * @return {Promise}
	     * @api private
	     */

	    function onFulfilled(res) {
	      var ret;
	      try {
	        ret = gen.next(res);
	      } catch (e) {
	        return reject(e);
	      }
	      next(ret);
	    }

	    /**
	     * @param {Error} err
	     * @return {Promise}
	     * @api private
	     */

	    function onRejected(err) {
	      var ret;
	      try {
	        ret = gen.throw(err);
	      } catch (e) {
	        return reject(e);
	      }
	      next(ret);
	    }

	    /**
	     * Get the next value in the generator,
	     * return a promise.
	     *
	     * @param {Object} ret
	     * @return {Promise}
	     * @api private
	     */

	    function next(ret) {
	      if (ret.done) return resolve(ret.value);
	      var value = toPromise.call(ctx, ret.value);
	      if (value && isPromise(value)) return value.then(onFulfilled, onRejected);
	      return onRejected(new TypeError('You may only yield a function, promise, generator, array, or object, '
	        + 'but the following object was passed: "' + String(ret.value) + '"'));
	    }
	  });
	}

	/**
	 * Convert a `yield`ed value into a promise.
	 *
	 * @param {Mixed} obj
	 * @return {Promise}
	 * @api private
	 */

	function toPromise(obj) {
	  if (!obj) return obj;
	  if (isPromise(obj)) return obj;
	  if (isGeneratorFunction(obj) || isGenerator(obj)) return co.call(this, obj);
	  if ('function' == typeof obj) return thunkToPromise.call(this, obj);
	  if (Array.isArray(obj)) return arrayToPromise.call(this, obj);
	  if (isObject(obj)) return objectToPromise.call(this, obj);
	  return obj;
	}

	/**
	 * Convert a thunk to a promise.
	 *
	 * @param {Function}
	 * @return {Promise}
	 * @api private
	 */

	function thunkToPromise(fn) {
	  var ctx = this;
	  return new Promise(function (resolve, reject) {
	    fn.call(ctx, function (err, res) {
	      if (err) return reject(err);
	      if (arguments.length > 2) res = slice.call(arguments, 1);
	      resolve(res);
	    });
	  });
	}

	/**
	 * Convert an array of "yieldables" to a promise.
	 * Uses `Promise.all()` internally.
	 *
	 * @param {Array} obj
	 * @return {Promise}
	 * @api private
	 */

	function arrayToPromise(obj) {
	  return Promise.all(obj.map(toPromise, this));
	}

	/**
	 * Convert an object of "yieldables" to a promise.
	 * Uses `Promise.all()` internally.
	 *
	 * @param {Object} obj
	 * @return {Promise}
	 * @api private
	 */

	function objectToPromise(obj){
	  var results = new obj.constructor();
	  var keys = Object.keys(obj);
	  var promises = [];
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var promise = toPromise.call(this, obj[key]);
	    if (promise && isPromise(promise)) defer(promise, key);
	    else results[key] = obj[key];
	  }
	  return Promise.all(promises).then(function () {
	    return results;
	  });

	  function defer(promise, key) {
	    // predefine the key in the result
	    results[key] = undefined;
	    promises.push(promise.then(function (res) {
	      results[key] = res;
	    }));
	  }
	}

	/**
	 * Check if `obj` is a promise.
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */

	function isPromise(obj) {
	  return 'function' == typeof obj.then;
	}

	/**
	 * Check if `obj` is a generator.
	 *
	 * @param {Mixed} obj
	 * @return {Boolean}
	 * @api private
	 */

	function isGenerator(obj) {
	  return 'function' == typeof obj.next && 'function' == typeof obj.throw;
	}

	/**
	 * Check if `obj` is a generator function.
	 *
	 * @param {Mixed} obj
	 * @return {Boolean}
	 * @api private
	 */
	function isGeneratorFunction(obj) {
	  var constructor = obj.constructor;
	  if (!constructor) return false;
	  if ('GeneratorFunction' === constructor.name || 'GeneratorFunction' === constructor.displayName) return true;
	  return isGenerator(constructor.prototype);
	}

	/**
	 * Check for plain object.
	 *
	 * @param {Mixed} val
	 * @return {Boolean}
	 * @api private
	 */

	function isObject(val) {
	  return Object == val.constructor;
	}

	},{}],47:[function(require,module,exports){
	var json = typeof JSON !== 'undefined' ? JSON : require('jsonify');

	module.exports = function (obj, opts) {
	    if (!opts) opts = {};
	    if (typeof opts === 'function') opts = { cmp: opts };
	    var space = opts.space || '';
	    if (typeof space === 'number') space = Array(space+1).join(' ');
	    var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;
	    var replacer = opts.replacer || function(key, value) { return value; };

	    var cmp = opts.cmp && (function (f) {
	        return function (node) {
	            return function (a, b) {
	                var aobj = { key: a, value: node[a] };
	                var bobj = { key: b, value: node[b] };
	                return f(aobj, bobj);
	            };
	        };
	    })(opts.cmp);

	    var seen = [];
	    return (function stringify (parent, key, node, level) {
	        var indent = space ? ('\n' + new Array(level + 1).join(space)) : '';
	        var colonSeparator = space ? ': ' : ':';

	        if (node && node.toJSON && typeof node.toJSON === 'function') {
	            node = node.toJSON();
	        }

	        node = replacer.call(parent, key, node);

	        if (node === undefined) {
	            return;
	        }
	        if (typeof node !== 'object' || node === null) {
	            return json.stringify(node);
	        }
	        if (isArray(node)) {
	            var out = [];
	            for (var i = 0; i < node.length; i++) {
	                var item = stringify(node, i, node[i], level+1) || json.stringify(null);
	                out.push(indent + space + item);
	            }
	            return '[' + out.join(',') + indent + ']';
	        }
	        else {
	            if (seen.indexOf(node) !== -1) {
	                if (cycles) return json.stringify('__cycle__');
	                throw new TypeError('Converting circular structure to JSON');
	            }
	            else seen.push(node);

	            var keys = objectKeys(node).sort(cmp && cmp(node));
	            var out = [];
	            for (var i = 0; i < keys.length; i++) {
	                var key = keys[i];
	                var value = stringify(node, key, node[key], level+1);

	                if(!value) continue;

	                var keyValue = json.stringify(key)
	                    + colonSeparator
	                    + value;
	                ;
	                out.push(indent + space + keyValue);
	            }
	            seen.splice(seen.indexOf(node), 1);
	            return '{' + out.join(',') + indent + '}';
	        }
	    })({ '': obj }, '', obj, 0);
	};

	var isArray = Array.isArray || function (x) {
	    return {}.toString.call(x) === '[object Array]';
	};

	var objectKeys = Object.keys || function (obj) {
	    var has = Object.prototype.hasOwnProperty || function () { return true };
	    var keys = [];
	    for (var key in obj) {
	        if (has.call(obj, key)) keys.push(key);
	    }
	    return keys;
	};

	},{"jsonify":48}],48:[function(require,module,exports){
	exports.parse = require('./lib/parse');
	exports.stringify = require('./lib/stringify');

	},{"./lib/parse":49,"./lib/stringify":50}],49:[function(require,module,exports){
	var at, // The index of the current character
	    ch, // The current character
	    escapee = {
	        '"':  '"',
	        '\\': '\\',
	        '/':  '/',
	        b:    '\b',
	        f:    '\f',
	        n:    '\n',
	        r:    '\r',
	        t:    '\t'
	    },
	    text,

	    error = function (m) {
	        // Call error when something is wrong.
	        throw {
	            name:    'SyntaxError',
	            message: m,
	            at:      at,
	            text:    text
	        };
	    },
	    
	    next = function (c) {
	        // If a c parameter is provided, verify that it matches the current character.
	        if (c && c !== ch) {
	            error("Expected '" + c + "' instead of '" + ch + "'");
	        }
	        
	        // Get the next character. When there are no more characters,
	        // return the empty string.
	        
	        ch = text.charAt(at);
	        at += 1;
	        return ch;
	    },
	    
	    number = function () {
	        // Parse a number value.
	        var number,
	            string = '';
	        
	        if (ch === '-') {
	            string = '-';
	            next('-');
	        }
	        while (ch >= '0' && ch <= '9') {
	            string += ch;
	            next();
	        }
	        if (ch === '.') {
	            string += '.';
	            while (next() && ch >= '0' && ch <= '9') {
	                string += ch;
	            }
	        }
	        if (ch === 'e' || ch === 'E') {
	            string += ch;
	            next();
	            if (ch === '-' || ch === '+') {
	                string += ch;
	                next();
	            }
	            while (ch >= '0' && ch <= '9') {
	                string += ch;
	                next();
	            }
	        }
	        number = +string;
	        if (!isFinite(number)) {
	            error("Bad number");
	        } else {
	            return number;
	        }
	    },
	    
	    string = function () {
	        // Parse a string value.
	        var hex,
	            i,
	            string = '',
	            uffff;
	        
	        // When parsing for string values, we must look for " and \ characters.
	        if (ch === '"') {
	            while (next()) {
	                if (ch === '"') {
	                    next();
	                    return string;
	                } else if (ch === '\\') {
	                    next();
	                    if (ch === 'u') {
	                        uffff = 0;
	                        for (i = 0; i < 4; i += 1) {
	                            hex = parseInt(next(), 16);
	                            if (!isFinite(hex)) {
	                                break;
	                            }
	                            uffff = uffff * 16 + hex;
	                        }
	                        string += String.fromCharCode(uffff);
	                    } else if (typeof escapee[ch] === 'string') {
	                        string += escapee[ch];
	                    } else {
	                        break;
	                    }
	                } else {
	                    string += ch;
	                }
	            }
	        }
	        error("Bad string");
	    },

	    white = function () {

	// Skip whitespace.

	        while (ch && ch <= ' ') {
	            next();
	        }
	    },

	    word = function () {

	// true, false, or null.

	        switch (ch) {
	        case 't':
	            next('t');
	            next('r');
	            next('u');
	            next('e');
	            return true;
	        case 'f':
	            next('f');
	            next('a');
	            next('l');
	            next('s');
	            next('e');
	            return false;
	        case 'n':
	            next('n');
	            next('u');
	            next('l');
	            next('l');
	            return null;
	        }
	        error("Unexpected '" + ch + "'");
	    },

	    value,  // Place holder for the value function.

	    array = function () {

	// Parse an array value.

	        var array = [];

	        if (ch === '[') {
	            next('[');
	            white();
	            if (ch === ']') {
	                next(']');
	                return array;   // empty array
	            }
	            while (ch) {
	                array.push(value());
	                white();
	                if (ch === ']') {
	                    next(']');
	                    return array;
	                }
	                next(',');
	                white();
	            }
	        }
	        error("Bad array");
	    },

	    object = function () {

	// Parse an object value.

	        var key,
	            object = {};

	        if (ch === '{') {
	            next('{');
	            white();
	            if (ch === '}') {
	                next('}');
	                return object;   // empty object
	            }
	            while (ch) {
	                key = string();
	                white();
	                next(':');
	                if (Object.hasOwnProperty.call(object, key)) {
	                    error('Duplicate key "' + key + '"');
	                }
	                object[key] = value();
	                white();
	                if (ch === '}') {
	                    next('}');
	                    return object;
	                }
	                next(',');
	                white();
	            }
	        }
	        error("Bad object");
	    };

	value = function () {

	// Parse a JSON value. It could be an object, an array, a string, a number,
	// or a word.

	    white();
	    switch (ch) {
	    case '{':
	        return object();
	    case '[':
	        return array();
	    case '"':
	        return string();
	    case '-':
	        return number();
	    default:
	        return ch >= '0' && ch <= '9' ? number() : word();
	    }
	};

	// Return the json_parse function. It will have access to all of the above
	// functions and variables.

	module.exports = function (source, reviver) {
	    var result;
	    
	    text = source;
	    at = 0;
	    ch = ' ';
	    result = value();
	    white();
	    if (ch) {
	        error("Syntax error");
	    }

	    // If there is a reviver function, we recursively walk the new structure,
	    // passing each name/value pair to the reviver function for possible
	    // transformation, starting with a temporary root object that holds the result
	    // in an empty key. If there is not a reviver function, we simply return the
	    // result.

	    return typeof reviver === 'function' ? (function walk(holder, key) {
	        var k, v, value = holder[key];
	        if (value && typeof value === 'object') {
	            for (k in value) {
	                if (Object.prototype.hasOwnProperty.call(value, k)) {
	                    v = walk(value, k);
	                    if (v !== undefined) {
	                        value[k] = v;
	                    } else {
	                        delete value[k];
	                    }
	                }
	            }
	        }
	        return reviver.call(holder, key, value);
	    }({'': result}, '')) : result;
	};

	},{}],50:[function(require,module,exports){
	var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
	    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
	    gap,
	    indent,
	    meta = {    // table of character substitutions
	        '\b': '\\b',
	        '\t': '\\t',
	        '\n': '\\n',
	        '\f': '\\f',
	        '\r': '\\r',
	        '"' : '\\"',
	        '\\': '\\\\'
	    },
	    rep;

	function quote(string) {
	    // If the string contains no control characters, no quote characters, and no
	    // backslash characters, then we can safely slap some quotes around it.
	    // Otherwise we must also replace the offending characters with safe escape
	    // sequences.
	    
	    escapable.lastIndex = 0;
	    return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
	        var c = meta[a];
	        return typeof c === 'string' ? c :
	            '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
	    }) + '"' : '"' + string + '"';
	}

	function str(key, holder) {
	    // Produce a string from holder[key].
	    var i,          // The loop counter.
	        k,          // The member key.
	        v,          // The member value.
	        length,
	        mind = gap,
	        partial,
	        value = holder[key];
	    
	    // If the value has a toJSON method, call it to obtain a replacement value.
	    if (value && typeof value === 'object' &&
	            typeof value.toJSON === 'function') {
	        value = value.toJSON(key);
	    }
	    
	    // If we were called with a replacer function, then call the replacer to
	    // obtain a replacement value.
	    if (typeof rep === 'function') {
	        value = rep.call(holder, key, value);
	    }
	    
	    // What happens next depends on the value's type.
	    switch (typeof value) {
	        case 'string':
	            return quote(value);
	        
	        case 'number':
	            // JSON numbers must be finite. Encode non-finite numbers as null.
	            return isFinite(value) ? String(value) : 'null';
	        
	        case 'boolean':
	        case 'null':
	            // If the value is a boolean or null, convert it to a string. Note:
	            // typeof null does not produce 'null'. The case is included here in
	            // the remote chance that this gets fixed someday.
	            return String(value);
	            
	        case 'object':
	            if (!value) return 'null';
	            gap += indent;
	            partial = [];
	            
	            // Array.isArray
	            if (Object.prototype.toString.apply(value) === '[object Array]') {
	                length = value.length;
	                for (i = 0; i < length; i += 1) {
	                    partial[i] = str(i, value) || 'null';
	                }
	                
	                // Join all of the elements together, separated with commas, and
	                // wrap them in brackets.
	                v = partial.length === 0 ? '[]' : gap ?
	                    '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
	                    '[' + partial.join(',') + ']';
	                gap = mind;
	                return v;
	            }
	            
	            // If the replacer is an array, use it to select the members to be
	            // stringified.
	            if (rep && typeof rep === 'object') {
	                length = rep.length;
	                for (i = 0; i < length; i += 1) {
	                    k = rep[i];
	                    if (typeof k === 'string') {
	                        v = str(k, value);
	                        if (v) {
	                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
	                        }
	                    }
	                }
	            }
	            else {
	                // Otherwise, iterate through all of the keys in the object.
	                for (k in value) {
	                    if (Object.prototype.hasOwnProperty.call(value, k)) {
	                        v = str(k, value);
	                        if (v) {
	                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
	                        }
	                    }
	                }
	            }
	            
	        // Join all of the member texts together, separated with commas,
	        // and wrap them in braces.

	        v = partial.length === 0 ? '{}' : gap ?
	            '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
	            '{' + partial.join(',') + '}';
	        gap = mind;
	        return v;
	    }
	}

	module.exports = function (value, replacer, space) {
	    var i;
	    gap = '';
	    indent = '';
	    
	    // If the space parameter is a number, make an indent string containing that
	    // many spaces.
	    if (typeof space === 'number') {
	        for (i = 0; i < space; i += 1) {
	            indent += ' ';
	        }
	    }
	    // If the space parameter is a string, it will be used as the indent string.
	    else if (typeof space === 'string') {
	        indent = space;
	    }

	    // If there is a replacer, it must be a function or an array.
	    // Otherwise, throw an error.
	    rep = replacer;
	    if (replacer && typeof replacer !== 'function'
	    && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
	        throw new Error('JSON.stringify');
	    }
	    
	    // Make a fake root object containing our value under the key of ''.
	    // Return the result of stringifying the value.
	    return str('', {'': value});
	};

	},{}],"ajv":[function(require,module,exports){
	'use strict';

	var compileSchema = require('./compile')
	  , resolve = require('./compile/resolve')
	  , Cache = require('./cache')
	  , SchemaObject = require('./compile/schema_obj')
	  , stableStringify = require('json-stable-stringify')
	  , formats = require('./compile/formats')
	  , rules = require('./compile/rules')
	  , v5 = require('./v5')
	  , util = require('./compile/util')
	  , async = require('./async')
	  , co = require('co');

	module.exports = Ajv;

	Ajv.prototype.compileAsync = async.compile;
	Ajv.prototype.addKeyword = require('./keyword');
	Ajv.ValidationError = require('./compile/validation_error');

	var META_SCHEMA_ID = 'http://json-schema.org/draft-04/schema';
	var SCHEMA_URI_FORMAT = /^(?:(?:[a-z][a-z0-9+-.]*:)?\/\/)?[^\s]*$/i;
	function SCHEMA_URI_FORMAT_FUNC(str) {
	  return SCHEMA_URI_FORMAT.test(str);
	}

	var META_IGNORE_OPTIONS = [ 'removeAdditional', 'useDefaults', 'coerceTypes' ];

	/**
	 * Creates validator instance.
	 * Usage: `Ajv(opts)`
	 * @param {Object} opts optional options
	 * @return {Object} ajv instance
	 */
	function Ajv(opts) {
	  if (!(this instanceof Ajv)) return new Ajv(opts);
	  var self = this;

	  opts = this._opts = util.copy(opts) || {};
	  this._schemas = {};
	  this._refs = {};
	  this._fragments = {};
	  this._formats = formats(opts.format);
	  this._cache = opts.cache || new Cache;
	  this._loadingSchemas = {};
	  this._compilations = [];
	  this.RULES = rules();

	  // this is done on purpose, so that methods are bound to the instance
	  // (without using bind) so that they can be used without the instance
	  this.validate = validate;
	  this.compile = compile;
	  this.addSchema = addSchema;
	  this.addMetaSchema = addMetaSchema;
	  this.validateSchema = validateSchema;
	  this.getSchema = getSchema;
	  this.removeSchema = removeSchema;
	  this.addFormat = addFormat;
	  this.errorsText = errorsText;

	  this._addSchema = _addSchema;
	  this._compile = _compile;

	  opts.loopRequired = opts.loopRequired || Infinity;
	  if (opts.async || opts.transpile) async.setup(opts);
	  if (opts.beautify === true) opts.beautify = { indent_size: 2 };
	  if (opts.errorDataPath == 'property') opts._errorDataPathProperty = true;
	  if (opts.extendRefs === undefined) opts.extendRefs = true;
	  this._metaOpts = getMetaSchemaOptions();

	  if (opts.formats) addInitialFormats();
	  addDraft4MetaSchema();
	  if (opts.v5) v5.enable(this);
	  if (typeof opts.meta == 'object') addMetaSchema(opts.meta);
	  addInitialSchemas();


	  /**
	   * Validate data using schema
	   * Schema will be compiled and cached (using serialized JSON as key. [json-stable-stringify](https://github.com/substack/json-stable-stringify) is used to serialize.
	   * @param  {String|Object} schemaKeyRef key, ref or schema object
	   * @param  {Any} data to be validated
	   * @return {Boolean} validation result. Errors from the last validation will be available in `ajv.errors` (and also in compiled schema: `schema.errors`).
	   */
	  function validate(schemaKeyRef, data) {
	    var v;
	    if (typeof schemaKeyRef == 'string') {
	      v = getSchema(schemaKeyRef);
	      if (!v) throw new Error('no schema with key or ref "' + schemaKeyRef + '"');
	    } else {
	      var schemaObj = _addSchema(schemaKeyRef);
	      v = schemaObj.validate || _compile(schemaObj);
	    }

	    var valid = v(data);
	    if (v.$async === true)
	      return self._opts.async == '*' ? co(valid) : valid;
	    self.errors = v.errors;
	    return valid;
	  }


	  /**
	   * Create validating function for passed schema.
	   * @param  {Object} schema schema object
	   * @param  {Boolean} _meta true if schema is a meta-schema. Used internally to compile meta schemas of custom keywords.
	   * @return {Function} validating function
	   */
	  function compile(schema, _meta) {
	    var schemaObj = _addSchema(schema, undefined, _meta);
	    return schemaObj.validate || _compile(schemaObj);
	  }


	  /**
	   * Adds schema to the instance.
	   * @param {Object|Array} schema schema or array of schemas. If array is passed, `key` and other parameters will be ignored.
	   * @param {String} key Optional schema key. Can be passed to `validate` method instead of schema object or id/ref. One schema per instance can have empty `id` and `key`.
	   * @param {Boolean} _skipValidation true to skip schema validation. Used internally, option validateSchema should be used instead.
	   * @param {Boolean} _meta true if schema is a meta-schema. Used internally, addMetaSchema should be used instead.
	   */
	  function addSchema(schema, key, _skipValidation, _meta) {
	    if (Array.isArray(schema)){
	      for (var i=0; i<schema.length; i++) addSchema(schema[i], undefined, _skipValidation, _meta);
	      return;
	    }
	    // can key/id have # inside?
	    key = resolve.normalizeId(key || schema.id);
	    checkUnique(key);
	    self._schemas[key] = _addSchema(schema, _skipValidation, _meta, true);
	  }


	  /**
	   * Add schema that will be used to validate other schemas
	   * options in META_IGNORE_OPTIONS are alway set to false
	   * @param {Object} schema schema object
	   * @param {String} key optional schema key
	   * @param {Boolean} skipValidation true to skip schema validation, can be used to override validateSchema option for meta-schema
	   */
	  function addMetaSchema(schema, key, skipValidation) {
	    addSchema(schema, key, skipValidation, true);
	  }


	  /**
	   * Validate schema
	   * @param {Object} schema schema to validate
	   * @param {Boolean} throwOrLogError pass true to throw (or log) an error if invalid
	   * @return {Boolean} true if schema is valid
	   */
	  function validateSchema(schema, throwOrLogError) {
	    var $schema = schema.$schema || self._opts.defaultMeta || defaultMeta();
	    var currentUriFormat = self._formats.uri;
	    self._formats.uri = typeof currentUriFormat == 'function'
	                        ? SCHEMA_URI_FORMAT_FUNC
	                        : SCHEMA_URI_FORMAT;
	    var valid;
	    try { valid = validate($schema, schema); }
	    finally { self._formats.uri = currentUriFormat; }
	    if (!valid && throwOrLogError) {
	      var message = 'schema is invalid: ' + errorsText();
	      if (self._opts.validateSchema == 'log') console.error(message);
	      else throw new Error(message);
	    }
	    return valid;
	  }


	  function defaultMeta() {
	    var meta = self._opts.meta;
	    self._opts.defaultMeta = typeof meta == 'object'
	                              ? meta.id || meta
	                              : self._opts.v5
	                                ? v5.META_SCHEMA_ID
	                                : META_SCHEMA_ID;
	    return self._opts.defaultMeta;
	  }


	  /**
	   * Get compiled schema from the instance by `key` or `ref`.
	   * @param  {String} keyRef `key` that was passed to `addSchema` or full schema reference (`schema.id` or resolved id).
	   * @return {Function} schema validating function (with property `schema`).
	   */
	  function getSchema(keyRef) {
	    var schemaObj = _getSchemaObj(keyRef);
	    switch (typeof schemaObj) {
	      case 'object': return schemaObj.validate || _compile(schemaObj);
	      case 'string': return getSchema(schemaObj);
	      case 'undefined': return _getSchemaFragment(keyRef);
	    }
	  }


	  function _getSchemaFragment(ref) {
	    var res = resolve.schema.call(self, { schema: {} }, ref);
	    if (res) {
	      var schema = res.schema
	        , root = res.root
	        , baseId = res.baseId;
	      var v = compileSchema.call(self, schema, root, undefined, baseId);
	      self._fragments[ref] = new SchemaObject({
	        ref: ref,
	        fragment: true,
	        schema: schema,
	        root: root,
	        baseId: baseId,
	        validate: v
	      });
	      return v;
	    }
	  }


	  function _getSchemaObj(keyRef) {
	    keyRef = resolve.normalizeId(keyRef);
	    return self._schemas[keyRef] || self._refs[keyRef] || self._fragments[keyRef];
	  }


	  /**
	   * Remove cached schema(s).
	   * If no parameter is passed all schemas but meta-schemas are removed.
	   * If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
	   * Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
	   * @param  {String|Object|RegExp} schemaKeyRef key, ref, pattern to match key/ref or schema object
	   */
	  function removeSchema(schemaKeyRef) {
	    if (schemaKeyRef instanceof RegExp) {
	      _removeAllSchemas(self._schemas, schemaKeyRef);
	      _removeAllSchemas(self._refs, schemaKeyRef);
	      return;
	    }
	    switch (typeof schemaKeyRef) {
	      case 'undefined':
	        _removeAllSchemas(self._schemas);
	        _removeAllSchemas(self._refs);
	        self._cache.clear();
	        return;
	      case 'string':
	        var schemaObj = _getSchemaObj(schemaKeyRef);
	        if (schemaObj) self._cache.del(schemaObj.jsonStr);
	        delete self._schemas[schemaKeyRef];
	        delete self._refs[schemaKeyRef];
	        return;
	      case 'object':
	        var jsonStr = stableStringify(schemaKeyRef);
	        self._cache.del(jsonStr);
	        var id = schemaKeyRef.id;
	        if (id) {
	          id = resolve.normalizeId(id);
	          delete self._schemas[id];
	          delete self._refs[id];
	        }
	    }
	  }


	  function _removeAllSchemas(schemas, regex) {
	    for (var keyRef in schemas) {
	      var schemaObj = schemas[keyRef];
	      if (!schemaObj.meta && (!regex || regex.test(keyRef))) {
	        self._cache.del(schemaObj.jsonStr);
	        delete schemas[keyRef];
	      }
	    }
	  }


	  function _addSchema(schema, skipValidation, meta, shouldAddSchema) {
	    if (typeof schema != 'object') throw new Error('schema should be object');
	    var jsonStr = stableStringify(schema);
	    var cached = self._cache.get(jsonStr);
	    if (cached) return cached;

	    shouldAddSchema = shouldAddSchema || self._opts.addUsedSchema !== false;

	    var id = resolve.normalizeId(schema.id);
	    if (id && shouldAddSchema) checkUnique(id);

	    var willValidate = self._opts.validateSchema !== false && !skipValidation;
	    var recursiveMeta;
	    if (willValidate && !(recursiveMeta = schema.id && schema.id == schema.$schema))
	      validateSchema(schema, true);

	    var localRefs = resolve.ids.call(self, schema);

	    var schemaObj = new SchemaObject({
	      id: id,
	      schema: schema,
	      localRefs: localRefs,
	      jsonStr: jsonStr,
	      meta: meta
	    });

	    if (id[0] != '#' && shouldAddSchema) self._refs[id] = schemaObj;
	    self._cache.put(jsonStr, schemaObj);

	    if (willValidate && recursiveMeta) validateSchema(schema, true);

	    return schemaObj;
	  }


	  function _compile(schemaObj, root) {
	    if (schemaObj.compiling) {
	      schemaObj.validate = callValidate;
	      callValidate.schema = schemaObj.schema;
	      callValidate.errors = null;
	      callValidate.root = root ? root : callValidate;
	      if (schemaObj.schema.$async === true)
	        callValidate.$async = true;
	      return callValidate;
	    }
	    schemaObj.compiling = true;

	    var currentOpts;
	    if (schemaObj.meta) {
	      currentOpts = self._opts;
	      self._opts = self._metaOpts;
	    }

	    var v;
	    try { v = compileSchema.call(self, schemaObj.schema, root, schemaObj.localRefs); }
	    finally {
	      schemaObj.compiling = false;
	      if (schemaObj.meta) self._opts = currentOpts;
	    }

	    schemaObj.validate = v;
	    schemaObj.refs = v.refs;
	    schemaObj.refVal = v.refVal;
	    schemaObj.root = v.root;
	    return v;


	    function callValidate() {
	      var _validate = schemaObj.validate;
	      var result = _validate.apply(null, arguments);
	      callValidate.errors = _validate.errors;
	      return result;
	    }
	  }


	  /**
	   * Convert array of error message objects to string
	   * @param  {Array<Object>} errors optional array of validation errors, if not passed errors from the instance are used.
	   * @param  {Object} options optional options with properties `separator` and `dataVar`.
	   * @return {String} human readable string with all errors descriptions
	   */
	  function errorsText(errors, options) {
	    errors = errors || self.errors;
	    if (!errors) return 'No errors';
	    options = options || {};
	    var separator = options.separator === undefined ? ', ' : options.separator;
	    var dataVar = options.dataVar === undefined ? 'data' : options.dataVar;

	    var text = '';
	    for (var i=0; i<errors.length; i++) {
	      var e = errors[i];
	      if (e) text += dataVar + e.dataPath + ' ' + e.message + separator;
	    }
	    return text.slice(0, -separator.length);
	  }


	  /**
	   * Add custom format
	   * @param {String} name format name
	   * @param {String|RegExp|Function} format string is converted to RegExp; function should return boolean (true when valid)
	   */
	  function addFormat(name, format) {
	    if (typeof format == 'string') format = new RegExp(format);
	    self._formats[name] = format;
	  }


	  function addDraft4MetaSchema() {
	    if (self._opts.meta !== false) {
	      var metaSchema = require('./refs/json-schema-draft-04.json');
	      addMetaSchema(metaSchema, META_SCHEMA_ID, true);
	      self._refs['http://json-schema.org/schema'] = META_SCHEMA_ID;
	    }
	  }


	  function addInitialSchemas() {
	    var optsSchemas = self._opts.schemas;
	    if (!optsSchemas) return;
	    if (Array.isArray(optsSchemas)) addSchema(optsSchemas);
	    else for (var key in optsSchemas) addSchema(optsSchemas[key], key);
	  }


	  function addInitialFormats() {
	    for (var name in self._opts.formats) {
	      var format = self._opts.formats[name];
	      addFormat(name, format);
	    }
	  }


	  function checkUnique(id) {
	    if (self._schemas[id] || self._refs[id])
	      throw new Error('schema with key or id "' + id + '" already exists');
	  }


	  function getMetaSchemaOptions() {
	    var metaOpts = util.copy(self._opts);
	    for (var i=0; i<META_IGNORE_OPTIONS.length; i++)
	      delete metaOpts[META_IGNORE_OPTIONS[i]];
	    return metaOpts;
	  }
	}

	},{"./async":1,"./cache":2,"./compile":6,"./compile/formats":5,"./compile/resolve":7,"./compile/rules":8,"./compile/schema_obj":9,"./compile/util":10,"./compile/validation_error":11,"./keyword":36,"./refs/json-schema-draft-04.json":37,"./v5":39,"co":46,"json-stable-stringify":47}]},{},[])("ajv")
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);