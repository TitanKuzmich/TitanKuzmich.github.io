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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-instance.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/an-instance.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer-native.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer-native.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined';


/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer-view-core.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer-view-core.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_ARRAY_BUFFER = __webpack_require__(/*! ../internals/array-buffer-native */ "./node_modules/core-js/internals/array-buffer-native.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var Int8Array = global.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var Uint8ClampedArray = global.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
var TypedArray = Int8Array && getPrototypeOf(Int8Array);
var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var isPrototypeOf = ObjectPrototype.isPrototypeOf;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQIRED = false;
var NAME;

var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};

var isView = function isView(it) {
  var klass = classof(it);
  return klass === 'DataView' || has(TypedArrayConstructorsList, klass);
};

var isTypedArray = function (it) {
  return isObject(it) && has(TypedArrayConstructorsList, classof(it));
};

var aTypedArray = function (it) {
  if (isTypedArray(it)) return it;
  throw TypeError('Target is not a typed array');
};

var aTypedArrayConstructor = function (C) {
  if (setPrototypeOf) {
    if (isPrototypeOf.call(TypedArray, C)) return C;
  } else for (var ARRAY in TypedArrayConstructorsList) if (has(TypedArrayConstructorsList, NAME)) {
    var TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && (C === TypedArrayConstructor || isPrototypeOf.call(TypedArrayConstructor, C))) {
      return C;
    }
  } throw TypeError('Target is not a typed array constructor');
};

var exportTypedArrayMethod = function (KEY, property, forced) {
  if (!DESCRIPTORS) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && has(TypedArrayConstructor.prototype, KEY)) {
      delete TypedArrayConstructor.prototype[KEY];
    }
  }
  if (!TypedArrayPrototype[KEY] || forced) {
    redefine(TypedArrayPrototype, KEY, forced ? property
      : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property);
  }
};

var exportTypedArrayStaticMethod = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!DESCRIPTORS) return;
  if (setPrototypeOf) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global[ARRAY];
      if (TypedArrayConstructor && has(TypedArrayConstructor, KEY)) {
        delete TypedArrayConstructor[KEY];
      }
    }
    if (!TypedArray[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8Array[KEY] || property);
      } catch (error) { /* empty */ }
    } else return;
  }
  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      redefine(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME in TypedArrayConstructorsList) {
  if (!global[NAME]) NATIVE_ARRAY_BUFFER_VIEWS = false;
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS || typeof TypedArray != 'function' || TypedArray === Function.prototype) {
  // eslint-disable-next-line no-shadow
  TypedArray = function TypedArray() {
    throw TypeError('Incorrect invocation');
  };
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME], TypedArray);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
  TypedArrayPrototype = TypedArray.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);
  }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
  setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
}

if (DESCRIPTORS && !has(TypedArrayPrototype, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQIRED = true;
  defineProperty(TypedArrayPrototype, TO_STRING_TAG, { get: function () {
    return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
  } });
  for (NAME in TypedArrayConstructorsList) if (global[NAME]) {
    createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME);
  }
}

module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG,
  aTypedArray: aTypedArray,
  aTypedArrayConstructor: aTypedArrayConstructor,
  exportTypedArrayMethod: exportTypedArrayMethod,
  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
  isView: isView,
  isTypedArray: isTypedArray,
  TypedArray: TypedArray,
  TypedArrayPrototype: TypedArrayPrototype
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var NATIVE_ARRAY_BUFFER = __webpack_require__(/*! ../internals/array-buffer-native */ "./node_modules/core-js/internals/array-buffer-native.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toIndex = __webpack_require__(/*! ../internals/to-index */ "./node_modules/core-js/internals/to-index.js");
var IEEE754 = __webpack_require__(/*! ../internals/ieee754 */ "./node_modules/core-js/internals/ieee754.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var arrayFill = __webpack_require__(/*! ../internals/array-fill */ "./node_modules/core-js/internals/array-fill.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length';
var WRONG_INDEX = 'Wrong index';
var NativeArrayBuffer = global[ARRAY_BUFFER];
var $ArrayBuffer = NativeArrayBuffer;
var $DataView = global[DATA_VIEW];
var $DataViewPrototype = $DataView && $DataView[PROTOTYPE];
var ObjectPrototype = Object.prototype;
var RangeError = global.RangeError;

var packIEEE754 = IEEE754.pack;
var unpackIEEE754 = IEEE754.unpack;

var packInt8 = function (number) {
  return [number & 0xFF];
};

var packInt16 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF];
};

var packInt32 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
};

var unpackInt32 = function (buffer) {
  return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
};

var packFloat32 = function (number) {
  return packIEEE754(number, 23, 4);
};

var packFloat64 = function (number) {
  return packIEEE754(number, 52, 8);
};

var addGetter = function (Constructor, key) {
  defineProperty(Constructor[PROTOTYPE], key, { get: function () { return getInternalState(this)[key]; } });
};

var get = function (view, count, index, isLittleEndian) {
  var intIndex = toIndex(index);
  var store = getInternalState(view);
  if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
  var bytes = getInternalState(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = bytes.slice(start, start + count);
  return isLittleEndian ? pack : pack.reverse();
};

var set = function (view, count, index, conversion, value, isLittleEndian) {
  var intIndex = toIndex(index);
  var store = getInternalState(view);
  if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
  var bytes = getInternalState(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = conversion(+value);
  for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
};

if (!NATIVE_ARRAY_BUFFER) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    setInternalState(this, {
      bytes: arrayFill.call(new Array(byteLength), 0),
      byteLength: byteLength
    });
    if (!DESCRIPTORS) this.byteLength = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = getInternalState(buffer).byteLength;
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    setInternalState(this, {
      buffer: buffer,
      byteLength: byteLength,
      byteOffset: offset
    });
    if (!DESCRIPTORS) {
      this.buffer = buffer;
      this.byteLength = byteLength;
      this.byteOffset = offset;
    }
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, 'byteLength');
    addGetter($DataView, 'buffer');
    addGetter($DataView, 'byteLength');
    addGetter($DataView, 'byteOffset');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
    }
  });
} else {
  if (!fails(function () {
    NativeArrayBuffer(1);
  }) || !fails(function () {
    new NativeArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new NativeArrayBuffer(); // eslint-disable-line no-new
    new NativeArrayBuffer(1.5); // eslint-disable-line no-new
    new NativeArrayBuffer(NaN); // eslint-disable-line no-new
    return NativeArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new NativeArrayBuffer(toIndex(length));
    };
    var ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE] = NativeArrayBuffer[PROTOTYPE];
    for (var keys = getOwnPropertyNames(NativeArrayBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) {
        createNonEnumerableProperty($ArrayBuffer, key, NativeArrayBuffer[key]);
      }
    }
    ArrayBufferPrototype.constructor = $ArrayBuffer;
  }

  // WebKit bug - the same parent prototype for typed arrays and data view
  if (setPrototypeOf && getPrototypeOf($DataViewPrototype) !== ObjectPrototype) {
    setPrototypeOf($DataViewPrototype, ObjectPrototype);
  }

  // iOS Safari 7.x bug
  var testView = new $DataView(new $ArrayBuffer(2));
  var nativeSetInt8 = $DataViewPrototype.setInt8;
  testView.setInt8(0, 2147483648);
  testView.setInt8(1, 2147483649);
  if (testView.getInt8(0) || !testView.getInt8(1)) redefineAll($DataViewPrototype, {
    setInt8: function setInt8(byteOffset, value) {
      nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, { unsafe: true });
}

setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);

module.exports = {
  ArrayBuffer: $ArrayBuffer,
  DataView: $DataView
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-copy-within.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/array-copy-within.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var min = Math.min;

// `Array.prototype.copyWithin` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.copywithin
module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-fill.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-fill.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

// `Array.prototype.fill` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-last-index-of.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/array-last-index-of.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var min = Math.min;
var nativeLastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO = !!nativeLastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
// For preventing possible almost infinite loop in non-standard implementations, test the forward version of the method
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });
var FORCED = NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH;

// `Array.prototype.lastIndexOf` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof
module.exports = FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
  // convert -0 to +0
  if (NEGATIVE_ZERO) return nativeLastIndexOf.apply(this, arguments) || 0;
  var O = toIndexedObject(this);
  var length = toLength(O.length);
  var index = length - 1;
  if (arguments.length > 1) index = min(index, toInteger(arguments[1]));
  if (index < 0) index = length + index;
  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
  return -1;
} : nativeLastIndexOf;


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-uses-to-length.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-uses-to-length.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-reduce.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/array-reduce.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-well-known-symbol.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/define-well-known-symbol.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ "./node_modules/core-js/internals/well-known-symbol-wrapped.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(/*! ../modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/ieee754.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/ieee754.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IEEE754 conversions based on https://github.com/feross/ieee754
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = 1 / 0;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;

var pack = function (number, mantissaLength, bytes) {
  var buffer = new Array(bytes);
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
  var index = 0;
  var exponent, mantissa, c;
  number = abs(number);
  // eslint-disable-next-line no-self-compare
  if (number != number || number === Infinity) {
    // eslint-disable-next-line no-self-compare
    mantissa = number != number ? 1 : 0;
    exponent = eMax;
  } else {
    exponent = floor(log(number) / LN2);
    if (number * (c = pow(2, -exponent)) < 1) {
      exponent--;
      c *= 2;
    }
    if (exponent + eBias >= 1) {
      number += rt / c;
    } else {
      number += rt * pow(2, 1 - eBias);
    }
    if (number * c >= 2) {
      exponent++;
      c /= 2;
    }
    if (exponent + eBias >= eMax) {
      mantissa = 0;
      exponent = eMax;
    } else if (exponent + eBias >= 1) {
      mantissa = (number * c - 1) * pow(2, mantissaLength);
      exponent = exponent + eBias;
    } else {
      mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
      exponent = 0;
    }
  }
  for (; mantissaLength >= 8; buffer[index++] = mantissa & 255, mantissa /= 256, mantissaLength -= 8);
  exponent = exponent << mantissaLength | mantissa;
  exponentLength += mantissaLength;
  for (; exponentLength > 0; buffer[index++] = exponent & 255, exponent /= 256, exponentLength -= 8);
  buffer[--index] |= sign * 128;
  return buffer;
};

var unpack = function (buffer, mantissaLength) {
  var bytes = buffer.length;
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var nBits = exponentLength - 7;
  var index = bytes - 1;
  var sign = buffer[index--];
  var exponent = sign & 127;
  var mantissa;
  sign >>= 7;
  for (; nBits > 0; exponent = exponent * 256 + buffer[index], index--, nBits -= 8);
  mantissa = exponent & (1 << -nBits) - 1;
  exponent >>= -nBits;
  nBits += mantissaLength;
  for (; nBits > 0; mantissa = mantissa * 256 + buffer[index], index--, nBits -= 8);
  if (exponent === 0) {
    exponent = 1 - eBias;
  } else if (exponent === eMax) {
    return mantissa ? NaN : sign ? -Infinity : Infinity;
  } else {
    mantissa = mantissa + pow(2, mantissaLength);
    exponent = exponent - eBias;
  } return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
};

module.exports = {
  pack: pack,
  unpack: unpack
};


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inherit-if-required.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/inherit-if-required.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-assign.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-assign.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names-external.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names-external.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var nativeGetOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js/internals/object-to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/core-js/internals/redefine-all.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/redefine-all.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ./regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(/*! ./regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ./regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(/*! ./fails */ "./node_modules/core-js/internals/fails.js");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-species.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/set-species.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-index.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/to-index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

// `ToIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-toindex
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length or index');
  return length;
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-offset.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-offset.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPositiveInteger = __webpack_require__(/*! ../internals/to-positive-integer */ "./node_modules/core-js/internals/to-positive-integer.js");

module.exports = function (it, BYTES) {
  var offset = toPositiveInteger(it);
  if (offset % BYTES) throw RangeError('Wrong offset');
  return offset;
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-positive-integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/to-positive-integer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

module.exports = function (it) {
  var result = toInteger(it);
  if (result < 0) throw RangeError("The argument can't be less than 0");
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "./node_modules/core-js/internals/typed-array-constructor.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-constructor.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __webpack_require__(/*! ../internals/typed-array-constructors-require-wrappers */ "./node_modules/core-js/internals/typed-array-constructors-require-wrappers.js");
var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var ArrayBufferModule = __webpack_require__(/*! ../internals/array-buffer */ "./node_modules/core-js/internals/array-buffer.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toIndex = __webpack_require__(/*! ../internals/to-index */ "./node_modules/core-js/internals/to-index.js");
var toOffset = __webpack_require__(/*! ../internals/to-offset */ "./node_modules/core-js/internals/to-offset.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;
var typedArrayFrom = __webpack_require__(/*! ../internals/typed-array-from */ "./node_modules/core-js/internals/typed-array-from.js");
var forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");

var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var round = Math.round;
var RangeError = global.RangeError;
var ArrayBuffer = ArrayBufferModule.ArrayBuffer;
var DataView = ArrayBufferModule.DataView;
var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
var TYPED_ARRAY_TAG = ArrayBufferViewCore.TYPED_ARRAY_TAG;
var TypedArray = ArrayBufferViewCore.TypedArray;
var TypedArrayPrototype = ArrayBufferViewCore.TypedArrayPrototype;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var isTypedArray = ArrayBufferViewCore.isTypedArray;
var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
var WRONG_LENGTH = 'Wrong length';

var fromList = function (C, list) {
  var index = 0;
  var length = list.length;
  var result = new (aTypedArrayConstructor(C))(length);
  while (length > index) result[index] = list[index++];
  return result;
};

var addGetter = function (it, key) {
  nativeDefineProperty(it, key, { get: function () {
    return getInternalState(this)[key];
  } });
};

var isArrayBuffer = function (it) {
  var klass;
  return it instanceof ArrayBuffer || (klass = classof(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
};

var isTypedArrayIndex = function (target, key) {
  return isTypedArray(target)
    && typeof key != 'symbol'
    && key in target
    && String(+key) == String(key);
};

var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
  return isTypedArrayIndex(target, key = toPrimitive(key, true))
    ? createPropertyDescriptor(2, target[key])
    : nativeGetOwnPropertyDescriptor(target, key);
};

var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
  if (isTypedArrayIndex(target, key = toPrimitive(key, true))
    && isObject(descriptor)
    && has(descriptor, 'value')
    && !has(descriptor, 'get')
    && !has(descriptor, 'set')
    // TODO: add validation descriptor w/o calling accessors
    && !descriptor.configurable
    && (!has(descriptor, 'writable') || descriptor.writable)
    && (!has(descriptor, 'enumerable') || descriptor.enumerable)
  ) {
    target[key] = descriptor.value;
    return target;
  } return nativeDefineProperty(target, key, descriptor);
};

if (DESCRIPTORS) {
  if (!NATIVE_ARRAY_BUFFER_VIEWS) {
    getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
    definePropertyModule.f = wrappedDefineProperty;
    addGetter(TypedArrayPrototype, 'buffer');
    addGetter(TypedArrayPrototype, 'byteOffset');
    addGetter(TypedArrayPrototype, 'byteLength');
    addGetter(TypedArrayPrototype, 'length');
  }

  $({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
    getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
    defineProperty: wrappedDefineProperty
  });

  module.exports = function (TYPE, wrapper, CLAMPED) {
    var BYTES = TYPE.match(/\d+$/)[0] / 8;
    var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + TYPE;
    var SETTER = 'set' + TYPE;
    var NativeTypedArrayConstructor = global[CONSTRUCTOR_NAME];
    var TypedArrayConstructor = NativeTypedArrayConstructor;
    var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
    var exported = {};

    var getter = function (that, index) {
      var data = getInternalState(that);
      return data.view[GETTER](index * BYTES + data.byteOffset, true);
    };

    var setter = function (that, index, value) {
      var data = getInternalState(that);
      if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
      data.view[SETTER](index * BYTES + data.byteOffset, value, true);
    };

    var addElement = function (that, index) {
      nativeDefineProperty(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };

    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
      TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
        anInstance(that, TypedArrayConstructor, CONSTRUCTOR_NAME);
        var index = 0;
        var byteOffset = 0;
        var buffer, byteLength, length;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new ArrayBuffer(byteLength);
        } else if (isArrayBuffer(data)) {
          buffer = data;
          byteOffset = toOffset(offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - byteOffset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + byteOffset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (isTypedArray(data)) {
          return fromList(TypedArrayConstructor, data);
        } else {
          return typedArrayFrom.call(TypedArrayConstructor, data);
        }
        setInternalState(that, {
          buffer: buffer,
          byteOffset: byteOffset,
          byteLength: byteLength,
          length: length,
          view: new DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(TypedArrayPrototype);
    } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
      TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
        anInstance(dummy, TypedArrayConstructor, CONSTRUCTOR_NAME);
        return inheritIfRequired(function () {
          if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
          if (isArrayBuffer(data)) return $length !== undefined
            ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length)
            : typedArrayOffset !== undefined
              ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES))
              : new NativeTypedArrayConstructor(data);
          if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
          return typedArrayFrom.call(TypedArrayConstructor, data);
        }(), dummy, TypedArrayConstructor);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
        if (!(key in TypedArrayConstructor)) {
          createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
        }
      });
      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
    }

    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
    }

    if (TYPED_ARRAY_TAG) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
    }

    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;

    $({
      global: true, forced: TypedArrayConstructor != NativeTypedArrayConstructor, sham: !NATIVE_ARRAY_BUFFER_VIEWS
    }, exported);

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
      createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
    }

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
    }

    setSpecies(CONSTRUCTOR_NAME);
  };
} else module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/internals/typed-array-constructors-require-wrappers.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-constructors-require-wrappers.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-new */
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");
var NATIVE_ARRAY_BUFFER_VIEWS = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js").NATIVE_ARRAY_BUFFER_VIEWS;

var ArrayBuffer = global.ArrayBuffer;
var Int8Array = global.Int8Array;

module.exports = !NATIVE_ARRAY_BUFFER_VIEWS || !fails(function () {
  Int8Array(1);
}) || !fails(function () {
  new Int8Array(-1);
}) || !checkCorrectnessOfIteration(function (iterable) {
  new Int8Array();
  new Int8Array(null);
  new Int8Array(1.5);
  new Int8Array(iterable);
}, true) || fails(function () {
  // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
  return new Int8Array(new ArrayBuffer(2), 1, undefined).length !== 1;
});


/***/ }),

/***/ "./node_modules/core-js/internals/typed-array-from.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-from.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var aTypedArrayConstructor = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js").aTypedArrayConstructor;

module.exports = function from(source /* , mapfn, thisArg */) {
  var O = toObject(source);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var i, length, result, step, iterator, next;
  if (iteratorMethod != undefined && !isArrayIteratorMethod(iteratorMethod)) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    O = [];
    while (!(step = next.call(iterator)).done) {
      O.push(step.value);
    }
  }
  if (mapping && argumentsLength > 2) {
    mapfn = bind(mapfn, arguments[2], 2);
  }
  length = toLength(O.length);
  result = new (aTypedArrayConstructor(this))(length);
  for (i = 0; length > i; i++) {
    result[i] = mapping ? mapfn(O[i], i) : O[i];
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol-wrapped.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol-wrapped.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.fill.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.fill.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fill = __webpack_require__(/*! ../internals/array-fill */ "./node_modules/core-js/internals/array-fill.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

// `Array.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.index-of.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.index-of.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.join.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.join.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.last-index-of.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.last-index-of.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var lastIndexOf = __webpack_require__(/*! ../internals/array-last-index-of */ "./node_modules/core-js/internals/array-last-index-of.js");

// `Array.prototype.lastIndexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof
$({ target: 'Array', proto: true, forced: lastIndexOf !== [].lastIndexOf }, {
  lastIndexOf: lastIndexOf
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.slice.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.slice.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.splice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.splice.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var assign = __webpack_require__(/*! ../internals/object-assign */ "./node_modules/core-js/internals/object-assign.js");

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var nativeGetOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "./node_modules/core-js/internals/object-to-string.js");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var exec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var flags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.split.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.split.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var callRegExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.description.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ "./node_modules/core-js/internals/object-get-own-property-names-external.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ "./node_modules/core-js/internals/well-known-symbol-wrapped.js");
var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.copy-within.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.copy-within.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $copyWithin = __webpack_require__(/*! ../internals/array-copy-within */ "./node_modules/core-js/internals/array-copy-within.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.copyWithin` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.copywithin
exportTypedArrayMethod('copyWithin', function copyWithin(target, start /* , end */) {
  return $copyWithin.call(aTypedArray(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.every.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.every.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $every = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").every;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.every` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.every
exportTypedArrayMethod('every', function every(callbackfn /* , thisArg */) {
  return $every(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.fill.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.fill.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $fill = __webpack_require__(/*! ../internals/array-fill */ "./node_modules/core-js/internals/array-fill.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.fill
// eslint-disable-next-line no-unused-vars
exportTypedArrayMethod('fill', function fill(value /* , start, end */) {
  return $fill.apply(aTypedArray(this), arguments);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.filter.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.filter.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.filter
exportTypedArrayMethod('filter', function filter(callbackfn /* , thisArg */) {
  var list = $filter(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  var C = speciesConstructor(this, this.constructor);
  var index = 0;
  var length = list.length;
  var result = new (aTypedArrayConstructor(C))(length);
  while (length > index) result[index] = list[index++];
  return result;
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.find-index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.find-index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $findIndex = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").findIndex;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.findIndex` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.findindex
exportTypedArrayMethod('findIndex', function findIndex(predicate /* , thisArg */) {
  return $findIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.find.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.find.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $find = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.find` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.find
exportTypedArrayMethod('find', function find(predicate /* , thisArg */) {
  return $find(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.float32-array.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.float32-array.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ "./node_modules/core-js/internals/typed-array-constructor.js");

// `Float32Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Float32', function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.for-each.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.for-each.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.foreach
exportTypedArrayMethod('forEach', function forEach(callbackfn /* , thisArg */) {
  $forEach(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $includes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").includes;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.includes
exportTypedArrayMethod('includes', function includes(searchElement /* , fromIndex */) {
  return $includes(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.index-of.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.indexof
exportTypedArrayMethod('indexOf', function indexOf(searchElement /* , fromIndex */) {
  return $indexOf(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.int16-array.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.int16-array.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ "./node_modules/core-js/internals/typed-array-constructor.js");

// `Int16Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Int16', function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.iterator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.iterator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var ArrayIterators = __webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var Uint8Array = global.Uint8Array;
var arrayValues = ArrayIterators.values;
var arrayKeys = ArrayIterators.keys;
var arrayEntries = ArrayIterators.entries;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var nativeTypedArrayIterator = Uint8Array && Uint8Array.prototype[ITERATOR];

var CORRECT_ITER_NAME = !!nativeTypedArrayIterator
  && (nativeTypedArrayIterator.name == 'values' || nativeTypedArrayIterator.name == undefined);

var typedArrayValues = function values() {
  return arrayValues.call(aTypedArray(this));
};

// `%TypedArray%.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.entries
exportTypedArrayMethod('entries', function entries() {
  return arrayEntries.call(aTypedArray(this));
});
// `%TypedArray%.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.keys
exportTypedArrayMethod('keys', function keys() {
  return arrayKeys.call(aTypedArray(this));
});
// `%TypedArray%.prototype.values` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.values
exportTypedArrayMethod('values', typedArrayValues, !CORRECT_ITER_NAME);
// `%TypedArray%.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype-@@iterator
exportTypedArrayMethod(ITERATOR, typedArrayValues, !CORRECT_ITER_NAME);


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.join.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.join.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $join = [].join;

// `%TypedArray%.prototype.join` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.join
// eslint-disable-next-line no-unused-vars
exportTypedArrayMethod('join', function join(separator) {
  return $join.apply(aTypedArray(this), arguments);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.last-index-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.last-index-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $lastIndexOf = __webpack_require__(/*! ../internals/array-last-index-of */ "./node_modules/core-js/internals/array-last-index-of.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.lastIndexOf` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.lastindexof
// eslint-disable-next-line no-unused-vars
exportTypedArrayMethod('lastIndexOf', function lastIndexOf(searchElement /* , fromIndex */) {
  return $lastIndexOf.apply(aTypedArray(this), arguments);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.map.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $map = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map;
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.map` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.map
exportTypedArrayMethod('map', function map(mapfn /* , thisArg */) {
  return $map(aTypedArray(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
    return new (aTypedArrayConstructor(speciesConstructor(O, O.constructor)))(length);
  });
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.reduce-right.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.reduce-right.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $reduceRight = __webpack_require__(/*! ../internals/array-reduce */ "./node_modules/core-js/internals/array-reduce.js").right;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.reduceRicht` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reduceright
exportTypedArrayMethod('reduceRight', function reduceRight(callbackfn /* , initialValue */) {
  return $reduceRight(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.reduce.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.reduce.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $reduce = __webpack_require__(/*! ../internals/array-reduce */ "./node_modules/core-js/internals/array-reduce.js").left;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reduce
exportTypedArrayMethod('reduce', function reduce(callbackfn /* , initialValue */) {
  return $reduce(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.reverse.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.reverse.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var floor = Math.floor;

// `%TypedArray%.prototype.reverse` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reverse
exportTypedArrayMethod('reverse', function reverse() {
  var that = this;
  var length = aTypedArray(that).length;
  var middle = floor(length / 2);
  var index = 0;
  var value;
  while (index < middle) {
    value = that[index];
    that[index++] = that[--length];
    that[length] = value;
  } return that;
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.set.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.set.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toOffset = __webpack_require__(/*! ../internals/to-offset */ "./node_modules/core-js/internals/to-offset.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var FORCED = fails(function () {
  // eslint-disable-next-line no-undef
  new Int8Array(1).set({});
});

// `%TypedArray%.prototype.set` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.set
exportTypedArrayMethod('set', function set(arrayLike /* , offset */) {
  aTypedArray(this);
  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
  var length = this.length;
  var src = toObject(arrayLike);
  var len = toLength(src.length);
  var index = 0;
  if (len + offset > length) throw RangeError('Wrong length');
  while (index < len) this[offset + index] = src[index++];
}, FORCED);


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.slice.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.slice.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $slice = [].slice;

var FORCED = fails(function () {
  // eslint-disable-next-line no-undef
  new Int8Array(1).slice();
});

// `%TypedArray%.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.slice
exportTypedArrayMethod('slice', function slice(start, end) {
  var list = $slice.call(aTypedArray(this), start, end);
  var C = speciesConstructor(this, this.constructor);
  var index = 0;
  var length = list.length;
  var result = new (aTypedArrayConstructor(C))(length);
  while (length > index) result[index] = list[index++];
  return result;
}, FORCED);


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.some.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.some.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $some = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").some;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.some` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.some
exportTypedArrayMethod('some', function some(callbackfn /* , thisArg */) {
  return $some(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.sort.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.sort.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $sort = [].sort;

// `%TypedArray%.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.sort
exportTypedArrayMethod('sort', function sort(comparefn) {
  return $sort.call(aTypedArray(this), comparefn);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.subarray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.subarray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.subarray` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.subarray
exportTypedArrayMethod('subarray', function subarray(begin, end) {
  var O = aTypedArray(this);
  var length = O.length;
  var beginIndex = toAbsoluteIndex(begin, length);
  return new (speciesConstructor(O, O.constructor))(
    O.buffer,
    O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT,
    toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex)
  );
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.to-locale-string.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.to-locale-string.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var Int8Array = global.Int8Array;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $toLocaleString = [].toLocaleString;
var $slice = [].slice;

// iOS Safari 6.x fails here
var TO_LOCALE_STRING_BUG = !!Int8Array && fails(function () {
  $toLocaleString.call(new Int8Array(1));
});

var FORCED = fails(function () {
  return [1, 2].toLocaleString() != new Int8Array([1, 2]).toLocaleString();
}) || !fails(function () {
  Int8Array.prototype.toLocaleString.call([1, 2]);
});

// `%TypedArray%.prototype.toLocaleString` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.tolocalestring
exportTypedArrayMethod('toLocaleString', function toLocaleString() {
  return $toLocaleString.apply(TO_LOCALE_STRING_BUG ? $slice.call(aTypedArray(this)) : aTypedArray(this), arguments);
}, FORCED);


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.to-string.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.to-string.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var exportTypedArrayMethod = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js").exportTypedArrayMethod;
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var Uint8Array = global.Uint8Array;
var Uint8ArrayPrototype = Uint8Array && Uint8Array.prototype || {};
var arrayToString = [].toString;
var arrayJoin = [].join;

if (fails(function () { arrayToString.call({}); })) {
  arrayToString = function toString() {
    return arrayJoin.call(this);
  };
}

var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString;

// `%TypedArray%.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.tostring
exportTypedArrayMethod('toString', arrayToString, IS_NOT_ARRAY_METHOD);


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.uint8-array.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.uint8-array.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ "./node_modules/core-js/internals/typed-array-constructor.js");

// `Uint8Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint8', function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.uint8-clamped-array.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.uint8-clamped-array.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ "./node_modules/core-js/internals/typed-array-constructor.js");

// `Uint8ClampedArray` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint8', function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_lottieUsage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/lottieUsage */ "./src/js/modules/lottieUsage.js");
/* harmony import */ var _modules_workSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/workSlider */ "./src/js/modules/workSlider.js");
/* harmony import */ var _modules_workFlipCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/workFlipCard */ "./src/js/modules/workFlipCard.js");



window.addEventListener('DOMContentLoaded', function () {
  "use strict";

  Object(_modules_workSlider__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_workFlipCard__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./src/js/modules/lottie.js":
/*!**********************************!*\
  !*** ./src/js/modules/lottie.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.fill */ "./node_modules/core-js/modules/es.array.fill.js");
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.last-index-of */ "./node_modules/core-js/modules/es.array.last-index-of.js");
/* harmony import */ var core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_typed_array_float32_array__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.typed-array.float32-array */ "./node_modules/core-js/modules/es.typed-array.float32-array.js");
/* harmony import */ var core_js_modules_es_typed_array_float32_array__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_float32_array__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_typed_array_int16_array__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.typed-array.int16-array */ "./node_modules/core-js/modules/es.typed-array.int16-array.js");
/* harmony import */ var core_js_modules_es_typed_array_int16_array__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_int16_array__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_typed_array_uint8_array__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.typed-array.uint8-array */ "./node_modules/core-js/modules/es.typed-array.uint8-array.js");
/* harmony import */ var core_js_modules_es_typed_array_uint8_array__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_uint8_array__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_typed_array_uint8_clamped_array__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.typed-array.uint8-clamped-array */ "./node_modules/core-js/modules/es.typed-array.uint8-clamped-array.js");
/* harmony import */ var core_js_modules_es_typed_array_uint8_clamped_array__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_uint8_clamped_array__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_typed_array_copy_within__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.typed-array.copy-within */ "./node_modules/core-js/modules/es.typed-array.copy-within.js");
/* harmony import */ var core_js_modules_es_typed_array_copy_within__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_copy_within__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_typed_array_every__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.typed-array.every */ "./node_modules/core-js/modules/es.typed-array.every.js");
/* harmony import */ var core_js_modules_es_typed_array_every__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_every__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_typed_array_fill__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.typed-array.fill */ "./node_modules/core-js/modules/es.typed-array.fill.js");
/* harmony import */ var core_js_modules_es_typed_array_fill__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_fill__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_typed_array_filter__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.typed-array.filter */ "./node_modules/core-js/modules/es.typed-array.filter.js");
/* harmony import */ var core_js_modules_es_typed_array_filter__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_filter__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_typed_array_find__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.typed-array.find */ "./node_modules/core-js/modules/es.typed-array.find.js");
/* harmony import */ var core_js_modules_es_typed_array_find__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_typed_array_find_index__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-index */ "./node_modules/core-js/modules/es.typed-array.find-index.js");
/* harmony import */ var core_js_modules_es_typed_array_find_index__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_index__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_typed_array_for_each__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.typed-array.for-each */ "./node_modules/core-js/modules/es.typed-array.for-each.js");
/* harmony import */ var core_js_modules_es_typed_array_for_each__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_for_each__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_typed_array_includes__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.typed-array.includes */ "./node_modules/core-js/modules/es.typed-array.includes.js");
/* harmony import */ var core_js_modules_es_typed_array_includes__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_includes__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_typed_array_index_of__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.typed-array.index-of */ "./node_modules/core-js/modules/es.typed-array.index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_index_of__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_index_of__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_typed_array_iterator__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.typed-array.iterator */ "./node_modules/core-js/modules/es.typed-array.iterator.js");
/* harmony import */ var core_js_modules_es_typed_array_iterator__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_iterator__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_typed_array_join__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.typed-array.join */ "./node_modules/core-js/modules/es.typed-array.join.js");
/* harmony import */ var core_js_modules_es_typed_array_join__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_join__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_typed_array_last_index_of__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.typed-array.last-index-of */ "./node_modules/core-js/modules/es.typed-array.last-index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_last_index_of__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_last_index_of__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_typed_array_map__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.typed-array.map */ "./node_modules/core-js/modules/es.typed-array.map.js");
/* harmony import */ var core_js_modules_es_typed_array_map__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_map__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_typed_array_reduce__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce */ "./node_modules/core-js/modules/es.typed-array.reduce.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_right__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce-right */ "./node_modules/core-js/modules/es.typed-array.reduce-right.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce_right__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_right__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_es_typed_array_reverse__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/es.typed-array.reverse */ "./node_modules/core-js/modules/es.typed-array.reverse.js");
/* harmony import */ var core_js_modules_es_typed_array_reverse__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reverse__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_es_typed_array_set__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/es.typed-array.set */ "./node_modules/core-js/modules/es.typed-array.set.js");
/* harmony import */ var core_js_modules_es_typed_array_set__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_set__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_es_typed_array_slice__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/es.typed-array.slice */ "./node_modules/core-js/modules/es.typed-array.slice.js");
/* harmony import */ var core_js_modules_es_typed_array_slice__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_slice__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var core_js_modules_es_typed_array_some__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/es.typed-array.some */ "./node_modules/core-js/modules/es.typed-array.some.js");
/* harmony import */ var core_js_modules_es_typed_array_some__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_some__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var core_js_modules_es_typed_array_sort__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! core-js/modules/es.typed-array.sort */ "./node_modules/core-js/modules/es.typed-array.sort.js");
/* harmony import */ var core_js_modules_es_typed_array_sort__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_sort__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var core_js_modules_es_typed_array_subarray__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! core-js/modules/es.typed-array.subarray */ "./node_modules/core-js/modules/es.typed-array.subarray.js");
/* harmony import */ var core_js_modules_es_typed_array_subarray__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_subarray__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-locale-string */ "./node_modules/core-js/modules/es.typed-array.to-locale-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_locale_string__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var core_js_modules_es_typed_array_to_string__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-string */ "./node_modules/core-js/modules/es.typed-array.to-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_string__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_string__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_48__);
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}typeof navigator!=="undefined"&&function(root,factory){if(typeof define==="function"&&__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")){define(function(){return factory(root);});}else if(( false?undefined:_typeof(module))==="object"&&module.exports){module.exports=factory(root);}else{root.lottie=factory(root);root.bodymovin=root.lottie;}}(window||{},function(window){"use strict";var svgNS="http://www.w3.org/2000/svg";var locationHref='';var initialDefaultFrame=-999999;var subframeEnabled=true;var expressionsPlugin;var isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);var cachedColors={};var bm_rounder=Math.round;var bm_rnd;var bm_pow=Math.pow;var bm_sqrt=Math.sqrt;var bm_abs=Math.abs;var bm_floor=Math.floor;var bm_max=Math.max;var bm_min=Math.min;var blitter=10;var BMMath={};(function(){var propertyNames=["abs","acos","acosh","asin","asinh","atan","atanh","atan2","ceil","cbrt","expm1","clz32","cos","cosh","exp","floor","fround","hypot","imul","log","log1p","log2","log10","max","min","pow","random","round","sign","sin","sinh","sqrt","tan","tanh","trunc","E","LN10","LN2","LOG10E","LOG2E","PI","SQRT1_2","SQRT2"];var i,len=propertyNames.length;for(i=0;i<len;i+=1){BMMath[propertyNames[i]]=Math[propertyNames[i]];}})();function ProjectInterface(){return{};}BMMath.random=Math.random;BMMath.abs=function(val){var tOfVal=_typeof(val);if(tOfVal==='object'&&val.length){var absArr=createSizedArray(val.length);var i,len=val.length;for(i=0;i<len;i+=1){absArr[i]=Math.abs(val[i]);}return absArr;}return Math.abs(val);};var defaultCurveSegments=150;var degToRads=Math.PI/180;var roundCorner=0.5519;function roundValues(flag){if(flag){bm_rnd=Math.round;}else{bm_rnd=function bm_rnd(val){return val;};}}roundValues(false);function styleDiv(element){element.style.position='absolute';element.style.top=0;element.style.left=0;element.style.display='block';element.style.transformOrigin=element.style.webkitTransformOrigin='0 0';element.style.backfaceVisibility=element.style.webkitBackfaceVisibility='visible';element.style.transformStyle=element.style.webkitTransformStyle=element.style.mozTransformStyle="preserve-3d";}function BMEnterFrameEvent(type,currentTime,totalTime,frameMultiplier){this.type=type;this.currentTime=currentTime;this.totalTime=totalTime;this.direction=frameMultiplier<0?-1:1;}function BMCompleteEvent(type,frameMultiplier){this.type=type;this.direction=frameMultiplier<0?-1:1;}function BMCompleteLoopEvent(type,totalLoops,currentLoop,frameMultiplier){this.type=type;this.currentLoop=currentLoop;this.totalLoops=totalLoops;this.direction=frameMultiplier<0?-1:1;}function BMSegmentStartEvent(type,firstFrame,totalFrames){this.type=type;this.firstFrame=firstFrame;this.totalFrames=totalFrames;}function BMDestroyEvent(type,target){this.type=type;this.target=target;}function BMRenderFrameErrorEvent(nativeError,currentTime){this.type='renderFrameError';this.nativeError=nativeError;this.currentTime=currentTime;}function BMConfigErrorEvent(nativeError){this.type='configError';this.nativeError=nativeError;}function BMAnimationConfigErrorEvent(type,nativeError){this.type=type;this.nativeError=nativeError;this.currentTime=currentTime;}var createElementID=function(){var _count=0;return function createID(){return'__lottie_element_'+ ++_count;};}();function HSVtoRGB(h,s,v){var r,g,b,i,f,p,q,t;i=Math.floor(h*6);f=h*6-i;p=v*(1-s);q=v*(1-f*s);t=v*(1-(1-f)*s);switch(i%6){case 0:r=v;g=t;b=p;break;case 1:r=q;g=v;b=p;break;case 2:r=p;g=v;b=t;break;case 3:r=p;g=q;b=v;break;case 4:r=t;g=p;b=v;break;case 5:r=v;g=p;b=q;break;}return[r,g,b];}function RGBtoHSV(r,g,b){var max=Math.max(r,g,b),min=Math.min(r,g,b),d=max-min,h,s=max===0?0:d/max,v=max/255;switch(max){case min:h=0;break;case r:h=g-b+d*(g<b?6:0);h/=6*d;break;case g:h=b-r+d*2;h/=6*d;break;case b:h=r-g+d*4;h/=6*d;break;}return[h,s,v];}function addSaturationToRGB(color,offset){var hsv=RGBtoHSV(color[0]*255,color[1]*255,color[2]*255);hsv[1]+=offset;if(hsv[1]>1){hsv[1]=1;}else if(hsv[1]<=0){hsv[1]=0;}return HSVtoRGB(hsv[0],hsv[1],hsv[2]);}function addBrightnessToRGB(color,offset){var hsv=RGBtoHSV(color[0]*255,color[1]*255,color[2]*255);hsv[2]+=offset;if(hsv[2]>1){hsv[2]=1;}else if(hsv[2]<0){hsv[2]=0;}return HSVtoRGB(hsv[0],hsv[1],hsv[2]);}function addHueToRGB(color,offset){var hsv=RGBtoHSV(color[0]*255,color[1]*255,color[2]*255);hsv[0]+=offset/360;if(hsv[0]>1){hsv[0]-=1;}else if(hsv[0]<0){hsv[0]+=1;}return HSVtoRGB(hsv[0],hsv[1],hsv[2]);}var rgbToHex=function(){var colorMap=[];var i;var hex;for(i=0;i<256;i+=1){hex=i.toString(16);colorMap[i]=hex.length==1?'0'+hex:hex;}return function(r,g,b){if(r<0){r=0;}if(g<0){g=0;}if(b<0){b=0;}return'#'+colorMap[r]+colorMap[g]+colorMap[b];};}();function BaseEvent(){}BaseEvent.prototype={triggerEvent:function triggerEvent(eventName,args){if(this._cbs[eventName]){var len=this._cbs[eventName].length;for(var i=0;i<len;i++){this._cbs[eventName][i](args);}}},addEventListener:function addEventListener(eventName,callback){if(!this._cbs[eventName]){this._cbs[eventName]=[];}this._cbs[eventName].push(callback);return function(){this.removeEventListener(eventName,callback);}.bind(this);},removeEventListener:function removeEventListener(eventName,callback){if(!callback){this._cbs[eventName]=null;}else if(this._cbs[eventName]){var i=0,len=this._cbs[eventName].length;while(i<len){if(this._cbs[eventName][i]===callback){this._cbs[eventName].splice(i,1);i-=1;len-=1;}i+=1;}if(!this._cbs[eventName].length){this._cbs[eventName]=null;}}}};var createTypedArray=function(){function createRegularArray(type,len){var i=0,arr=[],value;switch(type){case'int16':case'uint8c':value=1;break;default:value=1.1;break;}for(i=0;i<len;i+=1){arr.push(value);}return arr;}function createTypedArray(type,len){if(type==='float32'){return new Float32Array(len);}else if(type==='int16'){return new Int16Array(len);}else if(type==='uint8c'){return new Uint8ClampedArray(len);}}if(typeof Uint8ClampedArray==='function'&&typeof Float32Array==='function'){return createTypedArray;}else{return createRegularArray;}}();function createSizedArray(len){return Array.apply(null,{length:len});}function createNS(type){//return {appendChild:function(){},setAttribute:function(){},style:{}}
return document.createElementNS(svgNS,type);}function createTag(type){//return {appendChild:function(){},setAttribute:function(){},style:{}}
return document.createElement(type);}function DynamicPropertyContainer(){};DynamicPropertyContainer.prototype={addDynamicProperty:function addDynamicProperty(prop){if(this.dynamicProperties.indexOf(prop)===-1){this.dynamicProperties.push(prop);this.container.addDynamicProperty(this);this._isAnimated=true;}},iterateDynamicProperties:function iterateDynamicProperties(){this._mdf=false;var i,len=this.dynamicProperties.length;for(i=0;i<len;i+=1){this.dynamicProperties[i].getValue();if(this.dynamicProperties[i]._mdf){this._mdf=true;}}},initDynamicPropertyContainer:function initDynamicPropertyContainer(container){this.container=container;this.dynamicProperties=[];this._mdf=false;this._isAnimated=false;}};var getBlendMode=function(){var blendModeEnums={0:'source-over',1:'multiply',2:'screen',3:'overlay',4:'darken',5:'lighten',6:'color-dodge',7:'color-burn',8:'hard-light',9:'soft-light',10:'difference',11:'exclusion',12:'hue',13:'saturation',14:'color',15:'luminosity'};return function(mode){return blendModeEnums[mode]||'';};}();/*!
Transformation Matrix v2.0
(c) Epistemex 2014-2015
www.epistemex.com
By Ken Fyrstenberg
Contributions by leeoniya.
License: MIT, header required.
*/ /**
     * 2D transformation matrix object initialized with identity matrix.
     *
     * The matrix can synchronize a canvas context by supplying the context
     * as an argument, or later apply current absolute transform to an
     * existing context.
     *
     * All values are handled as floating point values.
     *
     * @param {CanvasRenderingContext2D} [context] - Optional context to sync with Matrix
     * @prop {number} a - scale x
     * @prop {number} b - shear y
     * @prop {number} c - shear x
     * @prop {number} d - scale y
     * @prop {number} e - translate x
     * @prop {number} f - translate y
     * @prop {CanvasRenderingContext2D|null} [context=null] - set or get current canvas context
     * @constructor
     */var Matrix=function(){var _cos=Math.cos;var _sin=Math.sin;var _tan=Math.tan;var _rnd=Math.round;function reset(){this.props[0]=1;this.props[1]=0;this.props[2]=0;this.props[3]=0;this.props[4]=0;this.props[5]=1;this.props[6]=0;this.props[7]=0;this.props[8]=0;this.props[9]=0;this.props[10]=1;this.props[11]=0;this.props[12]=0;this.props[13]=0;this.props[14]=0;this.props[15]=1;return this;}function rotate(angle){if(angle===0){return this;}var mCos=_cos(angle);var mSin=_sin(angle);return this._t(mCos,-mSin,0,0,mSin,mCos,0,0,0,0,1,0,0,0,0,1);}function rotateX(angle){if(angle===0){return this;}var mCos=_cos(angle);var mSin=_sin(angle);return this._t(1,0,0,0,0,mCos,-mSin,0,0,mSin,mCos,0,0,0,0,1);}function rotateY(angle){if(angle===0){return this;}var mCos=_cos(angle);var mSin=_sin(angle);return this._t(mCos,0,mSin,0,0,1,0,0,-mSin,0,mCos,0,0,0,0,1);}function rotateZ(angle){if(angle===0){return this;}var mCos=_cos(angle);var mSin=_sin(angle);return this._t(mCos,-mSin,0,0,mSin,mCos,0,0,0,0,1,0,0,0,0,1);}function shear(sx,sy){return this._t(1,sy,sx,1,0,0);}function skew(ax,ay){return this.shear(_tan(ax),_tan(ay));}function skewFromAxis(ax,angle){var mCos=_cos(angle);var mSin=_sin(angle);return this._t(mCos,mSin,0,0,-mSin,mCos,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,_tan(ax),1,0,0,0,0,1,0,0,0,0,1)._t(mCos,-mSin,0,0,mSin,mCos,0,0,0,0,1,0,0,0,0,1);//return this._t(mCos, mSin, -mSin, mCos, 0, 0)._t(1, 0, _tan(ax), 1, 0, 0)._t(mCos, -mSin, mSin, mCos, 0, 0);
}function scale(sx,sy,sz){if(!sz&&sz!==0){sz=1;}if(sx===1&&sy===1&&sz===1){return this;}return this._t(sx,0,0,0,0,sy,0,0,0,0,sz,0,0,0,0,1);}function setTransform(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){this.props[0]=a;this.props[1]=b;this.props[2]=c;this.props[3]=d;this.props[4]=e;this.props[5]=f;this.props[6]=g;this.props[7]=h;this.props[8]=i;this.props[9]=j;this.props[10]=k;this.props[11]=l;this.props[12]=m;this.props[13]=n;this.props[14]=o;this.props[15]=p;return this;}function translate(tx,ty,tz){tz=tz||0;if(tx!==0||ty!==0||tz!==0){return this._t(1,0,0,0,0,1,0,0,0,0,1,0,tx,ty,tz,1);}return this;}function transform(a2,b2,c2,d2,e2,f2,g2,h2,i2,j2,k2,l2,m2,n2,o2,p2){var _p=this.props;if(a2===1&&b2===0&&c2===0&&d2===0&&e2===0&&f2===1&&g2===0&&h2===0&&i2===0&&j2===0&&k2===1&&l2===0){//NOTE: commenting this condition because TurboFan deoptimizes code when present
//if(m2 !== 0 || n2 !== 0 || o2 !== 0){
_p[12]=_p[12]*a2+_p[15]*m2;_p[13]=_p[13]*f2+_p[15]*n2;_p[14]=_p[14]*k2+_p[15]*o2;_p[15]=_p[15]*p2;//}
this._identityCalculated=false;return this;}var a1=_p[0];var b1=_p[1];var c1=_p[2];var d1=_p[3];var e1=_p[4];var f1=_p[5];var g1=_p[6];var h1=_p[7];var i1=_p[8];var j1=_p[9];var k1=_p[10];var l1=_p[11];var m1=_p[12];var n1=_p[13];var o1=_p[14];var p1=_p[15];/* matrix order (canvas compatible):
 * ace
 * bdf
 * 001
 */_p[0]=a1*a2+b1*e2+c1*i2+d1*m2;_p[1]=a1*b2+b1*f2+c1*j2+d1*n2;_p[2]=a1*c2+b1*g2+c1*k2+d1*o2;_p[3]=a1*d2+b1*h2+c1*l2+d1*p2;_p[4]=e1*a2+f1*e2+g1*i2+h1*m2;_p[5]=e1*b2+f1*f2+g1*j2+h1*n2;_p[6]=e1*c2+f1*g2+g1*k2+h1*o2;_p[7]=e1*d2+f1*h2+g1*l2+h1*p2;_p[8]=i1*a2+j1*e2+k1*i2+l1*m2;_p[9]=i1*b2+j1*f2+k1*j2+l1*n2;_p[10]=i1*c2+j1*g2+k1*k2+l1*o2;_p[11]=i1*d2+j1*h2+k1*l2+l1*p2;_p[12]=m1*a2+n1*e2+o1*i2+p1*m2;_p[13]=m1*b2+n1*f2+o1*j2+p1*n2;_p[14]=m1*c2+n1*g2+o1*k2+p1*o2;_p[15]=m1*d2+n1*h2+o1*l2+p1*p2;this._identityCalculated=false;return this;}function isIdentity(){if(!this._identityCalculated){this._identity=!(this.props[0]!==1||this.props[1]!==0||this.props[2]!==0||this.props[3]!==0||this.props[4]!==0||this.props[5]!==1||this.props[6]!==0||this.props[7]!==0||this.props[8]!==0||this.props[9]!==0||this.props[10]!==1||this.props[11]!==0||this.props[12]!==0||this.props[13]!==0||this.props[14]!==0||this.props[15]!==1);this._identityCalculated=true;}return this._identity;}function equals(matr){var i=0;while(i<16){if(matr.props[i]!==this.props[i]){return false;}i+=1;}return true;}function clone(matr){var i;for(i=0;i<16;i+=1){matr.props[i]=this.props[i];}}function cloneFromProps(props){var i;for(i=0;i<16;i+=1){this.props[i]=props[i];}}function applyToPoint(x,y,z){return{x:x*this.props[0]+y*this.props[4]+z*this.props[8]+this.props[12],y:x*this.props[1]+y*this.props[5]+z*this.props[9]+this.props[13],z:x*this.props[2]+y*this.props[6]+z*this.props[10]+this.props[14]};/*return {
 x: x * me.a + y * me.c + me.e,
 y: x * me.b + y * me.d + me.f
 };*/}function applyToX(x,y,z){return x*this.props[0]+y*this.props[4]+z*this.props[8]+this.props[12];}function applyToY(x,y,z){return x*this.props[1]+y*this.props[5]+z*this.props[9]+this.props[13];}function applyToZ(x,y,z){return x*this.props[2]+y*this.props[6]+z*this.props[10]+this.props[14];}function getInverseMatrix(){var determinant=this.props[0]*this.props[5]-this.props[1]*this.props[4];var a=this.props[5]/determinant;var b=-this.props[1]/determinant;var c=-this.props[4]/determinant;var d=this.props[0]/determinant;var e=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/determinant;var f=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/determinant;var inverseMatrix=new Matrix();inverseMatrix.props[0]=a;inverseMatrix.props[1]=b;inverseMatrix.props[4]=c;inverseMatrix.props[5]=d;inverseMatrix.props[12]=e;inverseMatrix.props[13]=f;return inverseMatrix;}function inversePoint(pt){var inverseMatrix=this.getInverseMatrix();return inverseMatrix.applyToPointArray(pt[0],pt[1],pt[2]||0);}function inversePoints(pts){var i,len=pts.length,retPts=[];for(i=0;i<len;i+=1){retPts[i]=inversePoint(pts[i]);}return retPts;}function applyToTriplePoints(pt1,pt2,pt3){var arr=createTypedArray('float32',6);if(this.isIdentity()){arr[0]=pt1[0];arr[1]=pt1[1];arr[2]=pt2[0];arr[3]=pt2[1];arr[4]=pt3[0];arr[5]=pt3[1];}else{var p0=this.props[0],p1=this.props[1],p4=this.props[4],p5=this.props[5],p12=this.props[12],p13=this.props[13];arr[0]=pt1[0]*p0+pt1[1]*p4+p12;arr[1]=pt1[0]*p1+pt1[1]*p5+p13;arr[2]=pt2[0]*p0+pt2[1]*p4+p12;arr[3]=pt2[0]*p1+pt2[1]*p5+p13;arr[4]=pt3[0]*p0+pt3[1]*p4+p12;arr[5]=pt3[0]*p1+pt3[1]*p5+p13;}return arr;}function applyToPointArray(x,y,z){var arr;if(this.isIdentity()){arr=[x,y,z];}else{arr=[x*this.props[0]+y*this.props[4]+z*this.props[8]+this.props[12],x*this.props[1]+y*this.props[5]+z*this.props[9]+this.props[13],x*this.props[2]+y*this.props[6]+z*this.props[10]+this.props[14]];}return arr;}function applyToPointStringified(x,y){if(this.isIdentity()){return x+','+y;}var _p=this.props;return Math.round((x*_p[0]+y*_p[4]+_p[12])*100)/100+','+Math.round((x*_p[1]+y*_p[5]+_p[13])*100)/100;}function toCSS(){//Doesn't make much sense to add this optimization. If it is an identity matrix, it's very likely this will get called only once since it won't be keyframed.
/*if(this.isIdentity()) {
    return '';
}*/var i=0;var props=this.props;var cssValue='matrix3d(';var v=10000;while(i<16){cssValue+=_rnd(props[i]*v)/v;cssValue+=i===15?')':',';i+=1;}return cssValue;}function roundMatrixProperty(val){var v=10000;if(val<0.000001&&val>0||val>-0.000001&&val<0){return _rnd(val*v)/v;}return val;}function to2dCSS(){//Doesn't make much sense to add this optimization. If it is an identity matrix, it's very likely this will get called only once since it won't be keyframed.
/*if(this.isIdentity()) {
    return '';
}*/var props=this.props;var _a=roundMatrixProperty(props[0]);var _b=roundMatrixProperty(props[1]);var _c=roundMatrixProperty(props[4]);var _d=roundMatrixProperty(props[5]);var _e=roundMatrixProperty(props[12]);var _f=roundMatrixProperty(props[13]);return"matrix("+_a+','+_b+','+_c+','+_d+','+_e+','+_f+")";}return function(){this.reset=reset;this.rotate=rotate;this.rotateX=rotateX;this.rotateY=rotateY;this.rotateZ=rotateZ;this.skew=skew;this.skewFromAxis=skewFromAxis;this.shear=shear;this.scale=scale;this.setTransform=setTransform;this.translate=translate;this.transform=transform;this.applyToPoint=applyToPoint;this.applyToX=applyToX;this.applyToY=applyToY;this.applyToZ=applyToZ;this.applyToPointArray=applyToPointArray;this.applyToTriplePoints=applyToTriplePoints;this.applyToPointStringified=applyToPointStringified;this.toCSS=toCSS;this.to2dCSS=to2dCSS;this.clone=clone;this.cloneFromProps=cloneFromProps;this.equals=equals;this.inversePoints=inversePoints;this.inversePoint=inversePoint;this.getInverseMatrix=getInverseMatrix;this._t=this.transform;this.isIdentity=isIdentity;this._identity=true;this._identityCalculated=false;this.props=createTypedArray('float32',16);this.reset();};}();/*
Copyright 2014 David Bau.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/(function(pool,math){//
// The following constants are related to IEEE 754 limits.
//
var global=this,width=256,// each RC4 output is 0 <= x < 256
chunks=6,// at least six RC4 outputs for each double
digits=52,// there are 52 significant digits in a double
rngname='random',// rngname: name for Math.random and Math.seedrandom
startdenom=math.pow(width,chunks),significance=math.pow(2,digits),overflow=significance*2,mask=width-1,nodecrypto;// node.js crypto module, initialized at the bottom.
//
// seedrandom()
// This is the seedrandom function described above.
//
function seedrandom(seed,options,callback){var key=[];options=options===true?{entropy:true}:options||{};// Flatten the seed string or build one from local entropy if needed.
var shortseed=mixkey(flatten(options.entropy?[seed,tostring(pool)]:seed===null?autoseed():seed,3),key);// Use the seed to initialize an ARC4 generator.
var arc4=new ARC4(key);// This function returns a random double in [0, 1) that contains
// randomness in every bit of the mantissa of the IEEE 754 value.
var prng=function prng(){var n=arc4.g(chunks),// Start with a numerator n < 2 ^ 48
d=startdenom,//   and denominator d = 2 ^ 48.
x=0;//   and no 'extra last byte'.
while(n<significance){// Fill up all significant digits by
n=(n+x)*width;//   shifting numerator and
d*=width;//   denominator and generating a
x=arc4.g(1);//   new least-significant-byte.
}while(n>=overflow){// To avoid rounding up, before adding
n/=2;//   last byte, shift everything
d/=2;//   right using integer math until
x>>>=1;//   we have exactly the desired bits.
}return(n+x)/d;// Form the number within [0, 1).
};prng.int32=function(){return arc4.g(4)|0;};prng.quick=function(){return arc4.g(4)/0x100000000;};prng.double=prng;// Mix the randomness into accumulated entropy.
mixkey(tostring(arc4.S),pool);// Calling convention: what to return as a function of prng, seed, is_math.
return(options.pass||callback||function(prng,seed,is_math_call,state){if(state){// Load the arc4 state from the given state if it has an S array.
if(state.S){copy(state,arc4);}// Only provide the .state method if requested via options.state.
prng.state=function(){return copy(arc4,{});};}// If called as a method of Math (Math.seedrandom()), mutate
// Math.random because that is how seedrandom.js has worked since v1.0.
if(is_math_call){math[rngname]=prng;return seed;}// Otherwise, it is a newer calling convention, so return the
// prng directly.
else return prng;})(prng,shortseed,'global'in options?options.global:this==math,options.state);}math['seed'+rngname]=seedrandom;//
// ARC4
//
// An ARC4 implementation.  The constructor takes a key in the form of
// an array of at most (width) integers that should be 0 <= x < (width).
//
// The g(count) method returns a pseudorandom integer that concatenates
// the next (count) outputs from ARC4.  Its return value is a number x
// that is in the range 0 <= x < (width ^ count).
//
function ARC4(key){var t,keylen=key.length,me=this,i=0,j=me.i=me.j=0,s=me.S=[];// The empty key [] is treated as [0].
if(!keylen){key=[keylen++];}// Set up S using the standard key scheduling algorithm.
while(i<width){s[i]=i++;}for(i=0;i<width;i++){s[i]=s[j=mask&j+key[i%keylen]+(t=s[i])];s[j]=t;}// The "g" method returns the next (count) outputs as one number.
me.g=function(count){// Using instance members instead of closure state nearly doubles speed.
var t,r=0,i=me.i,j=me.j,s=me.S;while(count--){t=s[i=mask&i+1];r=r*width+s[mask&(s[i]=s[j=mask&j+t])+(s[j]=t)];}me.i=i;me.j=j;return r;// For robust unpredictability, the function call below automatically
// discards an initial batch of values.  This is called RC4-drop[256].
// See http://google.com/search?q=rsa+fluhrer+response&btnI
};}//
// copy()
// Copies internal state of ARC4 to or from a plain object.
//
function copy(f,t){t.i=f.i;t.j=f.j;t.S=f.S.slice();return t;}//
// flatten()
// Converts an object tree to nested arrays of strings.
//
function flatten(obj,depth){var result=[],typ=_typeof(obj),prop;if(depth&&typ=='object'){for(prop in obj){try{result.push(flatten(obj[prop],depth-1));}catch(e){}}}return result.length?result:typ=='string'?obj:obj+'\0';}//
// mixkey()
// Mixes a string seed into a key that is an array of integers, and
// returns a shortened string seed that is equivalent to the result key.
//
function mixkey(seed,key){var stringseed=seed+'',smear,j=0;while(j<stringseed.length){key[mask&j]=mask&(smear^=key[mask&j]*19)+stringseed.charCodeAt(j++);}return tostring(key);}//
// autoseed()
// Returns an object for autoseeding, using window.crypto and Node crypto
// module if available.
//
function autoseed(){try{if(nodecrypto){return tostring(nodecrypto.randomBytes(width));}var out=new Uint8Array(width);(global.crypto||global.msCrypto).getRandomValues(out);return tostring(out);}catch(e){var browser=global.navigator,plugins=browser&&browser.plugins;return[+new Date(),global,plugins,global.screen,tostring(pool)];}}//
// tostring()
// Converts an array of charcodes to a string
//
function tostring(a){return String.fromCharCode.apply(0,a);}//
// When seedrandom.js is loaded, we immediately mix a few bits
// from the built-in RNG into the entropy pool.  Because we do
// not want to interfere with deterministic PRNG state later,
// seedrandom will not call math.random on its own again after
// initialization.
//
mixkey(math.random(),pool);//
// Nodejs and AMD support: export the implementation as a module using
// either convention.
//
// End anonymous scope, and pass initial values.
})([],// pool: entropy pool starts empty
BMMath// math: package containing random, pow, and seedrandom
);var BezierFactory=function(){/**
         * BezierEasing - use bezier curve for transition easing function
         * by Gaëtan Renaudeau 2014 - 2015 – MIT License
         *
         * Credits: is based on Firefox's nsSMILKeySpline.cpp
         * Usage:
         * var spline = BezierEasing([ 0.25, 0.1, 0.25, 1.0 ])
         * spline.get(x) => returns the easing value | x must be in [0, 1] range
         *
         */var ob={};ob.getBezierEasing=getBezierEasing;var beziers={};function getBezierEasing(a,b,c,d,nm){var str=nm||('bez_'+a+'_'+b+'_'+c+'_'+d).replace(/\./g,'p');if(beziers[str]){return beziers[str];}var bezEasing=new BezierEasing([a,b,c,d]);beziers[str]=bezEasing;return bezEasing;}// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS=4;var NEWTON_MIN_SLOPE=0.001;var SUBDIVISION_PRECISION=0.0000001;var SUBDIVISION_MAX_ITERATIONS=10;var kSplineTableSize=11;var kSampleStepSize=1.0/(kSplineTableSize-1.0);var float32ArraySupported=typeof Float32Array==="function";function A(aA1,aA2){return 1.0-3.0*aA2+3.0*aA1;}function B(aA1,aA2){return 3.0*aA2-6.0*aA1;}function C(aA1){return 3.0*aA1;}// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier(aT,aA1,aA2){return((A(aA1,aA2)*aT+B(aA1,aA2))*aT+C(aA1))*aT;}// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope(aT,aA1,aA2){return 3.0*A(aA1,aA2)*aT*aT+2.0*B(aA1,aA2)*aT+C(aA1);}function binarySubdivide(aX,aA,aB,mX1,mX2){var currentX,currentT,i=0;do{currentT=aA+(aB-aA)/2.0;currentX=calcBezier(currentT,mX1,mX2)-aX;if(currentX>0.0){aB=currentT;}else{aA=currentT;}}while(Math.abs(currentX)>SUBDIVISION_PRECISION&&++i<SUBDIVISION_MAX_ITERATIONS);return currentT;}function newtonRaphsonIterate(aX,aGuessT,mX1,mX2){for(var i=0;i<NEWTON_ITERATIONS;++i){var currentSlope=getSlope(aGuessT,mX1,mX2);if(currentSlope===0.0)return aGuessT;var currentX=calcBezier(aGuessT,mX1,mX2)-aX;aGuessT-=currentX/currentSlope;}return aGuessT;}/**
         * points is an array of [ mX1, mY1, mX2, mY2 ]
         */function BezierEasing(points){this._p=points;this._mSampleValues=float32ArraySupported?new Float32Array(kSplineTableSize):new Array(kSplineTableSize);this._precomputed=false;this.get=this.get.bind(this);}BezierEasing.prototype={get:function get(x){var mX1=this._p[0],mY1=this._p[1],mX2=this._p[2],mY2=this._p[3];if(!this._precomputed)this._precompute();if(mX1===mY1&&mX2===mY2)return x;// linear
// Because JavaScript number are imprecise, we should guarantee the extremes are right.
if(x===0)return 0;if(x===1)return 1;return calcBezier(this._getTForX(x),mY1,mY2);},// Private part
_precompute:function _precompute(){var mX1=this._p[0],mY1=this._p[1],mX2=this._p[2],mY2=this._p[3];this._precomputed=true;if(mX1!==mY1||mX2!==mY2)this._calcSampleValues();},_calcSampleValues:function _calcSampleValues(){var mX1=this._p[0],mX2=this._p[2];for(var i=0;i<kSplineTableSize;++i){this._mSampleValues[i]=calcBezier(i*kSampleStepSize,mX1,mX2);}},/**
             * getTForX chose the fastest heuristic to determine the percentage value precisely from a given X projection.
             */_getTForX:function _getTForX(aX){var mX1=this._p[0],mX2=this._p[2],mSampleValues=this._mSampleValues;var intervalStart=0.0;var currentSample=1;var lastSample=kSplineTableSize-1;for(;currentSample!==lastSample&&mSampleValues[currentSample]<=aX;++currentSample){intervalStart+=kSampleStepSize;}--currentSample;// Interpolate to provide an initial guess for t
var dist=(aX-mSampleValues[currentSample])/(mSampleValues[currentSample+1]-mSampleValues[currentSample]);var guessForT=intervalStart+dist*kSampleStepSize;var initialSlope=getSlope(guessForT,mX1,mX2);if(initialSlope>=NEWTON_MIN_SLOPE){return newtonRaphsonIterate(aX,guessForT,mX1,mX2);}else if(initialSlope===0.0){return guessForT;}else{return binarySubdivide(aX,intervalStart,intervalStart+kSampleStepSize,mX1,mX2);}}};return ob;}();(function(){var lastTime=0;var vendors=['ms','moz','webkit','o'];for(var x=0;x<vendors.length&&!window.requestAnimationFrame;++x){window.requestAnimationFrame=window[vendors[x]+'RequestAnimationFrame'];window.cancelAnimationFrame=window[vendors[x]+'CancelAnimationFrame']||window[vendors[x]+'CancelRequestAnimationFrame'];}if(!window.requestAnimationFrame)window.requestAnimationFrame=function(callback,element){var currTime=new Date().getTime();var timeToCall=Math.max(0,16-(currTime-lastTime));var id=setTimeout(function(){callback(currTime+timeToCall);},timeToCall);lastTime=currTime+timeToCall;return id;};if(!window.cancelAnimationFrame)window.cancelAnimationFrame=function(id){clearTimeout(id);};})();function extendPrototype(sources,destination){var i,len=sources.length,sourcePrototype;for(i=0;i<len;i+=1){sourcePrototype=sources[i].prototype;for(var attr in sourcePrototype){if(sourcePrototype.hasOwnProperty(attr))destination.prototype[attr]=sourcePrototype[attr];}}}function getDescriptor(object,prop){return Object.getOwnPropertyDescriptor(object,prop);}function createProxyFunction(prototype){function ProxyFunction(){}ProxyFunction.prototype=prototype;return ProxyFunction;}function bezFunction(){var easingFunctions=[];var math=Math;function pointOnLine2D(x1,y1,x2,y2,x3,y3){var det1=x1*y2+y1*x3+x2*y3-x3*y2-y3*x1-x2*y1;return det1>-0.001&&det1<0.001;}function pointOnLine3D(x1,y1,z1,x2,y2,z2,x3,y3,z3){if(z1===0&&z2===0&&z3===0){return pointOnLine2D(x1,y1,x2,y2,x3,y3);}var dist1=Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2)+Math.pow(z2-z1,2));var dist2=Math.sqrt(Math.pow(x3-x1,2)+Math.pow(y3-y1,2)+Math.pow(z3-z1,2));var dist3=Math.sqrt(Math.pow(x3-x2,2)+Math.pow(y3-y2,2)+Math.pow(z3-z2,2));var diffDist;if(dist1>dist2){if(dist1>dist3){diffDist=dist1-dist2-dist3;}else{diffDist=dist3-dist2-dist1;}}else if(dist3>dist2){diffDist=dist3-dist2-dist1;}else{diffDist=dist2-dist1-dist3;}return diffDist>-0.0001&&diffDist<0.0001;}var getBezierLength=function(){return function(pt1,pt2,pt3,pt4){var curveSegments=defaultCurveSegments;var k;var i,len;var ptCoord,perc,addedLength=0;var ptDistance;var point=[],lastPoint=[];var lengthData=bezier_length_pool.newElement();len=pt3.length;for(k=0;k<curveSegments;k+=1){perc=k/(curveSegments-1);ptDistance=0;for(i=0;i<len;i+=1){ptCoord=bm_pow(1-perc,3)*pt1[i]+3*bm_pow(1-perc,2)*perc*pt3[i]+3*(1-perc)*bm_pow(perc,2)*pt4[i]+bm_pow(perc,3)*pt2[i];point[i]=ptCoord;if(lastPoint[i]!==null){ptDistance+=bm_pow(point[i]-lastPoint[i],2);}lastPoint[i]=point[i];}if(ptDistance){ptDistance=bm_sqrt(ptDistance);addedLength+=ptDistance;}lengthData.percents[k]=perc;lengthData.lengths[k]=addedLength;}lengthData.addedLength=addedLength;return lengthData;};}();function getSegmentsLength(shapeData){var segmentsLength=segments_length_pool.newElement();var closed=shapeData.c;var pathV=shapeData.v;var pathO=shapeData.o;var pathI=shapeData.i;var i,len=shapeData._length;var lengths=segmentsLength.lengths;var totalLength=0;for(i=0;i<len-1;i+=1){lengths[i]=getBezierLength(pathV[i],pathV[i+1],pathO[i],pathI[i+1]);totalLength+=lengths[i].addedLength;}if(closed&&len){lengths[i]=getBezierLength(pathV[i],pathV[0],pathO[i],pathI[0]);totalLength+=lengths[i].addedLength;}segmentsLength.totalLength=totalLength;return segmentsLength;}function BezierData(length){this.segmentLength=0;this.points=new Array(length);}function PointData(partial,point){this.partialLength=partial;this.point=point;}var buildBezierData=function(){var storedData={};return function(pt1,pt2,pt3,pt4){var bezierName=(pt1[0]+'_'+pt1[1]+'_'+pt2[0]+'_'+pt2[1]+'_'+pt3[0]+'_'+pt3[1]+'_'+pt4[0]+'_'+pt4[1]).replace(/\./g,'p');if(!storedData[bezierName]){var curveSegments=defaultCurveSegments;var k,i,len;var ptCoord,perc,addedLength=0;var ptDistance;var point,lastPoint=null;if(pt1.length===2&&(pt1[0]!=pt2[0]||pt1[1]!=pt2[1])&&pointOnLine2D(pt1[0],pt1[1],pt2[0],pt2[1],pt1[0]+pt3[0],pt1[1]+pt3[1])&&pointOnLine2D(pt1[0],pt1[1],pt2[0],pt2[1],pt2[0]+pt4[0],pt2[1]+pt4[1])){curveSegments=2;}var bezierData=new BezierData(curveSegments);len=pt3.length;for(k=0;k<curveSegments;k+=1){point=createSizedArray(len);perc=k/(curveSegments-1);ptDistance=0;for(i=0;i<len;i+=1){ptCoord=bm_pow(1-perc,3)*pt1[i]+3*bm_pow(1-perc,2)*perc*(pt1[i]+pt3[i])+3*(1-perc)*bm_pow(perc,2)*(pt2[i]+pt4[i])+bm_pow(perc,3)*pt2[i];point[i]=ptCoord;if(lastPoint!==null){ptDistance+=bm_pow(point[i]-lastPoint[i],2);}}ptDistance=bm_sqrt(ptDistance);addedLength+=ptDistance;bezierData.points[k]=new PointData(ptDistance,point);lastPoint=point;}bezierData.segmentLength=addedLength;storedData[bezierName]=bezierData;}return storedData[bezierName];};}();function getDistancePerc(perc,bezierData){var percents=bezierData.percents;var lengths=bezierData.lengths;var len=percents.length;var initPos=bm_floor((len-1)*perc);var lengthPos=perc*bezierData.addedLength;var lPerc=0;if(initPos===len-1||initPos===0||lengthPos===lengths[initPos]){return percents[initPos];}else{var dir=lengths[initPos]>lengthPos?-1:1;var flag=true;while(flag){if(lengths[initPos]<=lengthPos&&lengths[initPos+1]>lengthPos){lPerc=(lengthPos-lengths[initPos])/(lengths[initPos+1]-lengths[initPos]);flag=false;}else{initPos+=dir;}if(initPos<0||initPos>=len-1){//FIX for TypedArrays that don't store floating point values with enough accuracy
if(initPos===len-1){return percents[initPos];}flag=false;}}return percents[initPos]+(percents[initPos+1]-percents[initPos])*lPerc;}}function getPointInSegment(pt1,pt2,pt3,pt4,percent,bezierData){var t1=getDistancePerc(percent,bezierData);var u0=1;var u1=1-t1;var ptX=Math.round((u1*u1*u1*pt1[0]+(t1*u1*u1+u1*t1*u1+u1*u1*t1)*pt3[0]+(t1*t1*u1+u1*t1*t1+t1*u1*t1)*pt4[0]+t1*t1*t1*pt2[0])*1000)/1000;var ptY=Math.round((u1*u1*u1*pt1[1]+(t1*u1*u1+u1*t1*u1+u1*u1*t1)*pt3[1]+(t1*t1*u1+u1*t1*t1+t1*u1*t1)*pt4[1]+t1*t1*t1*pt2[1])*1000)/1000;return[ptX,ptY];}function getSegmentArray(){}var bezier_segment_points=createTypedArray('float32',8);function getNewSegment(pt1,pt2,pt3,pt4,startPerc,endPerc,bezierData){startPerc=startPerc<0?0:startPerc>1?1:startPerc;var t0=getDistancePerc(startPerc,bezierData);endPerc=endPerc>1?1:endPerc;var t1=getDistancePerc(endPerc,bezierData);var i,len=pt1.length;var u0=1-t0;var u1=1-t1;var u0u0u0=u0*u0*u0;var t0u0u0_3=t0*u0*u0*3;var t0t0u0_3=t0*t0*u0*3;var t0t0t0=t0*t0*t0;//
var u0u0u1=u0*u0*u1;var t0u0u1_3=t0*u0*u1+u0*t0*u1+u0*u0*t1;var t0t0u1_3=t0*t0*u1+u0*t0*t1+t0*u0*t1;var t0t0t1=t0*t0*t1;//
var u0u1u1=u0*u1*u1;var t0u1u1_3=t0*u1*u1+u0*t1*u1+u0*u1*t1;var t0t1u1_3=t0*t1*u1+u0*t1*t1+t0*u1*t1;var t0t1t1=t0*t1*t1;//
var u1u1u1=u1*u1*u1;var t1u1u1_3=t1*u1*u1+u1*t1*u1+u1*u1*t1;var t1t1u1_3=t1*t1*u1+u1*t1*t1+t1*u1*t1;var t1t1t1=t1*t1*t1;for(i=0;i<len;i+=1){bezier_segment_points[i*4]=Math.round((u0u0u0*pt1[i]+t0u0u0_3*pt3[i]+t0t0u0_3*pt4[i]+t0t0t0*pt2[i])*1000)/1000;bezier_segment_points[i*4+1]=Math.round((u0u0u1*pt1[i]+t0u0u1_3*pt3[i]+t0t0u1_3*pt4[i]+t0t0t1*pt2[i])*1000)/1000;bezier_segment_points[i*4+2]=Math.round((u0u1u1*pt1[i]+t0u1u1_3*pt3[i]+t0t1u1_3*pt4[i]+t0t1t1*pt2[i])*1000)/1000;bezier_segment_points[i*4+3]=Math.round((u1u1u1*pt1[i]+t1u1u1_3*pt3[i]+t1t1u1_3*pt4[i]+t1t1t1*pt2[i])*1000)/1000;}return bezier_segment_points;}return{getSegmentsLength:getSegmentsLength,getNewSegment:getNewSegment,getPointInSegment:getPointInSegment,buildBezierData:buildBezierData,pointOnLine2D:pointOnLine2D,pointOnLine3D:pointOnLine3D};}var bez=bezFunction();function dataFunctionManager(){//var tCanvasHelper = createTag('canvas').getContext('2d');
function completeLayers(layers,comps,fontManager){var layerData;var animArray,lastFrame;var i,len=layers.length;var j,jLen,k,kLen;for(i=0;i<len;i+=1){layerData=layers[i];if(!('ks'in layerData)||layerData.completed){continue;}layerData.completed=true;if(layerData.tt){layers[i-1].td=layerData.tt;}animArray=[];lastFrame=-1;if(layerData.hasMask){var maskProps=layerData.masksProperties;jLen=maskProps.length;for(j=0;j<jLen;j+=1){if(maskProps[j].pt.k.i){convertPathsToAbsoluteValues(maskProps[j].pt.k);}else{kLen=maskProps[j].pt.k.length;for(k=0;k<kLen;k+=1){if(maskProps[j].pt.k[k].s){convertPathsToAbsoluteValues(maskProps[j].pt.k[k].s[0]);}if(maskProps[j].pt.k[k].e){convertPathsToAbsoluteValues(maskProps[j].pt.k[k].e[0]);}}}}}if(layerData.ty===0){layerData.layers=findCompLayers(layerData.refId,comps);completeLayers(layerData.layers,comps,fontManager);}else if(layerData.ty===4){completeShapes(layerData.shapes);}else if(layerData.ty==5){completeText(layerData,fontManager);}}}function findCompLayers(id,comps){var i=0,len=comps.length;while(i<len){if(comps[i].id===id){if(!comps[i].layers.__used){comps[i].layers.__used=true;return comps[i].layers;}return JSON.parse(JSON.stringify(comps[i].layers));}i+=1;}}function completeShapes(arr){var i,len=arr.length;var j,jLen;var hasPaths=false;for(i=len-1;i>=0;i-=1){if(arr[i].ty=='sh'){if(arr[i].ks.k.i){convertPathsToAbsoluteValues(arr[i].ks.k);}else{jLen=arr[i].ks.k.length;for(j=0;j<jLen;j+=1){if(arr[i].ks.k[j].s){convertPathsToAbsoluteValues(arr[i].ks.k[j].s[0]);}if(arr[i].ks.k[j].e){convertPathsToAbsoluteValues(arr[i].ks.k[j].e[0]);}}}hasPaths=true;}else if(arr[i].ty=='gr'){completeShapes(arr[i].it);}}/*if(hasPaths){
    //mx: distance
    //ss: sensitivity
    //dc: decay
    arr.splice(arr.length-1,0,{
        "ty": "ms",
        "mx":20,
        "ss":10,
         "dc":0.001,
        "maxDist":200
    });
}*/}function convertPathsToAbsoluteValues(path){var i,len=path.i.length;for(i=0;i<len;i+=1){path.i[i][0]+=path.v[i][0];path.i[i][1]+=path.v[i][1];path.o[i][0]+=path.v[i][0];path.o[i][1]+=path.v[i][1];}}function checkVersion(minimum,animVersionString){var animVersion=animVersionString?animVersionString.split('.'):[100,100,100];if(minimum[0]>animVersion[0]){return true;}else if(animVersion[0]>minimum[0]){return false;}if(minimum[1]>animVersion[1]){return true;}else if(animVersion[1]>minimum[1]){return false;}if(minimum[2]>animVersion[2]){return true;}else if(animVersion[2]>minimum[2]){return false;}}var checkText=function(){var minimumVersion=[4,4,14];function updateTextLayer(textLayer){var documentData=textLayer.t.d;textLayer.t.d={k:[{s:documentData,t:0}]};}function iterateLayers(layers){var i,len=layers.length;for(i=0;i<len;i+=1){if(layers[i].ty===5){updateTextLayer(layers[i]);}}}return function(animationData){if(checkVersion(minimumVersion,animationData.v)){iterateLayers(animationData.layers);if(animationData.assets){var i,len=animationData.assets.length;for(i=0;i<len;i+=1){if(animationData.assets[i].layers){iterateLayers(animationData.assets[i].layers);}}}}};}();var checkChars=function(){var minimumVersion=[4,7,99];return function(animationData){if(animationData.chars&&!checkVersion(minimumVersion,animationData.v)){var i,len=animationData.chars.length,j,jLen,k,kLen;var pathData,paths;for(i=0;i<len;i+=1){if(animationData.chars[i].data&&animationData.chars[i].data.shapes){paths=animationData.chars[i].data.shapes[0].it;jLen=paths.length;for(j=0;j<jLen;j+=1){pathData=paths[j].ks.k;if(!pathData.__converted){convertPathsToAbsoluteValues(paths[j].ks.k);pathData.__converted=true;}}}}}};}();var checkColors=function(){var minimumVersion=[4,1,9];function iterateShapes(shapes){var i,len=shapes.length;var j,jLen;for(i=0;i<len;i+=1){if(shapes[i].ty==='gr'){iterateShapes(shapes[i].it);}else if(shapes[i].ty==='fl'||shapes[i].ty==='st'){if(shapes[i].c.k&&shapes[i].c.k[0].i){jLen=shapes[i].c.k.length;for(j=0;j<jLen;j+=1){if(shapes[i].c.k[j].s){shapes[i].c.k[j].s[0]/=255;shapes[i].c.k[j].s[1]/=255;shapes[i].c.k[j].s[2]/=255;shapes[i].c.k[j].s[3]/=255;}if(shapes[i].c.k[j].e){shapes[i].c.k[j].e[0]/=255;shapes[i].c.k[j].e[1]/=255;shapes[i].c.k[j].e[2]/=255;shapes[i].c.k[j].e[3]/=255;}}}else{shapes[i].c.k[0]/=255;shapes[i].c.k[1]/=255;shapes[i].c.k[2]/=255;shapes[i].c.k[3]/=255;}}}}function iterateLayers(layers){var i,len=layers.length;for(i=0;i<len;i+=1){if(layers[i].ty===4){iterateShapes(layers[i].shapes);}}}return function(animationData){if(checkVersion(minimumVersion,animationData.v)){iterateLayers(animationData.layers);if(animationData.assets){var i,len=animationData.assets.length;for(i=0;i<len;i+=1){if(animationData.assets[i].layers){iterateLayers(animationData.assets[i].layers);}}}}};}();var checkShapes=function(){var minimumVersion=[4,4,18];function completeShapes(arr){var i,len=arr.length;var j,jLen;var hasPaths=false;for(i=len-1;i>=0;i-=1){if(arr[i].ty=='sh'){if(arr[i].ks.k.i){arr[i].ks.k.c=arr[i].closed;}else{jLen=arr[i].ks.k.length;for(j=0;j<jLen;j+=1){if(arr[i].ks.k[j].s){arr[i].ks.k[j].s[0].c=arr[i].closed;}if(arr[i].ks.k[j].e){arr[i].ks.k[j].e[0].c=arr[i].closed;}}}hasPaths=true;}else if(arr[i].ty=='gr'){completeShapes(arr[i].it);}}}function iterateLayers(layers){var layerData;var i,len=layers.length;var j,jLen,k,kLen;for(i=0;i<len;i+=1){layerData=layers[i];if(layerData.hasMask){var maskProps=layerData.masksProperties;jLen=maskProps.length;for(j=0;j<jLen;j+=1){if(maskProps[j].pt.k.i){maskProps[j].pt.k.c=maskProps[j].cl;}else{kLen=maskProps[j].pt.k.length;for(k=0;k<kLen;k+=1){if(maskProps[j].pt.k[k].s){maskProps[j].pt.k[k].s[0].c=maskProps[j].cl;}if(maskProps[j].pt.k[k].e){maskProps[j].pt.k[k].e[0].c=maskProps[j].cl;}}}}}if(layerData.ty===4){completeShapes(layerData.shapes);}}}return function(animationData){if(checkVersion(minimumVersion,animationData.v)){iterateLayers(animationData.layers);if(animationData.assets){var i,len=animationData.assets.length;for(i=0;i<len;i+=1){if(animationData.assets[i].layers){iterateLayers(animationData.assets[i].layers);}}}}};}();function completeData(animationData,fontManager){if(animationData.__complete){return;}checkColors(animationData);checkText(animationData);checkChars(animationData);checkShapes(animationData);completeLayers(animationData.layers,animationData.assets,fontManager);animationData.__complete=true;//blitAnimation(animationData, animationData.assets, fontManager);
}function completeText(data,fontManager){if(data.t.a.length===0&&!('m'in data.t.p)){data.singleShape=true;}}var moduleOb={};moduleOb.completeData=completeData;moduleOb.checkColors=checkColors;moduleOb.checkChars=checkChars;moduleOb.checkShapes=checkShapes;moduleOb.completeLayers=completeLayers;return moduleOb;}var dataManager=dataFunctionManager();var FontManager=function(){var maxWaitingTime=5000;var emptyChar={w:0,size:0,shapes:[]};var combinedCharacters=[];//Hindi characters
combinedCharacters=combinedCharacters.concat([2304,2305,2306,2307,2362,2363,2364,2364,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2387,2388,2389,2390,2391,2402,2403]);function trimFontOptions(font){var familyArray=font.split(',');var i,len=familyArray.length;var enabledFamilies=[];for(i=0;i<len;i+=1){if(familyArray[i]!=='sans-serif'&&familyArray[i]!=='monospace'){enabledFamilies.push(familyArray[i]);}}return enabledFamilies.join(',');}function setUpNode(font,family){var parentNode=createTag('span');parentNode.style.fontFamily=family;var node=createTag('span');// Characters that vary significantly among different fonts
node.innerHTML='giItT1WQy@!-/#';// Visible - so we can measure it - but not on the screen
parentNode.style.position='absolute';parentNode.style.left='-10000px';parentNode.style.top='-10000px';// Large font size makes even subtle changes obvious
parentNode.style.fontSize='300px';// Reset any font properties
parentNode.style.fontVariant='normal';parentNode.style.fontStyle='normal';parentNode.style.fontWeight='normal';parentNode.style.letterSpacing='0';parentNode.appendChild(node);document.body.appendChild(parentNode);// Remember width with no applied web font
var width=node.offsetWidth;node.style.fontFamily=trimFontOptions(font)+', '+family;return{node:node,w:width,parent:parentNode};}function checkLoadedFonts(){var i,len=this.fonts.length;var node,w;var loadedCount=len;for(i=0;i<len;i+=1){if(this.fonts[i].loaded){loadedCount-=1;continue;}if(this.fonts[i].fOrigin==='n'||this.fonts[i].origin===0){this.fonts[i].loaded=true;}else{node=this.fonts[i].monoCase.node;w=this.fonts[i].monoCase.w;if(node.offsetWidth!==w){loadedCount-=1;this.fonts[i].loaded=true;}else{node=this.fonts[i].sansCase.node;w=this.fonts[i].sansCase.w;if(node.offsetWidth!==w){loadedCount-=1;this.fonts[i].loaded=true;}}if(this.fonts[i].loaded){this.fonts[i].sansCase.parent.parentNode.removeChild(this.fonts[i].sansCase.parent);this.fonts[i].monoCase.parent.parentNode.removeChild(this.fonts[i].monoCase.parent);}}}if(loadedCount!==0&&Date.now()-this.initTime<maxWaitingTime){setTimeout(this.checkLoadedFontsBinded,20);}else{setTimeout(this.setIsLoadedBinded,10);}}function createHelper(def,fontData){var tHelper=createNS('text');tHelper.style.fontSize='100px';//tHelper.style.fontFamily = fontData.fFamily;
tHelper.setAttribute('font-family',fontData.fFamily);tHelper.setAttribute('font-style',fontData.fStyle);tHelper.setAttribute('font-weight',fontData.fWeight);tHelper.textContent='1';if(fontData.fClass){tHelper.style.fontFamily='inherit';tHelper.setAttribute('class',fontData.fClass);}else{tHelper.style.fontFamily=fontData.fFamily;}def.appendChild(tHelper);var tCanvasHelper=createTag('canvas').getContext('2d');tCanvasHelper.font=fontData.fWeight+' '+fontData.fStyle+' 100px '+fontData.fFamily;//tCanvasHelper.font = ' 100px '+ fontData.fFamily;
return tHelper;}function addFonts(fontData,defs){if(!fontData){this.isLoaded=true;return;}if(this.chars){this.isLoaded=true;this.fonts=fontData.list;return;}var fontArr=fontData.list;var i,len=fontArr.length;var _pendingFonts=len;for(i=0;i<len;i+=1){var shouldLoadFont=true;var loadedSelector;var j;fontArr[i].loaded=false;fontArr[i].monoCase=setUpNode(fontArr[i].fFamily,'monospace');fontArr[i].sansCase=setUpNode(fontArr[i].fFamily,'sans-serif');if(!fontArr[i].fPath){fontArr[i].loaded=true;_pendingFonts-=1;}else if(fontArr[i].fOrigin==='p'||fontArr[i].origin===3){loadedSelector=document.querySelectorAll('style[f-forigin="p"][f-family="'+fontArr[i].fFamily+'"], style[f-origin="3"][f-family="'+fontArr[i].fFamily+'"]');if(loadedSelector.length>0){shouldLoadFont=false;}if(shouldLoadFont){var s=createTag('style');s.setAttribute('f-forigin',fontArr[i].fOrigin);s.setAttribute('f-origin',fontArr[i].origin);s.setAttribute('f-family',fontArr[i].fFamily);s.type="text/css";s.innerHTML="@font-face {"+"font-family: "+fontArr[i].fFamily+"; font-style: normal; src: url('"+fontArr[i].fPath+"');}";defs.appendChild(s);}}else if(fontArr[i].fOrigin==='g'||fontArr[i].origin===1){loadedSelector=document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]');for(j=0;j<loadedSelector.length;j++){if(loadedSelector[j].href.indexOf(fontArr[i].fPath)!==-1){// Font is already loaded
shouldLoadFont=false;}}if(shouldLoadFont){var l=createTag('link');l.setAttribute('f-forigin',fontArr[i].fOrigin);l.setAttribute('f-origin',fontArr[i].origin);l.type="text/css";l.rel="stylesheet";l.href=fontArr[i].fPath;document.body.appendChild(l);}}else if(fontArr[i].fOrigin==='t'||fontArr[i].origin===2){loadedSelector=document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]');for(j=0;j<loadedSelector.length;j++){if(fontArr[i].fPath===loadedSelector[j].src){// Font is already loaded
shouldLoadFont=false;}}if(shouldLoadFont){var sc=createTag('link');sc.setAttribute('f-forigin',fontArr[i].fOrigin);sc.setAttribute('f-origin',fontArr[i].origin);sc.setAttribute('rel','stylesheet');sc.setAttribute('href',fontArr[i].fPath);defs.appendChild(sc);}}fontArr[i].helper=createHelper(defs,fontArr[i]);fontArr[i].cache={};this.fonts.push(fontArr[i]);}if(_pendingFonts===0){this.isLoaded=true;}else{//On some cases even if the font is loaded, it won't load correctly when measuring text on canvas.
//Adding this timeout seems to fix it
setTimeout(this.checkLoadedFonts.bind(this),100);}}function addChars(chars){if(!chars){return;}if(!this.chars){this.chars=[];}var i,len=chars.length;var j,jLen=this.chars.length,found;for(i=0;i<len;i+=1){j=0;found=false;while(j<jLen){if(this.chars[j].style===chars[i].style&&this.chars[j].fFamily===chars[i].fFamily&&this.chars[j].ch===chars[i].ch){found=true;}j+=1;}if(!found){this.chars.push(chars[i]);jLen+=1;}}}function getCharData(char,style,font){var i=0,len=this.chars.length;while(i<len){if(this.chars[i].ch===char&&this.chars[i].style===style&&this.chars[i].fFamily===font){return this.chars[i];}i+=1;}if((typeof char==='string'&&char.charCodeAt(0)!==13||!char)&&console&&console.warn){console.warn('Missing character from exported characters list: ',char,style,font);}return emptyChar;}function measureText(char,fontName,size){var fontData=this.getFontByName(fontName);var index=char.charCodeAt(0);if(!fontData.cache[index+1]){var tHelper=fontData.helper;//Canvas version
//fontData.cache[index] = tHelper.measureText(char).width / 100;
//SVG version
//console.log(tHelper.getBBox().width)
if(char===' '){tHelper.textContent='|'+char+'|';var doubleSize=tHelper.getComputedTextLength();tHelper.textContent='||';var singleSize=tHelper.getComputedTextLength();fontData.cache[index+1]=(doubleSize-singleSize)/100;}else{tHelper.textContent=char;fontData.cache[index+1]=tHelper.getComputedTextLength()/100;}}return fontData.cache[index+1]*size;}function getFontByName(name){var i=0,len=this.fonts.length;while(i<len){if(this.fonts[i].fName===name){return this.fonts[i];}i+=1;}return this.fonts[0];}function getCombinedCharacterCodes(){return combinedCharacters;}function setIsLoaded(){this.isLoaded=true;}var Font=function Font(){this.fonts=[];this.chars=null;this.typekitLoaded=0;this.isLoaded=false;this.initTime=Date.now();this.setIsLoadedBinded=this.setIsLoaded.bind(this);this.checkLoadedFontsBinded=this.checkLoadedFonts.bind(this);};//TODO: for now I'm adding these methods to the Class and not the prototype. Think of a better way to implement it.
Font.getCombinedCharacterCodes=getCombinedCharacterCodes;var fontPrototype={addChars:addChars,addFonts:addFonts,getCharData:getCharData,getFontByName:getFontByName,measureText:measureText,checkLoadedFonts:checkLoadedFonts,setIsLoaded:setIsLoaded};Font.prototype=fontPrototype;return Font;}();var PropertyFactory=function(){var initFrame=initialDefaultFrame;var math_abs=Math.abs;function interpolateValue(frameNum,caching){var offsetTime=this.offsetTime;var newValue;if(this.propType==='multidimensional'){newValue=createTypedArray('float32',this.pv.length);}var iterationIndex=caching.lastIndex;var i=iterationIndex;var len=this.keyframes.length-1,flag=true;var keyData,nextKeyData;while(flag){keyData=this.keyframes[i];nextKeyData=this.keyframes[i+1];if(i===len-1&&frameNum>=nextKeyData.t-offsetTime){if(keyData.h){keyData=nextKeyData;}iterationIndex=0;break;}if(nextKeyData.t-offsetTime>frameNum){iterationIndex=i;break;}if(i<len-1){i+=1;}else{iterationIndex=0;flag=false;}}var k,kLen,perc,jLen,j,fnc;var nextKeyTime=nextKeyData.t-offsetTime;var keyTime=keyData.t-offsetTime;var endValue;if(keyData.to){if(!keyData.bezierData){keyData.bezierData=bez.buildBezierData(keyData.s,nextKeyData.s||keyData.e,keyData.to,keyData.ti);}var bezierData=keyData.bezierData;if(frameNum>=nextKeyTime||frameNum<keyTime){var ind=frameNum>=nextKeyTime?bezierData.points.length-1:0;kLen=bezierData.points[ind].point.length;for(k=0;k<kLen;k+=1){newValue[k]=bezierData.points[ind].point[k];}// caching._lastKeyframeIndex = -1;
}else{if(keyData.__fnct){fnc=keyData.__fnct;}else{fnc=BezierFactory.getBezierEasing(keyData.o.x,keyData.o.y,keyData.i.x,keyData.i.y,keyData.n).get;keyData.__fnct=fnc;}perc=fnc((frameNum-keyTime)/(nextKeyTime-keyTime));var distanceInLine=bezierData.segmentLength*perc;var segmentPerc;var addedLength=caching.lastFrame<frameNum&&caching._lastKeyframeIndex===i?caching._lastAddedLength:0;j=caching.lastFrame<frameNum&&caching._lastKeyframeIndex===i?caching._lastPoint:0;flag=true;jLen=bezierData.points.length;while(flag){addedLength+=bezierData.points[j].partialLength;if(distanceInLine===0||perc===0||j===bezierData.points.length-1){kLen=bezierData.points[j].point.length;for(k=0;k<kLen;k+=1){newValue[k]=bezierData.points[j].point[k];}break;}else if(distanceInLine>=addedLength&&distanceInLine<addedLength+bezierData.points[j+1].partialLength){segmentPerc=(distanceInLine-addedLength)/bezierData.points[j+1].partialLength;kLen=bezierData.points[j].point.length;for(k=0;k<kLen;k+=1){newValue[k]=bezierData.points[j].point[k]+(bezierData.points[j+1].point[k]-bezierData.points[j].point[k])*segmentPerc;}break;}if(j<jLen-1){j+=1;}else{flag=false;}}caching._lastPoint=j;caching._lastAddedLength=addedLength-bezierData.points[j].partialLength;caching._lastKeyframeIndex=i;}}else{var outX,outY,inX,inY,keyValue;len=keyData.s.length;endValue=nextKeyData.s||keyData.e;if(this.sh&&keyData.h!==1){if(frameNum>=nextKeyTime){newValue[0]=endValue[0];newValue[1]=endValue[1];newValue[2]=endValue[2];}else if(frameNum<=keyTime){newValue[0]=keyData.s[0];newValue[1]=keyData.s[1];newValue[2]=keyData.s[2];}else{var quatStart=createQuaternion(keyData.s);var quatEnd=createQuaternion(endValue);var time=(frameNum-keyTime)/(nextKeyTime-keyTime);quaternionToEuler(newValue,slerp(quatStart,quatEnd,time));}}else{for(i=0;i<len;i+=1){if(keyData.h!==1){if(frameNum>=nextKeyTime){perc=1;}else if(frameNum<keyTime){perc=0;}else{if(keyData.o.x.constructor===Array){if(!keyData.__fnct){keyData.__fnct=[];}if(!keyData.__fnct[i]){outX=typeof keyData.o.x[i]==='undefined'?keyData.o.x[0]:keyData.o.x[i];outY=typeof keyData.o.y[i]==='undefined'?keyData.o.y[0]:keyData.o.y[i];inX=typeof keyData.i.x[i]==='undefined'?keyData.i.x[0]:keyData.i.x[i];inY=typeof keyData.i.y[i]==='undefined'?keyData.i.y[0]:keyData.i.y[i];fnc=BezierFactory.getBezierEasing(outX,outY,inX,inY).get;keyData.__fnct[i]=fnc;}else{fnc=keyData.__fnct[i];}}else{if(!keyData.__fnct){outX=keyData.o.x;outY=keyData.o.y;inX=keyData.i.x;inY=keyData.i.y;fnc=BezierFactory.getBezierEasing(outX,outY,inX,inY).get;keyData.__fnct=fnc;}else{fnc=keyData.__fnct;}}perc=fnc((frameNum-keyTime)/(nextKeyTime-keyTime));}}endValue=nextKeyData.s||keyData.e;keyValue=keyData.h===1?keyData.s[i]:keyData.s[i]+(endValue[i]-keyData.s[i])*perc;if(this.propType==='multidimensional'){newValue[i]=keyValue;}else{newValue=keyValue;}}}}caching.lastIndex=iterationIndex;return newValue;}//based on @Toji's https://github.com/toji/gl-matrix/
function slerp(a,b,t){var out=[];var ax=a[0],ay=a[1],az=a[2],aw=a[3],bx=b[0],by=b[1],bz=b[2],bw=b[3];var omega,cosom,sinom,scale0,scale1;cosom=ax*bx+ay*by+az*bz+aw*bw;if(cosom<0.0){cosom=-cosom;bx=-bx;by=-by;bz=-bz;bw=-bw;}if(1.0-cosom>0.000001){omega=Math.acos(cosom);sinom=Math.sin(omega);scale0=Math.sin((1.0-t)*omega)/sinom;scale1=Math.sin(t*omega)/sinom;}else{scale0=1.0-t;scale1=t;}out[0]=scale0*ax+scale1*bx;out[1]=scale0*ay+scale1*by;out[2]=scale0*az+scale1*bz;out[3]=scale0*aw+scale1*bw;return out;}function quaternionToEuler(out,quat){var qx=quat[0];var qy=quat[1];var qz=quat[2];var qw=quat[3];var heading=Math.atan2(2*qy*qw-2*qx*qz,1-2*qy*qy-2*qz*qz);var attitude=Math.asin(2*qx*qy+2*qz*qw);var bank=Math.atan2(2*qx*qw-2*qy*qz,1-2*qx*qx-2*qz*qz);out[0]=heading/degToRads;out[1]=attitude/degToRads;out[2]=bank/degToRads;}function createQuaternion(values){var heading=values[0]*degToRads;var attitude=values[1]*degToRads;var bank=values[2]*degToRads;var c1=Math.cos(heading/2);var c2=Math.cos(attitude/2);var c3=Math.cos(bank/2);var s1=Math.sin(heading/2);var s2=Math.sin(attitude/2);var s3=Math.sin(bank/2);var w=c1*c2*c3-s1*s2*s3;var x=s1*s2*c3+c1*c2*s3;var y=s1*c2*c3+c1*s2*s3;var z=c1*s2*c3-s1*c2*s3;return[x,y,z,w];}function getValueAtCurrentTime(){var frameNum=this.comp.renderedFrame-this.offsetTime;var initTime=this.keyframes[0].t-this.offsetTime;var endTime=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(!(frameNum===this._caching.lastFrame||this._caching.lastFrame!==initFrame&&(this._caching.lastFrame>=endTime&&frameNum>=endTime||this._caching.lastFrame<initTime&&frameNum<initTime))){if(this._caching.lastFrame>=frameNum){this._caching._lastKeyframeIndex=-1;this._caching.lastIndex=0;}var renderResult=this.interpolateValue(frameNum,this._caching);this.pv=renderResult;}this._caching.lastFrame=frameNum;return this.pv;}function setVValue(val){var multipliedValue;if(this.propType==='unidimensional'){multipliedValue=val*this.mult;if(math_abs(this.v-multipliedValue)>0.00001){this.v=multipliedValue;this._mdf=true;}}else{var i=0,len=this.v.length;while(i<len){multipliedValue=val[i]*this.mult;if(math_abs(this.v[i]-multipliedValue)>0.00001){this.v[i]=multipliedValue;this._mdf=true;}i+=1;}}}function processEffectsSequence(){if(this.elem.globalData.frameId===this.frameId||!this.effectsSequence.length){return;}if(this.lock){this.setVValue(this.pv);return;}this.lock=true;this._mdf=this._isFirstFrame;var multipliedValue;var i,len=this.effectsSequence.length;var finalValue=this.kf?this.pv:this.data.k;for(i=0;i<len;i+=1){finalValue=this.effectsSequence[i](finalValue);}this.setVValue(finalValue);this._isFirstFrame=false;this.lock=false;this.frameId=this.elem.globalData.frameId;}function addEffect(effectFunction){this.effectsSequence.push(effectFunction);this.container.addDynamicProperty(this);}function ValueProperty(elem,data,mult,container){this.propType='unidimensional';this.mult=mult||1;this.data=data;this.v=mult?data.k*mult:data.k;this.pv=data.k;this._mdf=false;this.elem=elem;this.container=container;this.comp=elem.comp;this.k=false;this.kf=false;this.vel=0;this.effectsSequence=[];this._isFirstFrame=true;this.getValue=processEffectsSequence;this.setVValue=setVValue;this.addEffect=addEffect;}function MultiDimensionalProperty(elem,data,mult,container){this.propType='multidimensional';this.mult=mult||1;this.data=data;this._mdf=false;this.elem=elem;this.container=container;this.comp=elem.comp;this.k=false;this.kf=false;this.frameId=-1;var i,len=data.k.length;this.v=createTypedArray('float32',len);this.pv=createTypedArray('float32',len);var arr=createTypedArray('float32',len);this.vel=createTypedArray('float32',len);for(i=0;i<len;i+=1){this.v[i]=data.k[i]*this.mult;this.pv[i]=data.k[i];}this._isFirstFrame=true;this.effectsSequence=[];this.getValue=processEffectsSequence;this.setVValue=setVValue;this.addEffect=addEffect;}function KeyframedValueProperty(elem,data,mult,container){this.propType='unidimensional';this.keyframes=data.k;this.offsetTime=elem.data.st;this.frameId=-1;this._caching={lastFrame:initFrame,lastIndex:0,value:0,_lastKeyframeIndex:-1};this.k=true;this.kf=true;this.data=data;this.mult=mult||1;this.elem=elem;this.container=container;this.comp=elem.comp;this.v=initFrame;this.pv=initFrame;this._isFirstFrame=true;this.getValue=processEffectsSequence;this.setVValue=setVValue;this.interpolateValue=interpolateValue;this.effectsSequence=[getValueAtCurrentTime.bind(this)];this.addEffect=addEffect;}function KeyframedMultidimensionalProperty(elem,data,mult,container){this.propType='multidimensional';var i,len=data.k.length;var s,e,to,ti;for(i=0;i<len-1;i+=1){if(data.k[i].to&&data.k[i].s&&data.k[i+1]&&data.k[i+1].s){s=data.k[i].s;e=data.k[i+1].s;to=data.k[i].to;ti=data.k[i].ti;if(s.length===2&&!(s[0]===e[0]&&s[1]===e[1])&&bez.pointOnLine2D(s[0],s[1],e[0],e[1],s[0]+to[0],s[1]+to[1])&&bez.pointOnLine2D(s[0],s[1],e[0],e[1],e[0]+ti[0],e[1]+ti[1])||s.length===3&&!(s[0]===e[0]&&s[1]===e[1]&&s[2]===e[2])&&bez.pointOnLine3D(s[0],s[1],s[2],e[0],e[1],e[2],s[0]+to[0],s[1]+to[1],s[2]+to[2])&&bez.pointOnLine3D(s[0],s[1],s[2],e[0],e[1],e[2],e[0]+ti[0],e[1]+ti[1],e[2]+ti[2])){data.k[i].to=null;data.k[i].ti=null;}if(s[0]===e[0]&&s[1]===e[1]&&to[0]===0&&to[1]===0&&ti[0]===0&&ti[1]===0){if(s.length===2||s[2]===e[2]&&to[2]===0&&ti[2]===0){data.k[i].to=null;data.k[i].ti=null;}}}}this.effectsSequence=[getValueAtCurrentTime.bind(this)];this.keyframes=data.k;this.offsetTime=elem.data.st;this.k=true;this.kf=true;this._isFirstFrame=true;this.mult=mult||1;this.elem=elem;this.container=container;this.comp=elem.comp;this.getValue=processEffectsSequence;this.setVValue=setVValue;this.interpolateValue=interpolateValue;this.frameId=-1;var arrLen=data.k[0].s.length;this.v=createTypedArray('float32',arrLen);this.pv=createTypedArray('float32',arrLen);for(i=0;i<arrLen;i+=1){this.v[i]=initFrame;this.pv[i]=initFrame;}this._caching={lastFrame:initFrame,lastIndex:0,value:createTypedArray('float32',arrLen)};this.addEffect=addEffect;}function getProp(elem,data,type,mult,container){var p;if(!data.k.length){p=new ValueProperty(elem,data,mult,container);}else if(typeof data.k[0]==='number'){p=new MultiDimensionalProperty(elem,data,mult,container);}else{switch(type){case 0:p=new KeyframedValueProperty(elem,data,mult,container);break;case 1:p=new KeyframedMultidimensionalProperty(elem,data,mult,container);break;}}if(p.effectsSequence.length){container.addDynamicProperty(p);}return p;}var ob={getProp:getProp};return ob;}();var TransformPropertyFactory=function(){var defaultVector=[0,0];function applyToMatrix(mat){var _mdf=this._mdf;this.iterateDynamicProperties();this._mdf=this._mdf||_mdf;if(this.a){mat.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]);}if(this.s){mat.scale(this.s.v[0],this.s.v[1],this.s.v[2]);}if(this.sk){mat.skewFromAxis(-this.sk.v,this.sa.v);}if(this.r){mat.rotate(-this.r.v);}else{mat.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);}if(this.data.p.s){if(this.data.p.z){mat.translate(this.px.v,this.py.v,-this.pz.v);}else{mat.translate(this.px.v,this.py.v,0);}}else{mat.translate(this.p.v[0],this.p.v[1],-this.p.v[2]);}}function processKeys(forceRender){if(this.elem.globalData.frameId===this.frameId){return;}if(this._isDirty){this.precalculateMatrix();this._isDirty=false;}this.iterateDynamicProperties();if(this._mdf||forceRender){this.v.cloneFromProps(this.pre.props);if(this.appliedTransformations<1){this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]);}if(this.appliedTransformations<2){this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]);}if(this.sk&&this.appliedTransformations<3){this.v.skewFromAxis(-this.sk.v,this.sa.v);}if(this.r&&this.appliedTransformations<4){this.v.rotate(-this.r.v);}else if(!this.r&&this.appliedTransformations<4){this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);}if(this.autoOriented){var v1,v2,frameRate=this.elem.globalData.frameRate;if(this.p&&this.p.keyframes&&this.p.getValueAtTime){if(this.p._caching.lastFrame+this.p.offsetTime<=this.p.keyframes[0].t){v1=this.p.getValueAtTime((this.p.keyframes[0].t+0.01)/frameRate,0);v2=this.p.getValueAtTime(this.p.keyframes[0].t/frameRate,0);}else if(this.p._caching.lastFrame+this.p.offsetTime>=this.p.keyframes[this.p.keyframes.length-1].t){v1=this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length-1].t/frameRate,0);v2=this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length-1].t-0.05)/frameRate,0);}else{v1=this.p.pv;v2=this.p.getValueAtTime((this.p._caching.lastFrame+this.p.offsetTime-0.01)/frameRate,this.p.offsetTime);}}else if(this.px&&this.px.keyframes&&this.py.keyframes&&this.px.getValueAtTime&&this.py.getValueAtTime){v1=[];v2=[];var px=this.px,py=this.py,frameRate;if(px._caching.lastFrame+px.offsetTime<=px.keyframes[0].t){v1[0]=px.getValueAtTime((px.keyframes[0].t+0.01)/frameRate,0);v1[1]=py.getValueAtTime((py.keyframes[0].t+0.01)/frameRate,0);v2[0]=px.getValueAtTime(px.keyframes[0].t/frameRate,0);v2[1]=py.getValueAtTime(py.keyframes[0].t/frameRate,0);}else if(px._caching.lastFrame+px.offsetTime>=px.keyframes[px.keyframes.length-1].t){v1[0]=px.getValueAtTime(px.keyframes[px.keyframes.length-1].t/frameRate,0);v1[1]=py.getValueAtTime(py.keyframes[py.keyframes.length-1].t/frameRate,0);v2[0]=px.getValueAtTime((px.keyframes[px.keyframes.length-1].t-0.01)/frameRate,0);v2[1]=py.getValueAtTime((py.keyframes[py.keyframes.length-1].t-0.01)/frameRate,0);}else{v1=[px.pv,py.pv];v2[0]=px.getValueAtTime((px._caching.lastFrame+px.offsetTime-0.01)/frameRate,px.offsetTime);v2[1]=py.getValueAtTime((py._caching.lastFrame+py.offsetTime-0.01)/frameRate,py.offsetTime);}}else{v1=v2=defaultVector;}this.v.rotate(-Math.atan2(v1[1]-v2[1],v1[0]-v2[0]));}if(this.data.p&&this.data.p.s){if(this.data.p.z){this.v.translate(this.px.v,this.py.v,-this.pz.v);}else{this.v.translate(this.px.v,this.py.v,0);}}else{this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2]);}}this.frameId=this.elem.globalData.frameId;}function precalculateMatrix(){if(!this.a.k){this.pre.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]);this.appliedTransformations=1;}else{return;}if(!this.s.effectsSequence.length){this.pre.scale(this.s.v[0],this.s.v[1],this.s.v[2]);this.appliedTransformations=2;}else{return;}if(this.sk){if(!this.sk.effectsSequence.length&&!this.sa.effectsSequence.length){this.pre.skewFromAxis(-this.sk.v,this.sa.v);this.appliedTransformations=3;}else{return;}}if(this.r){if(!this.r.effectsSequence.length){this.pre.rotate(-this.r.v);this.appliedTransformations=4;}else{return;}}else if(!this.rz.effectsSequence.length&&!this.ry.effectsSequence.length&&!this.rx.effectsSequence.length&&!this.or.effectsSequence.length){this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);this.appliedTransformations=4;}}function autoOrient(){//
//var prevP = this.getValueAtTime();
}function addDynamicProperty(prop){this._addDynamicProperty(prop);this.elem.addDynamicProperty(prop);this._isDirty=true;}function TransformProperty(elem,data,container){this.elem=elem;this.frameId=-1;this.propType='transform';this.data=data;this.v=new Matrix();//Precalculated matrix with non animated properties
this.pre=new Matrix();this.appliedTransformations=0;this.initDynamicPropertyContainer(container||elem);if(data.p&&data.p.s){this.px=PropertyFactory.getProp(elem,data.p.x,0,0,this);this.py=PropertyFactory.getProp(elem,data.p.y,0,0,this);if(data.p.z){this.pz=PropertyFactory.getProp(elem,data.p.z,0,0,this);}}else{this.p=PropertyFactory.getProp(elem,data.p||{k:[0,0,0]},1,0,this);}if(data.rx){this.rx=PropertyFactory.getProp(elem,data.rx,0,degToRads,this);this.ry=PropertyFactory.getProp(elem,data.ry,0,degToRads,this);this.rz=PropertyFactory.getProp(elem,data.rz,0,degToRads,this);if(data.or.k[0].ti){var i,len=data.or.k.length;for(i=0;i<len;i+=1){data.or.k[i].to=data.or.k[i].ti=null;}}this.or=PropertyFactory.getProp(elem,data.or,1,degToRads,this);//sh Indicates it needs to be capped between -180 and 180
this.or.sh=true;}else{this.r=PropertyFactory.getProp(elem,data.r||{k:0},0,degToRads,this);}if(data.sk){this.sk=PropertyFactory.getProp(elem,data.sk,0,degToRads,this);this.sa=PropertyFactory.getProp(elem,data.sa,0,degToRads,this);}this.a=PropertyFactory.getProp(elem,data.a||{k:[0,0,0]},1,0,this);this.s=PropertyFactory.getProp(elem,data.s||{k:[100,100,100]},1,0.01,this);// Opacity is not part of the transform properties, that's why it won't use this.dynamicProperties. That way transforms won't get updated if opacity changes.
if(data.o){this.o=PropertyFactory.getProp(elem,data.o,0,0.01,elem);}else{this.o={_mdf:false,v:1};}this._isDirty=true;if(!this.dynamicProperties.length){this.getValue(true);}}TransformProperty.prototype={applyToMatrix:applyToMatrix,getValue:processKeys,precalculateMatrix:precalculateMatrix,autoOrient:autoOrient};extendPrototype([DynamicPropertyContainer],TransformProperty);TransformProperty.prototype.addDynamicProperty=addDynamicProperty;TransformProperty.prototype._addDynamicProperty=DynamicPropertyContainer.prototype.addDynamicProperty;function getTransformProperty(elem,data,container){return new TransformProperty(elem,data,container);}return{getTransformProperty:getTransformProperty};}();function ShapePath(){this.c=false;this._length=0;this._maxLength=8;this.v=createSizedArray(this._maxLength);this.o=createSizedArray(this._maxLength);this.i=createSizedArray(this._maxLength);}ShapePath.prototype.setPathData=function(closed,len){this.c=closed;this.setLength(len);var i=0;while(i<len){this.v[i]=point_pool.newElement();this.o[i]=point_pool.newElement();this.i[i]=point_pool.newElement();i+=1;}};ShapePath.prototype.setLength=function(len){while(this._maxLength<len){this.doubleArrayLength();}this._length=len;};ShapePath.prototype.doubleArrayLength=function(){this.v=this.v.concat(createSizedArray(this._maxLength));this.i=this.i.concat(createSizedArray(this._maxLength));this.o=this.o.concat(createSizedArray(this._maxLength));this._maxLength*=2;};ShapePath.prototype.setXYAt=function(x,y,type,pos,replace){var arr;this._length=Math.max(this._length,pos+1);if(this._length>=this._maxLength){this.doubleArrayLength();}switch(type){case'v':arr=this.v;break;case'i':arr=this.i;break;case'o':arr=this.o;break;}if(!arr[pos]||arr[pos]&&!replace){arr[pos]=point_pool.newElement();}arr[pos][0]=x;arr[pos][1]=y;};ShapePath.prototype.setTripleAt=function(vX,vY,oX,oY,iX,iY,pos,replace){this.setXYAt(vX,vY,'v',pos,replace);this.setXYAt(oX,oY,'o',pos,replace);this.setXYAt(iX,iY,'i',pos,replace);};ShapePath.prototype.reverse=function(){var newPath=new ShapePath();newPath.setPathData(this.c,this._length);var vertices=this.v,outPoints=this.o,inPoints=this.i;var init=0;if(this.c){newPath.setTripleAt(vertices[0][0],vertices[0][1],inPoints[0][0],inPoints[0][1],outPoints[0][0],outPoints[0][1],0,false);init=1;}var cnt=this._length-1;var len=this._length;var i;for(i=init;i<len;i+=1){newPath.setTripleAt(vertices[cnt][0],vertices[cnt][1],inPoints[cnt][0],inPoints[cnt][1],outPoints[cnt][0],outPoints[cnt][1],i,false);cnt-=1;}return newPath;};var ShapePropertyFactory=function(){var initFrame=-999999;function interpolateShape(frameNum,previousValue,caching){var iterationIndex=caching.lastIndex;var keyPropS,keyPropE,isHold,j,k,jLen,kLen,perc,vertexValue;var kf=this.keyframes;if(frameNum<kf[0].t-this.offsetTime){keyPropS=kf[0].s[0];isHold=true;iterationIndex=0;}else if(frameNum>=kf[kf.length-1].t-this.offsetTime){keyPropS=kf[kf.length-1].s?kf[kf.length-1].s[0]:kf[kf.length-2].e[0];/*if(kf[kf.length - 1].s){
        keyPropS = kf[kf.length - 1].s[0];
    }else{
        keyPropS = kf[kf.length - 2].e[0];
    }*/isHold=true;}else{var i=iterationIndex;var len=kf.length-1,flag=true,keyData,nextKeyData;while(flag){keyData=kf[i];nextKeyData=kf[i+1];if(nextKeyData.t-this.offsetTime>frameNum){break;}if(i<len-1){i+=1;}else{flag=false;}}isHold=keyData.h===1;iterationIndex=i;if(!isHold){if(frameNum>=nextKeyData.t-this.offsetTime){perc=1;}else if(frameNum<keyData.t-this.offsetTime){perc=0;}else{var fnc;if(keyData.__fnct){fnc=keyData.__fnct;}else{fnc=BezierFactory.getBezierEasing(keyData.o.x,keyData.o.y,keyData.i.x,keyData.i.y).get;keyData.__fnct=fnc;}perc=fnc((frameNum-(keyData.t-this.offsetTime))/(nextKeyData.t-this.offsetTime-(keyData.t-this.offsetTime)));}keyPropE=nextKeyData.s?nextKeyData.s[0]:keyData.e[0];}keyPropS=keyData.s[0];}jLen=previousValue._length;kLen=keyPropS.i[0].length;caching.lastIndex=iterationIndex;for(j=0;j<jLen;j+=1){for(k=0;k<kLen;k+=1){vertexValue=isHold?keyPropS.i[j][k]:keyPropS.i[j][k]+(keyPropE.i[j][k]-keyPropS.i[j][k])*perc;previousValue.i[j][k]=vertexValue;vertexValue=isHold?keyPropS.o[j][k]:keyPropS.o[j][k]+(keyPropE.o[j][k]-keyPropS.o[j][k])*perc;previousValue.o[j][k]=vertexValue;vertexValue=isHold?keyPropS.v[j][k]:keyPropS.v[j][k]+(keyPropE.v[j][k]-keyPropS.v[j][k])*perc;previousValue.v[j][k]=vertexValue;}}}function interpolateShapeCurrentTime(){var frameNum=this.comp.renderedFrame-this.offsetTime;var initTime=this.keyframes[0].t-this.offsetTime;var endTime=this.keyframes[this.keyframes.length-1].t-this.offsetTime;var lastFrame=this._caching.lastFrame;if(!(lastFrame!==initFrame&&(lastFrame<initTime&&frameNum<initTime||lastFrame>endTime&&frameNum>endTime))){////
this._caching.lastIndex=lastFrame<frameNum?this._caching.lastIndex:0;this.interpolateShape(frameNum,this.pv,this._caching);////
}this._caching.lastFrame=frameNum;return this.pv;}function resetShape(){this.paths=this.localShapeCollection;}function shapesEqual(shape1,shape2){if(shape1._length!==shape2._length||shape1.c!==shape2.c){return false;}var i,len=shape1._length;for(i=0;i<len;i+=1){if(shape1.v[i][0]!==shape2.v[i][0]||shape1.v[i][1]!==shape2.v[i][1]||shape1.o[i][0]!==shape2.o[i][0]||shape1.o[i][1]!==shape2.o[i][1]||shape1.i[i][0]!==shape2.i[i][0]||shape1.i[i][1]!==shape2.i[i][1]){return false;}}return true;}function setVValue(newPath){if(!shapesEqual(this.v,newPath)){this.v=shape_pool.clone(newPath);this.localShapeCollection.releaseShapes();this.localShapeCollection.addShape(this.v);this._mdf=true;this.paths=this.localShapeCollection;}}function processEffectsSequence(){if(this.elem.globalData.frameId===this.frameId){return;}else if(!this.effectsSequence.length){this._mdf=false;return;}if(this.lock){this.setVValue(this.pv);return;}this.lock=true;this._mdf=false;var finalValue=this.kf?this.pv:this.data.ks?this.data.ks.k:this.data.pt.k;var i,len=this.effectsSequence.length;for(i=0;i<len;i+=1){finalValue=this.effectsSequence[i](finalValue);}this.setVValue(finalValue);this.lock=false;this.frameId=this.elem.globalData.frameId;};function ShapeProperty(elem,data,type){this.propType='shape';this.comp=elem.comp;this.container=elem;this.elem=elem;this.data=data;this.k=false;this.kf=false;this._mdf=false;var pathData=type===3?data.pt.k:data.ks.k;this.v=shape_pool.clone(pathData);this.pv=shape_pool.clone(this.v);this.localShapeCollection=shapeCollection_pool.newShapeCollection();this.paths=this.localShapeCollection;this.paths.addShape(this.v);this.reset=resetShape;this.effectsSequence=[];}function addEffect(effectFunction){this.effectsSequence.push(effectFunction);this.container.addDynamicProperty(this);}ShapeProperty.prototype.interpolateShape=interpolateShape;ShapeProperty.prototype.getValue=processEffectsSequence;ShapeProperty.prototype.setVValue=setVValue;ShapeProperty.prototype.addEffect=addEffect;function KeyframedShapeProperty(elem,data,type){this.propType='shape';this.comp=elem.comp;this.elem=elem;this.container=elem;this.offsetTime=elem.data.st;this.keyframes=type===3?data.pt.k:data.ks.k;this.k=true;this.kf=true;var i,len=this.keyframes[0].s[0].i.length;var jLen=this.keyframes[0].s[0].i[0].length;this.v=shape_pool.newElement();this.v.setPathData(this.keyframes[0].s[0].c,len);this.pv=shape_pool.clone(this.v);this.localShapeCollection=shapeCollection_pool.newShapeCollection();this.paths=this.localShapeCollection;this.paths.addShape(this.v);this.lastFrame=initFrame;this.reset=resetShape;this._caching={lastFrame:initFrame,lastIndex:0};this.effectsSequence=[interpolateShapeCurrentTime.bind(this)];}KeyframedShapeProperty.prototype.getValue=processEffectsSequence;KeyframedShapeProperty.prototype.interpolateShape=interpolateShape;KeyframedShapeProperty.prototype.setVValue=setVValue;KeyframedShapeProperty.prototype.addEffect=addEffect;var EllShapeProperty=function(){var cPoint=roundCorner;function EllShapeProperty(elem,data){/*this.v = {
        v: createSizedArray(4),
        i: createSizedArray(4),
        o: createSizedArray(4),
        c: true
    };*/this.v=shape_pool.newElement();this.v.setPathData(true,4);this.localShapeCollection=shapeCollection_pool.newShapeCollection();this.paths=this.localShapeCollection;this.localShapeCollection.addShape(this.v);this.d=data.d;this.elem=elem;this.comp=elem.comp;this.frameId=-1;this.initDynamicPropertyContainer(elem);this.p=PropertyFactory.getProp(elem,data.p,1,0,this);this.s=PropertyFactory.getProp(elem,data.s,1,0,this);if(this.dynamicProperties.length){this.k=true;}else{this.k=false;this.convertEllToPath();}};EllShapeProperty.prototype={reset:resetShape,getValue:function getValue(){if(this.elem.globalData.frameId===this.frameId){return;}this.frameId=this.elem.globalData.frameId;this.iterateDynamicProperties();if(this._mdf){this.convertEllToPath();}},convertEllToPath:function convertEllToPath(){var p0=this.p.v[0],p1=this.p.v[1],s0=this.s.v[0]/2,s1=this.s.v[1]/2;var _cw=this.d!==3;var _v=this.v;_v.v[0][0]=p0;_v.v[0][1]=p1-s1;_v.v[1][0]=_cw?p0+s0:p0-s0;_v.v[1][1]=p1;_v.v[2][0]=p0;_v.v[2][1]=p1+s1;_v.v[3][0]=_cw?p0-s0:p0+s0;_v.v[3][1]=p1;_v.i[0][0]=_cw?p0-s0*cPoint:p0+s0*cPoint;_v.i[0][1]=p1-s1;_v.i[1][0]=_cw?p0+s0:p0-s0;_v.i[1][1]=p1-s1*cPoint;_v.i[2][0]=_cw?p0+s0*cPoint:p0-s0*cPoint;_v.i[2][1]=p1+s1;_v.i[3][0]=_cw?p0-s0:p0+s0;_v.i[3][1]=p1+s1*cPoint;_v.o[0][0]=_cw?p0+s0*cPoint:p0-s0*cPoint;_v.o[0][1]=p1-s1;_v.o[1][0]=_cw?p0+s0:p0-s0;_v.o[1][1]=p1+s1*cPoint;_v.o[2][0]=_cw?p0-s0*cPoint:p0+s0*cPoint;_v.o[2][1]=p1+s1;_v.o[3][0]=_cw?p0-s0:p0+s0;_v.o[3][1]=p1-s1*cPoint;}};extendPrototype([DynamicPropertyContainer],EllShapeProperty);return EllShapeProperty;}();var StarShapeProperty=function(){function StarShapeProperty(elem,data){this.v=shape_pool.newElement();this.v.setPathData(true,0);this.elem=elem;this.comp=elem.comp;this.data=data;this.frameId=-1;this.d=data.d;this.initDynamicPropertyContainer(elem);if(data.sy===1){this.ir=PropertyFactory.getProp(elem,data.ir,0,0,this);this.is=PropertyFactory.getProp(elem,data.is,0,0.01,this);this.convertToPath=this.convertStarToPath;}else{this.convertToPath=this.convertPolygonToPath;}this.pt=PropertyFactory.getProp(elem,data.pt,0,0,this);this.p=PropertyFactory.getProp(elem,data.p,1,0,this);this.r=PropertyFactory.getProp(elem,data.r,0,degToRads,this);this.or=PropertyFactory.getProp(elem,data.or,0,0,this);this.os=PropertyFactory.getProp(elem,data.os,0,0.01,this);this.localShapeCollection=shapeCollection_pool.newShapeCollection();this.localShapeCollection.addShape(this.v);this.paths=this.localShapeCollection;if(this.dynamicProperties.length){this.k=true;}else{this.k=false;this.convertToPath();}};StarShapeProperty.prototype={reset:resetShape,getValue:function getValue(){if(this.elem.globalData.frameId===this.frameId){return;}this.frameId=this.elem.globalData.frameId;this.iterateDynamicProperties();if(this._mdf){this.convertToPath();}},convertStarToPath:function convertStarToPath(){var numPts=Math.floor(this.pt.v)*2;var angle=Math.PI*2/numPts;/*this.v.v.length = numPts;
        this.v.i.length = numPts;
        this.v.o.length = numPts;*/var longFlag=true;var longRad=this.or.v;var shortRad=this.ir.v;var longRound=this.os.v;var shortRound=this.is.v;var longPerimSegment=2*Math.PI*longRad/(numPts*2);var shortPerimSegment=2*Math.PI*shortRad/(numPts*2);var i,rad,roundness,perimSegment,currentAng=-Math.PI/2;currentAng+=this.r.v;var dir=this.data.d===3?-1:1;this.v._length=0;for(i=0;i<numPts;i+=1){rad=longFlag?longRad:shortRad;roundness=longFlag?longRound:shortRound;perimSegment=longFlag?longPerimSegment:shortPerimSegment;var x=rad*Math.cos(currentAng);var y=rad*Math.sin(currentAng);var ox=x===0&&y===0?0:y/Math.sqrt(x*x+y*y);var oy=x===0&&y===0?0:-x/Math.sqrt(x*x+y*y);x+=+this.p.v[0];y+=+this.p.v[1];this.v.setTripleAt(x,y,x-ox*perimSegment*roundness*dir,y-oy*perimSegment*roundness*dir,x+ox*perimSegment*roundness*dir,y+oy*perimSegment*roundness*dir,i,true);/*this.v.v[i] = [x,y];
            this.v.i[i] = [x+ox*perimSegment*roundness*dir,y+oy*perimSegment*roundness*dir];
            this.v.o[i] = [x-ox*perimSegment*roundness*dir,y-oy*perimSegment*roundness*dir];
            this.v._length = numPts;*/longFlag=!longFlag;currentAng+=angle*dir;}},convertPolygonToPath:function convertPolygonToPath(){var numPts=Math.floor(this.pt.v);var angle=Math.PI*2/numPts;var rad=this.or.v;var roundness=this.os.v;var perimSegment=2*Math.PI*rad/(numPts*4);var i,currentAng=-Math.PI/2;var dir=this.data.d===3?-1:1;currentAng+=this.r.v;this.v._length=0;for(i=0;i<numPts;i+=1){var x=rad*Math.cos(currentAng);var y=rad*Math.sin(currentAng);var ox=x===0&&y===0?0:y/Math.sqrt(x*x+y*y);var oy=x===0&&y===0?0:-x/Math.sqrt(x*x+y*y);x+=+this.p.v[0];y+=+this.p.v[1];this.v.setTripleAt(x,y,x-ox*perimSegment*roundness*dir,y-oy*perimSegment*roundness*dir,x+ox*perimSegment*roundness*dir,y+oy*perimSegment*roundness*dir,i,true);currentAng+=angle*dir;}this.paths.length=0;this.paths[0]=this.v;}};extendPrototype([DynamicPropertyContainer],StarShapeProperty);return StarShapeProperty;}();var RectShapeProperty=function(){function RectShapeProperty(elem,data){this.v=shape_pool.newElement();this.v.c=true;this.localShapeCollection=shapeCollection_pool.newShapeCollection();this.localShapeCollection.addShape(this.v);this.paths=this.localShapeCollection;this.elem=elem;this.comp=elem.comp;this.frameId=-1;this.d=data.d;this.initDynamicPropertyContainer(elem);this.p=PropertyFactory.getProp(elem,data.p,1,0,this);this.s=PropertyFactory.getProp(elem,data.s,1,0,this);this.r=PropertyFactory.getProp(elem,data.r,0,0,this);if(this.dynamicProperties.length){this.k=true;}else{this.k=false;this.convertRectToPath();}};RectShapeProperty.prototype={convertRectToPath:function convertRectToPath(){var p0=this.p.v[0],p1=this.p.v[1],v0=this.s.v[0]/2,v1=this.s.v[1]/2;var round=bm_min(v0,v1,this.r.v);var cPoint=round*(1-roundCorner);this.v._length=0;if(this.d===2||this.d===1){this.v.setTripleAt(p0+v0,p1-v1+round,p0+v0,p1-v1+round,p0+v0,p1-v1+cPoint,0,true);this.v.setTripleAt(p0+v0,p1+v1-round,p0+v0,p1+v1-cPoint,p0+v0,p1+v1-round,1,true);if(round!==0){this.v.setTripleAt(p0+v0-round,p1+v1,p0+v0-round,p1+v1,p0+v0-cPoint,p1+v1,2,true);this.v.setTripleAt(p0-v0+round,p1+v1,p0-v0+cPoint,p1+v1,p0-v0+round,p1+v1,3,true);this.v.setTripleAt(p0-v0,p1+v1-round,p0-v0,p1+v1-round,p0-v0,p1+v1-cPoint,4,true);this.v.setTripleAt(p0-v0,p1-v1+round,p0-v0,p1-v1+cPoint,p0-v0,p1-v1+round,5,true);this.v.setTripleAt(p0-v0+round,p1-v1,p0-v0+round,p1-v1,p0-v0+cPoint,p1-v1,6,true);this.v.setTripleAt(p0+v0-round,p1-v1,p0+v0-cPoint,p1-v1,p0+v0-round,p1-v1,7,true);}else{this.v.setTripleAt(p0-v0,p1+v1,p0-v0+cPoint,p1+v1,p0-v0,p1+v1,2);this.v.setTripleAt(p0-v0,p1-v1,p0-v0,p1-v1+cPoint,p0-v0,p1-v1,3);}}else{this.v.setTripleAt(p0+v0,p1-v1+round,p0+v0,p1-v1+cPoint,p0+v0,p1-v1+round,0,true);if(round!==0){this.v.setTripleAt(p0+v0-round,p1-v1,p0+v0-round,p1-v1,p0+v0-cPoint,p1-v1,1,true);this.v.setTripleAt(p0-v0+round,p1-v1,p0-v0+cPoint,p1-v1,p0-v0+round,p1-v1,2,true);this.v.setTripleAt(p0-v0,p1-v1+round,p0-v0,p1-v1+round,p0-v0,p1-v1+cPoint,3,true);this.v.setTripleAt(p0-v0,p1+v1-round,p0-v0,p1+v1-cPoint,p0-v0,p1+v1-round,4,true);this.v.setTripleAt(p0-v0+round,p1+v1,p0-v0+round,p1+v1,p0-v0+cPoint,p1+v1,5,true);this.v.setTripleAt(p0+v0-round,p1+v1,p0+v0-cPoint,p1+v1,p0+v0-round,p1+v1,6,true);this.v.setTripleAt(p0+v0,p1+v1-round,p0+v0,p1+v1-round,p0+v0,p1+v1-cPoint,7,true);}else{this.v.setTripleAt(p0-v0,p1-v1,p0-v0+cPoint,p1-v1,p0-v0,p1-v1,1,true);this.v.setTripleAt(p0-v0,p1+v1,p0-v0,p1+v1-cPoint,p0-v0,p1+v1,2,true);this.v.setTripleAt(p0+v0,p1+v1,p0+v0-cPoint,p1+v1,p0+v0,p1+v1,3,true);}}},getValue:function getValue(frameNum){if(this.elem.globalData.frameId===this.frameId){return;}this.frameId=this.elem.globalData.frameId;this.iterateDynamicProperties();if(this._mdf){this.convertRectToPath();}},reset:resetShape};extendPrototype([DynamicPropertyContainer],RectShapeProperty);return RectShapeProperty;}();function getShapeProp(elem,data,type){var prop;if(type===3||type===4){var dataProp=type===3?data.pt:data.ks;var keys=dataProp.k;if(keys.length){prop=new KeyframedShapeProperty(elem,data,type);}else{prop=new ShapeProperty(elem,data,type);}}else if(type===5){prop=new RectShapeProperty(elem,data);}else if(type===6){prop=new EllShapeProperty(elem,data);}else if(type===7){prop=new StarShapeProperty(elem,data);}if(prop.k){elem.addDynamicProperty(prop);}return prop;}function getConstructorFunction(){return ShapeProperty;}function getKeyframedConstructorFunction(){return KeyframedShapeProperty;}var ob={};ob.getShapeProp=getShapeProp;ob.getConstructorFunction=getConstructorFunction;ob.getKeyframedConstructorFunction=getKeyframedConstructorFunction;return ob;}();var ShapeModifiers=function(){var ob={};var modifiers={};ob.registerModifier=registerModifier;ob.getModifier=getModifier;function registerModifier(nm,factory){if(!modifiers[nm]){modifiers[nm]=factory;}}function getModifier(nm,elem,data){return new modifiers[nm](elem,data);}return ob;}();function ShapeModifier(){}ShapeModifier.prototype.initModifierProperties=function(){};ShapeModifier.prototype.addShapeToModifier=function(){};ShapeModifier.prototype.addShape=function(data){if(!this.closed){// Adding shape to dynamic properties. It covers the case where a shape has no effects applied, to reset it's _mdf state on every tick.
data.sh.container.addDynamicProperty(data.sh);var shapeData={shape:data.sh,data:data,localShapeCollection:shapeCollection_pool.newShapeCollection()};this.shapes.push(shapeData);this.addShapeToModifier(shapeData);if(this._isAnimated){data.setAsAnimated();}}};ShapeModifier.prototype.init=function(elem,data){this.shapes=[];this.elem=elem;this.initDynamicPropertyContainer(elem);this.initModifierProperties(elem,data);this.frameId=initialDefaultFrame;this.closed=false;this.k=false;if(this.dynamicProperties.length){this.k=true;}else{this.getValue(true);}};ShapeModifier.prototype.processKeys=function(){if(this.elem.globalData.frameId===this.frameId){return;}this.frameId=this.elem.globalData.frameId;this.iterateDynamicProperties();};extendPrototype([DynamicPropertyContainer],ShapeModifier);function TrimModifier(){}extendPrototype([ShapeModifier],TrimModifier);TrimModifier.prototype.initModifierProperties=function(elem,data){this.s=PropertyFactory.getProp(elem,data.s,0,0.01,this);this.e=PropertyFactory.getProp(elem,data.e,0,0.01,this);this.o=PropertyFactory.getProp(elem,data.o,0,0,this);this.sValue=0;this.eValue=0;this.getValue=this.processKeys;this.m=data.m;this._isAnimated=!!this.s.effectsSequence.length||!!this.e.effectsSequence.length||!!this.o.effectsSequence.length;};TrimModifier.prototype.addShapeToModifier=function(shapeData){shapeData.pathsData=[];};TrimModifier.prototype.calculateShapeEdges=function(s,e,shapeLength,addedLength,totalModifierLength){var segments=[];if(e<=1){segments.push({s:s,e:e});}else if(s>=1){segments.push({s:s-1,e:e-1});}else{segments.push({s:s,e:1});segments.push({s:0,e:e-1});}var shapeSegments=[];var i,len=segments.length,segmentOb;for(i=0;i<len;i+=1){segmentOb=segments[i];if(segmentOb.e*totalModifierLength<addedLength||segmentOb.s*totalModifierLength>addedLength+shapeLength){}else{var shapeS,shapeE;if(segmentOb.s*totalModifierLength<=addedLength){shapeS=0;}else{shapeS=(segmentOb.s*totalModifierLength-addedLength)/shapeLength;}if(segmentOb.e*totalModifierLength>=addedLength+shapeLength){shapeE=1;}else{shapeE=(segmentOb.e*totalModifierLength-addedLength)/shapeLength;}shapeSegments.push([shapeS,shapeE]);}}if(!shapeSegments.length){shapeSegments.push([0,0]);}return shapeSegments;};TrimModifier.prototype.releasePathsData=function(pathsData){var i,len=pathsData.length;for(i=0;i<len;i+=1){segments_length_pool.release(pathsData[i]);}pathsData.length=0;return pathsData;};TrimModifier.prototype.processShapes=function(_isFirstFrame){var s,e;if(this._mdf||_isFirstFrame){var o=this.o.v%360/360;if(o<0){o+=1;}s=(this.s.v>1?1:this.s.v<0?0:this.s.v)+o;e=(this.e.v>1?1:this.e.v<0?0:this.e.v)+o;if(s===e){}if(s>e){var _s=s;s=e;e=_s;}s=Math.round(s*10000)*0.0001;e=Math.round(e*10000)*0.0001;this.sValue=s;this.eValue=e;}else{s=this.sValue;e=this.eValue;}var shapePaths;var i,len=this.shapes.length,j,jLen;var pathsData,pathData,totalShapeLength,totalModifierLength=0;if(e===s){for(i=0;i<len;i+=1){this.shapes[i].localShapeCollection.releaseShapes();this.shapes[i].shape._mdf=true;this.shapes[i].shape.paths=this.shapes[i].localShapeCollection;if(this._mdf){this.shapes[i].pathsData.length=0;}}}else if(!(e===1&&s===0||e===0&&s===1)){var segments=[],shapeData,localShapeCollection;for(i=0;i<len;i+=1){shapeData=this.shapes[i];// if shape hasn't changed and trim properties haven't changed, cached previous path can be used
if(!shapeData.shape._mdf&&!this._mdf&&!_isFirstFrame&&this.m!==2){shapeData.shape.paths=shapeData.localShapeCollection;}else{shapePaths=shapeData.shape.paths;jLen=shapePaths._length;totalShapeLength=0;if(!shapeData.shape._mdf&&shapeData.pathsData.length){totalShapeLength=shapeData.totalShapeLength;}else{pathsData=this.releasePathsData(shapeData.pathsData);for(j=0;j<jLen;j+=1){pathData=bez.getSegmentsLength(shapePaths.shapes[j]);pathsData.push(pathData);totalShapeLength+=pathData.totalLength;}shapeData.totalShapeLength=totalShapeLength;shapeData.pathsData=pathsData;}totalModifierLength+=totalShapeLength;shapeData.shape._mdf=true;}}var shapeS=s,shapeE=e,addedLength=0,edges;for(i=len-1;i>=0;i-=1){shapeData=this.shapes[i];if(shapeData.shape._mdf){localShapeCollection=shapeData.localShapeCollection;localShapeCollection.releaseShapes();//if m === 2 means paths are trimmed individually so edges need to be found for this specific shape relative to whoel group
if(this.m===2&&len>1){edges=this.calculateShapeEdges(s,e,shapeData.totalShapeLength,addedLength,totalModifierLength);addedLength+=shapeData.totalShapeLength;}else{edges=[[shapeS,shapeE]];}jLen=edges.length;for(j=0;j<jLen;j+=1){shapeS=edges[j][0];shapeE=edges[j][1];segments.length=0;if(shapeE<=1){segments.push({s:shapeData.totalShapeLength*shapeS,e:shapeData.totalShapeLength*shapeE});}else if(shapeS>=1){segments.push({s:shapeData.totalShapeLength*(shapeS-1),e:shapeData.totalShapeLength*(shapeE-1)});}else{segments.push({s:shapeData.totalShapeLength*shapeS,e:shapeData.totalShapeLength});segments.push({s:0,e:shapeData.totalShapeLength*(shapeE-1)});}var newShapesData=this.addShapes(shapeData,segments[0]);if(segments[0].s!==segments[0].e){if(segments.length>1){var lastShapeInCollection=shapeData.shape.paths.shapes[shapeData.shape.paths._length-1];if(lastShapeInCollection.c){var lastShape=newShapesData.pop();this.addPaths(newShapesData,localShapeCollection);newShapesData=this.addShapes(shapeData,segments[1],lastShape);}else{this.addPaths(newShapesData,localShapeCollection);newShapesData=this.addShapes(shapeData,segments[1]);}}this.addPaths(newShapesData,localShapeCollection);}}shapeData.shape.paths=localShapeCollection;}}}else if(this._mdf){for(i=0;i<len;i+=1){//Releasign Trim Cached paths data when no trim applied in case shapes are modified inbetween.
//Don't remove this even if it's losing cached info.
this.shapes[i].pathsData.length=0;this.shapes[i].shape._mdf=true;}}};TrimModifier.prototype.addPaths=function(newPaths,localShapeCollection){var i,len=newPaths.length;for(i=0;i<len;i+=1){localShapeCollection.addShape(newPaths[i]);}};TrimModifier.prototype.addSegment=function(pt1,pt2,pt3,pt4,shapePath,pos,newShape){shapePath.setXYAt(pt2[0],pt2[1],'o',pos);shapePath.setXYAt(pt3[0],pt3[1],'i',pos+1);if(newShape){shapePath.setXYAt(pt1[0],pt1[1],'v',pos);}shapePath.setXYAt(pt4[0],pt4[1],'v',pos+1);};TrimModifier.prototype.addSegmentFromArray=function(points,shapePath,pos,newShape){shapePath.setXYAt(points[1],points[5],'o',pos);shapePath.setXYAt(points[2],points[6],'i',pos+1);if(newShape){shapePath.setXYAt(points[0],points[4],'v',pos);}shapePath.setXYAt(points[3],points[7],'v',pos+1);};TrimModifier.prototype.addShapes=function(shapeData,shapeSegment,shapePath){var pathsData=shapeData.pathsData;var shapePaths=shapeData.shape.paths.shapes;var i,len=shapeData.shape.paths._length,j,jLen;var addedLength=0;var currentLengthData,segmentCount;var lengths;var segment;var shapes=[];var initPos;var newShape=true;if(!shapePath){shapePath=shape_pool.newElement();segmentCount=0;initPos=0;}else{segmentCount=shapePath._length;initPos=shapePath._length;}shapes.push(shapePath);for(i=0;i<len;i+=1){lengths=pathsData[i].lengths;shapePath.c=shapePaths[i].c;jLen=shapePaths[i].c?lengths.length:lengths.length+1;for(j=1;j<jLen;j+=1){currentLengthData=lengths[j-1];if(addedLength+currentLengthData.addedLength<shapeSegment.s){addedLength+=currentLengthData.addedLength;shapePath.c=false;}else if(addedLength>shapeSegment.e){shapePath.c=false;break;}else{if(shapeSegment.s<=addedLength&&shapeSegment.e>=addedLength+currentLengthData.addedLength){this.addSegment(shapePaths[i].v[j-1],shapePaths[i].o[j-1],shapePaths[i].i[j],shapePaths[i].v[j],shapePath,segmentCount,newShape);newShape=false;}else{segment=bez.getNewSegment(shapePaths[i].v[j-1],shapePaths[i].v[j],shapePaths[i].o[j-1],shapePaths[i].i[j],(shapeSegment.s-addedLength)/currentLengthData.addedLength,(shapeSegment.e-addedLength)/currentLengthData.addedLength,lengths[j-1]);this.addSegmentFromArray(segment,shapePath,segmentCount,newShape);// this.addSegment(segment.pt1, segment.pt3, segment.pt4, segment.pt2, shapePath, segmentCount, newShape);
newShape=false;shapePath.c=false;}addedLength+=currentLengthData.addedLength;segmentCount+=1;}}if(shapePaths[i].c&&lengths.length){currentLengthData=lengths[j-1];if(addedLength<=shapeSegment.e){var segmentLength=lengths[j-1].addedLength;if(shapeSegment.s<=addedLength&&shapeSegment.e>=addedLength+segmentLength){this.addSegment(shapePaths[i].v[j-1],shapePaths[i].o[j-1],shapePaths[i].i[0],shapePaths[i].v[0],shapePath,segmentCount,newShape);newShape=false;}else{segment=bez.getNewSegment(shapePaths[i].v[j-1],shapePaths[i].v[0],shapePaths[i].o[j-1],shapePaths[i].i[0],(shapeSegment.s-addedLength)/segmentLength,(shapeSegment.e-addedLength)/segmentLength,lengths[j-1]);this.addSegmentFromArray(segment,shapePath,segmentCount,newShape);// this.addSegment(segment.pt1, segment.pt3, segment.pt4, segment.pt2, shapePath, segmentCount, newShape);
newShape=false;shapePath.c=false;}}else{shapePath.c=false;}addedLength+=currentLengthData.addedLength;segmentCount+=1;}if(shapePath._length){shapePath.setXYAt(shapePath.v[initPos][0],shapePath.v[initPos][1],'i',initPos);shapePath.setXYAt(shapePath.v[shapePath._length-1][0],shapePath.v[shapePath._length-1][1],'o',shapePath._length-1);}if(addedLength>shapeSegment.e){break;}if(i<len-1){shapePath=shape_pool.newElement();newShape=true;shapes.push(shapePath);segmentCount=0;}}return shapes;};ShapeModifiers.registerModifier('tm',TrimModifier);function RoundCornersModifier(){}extendPrototype([ShapeModifier],RoundCornersModifier);RoundCornersModifier.prototype.initModifierProperties=function(elem,data){this.getValue=this.processKeys;this.rd=PropertyFactory.getProp(elem,data.r,0,null,this);this._isAnimated=!!this.rd.effectsSequence.length;};RoundCornersModifier.prototype.processPath=function(path,round){var cloned_path=shape_pool.newElement();cloned_path.c=path.c;var i,len=path._length;var currentV,currentI,currentO,closerV,newV,newO,newI,distance,newPosPerc,index=0;var vX,vY,oX,oY,iX,iY;for(i=0;i<len;i+=1){currentV=path.v[i];currentO=path.o[i];currentI=path.i[i];if(currentV[0]===currentO[0]&&currentV[1]===currentO[1]&&currentV[0]===currentI[0]&&currentV[1]===currentI[1]){if((i===0||i===len-1)&&!path.c){cloned_path.setTripleAt(currentV[0],currentV[1],currentO[0],currentO[1],currentI[0],currentI[1],index);/*cloned_path.v[index] = currentV;
        cloned_path.o[index] = currentO;
        cloned_path.i[index] = currentI;*/index+=1;}else{if(i===0){closerV=path.v[len-1];}else{closerV=path.v[i-1];}distance=Math.sqrt(Math.pow(currentV[0]-closerV[0],2)+Math.pow(currentV[1]-closerV[1],2));newPosPerc=distance?Math.min(distance/2,round)/distance:0;vX=iX=currentV[0]+(closerV[0]-currentV[0])*newPosPerc;vY=iY=currentV[1]-(currentV[1]-closerV[1])*newPosPerc;oX=vX-(vX-currentV[0])*roundCorner;oY=vY-(vY-currentV[1])*roundCorner;cloned_path.setTripleAt(vX,vY,oX,oY,iX,iY,index);index+=1;if(i===len-1){closerV=path.v[0];}else{closerV=path.v[i+1];}distance=Math.sqrt(Math.pow(currentV[0]-closerV[0],2)+Math.pow(currentV[1]-closerV[1],2));newPosPerc=distance?Math.min(distance/2,round)/distance:0;vX=oX=currentV[0]+(closerV[0]-currentV[0])*newPosPerc;vY=oY=currentV[1]+(closerV[1]-currentV[1])*newPosPerc;iX=vX-(vX-currentV[0])*roundCorner;iY=vY-(vY-currentV[1])*roundCorner;cloned_path.setTripleAt(vX,vY,oX,oY,iX,iY,index);index+=1;}}else{cloned_path.setTripleAt(path.v[i][0],path.v[i][1],path.o[i][0],path.o[i][1],path.i[i][0],path.i[i][1],index);index+=1;}}return cloned_path;};RoundCornersModifier.prototype.processShapes=function(_isFirstFrame){var shapePaths;var i,len=this.shapes.length;var j,jLen;var rd=this.rd.v;if(rd!==0){var shapeData,newPaths,localShapeCollection;for(i=0;i<len;i+=1){shapeData=this.shapes[i];newPaths=shapeData.shape.paths;localShapeCollection=shapeData.localShapeCollection;if(!(!shapeData.shape._mdf&&!this._mdf&&!_isFirstFrame)){localShapeCollection.releaseShapes();shapeData.shape._mdf=true;shapePaths=shapeData.shape.paths.shapes;jLen=shapeData.shape.paths._length;for(j=0;j<jLen;j+=1){localShapeCollection.addShape(this.processPath(shapePaths[j],rd));}}shapeData.shape.paths=shapeData.localShapeCollection;}}if(!this.dynamicProperties.length){this._mdf=false;}};ShapeModifiers.registerModifier('rd',RoundCornersModifier);function RepeaterModifier(){}extendPrototype([ShapeModifier],RepeaterModifier);RepeaterModifier.prototype.initModifierProperties=function(elem,data){this.getValue=this.processKeys;this.c=PropertyFactory.getProp(elem,data.c,0,null,this);this.o=PropertyFactory.getProp(elem,data.o,0,null,this);this.tr=TransformPropertyFactory.getTransformProperty(elem,data.tr,this);this.so=PropertyFactory.getProp(elem,data.tr.so,0,0.01,this);this.eo=PropertyFactory.getProp(elem,data.tr.eo,0,0.01,this);this.data=data;if(!this.dynamicProperties.length){this.getValue(true);}this._isAnimated=!!this.dynamicProperties.length;this.pMatrix=new Matrix();this.rMatrix=new Matrix();this.sMatrix=new Matrix();this.tMatrix=new Matrix();this.matrix=new Matrix();};RepeaterModifier.prototype.applyTransforms=function(pMatrix,rMatrix,sMatrix,transform,perc,inv){var dir=inv?-1:1;var scaleX=transform.s.v[0]+(1-transform.s.v[0])*(1-perc);var scaleY=transform.s.v[1]+(1-transform.s.v[1])*(1-perc);pMatrix.translate(transform.p.v[0]*dir*perc,transform.p.v[1]*dir*perc,transform.p.v[2]);rMatrix.translate(-transform.a.v[0],-transform.a.v[1],transform.a.v[2]);rMatrix.rotate(-transform.r.v*dir*perc);rMatrix.translate(transform.a.v[0],transform.a.v[1],transform.a.v[2]);sMatrix.translate(-transform.a.v[0],-transform.a.v[1],transform.a.v[2]);sMatrix.scale(inv?1/scaleX:scaleX,inv?1/scaleY:scaleY);sMatrix.translate(transform.a.v[0],transform.a.v[1],transform.a.v[2]);};RepeaterModifier.prototype.init=function(elem,arr,pos,elemsData){this.elem=elem;this.arr=arr;this.pos=pos;this.elemsData=elemsData;this._currentCopies=0;this._elements=[];this._groups=[];this.frameId=-1;this.initDynamicPropertyContainer(elem);this.initModifierProperties(elem,arr[pos]);var cont=0;while(pos>0){pos-=1;//this._elements.unshift(arr.splice(pos,1)[0]);
this._elements.unshift(arr[pos]);cont+=1;}if(this.dynamicProperties.length){this.k=true;}else{this.getValue(true);}};RepeaterModifier.prototype.resetElements=function(elements){var i,len=elements.length;for(i=0;i<len;i+=1){elements[i]._processed=false;if(elements[i].ty==='gr'){this.resetElements(elements[i].it);}}};RepeaterModifier.prototype.cloneElements=function(elements){var i,len=elements.length;var newElements=JSON.parse(JSON.stringify(elements));this.resetElements(newElements);return newElements;};RepeaterModifier.prototype.changeGroupRender=function(elements,renderFlag){var i,len=elements.length;for(i=0;i<len;i+=1){elements[i]._render=renderFlag;if(elements[i].ty==='gr'){this.changeGroupRender(elements[i].it,renderFlag);}}};RepeaterModifier.prototype.processShapes=function(_isFirstFrame){var items,itemsTransform,i,dir,cont;if(this._mdf||_isFirstFrame){var copies=Math.ceil(this.c.v);if(this._groups.length<copies){while(this._groups.length<copies){var group={it:this.cloneElements(this._elements),ty:'gr'};group.it.push({"a":{"a":0,"ix":1,"k":[0,0]},"nm":"Transform","o":{"a":0,"ix":7,"k":100},"p":{"a":0,"ix":2,"k":[0,0]},"r":{"a":1,"ix":6,"k":[{s:0,e:0,t:0},{s:0,e:0,t:1}]},"s":{"a":0,"ix":3,"k":[100,100]},"sa":{"a":0,"ix":5,"k":0},"sk":{"a":0,"ix":4,"k":0},"ty":"tr"});this.arr.splice(0,0,group);this._groups.splice(0,0,group);this._currentCopies+=1;}this.elem.reloadShapes();}cont=0;var renderFlag;for(i=0;i<=this._groups.length-1;i+=1){renderFlag=cont<copies;this._groups[i]._render=renderFlag;this.changeGroupRender(this._groups[i].it,renderFlag);cont+=1;}this._currentCopies=copies;////
var offset=this.o.v;var offsetModulo=offset%1;var roundOffset=offset>0?Math.floor(offset):Math.ceil(offset);var k;var tMat=this.tr.v.props;var pProps=this.pMatrix.props;var rProps=this.rMatrix.props;var sProps=this.sMatrix.props;this.pMatrix.reset();this.rMatrix.reset();this.sMatrix.reset();this.tMatrix.reset();this.matrix.reset();var iteration=0;if(offset>0){while(iteration<roundOffset){this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,false);iteration+=1;}if(offsetModulo){this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,offsetModulo,false);iteration+=offsetModulo;}}else if(offset<0){while(iteration>roundOffset){this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,true);iteration-=1;}if(offsetModulo){this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,-offsetModulo,true);iteration-=offsetModulo;}}i=this.data.m===1?0:this._currentCopies-1;dir=this.data.m===1?1:-1;cont=this._currentCopies;var j,jLen;while(cont){items=this.elemsData[i].it;itemsTransform=items[items.length-1].transform.mProps.v.props;jLen=itemsTransform.length;items[items.length-1].transform.mProps._mdf=true;items[items.length-1].transform.op._mdf=true;items[items.length-1].transform.op.v=this.so.v+(this.eo.v-this.so.v)*(i/(this._currentCopies-1));if(iteration!==0){if(i!==0&&dir===1||i!==this._currentCopies-1&&dir===-1){this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,false);}this.matrix.transform(rProps[0],rProps[1],rProps[2],rProps[3],rProps[4],rProps[5],rProps[6],rProps[7],rProps[8],rProps[9],rProps[10],rProps[11],rProps[12],rProps[13],rProps[14],rProps[15]);this.matrix.transform(sProps[0],sProps[1],sProps[2],sProps[3],sProps[4],sProps[5],sProps[6],sProps[7],sProps[8],sProps[9],sProps[10],sProps[11],sProps[12],sProps[13],sProps[14],sProps[15]);this.matrix.transform(pProps[0],pProps[1],pProps[2],pProps[3],pProps[4],pProps[5],pProps[6],pProps[7],pProps[8],pProps[9],pProps[10],pProps[11],pProps[12],pProps[13],pProps[14],pProps[15]);for(j=0;j<jLen;j+=1){itemsTransform[j]=this.matrix.props[j];}this.matrix.reset();}else{this.matrix.reset();for(j=0;j<jLen;j+=1){itemsTransform[j]=this.matrix.props[j];}}iteration+=1;cont-=1;i+=dir;}}else{cont=this._currentCopies;i=0;dir=1;while(cont){items=this.elemsData[i].it;itemsTransform=items[items.length-1].transform.mProps.v.props;items[items.length-1].transform.mProps._mdf=false;items[items.length-1].transform.op._mdf=false;cont-=1;i+=dir;}}};RepeaterModifier.prototype.addShape=function(){};ShapeModifiers.registerModifier('rp',RepeaterModifier);function ShapeCollection(){this._length=0;this._maxLength=4;this.shapes=createSizedArray(this._maxLength);}ShapeCollection.prototype.addShape=function(shapeData){if(this._length===this._maxLength){this.shapes=this.shapes.concat(createSizedArray(this._maxLength));this._maxLength*=2;}this.shapes[this._length]=shapeData;this._length+=1;};ShapeCollection.prototype.releaseShapes=function(){var i;for(i=0;i<this._length;i+=1){shape_pool.release(this.shapes[i]);}this._length=0;};function DashProperty(elem,data,renderer,container){this.elem=elem;this.frameId=-1;this.dataProps=createSizedArray(data.length);this.renderer=renderer;this.k=false;this.dashStr='';this.dashArray=createTypedArray('float32',data.length?data.length-1:0);this.dashoffset=createTypedArray('float32',1);this.initDynamicPropertyContainer(container);var i,len=data.length||0,prop;for(i=0;i<len;i+=1){prop=PropertyFactory.getProp(elem,data[i].v,0,0,this);this.k=prop.k||this.k;this.dataProps[i]={n:data[i].n,p:prop};}if(!this.k){this.getValue(true);}this._isAnimated=this.k;}DashProperty.prototype.getValue=function(forceRender){if(this.elem.globalData.frameId===this.frameId&&!forceRender){return;}this.frameId=this.elem.globalData.frameId;this.iterateDynamicProperties();this._mdf=this._mdf||forceRender;if(this._mdf){var i=0,len=this.dataProps.length;if(this.renderer==='svg'){this.dashStr='';}for(i=0;i<len;i+=1){if(this.dataProps[i].n!='o'){if(this.renderer==='svg'){this.dashStr+=' '+this.dataProps[i].p.v;}else{this.dashArray[i]=this.dataProps[i].p.v;}}else{this.dashoffset[0]=this.dataProps[i].p.v;}}}};extendPrototype([DynamicPropertyContainer],DashProperty);function GradientProperty(elem,data,container){this.data=data;this.c=createTypedArray('uint8c',data.p*4);var cLength=data.k.k[0].s?data.k.k[0].s.length-data.p*4:data.k.k.length-data.p*4;this.o=createTypedArray('float32',cLength);this._cmdf=false;this._omdf=false;this._collapsable=this.checkCollapsable();this._hasOpacity=cLength;this.initDynamicPropertyContainer(container);this.prop=PropertyFactory.getProp(elem,data.k,1,null,this);this.k=this.prop.k;this.getValue(true);}GradientProperty.prototype.comparePoints=function(values,points){var i=0,len=this.o.length/2,diff;while(i<len){diff=Math.abs(values[i*4]-values[points*4+i*2]);if(diff>0.01){return false;}i+=1;}return true;};GradientProperty.prototype.checkCollapsable=function(){if(this.o.length/2!==this.c.length/4){return false;}if(this.data.k.k[0].s){var i=0,len=this.data.k.k.length;while(i<len){if(!this.comparePoints(this.data.k.k[i].s,this.data.p)){return false;}i+=1;}}else if(!this.comparePoints(this.data.k.k,this.data.p)){return false;}return true;};GradientProperty.prototype.getValue=function(forceRender){this.prop.getValue();this._mdf=false;this._cmdf=false;this._omdf=false;if(this.prop._mdf||forceRender){var i,len=this.data.p*4;var mult,val;for(i=0;i<len;i+=1){mult=i%4===0?100:255;val=Math.round(this.prop.v[i]*mult);if(this.c[i]!==val){this.c[i]=val;this._cmdf=!forceRender;}}if(this.o.length){len=this.prop.v.length;for(i=this.data.p*4;i<len;i+=1){mult=i%2===0?100:1;val=i%2===0?Math.round(this.prop.v[i]*100):this.prop.v[i];if(this.o[i-this.data.p*4]!==val){this.o[i-this.data.p*4]=val;this._omdf=!forceRender;}}}this._mdf=!forceRender;}};extendPrototype([DynamicPropertyContainer],GradientProperty);var buildShapeString=function buildShapeString(pathNodes,length,closed,mat){if(length===0){return'';}var _o=pathNodes.o;var _i=pathNodes.i;var _v=pathNodes.v;var i,shapeString=" M"+mat.applyToPointStringified(_v[0][0],_v[0][1]);for(i=1;i<length;i+=1){shapeString+=" C"+mat.applyToPointStringified(_o[i-1][0],_o[i-1][1])+" "+mat.applyToPointStringified(_i[i][0],_i[i][1])+" "+mat.applyToPointStringified(_v[i][0],_v[i][1]);}if(closed&&length){shapeString+=" C"+mat.applyToPointStringified(_o[i-1][0],_o[i-1][1])+" "+mat.applyToPointStringified(_i[0][0],_i[0][1])+" "+mat.applyToPointStringified(_v[0][0],_v[0][1]);shapeString+='z';}return shapeString;};var ImagePreloader=function(){var proxyImage=function(){var canvas=createTag('canvas');canvas.width=1;canvas.height=1;var ctx=canvas.getContext('2d');ctx.fillStyle='rgba(0,0,0,0)';ctx.fillRect(0,0,1,1);return canvas;}();function imageLoaded(){this.loadedAssets+=1;if(this.loadedAssets===this.totalImages){if(this.imagesLoadedCb){this.imagesLoadedCb(null);}}}function getAssetsPath(assetData,assetsPath,original_path){var path='';if(assetData.e){path=assetData.p;}else if(assetsPath){var imagePath=assetData.p;if(imagePath.indexOf('images/')!==-1){imagePath=imagePath.split('/')[1];}path=assetsPath+imagePath;}else{path=original_path;path+=assetData.u?assetData.u:'';path+=assetData.p;}return path;}function createImageData(assetData){var path=getAssetsPath(assetData,this.assetsPath,this.path);var img=createNS('image');img.addEventListener('load',this._imageLoaded,false);img.addEventListener('error',function(){ob.img=proxyImage;this._imageLoaded();}.bind(this),false);img.setAttributeNS('http://www.w3.org/1999/xlink','href',path);var ob={img:img,assetData:assetData};return ob;}function createImgData(assetData){var path=getAssetsPath(assetData,this.assetsPath,this.path);var img=createTag('img');img.crossOrigin='anonymous';img.addEventListener('load',this._imageLoaded,false);img.addEventListener('error',function(){ob.img=proxyImage;this._imageLoaded();}.bind(this),false);img.src=path;var ob={img:img,assetData:assetData};return ob;}function loadAssets(assets,cb){this.imagesLoadedCb=cb;var i,len=assets.length;for(i=0;i<len;i+=1){if(!assets[i].layers){this.totalImages+=1;this.images.push(this._createImageData(assets[i]));}}}function setPath(path){this.path=path||'';}function setAssetsPath(path){this.assetsPath=path||'';}function getImage(assetData){var i=0,len=this.images.length;while(i<len){if(this.images[i].assetData===assetData){return this.images[i].img;}i+=1;}}function destroy(){this.imagesLoadedCb=null;this.images.length=0;}function loaded(){return this.totalImages===this.loadedAssets;}function setCacheType(type){if(type==='svg'){this._createImageData=this.createImageData.bind(this);}else{this._createImageData=this.createImgData.bind(this);}}function ImagePreloader(type){this._imageLoaded=imageLoaded.bind(this);this.assetsPath='';this.path='';this.totalImages=0;this.loadedAssets=0;this.imagesLoadedCb=null;this.images=[];};ImagePreloader.prototype={loadAssets:loadAssets,setAssetsPath:setAssetsPath,setPath:setPath,loaded:loaded,destroy:destroy,getImage:getImage,createImgData:createImgData,createImageData:createImageData,imageLoaded:imageLoaded,setCacheType:setCacheType};return ImagePreloader;}();var featureSupport=function(){var ob={maskType:true};if(/MSIE 10/i.test(navigator.userAgent)||/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent)){ob.maskType=false;}return ob;}();var filtersFactory=function(){var ob={};ob.createFilter=createFilter;ob.createAlphaToLuminanceFilter=createAlphaToLuminanceFilter;function createFilter(filId){var fil=createNS('filter');fil.setAttribute('id',filId);fil.setAttribute('filterUnits','objectBoundingBox');fil.setAttribute('x','0%');fil.setAttribute('y','0%');fil.setAttribute('width','100%');fil.setAttribute('height','100%');return fil;}function createAlphaToLuminanceFilter(){var feColorMatrix=createNS('feColorMatrix');feColorMatrix.setAttribute('type','matrix');feColorMatrix.setAttribute('color-interpolation-filters','sRGB');feColorMatrix.setAttribute('values','0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1');return feColorMatrix;}return ob;}();var assetLoader=function(){function formatResponse(xhr){if(xhr.response&&_typeof(xhr.response)==='object'){return xhr.response;}else if(xhr.response&&typeof xhr.response==='string'){return JSON.parse(xhr.response);}else if(xhr.responseText){return JSON.parse(xhr.responseText);}}function loadAsset(path,callback,errorCallback){var response;var xhr=new XMLHttpRequest();xhr.open('GET',path,true);// set responseType after calling open or IE will break.
try{// This crashes on Android WebView prior to KitKat
xhr.responseType="json";}catch(err){}xhr.send();xhr.onreadystatechange=function(){if(xhr.readyState==4){if(xhr.status==200){response=formatResponse(xhr);callback(response);}else{try{response=formatResponse(xhr);callback(response);}catch(err){if(errorCallback){errorCallback(err);}}}}};}return{load:loadAsset};}();function TextAnimatorProperty(textData,renderType,elem){this._isFirstFrame=true;this._hasMaskedPath=false;this._frameId=-1;this._textData=textData;this._renderType=renderType;this._elem=elem;this._animatorsData=createSizedArray(this._textData.a.length);this._pathData={};this._moreOptions={alignment:{}};this.renderedLetters=[];this.lettersChangedFlag=false;this.initDynamicPropertyContainer(elem);}TextAnimatorProperty.prototype.searchProperties=function(){var i,len=this._textData.a.length,animatorProps;var getProp=PropertyFactory.getProp;for(i=0;i<len;i+=1){animatorProps=this._textData.a[i];this._animatorsData[i]=new TextAnimatorDataProperty(this._elem,animatorProps,this);}if(this._textData.p&&'m'in this._textData.p){this._pathData={f:getProp(this._elem,this._textData.p.f,0,0,this),l:getProp(this._elem,this._textData.p.l,0,0,this),r:this._textData.p.r,m:this._elem.maskManager.getMaskProperty(this._textData.p.m)};this._hasMaskedPath=true;}else{this._hasMaskedPath=false;}this._moreOptions.alignment=getProp(this._elem,this._textData.m.a,1,0,this);};TextAnimatorProperty.prototype.getMeasures=function(documentData,lettersChangedFlag){this.lettersChangedFlag=lettersChangedFlag;if(!this._mdf&&!this._isFirstFrame&&!lettersChangedFlag&&(!this._hasMaskedPath||!this._pathData.m._mdf)){return;}this._isFirstFrame=false;var alignment=this._moreOptions.alignment.v;var animators=this._animatorsData;var textData=this._textData;var matrixHelper=this.mHelper;var renderType=this._renderType;var renderedLettersCount=this.renderedLetters.length;var data=this.data;var xPos,yPos;var i,len;var letters=documentData.l,pathInfo,currentLength,currentPoint,segmentLength,flag,pointInd,segmentInd,prevPoint,points,segments,partialLength,totalLength,perc,tanAngle,mask;if(this._hasMaskedPath){mask=this._pathData.m;if(!this._pathData.n||this._pathData._mdf){var paths=mask.v;if(this._pathData.r){paths=paths.reverse();}// TODO: release bezier data cached from previous pathInfo: this._pathData.pi
pathInfo={tLength:0,segments:[]};len=paths._length-1;var bezierData;totalLength=0;for(i=0;i<len;i+=1){bezierData=bez.buildBezierData(paths.v[i],paths.v[i+1],[paths.o[i][0]-paths.v[i][0],paths.o[i][1]-paths.v[i][1]],[paths.i[i+1][0]-paths.v[i+1][0],paths.i[i+1][1]-paths.v[i+1][1]]);pathInfo.tLength+=bezierData.segmentLength;pathInfo.segments.push(bezierData);totalLength+=bezierData.segmentLength;}i=len;if(mask.v.c){bezierData=bez.buildBezierData(paths.v[i],paths.v[0],[paths.o[i][0]-paths.v[i][0],paths.o[i][1]-paths.v[i][1]],[paths.i[0][0]-paths.v[0][0],paths.i[0][1]-paths.v[0][1]]);pathInfo.tLength+=bezierData.segmentLength;pathInfo.segments.push(bezierData);totalLength+=bezierData.segmentLength;}this._pathData.pi=pathInfo;}pathInfo=this._pathData.pi;currentLength=this._pathData.f.v;segmentInd=0;pointInd=1;segmentLength=0;flag=true;segments=pathInfo.segments;if(currentLength<0&&mask.v.c){if(pathInfo.tLength<Math.abs(currentLength)){currentLength=-Math.abs(currentLength)%pathInfo.tLength;}segmentInd=segments.length-1;points=segments[segmentInd].points;pointInd=points.length-1;while(currentLength<0){currentLength+=points[pointInd].partialLength;pointInd-=1;if(pointInd<0){segmentInd-=1;points=segments[segmentInd].points;pointInd=points.length-1;}}}points=segments[segmentInd].points;prevPoint=points[pointInd-1];currentPoint=points[pointInd];partialLength=currentPoint.partialLength;}len=letters.length;xPos=0;yPos=0;var yOff=documentData.finalSize*1.2*0.714;var firstLine=true;var animatorProps,animatorSelector;var j,jLen;var letterValue;jLen=animators.length;var lastLetter;var mult,ind=-1,offf,xPathPos,yPathPos;var initPathPos=currentLength,initSegmentInd=segmentInd,initPointInd=pointInd,currentLine=-1;var elemOpacity;var sc,sw,fc,k;var lineLength=0;var letterSw,letterSc,letterFc,letterM='',letterP=this.defaultPropsArray,letterO;//
if(documentData.j===2||documentData.j===1){var animatorJustifyOffset=0;var animatorFirstCharOffset=0;var justifyOffsetMult=documentData.j===2?-0.5:-1;var lastIndex=0;var isNewLine=true;for(i=0;i<len;i+=1){if(letters[i].n){if(animatorJustifyOffset){animatorJustifyOffset+=animatorFirstCharOffset;}while(lastIndex<i){letters[lastIndex].animatorJustifyOffset=animatorJustifyOffset;lastIndex+=1;}animatorJustifyOffset=0;isNewLine=true;}else{for(j=0;j<jLen;j+=1){animatorProps=animators[j].a;if(animatorProps.t.propType){if(isNewLine&&documentData.j===2){animatorFirstCharOffset+=animatorProps.t.v*justifyOffsetMult;}animatorSelector=animators[j].s;mult=animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);if(mult.length){animatorJustifyOffset+=animatorProps.t.v*mult[0]*justifyOffsetMult;}else{animatorJustifyOffset+=animatorProps.t.v*mult*justifyOffsetMult;}}}isNewLine=false;}}if(animatorJustifyOffset){animatorJustifyOffset+=animatorFirstCharOffset;}while(lastIndex<i){letters[lastIndex].animatorJustifyOffset=animatorJustifyOffset;lastIndex+=1;}}//
for(i=0;i<len;i+=1){matrixHelper.reset();elemOpacity=1;if(letters[i].n){xPos=0;yPos+=documentData.yOffset;yPos+=firstLine?1:0;currentLength=initPathPos;firstLine=false;lineLength=0;if(this._hasMaskedPath){segmentInd=initSegmentInd;pointInd=initPointInd;points=segments[segmentInd].points;prevPoint=points[pointInd-1];currentPoint=points[pointInd];partialLength=currentPoint.partialLength;segmentLength=0;}letterO=letterSw=letterFc=letterM='';letterP=this.defaultPropsArray;}else{if(this._hasMaskedPath){if(currentLine!==letters[i].line){switch(documentData.j){case 1:currentLength+=totalLength-documentData.lineWidths[letters[i].line];break;case 2:currentLength+=(totalLength-documentData.lineWidths[letters[i].line])/2;break;}currentLine=letters[i].line;}if(ind!==letters[i].ind){if(letters[ind]){currentLength+=letters[ind].extra;}currentLength+=letters[i].an/2;ind=letters[i].ind;}currentLength+=alignment[0]*letters[i].an/200;var animatorOffset=0;for(j=0;j<jLen;j+=1){animatorProps=animators[j].a;if(animatorProps.p.propType){animatorSelector=animators[j].s;mult=animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);if(mult.length){animatorOffset+=animatorProps.p.v[0]*mult[0];}else{animatorOffset+=animatorProps.p.v[0]*mult;}}if(animatorProps.a.propType){animatorSelector=animators[j].s;mult=animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);if(mult.length){animatorOffset+=animatorProps.a.v[0]*mult[0];}else{animatorOffset+=animatorProps.a.v[0]*mult;}}}flag=true;while(flag){if(segmentLength+partialLength>=currentLength+animatorOffset||!points){perc=(currentLength+animatorOffset-segmentLength)/currentPoint.partialLength;xPathPos=prevPoint.point[0]+(currentPoint.point[0]-prevPoint.point[0])*perc;yPathPos=prevPoint.point[1]+(currentPoint.point[1]-prevPoint.point[1])*perc;matrixHelper.translate(-alignment[0]*letters[i].an/200,-(alignment[1]*yOff/100));flag=false;}else if(points){segmentLength+=currentPoint.partialLength;pointInd+=1;if(pointInd>=points.length){pointInd=0;segmentInd+=1;if(!segments[segmentInd]){if(mask.v.c){pointInd=0;segmentInd=0;points=segments[segmentInd].points;}else{segmentLength-=currentPoint.partialLength;points=null;}}else{points=segments[segmentInd].points;}}if(points){prevPoint=currentPoint;currentPoint=points[pointInd];partialLength=currentPoint.partialLength;}}}offf=letters[i].an/2-letters[i].add;matrixHelper.translate(-offf,0,0);}else{offf=letters[i].an/2-letters[i].add;matrixHelper.translate(-offf,0,0);// Grouping alignment
matrixHelper.translate(-alignment[0]*letters[i].an/200,-alignment[1]*yOff/100,0);}lineLength+=letters[i].l/2;for(j=0;j<jLen;j+=1){animatorProps=animators[j].a;if(animatorProps.t.propType){animatorSelector=animators[j].s;mult=animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);//This condition is to prevent applying tracking to first character in each line. Might be better to use a boolean "isNewLine"
if(xPos!==0||documentData.j!==0){if(this._hasMaskedPath){if(mult.length){currentLength+=animatorProps.t.v*mult[0];}else{currentLength+=animatorProps.t.v*mult;}}else{if(mult.length){xPos+=animatorProps.t.v*mult[0];}else{xPos+=animatorProps.t.v*mult;}}}}}lineLength+=letters[i].l/2;if(documentData.strokeWidthAnim){sw=documentData.sw||0;}if(documentData.strokeColorAnim){if(documentData.sc){sc=[documentData.sc[0],documentData.sc[1],documentData.sc[2]];}else{sc=[0,0,0];}}if(documentData.fillColorAnim&&documentData.fc){fc=[documentData.fc[0],documentData.fc[1],documentData.fc[2]];}for(j=0;j<jLen;j+=1){animatorProps=animators[j].a;if(animatorProps.a.propType){animatorSelector=animators[j].s;mult=animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);if(mult.length){matrixHelper.translate(-animatorProps.a.v[0]*mult[0],-animatorProps.a.v[1]*mult[1],animatorProps.a.v[2]*mult[2]);}else{matrixHelper.translate(-animatorProps.a.v[0]*mult,-animatorProps.a.v[1]*mult,animatorProps.a.v[2]*mult);}}}for(j=0;j<jLen;j+=1){animatorProps=animators[j].a;if(animatorProps.s.propType){animatorSelector=animators[j].s;mult=animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);if(mult.length){matrixHelper.scale(1+(animatorProps.s.v[0]-1)*mult[0],1+(animatorProps.s.v[1]-1)*mult[1],1);}else{matrixHelper.scale(1+(animatorProps.s.v[0]-1)*mult,1+(animatorProps.s.v[1]-1)*mult,1);}}}for(j=0;j<jLen;j+=1){animatorProps=animators[j].a;animatorSelector=animators[j].s;mult=animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);if(animatorProps.sk.propType){if(mult.length){matrixHelper.skewFromAxis(-animatorProps.sk.v*mult[0],animatorProps.sa.v*mult[1]);}else{matrixHelper.skewFromAxis(-animatorProps.sk.v*mult,animatorProps.sa.v*mult);}}if(animatorProps.r.propType){if(mult.length){matrixHelper.rotateZ(-animatorProps.r.v*mult[2]);}else{matrixHelper.rotateZ(-animatorProps.r.v*mult);}}if(animatorProps.ry.propType){if(mult.length){matrixHelper.rotateY(animatorProps.ry.v*mult[1]);}else{matrixHelper.rotateY(animatorProps.ry.v*mult);}}if(animatorProps.rx.propType){if(mult.length){matrixHelper.rotateX(animatorProps.rx.v*mult[0]);}else{matrixHelper.rotateX(animatorProps.rx.v*mult);}}if(animatorProps.o.propType){if(mult.length){elemOpacity+=(animatorProps.o.v*mult[0]-elemOpacity)*mult[0];}else{elemOpacity+=(animatorProps.o.v*mult-elemOpacity)*mult;}}if(documentData.strokeWidthAnim&&animatorProps.sw.propType){if(mult.length){sw+=animatorProps.sw.v*mult[0];}else{sw+=animatorProps.sw.v*mult;}}if(documentData.strokeColorAnim&&animatorProps.sc.propType){for(k=0;k<3;k+=1){if(mult.length){sc[k]=sc[k]+(animatorProps.sc.v[k]-sc[k])*mult[0];}else{sc[k]=sc[k]+(animatorProps.sc.v[k]-sc[k])*mult;}}}if(documentData.fillColorAnim&&documentData.fc){if(animatorProps.fc.propType){for(k=0;k<3;k+=1){if(mult.length){fc[k]=fc[k]+(animatorProps.fc.v[k]-fc[k])*mult[0];}else{fc[k]=fc[k]+(animatorProps.fc.v[k]-fc[k])*mult;}}}if(animatorProps.fh.propType){if(mult.length){fc=addHueToRGB(fc,animatorProps.fh.v*mult[0]);}else{fc=addHueToRGB(fc,animatorProps.fh.v*mult);}}if(animatorProps.fs.propType){if(mult.length){fc=addSaturationToRGB(fc,animatorProps.fs.v*mult[0]);}else{fc=addSaturationToRGB(fc,animatorProps.fs.v*mult);}}if(animatorProps.fb.propType){if(mult.length){fc=addBrightnessToRGB(fc,animatorProps.fb.v*mult[0]);}else{fc=addBrightnessToRGB(fc,animatorProps.fb.v*mult);}}}}for(j=0;j<jLen;j+=1){animatorProps=animators[j].a;if(animatorProps.p.propType){animatorSelector=animators[j].s;mult=animatorSelector.getMult(letters[i].anIndexes[j],textData.a[j].s.totalChars);if(this._hasMaskedPath){if(mult.length){matrixHelper.translate(0,animatorProps.p.v[1]*mult[0],-animatorProps.p.v[2]*mult[1]);}else{matrixHelper.translate(0,animatorProps.p.v[1]*mult,-animatorProps.p.v[2]*mult);}}else{if(mult.length){matrixHelper.translate(animatorProps.p.v[0]*mult[0],animatorProps.p.v[1]*mult[1],-animatorProps.p.v[2]*mult[2]);}else{matrixHelper.translate(animatorProps.p.v[0]*mult,animatorProps.p.v[1]*mult,-animatorProps.p.v[2]*mult);}}}}if(documentData.strokeWidthAnim){letterSw=sw<0?0:sw;}if(documentData.strokeColorAnim){letterSc='rgb('+Math.round(sc[0]*255)+','+Math.round(sc[1]*255)+','+Math.round(sc[2]*255)+')';}if(documentData.fillColorAnim&&documentData.fc){letterFc='rgb('+Math.round(fc[0]*255)+','+Math.round(fc[1]*255)+','+Math.round(fc[2]*255)+')';}if(this._hasMaskedPath){matrixHelper.translate(0,-documentData.ls);matrixHelper.translate(0,alignment[1]*yOff/100+yPos,0);if(textData.p.p){tanAngle=(currentPoint.point[1]-prevPoint.point[1])/(currentPoint.point[0]-prevPoint.point[0]);var rot=Math.atan(tanAngle)*180/Math.PI;if(currentPoint.point[0]<prevPoint.point[0]){rot+=180;}matrixHelper.rotate(-rot*Math.PI/180);}matrixHelper.translate(xPathPos,yPathPos,0);currentLength-=alignment[0]*letters[i].an/200;if(letters[i+1]&&ind!==letters[i+1].ind){currentLength+=letters[i].an/2;currentLength+=documentData.tr/1000*documentData.finalSize;}}else{matrixHelper.translate(xPos,yPos,0);if(documentData.ps){//matrixHelper.translate(documentData.ps[0],documentData.ps[1],0);
matrixHelper.translate(documentData.ps[0],documentData.ps[1]+documentData.ascent,0);}switch(documentData.j){case 1:matrixHelper.translate(letters[i].animatorJustifyOffset+documentData.justifyOffset+(documentData.boxWidth-documentData.lineWidths[letters[i].line]),0,0);break;case 2:matrixHelper.translate(letters[i].animatorJustifyOffset+documentData.justifyOffset+(documentData.boxWidth-documentData.lineWidths[letters[i].line])/2,0,0);break;}matrixHelper.translate(0,-documentData.ls);matrixHelper.translate(offf,0,0);matrixHelper.translate(alignment[0]*letters[i].an/200,alignment[1]*yOff/100,0);xPos+=letters[i].l+documentData.tr/1000*documentData.finalSize;}if(renderType==='html'){letterM=matrixHelper.toCSS();}else if(renderType==='svg'){letterM=matrixHelper.to2dCSS();}else{letterP=[matrixHelper.props[0],matrixHelper.props[1],matrixHelper.props[2],matrixHelper.props[3],matrixHelper.props[4],matrixHelper.props[5],matrixHelper.props[6],matrixHelper.props[7],matrixHelper.props[8],matrixHelper.props[9],matrixHelper.props[10],matrixHelper.props[11],matrixHelper.props[12],matrixHelper.props[13],matrixHelper.props[14],matrixHelper.props[15]];}letterO=elemOpacity;}if(renderedLettersCount<=i){letterValue=new LetterProps(letterO,letterSw,letterSc,letterFc,letterM,letterP);this.renderedLetters.push(letterValue);renderedLettersCount+=1;this.lettersChangedFlag=true;}else{letterValue=this.renderedLetters[i];this.lettersChangedFlag=letterValue.update(letterO,letterSw,letterSc,letterFc,letterM,letterP)||this.lettersChangedFlag;}}};TextAnimatorProperty.prototype.getValue=function(){if(this._elem.globalData.frameId===this._frameId){return;}this._frameId=this._elem.globalData.frameId;this.iterateDynamicProperties();};TextAnimatorProperty.prototype.mHelper=new Matrix();TextAnimatorProperty.prototype.defaultPropsArray=[];extendPrototype([DynamicPropertyContainer],TextAnimatorProperty);function TextAnimatorDataProperty(elem,animatorProps,container){var defaultData={propType:false};var getProp=PropertyFactory.getProp;var textAnimator_animatables=animatorProps.a;this.a={r:textAnimator_animatables.r?getProp(elem,textAnimator_animatables.r,0,degToRads,container):defaultData,rx:textAnimator_animatables.rx?getProp(elem,textAnimator_animatables.rx,0,degToRads,container):defaultData,ry:textAnimator_animatables.ry?getProp(elem,textAnimator_animatables.ry,0,degToRads,container):defaultData,sk:textAnimator_animatables.sk?getProp(elem,textAnimator_animatables.sk,0,degToRads,container):defaultData,sa:textAnimator_animatables.sa?getProp(elem,textAnimator_animatables.sa,0,degToRads,container):defaultData,s:textAnimator_animatables.s?getProp(elem,textAnimator_animatables.s,1,0.01,container):defaultData,a:textAnimator_animatables.a?getProp(elem,textAnimator_animatables.a,1,0,container):defaultData,o:textAnimator_animatables.o?getProp(elem,textAnimator_animatables.o,0,0.01,container):defaultData,p:textAnimator_animatables.p?getProp(elem,textAnimator_animatables.p,1,0,container):defaultData,sw:textAnimator_animatables.sw?getProp(elem,textAnimator_animatables.sw,0,0,container):defaultData,sc:textAnimator_animatables.sc?getProp(elem,textAnimator_animatables.sc,1,0,container):defaultData,fc:textAnimator_animatables.fc?getProp(elem,textAnimator_animatables.fc,1,0,container):defaultData,fh:textAnimator_animatables.fh?getProp(elem,textAnimator_animatables.fh,0,0,container):defaultData,fs:textAnimator_animatables.fs?getProp(elem,textAnimator_animatables.fs,0,0.01,container):defaultData,fb:textAnimator_animatables.fb?getProp(elem,textAnimator_animatables.fb,0,0.01,container):defaultData,t:textAnimator_animatables.t?getProp(elem,textAnimator_animatables.t,0,0,container):defaultData};this.s=TextSelectorProp.getTextSelectorProp(elem,animatorProps.s,container);this.s.t=animatorProps.s.t;}function LetterProps(o,sw,sc,fc,m,p){this.o=o;this.sw=sw;this.sc=sc;this.fc=fc;this.m=m;this.p=p;this._mdf={o:true,sw:!!sw,sc:!!sc,fc:!!fc,m:true,p:true};}LetterProps.prototype.update=function(o,sw,sc,fc,m,p){this._mdf.o=false;this._mdf.sw=false;this._mdf.sc=false;this._mdf.fc=false;this._mdf.m=false;this._mdf.p=false;var updated=false;if(this.o!==o){this.o=o;this._mdf.o=true;updated=true;}if(this.sw!==sw){this.sw=sw;this._mdf.sw=true;updated=true;}if(this.sc!==sc){this.sc=sc;this._mdf.sc=true;updated=true;}if(this.fc!==fc){this.fc=fc;this._mdf.fc=true;updated=true;}if(this.m!==m){this.m=m;this._mdf.m=true;updated=true;}if(p.length&&(this.p[0]!==p[0]||this.p[1]!==p[1]||this.p[4]!==p[4]||this.p[5]!==p[5]||this.p[12]!==p[12]||this.p[13]!==p[13])){this.p=p;this._mdf.p=true;updated=true;}return updated;};function TextProperty(elem,data){this._frameId=initialDefaultFrame;this.pv='';this.v='';this.kf=false;this._isFirstFrame=true;this._mdf=false;this.data=data;this.elem=elem;this.comp=this.elem.comp;this.keysIndex=0;this.canResize=false;this.minimumFontSize=1;this.effectsSequence=[];this.currentData={ascent:0,boxWidth:this.defaultBoxWidth,f:'',fStyle:'',fWeight:'',fc:'',j:'',justifyOffset:'',l:[],lh:0,lineWidths:[],ls:'',of:'',s:'',sc:'',sw:0,t:0,tr:0,sz:0,ps:null,fillColorAnim:false,strokeColorAnim:false,strokeWidthAnim:false,yOffset:0,finalSize:0,finalText:[],finalLineHeight:0,__complete:false};this.copyData(this.currentData,this.data.d.k[0].s);if(!this.searchProperty()){this.completeTextData(this.currentData);}}TextProperty.prototype.defaultBoxWidth=[0,0];TextProperty.prototype.copyData=function(obj,data){for(var s in data){if(data.hasOwnProperty(s)){obj[s]=data[s];}}return obj;};TextProperty.prototype.setCurrentData=function(data){if(!data.__complete){this.completeTextData(data);}this.currentData=data;this.currentData.boxWidth=this.currentData.boxWidth||this.defaultBoxWidth;this._mdf=true;};TextProperty.prototype.searchProperty=function(){return this.searchKeyframes();};TextProperty.prototype.searchKeyframes=function(){this.kf=this.data.d.k.length>1;if(this.kf){this.addEffect(this.getKeyframeValue.bind(this));}return this.kf;};TextProperty.prototype.addEffect=function(effectFunction){this.effectsSequence.push(effectFunction);this.elem.addDynamicProperty(this);};TextProperty.prototype.getValue=function(_finalValue){if((this.elem.globalData.frameId===this.frameId||!this.effectsSequence.length)&&!_finalValue){return;}this.currentData.t=this.data.d.k[this.keysIndex].s.t;var currentValue=this.currentData;var currentIndex=this.keysIndex;if(this.lock){this.setCurrentData(this.currentData);return;}this.lock=true;this._mdf=false;var multipliedValue;var i,len=this.effectsSequence.length;var finalValue=_finalValue||this.data.d.k[this.keysIndex].s;for(i=0;i<len;i+=1){//Checking if index changed to prevent creating a new object every time the expression updates.
if(currentIndex!==this.keysIndex){finalValue=this.effectsSequence[i](finalValue,finalValue.t);}else{finalValue=this.effectsSequence[i](this.currentData,finalValue.t);}}if(currentValue!==finalValue){this.setCurrentData(finalValue);}this.pv=this.v=this.currentData;this.lock=false;this.frameId=this.elem.globalData.frameId;};TextProperty.prototype.getKeyframeValue=function(){var textKeys=this.data.d.k,textDocumentData;var frameNum=this.elem.comp.renderedFrame;var i=0,len=textKeys.length;while(i<=len-1){textDocumentData=textKeys[i].s;if(i===len-1||textKeys[i+1].t>frameNum){break;}i+=1;}if(this.keysIndex!==i){this.keysIndex=i;}return this.data.d.k[this.keysIndex].s;};TextProperty.prototype.buildFinalText=function(text){var combinedCharacters=FontManager.getCombinedCharacterCodes();var charactersArray=[];var i=0,len=text.length;var charCode;while(i<len){charCode=text.charCodeAt(i);if(combinedCharacters.indexOf(charCode)!==-1){charactersArray[charactersArray.length-1]+=text.charAt(i);}else{if(charCode>=0xD800&&charCode<=0xDBFF){charCode=text.charCodeAt(i+1);if(charCode>=0xDC00&&charCode<=0xDFFF){charactersArray.push(text.substr(i,2));++i;}else{charactersArray.push(text.charAt(i));}}else{charactersArray.push(text.charAt(i));}}i+=1;}return charactersArray;};TextProperty.prototype.completeTextData=function(documentData){documentData.__complete=true;var fontManager=this.elem.globalData.fontManager;var data=this.data;var letters=[];var i,len;var newLineFlag,index=0,val;var anchorGrouping=data.m.g;var currentSize=0,currentPos=0,currentLine=0,lineWidths=[];var lineWidth=0;var maxLineWidth=0;var j,jLen;var fontData=fontManager.getFontByName(documentData.f);var charData,cLength=0;var styles=fontData.fStyle?fontData.fStyle.split(' '):[];var fWeight='normal',fStyle='normal';len=styles.length;var styleName;for(i=0;i<len;i+=1){styleName=styles[i].toLowerCase();switch(styleName){case'italic':fStyle='italic';break;case'bold':fWeight='700';break;case'black':fWeight='900';break;case'medium':fWeight='500';break;case'regular':case'normal':fWeight='400';break;case'light':case'thin':fWeight='200';break;}}documentData.fWeight=fontData.fWeight||fWeight;documentData.fStyle=fStyle;documentData.finalSize=documentData.s;documentData.finalText=this.buildFinalText(documentData.t);len=documentData.finalText.length;documentData.finalLineHeight=documentData.lh;var trackingOffset=documentData.tr/1000*documentData.finalSize;var charCode;if(documentData.sz){var flag=true;var boxWidth=documentData.sz[0];var boxHeight=documentData.sz[1];var currentHeight,finalText;while(flag){finalText=this.buildFinalText(documentData.t);currentHeight=0;lineWidth=0;len=finalText.length;trackingOffset=documentData.tr/1000*documentData.finalSize;var lastSpaceIndex=-1;for(i=0;i<len;i+=1){charCode=finalText[i].charCodeAt(0);newLineFlag=false;if(finalText[i]===' '){lastSpaceIndex=i;}else if(charCode===13||charCode===3){lineWidth=0;newLineFlag=true;currentHeight+=documentData.finalLineHeight||documentData.finalSize*1.2;}if(fontManager.chars){charData=fontManager.getCharData(finalText[i],fontData.fStyle,fontData.fFamily);cLength=newLineFlag?0:charData.w*documentData.finalSize/100;}else{//tCanvasHelper.font = documentData.s + 'px '+ fontData.fFamily;
cLength=fontManager.measureText(finalText[i],documentData.f,documentData.finalSize);}if(lineWidth+cLength>boxWidth&&finalText[i]!==' '){if(lastSpaceIndex===-1){len+=1;}else{i=lastSpaceIndex;}currentHeight+=documentData.finalLineHeight||documentData.finalSize*1.2;finalText.splice(i,lastSpaceIndex===i?1:0,"\r");//finalText = finalText.substr(0,i) + "\r" + finalText.substr(i === lastSpaceIndex ? i + 1 : i);
lastSpaceIndex=-1;lineWidth=0;}else{lineWidth+=cLength;lineWidth+=trackingOffset;}}currentHeight+=fontData.ascent*documentData.finalSize/100;if(this.canResize&&documentData.finalSize>this.minimumFontSize&&boxHeight<currentHeight){documentData.finalSize-=1;documentData.finalLineHeight=documentData.finalSize*documentData.lh/documentData.s;}else{documentData.finalText=finalText;len=documentData.finalText.length;flag=false;}}}lineWidth=-trackingOffset;cLength=0;var uncollapsedSpaces=0;var currentChar;for(i=0;i<len;i+=1){newLineFlag=false;currentChar=documentData.finalText[i];charCode=currentChar.charCodeAt(0);if(charCode===13||charCode===3){uncollapsedSpaces=0;lineWidths.push(lineWidth);maxLineWidth=lineWidth>maxLineWidth?lineWidth:maxLineWidth;lineWidth=-2*trackingOffset;val='';newLineFlag=true;currentLine+=1;}else{val=currentChar;}if(fontManager.chars){charData=fontManager.getCharData(currentChar,fontData.fStyle,fontManager.getFontByName(documentData.f).fFamily);cLength=newLineFlag?0:charData.w*documentData.finalSize/100;}else{//var charWidth = fontManager.measureText(val, documentData.f, documentData.finalSize);
//tCanvasHelper.font = documentData.finalSize + 'px '+ fontManager.getFontByName(documentData.f).fFamily;
cLength=fontManager.measureText(val,documentData.f,documentData.finalSize);}//
if(currentChar===' '){uncollapsedSpaces+=cLength+trackingOffset;}else{lineWidth+=cLength+trackingOffset+uncollapsedSpaces;uncollapsedSpaces=0;}letters.push({l:cLength,an:cLength,add:currentSize,n:newLineFlag,anIndexes:[],val:val,line:currentLine,animatorJustifyOffset:0});if(anchorGrouping==2){currentSize+=cLength;if(val===''||val===' '||i===len-1){if(val===''||val===' '){currentSize-=cLength;}while(currentPos<=i){letters[currentPos].an=currentSize;letters[currentPos].ind=index;letters[currentPos].extra=cLength;currentPos+=1;}index+=1;currentSize=0;}}else if(anchorGrouping==3){currentSize+=cLength;if(val===''||i===len-1){if(val===''){currentSize-=cLength;}while(currentPos<=i){letters[currentPos].an=currentSize;letters[currentPos].ind=index;letters[currentPos].extra=cLength;currentPos+=1;}currentSize=0;index+=1;}}else{letters[index].ind=index;letters[index].extra=0;index+=1;}}documentData.l=letters;maxLineWidth=lineWidth>maxLineWidth?lineWidth:maxLineWidth;lineWidths.push(lineWidth);if(documentData.sz){documentData.boxWidth=documentData.sz[0];documentData.justifyOffset=0;}else{documentData.boxWidth=maxLineWidth;switch(documentData.j){case 1:documentData.justifyOffset=-documentData.boxWidth;break;case 2:documentData.justifyOffset=-documentData.boxWidth/2;break;default:documentData.justifyOffset=0;}}documentData.lineWidths=lineWidths;var animators=data.a,animatorData,letterData;jLen=animators.length;var based,ind,indexes=[];for(j=0;j<jLen;j+=1){animatorData=animators[j];if(animatorData.a.sc){documentData.strokeColorAnim=true;}if(animatorData.a.sw){documentData.strokeWidthAnim=true;}if(animatorData.a.fc||animatorData.a.fh||animatorData.a.fs||animatorData.a.fb){documentData.fillColorAnim=true;}ind=0;based=animatorData.s.b;for(i=0;i<len;i+=1){letterData=letters[i];letterData.anIndexes[j]=ind;if(based==1&&letterData.val!==''||based==2&&letterData.val!==''&&letterData.val!==' '||based==3&&(letterData.n||letterData.val==' '||i==len-1)||based==4&&(letterData.n||i==len-1)){if(animatorData.s.rn===1){indexes.push(ind);}ind+=1;}}data.a[j].s.totalChars=ind;var currentInd=-1,newInd;if(animatorData.s.rn===1){for(i=0;i<len;i+=1){letterData=letters[i];if(currentInd!=letterData.anIndexes[j]){currentInd=letterData.anIndexes[j];newInd=indexes.splice(Math.floor(Math.random()*indexes.length),1)[0];}letterData.anIndexes[j]=newInd;}}}documentData.yOffset=documentData.finalLineHeight||documentData.finalSize*1.2;documentData.ls=documentData.ls||0;documentData.ascent=fontData.ascent*documentData.finalSize/100;};TextProperty.prototype.updateDocumentData=function(newData,index){index=index===undefined?this.keysIndex:index;var dData=this.copyData({},this.data.d.k[index].s);dData=this.copyData(dData,newData);this.data.d.k[index].s=dData;this.recalculate(index);this.elem.addDynamicProperty(this);};TextProperty.prototype.recalculate=function(index){var dData=this.data.d.k[index].s;dData.__complete=false;this.keysIndex=0;this._isFirstFrame=true;this.getValue(dData);};TextProperty.prototype.canResizeFont=function(_canResize){this.canResize=_canResize;this.recalculate(this.keysIndex);this.elem.addDynamicProperty(this);};TextProperty.prototype.setMinimumFontSize=function(_fontValue){this.minimumFontSize=Math.floor(_fontValue)||1;this.recalculate(this.keysIndex);this.elem.addDynamicProperty(this);};var TextSelectorProp=function(){var max=Math.max;var min=Math.min;var floor=Math.floor;function TextSelectorProp(elem,data){this._currentTextLength=-1;this.k=false;this.data=data;this.elem=elem;this.comp=elem.comp;this.finalS=0;this.finalE=0;this.initDynamicPropertyContainer(elem);this.s=PropertyFactory.getProp(elem,data.s||{k:0},0,0,this);if('e'in data){this.e=PropertyFactory.getProp(elem,data.e,0,0,this);}else{this.e={v:100};}this.o=PropertyFactory.getProp(elem,data.o||{k:0},0,0,this);this.xe=PropertyFactory.getProp(elem,data.xe||{k:0},0,0,this);this.ne=PropertyFactory.getProp(elem,data.ne||{k:0},0,0,this);this.a=PropertyFactory.getProp(elem,data.a,0,0.01,this);if(!this.dynamicProperties.length){this.getValue();}}TextSelectorProp.prototype={getMult:function getMult(ind){if(this._currentTextLength!==this.elem.textProperty.currentData.l.length){this.getValue();}//var easer = bez.getEasingCurve(this.ne.v/100,0,1-this.xe.v/100,1);
var x1=0;var y1=0;var x2=1;var y2=1;if(this.ne.v>0){x1=this.ne.v/100.0;}else{y1=-this.ne.v/100.0;}if(this.xe.v>0){x2=1.0-this.xe.v/100.0;}else{y2=1.0+this.xe.v/100.0;}var easer=BezierFactory.getBezierEasing(x1,y1,x2,y2).get;var mult=0;var s=this.finalS;var e=this.finalE;var type=this.data.sh;if(type===2){if(e===s){mult=ind>=e?1:0;}else{mult=max(0,min(0.5/(e-s)+(ind-s)/(e-s),1));}mult=easer(mult);}else if(type===3){if(e===s){mult=ind>=e?0:1;}else{mult=1-max(0,min(0.5/(e-s)+(ind-s)/(e-s),1));}mult=easer(mult);}else if(type===4){if(e===s){mult=0;}else{mult=max(0,min(0.5/(e-s)+(ind-s)/(e-s),1));if(mult<0.5){mult*=2;}else{mult=1-2*(mult-0.5);}}mult=easer(mult);}else if(type===5){if(e===s){mult=0;}else{var tot=e-s;/*ind += 0.5;
            mult = -4/(tot*tot)*(ind*ind)+(4/tot)*ind;*/ind=min(max(0,ind+0.5-s),e-s);var x=-tot/2+ind;var a=tot/2;mult=Math.sqrt(1-x*x/(a*a));}mult=easer(mult);}else if(type===6){if(e===s){mult=0;}else{ind=min(max(0,ind+0.5-s),e-s);mult=(1+Math.cos(Math.PI+Math.PI*2*ind/(e-s)))/2;}mult=easer(mult);}else{if(ind>=floor(s)){if(ind-s<0){mult=max(0,min(min(e,1)-(s-ind),1));}else{mult=max(0,min(e-ind,1));}}mult=easer(mult);}return mult*this.a.v;},getValue:function getValue(newCharsFlag){this.iterateDynamicProperties();this._mdf=newCharsFlag||this._mdf;this._currentTextLength=this.elem.textProperty.currentData.l.length||0;if(newCharsFlag&&this.data.r===2){this.e.v=this._currentTextLength;}var divisor=this.data.r===2?1:100/this.data.totalChars;var o=this.o.v/divisor;var s=this.s.v/divisor+o;var e=this.e.v/divisor+o;if(s>e){var _s=s;s=e;e=_s;}this.finalS=s;this.finalE=e;}};extendPrototype([DynamicPropertyContainer],TextSelectorProp);function getTextSelectorProp(elem,data,arr){return new TextSelectorProp(elem,data,arr);}return{getTextSelectorProp:getTextSelectorProp};}();var pool_factory=function(){return function(initialLength,_create,_release,_clone){var _length=0;var _maxLength=initialLength;var pool=createSizedArray(_maxLength);var ob={newElement:newElement,release:release};function newElement(){var element;if(_length){_length-=1;element=pool[_length];}else{element=_create();}return element;}function release(element){if(_length===_maxLength){pool=pooling.double(pool);_maxLength=_maxLength*2;}if(_release){_release(element);}pool[_length]=element;_length+=1;}function clone(){var clonedElement=newElement();return _clone(clonedElement);}return ob;};}();var pooling=function(){function double(arr){return arr.concat(createSizedArray(arr.length));}return{double:double};}();var point_pool=function(){function create(){return createTypedArray('float32',2);}return pool_factory(8,create);}();var shape_pool=function(){function create(){return new ShapePath();}function release(shapePath){var len=shapePath._length,i;for(i=0;i<len;i+=1){point_pool.release(shapePath.v[i]);point_pool.release(shapePath.i[i]);point_pool.release(shapePath.o[i]);shapePath.v[i]=null;shapePath.i[i]=null;shapePath.o[i]=null;}shapePath._length=0;shapePath.c=false;}function clone(shape){var cloned=factory.newElement();var i,len=shape._length===undefined?shape.v.length:shape._length;cloned.setLength(len);cloned.c=shape.c;var pt;for(i=0;i<len;i+=1){cloned.setTripleAt(shape.v[i][0],shape.v[i][1],shape.o[i][0],shape.o[i][1],shape.i[i][0],shape.i[i][1],i);}return cloned;}var factory=pool_factory(4,create,release);factory.clone=clone;return factory;}();var shapeCollection_pool=function(){var ob={newShapeCollection:newShapeCollection,release:release};var _length=0;var _maxLength=4;var pool=createSizedArray(_maxLength);function newShapeCollection(){var shapeCollection;if(_length){_length-=1;shapeCollection=pool[_length];}else{shapeCollection=new ShapeCollection();}return shapeCollection;}function release(shapeCollection){var i,len=shapeCollection._length;for(i=0;i<len;i+=1){shape_pool.release(shapeCollection.shapes[i]);}shapeCollection._length=0;if(_length===_maxLength){pool=pooling.double(pool);_maxLength=_maxLength*2;}pool[_length]=shapeCollection;_length+=1;}return ob;}();var segments_length_pool=function(){function create(){return{lengths:[],totalLength:0};}function release(element){var i,len=element.lengths.length;for(i=0;i<len;i+=1){bezier_length_pool.release(element.lengths[i]);}element.lengths.length=0;}return pool_factory(8,create,release);}();var bezier_length_pool=function(){function create(){return{addedLength:0,percents:createTypedArray('float32',defaultCurveSegments),lengths:createTypedArray('float32',defaultCurveSegments)};}return pool_factory(8,create);}();function BaseRenderer(){}BaseRenderer.prototype.checkLayers=function(num){var i,len=this.layers.length,data;this.completeLayers=true;for(i=len-1;i>=0;i--){if(!this.elements[i]){data=this.layers[i];if(data.ip-data.st<=num-this.layers[i].st&&data.op-data.st>num-this.layers[i].st){this.buildItem(i);}}this.completeLayers=this.elements[i]?this.completeLayers:false;}this.checkPendingElements();};BaseRenderer.prototype.createItem=function(layer){switch(layer.ty){case 2:return this.createImage(layer);case 0:return this.createComp(layer);case 1:return this.createSolid(layer);case 3:return this.createNull(layer);case 4:return this.createShape(layer);case 5:return this.createText(layer);case 13:return this.createCamera(layer);}return this.createNull(layer);};BaseRenderer.prototype.createCamera=function(){throw new Error('You\'re using a 3d camera. Try the html renderer.');};BaseRenderer.prototype.buildAllItems=function(){var i,len=this.layers.length;for(i=0;i<len;i+=1){this.buildItem(i);}this.checkPendingElements();};BaseRenderer.prototype.includeLayers=function(newLayers){this.completeLayers=false;var i,len=newLayers.length;var j,jLen=this.layers.length;for(i=0;i<len;i+=1){j=0;while(j<jLen){if(this.layers[j].id==newLayers[i].id){this.layers[j]=newLayers[i];break;}j+=1;}}};BaseRenderer.prototype.setProjectInterface=function(pInterface){this.globalData.projectInterface=pInterface;};BaseRenderer.prototype.initItems=function(){if(!this.globalData.progressiveLoad){this.buildAllItems();}};BaseRenderer.prototype.buildElementParenting=function(element,parentName,hierarchy){var elements=this.elements;var layers=this.layers;var i=0,len=layers.length;while(i<len){if(layers[i].ind==parentName){if(!elements[i]||elements[i]===true){this.buildItem(i);this.addPendingElement(element);}else{hierarchy.push(elements[i]);elements[i].setAsParent();if(layers[i].parent!==undefined){this.buildElementParenting(element,layers[i].parent,hierarchy);}else{element.setHierarchy(hierarchy);}}}i+=1;}};BaseRenderer.prototype.addPendingElement=function(element){this.pendingElements.push(element);};BaseRenderer.prototype.searchExtraCompositions=function(assets){var i,len=assets.length;for(i=0;i<len;i+=1){if(assets[i].xt){var comp=this.createComp(assets[i]);comp.initExpressions();this.globalData.projectInterface.registerComposition(comp);}}};BaseRenderer.prototype.setupGlobalData=function(animData,fontsContainer){this.globalData.fontManager=new FontManager();this.globalData.fontManager.addChars(animData.chars);this.globalData.fontManager.addFonts(animData.fonts,fontsContainer);this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem);this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem);this.globalData.imageLoader=this.animationItem.imagePreloader;this.globalData.frameId=0;this.globalData.frameRate=animData.fr;this.globalData.nm=animData.nm;this.globalData.compSize={w:animData.w,h:animData.h};};function SVGRenderer(animationItem,config){this.animationItem=animationItem;this.layers=null;this.renderedFrame=-1;this.svgElement=createNS('svg');var ariaLabel='';if(config&&config.title){var titleElement=createNS('title');var titleId=createElementID();titleElement.setAttribute('id',titleId);titleElement.textContent=config.title;this.svgElement.appendChild(titleElement);ariaLabel+=titleId;}if(config&&config.description){var descElement=createNS('desc');var descId=createElementID();descElement.setAttribute('id',descId);descElement.textContent=config.description;this.svgElement.appendChild(descElement);ariaLabel+=' '+descId;}if(ariaLabel){this.svgElement.setAttribute('aria-labelledby',ariaLabel);}var defs=createNS('defs');this.svgElement.appendChild(defs);var maskElement=createNS('g');this.svgElement.appendChild(maskElement);this.layerElement=maskElement;this.renderConfig={preserveAspectRatio:config&&config.preserveAspectRatio||'xMidYMid meet',imagePreserveAspectRatio:config&&config.imagePreserveAspectRatio||'xMidYMid slice',progressiveLoad:config&&config.progressiveLoad||false,hideOnTransparent:config&&config.hideOnTransparent===false?false:true,viewBoxOnly:config&&config.viewBoxOnly||false,viewBoxSize:config&&config.viewBoxSize||false,className:config&&config.className||'',id:config&&config.id||'',focusable:config&&config.focusable,filterSize:{width:config&&config.filterSize&&config.filterSize.width||'100%',height:config&&config.filterSize&&config.filterSize.height||'100%',x:config&&config.filterSize&&config.filterSize.x||'0%',y:config&&config.filterSize&&config.filterSize.y||'0%'}};this.globalData={_mdf:false,frameNum:-1,defs:defs,renderConfig:this.renderConfig};this.elements=[];this.pendingElements=[];this.destroyed=false;this.rendererType='svg';}extendPrototype([BaseRenderer],SVGRenderer);SVGRenderer.prototype.createNull=function(data){return new NullElement(data,this.globalData,this);};SVGRenderer.prototype.createShape=function(data){return new SVGShapeElement(data,this.globalData,this);};SVGRenderer.prototype.createText=function(data){return new SVGTextElement(data,this.globalData,this);};SVGRenderer.prototype.createImage=function(data){return new IImageElement(data,this.globalData,this);};SVGRenderer.prototype.createComp=function(data){return new SVGCompElement(data,this.globalData,this);};SVGRenderer.prototype.createSolid=function(data){return new ISolidElement(data,this.globalData,this);};SVGRenderer.prototype.configAnimation=function(animData){this.svgElement.setAttribute('xmlns','http://www.w3.org/2000/svg');if(this.renderConfig.viewBoxSize){this.svgElement.setAttribute('viewBox',this.renderConfig.viewBoxSize);}else{this.svgElement.setAttribute('viewBox','0 0 '+animData.w+' '+animData.h);}if(!this.renderConfig.viewBoxOnly){this.svgElement.setAttribute('width',animData.w);this.svgElement.setAttribute('height',animData.h);this.svgElement.style.width='100%';this.svgElement.style.height='100%';this.svgElement.style.transform='translate3d(0,0,0)';}if(this.renderConfig.className){this.svgElement.setAttribute('class',this.renderConfig.className);}if(this.renderConfig.id){this.svgElement.setAttribute('id',this.renderConfig.id);}if(this.renderConfig.focusable!==undefined){this.svgElement.setAttribute('focusable',this.renderConfig.focusable);}this.svgElement.setAttribute('preserveAspectRatio',this.renderConfig.preserveAspectRatio);//this.layerElement.style.transform = 'translate3d(0,0,0)';
//this.layerElement.style.transformOrigin = this.layerElement.style.mozTransformOrigin = this.layerElement.style.webkitTransformOrigin = this.layerElement.style['-webkit-transform'] = "0px 0px 0px";
this.animationItem.wrapper.appendChild(this.svgElement);//Mask animation
var defs=this.globalData.defs;this.setupGlobalData(animData,defs);this.globalData.progressiveLoad=this.renderConfig.progressiveLoad;this.data=animData;var maskElement=createNS('clipPath');var rect=createNS('rect');rect.setAttribute('width',animData.w);rect.setAttribute('height',animData.h);rect.setAttribute('x',0);rect.setAttribute('y',0);var maskId=createElementID();maskElement.setAttribute('id',maskId);maskElement.appendChild(rect);this.layerElement.setAttribute("clip-path","url("+locationHref+"#"+maskId+")");defs.appendChild(maskElement);this.layers=animData.layers;this.elements=createSizedArray(animData.layers.length);};SVGRenderer.prototype.destroy=function(){this.animationItem.wrapper.innerHTML='';this.layerElement=null;this.globalData.defs=null;var i,len=this.layers?this.layers.length:0;for(i=0;i<len;i++){if(this.elements[i]){this.elements[i].destroy();}}this.elements.length=0;this.destroyed=true;this.animationItem=null;};SVGRenderer.prototype.updateContainerSize=function(){};SVGRenderer.prototype.buildItem=function(pos){var elements=this.elements;if(elements[pos]||this.layers[pos].ty==99){return;}elements[pos]=true;var element=this.createItem(this.layers[pos]);elements[pos]=element;if(expressionsPlugin){if(this.layers[pos].ty===0){this.globalData.projectInterface.registerComposition(element);}element.initExpressions();}this.appendElementInPos(element,pos);if(this.layers[pos].tt){if(!this.elements[pos-1]||this.elements[pos-1]===true){this.buildItem(pos-1);this.addPendingElement(element);}else{element.setMatte(elements[pos-1].layerId);}}};SVGRenderer.prototype.checkPendingElements=function(){while(this.pendingElements.length){var element=this.pendingElements.pop();element.checkParenting();if(element.data.tt){var i=0,len=this.elements.length;while(i<len){if(this.elements[i]===element){element.setMatte(this.elements[i-1].layerId);break;}i+=1;}}}};SVGRenderer.prototype.renderFrame=function(num){if(this.renderedFrame===num||this.destroyed){return;}if(num===null){num=this.renderedFrame;}else{this.renderedFrame=num;}// console.log('-------');
// console.log('FRAME ',num);
this.globalData.frameNum=num;this.globalData.frameId+=1;this.globalData.projectInterface.currentFrame=num;this.globalData._mdf=false;var i,len=this.layers.length;if(!this.completeLayers){this.checkLayers(num);}for(i=len-1;i>=0;i--){if(this.completeLayers||this.elements[i]){this.elements[i].prepareFrame(num-this.layers[i].st);}}if(this.globalData._mdf){for(i=0;i<len;i+=1){if(this.completeLayers||this.elements[i]){this.elements[i].renderFrame();}}}};SVGRenderer.prototype.appendElementInPos=function(element,pos){var newElement=element.getBaseElement();if(!newElement){return;}var i=0;var nextElement;while(i<pos){if(this.elements[i]&&this.elements[i]!==true&&this.elements[i].getBaseElement()){nextElement=this.elements[i].getBaseElement();}i+=1;}if(nextElement){this.layerElement.insertBefore(newElement,nextElement);}else{this.layerElement.appendChild(newElement);}};SVGRenderer.prototype.hide=function(){this.layerElement.style.display='none';};SVGRenderer.prototype.show=function(){this.layerElement.style.display='block';};function CanvasRenderer(animationItem,config){this.animationItem=animationItem;this.renderConfig={clearCanvas:config&&config.clearCanvas!==undefined?config.clearCanvas:true,context:config&&config.context||null,progressiveLoad:config&&config.progressiveLoad||false,preserveAspectRatio:config&&config.preserveAspectRatio||'xMidYMid meet',imagePreserveAspectRatio:config&&config.imagePreserveAspectRatio||'xMidYMid slice',className:config&&config.className||'',id:config&&config.id||''};this.renderConfig.dpr=config&&config.dpr||1;if(this.animationItem.wrapper){this.renderConfig.dpr=config&&config.dpr||window.devicePixelRatio||1;}this.renderedFrame=-1;this.globalData={frameNum:-1,_mdf:false,renderConfig:this.renderConfig,currentGlobalAlpha:-1};this.contextData=new CVContextData();this.elements=[];this.pendingElements=[];this.transformMat=new Matrix();this.completeLayers=false;this.rendererType='canvas';}extendPrototype([BaseRenderer],CanvasRenderer);CanvasRenderer.prototype.createShape=function(data){return new CVShapeElement(data,this.globalData,this);};CanvasRenderer.prototype.createText=function(data){return new CVTextElement(data,this.globalData,this);};CanvasRenderer.prototype.createImage=function(data){return new CVImageElement(data,this.globalData,this);};CanvasRenderer.prototype.createComp=function(data){return new CVCompElement(data,this.globalData,this);};CanvasRenderer.prototype.createSolid=function(data){return new CVSolidElement(data,this.globalData,this);};CanvasRenderer.prototype.createNull=SVGRenderer.prototype.createNull;CanvasRenderer.prototype.ctxTransform=function(props){if(props[0]===1&&props[1]===0&&props[4]===0&&props[5]===1&&props[12]===0&&props[13]===0){return;}if(!this.renderConfig.clearCanvas){this.canvasContext.transform(props[0],props[1],props[4],props[5],props[12],props[13]);return;}this.transformMat.cloneFromProps(props);var cProps=this.contextData.cTr.props;this.transformMat.transform(cProps[0],cProps[1],cProps[2],cProps[3],cProps[4],cProps[5],cProps[6],cProps[7],cProps[8],cProps[9],cProps[10],cProps[11],cProps[12],cProps[13],cProps[14],cProps[15]);//this.contextData.cTr.transform(props[0],props[1],props[2],props[3],props[4],props[5],props[6],props[7],props[8],props[9],props[10],props[11],props[12],props[13],props[14],props[15]);
this.contextData.cTr.cloneFromProps(this.transformMat.props);var trProps=this.contextData.cTr.props;this.canvasContext.setTransform(trProps[0],trProps[1],trProps[4],trProps[5],trProps[12],trProps[13]);};CanvasRenderer.prototype.ctxOpacity=function(op){/*if(op === 1){
return;
}*/if(!this.renderConfig.clearCanvas){this.canvasContext.globalAlpha*=op<0?0:op;this.globalData.currentGlobalAlpha=this.contextData.cO;return;}this.contextData.cO*=op<0?0:op;if(this.globalData.currentGlobalAlpha!==this.contextData.cO){this.canvasContext.globalAlpha=this.contextData.cO;this.globalData.currentGlobalAlpha=this.contextData.cO;}};CanvasRenderer.prototype.reset=function(){if(!this.renderConfig.clearCanvas){this.canvasContext.restore();return;}this.contextData.reset();};CanvasRenderer.prototype.save=function(actionFlag){if(!this.renderConfig.clearCanvas){this.canvasContext.save();return;}if(actionFlag){this.canvasContext.save();}var props=this.contextData.cTr.props;if(this.contextData._length<=this.contextData.cArrPos){this.contextData.duplicate();}var i,arr=this.contextData.saved[this.contextData.cArrPos];for(i=0;i<16;i+=1){arr[i]=props[i];}this.contextData.savedOp[this.contextData.cArrPos]=this.contextData.cO;this.contextData.cArrPos+=1;};CanvasRenderer.prototype.restore=function(actionFlag){if(!this.renderConfig.clearCanvas){this.canvasContext.restore();return;}if(actionFlag){this.canvasContext.restore();this.globalData.blendMode='source-over';}this.contextData.cArrPos-=1;var popped=this.contextData.saved[this.contextData.cArrPos];var i,arr=this.contextData.cTr.props;for(i=0;i<16;i+=1){arr[i]=popped[i];}this.canvasContext.setTransform(popped[0],popped[1],popped[4],popped[5],popped[12],popped[13]);popped=this.contextData.savedOp[this.contextData.cArrPos];this.contextData.cO=popped;if(this.globalData.currentGlobalAlpha!==popped){this.canvasContext.globalAlpha=popped;this.globalData.currentGlobalAlpha=popped;}};CanvasRenderer.prototype.configAnimation=function(animData){if(this.animationItem.wrapper){this.animationItem.container=createTag('canvas');this.animationItem.container.style.width='100%';this.animationItem.container.style.height='100%';//this.animationItem.container.style.transform = 'translate3d(0,0,0)';
//this.animationItem.container.style.webkitTransform = 'translate3d(0,0,0)';
this.animationItem.container.style.transformOrigin=this.animationItem.container.style.mozTransformOrigin=this.animationItem.container.style.webkitTransformOrigin=this.animationItem.container.style['-webkit-transform']="0px 0px 0px";this.animationItem.wrapper.appendChild(this.animationItem.container);this.canvasContext=this.animationItem.container.getContext('2d');if(this.renderConfig.className){this.animationItem.container.setAttribute('class',this.renderConfig.className);}if(this.renderConfig.id){this.animationItem.container.setAttribute('id',this.renderConfig.id);}}else{this.canvasContext=this.renderConfig.context;}this.data=animData;this.layers=animData.layers;this.transformCanvas={w:animData.w,h:animData.h,sx:0,sy:0,tx:0,ty:0};this.setupGlobalData(animData,document.body);this.globalData.canvasContext=this.canvasContext;this.globalData.renderer=this;this.globalData.isDashed=false;this.globalData.progressiveLoad=this.renderConfig.progressiveLoad;this.globalData.transformCanvas=this.transformCanvas;this.elements=createSizedArray(animData.layers.length);this.updateContainerSize();};CanvasRenderer.prototype.updateContainerSize=function(){this.reset();var elementWidth,elementHeight;if(this.animationItem.wrapper&&this.animationItem.container){elementWidth=this.animationItem.wrapper.offsetWidth;elementHeight=this.animationItem.wrapper.offsetHeight;this.animationItem.container.setAttribute('width',elementWidth*this.renderConfig.dpr);this.animationItem.container.setAttribute('height',elementHeight*this.renderConfig.dpr);}else{elementWidth=this.canvasContext.canvas.width*this.renderConfig.dpr;elementHeight=this.canvasContext.canvas.height*this.renderConfig.dpr;}var elementRel,animationRel;if(this.renderConfig.preserveAspectRatio.indexOf('meet')!==-1||this.renderConfig.preserveAspectRatio.indexOf('slice')!==-1){var par=this.renderConfig.preserveAspectRatio.split(' ');var fillType=par[1]||'meet';var pos=par[0]||'xMidYMid';var xPos=pos.substr(0,4);var yPos=pos.substr(4);elementRel=elementWidth/elementHeight;animationRel=this.transformCanvas.w/this.transformCanvas.h;if(animationRel>elementRel&&fillType==='meet'||animationRel<elementRel&&fillType==='slice'){this.transformCanvas.sx=elementWidth/(this.transformCanvas.w/this.renderConfig.dpr);this.transformCanvas.sy=elementWidth/(this.transformCanvas.w/this.renderConfig.dpr);}else{this.transformCanvas.sx=elementHeight/(this.transformCanvas.h/this.renderConfig.dpr);this.transformCanvas.sy=elementHeight/(this.transformCanvas.h/this.renderConfig.dpr);}if(xPos==='xMid'&&(animationRel<elementRel&&fillType==='meet'||animationRel>elementRel&&fillType==='slice')){this.transformCanvas.tx=(elementWidth-this.transformCanvas.w*(elementHeight/this.transformCanvas.h))/2*this.renderConfig.dpr;}else if(xPos==='xMax'&&(animationRel<elementRel&&fillType==='meet'||animationRel>elementRel&&fillType==='slice')){this.transformCanvas.tx=(elementWidth-this.transformCanvas.w*(elementHeight/this.transformCanvas.h))*this.renderConfig.dpr;}else{this.transformCanvas.tx=0;}if(yPos==='YMid'&&(animationRel>elementRel&&fillType==='meet'||animationRel<elementRel&&fillType==='slice')){this.transformCanvas.ty=(elementHeight-this.transformCanvas.h*(elementWidth/this.transformCanvas.w))/2*this.renderConfig.dpr;}else if(yPos==='YMax'&&(animationRel>elementRel&&fillType==='meet'||animationRel<elementRel&&fillType==='slice')){this.transformCanvas.ty=(elementHeight-this.transformCanvas.h*(elementWidth/this.transformCanvas.w))*this.renderConfig.dpr;}else{this.transformCanvas.ty=0;}}else if(this.renderConfig.preserveAspectRatio=='none'){this.transformCanvas.sx=elementWidth/(this.transformCanvas.w/this.renderConfig.dpr);this.transformCanvas.sy=elementHeight/(this.transformCanvas.h/this.renderConfig.dpr);this.transformCanvas.tx=0;this.transformCanvas.ty=0;}else{this.transformCanvas.sx=this.renderConfig.dpr;this.transformCanvas.sy=this.renderConfig.dpr;this.transformCanvas.tx=0;this.transformCanvas.ty=0;}this.transformCanvas.props=[this.transformCanvas.sx,0,0,0,0,this.transformCanvas.sy,0,0,0,0,1,0,this.transformCanvas.tx,this.transformCanvas.ty,0,1];/*var i, len = this.elements.length;
for(i=0;i<len;i+=1){
if(this.elements[i] && this.elements[i].data.ty === 0){
    this.elements[i].resize(this.globalData.transformCanvas);
}
}*/this.ctxTransform(this.transformCanvas.props);this.canvasContext.beginPath();this.canvasContext.rect(0,0,this.transformCanvas.w,this.transformCanvas.h);this.canvasContext.closePath();this.canvasContext.clip();this.renderFrame(this.renderedFrame,true);};CanvasRenderer.prototype.destroy=function(){if(this.renderConfig.clearCanvas){this.animationItem.wrapper.innerHTML='';}var i,len=this.layers?this.layers.length:0;for(i=len-1;i>=0;i-=1){if(this.elements[i]){this.elements[i].destroy();}}this.elements.length=0;this.globalData.canvasContext=null;this.animationItem.container=null;this.destroyed=true;};CanvasRenderer.prototype.renderFrame=function(num,forceRender){if(this.renderedFrame===num&&this.renderConfig.clearCanvas===true&&!forceRender||this.destroyed||num===-1){return;}this.renderedFrame=num;this.globalData.frameNum=num-this.animationItem._isFirstFrame;this.globalData.frameId+=1;this.globalData._mdf=!this.renderConfig.clearCanvas||forceRender;this.globalData.projectInterface.currentFrame=num;// console.log('--------');
// console.log('NEW: ',num);
var i,len=this.layers.length;if(!this.completeLayers){this.checkLayers(num);}for(i=0;i<len;i++){if(this.completeLayers||this.elements[i]){this.elements[i].prepareFrame(num-this.layers[i].st);}}if(this.globalData._mdf){if(this.renderConfig.clearCanvas===true){this.canvasContext.clearRect(0,0,this.transformCanvas.w,this.transformCanvas.h);}else{this.save();}for(i=len-1;i>=0;i-=1){if(this.completeLayers||this.elements[i]){this.elements[i].renderFrame();}}if(this.renderConfig.clearCanvas!==true){this.restore();}}};CanvasRenderer.prototype.buildItem=function(pos){var elements=this.elements;if(elements[pos]||this.layers[pos].ty==99){return;}var element=this.createItem(this.layers[pos],this,this.globalData);elements[pos]=element;element.initExpressions();/*if(this.layers[pos].ty === 0){
element.resize(this.globalData.transformCanvas);
}*/};CanvasRenderer.prototype.checkPendingElements=function(){while(this.pendingElements.length){var element=this.pendingElements.pop();element.checkParenting();}};CanvasRenderer.prototype.hide=function(){this.animationItem.container.style.display='none';};CanvasRenderer.prototype.show=function(){this.animationItem.container.style.display='block';};function HybridRenderer(animationItem,config){this.animationItem=animationItem;this.layers=null;this.renderedFrame=-1;this.renderConfig={className:config&&config.className||'',imagePreserveAspectRatio:config&&config.imagePreserveAspectRatio||'xMidYMid slice',hideOnTransparent:config&&config.hideOnTransparent===false?false:true,filterSize:{width:config&&config.filterSize&&config.filterSize.width||'400%',height:config&&config.filterSize&&config.filterSize.height||'400%',x:config&&config.filterSize&&config.filterSize.x||'-100%',y:config&&config.filterSize&&config.filterSize.y||'-100%'}};this.globalData={_mdf:false,frameNum:-1,renderConfig:this.renderConfig};this.pendingElements=[];this.elements=[];this.threeDElements=[];this.destroyed=false;this.camera=null;this.supports3d=true;this.rendererType='html';}extendPrototype([BaseRenderer],HybridRenderer);HybridRenderer.prototype.buildItem=SVGRenderer.prototype.buildItem;HybridRenderer.prototype.checkPendingElements=function(){while(this.pendingElements.length){var element=this.pendingElements.pop();element.checkParenting();}};HybridRenderer.prototype.appendElementInPos=function(element,pos){var newDOMElement=element.getBaseElement();if(!newDOMElement){return;}var layer=this.layers[pos];if(!layer.ddd||!this.supports3d){if(this.threeDElements){this.addTo3dContainer(newDOMElement,pos);}else{var i=0;var nextDOMElement,nextLayer,tmpDOMElement;while(i<pos){if(this.elements[i]&&this.elements[i]!==true&&this.elements[i].getBaseElement){nextLayer=this.elements[i];tmpDOMElement=this.layers[i].ddd?this.getThreeDContainerByPos(i):nextLayer.getBaseElement();nextDOMElement=tmpDOMElement||nextDOMElement;}i+=1;}if(nextDOMElement){if(!layer.ddd||!this.supports3d){this.layerElement.insertBefore(newDOMElement,nextDOMElement);}}else{if(!layer.ddd||!this.supports3d){this.layerElement.appendChild(newDOMElement);}}}}else{this.addTo3dContainer(newDOMElement,pos);}};HybridRenderer.prototype.createShape=function(data){if(!this.supports3d){return new SVGShapeElement(data,this.globalData,this);}return new HShapeElement(data,this.globalData,this);};HybridRenderer.prototype.createText=function(data){if(!this.supports3d){return new SVGTextElement(data,this.globalData,this);}return new HTextElement(data,this.globalData,this);};HybridRenderer.prototype.createCamera=function(data){this.camera=new HCameraElement(data,this.globalData,this);return this.camera;};HybridRenderer.prototype.createImage=function(data){if(!this.supports3d){return new IImageElement(data,this.globalData,this);}return new HImageElement(data,this.globalData,this);};HybridRenderer.prototype.createComp=function(data){if(!this.supports3d){return new SVGCompElement(data,this.globalData,this);}return new HCompElement(data,this.globalData,this);};HybridRenderer.prototype.createSolid=function(data){if(!this.supports3d){return new ISolidElement(data,this.globalData,this);}return new HSolidElement(data,this.globalData,this);};HybridRenderer.prototype.createNull=SVGRenderer.prototype.createNull;HybridRenderer.prototype.getThreeDContainerByPos=function(pos){var i=0,len=this.threeDElements.length;while(i<len){if(this.threeDElements[i].startPos<=pos&&this.threeDElements[i].endPos>=pos){return this.threeDElements[i].perspectiveElem;}i+=1;}};HybridRenderer.prototype.createThreeDContainer=function(pos,type){var perspectiveElem=createTag('div');styleDiv(perspectiveElem);var container=createTag('div');styleDiv(container);if(type==='3d'){perspectiveElem.style.width=this.globalData.compSize.w+'px';perspectiveElem.style.height=this.globalData.compSize.h+'px';perspectiveElem.style.transformOrigin=perspectiveElem.style.mozTransformOrigin=perspectiveElem.style.webkitTransformOrigin="50% 50%";container.style.transform=container.style.webkitTransform='matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';}perspectiveElem.appendChild(container);//this.resizerElem.appendChild(perspectiveElem);
var threeDContainerData={container:container,perspectiveElem:perspectiveElem,startPos:pos,endPos:pos,type:type};this.threeDElements.push(threeDContainerData);return threeDContainerData;};HybridRenderer.prototype.build3dContainers=function(){var i,len=this.layers.length;var lastThreeDContainerData;var currentContainer='';for(i=0;i<len;i+=1){if(this.layers[i].ddd&&this.layers[i].ty!==3){if(currentContainer!=='3d'){currentContainer='3d';lastThreeDContainerData=this.createThreeDContainer(i,'3d');}lastThreeDContainerData.endPos=Math.max(lastThreeDContainerData.endPos,i);}else{if(currentContainer!=='2d'){currentContainer='2d';lastThreeDContainerData=this.createThreeDContainer(i,'2d');}lastThreeDContainerData.endPos=Math.max(lastThreeDContainerData.endPos,i);}}len=this.threeDElements.length;for(i=len-1;i>=0;i--){this.resizerElem.appendChild(this.threeDElements[i].perspectiveElem);}};HybridRenderer.prototype.addTo3dContainer=function(elem,pos){var i=0,len=this.threeDElements.length;while(i<len){if(pos<=this.threeDElements[i].endPos){var j=this.threeDElements[i].startPos;var nextElement;while(j<pos){if(this.elements[j]&&this.elements[j].getBaseElement){nextElement=this.elements[j].getBaseElement();}j+=1;}if(nextElement){this.threeDElements[i].container.insertBefore(elem,nextElement);}else{this.threeDElements[i].container.appendChild(elem);}break;}i+=1;}};HybridRenderer.prototype.configAnimation=function(animData){var resizerElem=createTag('div');var wrapper=this.animationItem.wrapper;resizerElem.style.width=animData.w+'px';resizerElem.style.height=animData.h+'px';this.resizerElem=resizerElem;styleDiv(resizerElem);resizerElem.style.transformStyle=resizerElem.style.webkitTransformStyle=resizerElem.style.mozTransformStyle="flat";if(this.renderConfig.className){resizerElem.setAttribute('class',this.renderConfig.className);}wrapper.appendChild(resizerElem);resizerElem.style.overflow='hidden';var svg=createNS('svg');svg.setAttribute('width','1');svg.setAttribute('height','1');styleDiv(svg);this.resizerElem.appendChild(svg);var defs=createNS('defs');svg.appendChild(defs);this.data=animData;//Mask animation
this.setupGlobalData(animData,svg);this.globalData.defs=defs;this.layers=animData.layers;this.layerElement=this.resizerElem;this.build3dContainers();this.updateContainerSize();};HybridRenderer.prototype.destroy=function(){this.animationItem.wrapper.innerHTML='';this.animationItem.container=null;this.globalData.defs=null;var i,len=this.layers?this.layers.length:0;for(i=0;i<len;i++){this.elements[i].destroy();}this.elements.length=0;this.destroyed=true;this.animationItem=null;};HybridRenderer.prototype.updateContainerSize=function(){var elementWidth=this.animationItem.wrapper.offsetWidth;var elementHeight=this.animationItem.wrapper.offsetHeight;var elementRel=elementWidth/elementHeight;var animationRel=this.globalData.compSize.w/this.globalData.compSize.h;var sx,sy,tx,ty;if(animationRel>elementRel){sx=elementWidth/this.globalData.compSize.w;sy=elementWidth/this.globalData.compSize.w;tx=0;ty=(elementHeight-this.globalData.compSize.h*(elementWidth/this.globalData.compSize.w))/2;}else{sx=elementHeight/this.globalData.compSize.h;sy=elementHeight/this.globalData.compSize.h;tx=(elementWidth-this.globalData.compSize.w*(elementHeight/this.globalData.compSize.h))/2;ty=0;}this.resizerElem.style.transform=this.resizerElem.style.webkitTransform='matrix3d('+sx+',0,0,0,0,'+sy+',0,0,0,0,1,0,'+tx+','+ty+',0,1)';};HybridRenderer.prototype.renderFrame=SVGRenderer.prototype.renderFrame;HybridRenderer.prototype.hide=function(){this.resizerElem.style.display='none';};HybridRenderer.prototype.show=function(){this.resizerElem.style.display='block';};HybridRenderer.prototype.initItems=function(){this.buildAllItems();if(this.camera){this.camera.setup();}else{var cWidth=this.globalData.compSize.w;var cHeight=this.globalData.compSize.h;var i,len=this.threeDElements.length;for(i=0;i<len;i+=1){this.threeDElements[i].perspectiveElem.style.perspective=this.threeDElements[i].perspectiveElem.style.webkitPerspective=Math.sqrt(Math.pow(cWidth,2)+Math.pow(cHeight,2))+'px';}}};HybridRenderer.prototype.searchExtraCompositions=function(assets){var i,len=assets.length;var floatingContainer=createTag('div');for(i=0;i<len;i+=1){if(assets[i].xt){var comp=this.createComp(assets[i],floatingContainer,this.globalData.comp,null);comp.initExpressions();this.globalData.projectInterface.registerComposition(comp);}}};function MaskElement(data,element,globalData){this.data=data;this.element=element;this.globalData=globalData;this.storedData=[];this.masksProperties=this.data.masksProperties||[];this.maskElement=null;var defs=this.globalData.defs;var i,len=this.masksProperties?this.masksProperties.length:0;this.viewData=createSizedArray(len);this.solidPath='';var path,properties=this.masksProperties;var count=0;var currentMasks=[];var j,jLen;var layerId=createElementID();var rect,expansor,feMorph,x;var maskType='clipPath',maskRef='clip-path';for(i=0;i<len;i++){if(properties[i].mode!=='a'&&properties[i].mode!=='n'||properties[i].inv||properties[i].o.k!==100||properties[i].o.x){maskType='mask';maskRef='mask';}if((properties[i].mode=='s'||properties[i].mode=='i')&&count===0){rect=createNS('rect');rect.setAttribute('fill','#ffffff');rect.setAttribute('width',this.element.comp.data.w||0);rect.setAttribute('height',this.element.comp.data.h||0);currentMasks.push(rect);}else{rect=null;}path=createNS('path');if(properties[i].mode=='n'){// TODO move this to a factory or to a constructor
this.viewData[i]={op:PropertyFactory.getProp(this.element,properties[i].o,0,0.01,this.element),prop:ShapePropertyFactory.getShapeProp(this.element,properties[i],3),elem:path,lastPath:''};defs.appendChild(path);continue;}count+=1;path.setAttribute('fill',properties[i].mode==='s'?'#000000':'#ffffff');path.setAttribute('clip-rule','nonzero');var filterID;if(properties[i].x.k!==0){maskType='mask';maskRef='mask';x=PropertyFactory.getProp(this.element,properties[i].x,0,null,this.element);filterID=createElementID();expansor=createNS('filter');expansor.setAttribute('id',filterID);feMorph=createNS('feMorphology');feMorph.setAttribute('operator','erode');feMorph.setAttribute('in','SourceGraphic');feMorph.setAttribute('radius','0');expansor.appendChild(feMorph);defs.appendChild(expansor);path.setAttribute('stroke',properties[i].mode==='s'?'#000000':'#ffffff');}else{feMorph=null;x=null;}// TODO move this to a factory or to a constructor
this.storedData[i]={elem:path,x:x,expan:feMorph,lastPath:'',lastOperator:'',filterId:filterID,lastRadius:0};if(properties[i].mode=='i'){jLen=currentMasks.length;var g=createNS('g');for(j=0;j<jLen;j+=1){g.appendChild(currentMasks[j]);}var mask=createNS('mask');mask.setAttribute('mask-type','alpha');mask.setAttribute('id',layerId+'_'+count);mask.appendChild(path);defs.appendChild(mask);g.setAttribute('mask','url('+locationHref+'#'+layerId+'_'+count+')');currentMasks.length=0;currentMasks.push(g);}else{currentMasks.push(path);}if(properties[i].inv&&!this.solidPath){this.solidPath=this.createLayerSolidPath();}// TODO move this to a factory or to a constructor
this.viewData[i]={elem:path,lastPath:'',op:PropertyFactory.getProp(this.element,properties[i].o,0,0.01,this.element),prop:ShapePropertyFactory.getShapeProp(this.element,properties[i],3),invRect:rect};if(!this.viewData[i].prop.k){this.drawPath(properties[i],this.viewData[i].prop.v,this.viewData[i]);}}this.maskElement=createNS(maskType);len=currentMasks.length;for(i=0;i<len;i+=1){this.maskElement.appendChild(currentMasks[i]);}if(count>0){this.maskElement.setAttribute('id',layerId);this.element.maskedElement.setAttribute(maskRef,"url("+locationHref+"#"+layerId+")");defs.appendChild(this.maskElement);}if(this.viewData.length){this.element.addRenderableComponent(this);}}MaskElement.prototype.getMaskProperty=function(pos){return this.viewData[pos].prop;};MaskElement.prototype.renderFrame=function(isFirstFrame){var finalMat=this.element.finalTransform.mat;var i,len=this.masksProperties.length;for(i=0;i<len;i++){if(this.viewData[i].prop._mdf||isFirstFrame){this.drawPath(this.masksProperties[i],this.viewData[i].prop.v,this.viewData[i]);}if(this.viewData[i].op._mdf||isFirstFrame){this.viewData[i].elem.setAttribute('fill-opacity',this.viewData[i].op.v);}if(this.masksProperties[i].mode!=='n'){if(this.viewData[i].invRect&&(this.element.finalTransform.mProp._mdf||isFirstFrame)){this.viewData[i].invRect.setAttribute('transform',finalMat.getInverseMatrix().to2dCSS());}if(this.storedData[i].x&&(this.storedData[i].x._mdf||isFirstFrame)){var feMorph=this.storedData[i].expan;if(this.storedData[i].x.v<0){if(this.storedData[i].lastOperator!=='erode'){this.storedData[i].lastOperator='erode';this.storedData[i].elem.setAttribute('filter','url('+locationHref+'#'+this.storedData[i].filterId+')');}feMorph.setAttribute('radius',-this.storedData[i].x.v);}else{if(this.storedData[i].lastOperator!=='dilate'){this.storedData[i].lastOperator='dilate';this.storedData[i].elem.setAttribute('filter',null);}this.storedData[i].elem.setAttribute('stroke-width',this.storedData[i].x.v*2);}}}}};MaskElement.prototype.getMaskelement=function(){return this.maskElement;};MaskElement.prototype.createLayerSolidPath=function(){var path='M0,0 ';path+=' h'+this.globalData.compSize.w;path+=' v'+this.globalData.compSize.h;path+=' h-'+this.globalData.compSize.w;path+=' v-'+this.globalData.compSize.h+' ';return path;};MaskElement.prototype.drawPath=function(pathData,pathNodes,viewData){var pathString=" M"+pathNodes.v[0][0]+','+pathNodes.v[0][1];var i,len;len=pathNodes._length;for(i=1;i<len;i+=1){//pathString += " C"+pathNodes.o[i-1][0]+','+pathNodes.o[i-1][1] + " "+pathNodes.i[i][0]+','+pathNodes.i[i][1] + " "+pathNodes.v[i][0]+','+pathNodes.v[i][1];
pathString+=" C"+pathNodes.o[i-1][0]+','+pathNodes.o[i-1][1]+" "+pathNodes.i[i][0]+','+pathNodes.i[i][1]+" "+pathNodes.v[i][0]+','+pathNodes.v[i][1];}//pathString += " C"+pathNodes.o[i-1][0]+','+pathNodes.o[i-1][1] + " "+pathNodes.i[0][0]+','+pathNodes.i[0][1] + " "+pathNodes.v[0][0]+','+pathNodes.v[0][1];
if(pathNodes.c&&len>1){pathString+=" C"+pathNodes.o[i-1][0]+','+pathNodes.o[i-1][1]+" "+pathNodes.i[0][0]+','+pathNodes.i[0][1]+" "+pathNodes.v[0][0]+','+pathNodes.v[0][1];}//pathNodes.__renderedString = pathString;
if(viewData.lastPath!==pathString){var pathShapeValue='';if(viewData.elem){if(pathNodes.c){pathShapeValue=pathData.inv?this.solidPath+pathString:pathString;}viewData.elem.setAttribute('d',pathShapeValue);}viewData.lastPath=pathString;}};MaskElement.prototype.destroy=function(){this.element=null;this.globalData=null;this.maskElement=null;this.data=null;this.masksProperties=null;};/**
     * @file
     * Handles AE's layer parenting property.
     *
     */function HierarchyElement(){}HierarchyElement.prototype={/**
         * @function
         * Initializes hierarchy properties
         *
         */initHierarchy:function initHierarchy(){//element's parent list
this.hierarchy=[];//if element is parent of another layer _isParent will be true
this._isParent=false;this.checkParenting();},/**
         * @function
         * Sets layer's hierarchy.
         * @param {array} hierarch
         * layer's parent list
         *
         */setHierarchy:function setHierarchy(hierarchy){this.hierarchy=hierarchy;},/**
         * @function
         * Sets layer as parent.
         *
         */setAsParent:function setAsParent(){this._isParent=true;},/**
         * @function
         * Searches layer's parenting chain
         *
         */checkParenting:function checkParenting(){if(this.data.parent!==undefined){this.comp.buildElementParenting(this,this.data.parent,[]);}}};/**
     * @file
     * Handles element's layer frame update.
     * Checks layer in point and out point
     *
     */function FrameElement(){}FrameElement.prototype={/**
         * @function
         * Initializes frame related properties.
         *
         */initFrame:function initFrame(){//set to true when inpoint is rendered
this._isFirstFrame=false;//list of animated properties
this.dynamicProperties=[];// If layer has been modified in current tick this will be true
this._mdf=false;},/**
         * @function
         * Calculates all dynamic values
         *
         * @param {number} num
         * current frame number in Layer's time
         * @param {boolean} isVisible
         * if layers is currently in range
         *
         */prepareProperties:function prepareProperties(num,isVisible){var i,len=this.dynamicProperties.length;for(i=0;i<len;i+=1){if(isVisible||this._isParent&&this.dynamicProperties[i].propType==='transform'){this.dynamicProperties[i].getValue();if(this.dynamicProperties[i]._mdf){this.globalData._mdf=true;this._mdf=true;}}}},addDynamicProperty:function addDynamicProperty(prop){if(this.dynamicProperties.indexOf(prop)===-1){this.dynamicProperties.push(prop);}}};function TransformElement(){}TransformElement.prototype={initTransform:function initTransform(){this.finalTransform={mProp:this.data.ks?TransformPropertyFactory.getTransformProperty(this,this.data.ks,this):{o:0},_matMdf:false,_opMdf:false,mat:new Matrix()};if(this.data.ao){this.finalTransform.mProp.autoOriented=true;}//TODO: check TYPE 11: Guided elements
if(this.data.ty!==11){//this.createElements();
}},renderTransform:function renderTransform(){this.finalTransform._opMdf=this.finalTransform.mProp.o._mdf||this._isFirstFrame;this.finalTransform._matMdf=this.finalTransform.mProp._mdf||this._isFirstFrame;if(this.hierarchy){var mat;var finalMat=this.finalTransform.mat;var i=0,len=this.hierarchy.length;//Checking if any of the transformation matrices in the hierarchy chain has changed.
if(!this.finalTransform._matMdf){while(i<len){if(this.hierarchy[i].finalTransform.mProp._mdf){this.finalTransform._matMdf=true;break;}i+=1;}}if(this.finalTransform._matMdf){mat=this.finalTransform.mProp.v.props;finalMat.cloneFromProps(mat);for(i=0;i<len;i+=1){mat=this.hierarchy[i].finalTransform.mProp.v.props;finalMat.transform(mat[0],mat[1],mat[2],mat[3],mat[4],mat[5],mat[6],mat[7],mat[8],mat[9],mat[10],mat[11],mat[12],mat[13],mat[14],mat[15]);}}}},globalToLocal:function globalToLocal(pt){var transforms=[];transforms.push(this.finalTransform);var flag=true;var comp=this.comp;while(flag){if(comp.finalTransform){if(comp.data.hasMask){transforms.splice(0,0,comp.finalTransform);}comp=comp.comp;}else{flag=false;}}var i,len=transforms.length,ptNew;for(i=0;i<len;i+=1){ptNew=transforms[i].mat.applyToPointArray(0,0,0);//ptNew = transforms[i].mat.applyToPointArray(pt[0],pt[1],pt[2]);
pt=[pt[0]-ptNew[0],pt[1]-ptNew[1],0];}return pt;},mHelper:new Matrix()};function RenderableElement(){}RenderableElement.prototype={initRenderable:function initRenderable(){//layer's visibility related to inpoint and outpoint. Rename isVisible to isInRange
this.isInRange=false;//layer's display state
this.hidden=false;// If layer's transparency equals 0, it can be hidden
this.isTransparent=false;//list of animated components
this.renderableComponents=[];},addRenderableComponent:function addRenderableComponent(component){if(this.renderableComponents.indexOf(component)===-1){this.renderableComponents.push(component);}},removeRenderableComponent:function removeRenderableComponent(component){if(this.renderableComponents.indexOf(component)!==-1){this.renderableComponents.splice(this.renderableComponents.indexOf(component),1);}},prepareRenderableFrame:function prepareRenderableFrame(num){this.checkLayerLimits(num);},checkTransparency:function checkTransparency(){if(this.finalTransform.mProp.o.v<=0){if(!this.isTransparent&&this.globalData.renderConfig.hideOnTransparent){this.isTransparent=true;this.hide();}}else if(this.isTransparent){this.isTransparent=false;this.show();}},/**
         * @function
         * Initializes frame related properties.
         *
         * @param {number} num
         * current frame number in Layer's time
         *
         */checkLayerLimits:function checkLayerLimits(num){if(this.data.ip-this.data.st<=num&&this.data.op-this.data.st>num){if(this.isInRange!==true){this.globalData._mdf=true;this._mdf=true;this.isInRange=true;this.show();}}else{if(this.isInRange!==false){this.globalData._mdf=true;this.isInRange=false;this.hide();}}},renderRenderable:function renderRenderable(){var i,len=this.renderableComponents.length;for(i=0;i<len;i+=1){this.renderableComponents[i].renderFrame(this._isFirstFrame);}/*this.maskManager.renderFrame(this.finalTransform.mat);
this.renderableEffectsManager.renderFrame(this._isFirstFrame);*/},sourceRectAtTime:function sourceRectAtTime(){return{top:0,left:0,width:100,height:100};},getLayerSize:function getLayerSize(){if(this.data.ty===5){return{w:this.data.textData.width,h:this.data.textData.height};}else{return{w:this.data.width,h:this.data.height};}}};function RenderableDOMElement(){}(function(){var _prototype={initElement:function initElement(data,globalData,comp){this.initFrame();this.initBaseData(data,globalData,comp);this.initTransform(data,globalData,comp);this.initHierarchy();this.initRenderable();this.initRendererElement();this.createContainerElements();this.createRenderableComponents();this.createContent();this.hide();},hide:function hide(){if(!this.hidden&&(!this.isInRange||this.isTransparent)){var elem=this.baseElement||this.layerElement;elem.style.display='none';this.hidden=true;}},show:function show(){if(this.isInRange&&!this.isTransparent){if(!this.data.hd){var elem=this.baseElement||this.layerElement;elem.style.display='block';}this.hidden=false;this._isFirstFrame=true;}},renderFrame:function renderFrame(){//If it is exported as hidden (data.hd === true) no need to render
//If it is not visible no need to render
if(this.data.hd||this.hidden){return;}this.renderTransform();this.renderRenderable();this.renderElement();this.renderInnerContent();if(this._isFirstFrame){this._isFirstFrame=false;}},renderInnerContent:function renderInnerContent(){},prepareFrame:function prepareFrame(num){this._mdf=false;this.prepareRenderableFrame(num);this.prepareProperties(num,this.isInRange);this.checkTransparency();},destroy:function destroy(){this.innerElem=null;this.destroyBaseElement();}};extendPrototype([RenderableElement,createProxyFunction(_prototype)],RenderableDOMElement);})();function ProcessedElement(element,position){this.elem=element;this.pos=position;}function SVGStyleData(data,level){this.data=data;this.type=data.ty;this.d='';this.lvl=level;this._mdf=false;this.closed=data.hd===true;this.pElem=createNS('path');this.msElem=null;}SVGStyleData.prototype.reset=function(){this.d='';this._mdf=false;};function SVGShapeData(transformers,level,shape){this.caches=[];this.styles=[];this.transformers=transformers;this.lStr='';this.sh=shape;this.lvl=level;//TODO find if there are some cases where _isAnimated can be false.
// For now, since shapes add up with other shapes. They have to be calculated every time.
// One way of finding out is checking if all styles associated to this shape depend only of this shape
this._isAnimated=!!shape.k;// TODO: commenting this for now since all shapes are animated
var i=0,len=transformers.length;while(i<len){if(transformers[i].mProps.dynamicProperties.length){this._isAnimated=true;break;}i+=1;}}SVGShapeData.prototype.setAsAnimated=function(){this._isAnimated=true;};function SVGTransformData(mProps,op,container){this.transform={mProps:mProps,op:op,container:container};this.elements=[];this._isAnimated=this.transform.mProps.dynamicProperties.length||this.transform.op.effectsSequence.length;}function SVGStrokeStyleData(elem,data,styleOb){this.initDynamicPropertyContainer(elem);this.getValue=this.iterateDynamicProperties;this.o=PropertyFactory.getProp(elem,data.o,0,0.01,this);this.w=PropertyFactory.getProp(elem,data.w,0,null,this);this.d=new DashProperty(elem,data.d||{},'svg',this);this.c=PropertyFactory.getProp(elem,data.c,1,255,this);this.style=styleOb;this._isAnimated=!!this._isAnimated;}extendPrototype([DynamicPropertyContainer],SVGStrokeStyleData);function SVGFillStyleData(elem,data,styleOb){this.initDynamicPropertyContainer(elem);this.getValue=this.iterateDynamicProperties;this.o=PropertyFactory.getProp(elem,data.o,0,0.01,this);this.c=PropertyFactory.getProp(elem,data.c,1,255,this);this.style=styleOb;}extendPrototype([DynamicPropertyContainer],SVGFillStyleData);function SVGGradientFillStyleData(elem,data,styleOb){this.initDynamicPropertyContainer(elem);this.getValue=this.iterateDynamicProperties;this.initGradientData(elem,data,styleOb);}SVGGradientFillStyleData.prototype.initGradientData=function(elem,data,styleOb){this.o=PropertyFactory.getProp(elem,data.o,0,0.01,this);this.s=PropertyFactory.getProp(elem,data.s,1,null,this);this.e=PropertyFactory.getProp(elem,data.e,1,null,this);this.h=PropertyFactory.getProp(elem,data.h||{k:0},0,0.01,this);this.a=PropertyFactory.getProp(elem,data.a||{k:0},0,degToRads,this);this.g=new GradientProperty(elem,data.g,this);this.style=styleOb;this.stops=[];this.setGradientData(styleOb.pElem,data);this.setGradientOpacity(data,styleOb);this._isAnimated=!!this._isAnimated;};SVGGradientFillStyleData.prototype.setGradientData=function(pathElement,data){var gradientId=createElementID();var gfill=createNS(data.t===1?'linearGradient':'radialGradient');gfill.setAttribute('id',gradientId);gfill.setAttribute('spreadMethod','pad');gfill.setAttribute('gradientUnits','userSpaceOnUse');var stops=[];var stop,j,jLen;jLen=data.g.p*4;for(j=0;j<jLen;j+=4){stop=createNS('stop');gfill.appendChild(stop);stops.push(stop);}pathElement.setAttribute(data.ty==='gf'?'fill':'stroke','url('+locationHref+'#'+gradientId+')');this.gf=gfill;this.cst=stops;};SVGGradientFillStyleData.prototype.setGradientOpacity=function(data,styleOb){if(this.g._hasOpacity&&!this.g._collapsable){var stop,j,jLen;var mask=createNS("mask");var maskElement=createNS('path');mask.appendChild(maskElement);var opacityId=createElementID();var maskId=createElementID();mask.setAttribute('id',maskId);var opFill=createNS(data.t===1?'linearGradient':'radialGradient');opFill.setAttribute('id',opacityId);opFill.setAttribute('spreadMethod','pad');opFill.setAttribute('gradientUnits','userSpaceOnUse');jLen=data.g.k.k[0].s?data.g.k.k[0].s.length:data.g.k.k.length;var stops=this.stops;for(j=data.g.p*4;j<jLen;j+=2){stop=createNS('stop');stop.setAttribute('stop-color','rgb(255,255,255)');opFill.appendChild(stop);stops.push(stop);}maskElement.setAttribute(data.ty==='gf'?'fill':'stroke','url('+locationHref+'#'+opacityId+')');this.of=opFill;this.ms=mask;this.ost=stops;this.maskId=maskId;styleOb.msElem=maskElement;}};extendPrototype([DynamicPropertyContainer],SVGGradientFillStyleData);function SVGGradientStrokeStyleData(elem,data,styleOb){this.initDynamicPropertyContainer(elem);this.getValue=this.iterateDynamicProperties;this.w=PropertyFactory.getProp(elem,data.w,0,null,this);this.d=new DashProperty(elem,data.d||{},'svg',this);this.initGradientData(elem,data,styleOb);this._isAnimated=!!this._isAnimated;}extendPrototype([SVGGradientFillStyleData,DynamicPropertyContainer],SVGGradientStrokeStyleData);function ShapeGroupData(){this.it=[];this.prevViewData=[];this.gr=createNS('g');}var SVGElementsRenderer=function(){var _identityMatrix=new Matrix();var _matrixHelper=new Matrix();var ob={createRenderFunction:createRenderFunction};function createRenderFunction(data){var ty=data.ty;switch(data.ty){case'fl':return renderFill;case'gf':return renderGradient;case'gs':return renderGradientStroke;case'st':return renderStroke;case'sh':case'el':case'rc':case'sr':return renderPath;case'tr':return renderContentTransform;}}function renderContentTransform(styleData,itemData,isFirstFrame){if(isFirstFrame||itemData.transform.op._mdf){itemData.transform.container.setAttribute('opacity',itemData.transform.op.v);}if(isFirstFrame||itemData.transform.mProps._mdf){itemData.transform.container.setAttribute('transform',itemData.transform.mProps.v.to2dCSS());}}function renderPath(styleData,itemData,isFirstFrame){var j,jLen,pathStringTransformed,redraw,pathNodes,l,lLen=itemData.styles.length;var lvl=itemData.lvl;var paths,mat,props,iterations,k;for(l=0;l<lLen;l+=1){redraw=itemData.sh._mdf||isFirstFrame;if(itemData.styles[l].lvl<lvl){mat=_matrixHelper.reset();iterations=lvl-itemData.styles[l].lvl;k=itemData.transformers.length-1;while(!redraw&&iterations>0){redraw=itemData.transformers[k].mProps._mdf||redraw;iterations--;k--;}if(redraw){iterations=lvl-itemData.styles[l].lvl;k=itemData.transformers.length-1;while(iterations>0){props=itemData.transformers[k].mProps.v.props;mat.transform(props[0],props[1],props[2],props[3],props[4],props[5],props[6],props[7],props[8],props[9],props[10],props[11],props[12],props[13],props[14],props[15]);iterations--;k--;}}}else{mat=_identityMatrix;}paths=itemData.sh.paths;jLen=paths._length;if(redraw){pathStringTransformed='';for(j=0;j<jLen;j+=1){pathNodes=paths.shapes[j];if(pathNodes&&pathNodes._length){pathStringTransformed+=buildShapeString(pathNodes,pathNodes._length,pathNodes.c,mat);}}itemData.caches[l]=pathStringTransformed;}else{pathStringTransformed=itemData.caches[l];}itemData.styles[l].d+=styleData.hd===true?'':pathStringTransformed;itemData.styles[l]._mdf=redraw||itemData.styles[l]._mdf;}}function renderFill(styleData,itemData,isFirstFrame){var styleElem=itemData.style;if(itemData.c._mdf||isFirstFrame){styleElem.pElem.setAttribute('fill','rgb('+bm_floor(itemData.c.v[0])+','+bm_floor(itemData.c.v[1])+','+bm_floor(itemData.c.v[2])+')');}if(itemData.o._mdf||isFirstFrame){styleElem.pElem.setAttribute('fill-opacity',itemData.o.v);}};function renderGradientStroke(styleData,itemData,isFirstFrame){renderGradient(styleData,itemData,isFirstFrame);renderStroke(styleData,itemData,isFirstFrame);}function renderGradient(styleData,itemData,isFirstFrame){var gfill=itemData.gf;var hasOpacity=itemData.g._hasOpacity;var pt1=itemData.s.v,pt2=itemData.e.v;if(itemData.o._mdf||isFirstFrame){var attr=styleData.ty==='gf'?'fill-opacity':'stroke-opacity';itemData.style.pElem.setAttribute(attr,itemData.o.v);}if(itemData.s._mdf||isFirstFrame){var attr1=styleData.t===1?'x1':'cx';var attr2=attr1==='x1'?'y1':'cy';gfill.setAttribute(attr1,pt1[0]);gfill.setAttribute(attr2,pt1[1]);if(hasOpacity&&!itemData.g._collapsable){itemData.of.setAttribute(attr1,pt1[0]);itemData.of.setAttribute(attr2,pt1[1]);}}var stops,i,len,stop;if(itemData.g._cmdf||isFirstFrame){stops=itemData.cst;var cValues=itemData.g.c;len=stops.length;for(i=0;i<len;i+=1){stop=stops[i];stop.setAttribute('offset',cValues[i*4]+'%');stop.setAttribute('stop-color','rgb('+cValues[i*4+1]+','+cValues[i*4+2]+','+cValues[i*4+3]+')');}}if(hasOpacity&&(itemData.g._omdf||isFirstFrame)){var oValues=itemData.g.o;if(itemData.g._collapsable){stops=itemData.cst;}else{stops=itemData.ost;}len=stops.length;for(i=0;i<len;i+=1){stop=stops[i];if(!itemData.g._collapsable){stop.setAttribute('offset',oValues[i*2]+'%');}stop.setAttribute('stop-opacity',oValues[i*2+1]);}}if(styleData.t===1){if(itemData.e._mdf||isFirstFrame){gfill.setAttribute('x2',pt2[0]);gfill.setAttribute('y2',pt2[1]);if(hasOpacity&&!itemData.g._collapsable){itemData.of.setAttribute('x2',pt2[0]);itemData.of.setAttribute('y2',pt2[1]);}}}else{var rad;if(itemData.s._mdf||itemData.e._mdf||isFirstFrame){rad=Math.sqrt(Math.pow(pt1[0]-pt2[0],2)+Math.pow(pt1[1]-pt2[1],2));gfill.setAttribute('r',rad);if(hasOpacity&&!itemData.g._collapsable){itemData.of.setAttribute('r',rad);}}if(itemData.e._mdf||itemData.h._mdf||itemData.a._mdf||isFirstFrame){if(!rad){rad=Math.sqrt(Math.pow(pt1[0]-pt2[0],2)+Math.pow(pt1[1]-pt2[1],2));}var ang=Math.atan2(pt2[1]-pt1[1],pt2[0]-pt1[0]);var percent=itemData.h.v>=1?0.99:itemData.h.v<=-1?-0.99:itemData.h.v;var dist=rad*percent;var x=Math.cos(ang+itemData.a.v)*dist+pt1[0];var y=Math.sin(ang+itemData.a.v)*dist+pt1[1];gfill.setAttribute('fx',x);gfill.setAttribute('fy',y);if(hasOpacity&&!itemData.g._collapsable){itemData.of.setAttribute('fx',x);itemData.of.setAttribute('fy',y);}}//gfill.setAttribute('fy','200');
}};function renderStroke(styleData,itemData,isFirstFrame){var styleElem=itemData.style;var d=itemData.d;if(d&&(d._mdf||isFirstFrame)&&d.dashStr){styleElem.pElem.setAttribute('stroke-dasharray',d.dashStr);styleElem.pElem.setAttribute('stroke-dashoffset',d.dashoffset[0]);}if(itemData.c&&(itemData.c._mdf||isFirstFrame)){styleElem.pElem.setAttribute('stroke','rgb('+bm_floor(itemData.c.v[0])+','+bm_floor(itemData.c.v[1])+','+bm_floor(itemData.c.v[2])+')');}if(itemData.o._mdf||isFirstFrame){styleElem.pElem.setAttribute('stroke-opacity',itemData.o.v);}if(itemData.w._mdf||isFirstFrame){styleElem.pElem.setAttribute('stroke-width',itemData.w.v);if(styleElem.msElem){styleElem.msElem.setAttribute('stroke-width',itemData.w.v);}}};return ob;}();function ShapeTransformManager(){this.sequences={};this.sequenceList=[];this.transform_key_count=0;}ShapeTransformManager.prototype={addTransformSequence:function addTransformSequence(transforms){var i,len=transforms.length;var key='_';for(i=0;i<len;i+=1){key+=transforms[i].transform.key+'_';}var sequence=this.sequences[key];if(!sequence){sequence={transforms:[].concat(transforms),finalTransform:new Matrix(),_mdf:false};this.sequences[key]=sequence;this.sequenceList.push(sequence);}return sequence;},processSequence:function processSequence(sequence,isFirstFrame){var i=0,len=sequence.transforms.length,_mdf=isFirstFrame;while(i<len&&!isFirstFrame){if(sequence.transforms[i].transform.mProps._mdf){_mdf=true;break;}i+=1;}if(_mdf){var props;sequence.finalTransform.reset();for(i=len-1;i>=0;i-=1){props=sequence.transforms[i].transform.mProps.v.props;sequence.finalTransform.transform(props[0],props[1],props[2],props[3],props[4],props[5],props[6],props[7],props[8],props[9],props[10],props[11],props[12],props[13],props[14],props[15]);}}sequence._mdf=_mdf;},processSequences:function processSequences(isFirstFrame){var i,len=this.sequenceList.length;for(i=0;i<len;i+=1){this.processSequence(this.sequenceList[i],isFirstFrame);}},getNewKey:function getNewKey(){return'_'+this.transform_key_count++;}};function CVShapeData(element,data,styles,transformsManager){this.styledShapes=[];this.tr=[0,0,0,0,0,0];var ty=4;if(data.ty=='rc'){ty=5;}else if(data.ty=='el'){ty=6;}else if(data.ty=='sr'){ty=7;}this.sh=ShapePropertyFactory.getShapeProp(element,data,ty,element);var i,len=styles.length,styledShape;for(i=0;i<len;i+=1){if(!styles[i].closed){styledShape={transforms:transformsManager.addTransformSequence(styles[i].transforms),trNodes:[]};this.styledShapes.push(styledShape);styles[i].elements.push(styledShape);}}}CVShapeData.prototype.setAsAnimated=SVGShapeData.prototype.setAsAnimated;function BaseElement(){}BaseElement.prototype={checkMasks:function checkMasks(){if(!this.data.hasMask){return false;}var i=0,len=this.data.masksProperties.length;while(i<len){if(this.data.masksProperties[i].mode!=='n'&&this.data.masksProperties[i].cl!==false){return true;}i+=1;}return false;},initExpressions:function initExpressions(){this.layerInterface=LayerExpressionInterface(this);if(this.data.hasMask&&this.maskManager){this.layerInterface.registerMaskInterface(this.maskManager);}var effectsInterface=EffectsExpressionInterface.createEffectsInterface(this,this.layerInterface);this.layerInterface.registerEffectsInterface(effectsInterface);if(this.data.ty===0||this.data.xt){this.compInterface=CompExpressionInterface(this);}else if(this.data.ty===4){this.layerInterface.shapeInterface=ShapeExpressionInterface(this.shapesData,this.itemsData,this.layerInterface);this.layerInterface.content=this.layerInterface.shapeInterface;}else if(this.data.ty===5){this.layerInterface.textInterface=TextExpressionInterface(this);this.layerInterface.text=this.layerInterface.textInterface;}},setBlendMode:function setBlendMode(){var blendModeValue=getBlendMode(this.data.bm);var elem=this.baseElement||this.layerElement;elem.style['mix-blend-mode']=blendModeValue;},initBaseData:function initBaseData(data,globalData,comp){this.globalData=globalData;this.comp=comp;this.data=data;this.layerId=createElementID();//Stretch factor for old animations missing this property.
if(!this.data.sr){this.data.sr=1;}// effects manager
this.effectsManager=new EffectsManager(this.data,this,this.dynamicProperties);},getType:function getType(){return this.type;},sourceRectAtTime:function sourceRectAtTime(){}};function NullElement(data,globalData,comp){this.initFrame();this.initBaseData(data,globalData,comp);this.initFrame();this.initTransform(data,globalData,comp);this.initHierarchy();}NullElement.prototype.prepareFrame=function(num){this.prepareProperties(num,true);};NullElement.prototype.renderFrame=function(){};NullElement.prototype.getBaseElement=function(){return null;};NullElement.prototype.destroy=function(){};NullElement.prototype.sourceRectAtTime=function(){};NullElement.prototype.hide=function(){};extendPrototype([BaseElement,TransformElement,HierarchyElement,FrameElement],NullElement);function SVGBaseElement(){}SVGBaseElement.prototype={initRendererElement:function initRendererElement(){this.layerElement=createNS('g');},createContainerElements:function createContainerElements(){this.matteElement=createNS('g');this.transformedElement=this.layerElement;this.maskedElement=this.layerElement;this._sizeChanged=false;var layerElementParent=null;//If this layer acts as a mask for the following layer
var filId,fil,gg;if(this.data.td){if(this.data.td==3||this.data.td==1){var masker=createNS('mask');masker.setAttribute('id',this.layerId);masker.setAttribute('mask-type',this.data.td==3?'luminance':'alpha');masker.appendChild(this.layerElement);layerElementParent=masker;this.globalData.defs.appendChild(masker);// This is only for IE and Edge when mask if of type alpha
if(!featureSupport.maskType&&this.data.td==1){masker.setAttribute('mask-type','luminance');filId=createElementID();fil=filtersFactory.createFilter(filId);this.globalData.defs.appendChild(fil);fil.appendChild(filtersFactory.createAlphaToLuminanceFilter());gg=createNS('g');gg.appendChild(this.layerElement);layerElementParent=gg;masker.appendChild(gg);gg.setAttribute('filter','url('+locationHref+'#'+filId+')');}}else if(this.data.td==2){var maskGroup=createNS('mask');maskGroup.setAttribute('id',this.layerId);maskGroup.setAttribute('mask-type','alpha');var maskGrouper=createNS('g');maskGroup.appendChild(maskGrouper);filId=createElementID();fil=filtersFactory.createFilter(filId);////
// This solution doesn't work on Android when meta tag with viewport attribute is set
/*var feColorMatrix = createNS('feColorMatrix');
        feColorMatrix.setAttribute('type', 'matrix');
        feColorMatrix.setAttribute('color-interpolation-filters', 'sRGB');
        feColorMatrix.setAttribute('values','1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 -1 1');
        fil.appendChild(feColorMatrix);*/ ////
var feCTr=createNS('feComponentTransfer');feCTr.setAttribute('in','SourceGraphic');fil.appendChild(feCTr);var feFunc=createNS('feFuncA');feFunc.setAttribute('type','table');feFunc.setAttribute('tableValues','1.0 0.0');feCTr.appendChild(feFunc);////
this.globalData.defs.appendChild(fil);var alphaRect=createNS('rect');alphaRect.setAttribute('width',this.comp.data.w);alphaRect.setAttribute('height',this.comp.data.h);alphaRect.setAttribute('x','0');alphaRect.setAttribute('y','0');alphaRect.setAttribute('fill','#ffffff');alphaRect.setAttribute('opacity','0');maskGrouper.setAttribute('filter','url('+locationHref+'#'+filId+')');maskGrouper.appendChild(alphaRect);maskGrouper.appendChild(this.layerElement);layerElementParent=maskGrouper;if(!featureSupport.maskType){maskGroup.setAttribute('mask-type','luminance');fil.appendChild(filtersFactory.createAlphaToLuminanceFilter());gg=createNS('g');maskGrouper.appendChild(alphaRect);gg.appendChild(this.layerElement);layerElementParent=gg;maskGrouper.appendChild(gg);}this.globalData.defs.appendChild(maskGroup);}}else if(this.data.tt){this.matteElement.appendChild(this.layerElement);layerElementParent=this.matteElement;this.baseElement=this.matteElement;}else{this.baseElement=this.layerElement;}if(this.data.ln){this.layerElement.setAttribute('id',this.data.ln);}if(this.data.cl){this.layerElement.setAttribute('class',this.data.cl);}//Clipping compositions to hide content that exceeds boundaries. If collapsed transformations is on, component should not be clipped
if(this.data.ty===0&&!this.data.hd){var cp=createNS('clipPath');var pt=createNS('path');pt.setAttribute('d','M0,0 L'+this.data.w+',0'+' L'+this.data.w+','+this.data.h+' L0,'+this.data.h+'z');var clipId=createElementID();cp.setAttribute('id',clipId);cp.appendChild(pt);this.globalData.defs.appendChild(cp);if(this.checkMasks()){var cpGroup=createNS('g');cpGroup.setAttribute('clip-path','url('+locationHref+'#'+clipId+')');cpGroup.appendChild(this.layerElement);this.transformedElement=cpGroup;if(layerElementParent){layerElementParent.appendChild(this.transformedElement);}else{this.baseElement=this.transformedElement;}}else{this.layerElement.setAttribute('clip-path','url('+locationHref+'#'+clipId+')');}}if(this.data.bm!==0){this.setBlendMode();}},renderElement:function renderElement(){if(this.finalTransform._matMdf){this.transformedElement.setAttribute('transform',this.finalTransform.mat.to2dCSS());}if(this.finalTransform._opMdf){this.transformedElement.setAttribute('opacity',this.finalTransform.mProp.o.v);}},destroyBaseElement:function destroyBaseElement(){this.layerElement=null;this.matteElement=null;this.maskManager.destroy();},getBaseElement:function getBaseElement(){if(this.data.hd){return null;}return this.baseElement;},createRenderableComponents:function createRenderableComponents(){this.maskManager=new MaskElement(this.data,this,this.globalData);this.renderableEffectsManager=new SVGEffects(this);},setMatte:function setMatte(id){if(!this.matteElement){return;}this.matteElement.setAttribute("mask","url("+locationHref+"#"+id+")");}};function IShapeElement(){}IShapeElement.prototype={addShapeToModifiers:function addShapeToModifiers(data){var i,len=this.shapeModifiers.length;for(i=0;i<len;i+=1){this.shapeModifiers[i].addShape(data);}},isShapeInAnimatedModifiers:function isShapeInAnimatedModifiers(data){var i=0,len=this.shapeModifiers.length;while(i<len){if(this.shapeModifiers[i].isAnimatedWithShape(data)){return true;}}return false;},renderModifiers:function renderModifiers(){if(!this.shapeModifiers.length){return;}var i,len=this.shapes.length;for(i=0;i<len;i+=1){this.shapes[i].sh.reset();}len=this.shapeModifiers.length;for(i=len-1;i>=0;i-=1){this.shapeModifiers[i].processShapes(this._isFirstFrame);}},lcEnum:{'1':'butt','2':'round','3':'square'},ljEnum:{'1':'miter','2':'round','3':'bevel'},searchProcessedElement:function searchProcessedElement(elem){var elements=this.processedElements;var i=0,len=elements.length;while(i<len){if(elements[i].elem===elem){return elements[i].pos;}i+=1;}return 0;},addProcessedElement:function addProcessedElement(elem,pos){var elements=this.processedElements;var i=elements.length;while(i){i-=1;if(elements[i].elem===elem){elements[i].pos=pos;return;}}elements.push(new ProcessedElement(elem,pos));},prepareFrame:function prepareFrame(num){this.prepareRenderableFrame(num);this.prepareProperties(num,this.isInRange);}};function ITextElement(){}ITextElement.prototype.initElement=function(data,globalData,comp){this.lettersChangedFlag=true;this.initFrame();this.initBaseData(data,globalData,comp);this.textProperty=new TextProperty(this,data.t,this.dynamicProperties);this.textAnimator=new TextAnimatorProperty(data.t,this.renderType,this);this.initTransform(data,globalData,comp);this.initHierarchy();this.initRenderable();this.initRendererElement();this.createContainerElements();this.createRenderableComponents();this.createContent();this.hide();this.textAnimator.searchProperties(this.dynamicProperties);};ITextElement.prototype.prepareFrame=function(num){this._mdf=false;this.prepareRenderableFrame(num);this.prepareProperties(num,this.isInRange);if(this.textProperty._mdf||this.textProperty._isFirstFrame){this.buildNewText();this.textProperty._isFirstFrame=false;this.textProperty._mdf=false;}};ITextElement.prototype.createPathShape=function(matrixHelper,shapes){var j,jLen=shapes.length;var k,kLen,pathNodes;var shapeStr='';for(j=0;j<jLen;j+=1){pathNodes=shapes[j].ks.k;shapeStr+=buildShapeString(pathNodes,pathNodes.i.length,true,matrixHelper);}return shapeStr;};ITextElement.prototype.updateDocumentData=function(newData,index){this.textProperty.updateDocumentData(newData,index);};ITextElement.prototype.canResizeFont=function(_canResize){this.textProperty.canResizeFont(_canResize);};ITextElement.prototype.setMinimumFontSize=function(_fontSize){this.textProperty.setMinimumFontSize(_fontSize);};ITextElement.prototype.applyTextPropertiesToMatrix=function(documentData,matrixHelper,lineNumber,xPos,yPos){if(documentData.ps){matrixHelper.translate(documentData.ps[0],documentData.ps[1]+documentData.ascent,0);}matrixHelper.translate(0,-documentData.ls,0);switch(documentData.j){case 1:matrixHelper.translate(documentData.justifyOffset+(documentData.boxWidth-documentData.lineWidths[lineNumber]),0,0);break;case 2:matrixHelper.translate(documentData.justifyOffset+(documentData.boxWidth-documentData.lineWidths[lineNumber])/2,0,0);break;}matrixHelper.translate(xPos,yPos,0);};ITextElement.prototype.buildColor=function(colorData){return'rgb('+Math.round(colorData[0]*255)+','+Math.round(colorData[1]*255)+','+Math.round(colorData[2]*255)+')';};ITextElement.prototype.emptyProp=new LetterProps();ITextElement.prototype.destroy=function(){};function ICompElement(){}extendPrototype([BaseElement,TransformElement,HierarchyElement,FrameElement,RenderableDOMElement],ICompElement);ICompElement.prototype.initElement=function(data,globalData,comp){this.initFrame();this.initBaseData(data,globalData,comp);this.initTransform(data,globalData,comp);this.initRenderable();this.initHierarchy();this.initRendererElement();this.createContainerElements();this.createRenderableComponents();if(this.data.xt||!globalData.progressiveLoad){this.buildAllItems();}this.hide();};/*ICompElement.prototype.hide = function(){
if(!this.hidden){
this.hideElement();
var i,len = this.elements.length;
for( i = 0; i < len; i+=1 ){
    if(this.elements[i]){
        this.elements[i].hide();
    }
}
}
};*/ICompElement.prototype.prepareFrame=function(num){this._mdf=false;this.prepareRenderableFrame(num);this.prepareProperties(num,this.isInRange);if(!this.isInRange&&!this.data.xt){return;}if(!this.tm._placeholder){var timeRemapped=this.tm.v;if(timeRemapped===this.data.op){timeRemapped=this.data.op-1;}this.renderedFrame=timeRemapped;}else{this.renderedFrame=num/this.data.sr;}var i,len=this.elements.length;if(!this.completeLayers){this.checkLayers(this.renderedFrame);}//This iteration needs to be backwards because of how expressions connect between each other
for(i=len-1;i>=0;i-=1){if(this.completeLayers||this.elements[i]){this.elements[i].prepareFrame(this.renderedFrame-this.layers[i].st);if(this.elements[i]._mdf){this._mdf=true;}}}};ICompElement.prototype.renderInnerContent=function(){var i,len=this.layers.length;for(i=0;i<len;i+=1){if(this.completeLayers||this.elements[i]){this.elements[i].renderFrame();}}};ICompElement.prototype.setElements=function(elems){this.elements=elems;};ICompElement.prototype.getElements=function(){return this.elements;};ICompElement.prototype.destroyElements=function(){var i,len=this.layers.length;for(i=0;i<len;i+=1){if(this.elements[i]){this.elements[i].destroy();}}};ICompElement.prototype.destroy=function(){this.destroyElements();this.destroyBaseElement();};function IImageElement(data,globalData,comp){this.assetData=globalData.getAssetData(data.refId);this.initElement(data,globalData,comp);this.sourceRect={top:0,left:0,width:this.assetData.w,height:this.assetData.h};}extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOMElement],IImageElement);IImageElement.prototype.createContent=function(){var assetPath=this.globalData.getAssetsPath(this.assetData);this.innerElem=createNS('image');this.innerElem.setAttribute('width',this.assetData.w+"px");this.innerElem.setAttribute('height',this.assetData.h+"px");this.innerElem.setAttribute('preserveAspectRatio',this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio);this.innerElem.setAttributeNS('http://www.w3.org/1999/xlink','href',assetPath);this.layerElement.appendChild(this.innerElem);};IImageElement.prototype.sourceRectAtTime=function(){return this.sourceRect;};function ISolidElement(data,globalData,comp){this.initElement(data,globalData,comp);}extendPrototype([IImageElement],ISolidElement);ISolidElement.prototype.createContent=function(){var rect=createNS('rect');////rect.style.width = this.data.sw;
////rect.style.height = this.data.sh;
////rect.style.fill = this.data.sc;
rect.setAttribute('width',this.data.sw);rect.setAttribute('height',this.data.sh);rect.setAttribute('fill',this.data.sc);this.layerElement.appendChild(rect);};function SVGCompElement(data,globalData,comp){this.layers=data.layers;this.supports3d=true;this.completeLayers=false;this.pendingElements=[];this.elements=this.layers?createSizedArray(this.layers.length):[];//this.layerElement = createNS('g');
this.initElement(data,globalData,comp);this.tm=data.tm?PropertyFactory.getProp(this,data.tm,0,globalData.frameRate,this):{_placeholder:true};}extendPrototype([SVGRenderer,ICompElement,SVGBaseElement],SVGCompElement);function SVGTextElement(data,globalData,comp){this.textSpans=[];this.renderType='svg';this.initElement(data,globalData,comp);}extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOMElement,ITextElement],SVGTextElement);SVGTextElement.prototype.createContent=function(){if(this.data.singleShape&&!this.globalData.fontManager.chars){this.textContainer=createNS('text');}};SVGTextElement.prototype.buildTextContents=function(textArray){var i=0,len=textArray.length;var textContents=[],currentTextContent='';while(i<len){if(textArray[i]===String.fromCharCode(13)||textArray[i]===String.fromCharCode(3)){textContents.push(currentTextContent);currentTextContent='';}else{currentTextContent+=textArray[i];}i+=1;}textContents.push(currentTextContent);return textContents;};SVGTextElement.prototype.buildNewText=function(){var i,len;var documentData=this.textProperty.currentData;this.renderedLetters=createSizedArray(documentData?documentData.l.length:0);if(documentData.fc){this.layerElement.setAttribute('fill',this.buildColor(documentData.fc));}else{this.layerElement.setAttribute('fill','rgba(0,0,0,0)');}if(documentData.sc){this.layerElement.setAttribute('stroke',this.buildColor(documentData.sc));this.layerElement.setAttribute('stroke-width',documentData.sw);}this.layerElement.setAttribute('font-size',documentData.finalSize);var fontData=this.globalData.fontManager.getFontByName(documentData.f);if(fontData.fClass){this.layerElement.setAttribute('class',fontData.fClass);}else{this.layerElement.setAttribute('font-family',fontData.fFamily);var fWeight=documentData.fWeight,fStyle=documentData.fStyle;this.layerElement.setAttribute('font-style',fStyle);this.layerElement.setAttribute('font-weight',fWeight);}this.layerElement.setAttribute('aria-label',documentData.t);var letters=documentData.l||[];var usesGlyphs=!!this.globalData.fontManager.chars;len=letters.length;var tSpan;var matrixHelper=this.mHelper;var shapes,shapeStr='',singleShape=this.data.singleShape;var xPos=0,yPos=0,firstLine=true;var trackingOffset=documentData.tr/1000*documentData.finalSize;if(singleShape&&!usesGlyphs&&!documentData.sz){var tElement=this.textContainer;var justify='start';switch(documentData.j){case 1:justify='end';break;case 2:justify='middle';break;}tElement.setAttribute('text-anchor',justify);tElement.setAttribute('letter-spacing',trackingOffset);var textContent=this.buildTextContents(documentData.finalText);len=textContent.length;yPos=documentData.ps?documentData.ps[1]+documentData.ascent:0;for(i=0;i<len;i+=1){tSpan=this.textSpans[i]||createNS('tspan');tSpan.textContent=textContent[i];tSpan.setAttribute('x',0);tSpan.setAttribute('y',yPos);tSpan.style.display='inherit';tElement.appendChild(tSpan);this.textSpans[i]=tSpan;yPos+=documentData.finalLineHeight;}this.layerElement.appendChild(tElement);}else{var cachedSpansLength=this.textSpans.length;var shapeData,charData;for(i=0;i<len;i+=1){if(!usesGlyphs||!singleShape||i===0){tSpan=cachedSpansLength>i?this.textSpans[i]:createNS(usesGlyphs?'path':'text');if(cachedSpansLength<=i){tSpan.setAttribute('stroke-linecap','butt');tSpan.setAttribute('stroke-linejoin','round');tSpan.setAttribute('stroke-miterlimit','4');this.textSpans[i]=tSpan;this.layerElement.appendChild(tSpan);}tSpan.style.display='inherit';}matrixHelper.reset();matrixHelper.scale(documentData.finalSize/100,documentData.finalSize/100);if(singleShape){if(letters[i].n){xPos=-trackingOffset;yPos+=documentData.yOffset;yPos+=firstLine?1:0;firstLine=false;}this.applyTextPropertiesToMatrix(documentData,matrixHelper,letters[i].line,xPos,yPos);xPos+=letters[i].l||0;//xPos += letters[i].val === ' ' ? 0 : trackingOffset;
xPos+=trackingOffset;}if(usesGlyphs){charData=this.globalData.fontManager.getCharData(documentData.finalText[i],fontData.fStyle,this.globalData.fontManager.getFontByName(documentData.f).fFamily);shapeData=charData&&charData.data||{};shapes=shapeData.shapes?shapeData.shapes[0].it:[];if(!singleShape){tSpan.setAttribute('d',this.createPathShape(matrixHelper,shapes));}else{shapeStr+=this.createPathShape(matrixHelper,shapes);}}else{if(singleShape){tSpan.setAttribute("transform","translate("+matrixHelper.props[12]+","+matrixHelper.props[13]+")");}tSpan.textContent=letters[i].val;tSpan.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve");}//
}if(singleShape&&tSpan){tSpan.setAttribute('d',shapeStr);}}while(i<this.textSpans.length){this.textSpans[i].style.display='none';i+=1;}this._sizeChanged=true;};SVGTextElement.prototype.sourceRectAtTime=function(time){this.prepareFrame(this.comp.renderedFrame-this.data.st);this.renderInnerContent();if(this._sizeChanged){this._sizeChanged=false;var textBox=this.layerElement.getBBox();this.bbox={top:textBox.y,left:textBox.x,width:textBox.width,height:textBox.height};}return this.bbox;};SVGTextElement.prototype.renderInnerContent=function(){if(!this.data.singleShape){this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag);if(this.lettersChangedFlag||this.textAnimator.lettersChangedFlag){this._sizeChanged=true;var i,len;var renderedLetters=this.textAnimator.renderedLetters;var letters=this.textProperty.currentData.l;len=letters.length;var renderedLetter,textSpan;for(i=0;i<len;i+=1){if(letters[i].n){continue;}renderedLetter=renderedLetters[i];textSpan=this.textSpans[i];if(renderedLetter._mdf.m){textSpan.setAttribute('transform',renderedLetter.m);}if(renderedLetter._mdf.o){textSpan.setAttribute('opacity',renderedLetter.o);}if(renderedLetter._mdf.sw){textSpan.setAttribute('stroke-width',renderedLetter.sw);}if(renderedLetter._mdf.sc){textSpan.setAttribute('stroke',renderedLetter.sc);}if(renderedLetter._mdf.fc){textSpan.setAttribute('fill',renderedLetter.fc);}}}}};function SVGShapeElement(data,globalData,comp){//List of drawable elements
this.shapes=[];// Full shape data
this.shapesData=data.shapes;//List of styles that will be applied to shapes
this.stylesList=[];//List of modifiers that will be applied to shapes
this.shapeModifiers=[];//List of items in shape tree
this.itemsData=[];//List of items in previous shape tree
this.processedElements=[];// List of animated components
this.animatedContents=[];this.initElement(data,globalData,comp);//Moving any property that doesn't get too much access after initialization because of v8 way of handling more than 10 properties.
// List of elements that have been created
this.prevViewData=[];//Moving any property that doesn't get too much access after initialization because of v8 way of handling more than 10 properties.
}extendPrototype([BaseElement,TransformElement,SVGBaseElement,IShapeElement,HierarchyElement,FrameElement,RenderableDOMElement],SVGShapeElement);SVGShapeElement.prototype.initSecondaryElement=function(){};SVGShapeElement.prototype.identityMatrix=new Matrix();SVGShapeElement.prototype.buildExpressionInterface=function(){};SVGShapeElement.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],true);this.filterUniqueShapes();};/*
This method searches for multiple shapes that affect a single element and one of them is animated
*/SVGShapeElement.prototype.filterUniqueShapes=function(){var i,len=this.shapes.length,shape;var j,jLen=this.stylesList.length;var style,count=0;var tempShapes=[];var areAnimated=false;for(j=0;j<jLen;j+=1){style=this.stylesList[j];areAnimated=false;tempShapes.length=0;for(i=0;i<len;i+=1){shape=this.shapes[i];if(shape.styles.indexOf(style)!==-1){tempShapes.push(shape);areAnimated=shape._isAnimated||areAnimated;}}if(tempShapes.length>1&&areAnimated){this.setShapesAsAnimated(tempShapes);}}};SVGShapeElement.prototype.setShapesAsAnimated=function(shapes){var i,len=shapes.length;for(i=0;i<len;i+=1){shapes[i].setAsAnimated();}};SVGShapeElement.prototype.createStyleElement=function(data,level){//TODO: prevent drawing of hidden styles
var elementData;var styleOb=new SVGStyleData(data,level);var pathElement=styleOb.pElem;if(data.ty==='st'){elementData=new SVGStrokeStyleData(this,data,styleOb);}else if(data.ty==='fl'){elementData=new SVGFillStyleData(this,data,styleOb);}else if(data.ty==='gf'||data.ty==='gs'){var gradientConstructor=data.ty==='gf'?SVGGradientFillStyleData:SVGGradientStrokeStyleData;elementData=new gradientConstructor(this,data,styleOb);this.globalData.defs.appendChild(elementData.gf);if(elementData.maskId){this.globalData.defs.appendChild(elementData.ms);this.globalData.defs.appendChild(elementData.of);pathElement.setAttribute('mask','url('+locationHref+'#'+elementData.maskId+')');}}if(data.ty==='st'||data.ty==='gs'){pathElement.setAttribute('stroke-linecap',this.lcEnum[data.lc]||'round');pathElement.setAttribute('stroke-linejoin',this.ljEnum[data.lj]||'round');pathElement.setAttribute('fill-opacity','0');if(data.lj===1){pathElement.setAttribute('stroke-miterlimit',data.ml);}}if(data.r===2){pathElement.setAttribute('fill-rule','evenodd');}if(data.ln){pathElement.setAttribute('id',data.ln);}if(data.cl){pathElement.setAttribute('class',data.cl);}if(data.bm){pathElement.style['mix-blend-mode']=getBlendMode(data.bm);}this.stylesList.push(styleOb);this.addToAnimatedContents(data,elementData);return elementData;};SVGShapeElement.prototype.createGroupElement=function(data){var elementData=new ShapeGroupData();if(data.ln){elementData.gr.setAttribute('id',data.ln);}if(data.cl){elementData.gr.setAttribute('class',data.cl);}if(data.bm){elementData.gr.style['mix-blend-mode']=getBlendMode(data.bm);}return elementData;};SVGShapeElement.prototype.createTransformElement=function(data,container){var transformProperty=TransformPropertyFactory.getTransformProperty(this,data,this);var elementData=new SVGTransformData(transformProperty,transformProperty.o,container);this.addToAnimatedContents(data,elementData);return elementData;};SVGShapeElement.prototype.createShapeElement=function(data,ownTransformers,level){var ty=4;if(data.ty==='rc'){ty=5;}else if(data.ty==='el'){ty=6;}else if(data.ty==='sr'){ty=7;}var shapeProperty=ShapePropertyFactory.getShapeProp(this,data,ty,this);var elementData=new SVGShapeData(ownTransformers,level,shapeProperty);this.shapes.push(elementData);this.addShapeToModifiers(elementData);this.addToAnimatedContents(data,elementData);return elementData;};SVGShapeElement.prototype.addToAnimatedContents=function(data,element){var i=0,len=this.animatedContents.length;while(i<len){if(this.animatedContents[i].element===element){return;}i+=1;}this.animatedContents.push({fn:SVGElementsRenderer.createRenderFunction(data),element:element,data:data});};SVGShapeElement.prototype.setElementStyles=function(elementData){var arr=elementData.styles;var j,jLen=this.stylesList.length;for(j=0;j<jLen;j+=1){if(!this.stylesList[j].closed){arr.push(this.stylesList[j]);}}};SVGShapeElement.prototype.reloadShapes=function(){this._isFirstFrame=true;var i,len=this.itemsData.length;for(i=0;i<len;i+=1){this.prevViewData[i]=this.itemsData[i];}this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],true);this.filterUniqueShapes();len=this.dynamicProperties.length;for(i=0;i<len;i+=1){this.dynamicProperties[i].getValue();}this.renderModifiers();};SVGShapeElement.prototype.searchShapes=function(arr,itemsData,prevViewData,container,level,transformers,render){var ownTransformers=[].concat(transformers);var i,len=arr.length-1;var j,jLen;var ownStyles=[],ownModifiers=[],styleOb,currentTransform,modifier,processedPos;for(i=len;i>=0;i-=1){processedPos=this.searchProcessedElement(arr[i]);if(!processedPos){arr[i]._render=render;}else{itemsData[i]=prevViewData[processedPos-1];}if(arr[i].ty=='fl'||arr[i].ty=='st'||arr[i].ty=='gf'||arr[i].ty=='gs'){if(!processedPos){itemsData[i]=this.createStyleElement(arr[i],level);}else{itemsData[i].style.closed=false;}if(arr[i]._render){container.appendChild(itemsData[i].style.pElem);}ownStyles.push(itemsData[i].style);}else if(arr[i].ty=='gr'){if(!processedPos){itemsData[i]=this.createGroupElement(arr[i]);}else{jLen=itemsData[i].it.length;for(j=0;j<jLen;j+=1){itemsData[i].prevViewData[j]=itemsData[i].it[j];}}this.searchShapes(arr[i].it,itemsData[i].it,itemsData[i].prevViewData,itemsData[i].gr,level+1,ownTransformers,render);if(arr[i]._render){container.appendChild(itemsData[i].gr);}}else if(arr[i].ty=='tr'){if(!processedPos){itemsData[i]=this.createTransformElement(arr[i],container);}currentTransform=itemsData[i].transform;ownTransformers.push(currentTransform);}else if(arr[i].ty=='sh'||arr[i].ty=='rc'||arr[i].ty=='el'||arr[i].ty=='sr'){if(!processedPos){itemsData[i]=this.createShapeElement(arr[i],ownTransformers,level);}this.setElementStyles(itemsData[i]);}else if(arr[i].ty=='tm'||arr[i].ty=='rd'||arr[i].ty=='ms'){if(!processedPos){modifier=ShapeModifiers.getModifier(arr[i].ty);modifier.init(this,arr[i]);itemsData[i]=modifier;this.shapeModifiers.push(modifier);}else{modifier=itemsData[i];modifier.closed=false;}ownModifiers.push(modifier);}else if(arr[i].ty=='rp'){if(!processedPos){modifier=ShapeModifiers.getModifier(arr[i].ty);itemsData[i]=modifier;modifier.init(this,arr,i,itemsData);this.shapeModifiers.push(modifier);render=false;}else{modifier=itemsData[i];modifier.closed=true;}ownModifiers.push(modifier);}this.addProcessedElement(arr[i],i+1);}len=ownStyles.length;for(i=0;i<len;i+=1){ownStyles[i].closed=true;}len=ownModifiers.length;for(i=0;i<len;i+=1){ownModifiers[i].closed=true;}};SVGShapeElement.prototype.renderInnerContent=function(){this.renderModifiers();var i,len=this.stylesList.length;for(i=0;i<len;i+=1){this.stylesList[i].reset();}this.renderShape();for(i=0;i<len;i+=1){if(this.stylesList[i]._mdf||this._isFirstFrame){if(this.stylesList[i].msElem){this.stylesList[i].msElem.setAttribute('d',this.stylesList[i].d);//Adding M0 0 fixes same mask bug on all browsers
this.stylesList[i].d='M0 0'+this.stylesList[i].d;}this.stylesList[i].pElem.setAttribute('d',this.stylesList[i].d||'M0 0');}}};SVGShapeElement.prototype.renderShape=function(){var i,len=this.animatedContents.length;var animatedContent;for(i=0;i<len;i+=1){animatedContent=this.animatedContents[i];if((this._isFirstFrame||animatedContent.element._isAnimated)&&animatedContent.data!==true){animatedContent.fn(animatedContent.data,animatedContent.element,this._isFirstFrame);}}};SVGShapeElement.prototype.destroy=function(){this.destroyBaseElement();this.shapesData=null;this.itemsData=null;};function SVGTintFilter(filter,filterManager){this.filterManager=filterManager;var feColorMatrix=createNS('feColorMatrix');feColorMatrix.setAttribute('type','matrix');feColorMatrix.setAttribute('color-interpolation-filters','linearRGB');feColorMatrix.setAttribute('values','0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0');feColorMatrix.setAttribute('result','f1');filter.appendChild(feColorMatrix);feColorMatrix=createNS('feColorMatrix');feColorMatrix.setAttribute('type','matrix');feColorMatrix.setAttribute('color-interpolation-filters','sRGB');feColorMatrix.setAttribute('values','1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0');feColorMatrix.setAttribute('result','f2');filter.appendChild(feColorMatrix);this.matrixFilter=feColorMatrix;if(filterManager.effectElements[2].p.v!==100||filterManager.effectElements[2].p.k){var feMerge=createNS('feMerge');filter.appendChild(feMerge);var feMergeNode;feMergeNode=createNS('feMergeNode');feMergeNode.setAttribute('in','SourceGraphic');feMerge.appendChild(feMergeNode);feMergeNode=createNS('feMergeNode');feMergeNode.setAttribute('in','f2');feMerge.appendChild(feMergeNode);}}SVGTintFilter.prototype.renderFrame=function(forceRender){if(forceRender||this.filterManager._mdf){var colorBlack=this.filterManager.effectElements[0].p.v;var colorWhite=this.filterManager.effectElements[1].p.v;var opacity=this.filterManager.effectElements[2].p.v/100;this.matrixFilter.setAttribute('values',colorWhite[0]-colorBlack[0]+' 0 0 0 '+colorBlack[0]+' '+(colorWhite[1]-colorBlack[1])+' 0 0 0 '+colorBlack[1]+' '+(colorWhite[2]-colorBlack[2])+' 0 0 0 '+colorBlack[2]+' 0 0 0 '+opacity+' 0');}};function SVGFillFilter(filter,filterManager){this.filterManager=filterManager;var feColorMatrix=createNS('feColorMatrix');feColorMatrix.setAttribute('type','matrix');feColorMatrix.setAttribute('color-interpolation-filters','sRGB');feColorMatrix.setAttribute('values','1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0');filter.appendChild(feColorMatrix);this.matrixFilter=feColorMatrix;}SVGFillFilter.prototype.renderFrame=function(forceRender){if(forceRender||this.filterManager._mdf){var color=this.filterManager.effectElements[2].p.v;var opacity=this.filterManager.effectElements[6].p.v;this.matrixFilter.setAttribute('values','0 0 0 0 '+color[0]+' 0 0 0 0 '+color[1]+' 0 0 0 0 '+color[2]+' 0 0 0 '+opacity+' 0');}};function SVGGaussianBlurEffect(filter,filterManager){// Outset the filter region by 100% on all sides to accommodate blur expansion.
filter.setAttribute('x','-100%');filter.setAttribute('y','-100%');filter.setAttribute('width','300%');filter.setAttribute('height','300%');this.filterManager=filterManager;var feGaussianBlur=createNS('feGaussianBlur');filter.appendChild(feGaussianBlur);this.feGaussianBlur=feGaussianBlur;}SVGGaussianBlurEffect.prototype.renderFrame=function(forceRender){if(forceRender||this.filterManager._mdf){// Empirical value, matching AE's blur appearance.
var kBlurrinessToSigma=0.3;var sigma=this.filterManager.effectElements[0].p.v*kBlurrinessToSigma;// Dimensions mapping:
//
//   1 -> horizontal & vertical
//   2 -> horizontal only
//   3 -> vertical only
//
var dimensions=this.filterManager.effectElements[1].p.v;var sigmaX=dimensions==3?0:sigma;var sigmaY=dimensions==2?0:sigma;this.feGaussianBlur.setAttribute('stdDeviation',sigmaX+" "+sigmaY);// Repeat edges mapping:
//
//   0 -> off -> duplicate
//   1 -> on  -> wrap
var edgeMode=this.filterManager.effectElements[2].p.v==1?'wrap':'duplicate';this.feGaussianBlur.setAttribute('edgeMode',edgeMode);}};function SVGStrokeEffect(elem,filterManager){this.initialized=false;this.filterManager=filterManager;this.elem=elem;this.paths=[];}SVGStrokeEffect.prototype.initialize=function(){var elemChildren=this.elem.layerElement.children||this.elem.layerElement.childNodes;var path,groupPath,i,len;if(this.filterManager.effectElements[1].p.v===1){len=this.elem.maskManager.masksProperties.length;i=0;}else{i=this.filterManager.effectElements[0].p.v-1;len=i+1;}groupPath=createNS('g');groupPath.setAttribute('fill','none');groupPath.setAttribute('stroke-linecap','round');groupPath.setAttribute('stroke-dashoffset',1);for(i;i<len;i+=1){path=createNS('path');groupPath.appendChild(path);this.paths.push({p:path,m:i});}if(this.filterManager.effectElements[10].p.v===3){var mask=createNS('mask');var id=createElementID();mask.setAttribute('id',id);mask.setAttribute('mask-type','alpha');mask.appendChild(groupPath);this.elem.globalData.defs.appendChild(mask);var g=createNS('g');g.setAttribute('mask','url('+locationHref+'#'+id+')');while(elemChildren[0]){g.appendChild(elemChildren[0]);}this.elem.layerElement.appendChild(g);this.masker=mask;groupPath.setAttribute('stroke','#fff');}else if(this.filterManager.effectElements[10].p.v===1||this.filterManager.effectElements[10].p.v===2){if(this.filterManager.effectElements[10].p.v===2){elemChildren=this.elem.layerElement.children||this.elem.layerElement.childNodes;while(elemChildren.length){this.elem.layerElement.removeChild(elemChildren[0]);}}this.elem.layerElement.appendChild(groupPath);this.elem.layerElement.removeAttribute('mask');groupPath.setAttribute('stroke','#fff');}this.initialized=true;this.pathMasker=groupPath;};SVGStrokeEffect.prototype.renderFrame=function(forceRender){if(!this.initialized){this.initialize();}var i,len=this.paths.length;var mask,path;for(i=0;i<len;i+=1){if(this.paths[i].m===-1){continue;}mask=this.elem.maskManager.viewData[this.paths[i].m];path=this.paths[i].p;if(forceRender||this.filterManager._mdf||mask.prop._mdf){path.setAttribute('d',mask.lastPath);}if(forceRender||this.filterManager.effectElements[9].p._mdf||this.filterManager.effectElements[4].p._mdf||this.filterManager.effectElements[7].p._mdf||this.filterManager.effectElements[8].p._mdf||mask.prop._mdf){var dasharrayValue;if(this.filterManager.effectElements[7].p.v!==0||this.filterManager.effectElements[8].p.v!==100){var s=Math.min(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)/100;var e=Math.max(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)/100;var l=path.getTotalLength();dasharrayValue='0 0 0 '+l*s+' ';var lineLength=l*(e-s);var segment=1+this.filterManager.effectElements[4].p.v*2*this.filterManager.effectElements[9].p.v/100;var units=Math.floor(lineLength/segment);var j;for(j=0;j<units;j+=1){dasharrayValue+='1 '+this.filterManager.effectElements[4].p.v*2*this.filterManager.effectElements[9].p.v/100+' ';}dasharrayValue+='0 '+l*10+' 0 0';}else{dasharrayValue='1 '+this.filterManager.effectElements[4].p.v*2*this.filterManager.effectElements[9].p.v/100;}path.setAttribute('stroke-dasharray',dasharrayValue);}}if(forceRender||this.filterManager.effectElements[4].p._mdf){this.pathMasker.setAttribute('stroke-width',this.filterManager.effectElements[4].p.v*2);}if(forceRender||this.filterManager.effectElements[6].p._mdf){this.pathMasker.setAttribute('opacity',this.filterManager.effectElements[6].p.v);}if(this.filterManager.effectElements[10].p.v===1||this.filterManager.effectElements[10].p.v===2){if(forceRender||this.filterManager.effectElements[3].p._mdf){var color=this.filterManager.effectElements[3].p.v;this.pathMasker.setAttribute('stroke','rgb('+bm_floor(color[0]*255)+','+bm_floor(color[1]*255)+','+bm_floor(color[2]*255)+')');}}};function SVGTritoneFilter(filter,filterManager){this.filterManager=filterManager;var feColorMatrix=createNS('feColorMatrix');feColorMatrix.setAttribute('type','matrix');feColorMatrix.setAttribute('color-interpolation-filters','linearRGB');feColorMatrix.setAttribute('values','0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0');feColorMatrix.setAttribute('result','f1');filter.appendChild(feColorMatrix);var feComponentTransfer=createNS('feComponentTransfer');feComponentTransfer.setAttribute('color-interpolation-filters','sRGB');filter.appendChild(feComponentTransfer);this.matrixFilter=feComponentTransfer;var feFuncR=createNS('feFuncR');feFuncR.setAttribute('type','table');feComponentTransfer.appendChild(feFuncR);this.feFuncR=feFuncR;var feFuncG=createNS('feFuncG');feFuncG.setAttribute('type','table');feComponentTransfer.appendChild(feFuncG);this.feFuncG=feFuncG;var feFuncB=createNS('feFuncB');feFuncB.setAttribute('type','table');feComponentTransfer.appendChild(feFuncB);this.feFuncB=feFuncB;}SVGTritoneFilter.prototype.renderFrame=function(forceRender){if(forceRender||this.filterManager._mdf){var color1=this.filterManager.effectElements[0].p.v;var color2=this.filterManager.effectElements[1].p.v;var color3=this.filterManager.effectElements[2].p.v;var tableR=color3[0]+' '+color2[0]+' '+color1[0];var tableG=color3[1]+' '+color2[1]+' '+color1[1];var tableB=color3[2]+' '+color2[2]+' '+color1[2];this.feFuncR.setAttribute('tableValues',tableR);this.feFuncG.setAttribute('tableValues',tableG);this.feFuncB.setAttribute('tableValues',tableB);//var opacity = this.filterManager.effectElements[2].p.v/100;
//this.matrixFilter.setAttribute('values',(colorWhite[0]- colorBlack[0])+' 0 0 0 '+ colorBlack[0] +' '+ (colorWhite[1]- colorBlack[1]) +' 0 0 0 '+ colorBlack[1] +' '+ (colorWhite[2]- colorBlack[2]) +' 0 0 0 '+ colorBlack[2] +' 0 0 0 ' + opacity + ' 0');
}};function SVGProLevelsFilter(filter,filterManager){this.filterManager=filterManager;var effectElements=this.filterManager.effectElements;var feComponentTransfer=createNS('feComponentTransfer');var feFuncR,feFuncG,feFuncB;if(effectElements[10].p.k||effectElements[10].p.v!==0||effectElements[11].p.k||effectElements[11].p.v!==1||effectElements[12].p.k||effectElements[12].p.v!==1||effectElements[13].p.k||effectElements[13].p.v!==0||effectElements[14].p.k||effectElements[14].p.v!==1){this.feFuncR=this.createFeFunc('feFuncR',feComponentTransfer);}if(effectElements[17].p.k||effectElements[17].p.v!==0||effectElements[18].p.k||effectElements[18].p.v!==1||effectElements[19].p.k||effectElements[19].p.v!==1||effectElements[20].p.k||effectElements[20].p.v!==0||effectElements[21].p.k||effectElements[21].p.v!==1){this.feFuncG=this.createFeFunc('feFuncG',feComponentTransfer);}if(effectElements[24].p.k||effectElements[24].p.v!==0||effectElements[25].p.k||effectElements[25].p.v!==1||effectElements[26].p.k||effectElements[26].p.v!==1||effectElements[27].p.k||effectElements[27].p.v!==0||effectElements[28].p.k||effectElements[28].p.v!==1){this.feFuncB=this.createFeFunc('feFuncB',feComponentTransfer);}if(effectElements[31].p.k||effectElements[31].p.v!==0||effectElements[32].p.k||effectElements[32].p.v!==1||effectElements[33].p.k||effectElements[33].p.v!==1||effectElements[34].p.k||effectElements[34].p.v!==0||effectElements[35].p.k||effectElements[35].p.v!==1){this.feFuncA=this.createFeFunc('feFuncA',feComponentTransfer);}if(this.feFuncR||this.feFuncG||this.feFuncB||this.feFuncA){feComponentTransfer.setAttribute('color-interpolation-filters','sRGB');filter.appendChild(feComponentTransfer);feComponentTransfer=createNS('feComponentTransfer');}if(effectElements[3].p.k||effectElements[3].p.v!==0||effectElements[4].p.k||effectElements[4].p.v!==1||effectElements[5].p.k||effectElements[5].p.v!==1||effectElements[6].p.k||effectElements[6].p.v!==0||effectElements[7].p.k||effectElements[7].p.v!==1){feComponentTransfer.setAttribute('color-interpolation-filters','sRGB');filter.appendChild(feComponentTransfer);this.feFuncRComposed=this.createFeFunc('feFuncR',feComponentTransfer);this.feFuncGComposed=this.createFeFunc('feFuncG',feComponentTransfer);this.feFuncBComposed=this.createFeFunc('feFuncB',feComponentTransfer);}}SVGProLevelsFilter.prototype.createFeFunc=function(type,feComponentTransfer){var feFunc=createNS(type);feFunc.setAttribute('type','table');feComponentTransfer.appendChild(feFunc);return feFunc;};SVGProLevelsFilter.prototype.getTableValue=function(inputBlack,inputWhite,gamma,outputBlack,outputWhite){var cnt=0;var segments=256;var perc;var min=Math.min(inputBlack,inputWhite);var max=Math.max(inputBlack,inputWhite);var table=Array.call(null,{length:segments});var colorValue;var pos=0;var outputDelta=outputWhite-outputBlack;var inputDelta=inputWhite-inputBlack;while(cnt<=256){perc=cnt/256;if(perc<=min){colorValue=inputDelta<0?outputWhite:outputBlack;}else if(perc>=max){colorValue=inputDelta<0?outputBlack:outputWhite;}else{colorValue=outputBlack+outputDelta*Math.pow((perc-inputBlack)/inputDelta,1/gamma);}table[pos++]=colorValue;cnt+=256/(segments-1);}return table.join(' ');};SVGProLevelsFilter.prototype.renderFrame=function(forceRender){if(forceRender||this.filterManager._mdf){var val,cnt,perc,bezier;var effectElements=this.filterManager.effectElements;if(this.feFuncRComposed&&(forceRender||effectElements[3].p._mdf||effectElements[4].p._mdf||effectElements[5].p._mdf||effectElements[6].p._mdf||effectElements[7].p._mdf)){val=this.getTableValue(effectElements[3].p.v,effectElements[4].p.v,effectElements[5].p.v,effectElements[6].p.v,effectElements[7].p.v);this.feFuncRComposed.setAttribute('tableValues',val);this.feFuncGComposed.setAttribute('tableValues',val);this.feFuncBComposed.setAttribute('tableValues',val);}if(this.feFuncR&&(forceRender||effectElements[10].p._mdf||effectElements[11].p._mdf||effectElements[12].p._mdf||effectElements[13].p._mdf||effectElements[14].p._mdf)){val=this.getTableValue(effectElements[10].p.v,effectElements[11].p.v,effectElements[12].p.v,effectElements[13].p.v,effectElements[14].p.v);this.feFuncR.setAttribute('tableValues',val);}if(this.feFuncG&&(forceRender||effectElements[17].p._mdf||effectElements[18].p._mdf||effectElements[19].p._mdf||effectElements[20].p._mdf||effectElements[21].p._mdf)){val=this.getTableValue(effectElements[17].p.v,effectElements[18].p.v,effectElements[19].p.v,effectElements[20].p.v,effectElements[21].p.v);this.feFuncG.setAttribute('tableValues',val);}if(this.feFuncB&&(forceRender||effectElements[24].p._mdf||effectElements[25].p._mdf||effectElements[26].p._mdf||effectElements[27].p._mdf||effectElements[28].p._mdf)){val=this.getTableValue(effectElements[24].p.v,effectElements[25].p.v,effectElements[26].p.v,effectElements[27].p.v,effectElements[28].p.v);this.feFuncB.setAttribute('tableValues',val);}if(this.feFuncA&&(forceRender||effectElements[31].p._mdf||effectElements[32].p._mdf||effectElements[33].p._mdf||effectElements[34].p._mdf||effectElements[35].p._mdf)){val=this.getTableValue(effectElements[31].p.v,effectElements[32].p.v,effectElements[33].p.v,effectElements[34].p.v,effectElements[35].p.v);this.feFuncA.setAttribute('tableValues',val);}}};function SVGDropShadowEffect(filter,filterManager){var filterSize=filterManager.container.globalData.renderConfig.filterSize;filter.setAttribute('x',filterSize.x);filter.setAttribute('y',filterSize.y);filter.setAttribute('width',filterSize.width);filter.setAttribute('height',filterSize.height);this.filterManager=filterManager;var feGaussianBlur=createNS('feGaussianBlur');feGaussianBlur.setAttribute('in','SourceAlpha');feGaussianBlur.setAttribute('result','drop_shadow_1');feGaussianBlur.setAttribute('stdDeviation','0');this.feGaussianBlur=feGaussianBlur;filter.appendChild(feGaussianBlur);var feOffset=createNS('feOffset');feOffset.setAttribute('dx','25');feOffset.setAttribute('dy','0');feOffset.setAttribute('in','drop_shadow_1');feOffset.setAttribute('result','drop_shadow_2');this.feOffset=feOffset;filter.appendChild(feOffset);var feFlood=createNS('feFlood');feFlood.setAttribute('flood-color','#00ff00');feFlood.setAttribute('flood-opacity','1');feFlood.setAttribute('result','drop_shadow_3');this.feFlood=feFlood;filter.appendChild(feFlood);var feComposite=createNS('feComposite');feComposite.setAttribute('in','drop_shadow_3');feComposite.setAttribute('in2','drop_shadow_2');feComposite.setAttribute('operator','in');feComposite.setAttribute('result','drop_shadow_4');filter.appendChild(feComposite);var feMerge=createNS('feMerge');filter.appendChild(feMerge);var feMergeNode;feMergeNode=createNS('feMergeNode');feMerge.appendChild(feMergeNode);feMergeNode=createNS('feMergeNode');feMergeNode.setAttribute('in','SourceGraphic');this.feMergeNode=feMergeNode;this.feMerge=feMerge;this.originalNodeAdded=false;feMerge.appendChild(feMergeNode);}SVGDropShadowEffect.prototype.renderFrame=function(forceRender){if(forceRender||this.filterManager._mdf){if(forceRender||this.filterManager.effectElements[4].p._mdf){this.feGaussianBlur.setAttribute('stdDeviation',this.filterManager.effectElements[4].p.v/4);}if(forceRender||this.filterManager.effectElements[0].p._mdf){var col=this.filterManager.effectElements[0].p.v;this.feFlood.setAttribute('flood-color',rgbToHex(Math.round(col[0]*255),Math.round(col[1]*255),Math.round(col[2]*255)));}if(forceRender||this.filterManager.effectElements[1].p._mdf){this.feFlood.setAttribute('flood-opacity',this.filterManager.effectElements[1].p.v/255);}if(forceRender||this.filterManager.effectElements[2].p._mdf||this.filterManager.effectElements[3].p._mdf){var distance=this.filterManager.effectElements[3].p.v;var angle=(this.filterManager.effectElements[2].p.v-90)*degToRads;var x=distance*Math.cos(angle);var y=distance*Math.sin(angle);this.feOffset.setAttribute('dx',x);this.feOffset.setAttribute('dy',y);}/*if(forceRender || this.filterManager.effectElements[5].p._mdf){
    if(this.filterManager.effectElements[5].p.v === 1 && this.originalNodeAdded) {
        this.feMerge.removeChild(this.feMergeNode);
        this.originalNodeAdded = false;
    } else if(this.filterManager.effectElements[5].p.v === 0 && !this.originalNodeAdded) {
        this.feMerge.appendChild(this.feMergeNode);
        this.originalNodeAdded = true;
    }
}*/}};var _svgMatteSymbols=[];function SVGMatte3Effect(filterElem,filterManager,elem){this.initialized=false;this.filterManager=filterManager;this.filterElem=filterElem;this.elem=elem;elem.matteElement=createNS('g');elem.matteElement.appendChild(elem.layerElement);elem.matteElement.appendChild(elem.transformedElement);elem.baseElement=elem.matteElement;}SVGMatte3Effect.prototype.findSymbol=function(mask){var i=0,len=_svgMatteSymbols.length;while(i<len){if(_svgMatteSymbols[i]===mask){return _svgMatteSymbols[i];}i+=1;}return null;};SVGMatte3Effect.prototype.replaceInParent=function(mask,symbolId){var parentNode=mask.layerElement.parentNode;if(!parentNode){return;}var children=parentNode.children;var i=0,len=children.length;while(i<len){if(children[i]===mask.layerElement){break;}i+=1;}var nextChild;if(i<=len-2){nextChild=children[i+1];}var useElem=createNS('use');useElem.setAttribute('href','#'+symbolId);if(nextChild){parentNode.insertBefore(useElem,nextChild);}else{parentNode.appendChild(useElem);}};SVGMatte3Effect.prototype.setElementAsMask=function(elem,mask){if(!this.findSymbol(mask)){var symbolId=createElementID();var masker=createNS('mask');masker.setAttribute('id',mask.layerId);masker.setAttribute('mask-type','alpha');_svgMatteSymbols.push(mask);var defs=elem.globalData.defs;defs.appendChild(masker);var symbol=createNS('symbol');symbol.setAttribute('id',symbolId);this.replaceInParent(mask,symbolId);symbol.appendChild(mask.layerElement);defs.appendChild(symbol);var useElem=createNS('use');useElem.setAttribute('href','#'+symbolId);masker.appendChild(useElem);mask.data.hd=false;mask.show();}elem.setMatte(mask.layerId);};SVGMatte3Effect.prototype.initialize=function(){var ind=this.filterManager.effectElements[0].p.v;var elements=this.elem.comp.elements;var i=0,len=elements.length;while(i<len){if(elements[i]&&elements[i].data.ind===ind){this.setElementAsMask(this.elem,elements[i]);}i+=1;}this.initialized=true;};SVGMatte3Effect.prototype.renderFrame=function(){if(!this.initialized){this.initialize();}};function SVGEffects(elem){var i,len=elem.data.ef?elem.data.ef.length:0;var filId=createElementID();var fil=filtersFactory.createFilter(filId);var count=0;this.filters=[];var filterManager;for(i=0;i<len;i+=1){filterManager=null;if(elem.data.ef[i].ty===20){count+=1;filterManager=new SVGTintFilter(fil,elem.effectsManager.effectElements[i]);}else if(elem.data.ef[i].ty===21){count+=1;filterManager=new SVGFillFilter(fil,elem.effectsManager.effectElements[i]);}else if(elem.data.ef[i].ty===22){filterManager=new SVGStrokeEffect(elem,elem.effectsManager.effectElements[i]);}else if(elem.data.ef[i].ty===23){count+=1;filterManager=new SVGTritoneFilter(fil,elem.effectsManager.effectElements[i]);}else if(elem.data.ef[i].ty===24){count+=1;filterManager=new SVGProLevelsFilter(fil,elem.effectsManager.effectElements[i]);}else if(elem.data.ef[i].ty===25){count+=1;filterManager=new SVGDropShadowEffect(fil,elem.effectsManager.effectElements[i]);}else if(elem.data.ef[i].ty===28){//count += 1;
filterManager=new SVGMatte3Effect(fil,elem.effectsManager.effectElements[i],elem);}else if(elem.data.ef[i].ty===29){count+=1;filterManager=new SVGGaussianBlurEffect(fil,elem.effectsManager.effectElements[i]);}if(filterManager){this.filters.push(filterManager);}}if(count){elem.globalData.defs.appendChild(fil);elem.layerElement.setAttribute('filter','url('+locationHref+'#'+filId+')');}if(this.filters.length){elem.addRenderableComponent(this);}}SVGEffects.prototype.renderFrame=function(_isFirstFrame){var i,len=this.filters.length;for(i=0;i<len;i+=1){this.filters[i].renderFrame(_isFirstFrame);}};function CVContextData(){this.saved=[];this.cArrPos=0;this.cTr=new Matrix();this.cO=1;var i,len=15;this.savedOp=createTypedArray('float32',len);for(i=0;i<len;i+=1){this.saved[i]=createTypedArray('float32',16);}this._length=len;}CVContextData.prototype.duplicate=function(){var newLength=this._length*2;var currentSavedOp=this.savedOp;this.savedOp=createTypedArray('float32',newLength);this.savedOp.set(currentSavedOp);var i=0;for(i=this._length;i<newLength;i+=1){this.saved[i]=createTypedArray('float32',16);}this._length=newLength;};CVContextData.prototype.reset=function(){this.cArrPos=0;this.cTr.reset();this.cO=1;};function CVBaseElement(){}CVBaseElement.prototype={createElements:function createElements(){},initRendererElement:function initRendererElement(){},createContainerElements:function createContainerElements(){this.canvasContext=this.globalData.canvasContext;this.renderableEffectsManager=new CVEffects(this);},createContent:function createContent(){},setBlendMode:function setBlendMode(){var globalData=this.globalData;if(globalData.blendMode!==this.data.bm){globalData.blendMode=this.data.bm;var blendModeValue=getBlendMode(this.data.bm);globalData.canvasContext.globalCompositeOperation=blendModeValue;}},createRenderableComponents:function createRenderableComponents(){this.maskManager=new CVMaskElement(this.data,this);},hideElement:function hideElement(){if(!this.hidden&&(!this.isInRange||this.isTransparent)){this.hidden=true;}},showElement:function showElement(){if(this.isInRange&&!this.isTransparent){this.hidden=false;this._isFirstFrame=true;this.maskManager._isFirstFrame=true;}},renderFrame:function renderFrame(){if(this.hidden||this.data.hd){return;}this.renderTransform();this.renderRenderable();this.setBlendMode();var forceRealStack=this.data.ty===0;this.globalData.renderer.save(forceRealStack);this.globalData.renderer.ctxTransform(this.finalTransform.mat.props);this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v);this.renderInnerContent();this.globalData.renderer.restore(forceRealStack);if(this.maskManager.hasMasks){this.globalData.renderer.restore(true);}if(this._isFirstFrame){this._isFirstFrame=false;}},destroy:function destroy(){this.canvasContext=null;this.data=null;this.globalData=null;this.maskManager.destroy();},mHelper:new Matrix()};CVBaseElement.prototype.hide=CVBaseElement.prototype.hideElement;CVBaseElement.prototype.show=CVBaseElement.prototype.showElement;function CVImageElement(data,globalData,comp){this.assetData=globalData.getAssetData(data.refId);this.img=globalData.imageLoader.getImage(this.assetData);this.initElement(data,globalData,comp);}extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement],CVImageElement);CVImageElement.prototype.initElement=SVGShapeElement.prototype.initElement;CVImageElement.prototype.prepareFrame=IImageElement.prototype.prepareFrame;CVImageElement.prototype.createContent=function(){if(this.img.width&&(this.assetData.w!==this.img.width||this.assetData.h!==this.img.height)){var canvas=createTag('canvas');canvas.width=this.assetData.w;canvas.height=this.assetData.h;var ctx=canvas.getContext('2d');var imgW=this.img.width;var imgH=this.img.height;var imgRel=imgW/imgH;var canvasRel=this.assetData.w/this.assetData.h;var widthCrop,heightCrop;var par=this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio;if(imgRel>canvasRel&&par==='xMidYMid slice'||imgRel<canvasRel&&par!=='xMidYMid slice'){heightCrop=imgH;widthCrop=heightCrop*canvasRel;}else{widthCrop=imgW;heightCrop=widthCrop/canvasRel;}ctx.drawImage(this.img,(imgW-widthCrop)/2,(imgH-heightCrop)/2,widthCrop,heightCrop,0,0,this.assetData.w,this.assetData.h);this.img=canvas;}};CVImageElement.prototype.renderInnerContent=function(parentMatrix){this.canvasContext.drawImage(this.img,0,0);};CVImageElement.prototype.destroy=function(){this.img=null;};function CVCompElement(data,globalData,comp){this.completeLayers=false;this.layers=data.layers;this.pendingElements=[];this.elements=createSizedArray(this.layers.length);this.initElement(data,globalData,comp);this.tm=data.tm?PropertyFactory.getProp(this,data.tm,0,globalData.frameRate,this):{_placeholder:true};}extendPrototype([CanvasRenderer,ICompElement,CVBaseElement],CVCompElement);CVCompElement.prototype.renderInnerContent=function(){var ctx=this.canvasContext;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(this.data.w,0);ctx.lineTo(this.data.w,this.data.h);ctx.lineTo(0,this.data.h);ctx.lineTo(0,0);ctx.clip();var i,len=this.layers.length;for(i=len-1;i>=0;i-=1){if(this.completeLayers||this.elements[i]){this.elements[i].renderFrame();}}};CVCompElement.prototype.destroy=function(){var i,len=this.layers.length;for(i=len-1;i>=0;i-=1){if(this.elements[i]){this.elements[i].destroy();}}this.layers=null;this.elements=null;};function CVMaskElement(data,element){this.data=data;this.element=element;this.masksProperties=this.data.masksProperties||[];this.viewData=createSizedArray(this.masksProperties.length);var i,len=this.masksProperties.length,hasMasks=false;for(i=0;i<len;i++){if(this.masksProperties[i].mode!=='n'){hasMasks=true;}this.viewData[i]=ShapePropertyFactory.getShapeProp(this.element,this.masksProperties[i],3);}this.hasMasks=hasMasks;if(hasMasks){this.element.addRenderableComponent(this);}}CVMaskElement.prototype.renderFrame=function(){if(!this.hasMasks){return;}var transform=this.element.finalTransform.mat;var ctx=this.element.canvasContext;var i,len=this.masksProperties.length;var pt,pts,data;ctx.beginPath();for(i=0;i<len;i++){if(this.masksProperties[i].mode!=='n'){if(this.masksProperties[i].inv){ctx.moveTo(0,0);ctx.lineTo(this.element.globalData.compSize.w,0);ctx.lineTo(this.element.globalData.compSize.w,this.element.globalData.compSize.h);ctx.lineTo(0,this.element.globalData.compSize.h);ctx.lineTo(0,0);}data=this.viewData[i].v;pt=transform.applyToPointArray(data.v[0][0],data.v[0][1],0);ctx.moveTo(pt[0],pt[1]);var j,jLen=data._length;for(j=1;j<jLen;j++){pts=transform.applyToTriplePoints(data.o[j-1],data.i[j],data.v[j]);ctx.bezierCurveTo(pts[0],pts[1],pts[2],pts[3],pts[4],pts[5]);}pts=transform.applyToTriplePoints(data.o[j-1],data.i[0],data.v[0]);ctx.bezierCurveTo(pts[0],pts[1],pts[2],pts[3],pts[4],pts[5]);}}this.element.globalData.renderer.save(true);ctx.clip();};CVMaskElement.prototype.getMaskProperty=MaskElement.prototype.getMaskProperty;CVMaskElement.prototype.destroy=function(){this.element=null;};function CVShapeElement(data,globalData,comp){this.shapes=[];this.shapesData=data.shapes;this.stylesList=[];this.itemsData=[];this.prevViewData=[];this.shapeModifiers=[];this.processedElements=[];this.transformsManager=new ShapeTransformManager();this.initElement(data,globalData,comp);}extendPrototype([BaseElement,TransformElement,CVBaseElement,IShapeElement,HierarchyElement,FrameElement,RenderableElement],CVShapeElement);CVShapeElement.prototype.initElement=RenderableDOMElement.prototype.initElement;CVShapeElement.prototype.transformHelper={opacity:1,_opMdf:false};CVShapeElement.prototype.dashResetter=[];CVShapeElement.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,true,[]);};CVShapeElement.prototype.createStyleElement=function(data,transforms){var styleElem={data:data,type:data.ty,preTransforms:this.transformsManager.addTransformSequence(transforms),transforms:[],elements:[],closed:data.hd===true};var elementData={};if(data.ty=='fl'||data.ty=='st'){elementData.c=PropertyFactory.getProp(this,data.c,1,255,this);if(!elementData.c.k){styleElem.co='rgb('+bm_floor(elementData.c.v[0])+','+bm_floor(elementData.c.v[1])+','+bm_floor(elementData.c.v[2])+')';}}else if(data.ty==='gf'||data.ty==='gs'){elementData.s=PropertyFactory.getProp(this,data.s,1,null,this);elementData.e=PropertyFactory.getProp(this,data.e,1,null,this);elementData.h=PropertyFactory.getProp(this,data.h||{k:0},0,0.01,this);elementData.a=PropertyFactory.getProp(this,data.a||{k:0},0,degToRads,this);elementData.g=new GradientProperty(this,data.g,this);}elementData.o=PropertyFactory.getProp(this,data.o,0,0.01,this);if(data.ty=='st'||data.ty=='gs'){styleElem.lc=this.lcEnum[data.lc]||'round';styleElem.lj=this.ljEnum[data.lj]||'round';if(data.lj==1){styleElem.ml=data.ml;}elementData.w=PropertyFactory.getProp(this,data.w,0,null,this);if(!elementData.w.k){styleElem.wi=elementData.w.v;}if(data.d){var d=new DashProperty(this,data.d,'canvas',this);elementData.d=d;if(!elementData.d.k){styleElem.da=elementData.d.dashArray;styleElem.do=elementData.d.dashoffset[0];}}}else{styleElem.r=data.r===2?'evenodd':'nonzero';}this.stylesList.push(styleElem);elementData.style=styleElem;return elementData;};CVShapeElement.prototype.createGroupElement=function(data){var elementData={it:[],prevViewData:[]};return elementData;};CVShapeElement.prototype.createTransformElement=function(data){var elementData={transform:{opacity:1,_opMdf:false,key:this.transformsManager.getNewKey(),op:PropertyFactory.getProp(this,data.o,0,0.01,this),mProps:TransformPropertyFactory.getTransformProperty(this,data,this)}};return elementData;};CVShapeElement.prototype.createShapeElement=function(data){var elementData=new CVShapeData(this,data,this.stylesList,this.transformsManager);this.shapes.push(elementData);this.addShapeToModifiers(elementData);return elementData;};CVShapeElement.prototype.reloadShapes=function(){this._isFirstFrame=true;var i,len=this.itemsData.length;for(i=0;i<len;i+=1){this.prevViewData[i]=this.itemsData[i];}this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,true,[]);len=this.dynamicProperties.length;for(i=0;i<len;i+=1){this.dynamicProperties[i].getValue();}this.renderModifiers();this.transformsManager.processSequences(this._isFirstFrame);};CVShapeElement.prototype.addTransformToStyleList=function(transform){var i,len=this.stylesList.length;for(i=0;i<len;i+=1){if(!this.stylesList[i].closed){this.stylesList[i].transforms.push(transform);}}};CVShapeElement.prototype.removeTransformFromStyleList=function(){var i,len=this.stylesList.length;for(i=0;i<len;i+=1){if(!this.stylesList[i].closed){this.stylesList[i].transforms.pop();}}};CVShapeElement.prototype.closeStyles=function(styles){var i,len=styles.length,j,jLen;for(i=0;i<len;i+=1){styles[i].closed=true;}};CVShapeElement.prototype.searchShapes=function(arr,itemsData,prevViewData,shouldRender,transforms){var i,len=arr.length-1;var j,jLen;var ownStyles=[],ownModifiers=[],processedPos,modifier,currentTransform;var ownTransforms=[].concat(transforms);for(i=len;i>=0;i-=1){processedPos=this.searchProcessedElement(arr[i]);if(!processedPos){arr[i]._shouldRender=shouldRender;}else{itemsData[i]=prevViewData[processedPos-1];}if(arr[i].ty=='fl'||arr[i].ty=='st'||arr[i].ty=='gf'||arr[i].ty=='gs'){if(!processedPos){itemsData[i]=this.createStyleElement(arr[i],ownTransforms);}else{itemsData[i].style.closed=false;}ownStyles.push(itemsData[i].style);}else if(arr[i].ty=='gr'){if(!processedPos){itemsData[i]=this.createGroupElement(arr[i]);}else{jLen=itemsData[i].it.length;for(j=0;j<jLen;j+=1){itemsData[i].prevViewData[j]=itemsData[i].it[j];}}this.searchShapes(arr[i].it,itemsData[i].it,itemsData[i].prevViewData,shouldRender,ownTransforms);}else if(arr[i].ty=='tr'){if(!processedPos){currentTransform=this.createTransformElement(arr[i]);itemsData[i]=currentTransform;}ownTransforms.push(itemsData[i]);this.addTransformToStyleList(itemsData[i]);}else if(arr[i].ty=='sh'||arr[i].ty=='rc'||arr[i].ty=='el'||arr[i].ty=='sr'){if(!processedPos){itemsData[i]=this.createShapeElement(arr[i]);}}else if(arr[i].ty=='tm'||arr[i].ty=='rd'){if(!processedPos){modifier=ShapeModifiers.getModifier(arr[i].ty);modifier.init(this,arr[i]);itemsData[i]=modifier;this.shapeModifiers.push(modifier);}else{modifier=itemsData[i];modifier.closed=false;}ownModifiers.push(modifier);}else if(arr[i].ty=='rp'){if(!processedPos){modifier=ShapeModifiers.getModifier(arr[i].ty);itemsData[i]=modifier;modifier.init(this,arr,i,itemsData);this.shapeModifiers.push(modifier);shouldRender=false;}else{modifier=itemsData[i];modifier.closed=true;}ownModifiers.push(modifier);}this.addProcessedElement(arr[i],i+1);}this.removeTransformFromStyleList();this.closeStyles(ownStyles);len=ownModifiers.length;for(i=0;i<len;i+=1){ownModifiers[i].closed=true;}};CVShapeElement.prototype.renderInnerContent=function(){this.transformHelper.opacity=1;this.transformHelper._opMdf=false;this.renderModifiers();this.transformsManager.processSequences(this._isFirstFrame);this.renderShape(this.transformHelper,this.shapesData,this.itemsData,true);};CVShapeElement.prototype.renderShapeTransform=function(parentTransform,groupTransform){var props,groupMatrix;if(parentTransform._opMdf||groupTransform.op._mdf||this._isFirstFrame){groupTransform.opacity=parentTransform.opacity;groupTransform.opacity*=groupTransform.op.v;groupTransform._opMdf=true;}};CVShapeElement.prototype.drawLayer=function(){var i,len=this.stylesList.length;var j,jLen,k,kLen,elems,nodes,renderer=this.globalData.renderer,ctx=this.globalData.canvasContext,type,currentStyle;for(i=0;i<len;i+=1){currentStyle=this.stylesList[i];type=currentStyle.type;//Skipping style when
//Stroke width equals 0
//style should not be rendered (extra unused repeaters)
//current opacity equals 0
//global opacity equals 0
if((type==='st'||type==='gs')&&currentStyle.wi===0||!currentStyle.data._shouldRender||currentStyle.coOp===0||this.globalData.currentGlobalAlpha===0){continue;}renderer.save();elems=currentStyle.elements;if(type==='st'||type==='gs'){ctx.strokeStyle=type==='st'?currentStyle.co:currentStyle.grd;ctx.lineWidth=currentStyle.wi;ctx.lineCap=currentStyle.lc;ctx.lineJoin=currentStyle.lj;ctx.miterLimit=currentStyle.ml||0;}else{ctx.fillStyle=type==='fl'?currentStyle.co:currentStyle.grd;}renderer.ctxOpacity(currentStyle.coOp);if(type!=='st'&&type!=='gs'){ctx.beginPath();}renderer.ctxTransform(currentStyle.preTransforms.finalTransform.props);jLen=elems.length;for(j=0;j<jLen;j+=1){if(type==='st'||type==='gs'){ctx.beginPath();if(currentStyle.da){ctx.setLineDash(currentStyle.da);ctx.lineDashOffset=currentStyle.do;}}nodes=elems[j].trNodes;kLen=nodes.length;for(k=0;k<kLen;k+=1){if(nodes[k].t=='m'){ctx.moveTo(nodes[k].p[0],nodes[k].p[1]);}else if(nodes[k].t=='c'){ctx.bezierCurveTo(nodes[k].pts[0],nodes[k].pts[1],nodes[k].pts[2],nodes[k].pts[3],nodes[k].pts[4],nodes[k].pts[5]);}else{ctx.closePath();}}if(type==='st'||type==='gs'){ctx.stroke();if(currentStyle.da){ctx.setLineDash(this.dashResetter);}}}if(type!=='st'&&type!=='gs'){ctx.fill(currentStyle.r);}renderer.restore();}};CVShapeElement.prototype.renderShape=function(parentTransform,items,data,isMain){var i,len=items.length-1;var groupTransform;groupTransform=parentTransform;for(i=len;i>=0;i-=1){if(items[i].ty=='tr'){groupTransform=data[i].transform;this.renderShapeTransform(parentTransform,groupTransform);}else if(items[i].ty=='sh'||items[i].ty=='el'||items[i].ty=='rc'||items[i].ty=='sr'){this.renderPath(items[i],data[i]);}else if(items[i].ty=='fl'){this.renderFill(items[i],data[i],groupTransform);}else if(items[i].ty=='st'){this.renderStroke(items[i],data[i],groupTransform);}else if(items[i].ty=='gf'||items[i].ty=='gs'){this.renderGradientFill(items[i],data[i],groupTransform);}else if(items[i].ty=='gr'){this.renderShape(groupTransform,items[i].it,data[i].it);}else if(items[i].ty=='tm'){//
}}if(isMain){this.drawLayer();}};CVShapeElement.prototype.renderStyledShape=function(styledShape,shape){if(this._isFirstFrame||shape._mdf||styledShape.transforms._mdf){var shapeNodes=styledShape.trNodes;var paths=shape.paths;var i,len,j,jLen=paths._length;shapeNodes.length=0;var groupTransformMat=styledShape.transforms.finalTransform;for(j=0;j<jLen;j+=1){var pathNodes=paths.shapes[j];if(pathNodes&&pathNodes.v){len=pathNodes._length;for(i=1;i<len;i+=1){if(i===1){shapeNodes.push({t:'m',p:groupTransformMat.applyToPointArray(pathNodes.v[0][0],pathNodes.v[0][1],0)});}shapeNodes.push({t:'c',pts:groupTransformMat.applyToTriplePoints(pathNodes.o[i-1],pathNodes.i[i],pathNodes.v[i])});}if(len===1){shapeNodes.push({t:'m',p:groupTransformMat.applyToPointArray(pathNodes.v[0][0],pathNodes.v[0][1],0)});}if(pathNodes.c&&len){shapeNodes.push({t:'c',pts:groupTransformMat.applyToTriplePoints(pathNodes.o[i-1],pathNodes.i[0],pathNodes.v[0])});shapeNodes.push({t:'z'});}}}styledShape.trNodes=shapeNodes;}};CVShapeElement.prototype.renderPath=function(pathData,itemData){if(pathData.hd!==true&&pathData._shouldRender){var i,len=itemData.styledShapes.length;for(i=0;i<len;i+=1){this.renderStyledShape(itemData.styledShapes[i],itemData.sh);}}};CVShapeElement.prototype.renderFill=function(styleData,itemData,groupTransform){var styleElem=itemData.style;if(itemData.c._mdf||this._isFirstFrame){styleElem.co='rgb('+bm_floor(itemData.c.v[0])+','+bm_floor(itemData.c.v[1])+','+bm_floor(itemData.c.v[2])+')';}if(itemData.o._mdf||groupTransform._opMdf||this._isFirstFrame){styleElem.coOp=itemData.o.v*groupTransform.opacity;}};CVShapeElement.prototype.renderGradientFill=function(styleData,itemData,groupTransform){var styleElem=itemData.style;if(!styleElem.grd||itemData.g._mdf||itemData.s._mdf||itemData.e._mdf||styleData.t!==1&&(itemData.h._mdf||itemData.a._mdf)){var ctx=this.globalData.canvasContext;var grd;var pt1=itemData.s.v,pt2=itemData.e.v;if(styleData.t===1){grd=ctx.createLinearGradient(pt1[0],pt1[1],pt2[0],pt2[1]);}else{var rad=Math.sqrt(Math.pow(pt1[0]-pt2[0],2)+Math.pow(pt1[1]-pt2[1],2));var ang=Math.atan2(pt2[1]-pt1[1],pt2[0]-pt1[0]);var percent=itemData.h.v>=1?0.99:itemData.h.v<=-1?-0.99:itemData.h.v;var dist=rad*percent;var x=Math.cos(ang+itemData.a.v)*dist+pt1[0];var y=Math.sin(ang+itemData.a.v)*dist+pt1[1];var grd=ctx.createRadialGradient(x,y,0,pt1[0],pt1[1],rad);}var i,len=styleData.g.p;var cValues=itemData.g.c;var opacity=1;for(i=0;i<len;i+=1){if(itemData.g._hasOpacity&&itemData.g._collapsable){opacity=itemData.g.o[i*2+1];}grd.addColorStop(cValues[i*4]/100,'rgba('+cValues[i*4+1]+','+cValues[i*4+2]+','+cValues[i*4+3]+','+opacity+')');}styleElem.grd=grd;}styleElem.coOp=itemData.o.v*groupTransform.opacity;};CVShapeElement.prototype.renderStroke=function(styleData,itemData,groupTransform){var styleElem=itemData.style;var d=itemData.d;if(d&&(d._mdf||this._isFirstFrame)){styleElem.da=d.dashArray;styleElem.do=d.dashoffset[0];}if(itemData.c._mdf||this._isFirstFrame){styleElem.co='rgb('+bm_floor(itemData.c.v[0])+','+bm_floor(itemData.c.v[1])+','+bm_floor(itemData.c.v[2])+')';}if(itemData.o._mdf||groupTransform._opMdf||this._isFirstFrame){styleElem.coOp=itemData.o.v*groupTransform.opacity;}if(itemData.w._mdf||this._isFirstFrame){styleElem.wi=itemData.w.v;}};CVShapeElement.prototype.destroy=function(){this.shapesData=null;this.globalData=null;this.canvasContext=null;this.stylesList.length=0;this.itemsData.length=0;};function CVSolidElement(data,globalData,comp){this.initElement(data,globalData,comp);}extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement],CVSolidElement);CVSolidElement.prototype.initElement=SVGShapeElement.prototype.initElement;CVSolidElement.prototype.prepareFrame=IImageElement.prototype.prepareFrame;CVSolidElement.prototype.renderInnerContent=function(){var ctx=this.canvasContext;ctx.fillStyle=this.data.sc;ctx.fillRect(0,0,this.data.sw,this.data.sh);//
};function CVTextElement(data,globalData,comp){this.textSpans=[];this.yOffset=0;this.fillColorAnim=false;this.strokeColorAnim=false;this.strokeWidthAnim=false;this.stroke=false;this.fill=false;this.justifyOffset=0;this.currentRender=null;this.renderType='canvas';this.values={fill:'rgba(0,0,0,0)',stroke:'rgba(0,0,0,0)',sWidth:0,fValue:''};this.initElement(data,globalData,comp);}extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement,ITextElement],CVTextElement);CVTextElement.prototype.tHelper=createTag('canvas').getContext('2d');CVTextElement.prototype.buildNewText=function(){var documentData=this.textProperty.currentData;this.renderedLetters=createSizedArray(documentData.l?documentData.l.length:0);var hasFill=false;if(documentData.fc){hasFill=true;this.values.fill=this.buildColor(documentData.fc);}else{this.values.fill='rgba(0,0,0,0)';}this.fill=hasFill;var hasStroke=false;if(documentData.sc){hasStroke=true;this.values.stroke=this.buildColor(documentData.sc);this.values.sWidth=documentData.sw;}var fontData=this.globalData.fontManager.getFontByName(documentData.f);var i,len;var letters=documentData.l;var matrixHelper=this.mHelper;this.stroke=hasStroke;this.values.fValue=documentData.finalSize+'px '+this.globalData.fontManager.getFontByName(documentData.f).fFamily;len=documentData.finalText.length;//this.tHelper.font = this.values.fValue;
var charData,shapeData,k,kLen,shapes,j,jLen,pathNodes,commands,pathArr,singleShape=this.data.singleShape;var trackingOffset=documentData.tr/1000*documentData.finalSize;var xPos=0,yPos=0,firstLine=true;var cnt=0;for(i=0;i<len;i+=1){charData=this.globalData.fontManager.getCharData(documentData.finalText[i],fontData.fStyle,this.globalData.fontManager.getFontByName(documentData.f).fFamily);shapeData=charData&&charData.data||{};matrixHelper.reset();if(singleShape&&letters[i].n){xPos=-trackingOffset;yPos+=documentData.yOffset;yPos+=firstLine?1:0;firstLine=false;}shapes=shapeData.shapes?shapeData.shapes[0].it:[];jLen=shapes.length;matrixHelper.scale(documentData.finalSize/100,documentData.finalSize/100);if(singleShape){this.applyTextPropertiesToMatrix(documentData,matrixHelper,letters[i].line,xPos,yPos);}commands=createSizedArray(jLen);for(j=0;j<jLen;j+=1){kLen=shapes[j].ks.k.i.length;pathNodes=shapes[j].ks.k;pathArr=[];for(k=1;k<kLen;k+=1){if(k==1){pathArr.push(matrixHelper.applyToX(pathNodes.v[0][0],pathNodes.v[0][1],0),matrixHelper.applyToY(pathNodes.v[0][0],pathNodes.v[0][1],0));}pathArr.push(matrixHelper.applyToX(pathNodes.o[k-1][0],pathNodes.o[k-1][1],0),matrixHelper.applyToY(pathNodes.o[k-1][0],pathNodes.o[k-1][1],0),matrixHelper.applyToX(pathNodes.i[k][0],pathNodes.i[k][1],0),matrixHelper.applyToY(pathNodes.i[k][0],pathNodes.i[k][1],0),matrixHelper.applyToX(pathNodes.v[k][0],pathNodes.v[k][1],0),matrixHelper.applyToY(pathNodes.v[k][0],pathNodes.v[k][1],0));}pathArr.push(matrixHelper.applyToX(pathNodes.o[k-1][0],pathNodes.o[k-1][1],0),matrixHelper.applyToY(pathNodes.o[k-1][0],pathNodes.o[k-1][1],0),matrixHelper.applyToX(pathNodes.i[0][0],pathNodes.i[0][1],0),matrixHelper.applyToY(pathNodes.i[0][0],pathNodes.i[0][1],0),matrixHelper.applyToX(pathNodes.v[0][0],pathNodes.v[0][1],0),matrixHelper.applyToY(pathNodes.v[0][0],pathNodes.v[0][1],0));commands[j]=pathArr;}if(singleShape){xPos+=letters[i].l;xPos+=trackingOffset;}if(this.textSpans[cnt]){this.textSpans[cnt].elem=commands;}else{this.textSpans[cnt]={elem:commands};}cnt+=1;}};CVTextElement.prototype.renderInnerContent=function(){var ctx=this.canvasContext;var finalMat=this.finalTransform.mat.props;ctx.font=this.values.fValue;ctx.lineCap='butt';ctx.lineJoin='miter';ctx.miterLimit=4;if(!this.data.singleShape){this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag);}var i,len,j,jLen,k,kLen;var renderedLetters=this.textAnimator.renderedLetters;var letters=this.textProperty.currentData.l;len=letters.length;var renderedLetter;var lastFill=null,lastStroke=null,lastStrokeW=null,commands,pathArr;for(i=0;i<len;i+=1){if(letters[i].n){continue;}renderedLetter=renderedLetters[i];if(renderedLetter){this.globalData.renderer.save();this.globalData.renderer.ctxTransform(renderedLetter.p);this.globalData.renderer.ctxOpacity(renderedLetter.o);}if(this.fill){if(renderedLetter&&renderedLetter.fc){if(lastFill!==renderedLetter.fc){lastFill=renderedLetter.fc;ctx.fillStyle=renderedLetter.fc;}}else if(lastFill!==this.values.fill){lastFill=this.values.fill;ctx.fillStyle=this.values.fill;}commands=this.textSpans[i].elem;jLen=commands.length;this.globalData.canvasContext.beginPath();for(j=0;j<jLen;j+=1){pathArr=commands[j];kLen=pathArr.length;this.globalData.canvasContext.moveTo(pathArr[0],pathArr[1]);for(k=2;k<kLen;k+=6){this.globalData.canvasContext.bezierCurveTo(pathArr[k],pathArr[k+1],pathArr[k+2],pathArr[k+3],pathArr[k+4],pathArr[k+5]);}}this.globalData.canvasContext.closePath();this.globalData.canvasContext.fill();///ctx.fillText(this.textSpans[i].val,0,0);
}if(this.stroke){if(renderedLetter&&renderedLetter.sw){if(lastStrokeW!==renderedLetter.sw){lastStrokeW=renderedLetter.sw;ctx.lineWidth=renderedLetter.sw;}}else if(lastStrokeW!==this.values.sWidth){lastStrokeW=this.values.sWidth;ctx.lineWidth=this.values.sWidth;}if(renderedLetter&&renderedLetter.sc){if(lastStroke!==renderedLetter.sc){lastStroke=renderedLetter.sc;ctx.strokeStyle=renderedLetter.sc;}}else if(lastStroke!==this.values.stroke){lastStroke=this.values.stroke;ctx.strokeStyle=this.values.stroke;}commands=this.textSpans[i].elem;jLen=commands.length;this.globalData.canvasContext.beginPath();for(j=0;j<jLen;j+=1){pathArr=commands[j];kLen=pathArr.length;this.globalData.canvasContext.moveTo(pathArr[0],pathArr[1]);for(k=2;k<kLen;k+=6){this.globalData.canvasContext.bezierCurveTo(pathArr[k],pathArr[k+1],pathArr[k+2],pathArr[k+3],pathArr[k+4],pathArr[k+5]);}}this.globalData.canvasContext.closePath();this.globalData.canvasContext.stroke();///ctx.strokeText(letters[i].val,0,0);
}if(renderedLetter){this.globalData.renderer.restore();}}};function CVEffects(){}CVEffects.prototype.renderFrame=function(){};function HBaseElement(data,globalData,comp){}HBaseElement.prototype={checkBlendMode:function checkBlendMode(){},initRendererElement:function initRendererElement(){this.baseElement=createTag(this.data.tg||'div');if(this.data.hasMask){this.svgElement=createNS('svg');this.layerElement=createNS('g');this.maskedElement=this.layerElement;this.svgElement.appendChild(this.layerElement);this.baseElement.appendChild(this.svgElement);}else{this.layerElement=this.baseElement;}styleDiv(this.baseElement);},createContainerElements:function createContainerElements(){this.renderableEffectsManager=new CVEffects(this);this.transformedElement=this.baseElement;this.maskedElement=this.layerElement;if(this.data.ln){this.layerElement.setAttribute('id',this.data.ln);}if(this.data.cl){this.layerElement.setAttribute('class',this.data.cl);}if(this.data.bm!==0){this.setBlendMode();}},renderElement:function renderElement(){if(this.finalTransform._matMdf){this.transformedElement.style.transform=this.transformedElement.style.webkitTransform=this.finalTransform.mat.toCSS();}if(this.finalTransform._opMdf){this.transformedElement.style.opacity=this.finalTransform.mProp.o.v;}},renderFrame:function renderFrame(){//If it is exported as hidden (data.hd === true) no need to render
//If it is not visible no need to render
if(this.data.hd||this.hidden){return;}this.renderTransform();this.renderRenderable();this.renderElement();this.renderInnerContent();if(this._isFirstFrame){this._isFirstFrame=false;}},destroy:function destroy(){this.layerElement=null;this.transformedElement=null;if(this.matteElement){this.matteElement=null;}if(this.maskManager){this.maskManager.destroy();this.maskManager=null;}},createRenderableComponents:function createRenderableComponents(){this.maskManager=new MaskElement(this.data,this,this.globalData);},addEffects:function addEffects(){},setMatte:function setMatte(){}};HBaseElement.prototype.getBaseElement=SVGBaseElement.prototype.getBaseElement;HBaseElement.prototype.destroyBaseElement=HBaseElement.prototype.destroy;HBaseElement.prototype.buildElementParenting=HybridRenderer.prototype.buildElementParenting;function HSolidElement(data,globalData,comp){this.initElement(data,globalData,comp);}extendPrototype([BaseElement,TransformElement,HBaseElement,HierarchyElement,FrameElement,RenderableDOMElement],HSolidElement);HSolidElement.prototype.createContent=function(){var rect;if(this.data.hasMask){rect=createNS('rect');rect.setAttribute('width',this.data.sw);rect.setAttribute('height',this.data.sh);rect.setAttribute('fill',this.data.sc);this.svgElement.setAttribute('width',this.data.sw);this.svgElement.setAttribute('height',this.data.sh);}else{rect=createTag('div');rect.style.width=this.data.sw+'px';rect.style.height=this.data.sh+'px';rect.style.backgroundColor=this.data.sc;}this.layerElement.appendChild(rect);};function HCompElement(data,globalData,comp){this.layers=data.layers;this.supports3d=!data.hasMask;this.completeLayers=false;this.pendingElements=[];this.elements=this.layers?createSizedArray(this.layers.length):[];this.initElement(data,globalData,comp);this.tm=data.tm?PropertyFactory.getProp(this,data.tm,0,globalData.frameRate,this):{_placeholder:true};}extendPrototype([HybridRenderer,ICompElement,HBaseElement],HCompElement);HCompElement.prototype._createBaseContainerElements=HCompElement.prototype.createContainerElements;HCompElement.prototype.createContainerElements=function(){this._createBaseContainerElements();//divElement.style.clip = 'rect(0px, '+this.data.w+'px, '+this.data.h+'px, 0px)';
if(this.data.hasMask){this.svgElement.setAttribute('width',this.data.w);this.svgElement.setAttribute('height',this.data.h);this.transformedElement=this.baseElement;}else{this.transformedElement=this.layerElement;}};HCompElement.prototype.addTo3dContainer=function(elem,pos){var j=0;var nextElement;while(j<pos){if(this.elements[j]&&this.elements[j].getBaseElement){nextElement=this.elements[j].getBaseElement();}j+=1;}if(nextElement){this.layerElement.insertBefore(elem,nextElement);}else{this.layerElement.appendChild(elem);}};function HShapeElement(data,globalData,comp){//List of drawable elements
this.shapes=[];// Full shape data
this.shapesData=data.shapes;//List of styles that will be applied to shapes
this.stylesList=[];//List of modifiers that will be applied to shapes
this.shapeModifiers=[];//List of items in shape tree
this.itemsData=[];//List of items in previous shape tree
this.processedElements=[];// List of animated components
this.animatedContents=[];this.shapesContainer=createNS('g');this.initElement(data,globalData,comp);//Moving any property that doesn't get too much access after initialization because of v8 way of handling more than 10 properties.
// List of elements that have been created
this.prevViewData=[];this.currentBBox={x:999999,y:-999999,h:0,w:0};}extendPrototype([BaseElement,TransformElement,HSolidElement,SVGShapeElement,HBaseElement,HierarchyElement,FrameElement,RenderableElement],HShapeElement);HShapeElement.prototype._renderShapeFrame=HShapeElement.prototype.renderInnerContent;HShapeElement.prototype.createContent=function(){var cont;this.baseElement.style.fontSize=0;if(this.data.hasMask){this.layerElement.appendChild(this.shapesContainer);cont=this.svgElement;}else{cont=createNS('svg');var size=this.comp.data?this.comp.data:this.globalData.compSize;cont.setAttribute('width',size.w);cont.setAttribute('height',size.h);cont.appendChild(this.shapesContainer);this.layerElement.appendChild(cont);}this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.shapesContainer,0,[],true);this.filterUniqueShapes();this.shapeCont=cont;};HShapeElement.prototype.getTransformedPoint=function(transformers,point){var i,len=transformers.length;for(i=0;i<len;i+=1){point=transformers[i].mProps.v.applyToPointArray(point[0],point[1],0);}return point;};HShapeElement.prototype.calculateShapeBoundingBox=function(item,boundingBox){var shape=item.sh.v;var transformers=item.transformers;var i,len=shape._length,vPoint,oPoint,nextIPoint,nextVPoint,bounds;if(len<=1){return;}for(i=0;i<len-1;i+=1){vPoint=this.getTransformedPoint(transformers,shape.v[i]);oPoint=this.getTransformedPoint(transformers,shape.o[i]);nextIPoint=this.getTransformedPoint(transformers,shape.i[i+1]);nextVPoint=this.getTransformedPoint(transformers,shape.v[i+1]);this.checkBounds(vPoint,oPoint,nextIPoint,nextVPoint,boundingBox);}if(shape.c){vPoint=this.getTransformedPoint(transformers,shape.v[i]);oPoint=this.getTransformedPoint(transformers,shape.o[i]);nextIPoint=this.getTransformedPoint(transformers,shape.i[0]);nextVPoint=this.getTransformedPoint(transformers,shape.v[0]);this.checkBounds(vPoint,oPoint,nextIPoint,nextVPoint,boundingBox);}};HShapeElement.prototype.checkBounds=function(vPoint,oPoint,nextIPoint,nextVPoint,boundingBox){this.getBoundsOfCurve(vPoint,oPoint,nextIPoint,nextVPoint);var bounds=this.shapeBoundingBox;boundingBox.x=bm_min(bounds.left,boundingBox.x);boundingBox.xMax=bm_max(bounds.right,boundingBox.xMax);boundingBox.y=bm_min(bounds.top,boundingBox.y);boundingBox.yMax=bm_max(bounds.bottom,boundingBox.yMax);};HShapeElement.prototype.shapeBoundingBox={left:0,right:0,top:0,bottom:0};HShapeElement.prototype.tempBoundingBox={x:0,xMax:0,y:0,yMax:0,width:0,height:0};HShapeElement.prototype.getBoundsOfCurve=function(p0,p1,p2,p3){var bounds=[[p0[0],p3[0]],[p0[1],p3[1]]];for(var a,b,c,t,b2ac,t1,t2,i=0;i<2;++i){b=6*p0[i]-12*p1[i]+6*p2[i];a=-3*p0[i]+9*p1[i]-9*p2[i]+3*p3[i];c=3*p1[i]-3*p0[i];b=b|0;a=a|0;c=c|0;if(a===0){if(b===0){continue;}t=-c/b;if(0<t&&t<1){bounds[i].push(this.calculateF(t,p0,p1,p2,p3,i));}continue;}b2ac=b*b-4*c*a;if(b2ac<0){continue;}t1=(-b+bm_sqrt(b2ac))/(2*a);if(0<t1&&t1<1)bounds[i].push(this.calculateF(t1,p0,p1,p2,p3,i));t2=(-b-bm_sqrt(b2ac))/(2*a);if(0<t2&&t2<1)bounds[i].push(this.calculateF(t2,p0,p1,p2,p3,i));}this.shapeBoundingBox.left=bm_min.apply(null,bounds[0]);this.shapeBoundingBox.top=bm_min.apply(null,bounds[1]);this.shapeBoundingBox.right=bm_max.apply(null,bounds[0]);this.shapeBoundingBox.bottom=bm_max.apply(null,bounds[1]);};HShapeElement.prototype.calculateF=function(t,p0,p1,p2,p3,i){return bm_pow(1-t,3)*p0[i]+3*bm_pow(1-t,2)*t*p1[i]+3*(1-t)*bm_pow(t,2)*p2[i]+bm_pow(t,3)*p3[i];};HShapeElement.prototype.calculateBoundingBox=function(itemsData,boundingBox){var i,len=itemsData.length,path;for(i=0;i<len;i+=1){if(itemsData[i]&&itemsData[i].sh){this.calculateShapeBoundingBox(itemsData[i],boundingBox);}else if(itemsData[i]&&itemsData[i].it){this.calculateBoundingBox(itemsData[i].it,boundingBox);}}};HShapeElement.prototype.currentBoxContains=function(box){return this.currentBBox.x<=box.x&&this.currentBBox.y<=box.y&&this.currentBBox.width+this.currentBBox.x>=box.x+box.width&&this.currentBBox.height+this.currentBBox.y>=box.y+box.height;};HShapeElement.prototype.renderInnerContent=function(){this._renderShapeFrame();if(!this.hidden&&(this._isFirstFrame||this._mdf)){var tempBoundingBox=this.tempBoundingBox;var max=999999;tempBoundingBox.x=max;tempBoundingBox.xMax=-max;tempBoundingBox.y=max;tempBoundingBox.yMax=-max;this.calculateBoundingBox(this.itemsData,tempBoundingBox);tempBoundingBox.width=tempBoundingBox.xMax<tempBoundingBox.x?0:tempBoundingBox.xMax-tempBoundingBox.x;tempBoundingBox.height=tempBoundingBox.yMax<tempBoundingBox.y?0:tempBoundingBox.yMax-tempBoundingBox.y;//var tempBoundingBox = this.shapeCont.getBBox();
if(this.currentBoxContains(tempBoundingBox)){return;}var changed=false;if(this.currentBBox.w!==tempBoundingBox.width){this.currentBBox.w=tempBoundingBox.width;this.shapeCont.setAttribute('width',tempBoundingBox.width);changed=true;}if(this.currentBBox.h!==tempBoundingBox.height){this.currentBBox.h=tempBoundingBox.height;this.shapeCont.setAttribute('height',tempBoundingBox.height);changed=true;}if(changed||this.currentBBox.x!==tempBoundingBox.x||this.currentBBox.y!==tempBoundingBox.y){this.currentBBox.w=tempBoundingBox.width;this.currentBBox.h=tempBoundingBox.height;this.currentBBox.x=tempBoundingBox.x;this.currentBBox.y=tempBoundingBox.y;this.shapeCont.setAttribute('viewBox',this.currentBBox.x+' '+this.currentBBox.y+' '+this.currentBBox.w+' '+this.currentBBox.h);this.shapeCont.style.transform=this.shapeCont.style.webkitTransform='translate('+this.currentBBox.x+'px,'+this.currentBBox.y+'px)';}}};function HTextElement(data,globalData,comp){this.textSpans=[];this.textPaths=[];this.currentBBox={x:999999,y:-999999,h:0,w:0};this.renderType='svg';this.isMasked=false;this.initElement(data,globalData,comp);}extendPrototype([BaseElement,TransformElement,HBaseElement,HierarchyElement,FrameElement,RenderableDOMElement,ITextElement],HTextElement);HTextElement.prototype.createContent=function(){this.isMasked=this.checkMasks();if(this.isMasked){this.renderType='svg';this.compW=this.comp.data.w;this.compH=this.comp.data.h;this.svgElement.setAttribute('width',this.compW);this.svgElement.setAttribute('height',this.compH);var g=createNS('g');this.maskedElement.appendChild(g);this.innerElem=g;}else{this.renderType='html';this.innerElem=this.layerElement;}this.checkParenting();};HTextElement.prototype.buildNewText=function(){var documentData=this.textProperty.currentData;this.renderedLetters=createSizedArray(documentData.l?documentData.l.length:0);var innerElemStyle=this.innerElem.style;innerElemStyle.color=innerElemStyle.fill=documentData.fc?this.buildColor(documentData.fc):'rgba(0,0,0,0)';if(documentData.sc){innerElemStyle.stroke=this.buildColor(documentData.sc);innerElemStyle.strokeWidth=documentData.sw+'px';}var fontData=this.globalData.fontManager.getFontByName(documentData.f);if(!this.globalData.fontManager.chars){innerElemStyle.fontSize=documentData.finalSize+'px';innerElemStyle.lineHeight=documentData.finalSize+'px';if(fontData.fClass){this.innerElem.className=fontData.fClass;}else{innerElemStyle.fontFamily=fontData.fFamily;var fWeight=documentData.fWeight,fStyle=documentData.fStyle;innerElemStyle.fontStyle=fStyle;innerElemStyle.fontWeight=fWeight;}}var i,len;var letters=documentData.l;len=letters.length;var tSpan,tParent,tCont;var matrixHelper=this.mHelper;var shapes,shapeStr='';var cnt=0;for(i=0;i<len;i+=1){if(this.globalData.fontManager.chars){if(!this.textPaths[cnt]){tSpan=createNS('path');tSpan.setAttribute('stroke-linecap','butt');tSpan.setAttribute('stroke-linejoin','round');tSpan.setAttribute('stroke-miterlimit','4');}else{tSpan=this.textPaths[cnt];}if(!this.isMasked){if(this.textSpans[cnt]){tParent=this.textSpans[cnt];tCont=tParent.children[0];}else{tParent=createTag('div');tParent.style.lineHeight=0;tCont=createNS('svg');tCont.appendChild(tSpan);styleDiv(tParent);}}}else{if(!this.isMasked){if(this.textSpans[cnt]){tParent=this.textSpans[cnt];tSpan=this.textPaths[cnt];}else{tParent=createTag('span');styleDiv(tParent);tSpan=createTag('span');styleDiv(tSpan);tParent.appendChild(tSpan);}}else{tSpan=this.textPaths[cnt]?this.textPaths[cnt]:createNS('text');}}//tSpan.setAttribute('visibility', 'hidden');
if(this.globalData.fontManager.chars){var charData=this.globalData.fontManager.getCharData(documentData.finalText[i],fontData.fStyle,this.globalData.fontManager.getFontByName(documentData.f).fFamily);var shapeData;if(charData){shapeData=charData.data;}else{shapeData=null;}matrixHelper.reset();if(shapeData&&shapeData.shapes){shapes=shapeData.shapes[0].it;matrixHelper.scale(documentData.finalSize/100,documentData.finalSize/100);shapeStr=this.createPathShape(matrixHelper,shapes);tSpan.setAttribute('d',shapeStr);}if(!this.isMasked){this.innerElem.appendChild(tParent);if(shapeData&&shapeData.shapes){//document.body.appendChild is needed to get exact measure of shape
document.body.appendChild(tCont);var boundingBox=tCont.getBBox();tCont.setAttribute('width',boundingBox.width+2);tCont.setAttribute('height',boundingBox.height+2);tCont.setAttribute('viewBox',boundingBox.x-1+' '+(boundingBox.y-1)+' '+(boundingBox.width+2)+' '+(boundingBox.height+2));tCont.style.transform=tCont.style.webkitTransform='translate('+(boundingBox.x-1)+'px,'+(boundingBox.y-1)+'px)';letters[i].yOffset=boundingBox.y-1;}else{tCont.setAttribute('width',1);tCont.setAttribute('height',1);}tParent.appendChild(tCont);}else{this.innerElem.appendChild(tSpan);}}else{tSpan.textContent=letters[i].val;tSpan.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve");if(!this.isMasked){this.innerElem.appendChild(tParent);//
tSpan.style.transform=tSpan.style.webkitTransform='translate3d(0,'+-documentData.finalSize/1.2+'px,0)';}else{this.innerElem.appendChild(tSpan);}}//
if(!this.isMasked){this.textSpans[cnt]=tParent;}else{this.textSpans[cnt]=tSpan;}this.textSpans[cnt].style.display='block';this.textPaths[cnt]=tSpan;cnt+=1;}while(cnt<this.textSpans.length){this.textSpans[cnt].style.display='none';cnt+=1;}};HTextElement.prototype.renderInnerContent=function(){if(this.data.singleShape){if(!this._isFirstFrame&&!this.lettersChangedFlag){return;}else{// Todo Benchmark if using this is better than getBBox
if(this.isMasked&&this.finalTransform._matMdf){this.svgElement.setAttribute('viewBox',-this.finalTransform.mProp.p.v[0]+' '+-this.finalTransform.mProp.p.v[1]+' '+this.compW+' '+this.compH);this.svgElement.style.transform=this.svgElement.style.webkitTransform='translate('+-this.finalTransform.mProp.p.v[0]+'px,'+-this.finalTransform.mProp.p.v[1]+'px)';}}}this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag);if(!this.lettersChangedFlag&&!this.textAnimator.lettersChangedFlag){return;}var i,len,count=0;var renderedLetters=this.textAnimator.renderedLetters;var letters=this.textProperty.currentData.l;len=letters.length;var renderedLetter,textSpan,textPath;for(i=0;i<len;i+=1){if(letters[i].n){count+=1;continue;}textSpan=this.textSpans[i];textPath=this.textPaths[i];renderedLetter=renderedLetters[count];count+=1;if(renderedLetter._mdf.m){if(!this.isMasked){textSpan.style.transform=textSpan.style.webkitTransform=renderedLetter.m;}else{textSpan.setAttribute('transform',renderedLetter.m);}}////textSpan.setAttribute('opacity',renderedLetter.o);
textSpan.style.opacity=renderedLetter.o;if(renderedLetter.sw&&renderedLetter._mdf.sw){textPath.setAttribute('stroke-width',renderedLetter.sw);}if(renderedLetter.sc&&renderedLetter._mdf.sc){textPath.setAttribute('stroke',renderedLetter.sc);}if(renderedLetter.fc&&renderedLetter._mdf.fc){textPath.setAttribute('fill',renderedLetter.fc);textPath.style.color=renderedLetter.fc;}}if(this.innerElem.getBBox&&!this.hidden&&(this._isFirstFrame||this._mdf)){var boundingBox=this.innerElem.getBBox();if(this.currentBBox.w!==boundingBox.width){this.currentBBox.w=boundingBox.width;this.svgElement.setAttribute('width',boundingBox.width);}if(this.currentBBox.h!==boundingBox.height){this.currentBBox.h=boundingBox.height;this.svgElement.setAttribute('height',boundingBox.height);}var margin=1;if(this.currentBBox.w!==boundingBox.width+margin*2||this.currentBBox.h!==boundingBox.height+margin*2||this.currentBBox.x!==boundingBox.x-margin||this.currentBBox.y!==boundingBox.y-margin){this.currentBBox.w=boundingBox.width+margin*2;this.currentBBox.h=boundingBox.height+margin*2;this.currentBBox.x=boundingBox.x-margin;this.currentBBox.y=boundingBox.y-margin;this.svgElement.setAttribute('viewBox',this.currentBBox.x+' '+this.currentBBox.y+' '+this.currentBBox.w+' '+this.currentBBox.h);this.svgElement.style.transform=this.svgElement.style.webkitTransform='translate('+this.currentBBox.x+'px,'+this.currentBBox.y+'px)';}}};function HImageElement(data,globalData,comp){this.assetData=globalData.getAssetData(data.refId);this.initElement(data,globalData,comp);}extendPrototype([BaseElement,TransformElement,HBaseElement,HSolidElement,HierarchyElement,FrameElement,RenderableElement],HImageElement);HImageElement.prototype.createContent=function(){var assetPath=this.globalData.getAssetsPath(this.assetData);var img=new Image();if(this.data.hasMask){this.imageElem=createNS('image');this.imageElem.setAttribute('width',this.assetData.w+"px");this.imageElem.setAttribute('height',this.assetData.h+"px");this.imageElem.setAttributeNS('http://www.w3.org/1999/xlink','href',assetPath);this.layerElement.appendChild(this.imageElem);this.baseElement.setAttribute('width',this.assetData.w);this.baseElement.setAttribute('height',this.assetData.h);}else{this.layerElement.appendChild(img);}img.src=assetPath;if(this.data.ln){this.baseElement.setAttribute('id',this.data.ln);}};function HCameraElement(data,globalData,comp){this.initFrame();this.initBaseData(data,globalData,comp);this.initHierarchy();var getProp=PropertyFactory.getProp;this.pe=getProp(this,data.pe,0,0,this);if(data.ks.p.s){this.px=getProp(this,data.ks.p.x,1,0,this);this.py=getProp(this,data.ks.p.y,1,0,this);this.pz=getProp(this,data.ks.p.z,1,0,this);}else{this.p=getProp(this,data.ks.p,1,0,this);}if(data.ks.a){this.a=getProp(this,data.ks.a,1,0,this);}if(data.ks.or.k.length&&data.ks.or.k[0].to){var i,len=data.ks.or.k.length;for(i=0;i<len;i+=1){data.ks.or.k[i].to=null;data.ks.or.k[i].ti=null;}}this.or=getProp(this,data.ks.or,1,degToRads,this);this.or.sh=true;this.rx=getProp(this,data.ks.rx,0,degToRads,this);this.ry=getProp(this,data.ks.ry,0,degToRads,this);this.rz=getProp(this,data.ks.rz,0,degToRads,this);this.mat=new Matrix();this._prevMat=new Matrix();this._isFirstFrame=true;// TODO: find a better way to make the HCamera element to be compatible with the LayerInterface and TransformInterface.
this.finalTransform={mProp:this};}extendPrototype([BaseElement,FrameElement,HierarchyElement],HCameraElement);HCameraElement.prototype.setup=function(){var i,len=this.comp.threeDElements.length,comp;for(i=0;i<len;i+=1){//[perspectiveElem,container]
comp=this.comp.threeDElements[i];if(comp.type==='3d'){comp.perspectiveElem.style.perspective=comp.perspectiveElem.style.webkitPerspective=this.pe.v+'px';comp.container.style.transformOrigin=comp.container.style.mozTransformOrigin=comp.container.style.webkitTransformOrigin="0px 0px 0px";comp.perspectiveElem.style.transform=comp.perspectiveElem.style.webkitTransform='matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';}}};HCameraElement.prototype.createElements=function(){};HCameraElement.prototype.hide=function(){};HCameraElement.prototype.renderFrame=function(){var _mdf=this._isFirstFrame;var i,len;if(this.hierarchy){len=this.hierarchy.length;for(i=0;i<len;i+=1){_mdf=this.hierarchy[i].finalTransform.mProp._mdf||_mdf;}}if(_mdf||this.pe._mdf||this.p&&this.p._mdf||this.px&&(this.px._mdf||this.py._mdf||this.pz._mdf)||this.rx._mdf||this.ry._mdf||this.rz._mdf||this.or._mdf||this.a&&this.a._mdf){this.mat.reset();if(this.hierarchy){var mat;len=this.hierarchy.length-1;for(i=len;i>=0;i-=1){var mTransf=this.hierarchy[i].finalTransform.mProp;this.mat.translate(-mTransf.p.v[0],-mTransf.p.v[1],mTransf.p.v[2]);this.mat.rotateX(-mTransf.or.v[0]).rotateY(-mTransf.or.v[1]).rotateZ(mTransf.or.v[2]);this.mat.rotateX(-mTransf.rx.v).rotateY(-mTransf.ry.v).rotateZ(mTransf.rz.v);this.mat.scale(1/mTransf.s.v[0],1/mTransf.s.v[1],1/mTransf.s.v[2]);this.mat.translate(mTransf.a.v[0],mTransf.a.v[1],mTransf.a.v[2]);}}if(this.p){this.mat.translate(-this.p.v[0],-this.p.v[1],this.p.v[2]);}else{this.mat.translate(-this.px.v,-this.py.v,this.pz.v);}if(this.a){var diffVector;if(this.p){diffVector=[this.p.v[0]-this.a.v[0],this.p.v[1]-this.a.v[1],this.p.v[2]-this.a.v[2]];}else{diffVector=[this.px.v-this.a.v[0],this.py.v-this.a.v[1],this.pz.v-this.a.v[2]];}var mag=Math.sqrt(Math.pow(diffVector[0],2)+Math.pow(diffVector[1],2)+Math.pow(diffVector[2],2));//var lookDir = getNormalizedPoint(getDiffVector(this.a.v,this.p.v));
var lookDir=[diffVector[0]/mag,diffVector[1]/mag,diffVector[2]/mag];var lookLengthOnXZ=Math.sqrt(lookDir[2]*lookDir[2]+lookDir[0]*lookDir[0]);var m_rotationX=Math.atan2(lookDir[1],lookLengthOnXZ);var m_rotationY=Math.atan2(lookDir[0],-lookDir[2]);this.mat.rotateY(m_rotationY).rotateX(-m_rotationX);}this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v);this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]);this.mat.translate(this.globalData.compSize.w/2,this.globalData.compSize.h/2,0);this.mat.translate(0,0,this.pe.v);var hasMatrixChanged=!this._prevMat.equals(this.mat);if((hasMatrixChanged||this.pe._mdf)&&this.comp.threeDElements){len=this.comp.threeDElements.length;var comp;for(i=0;i<len;i+=1){comp=this.comp.threeDElements[i];if(comp.type==='3d'){if(hasMatrixChanged){comp.container.style.transform=comp.container.style.webkitTransform=this.mat.toCSS();}if(this.pe._mdf){comp.perspectiveElem.style.perspective=comp.perspectiveElem.style.webkitPerspective=this.pe.v+'px';}}}this.mat.clone(this._prevMat);}}this._isFirstFrame=false;};HCameraElement.prototype.prepareFrame=function(num){this.prepareProperties(num,true);};HCameraElement.prototype.destroy=function(){};HCameraElement.prototype.getBaseElement=function(){return null;};function HEffects(){}HEffects.prototype.renderFrame=function(){};var animationManager=function(){var moduleOb={};var registeredAnimations=[];var initTime=0;var len=0;var playingAnimationsNum=0;var _stopped=true;var _isFrozen=false;function removeElement(ev){var i=0;var animItem=ev.target;while(i<len){if(registeredAnimations[i].animation===animItem){registeredAnimations.splice(i,1);i-=1;len-=1;if(!animItem.isPaused){subtractPlayingCount();}}i+=1;}}function registerAnimation(element,animationData){if(!element){return null;}var i=0;while(i<len){if(registeredAnimations[i].elem==element&&registeredAnimations[i].elem!==null){return registeredAnimations[i].animation;}i+=1;}var animItem=new AnimationItem();setupAnimation(animItem,element);animItem.setData(element,animationData);return animItem;}function getRegisteredAnimations(){var i,len=registeredAnimations.length;var animations=[];for(i=0;i<len;i+=1){animations.push(registeredAnimations[i].animation);}return animations;}function addPlayingCount(){playingAnimationsNum+=1;activate();}function subtractPlayingCount(){playingAnimationsNum-=1;}function setupAnimation(animItem,element){animItem.addEventListener('destroy',removeElement);animItem.addEventListener('_active',addPlayingCount);animItem.addEventListener('_idle',subtractPlayingCount);registeredAnimations.push({elem:element,animation:animItem});len+=1;}function loadAnimation(params){var animItem=new AnimationItem();setupAnimation(animItem,null);animItem.setParams(params);return animItem;}function setSpeed(val,animation){var i;for(i=0;i<len;i+=1){registeredAnimations[i].animation.setSpeed(val,animation);}}function setDirection(val,animation){var i;for(i=0;i<len;i+=1){registeredAnimations[i].animation.setDirection(val,animation);}}function play(animation){var i;for(i=0;i<len;i+=1){registeredAnimations[i].animation.play(animation);}}function resume(nowTime){var elapsedTime=nowTime-initTime;var i;for(i=0;i<len;i+=1){registeredAnimations[i].animation.advanceTime(elapsedTime);}initTime=nowTime;if(playingAnimationsNum&&!_isFrozen){window.requestAnimationFrame(resume);}else{_stopped=true;}}function first(nowTime){initTime=nowTime;window.requestAnimationFrame(resume);}function pause(animation){var i;for(i=0;i<len;i+=1){registeredAnimations[i].animation.pause(animation);}}function goToAndStop(value,isFrame,animation){var i;for(i=0;i<len;i+=1){registeredAnimations[i].animation.goToAndStop(value,isFrame,animation);}}function stop(animation){var i;for(i=0;i<len;i+=1){registeredAnimations[i].animation.stop(animation);}}function togglePause(animation){var i;for(i=0;i<len;i+=1){registeredAnimations[i].animation.togglePause(animation);}}function destroy(animation){var i;for(i=len-1;i>=0;i-=1){registeredAnimations[i].animation.destroy(animation);}}function searchAnimations(animationData,standalone,renderer){var animElements=[].concat([].slice.call(document.getElementsByClassName('lottie')),[].slice.call(document.getElementsByClassName('bodymovin')));var i,len=animElements.length;for(i=0;i<len;i+=1){if(renderer){animElements[i].setAttribute('data-bm-type',renderer);}registerAnimation(animElements[i],animationData);}if(standalone&&len===0){if(!renderer){renderer='svg';}var body=document.getElementsByTagName('body')[0];body.innerHTML='';var div=createTag('div');div.style.width='100%';div.style.height='100%';div.setAttribute('data-bm-type',renderer);body.appendChild(div);registerAnimation(div,animationData);}}function resize(){var i;for(i=0;i<len;i+=1){registeredAnimations[i].animation.resize();}}function activate(){if(!_isFrozen&&playingAnimationsNum){if(_stopped){window.requestAnimationFrame(first);_stopped=false;}}}function freeze(){_isFrozen=true;}function unfreeze(){_isFrozen=false;activate();}moduleOb.registerAnimation=registerAnimation;moduleOb.loadAnimation=loadAnimation;moduleOb.setSpeed=setSpeed;moduleOb.setDirection=setDirection;moduleOb.play=play;moduleOb.pause=pause;moduleOb.stop=stop;moduleOb.togglePause=togglePause;moduleOb.searchAnimations=searchAnimations;moduleOb.resize=resize;//moduleOb.start = start;
moduleOb.goToAndStop=goToAndStop;moduleOb.destroy=destroy;moduleOb.freeze=freeze;moduleOb.unfreeze=unfreeze;moduleOb.getRegisteredAnimations=getRegisteredAnimations;return moduleOb;}();var AnimationItem=function AnimationItem(){this._cbs=[];this.name='';this.path='';this.isLoaded=false;this.currentFrame=0;this.currentRawFrame=0;this.firstFrame=0;this.totalFrames=0;this.frameRate=0;this.frameMult=0;this.playSpeed=1;this.playDirection=1;this.playCount=0;this.animationData={};this.assets=[];this.isPaused=true;this.autoplay=false;this.loop=true;this.renderer=null;this.animationID=createElementID();this.assetsPath='';this.timeCompleted=0;this.segmentPos=0;this.isSubframeEnabled=subframeEnabled;this.segments=[];this._idle=true;this._completedLoop=false;this.projectInterface=ProjectInterface();this.imagePreloader=new ImagePreloader();};extendPrototype([BaseEvent],AnimationItem);AnimationItem.prototype.setParams=function(params){if(params.wrapper||params.container){this.wrapper=params.wrapper||params.container;}var animType=params.animType?params.animType:params.renderer?params.renderer:'svg';switch(animType){case'canvas':this.renderer=new CanvasRenderer(this,params.rendererSettings);break;case'svg':this.renderer=new SVGRenderer(this,params.rendererSettings);break;default:this.renderer=new HybridRenderer(this,params.rendererSettings);break;}this.imagePreloader.setCacheType(animType);this.renderer.setProjectInterface(this.projectInterface);this.animType=animType;if(params.loop===''||params.loop===null||params.loop===undefined||params.loop===true){this.loop=true;}else if(params.loop===false){this.loop=false;}else{this.loop=parseInt(params.loop);}this.autoplay='autoplay'in params?params.autoplay:true;this.name=params.name?params.name:'';this.autoloadSegments=params.hasOwnProperty('autoloadSegments')?params.autoloadSegments:true;this.assetsPath=params.assetsPath;this.initialSegment=params.initialSegment;if(params.animationData){this.configAnimation(params.animationData);}else if(params.path){if(params.path.lastIndexOf('\\')!==-1){this.path=params.path.substr(0,params.path.lastIndexOf('\\')+1);}else{this.path=params.path.substr(0,params.path.lastIndexOf('/')+1);}this.fileName=params.path.substr(params.path.lastIndexOf('/')+1);this.fileName=this.fileName.substr(0,this.fileName.lastIndexOf('.json'));assetLoader.load(params.path,this.configAnimation.bind(this),function(){this.trigger('data_failed');}.bind(this));}};AnimationItem.prototype.setData=function(wrapper,animationData){var params={wrapper:wrapper,animationData:animationData?_typeof(animationData)==="object"?animationData:JSON.parse(animationData):null};var wrapperAttributes=wrapper.attributes;params.path=wrapperAttributes.getNamedItem('data-animation-path')?wrapperAttributes.getNamedItem('data-animation-path').value:wrapperAttributes.getNamedItem('data-bm-path')?wrapperAttributes.getNamedItem('data-bm-path').value:wrapperAttributes.getNamedItem('bm-path')?wrapperAttributes.getNamedItem('bm-path').value:'';params.animType=wrapperAttributes.getNamedItem('data-anim-type')?wrapperAttributes.getNamedItem('data-anim-type').value:wrapperAttributes.getNamedItem('data-bm-type')?wrapperAttributes.getNamedItem('data-bm-type').value:wrapperAttributes.getNamedItem('bm-type')?wrapperAttributes.getNamedItem('bm-type').value:wrapperAttributes.getNamedItem('data-bm-renderer')?wrapperAttributes.getNamedItem('data-bm-renderer').value:wrapperAttributes.getNamedItem('bm-renderer')?wrapperAttributes.getNamedItem('bm-renderer').value:'canvas';var loop=wrapperAttributes.getNamedItem('data-anim-loop')?wrapperAttributes.getNamedItem('data-anim-loop').value:wrapperAttributes.getNamedItem('data-bm-loop')?wrapperAttributes.getNamedItem('data-bm-loop').value:wrapperAttributes.getNamedItem('bm-loop')?wrapperAttributes.getNamedItem('bm-loop').value:'';if(loop===''){}else if(loop==='false'){params.loop=false;}else if(loop==='true'){params.loop=true;}else{params.loop=parseInt(loop);}var autoplay=wrapperAttributes.getNamedItem('data-anim-autoplay')?wrapperAttributes.getNamedItem('data-anim-autoplay').value:wrapperAttributes.getNamedItem('data-bm-autoplay')?wrapperAttributes.getNamedItem('data-bm-autoplay').value:wrapperAttributes.getNamedItem('bm-autoplay')?wrapperAttributes.getNamedItem('bm-autoplay').value:true;params.autoplay=autoplay!=="false";params.name=wrapperAttributes.getNamedItem('data-name')?wrapperAttributes.getNamedItem('data-name').value:wrapperAttributes.getNamedItem('data-bm-name')?wrapperAttributes.getNamedItem('data-bm-name').value:wrapperAttributes.getNamedItem('bm-name')?wrapperAttributes.getNamedItem('bm-name').value:'';var prerender=wrapperAttributes.getNamedItem('data-anim-prerender')?wrapperAttributes.getNamedItem('data-anim-prerender').value:wrapperAttributes.getNamedItem('data-bm-prerender')?wrapperAttributes.getNamedItem('data-bm-prerender').value:wrapperAttributes.getNamedItem('bm-prerender')?wrapperAttributes.getNamedItem('bm-prerender').value:'';if(prerender==='false'){params.prerender=false;}this.setParams(params);};AnimationItem.prototype.includeLayers=function(data){if(data.op>this.animationData.op){this.animationData.op=data.op;this.totalFrames=Math.floor(data.op-this.animationData.ip);}var layers=this.animationData.layers;var i,len=layers.length;var newLayers=data.layers;var j,jLen=newLayers.length;for(j=0;j<jLen;j+=1){i=0;while(i<len){if(layers[i].id==newLayers[j].id){layers[i]=newLayers[j];break;}i+=1;}}if(data.chars||data.fonts){this.renderer.globalData.fontManager.addChars(data.chars);this.renderer.globalData.fontManager.addFonts(data.fonts,this.renderer.globalData.defs);}if(data.assets){len=data.assets.length;for(i=0;i<len;i+=1){this.animationData.assets.push(data.assets[i]);}}this.animationData.__complete=false;dataManager.completeData(this.animationData,this.renderer.globalData.fontManager);this.renderer.includeLayers(data.layers);if(expressionsPlugin){expressionsPlugin.initExpressions(this);}this.loadNextSegment();};AnimationItem.prototype.loadNextSegment=function(){var segments=this.animationData.segments;if(!segments||segments.length===0||!this.autoloadSegments){this.trigger('data_ready');this.timeCompleted=this.totalFrames;return;}var segment=segments.shift();this.timeCompleted=segment.time*this.frameRate;var segmentPath=this.path+this.fileName+'_'+this.segmentPos+'.json';this.segmentPos+=1;assetLoader.load(segmentPath,this.includeLayers.bind(this),function(){this.trigger('data_failed');}.bind(this));};AnimationItem.prototype.loadSegments=function(){var segments=this.animationData.segments;if(!segments){this.timeCompleted=this.totalFrames;}this.loadNextSegment();};AnimationItem.prototype.imagesLoaded=function(){this.trigger('loaded_images');this.checkLoaded();};AnimationItem.prototype.preloadImages=function(){this.imagePreloader.setAssetsPath(this.assetsPath);this.imagePreloader.setPath(this.path);this.imagePreloader.loadAssets(this.animationData.assets,this.imagesLoaded.bind(this));};AnimationItem.prototype.configAnimation=function(animData){if(!this.renderer){return;}try{this.animationData=animData;if(this.initialSegment){this.totalFrames=Math.floor(this.initialSegment[1]-this.initialSegment[0]);this.firstFrame=Math.round(this.initialSegment[0]);}else{this.totalFrames=Math.floor(this.animationData.op-this.animationData.ip);this.firstFrame=Math.round(this.animationData.ip);}this.renderer.configAnimation(animData);if(!animData.assets){animData.assets=[];}this.assets=this.animationData.assets;this.frameRate=this.animationData.fr;this.frameMult=this.animationData.fr/1000;this.renderer.searchExtraCompositions(animData.assets);this.trigger('config_ready');this.preloadImages();this.loadSegments();this.updaFrameModifier();this.waitForFontsLoaded();}catch(error){this.triggerConfigError(error);}};AnimationItem.prototype.waitForFontsLoaded=function(){if(!this.renderer){return;}if(this.renderer.globalData.fontManager.isLoaded){this.checkLoaded();}else{setTimeout(this.waitForFontsLoaded.bind(this),20);}};AnimationItem.prototype.checkLoaded=function(){if(!this.isLoaded&&this.renderer.globalData.fontManager.isLoaded&&(this.imagePreloader.loaded()||this.renderer.rendererType!=='canvas')){this.isLoaded=true;dataManager.completeData(this.animationData,this.renderer.globalData.fontManager);if(expressionsPlugin){expressionsPlugin.initExpressions(this);}this.renderer.initItems();setTimeout(function(){this.trigger('DOMLoaded');}.bind(this),0);this.gotoFrame();if(this.autoplay){this.play();}}};AnimationItem.prototype.resize=function(){this.renderer.updateContainerSize();};AnimationItem.prototype.setSubframe=function(flag){this.isSubframeEnabled=!!flag;};AnimationItem.prototype.gotoFrame=function(){this.currentFrame=this.isSubframeEnabled?this.currentRawFrame:~~this.currentRawFrame;if(this.timeCompleted!==this.totalFrames&&this.currentFrame>this.timeCompleted){this.currentFrame=this.timeCompleted;}this.trigger('enterFrame');this.renderFrame();};AnimationItem.prototype.renderFrame=function(){if(this.isLoaded===false){return;}try{this.renderer.renderFrame(this.currentFrame+this.firstFrame);}catch(error){this.triggerRenderFrameError(error);}};AnimationItem.prototype.play=function(name){if(name&&this.name!=name){return;}if(this.isPaused===true){this.isPaused=false;if(this._idle){this._idle=false;this.trigger('_active');}}};AnimationItem.prototype.pause=function(name){if(name&&this.name!=name){return;}if(this.isPaused===false){this.isPaused=true;this._idle=true;this.trigger('_idle');}};AnimationItem.prototype.togglePause=function(name){if(name&&this.name!=name){return;}if(this.isPaused===true){this.play();}else{this.pause();}};AnimationItem.prototype.stop=function(name){if(name&&this.name!=name){return;}this.pause();this.playCount=0;this._completedLoop=false;this.setCurrentRawFrameValue(0);};AnimationItem.prototype.goToAndStop=function(value,isFrame,name){if(name&&this.name!=name){return;}if(isFrame){this.setCurrentRawFrameValue(value);}else{this.setCurrentRawFrameValue(value*this.frameModifier);}this.pause();};AnimationItem.prototype.goToAndPlay=function(value,isFrame,name){this.goToAndStop(value,isFrame,name);this.play();};AnimationItem.prototype.advanceTime=function(value){if(this.isPaused===true||this.isLoaded===false){return;}var nextValue=this.currentRawFrame+value*this.frameModifier;var _isComplete=false;// Checking if nextValue > totalFrames - 1 for addressing non looping and looping animations.
// If animation won't loop, it should stop at totalFrames - 1. If it will loop it should complete the last frame and then loop.
if(nextValue>=this.totalFrames-1&&this.frameModifier>0){if(!this.loop||this.playCount===this.loop){if(!this.checkSegments(nextValue>this.totalFrames?nextValue%this.totalFrames:0)){_isComplete=true;nextValue=this.totalFrames-1;}}else if(nextValue>=this.totalFrames){this.playCount+=1;if(!this.checkSegments(nextValue%this.totalFrames)){this.setCurrentRawFrameValue(nextValue%this.totalFrames);this._completedLoop=true;this.trigger('loopComplete');}}else{this.setCurrentRawFrameValue(nextValue);}}else if(nextValue<0){if(!this.checkSegments(nextValue%this.totalFrames)){if(this.loop&&!(this.playCount--<=0&&this.loop!==true)){this.setCurrentRawFrameValue(this.totalFrames+nextValue%this.totalFrames);if(!this._completedLoop){this._completedLoop=true;}else{this.trigger('loopComplete');}}else{_isComplete=true;nextValue=0;}}}else{this.setCurrentRawFrameValue(nextValue);}if(_isComplete){this.setCurrentRawFrameValue(nextValue);this.pause();this.trigger('complete');}};AnimationItem.prototype.adjustSegment=function(arr,offset){this.playCount=0;if(arr[1]<arr[0]){if(this.frameModifier>0){if(this.playSpeed<0){this.setSpeed(-this.playSpeed);}else{this.setDirection(-1);}}this.timeCompleted=this.totalFrames=arr[0]-arr[1];this.firstFrame=arr[1];this.setCurrentRawFrameValue(this.totalFrames-0.001-offset);}else if(arr[1]>arr[0]){if(this.frameModifier<0){if(this.playSpeed<0){this.setSpeed(-this.playSpeed);}else{this.setDirection(1);}}this.timeCompleted=this.totalFrames=arr[1]-arr[0];this.firstFrame=arr[0];this.setCurrentRawFrameValue(0.001+offset);}this.trigger('segmentStart');};AnimationItem.prototype.setSegment=function(init,end){var pendingFrame=-1;if(this.isPaused){if(this.currentRawFrame+this.firstFrame<init){pendingFrame=init;}else if(this.currentRawFrame+this.firstFrame>end){pendingFrame=end-init;}}this.firstFrame=init;this.timeCompleted=this.totalFrames=end-init;if(pendingFrame!==-1){this.goToAndStop(pendingFrame,true);}};AnimationItem.prototype.playSegments=function(arr,forceFlag){if(forceFlag){this.segments.length=0;}if(_typeof(arr[0])==='object'){var i,len=arr.length;for(i=0;i<len;i+=1){this.segments.push(arr[i]);}}else{this.segments.push(arr);}if(this.segments.length&&forceFlag){this.adjustSegment(this.segments.shift(),0);}if(this.isPaused){this.play();}};AnimationItem.prototype.resetSegments=function(forceFlag){this.segments.length=0;this.segments.push([this.animationData.ip,this.animationData.op]);//this.segments.push([this.animationData.ip*this.frameRate,Math.floor(this.animationData.op - this.animationData.ip+this.animationData.ip*this.frameRate)]);
if(forceFlag){this.checkSegments(0);}};AnimationItem.prototype.checkSegments=function(offset){if(this.segments.length){this.adjustSegment(this.segments.shift(),offset);return true;}return false;};AnimationItem.prototype.destroy=function(name){if(name&&this.name!=name||!this.renderer){return;}this.renderer.destroy();this.imagePreloader.destroy();this.trigger('destroy');this._cbs=null;this.onEnterFrame=this.onLoopComplete=this.onComplete=this.onSegmentStart=this.onDestroy=null;this.renderer=null;};AnimationItem.prototype.setCurrentRawFrameValue=function(value){this.currentRawFrame=value;this.gotoFrame();};AnimationItem.prototype.setSpeed=function(val){this.playSpeed=val;this.updaFrameModifier();};AnimationItem.prototype.setDirection=function(val){this.playDirection=val<0?-1:1;this.updaFrameModifier();};AnimationItem.prototype.updaFrameModifier=function(){this.frameModifier=this.frameMult*this.playSpeed*this.playDirection;};AnimationItem.prototype.getPath=function(){return this.path;};AnimationItem.prototype.getAssetsPath=function(assetData){var path='';if(assetData.e){path=assetData.p;}else if(this.assetsPath){var imagePath=assetData.p;if(imagePath.indexOf('images/')!==-1){imagePath=imagePath.split('/')[1];}path=this.assetsPath+imagePath;}else{path=this.path;path+=assetData.u?assetData.u:'';path+=assetData.p;}return path;};AnimationItem.prototype.getAssetData=function(id){var i=0,len=this.assets.length;while(i<len){if(id==this.assets[i].id){return this.assets[i];}i+=1;}};AnimationItem.prototype.hide=function(){this.renderer.hide();};AnimationItem.prototype.show=function(){this.renderer.show();};AnimationItem.prototype.getDuration=function(isFrame){return isFrame?this.totalFrames:this.totalFrames/this.frameRate;};AnimationItem.prototype.trigger=function(name){if(this._cbs&&this._cbs[name]){switch(name){case'enterFrame':this.triggerEvent(name,new BMEnterFrameEvent(name,this.currentFrame,this.totalFrames,this.frameModifier));break;case'loopComplete':this.triggerEvent(name,new BMCompleteLoopEvent(name,this.loop,this.playCount,this.frameMult));break;case'complete':this.triggerEvent(name,new BMCompleteEvent(name,this.frameMult));break;case'segmentStart':this.triggerEvent(name,new BMSegmentStartEvent(name,this.firstFrame,this.totalFrames));break;case'destroy':this.triggerEvent(name,new BMDestroyEvent(name,this));break;default:this.triggerEvent(name);}}if(name==='enterFrame'&&this.onEnterFrame){this.onEnterFrame.call(this,new BMEnterFrameEvent(name,this.currentFrame,this.totalFrames,this.frameMult));}if(name==='loopComplete'&&this.onLoopComplete){this.onLoopComplete.call(this,new BMCompleteLoopEvent(name,this.loop,this.playCount,this.frameMult));}if(name==='complete'&&this.onComplete){this.onComplete.call(this,new BMCompleteEvent(name,this.frameMult));}if(name==='segmentStart'&&this.onSegmentStart){this.onSegmentStart.call(this,new BMSegmentStartEvent(name,this.firstFrame,this.totalFrames));}if(name==='destroy'&&this.onDestroy){this.onDestroy.call(this,new BMDestroyEvent(name,this));}};AnimationItem.prototype.triggerRenderFrameError=function(nativeError){var error=new BMRenderFrameErrorEvent(nativeError,this.currentFrame);this.triggerEvent('error',error);if(this.onError){this.onError.call(this,error);}};AnimationItem.prototype.triggerConfigError=function(nativeError){var error=new BMConfigErrorEvent(nativeError,this.currentFrame);this.triggerEvent('error',error);if(this.onError){this.onError.call(this,error);}};var Expressions=function(){var ob={};ob.initExpressions=initExpressions;function initExpressions(animation){var stackCount=0;var registers=[];function pushExpression(){stackCount+=1;}function popExpression(){stackCount-=1;if(stackCount===0){releaseInstances();}}function registerExpressionProperty(expression){if(registers.indexOf(expression)===-1){registers.push(expression);}}function releaseInstances(){var i,len=registers.length;for(i=0;i<len;i+=1){registers[i].release();}registers.length=0;}animation.renderer.compInterface=CompExpressionInterface(animation.renderer);animation.renderer.globalData.projectInterface.registerComposition(animation.renderer);animation.renderer.globalData.pushExpression=pushExpression;animation.renderer.globalData.popExpression=popExpression;animation.renderer.globalData.registerExpressionProperty=registerExpressionProperty;}return ob;}();expressionsPlugin=Expressions;var ExpressionManager=function(){'use strict';var ob={};var Math=BMMath;var window=null;var document=null;function $bm_isInstanceOfArray(arr){return arr.constructor===Array||arr.constructor===Float32Array;}function isNumerable(tOfV,v){return tOfV==='number'||tOfV==='boolean'||tOfV==='string'||v instanceof Number;}function $bm_neg(a){var tOfA=_typeof(a);if(tOfA==='number'||tOfA==='boolean'||a instanceof Number){return-a;}if($bm_isInstanceOfArray(a)){var i,lenA=a.length;var retArr=[];for(i=0;i<lenA;i+=1){retArr[i]=-a[i];}return retArr;}if(a.propType){return a.v;}}var easeInBez=BezierFactory.getBezierEasing(0.333,0,.833,.833,'easeIn').get;var easeOutBez=BezierFactory.getBezierEasing(0.167,0.167,.667,1,'easeOut').get;var easeInOutBez=BezierFactory.getBezierEasing(.33,0,.667,1,'easeInOut').get;function sum(a,b){var tOfA=_typeof(a);var tOfB=_typeof(b);if(tOfA==='string'||tOfB==='string'){return a+b;}if(isNumerable(tOfA,a)&&isNumerable(tOfB,b)){return a+b;}if($bm_isInstanceOfArray(a)&&isNumerable(tOfB,b)){a=a.slice(0);a[0]=a[0]+b;return a;}if(isNumerable(tOfA,a)&&$bm_isInstanceOfArray(b)){b=b.slice(0);b[0]=a+b[0];return b;}if($bm_isInstanceOfArray(a)&&$bm_isInstanceOfArray(b)){var i=0,lenA=a.length,lenB=b.length;var retArr=[];while(i<lenA||i<lenB){if((typeof a[i]==='number'||a[i]instanceof Number)&&(typeof b[i]==='number'||b[i]instanceof Number)){retArr[i]=a[i]+b[i];}else{retArr[i]=b[i]===undefined?a[i]:a[i]||b[i];}i+=1;}return retArr;}return 0;}var add=sum;function sub(a,b){var tOfA=_typeof(a);var tOfB=_typeof(b);if(isNumerable(tOfA,a)&&isNumerable(tOfB,b)){if(tOfA==='string'){a=parseInt(a);}if(tOfB==='string'){b=parseInt(b);}return a-b;}if($bm_isInstanceOfArray(a)&&isNumerable(tOfB,b)){a=a.slice(0);a[0]=a[0]-b;return a;}if(isNumerable(tOfA,a)&&$bm_isInstanceOfArray(b)){b=b.slice(0);b[0]=a-b[0];return b;}if($bm_isInstanceOfArray(a)&&$bm_isInstanceOfArray(b)){var i=0,lenA=a.length,lenB=b.length;var retArr=[];while(i<lenA||i<lenB){if((typeof a[i]==='number'||a[i]instanceof Number)&&(typeof b[i]==='number'||b[i]instanceof Number)){retArr[i]=a[i]-b[i];}else{retArr[i]=b[i]===undefined?a[i]:a[i]||b[i];}i+=1;}return retArr;}return 0;}function mul(a,b){var tOfA=_typeof(a);var tOfB=_typeof(b);var arr;if(isNumerable(tOfA,a)&&isNumerable(tOfB,b)){return a*b;}var i,len;if($bm_isInstanceOfArray(a)&&isNumerable(tOfB,b)){len=a.length;arr=createTypedArray('float32',len);for(i=0;i<len;i+=1){arr[i]=a[i]*b;}return arr;}if(isNumerable(tOfA,a)&&$bm_isInstanceOfArray(b)){len=b.length;arr=createTypedArray('float32',len);for(i=0;i<len;i+=1){arr[i]=a*b[i];}return arr;}return 0;}function div(a,b){var tOfA=_typeof(a);var tOfB=_typeof(b);var arr;if(isNumerable(tOfA,a)&&isNumerable(tOfB,b)){return a/b;}var i,len;if($bm_isInstanceOfArray(a)&&isNumerable(tOfB,b)){len=a.length;arr=createTypedArray('float32',len);for(i=0;i<len;i+=1){arr[i]=a[i]/b;}return arr;}if(isNumerable(tOfA,a)&&$bm_isInstanceOfArray(b)){len=b.length;arr=createTypedArray('float32',len);for(i=0;i<len;i+=1){arr[i]=a/b[i];}return arr;}return 0;}function mod(a,b){if(typeof a==='string'){a=parseInt(a);}if(typeof b==='string'){b=parseInt(b);}return a%b;}var $bm_sum=sum;var $bm_sub=sub;var $bm_mul=mul;var $bm_div=div;var $bm_mod=mod;function clamp(num,min,max){if(min>max){var mm=max;max=min;min=mm;}return Math.min(Math.max(num,min),max);}function radiansToDegrees(val){return val/degToRads;}var radians_to_degrees=radiansToDegrees;function degreesToRadians(val){return val*degToRads;}var degrees_to_radians=radiansToDegrees;var helperLengthArray=[0,0,0,0,0,0];function length(arr1,arr2){if(typeof arr1==='number'||arr1 instanceof Number){arr2=arr2||0;return Math.abs(arr1-arr2);}if(!arr2){arr2=helperLengthArray;}var i,len=Math.min(arr1.length,arr2.length);var addedLength=0;for(i=0;i<len;i+=1){addedLength+=Math.pow(arr2[i]-arr1[i],2);}return Math.sqrt(addedLength);}function normalize(vec){return div(vec,length(vec));}function rgbToHsl(val){var r=val[0];var g=val[1];var b=val[2];var max=Math.max(r,g,b),min=Math.min(r,g,b);var h,s,l=(max+min)/2;if(max==min){h=s=0;// achromatic
}else{var d=max-min;s=l>0.5?d/(2-max-min):d/(max+min);switch(max){case r:h=(g-b)/d+(g<b?6:0);break;case g:h=(b-r)/d+2;break;case b:h=(r-g)/d+4;break;}h/=6;}return[h,s,l,val[3]];}function hue2rgb(p,q,t){if(t<0)t+=1;if(t>1)t-=1;if(t<1/6)return p+(q-p)*6*t;if(t<1/2)return q;if(t<2/3)return p+(q-p)*(2/3-t)*6;return p;}function hslToRgb(val){var h=val[0];var s=val[1];var l=val[2];var r,g,b;if(s===0){r=g=b=l;// achromatic
}else{var q=l<0.5?l*(1+s):l+s-l*s;var p=2*l-q;r=hue2rgb(p,q,h+1/3);g=hue2rgb(p,q,h);b=hue2rgb(p,q,h-1/3);}return[r,g,b,val[3]];}function linear(t,tMin,tMax,value1,value2){if(value1===undefined||value2===undefined){value1=tMin;value2=tMax;tMin=0;tMax=1;}if(tMax<tMin){var _tMin=tMax;tMax=tMin;tMin=_tMin;}if(t<=tMin){return value1;}else if(t>=tMax){return value2;}var perc=tMax===tMin?0:(t-tMin)/(tMax-tMin);if(!value1.length){return value1+(value2-value1)*perc;}var i,len=value1.length;var arr=createTypedArray('float32',len);for(i=0;i<len;i+=1){arr[i]=value1[i]+(value2[i]-value1[i])*perc;}return arr;}function random(min,max){if(max===undefined){if(min===undefined){min=0;max=1;}else{max=min;min=undefined;}}if(max.length){var i,len=max.length;if(!min){min=createTypedArray('float32',len);}var arr=createTypedArray('float32',len);var rnd=BMMath.random();for(i=0;i<len;i+=1){arr[i]=min[i]+rnd*(max[i]-min[i]);}return arr;}if(min===undefined){min=0;}var rndm=BMMath.random();return min+rndm*(max-min);}function createPath(points,inTangents,outTangents,closed){var i,len=points.length;var path=shape_pool.newElement();path.setPathData(!!closed,len);var arrPlaceholder=[0,0],inVertexPoint,outVertexPoint;for(i=0;i<len;i+=1){inVertexPoint=inTangents&&inTangents[i]?inTangents[i]:arrPlaceholder;outVertexPoint=outTangents&&outTangents[i]?outTangents[i]:arrPlaceholder;path.setTripleAt(points[i][0],points[i][1],outVertexPoint[0]+points[i][0],outVertexPoint[1]+points[i][1],inVertexPoint[0]+points[i][0],inVertexPoint[1]+points[i][1],i,true);}return path;}function initiateExpression(elem,data,property){var val=data.x;var needsVelocity=/velocity(?![\w\d])/.test(val);var _needsRandom=val.indexOf('random')!==-1;var elemType=elem.data.ty;var transform,$bm_transform,content,effect;var thisProperty=property;thisProperty.valueAtTime=thisProperty.getValueAtTime;Object.defineProperty(thisProperty,'value',{get:function get(){return thisProperty.v;}});elem.comp.frameDuration=1/elem.comp.globalData.frameRate;elem.comp.displayStartTime=0;var inPoint=elem.data.ip/elem.comp.globalData.frameRate;var outPoint=elem.data.op/elem.comp.globalData.frameRate;var width=elem.data.sw?elem.data.sw:0;var height=elem.data.sh?elem.data.sh:0;var name=elem.data.nm;var loopIn,loop_in,loopOut,loop_out,smooth;var toWorld,fromWorld,fromComp,toComp,fromCompToSurface,position,rotation,anchorPoint,scale,thisLayer,thisComp,mask,valueAtTime,velocityAtTime;var __expression_functions=[];if(data.xf){var i,len=data.xf.length;for(i=0;i<len;i+=1){__expression_functions[i]=eval('(function(){ return '+data.xf[i]+'}())');}}var scoped_bm_rt;var expression_function=eval('[function _expression_function(){'+val+';scoped_bm_rt=$bm_rt}'+']')[0];var numKeys=property.kf?data.k.length:0;var active=!this.data||this.data.hd!==true;var wiggle=function wiggle(freq,amp){var i,j,len=this.pv.length?this.pv.length:1;var addedAmps=createTypedArray('float32',len);freq=5;var iterations=Math.floor(time*freq);i=0;j=0;while(i<iterations){//var rnd = BMMath.random();
for(j=0;j<len;j+=1){addedAmps[j]+=-amp+amp*2*BMMath.random();//addedAmps[j] += -amp + amp*2*rnd;
}i+=1;}//var rnd2 = BMMath.random();
var periods=time*freq;var perc=periods-Math.floor(periods);var arr=createTypedArray('float32',len);if(len>1){for(j=0;j<len;j+=1){arr[j]=this.pv[j]+addedAmps[j]+(-amp+amp*2*BMMath.random())*perc;//arr[j] = this.pv[j] + addedAmps[j] + (-amp + amp*2*rnd)*perc;
//arr[i] = this.pv[i] + addedAmp + amp1*perc + amp2*(1-perc);
}return arr;}else{return this.pv+addedAmps[0]+(-amp+amp*2*BMMath.random())*perc;}}.bind(this);if(thisProperty.loopIn){loopIn=thisProperty.loopIn.bind(thisProperty);loop_in=loopIn;}if(thisProperty.loopOut){loopOut=thisProperty.loopOut.bind(thisProperty);loop_out=loopOut;}if(thisProperty.smooth){smooth=thisProperty.smooth.bind(thisProperty);}function loopInDuration(type,duration){return loopIn(type,duration,true);}function loopOutDuration(type,duration){return loopOut(type,duration,true);}if(this.getValueAtTime){valueAtTime=this.getValueAtTime.bind(this);}if(this.getVelocityAtTime){velocityAtTime=this.getVelocityAtTime.bind(this);}var comp=elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);function lookAt(elem1,elem2){var fVec=[elem2[0]-elem1[0],elem2[1]-elem1[1],elem2[2]-elem1[2]];var pitch=Math.atan2(fVec[0],Math.sqrt(fVec[1]*fVec[1]+fVec[2]*fVec[2]))/degToRads;var yaw=-Math.atan2(fVec[1],fVec[2])/degToRads;return[yaw,pitch,0];}function easeOut(t,tMin,tMax,val1,val2){return applyEase(easeOutBez,t,tMin,tMax,val1,val2);}function easeIn(t,tMin,tMax,val1,val2){return applyEase(easeInBez,t,tMin,tMax,val1,val2);}function ease(t,tMin,tMax,val1,val2){return applyEase(easeInOutBez,t,tMin,tMax,val1,val2);}function applyEase(fn,t,tMin,tMax,val1,val2){if(val1===undefined){val1=tMin;val2=tMax;}else{t=(t-tMin)/(tMax-tMin);}t=t>1?1:t<0?0:t;var mult=fn(t);if($bm_isInstanceOfArray(val1)){var i,len=val1.length;var arr=createTypedArray('float32',len);for(i=0;i<len;i+=1){arr[i]=(val2[i]-val1[i])*mult+val1[i];}return arr;}else{return(val2-val1)*mult+val1;}}function nearestKey(time){var i,len=data.k.length,index,keyTime;if(!data.k.length||typeof data.k[0]==='number'){index=0;keyTime=0;}else{index=-1;time*=elem.comp.globalData.frameRate;if(time<data.k[0].t){index=1;keyTime=data.k[0].t;}else{for(i=0;i<len-1;i+=1){if(time===data.k[i].t){index=i+1;keyTime=data.k[i].t;break;}else if(time>data.k[i].t&&time<data.k[i+1].t){if(time-data.k[i].t>data.k[i+1].t-time){index=i+2;keyTime=data.k[i+1].t;}else{index=i+1;keyTime=data.k[i].t;}break;}}if(index===-1){index=i+1;keyTime=data.k[i].t;}}}var ob={};ob.index=index;ob.time=keyTime/elem.comp.globalData.frameRate;return ob;}function key(ind){var ob,i,len;if(!data.k.length||typeof data.k[0]==='number'){throw new Error('The property has no keyframe at index '+ind);}ind-=1;ob={time:data.k[ind].t/elem.comp.globalData.frameRate,value:[]};var arr=data.k[ind].hasOwnProperty('s')?data.k[ind].s:data.k[ind-1].e;len=arr.length;for(i=0;i<len;i+=1){ob[i]=arr[i];ob.value[i]=arr[i];}return ob;}function framesToTime(frames,fps){if(!fps){fps=elem.comp.globalData.frameRate;}return frames/fps;}function timeToFrames(t,fps){if(!t&&t!==0){t=time;}if(!fps){fps=elem.comp.globalData.frameRate;}return t*fps;}function seedRandom(seed){BMMath.seedrandom(randSeed+seed);}function sourceRectAtTime(){return elem.sourceRectAtTime();}function substring(init,end){if(typeof value==='string'){if(end===undefined){return value.substring(init);}return value.substring(init,end);}return'';}function substr(init,end){if(typeof value==='string'){if(end===undefined){return value.substr(init);}return value.substr(init,end);}return'';}function posterizeTime(framesPerSecond){time=framesPerSecond===0?0:Math.floor(time*framesPerSecond)/framesPerSecond;value=valueAtTime(time);}var time,velocity,value,text,textIndex,textTotal,selectorValue;var index=elem.data.ind;var hasParent=!!(elem.hierarchy&&elem.hierarchy.length);var parent;var randSeed=Math.floor(Math.random()*1000000);var globalData=elem.globalData;function executeExpression(_value){// globalData.pushExpression();
value=_value;if(_needsRandom){seedRandom(randSeed);}if(this.frameExpressionId===elem.globalData.frameId&&this.propType!=='textSelector'){return value;}if(this.propType==='textSelector'){textIndex=this.textIndex;textTotal=this.textTotal;selectorValue=this.selectorValue;}if(!thisLayer){text=elem.layerInterface.text;thisLayer=elem.layerInterface;thisComp=elem.comp.compInterface;toWorld=thisLayer.toWorld.bind(thisLayer);fromWorld=thisLayer.fromWorld.bind(thisLayer);fromComp=thisLayer.fromComp.bind(thisLayer);toComp=thisLayer.toComp.bind(thisLayer);mask=thisLayer.mask?thisLayer.mask.bind(thisLayer):null;fromCompToSurface=fromComp;}if(!transform){transform=elem.layerInterface("ADBE Transform Group");$bm_transform=transform;if(transform){anchorPoint=transform.anchorPoint;/*position = transform.position;
            rotation = transform.rotation;
            scale = transform.scale;*/}}if(elemType===4&&!content){content=thisLayer("ADBE Root Vectors Group");}if(!effect){effect=thisLayer(4);}hasParent=!!(elem.hierarchy&&elem.hierarchy.length);if(hasParent&&!parent){parent=elem.hierarchy[0].layerInterface;}time=this.comp.renderedFrame/this.comp.globalData.frameRate;if(needsVelocity){velocity=velocityAtTime(time);}expression_function();this.frameExpressionId=elem.globalData.frameId;//TODO: Check if it's possible to return on ShapeInterface the .v value
if(scoped_bm_rt.propType==="shape"){scoped_bm_rt=scoped_bm_rt.v;}// globalData.popExpression();
return scoped_bm_rt;}return executeExpression;}ob.initiateExpression=initiateExpression;return ob;}();var expressionHelpers=function(){function searchExpressions(elem,data,prop){if(data.x){prop.k=true;prop.x=true;prop.initiateExpression=ExpressionManager.initiateExpression;prop.effectsSequence.push(prop.initiateExpression(elem,data,prop).bind(prop));}}function getValueAtTime(frameNum){frameNum*=this.elem.globalData.frameRate;frameNum-=this.offsetTime;if(frameNum!==this._cachingAtTime.lastFrame){this._cachingAtTime.lastIndex=this._cachingAtTime.lastFrame<frameNum?this._cachingAtTime.lastIndex:0;this._cachingAtTime.value=this.interpolateValue(frameNum,this._cachingAtTime);this._cachingAtTime.lastFrame=frameNum;}return this._cachingAtTime.value;}function getSpeedAtTime(frameNum){var delta=-0.01;var v1=this.getValueAtTime(frameNum);var v2=this.getValueAtTime(frameNum+delta);var speed=0;if(v1.length){var i;for(i=0;i<v1.length;i+=1){speed+=Math.pow(v2[i]-v1[i],2);}speed=Math.sqrt(speed)*100;}else{speed=0;}return speed;}function getVelocityAtTime(frameNum){if(this.vel!==undefined){return this.vel;}var delta=-0.001;//frameNum += this.elem.data.st;
var v1=this.getValueAtTime(frameNum);var v2=this.getValueAtTime(frameNum+delta);var velocity;if(v1.length){velocity=createTypedArray('float32',v1.length);var i;for(i=0;i<v1.length;i+=1){//removing frameRate
//if needed, don't add it here
//velocity[i] = this.elem.globalData.frameRate*((v2[i] - v1[i])/delta);
velocity[i]=(v2[i]-v1[i])/delta;}}else{velocity=(v2-v1)/delta;}return velocity;}function getStaticValueAtTime(){return this.pv;}function setGroupProperty(propertyGroup){this.propertyGroup=propertyGroup;}return{searchExpressions:searchExpressions,getSpeedAtTime:getSpeedAtTime,getVelocityAtTime:getVelocityAtTime,getValueAtTime:getValueAtTime,getStaticValueAtTime:getStaticValueAtTime,setGroupProperty:setGroupProperty};}();(function addPropertyDecorator(){function loopOut(type,duration,durationFlag){if(!this.k||!this.keyframes){return this.pv;}type=type?type.toLowerCase():'';var currentFrame=this.comp.renderedFrame;var keyframes=this.keyframes;var lastKeyFrame=keyframes[keyframes.length-1].t;if(currentFrame<=lastKeyFrame){return this.pv;}else{var cycleDuration,firstKeyFrame;if(!durationFlag){if(!duration||duration>keyframes.length-1){duration=keyframes.length-1;}firstKeyFrame=keyframes[keyframes.length-1-duration].t;cycleDuration=lastKeyFrame-firstKeyFrame;}else{if(!duration){cycleDuration=Math.max(0,lastKeyFrame-this.elem.data.ip);}else{cycleDuration=Math.abs(lastKeyFrame-elem.comp.globalData.frameRate*duration);}firstKeyFrame=lastKeyFrame-cycleDuration;}var i,len,ret;if(type==='pingpong'){var iterations=Math.floor((currentFrame-firstKeyFrame)/cycleDuration);if(iterations%2!==0){return this.getValueAtTime((cycleDuration-(currentFrame-firstKeyFrame)%cycleDuration+firstKeyFrame)/this.comp.globalData.frameRate,0);}}else if(type==='offset'){var initV=this.getValueAtTime(firstKeyFrame/this.comp.globalData.frameRate,0);var endV=this.getValueAtTime(lastKeyFrame/this.comp.globalData.frameRate,0);var current=this.getValueAtTime(((currentFrame-firstKeyFrame)%cycleDuration+firstKeyFrame)/this.comp.globalData.frameRate,0);var repeats=Math.floor((currentFrame-firstKeyFrame)/cycleDuration);if(this.pv.length){ret=new Array(initV.length);len=ret.length;for(i=0;i<len;i+=1){ret[i]=(endV[i]-initV[i])*repeats+current[i];}return ret;}return(endV-initV)*repeats+current;}else if(type==='continue'){var lastValue=this.getValueAtTime(lastKeyFrame/this.comp.globalData.frameRate,0);var nextLastValue=this.getValueAtTime((lastKeyFrame-0.001)/this.comp.globalData.frameRate,0);if(this.pv.length){ret=new Array(lastValue.length);len=ret.length;for(i=0;i<len;i+=1){ret[i]=lastValue[i]+(lastValue[i]-nextLastValue[i])*((currentFrame-lastKeyFrame)/this.comp.globalData.frameRate)/0.0005;}return ret;}return lastValue+(lastValue-nextLastValue)*((currentFrame-lastKeyFrame)/0.001);}return this.getValueAtTime(((currentFrame-firstKeyFrame)%cycleDuration+firstKeyFrame)/this.comp.globalData.frameRate,0);}}function loopIn(type,duration,durationFlag){if(!this.k){return this.pv;}type=type?type.toLowerCase():'';var currentFrame=this.comp.renderedFrame;var keyframes=this.keyframes;var firstKeyFrame=keyframes[0].t;if(currentFrame>=firstKeyFrame){return this.pv;}else{var cycleDuration,lastKeyFrame;if(!durationFlag){if(!duration||duration>keyframes.length-1){duration=keyframes.length-1;}lastKeyFrame=keyframes[duration].t;cycleDuration=lastKeyFrame-firstKeyFrame;}else{if(!duration){cycleDuration=Math.max(0,this.elem.data.op-firstKeyFrame);}else{cycleDuration=Math.abs(elem.comp.globalData.frameRate*duration);}lastKeyFrame=firstKeyFrame+cycleDuration;}var i,len,ret;if(type==='pingpong'){var iterations=Math.floor((firstKeyFrame-currentFrame)/cycleDuration);if(iterations%2===0){return this.getValueAtTime(((firstKeyFrame-currentFrame)%cycleDuration+firstKeyFrame)/this.comp.globalData.frameRate,0);}}else if(type==='offset'){var initV=this.getValueAtTime(firstKeyFrame/this.comp.globalData.frameRate,0);var endV=this.getValueAtTime(lastKeyFrame/this.comp.globalData.frameRate,0);var current=this.getValueAtTime((cycleDuration-(firstKeyFrame-currentFrame)%cycleDuration+firstKeyFrame)/this.comp.globalData.frameRate,0);var repeats=Math.floor((firstKeyFrame-currentFrame)/cycleDuration)+1;if(this.pv.length){ret=new Array(initV.length);len=ret.length;for(i=0;i<len;i+=1){ret[i]=current[i]-(endV[i]-initV[i])*repeats;}return ret;}return current-(endV-initV)*repeats;}else if(type==='continue'){var firstValue=this.getValueAtTime(firstKeyFrame/this.comp.globalData.frameRate,0);var nextFirstValue=this.getValueAtTime((firstKeyFrame+0.001)/this.comp.globalData.frameRate,0);if(this.pv.length){ret=new Array(firstValue.length);len=ret.length;for(i=0;i<len;i+=1){ret[i]=firstValue[i]+(firstValue[i]-nextFirstValue[i])*(firstKeyFrame-currentFrame)/0.001;}return ret;}return firstValue+(firstValue-nextFirstValue)*(firstKeyFrame-currentFrame)/0.001;}return this.getValueAtTime((cycleDuration-(firstKeyFrame-currentFrame)%cycleDuration+firstKeyFrame)/this.comp.globalData.frameRate,0);}}function smooth(width,samples){if(!this.k){return this.pv;}width=(width||0.4)*0.5;samples=Math.floor(samples||5);if(samples<=1){return this.pv;}var currentTime=this.comp.renderedFrame/this.comp.globalData.frameRate;var initFrame=currentTime-width;var endFrame=currentTime+width;var sampleFrequency=samples>1?(endFrame-initFrame)/(samples-1):1;var i=0,j=0;var value;if(this.pv.length){value=createTypedArray('float32',this.pv.length);}else{value=0;}var sampleValue;while(i<samples){sampleValue=this.getValueAtTime(initFrame+i*sampleFrequency);if(this.pv.length){for(j=0;j<this.pv.length;j+=1){value[j]+=sampleValue[j];}}else{value+=sampleValue;}i+=1;}if(this.pv.length){for(j=0;j<this.pv.length;j+=1){value[j]/=samples;}}else{value/=samples;}return value;}function getValueAtTime(frameNum){frameNum*=this.elem.globalData.frameRate;frameNum-=this.offsetTime;if(frameNum!==this._cachingAtTime.lastFrame){this._cachingAtTime.lastIndex=this._cachingAtTime.lastFrame<frameNum?this._cachingAtTime.lastIndex:0;this._cachingAtTime.value=this.interpolateValue(frameNum,this._cachingAtTime);this._cachingAtTime.lastFrame=frameNum;}return this._cachingAtTime.value;}function getTransformValueAtTime(time){console.warn('Transform at time not supported');}function getTransformStaticValueAtTime(time){}var getTransformProperty=TransformPropertyFactory.getTransformProperty;TransformPropertyFactory.getTransformProperty=function(elem,data,container){var prop=getTransformProperty(elem,data,container);if(prop.dynamicProperties.length){prop.getValueAtTime=getTransformValueAtTime.bind(prop);}else{prop.getValueAtTime=getTransformStaticValueAtTime.bind(prop);}prop.setGroupProperty=expressionHelpers.setGroupProperty;return prop;};var propertyGetProp=PropertyFactory.getProp;PropertyFactory.getProp=function(elem,data,type,mult,container){var prop=propertyGetProp(elem,data,type,mult,container);//prop.getVelocityAtTime = getVelocityAtTime;
//prop.loopOut = loopOut;
//prop.loopIn = loopIn;
if(prop.kf){prop.getValueAtTime=expressionHelpers.getValueAtTime.bind(prop);}else{prop.getValueAtTime=expressionHelpers.getStaticValueAtTime.bind(prop);}prop.setGroupProperty=expressionHelpers.setGroupProperty;prop.loopOut=loopOut;prop.loopIn=loopIn;prop.smooth=smooth;prop.getVelocityAtTime=expressionHelpers.getVelocityAtTime.bind(prop);prop.getSpeedAtTime=expressionHelpers.getSpeedAtTime.bind(prop);prop.numKeys=data.a===1?data.k.length:0;prop.propertyIndex=data.ix;var value=0;if(type!==0){value=createTypedArray('float32',data.a===1?data.k[0].s.length:data.k.length);}prop._cachingAtTime={lastFrame:initialDefaultFrame,lastIndex:0,value:value};expressionHelpers.searchExpressions(elem,data,prop);if(prop.k){container.addDynamicProperty(prop);}return prop;};function getShapeValueAtTime(frameNum){//For now this caching object is created only when needed instead of creating it when the shape is initialized.
if(!this._cachingAtTime){this._cachingAtTime={shapeValue:shape_pool.clone(this.pv),lastIndex:0,lastTime:initialDefaultFrame};}frameNum*=this.elem.globalData.frameRate;frameNum-=this.offsetTime;if(frameNum!==this._cachingAtTime.lastTime){this._cachingAtTime.lastIndex=this._cachingAtTime.lastTime<frameNum?this._caching.lastIndex:0;this._cachingAtTime.lastTime=frameNum;this.interpolateShape(frameNum,this._cachingAtTime.shapeValue,this._cachingAtTime);}return this._cachingAtTime.shapeValue;}var ShapePropertyConstructorFunction=ShapePropertyFactory.getConstructorFunction();var KeyframedShapePropertyConstructorFunction=ShapePropertyFactory.getKeyframedConstructorFunction();function ShapeExpressions(){}ShapeExpressions.prototype={vertices:function vertices(prop,time){if(this.k){this.getValue();}var shapePath=this.v;if(time!==undefined){shapePath=this.getValueAtTime(time,0);}var i,len=shapePath._length;var vertices=shapePath[prop];var points=shapePath.v;var arr=createSizedArray(len);for(i=0;i<len;i+=1){if(prop==='i'||prop==='o'){arr[i]=[vertices[i][0]-points[i][0],vertices[i][1]-points[i][1]];}else{arr[i]=[vertices[i][0],vertices[i][1]];}}return arr;},points:function points(time){return this.vertices('v',time);},inTangents:function inTangents(time){return this.vertices('i',time);},outTangents:function outTangents(time){return this.vertices('o',time);},isClosed:function isClosed(){return this.v.c;},pointOnPath:function pointOnPath(perc,time){var shapePath=this.v;if(time!==undefined){shapePath=this.getValueAtTime(time,0);}if(!this._segmentsLength){this._segmentsLength=bez.getSegmentsLength(shapePath);}var segmentsLength=this._segmentsLength;var lengths=segmentsLength.lengths;var lengthPos=segmentsLength.totalLength*perc;var i=0,len=lengths.length;var j=0,jLen;var accumulatedLength=0,pt;while(i<len){if(accumulatedLength+lengths[i].addedLength>lengthPos){var initIndex=i;var endIndex=shapePath.c&&i===len-1?0:i+1;var segmentPerc=(lengthPos-accumulatedLength)/lengths[i].addedLength;pt=bez.getPointInSegment(shapePath.v[initIndex],shapePath.v[endIndex],shapePath.o[initIndex],shapePath.i[endIndex],segmentPerc,lengths[i]);break;}else{accumulatedLength+=lengths[i].addedLength;}i+=1;}if(!pt){pt=shapePath.c?[shapePath.v[0][0],shapePath.v[0][1]]:[shapePath.v[shapePath._length-1][0],shapePath.v[shapePath._length-1][1]];}return pt;},vectorOnPath:function vectorOnPath(perc,time,vectorType){//perc doesn't use triple equality because it can be a Number object as well as a primitive.
perc=perc==1?this.v.c?0:0.999:perc;var pt1=this.pointOnPath(perc,time);var pt2=this.pointOnPath(perc+0.001,time);var xLength=pt2[0]-pt1[0];var yLength=pt2[1]-pt1[1];var magnitude=Math.sqrt(Math.pow(xLength,2)+Math.pow(yLength,2));if(magnitude===0){return[0,0];}var unitVector=vectorType==='tangent'?[xLength/magnitude,yLength/magnitude]:[-yLength/magnitude,xLength/magnitude];return unitVector;},tangentOnPath:function tangentOnPath(perc,time){return this.vectorOnPath(perc,time,'tangent');},normalOnPath:function normalOnPath(perc,time){return this.vectorOnPath(perc,time,'normal');},setGroupProperty:expressionHelpers.setGroupProperty,getValueAtTime:expressionHelpers.getStaticValueAtTime};extendPrototype([ShapeExpressions],ShapePropertyConstructorFunction);extendPrototype([ShapeExpressions],KeyframedShapePropertyConstructorFunction);KeyframedShapePropertyConstructorFunction.prototype.getValueAtTime=getShapeValueAtTime;KeyframedShapePropertyConstructorFunction.prototype.initiateExpression=ExpressionManager.initiateExpression;var propertyGetShapeProp=ShapePropertyFactory.getShapeProp;ShapePropertyFactory.getShapeProp=function(elem,data,type,arr,trims){var prop=propertyGetShapeProp(elem,data,type,arr,trims);prop.propertyIndex=data.ix;prop.lock=false;if(type===3){expressionHelpers.searchExpressions(elem,data.pt,prop);}else if(type===4){expressionHelpers.searchExpressions(elem,data.ks,prop);}if(prop.k){elem.addDynamicProperty(prop);}return prop;};})();(function addDecorator(){function searchExpressions(){if(this.data.d.x){this.calculateExpression=ExpressionManager.initiateExpression.bind(this)(this.elem,this.data.d,this);this.addEffect(this.getExpressionValue.bind(this));return true;}}TextProperty.prototype.getExpressionValue=function(currentValue,text){var newValue=this.calculateExpression(text);if(currentValue.t!==newValue){var newData={};this.copyData(newData,currentValue);newData.t=newValue.toString();newData.__complete=false;return newData;}return currentValue;};TextProperty.prototype.searchProperty=function(){var isKeyframed=this.searchKeyframes();var hasExpressions=this.searchExpressions();this.kf=isKeyframed||hasExpressions;return this.kf;};TextProperty.prototype.searchExpressions=searchExpressions;})();var ShapeExpressionInterface=function(){function iterateElements(shapes,view,propertyGroup){var arr=[];var i,len=shapes?shapes.length:0;for(i=0;i<len;i+=1){if(shapes[i].ty=='gr'){arr.push(groupInterfaceFactory(shapes[i],view[i],propertyGroup));}else if(shapes[i].ty=='fl'){arr.push(fillInterfaceFactory(shapes[i],view[i],propertyGroup));}else if(shapes[i].ty=='st'){arr.push(strokeInterfaceFactory(shapes[i],view[i],propertyGroup));}else if(shapes[i].ty=='tm'){arr.push(trimInterfaceFactory(shapes[i],view[i],propertyGroup));}else if(shapes[i].ty=='tr'){//arr.push(transformInterfaceFactory(shapes[i],view[i],propertyGroup));
}else if(shapes[i].ty=='el'){arr.push(ellipseInterfaceFactory(shapes[i],view[i],propertyGroup));}else if(shapes[i].ty=='sr'){arr.push(starInterfaceFactory(shapes[i],view[i],propertyGroup));}else if(shapes[i].ty=='sh'){arr.push(pathInterfaceFactory(shapes[i],view[i],propertyGroup));}else if(shapes[i].ty=='rc'){arr.push(rectInterfaceFactory(shapes[i],view[i],propertyGroup));}else if(shapes[i].ty=='rd'){arr.push(roundedInterfaceFactory(shapes[i],view[i],propertyGroup));}else if(shapes[i].ty=='rp'){arr.push(repeaterInterfaceFactory(shapes[i],view[i],propertyGroup));}}return arr;}function contentsInterfaceFactory(shape,view,propertyGroup){var interfaces;var interfaceFunction=function _interfaceFunction(value){var i=0,len=interfaces.length;while(i<len){if(interfaces[i]._name===value||interfaces[i].mn===value||interfaces[i].propertyIndex===value||interfaces[i].ix===value||interfaces[i].ind===value){return interfaces[i];}i+=1;}if(typeof value==='number'){return interfaces[value-1];}};interfaceFunction.propertyGroup=function(val){if(val===1){return interfaceFunction;}else{return propertyGroup(val-1);}};interfaces=iterateElements(shape.it,view.it,interfaceFunction.propertyGroup);interfaceFunction.numProperties=interfaces.length;interfaceFunction.propertyIndex=shape.cix;interfaceFunction._name=shape.nm;return interfaceFunction;}function groupInterfaceFactory(shape,view,propertyGroup){var interfaceFunction=function _interfaceFunction(value){switch(value){case'ADBE Vectors Group':case'Contents':case 2:return interfaceFunction.content;//Not necessary for now. Keeping them here in case a new case appears
//case 'ADBE Vector Transform Group':
//case 3:
default:return interfaceFunction.transform;}};interfaceFunction.propertyGroup=function(val){if(val===1){return interfaceFunction;}else{return propertyGroup(val-1);}};var content=contentsInterfaceFactory(shape,view,interfaceFunction.propertyGroup);var transformInterface=transformInterfaceFactory(shape.it[shape.it.length-1],view.it[view.it.length-1],interfaceFunction.propertyGroup);interfaceFunction.content=content;interfaceFunction.transform=transformInterface;Object.defineProperty(interfaceFunction,'_name',{get:function get(){return shape.nm;}});//interfaceFunction.content = interfaceFunction;
interfaceFunction.numProperties=shape.np;interfaceFunction.propertyIndex=shape.ix;interfaceFunction.nm=shape.nm;interfaceFunction.mn=shape.mn;return interfaceFunction;}function fillInterfaceFactory(shape,view,propertyGroup){function interfaceFunction(val){if(val==='Color'||val==='color'){return interfaceFunction.color;}else if(val==='Opacity'||val==='opacity'){return interfaceFunction.opacity;}}Object.defineProperties(interfaceFunction,{'color':{get:ExpressionPropertyInterface(view.c)},'opacity':{get:ExpressionPropertyInterface(view.o)},'_name':{value:shape.nm},'mn':{value:shape.mn}});view.c.setGroupProperty(propertyGroup);view.o.setGroupProperty(propertyGroup);return interfaceFunction;}function strokeInterfaceFactory(shape,view,propertyGroup){function _propertyGroup(val){if(val===1){return ob;}else{return propertyGroup(val-1);}}function _dashPropertyGroup(val){if(val===1){return dashOb;}else{return _propertyGroup(val-1);}}function addPropertyToDashOb(i){Object.defineProperty(dashOb,shape.d[i].nm,{get:ExpressionPropertyInterface(view.d.dataProps[i].p)});}var i,len=shape.d?shape.d.length:0;var dashOb={};for(i=0;i<len;i+=1){addPropertyToDashOb(i);view.d.dataProps[i].p.setGroupProperty(_dashPropertyGroup);}function interfaceFunction(val){if(val==='Color'||val==='color'){return interfaceFunction.color;}else if(val==='Opacity'||val==='opacity'){return interfaceFunction.opacity;}else if(val==='Stroke Width'||val==='stroke width'){return interfaceFunction.strokeWidth;}}Object.defineProperties(interfaceFunction,{'color':{get:ExpressionPropertyInterface(view.c)},'opacity':{get:ExpressionPropertyInterface(view.o)},'strokeWidth':{get:ExpressionPropertyInterface(view.w)},'dash':{get:function get(){return dashOb;}},'_name':{value:shape.nm},'mn':{value:shape.mn}});view.c.setGroupProperty(_propertyGroup);view.o.setGroupProperty(_propertyGroup);view.w.setGroupProperty(_propertyGroup);return interfaceFunction;}function trimInterfaceFactory(shape,view,propertyGroup){function _propertyGroup(val){if(val==1){return interfaceFunction;}else{return propertyGroup(--val);}}interfaceFunction.propertyIndex=shape.ix;view.s.setGroupProperty(_propertyGroup);view.e.setGroupProperty(_propertyGroup);view.o.setGroupProperty(_propertyGroup);function interfaceFunction(val){if(val===shape.e.ix||val==='End'||val==='end'){return interfaceFunction.end;}if(val===shape.s.ix){return interfaceFunction.start;}if(val===shape.o.ix){return interfaceFunction.offset;}}interfaceFunction.propertyIndex=shape.ix;interfaceFunction.propertyGroup=propertyGroup;Object.defineProperties(interfaceFunction,{'start':{get:ExpressionPropertyInterface(view.s)},'end':{get:ExpressionPropertyInterface(view.e)},'offset':{get:ExpressionPropertyInterface(view.o)},'_name':{value:shape.nm}});interfaceFunction.mn=shape.mn;return interfaceFunction;}function transformInterfaceFactory(shape,view,propertyGroup){function _propertyGroup(val){if(val==1){return interfaceFunction;}else{return propertyGroup(--val);}}view.transform.mProps.o.setGroupProperty(_propertyGroup);view.transform.mProps.p.setGroupProperty(_propertyGroup);view.transform.mProps.a.setGroupProperty(_propertyGroup);view.transform.mProps.s.setGroupProperty(_propertyGroup);view.transform.mProps.r.setGroupProperty(_propertyGroup);if(view.transform.mProps.sk){view.transform.mProps.sk.setGroupProperty(_propertyGroup);view.transform.mProps.sa.setGroupProperty(_propertyGroup);}view.transform.op.setGroupProperty(_propertyGroup);function interfaceFunction(value){if(shape.a.ix===value||value==='Anchor Point'){return interfaceFunction.anchorPoint;}if(shape.o.ix===value||value==='Opacity'){return interfaceFunction.opacity;}if(shape.p.ix===value||value==='Position'){return interfaceFunction.position;}if(shape.r.ix===value||value==='Rotation'||value==='ADBE Vector Rotation'){return interfaceFunction.rotation;}if(shape.s.ix===value||value==='Scale'){return interfaceFunction.scale;}if(shape.sk&&shape.sk.ix===value||value==='Skew'){return interfaceFunction.skew;}if(shape.sa&&shape.sa.ix===value||value==='Skew Axis'){return interfaceFunction.skewAxis;}}Object.defineProperties(interfaceFunction,{'opacity':{get:ExpressionPropertyInterface(view.transform.mProps.o)},'position':{get:ExpressionPropertyInterface(view.transform.mProps.p)},'anchorPoint':{get:ExpressionPropertyInterface(view.transform.mProps.a)},'scale':{get:ExpressionPropertyInterface(view.transform.mProps.s)},'rotation':{get:ExpressionPropertyInterface(view.transform.mProps.r)},'skew':{get:ExpressionPropertyInterface(view.transform.mProps.sk)},'skewAxis':{get:ExpressionPropertyInterface(view.transform.mProps.sa)},'_name':{value:shape.nm}});interfaceFunction.ty='tr';interfaceFunction.mn=shape.mn;interfaceFunction.propertyGroup=propertyGroup;return interfaceFunction;}function ellipseInterfaceFactory(shape,view,propertyGroup){function _propertyGroup(val){if(val==1){return interfaceFunction;}else{return propertyGroup(--val);}}interfaceFunction.propertyIndex=shape.ix;var prop=view.sh.ty==='tm'?view.sh.prop:view.sh;prop.s.setGroupProperty(_propertyGroup);prop.p.setGroupProperty(_propertyGroup);function interfaceFunction(value){if(shape.p.ix===value){return interfaceFunction.position;}if(shape.s.ix===value){return interfaceFunction.size;}}Object.defineProperties(interfaceFunction,{'size':{get:ExpressionPropertyInterface(prop.s)},'position':{get:ExpressionPropertyInterface(prop.p)},'_name':{value:shape.nm}});interfaceFunction.mn=shape.mn;return interfaceFunction;}function starInterfaceFactory(shape,view,propertyGroup){function _propertyGroup(val){if(val==1){return interfaceFunction;}else{return propertyGroup(--val);}}var prop=view.sh.ty==='tm'?view.sh.prop:view.sh;interfaceFunction.propertyIndex=shape.ix;prop.or.setGroupProperty(_propertyGroup);prop.os.setGroupProperty(_propertyGroup);prop.pt.setGroupProperty(_propertyGroup);prop.p.setGroupProperty(_propertyGroup);prop.r.setGroupProperty(_propertyGroup);if(shape.ir){prop.ir.setGroupProperty(_propertyGroup);prop.is.setGroupProperty(_propertyGroup);}function interfaceFunction(value){if(shape.p.ix===value){return interfaceFunction.position;}if(shape.r.ix===value){return interfaceFunction.rotation;}if(shape.pt.ix===value){return interfaceFunction.points;}if(shape.or.ix===value||'ADBE Vector Star Outer Radius'===value){return interfaceFunction.outerRadius;}if(shape.os.ix===value){return interfaceFunction.outerRoundness;}if(shape.ir&&(shape.ir.ix===value||'ADBE Vector Star Inner Radius'===value)){return interfaceFunction.innerRadius;}if(shape.is&&shape.is.ix===value){return interfaceFunction.innerRoundness;}}Object.defineProperties(interfaceFunction,{'position':{get:ExpressionPropertyInterface(prop.p)},'rotation':{get:ExpressionPropertyInterface(prop.r)},'points':{get:ExpressionPropertyInterface(prop.pt)},'outerRadius':{get:ExpressionPropertyInterface(prop.or)},'outerRoundness':{get:ExpressionPropertyInterface(prop.os)},'innerRadius':{get:ExpressionPropertyInterface(prop.ir)},'innerRoundness':{get:ExpressionPropertyInterface(prop.is)},'_name':{value:shape.nm}});interfaceFunction.mn=shape.mn;return interfaceFunction;}function rectInterfaceFactory(shape,view,propertyGroup){function _propertyGroup(val){if(val==1){return interfaceFunction;}else{return propertyGroup(--val);}}var prop=view.sh.ty==='tm'?view.sh.prop:view.sh;interfaceFunction.propertyIndex=shape.ix;prop.p.setGroupProperty(_propertyGroup);prop.s.setGroupProperty(_propertyGroup);prop.r.setGroupProperty(_propertyGroup);function interfaceFunction(value){if(shape.p.ix===value){return interfaceFunction.position;}if(shape.r.ix===value){return interfaceFunction.roundness;}if(shape.s.ix===value||value==='Size'||value==='ADBE Vector Rect Size'){return interfaceFunction.size;}}Object.defineProperties(interfaceFunction,{'position':{get:ExpressionPropertyInterface(prop.p)},'roundness':{get:ExpressionPropertyInterface(prop.r)},'size':{get:ExpressionPropertyInterface(prop.s)},'_name':{value:shape.nm}});interfaceFunction.mn=shape.mn;return interfaceFunction;}function roundedInterfaceFactory(shape,view,propertyGroup){function _propertyGroup(val){if(val==1){return interfaceFunction;}else{return propertyGroup(--val);}}var prop=view;interfaceFunction.propertyIndex=shape.ix;prop.rd.setGroupProperty(_propertyGroup);function interfaceFunction(value){if(shape.r.ix===value||'Round Corners 1'===value){return interfaceFunction.radius;}}Object.defineProperties(interfaceFunction,{'radius':{get:ExpressionPropertyInterface(prop.rd)},'_name':{value:shape.nm}});interfaceFunction.mn=shape.mn;return interfaceFunction;}function repeaterInterfaceFactory(shape,view,propertyGroup){function _propertyGroup(val){if(val==1){return interfaceFunction;}else{return propertyGroup(--val);}}var prop=view;interfaceFunction.propertyIndex=shape.ix;prop.c.setGroupProperty(_propertyGroup);prop.o.setGroupProperty(_propertyGroup);function interfaceFunction(value){if(shape.c.ix===value||'Copies'===value){return interfaceFunction.copies;}else if(shape.o.ix===value||'Offset'===value){return interfaceFunction.offset;}}Object.defineProperties(interfaceFunction,{'copies':{get:ExpressionPropertyInterface(prop.c)},'offset':{get:ExpressionPropertyInterface(prop.o)},'_name':{value:shape.nm}});interfaceFunction.mn=shape.mn;return interfaceFunction;}function pathInterfaceFactory(shape,view,propertyGroup){var prop=view.sh;function _propertyGroup(val){if(val==1){return interfaceFunction;}else{return propertyGroup(--val);}}prop.setGroupProperty(_propertyGroup);function interfaceFunction(val){if(val==='Shape'||val==='shape'||val==='Path'||val==='path'||val==='ADBE Vector Shape'||val===2){return interfaceFunction.path;}}Object.defineProperties(interfaceFunction,{'path':{get:function get(){if(prop.k){prop.getValue();}return prop;}},'shape':{get:function get(){if(prop.k){prop.getValue();}return prop;}},'_name':{value:shape.nm},'ix':{value:shape.ix},'propertyIndex':{value:shape.ix},'mn':{value:shape.mn}});return interfaceFunction;}return function(shapes,view,propertyGroup){var interfaces;function _interfaceFunction(value){if(typeof value==='number'){return interfaces[value-1];}else{var i=0,len=interfaces.length;while(i<len){if(interfaces[i]._name===value){return interfaces[i];}i+=1;}}}_interfaceFunction.propertyGroup=propertyGroup;interfaces=iterateElements(shapes,view,_interfaceFunction);_interfaceFunction.numProperties=interfaces.length;return _interfaceFunction;};}();var TextExpressionInterface=function(){return function(elem){var _prevValue,_sourceText;function _thisLayerFunction(){}Object.defineProperty(_thisLayerFunction,"sourceText",{get:function get(){elem.textProperty.getValue();var stringValue=elem.textProperty.currentData.t;if(stringValue!==_prevValue){elem.textProperty.currentData.t=_prevValue;_sourceText=new String(stringValue);//If stringValue is an empty string, eval returns undefined, so it has to be returned as a String primitive
_sourceText.value=stringValue?stringValue:new String(stringValue);}return _sourceText;}});return _thisLayerFunction;};}();var LayerExpressionInterface=function(){function toWorld(arr,time){var toWorldMat=new Matrix();toWorldMat.reset();var transformMat;if(time){//Todo implement value at time on transform properties
//transformMat = this._elem.finalTransform.mProp.getValueAtTime(time);
transformMat=this._elem.finalTransform.mProp;}else{transformMat=this._elem.finalTransform.mProp;}transformMat.applyToMatrix(toWorldMat);if(this._elem.hierarchy&&this._elem.hierarchy.length){var i,len=this._elem.hierarchy.length;for(i=0;i<len;i+=1){this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(toWorldMat);}return toWorldMat.applyToPointArray(arr[0],arr[1],arr[2]||0);}return toWorldMat.applyToPointArray(arr[0],arr[1],arr[2]||0);}function fromWorld(arr,time){var toWorldMat=new Matrix();toWorldMat.reset();var transformMat;if(time){//Todo implement value at time on transform properties
//transformMat = this._elem.finalTransform.mProp.getValueAtTime(time);
transformMat=this._elem.finalTransform.mProp;}else{transformMat=this._elem.finalTransform.mProp;}transformMat.applyToMatrix(toWorldMat);if(this._elem.hierarchy&&this._elem.hierarchy.length){var i,len=this._elem.hierarchy.length;for(i=0;i<len;i+=1){this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(toWorldMat);}return toWorldMat.inversePoint(arr);}return toWorldMat.inversePoint(arr);}function fromComp(arr){var toWorldMat=new Matrix();toWorldMat.reset();this._elem.finalTransform.mProp.applyToMatrix(toWorldMat);if(this._elem.hierarchy&&this._elem.hierarchy.length){var i,len=this._elem.hierarchy.length;for(i=0;i<len;i+=1){this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(toWorldMat);}return toWorldMat.inversePoint(arr);}return toWorldMat.inversePoint(arr);}function sampleImage(){return[1,1,1,1];}return function(elem){var transformInterface;function _registerMaskInterface(maskManager){_thisLayerFunction.mask=new MaskManagerInterface(maskManager,elem);}function _registerEffectsInterface(effects){_thisLayerFunction.effect=effects;}function _thisLayerFunction(name){switch(name){case"ADBE Root Vectors Group":case"Contents":case 2:return _thisLayerFunction.shapeInterface;case 1:case 6:case"Transform":case"transform":case"ADBE Transform Group":return transformInterface;case 4:case"ADBE Effect Parade":case"effects":case"Effects":return _thisLayerFunction.effect;}}_thisLayerFunction.toWorld=toWorld;_thisLayerFunction.fromWorld=fromWorld;_thisLayerFunction.toComp=toWorld;_thisLayerFunction.fromComp=fromComp;_thisLayerFunction.sampleImage=sampleImage;_thisLayerFunction.sourceRectAtTime=elem.sourceRectAtTime.bind(elem);_thisLayerFunction._elem=elem;transformInterface=TransformExpressionInterface(elem.finalTransform.mProp);var anchorPointDescriptor=getDescriptor(transformInterface,'anchorPoint');Object.defineProperties(_thisLayerFunction,{hasParent:{get:function get(){return elem.hierarchy.length;}},parent:{get:function get(){return elem.hierarchy[0].layerInterface;}},rotation:getDescriptor(transformInterface,'rotation'),scale:getDescriptor(transformInterface,'scale'),position:getDescriptor(transformInterface,'position'),opacity:getDescriptor(transformInterface,'opacity'),anchorPoint:anchorPointDescriptor,anchor_point:anchorPointDescriptor,transform:{get:function get(){return transformInterface;}},active:{get:function get(){return elem.isInRange;}}});_thisLayerFunction.startTime=elem.data.st;_thisLayerFunction.index=elem.data.ind;_thisLayerFunction.source=elem.data.refId;_thisLayerFunction.height=elem.data.ty===0?elem.data.h:100;_thisLayerFunction.width=elem.data.ty===0?elem.data.w:100;_thisLayerFunction.inPoint=elem.data.ip/elem.comp.globalData.frameRate;_thisLayerFunction.outPoint=elem.data.op/elem.comp.globalData.frameRate;_thisLayerFunction._name=elem.data.nm;_thisLayerFunction.registerMaskInterface=_registerMaskInterface;_thisLayerFunction.registerEffectsInterface=_registerEffectsInterface;return _thisLayerFunction;};}();var CompExpressionInterface=function(){return function(comp){function _thisLayerFunction(name){var i=0,len=comp.layers.length;while(i<len){if(comp.layers[i].nm===name||comp.layers[i].ind===name){return comp.elements[i].layerInterface;}i+=1;}return null;//return {active:false};
}Object.defineProperty(_thisLayerFunction,"_name",{value:comp.data.nm});_thisLayerFunction.layer=_thisLayerFunction;_thisLayerFunction.pixelAspect=1;_thisLayerFunction.height=comp.data.h||comp.globalData.compSize.h;_thisLayerFunction.width=comp.data.w||comp.globalData.compSize.w;_thisLayerFunction.pixelAspect=1;_thisLayerFunction.frameDuration=1/comp.globalData.frameRate;_thisLayerFunction.displayStartTime=0;_thisLayerFunction.numLayers=comp.layers.length;return _thisLayerFunction;};}();var TransformExpressionInterface=function(){return function(transform){function _thisFunction(name){switch(name){case"scale":case"Scale":case"ADBE Scale":case 6:return _thisFunction.scale;case"rotation":case"Rotation":case"ADBE Rotation":case"ADBE Rotate Z":case 10:return _thisFunction.rotation;case"ADBE Rotate X":return _thisFunction.xRotation;case"ADBE Rotate Y":return _thisFunction.yRotation;case"position":case"Position":case"ADBE Position":case 2:return _thisFunction.position;case'ADBE Position_0':return _thisFunction.xPosition;case'ADBE Position_1':return _thisFunction.yPosition;case'ADBE Position_2':return _thisFunction.zPosition;case"anchorPoint":case"AnchorPoint":case"Anchor Point":case"ADBE AnchorPoint":case 1:return _thisFunction.anchorPoint;case"opacity":case"Opacity":case 11:return _thisFunction.opacity;}}Object.defineProperty(_thisFunction,"rotation",{get:ExpressionPropertyInterface(transform.r||transform.rz)});Object.defineProperty(_thisFunction,"zRotation",{get:ExpressionPropertyInterface(transform.rz||transform.r)});Object.defineProperty(_thisFunction,"xRotation",{get:ExpressionPropertyInterface(transform.rx)});Object.defineProperty(_thisFunction,"yRotation",{get:ExpressionPropertyInterface(transform.ry)});Object.defineProperty(_thisFunction,"scale",{get:ExpressionPropertyInterface(transform.s)});if(transform.p){var _transformFactory=ExpressionPropertyInterface(transform.p);}Object.defineProperty(_thisFunction,"position",{get:function get(){if(transform.p){return _transformFactory();}else{return[transform.px.v,transform.py.v,transform.pz?transform.pz.v:0];}}});Object.defineProperty(_thisFunction,"xPosition",{get:ExpressionPropertyInterface(transform.px)});Object.defineProperty(_thisFunction,"yPosition",{get:ExpressionPropertyInterface(transform.py)});Object.defineProperty(_thisFunction,"zPosition",{get:ExpressionPropertyInterface(transform.pz)});Object.defineProperty(_thisFunction,"anchorPoint",{get:ExpressionPropertyInterface(transform.a)});Object.defineProperty(_thisFunction,"opacity",{get:ExpressionPropertyInterface(transform.o)});Object.defineProperty(_thisFunction,"skew",{get:ExpressionPropertyInterface(transform.sk)});Object.defineProperty(_thisFunction,"skewAxis",{get:ExpressionPropertyInterface(transform.sa)});Object.defineProperty(_thisFunction,"orientation",{get:ExpressionPropertyInterface(transform.or)});return _thisFunction;};}();var ProjectInterface=function(){function registerComposition(comp){this.compositions.push(comp);}return function(){function _thisProjectFunction(name){var i=0,len=this.compositions.length;while(i<len){if(this.compositions[i].data&&this.compositions[i].data.nm===name){if(this.compositions[i].prepareFrame&&this.compositions[i].data.xt){this.compositions[i].prepareFrame(this.currentFrame);}return this.compositions[i].compInterface;}i+=1;}}_thisProjectFunction.compositions=[];_thisProjectFunction.currentFrame=0;_thisProjectFunction.registerComposition=registerComposition;return _thisProjectFunction;};}();var EffectsExpressionInterface=function(){var ob={createEffectsInterface:createEffectsInterface};function createEffectsInterface(elem,propertyGroup){if(elem.effectsManager){var effectElements=[];var effectsData=elem.data.ef;var i,len=elem.effectsManager.effectElements.length;for(i=0;i<len;i+=1){effectElements.push(createGroupInterface(effectsData[i],elem.effectsManager.effectElements[i],propertyGroup,elem));}return function(name){var effects=elem.data.ef||[],i=0,len=effects.length;while(i<len){if(name===effects[i].nm||name===effects[i].mn||name===effects[i].ix){return effectElements[i];}i+=1;}};}}function createGroupInterface(data,elements,propertyGroup,elem){var effectElements=[];var i,len=data.ef.length;for(i=0;i<len;i+=1){if(data.ef[i].ty===5){effectElements.push(createGroupInterface(data.ef[i],elements.effectElements[i],elements.effectElements[i].propertyGroup,elem));}else{effectElements.push(createValueInterface(elements.effectElements[i],data.ef[i].ty,elem,_propertyGroup));}}function _propertyGroup(val){if(val===1){return groupInterface;}else{return propertyGroup(val-1);}}var groupInterface=function groupInterface(name){var effects=data.ef,i=0,len=effects.length;while(i<len){if(name===effects[i].nm||name===effects[i].mn||name===effects[i].ix){if(effects[i].ty===5){return effectElements[i];}else{return effectElements[i]();}}i+=1;}return effectElements[0]();};groupInterface.propertyGroup=_propertyGroup;if(data.mn==='ADBE Color Control'){Object.defineProperty(groupInterface,'color',{get:function get(){return effectElements[0]();}});}Object.defineProperty(groupInterface,'numProperties',{get:function get(){return data.np;}});groupInterface.active=groupInterface.enabled=data.en!==0;return groupInterface;}function createValueInterface(element,type,elem,propertyGroup){var expressionProperty=ExpressionPropertyInterface(element.p);function interfaceFunction(){if(type===10){return elem.comp.compInterface(element.p.v);}return expressionProperty();}if(element.p.setGroupProperty){element.p.setGroupProperty(propertyGroup);}return interfaceFunction;}return ob;}();var MaskManagerInterface=function(){function MaskInterface(mask,data){this._mask=mask;this._data=data;}Object.defineProperty(MaskInterface.prototype,'maskPath',{get:function get(){if(this._mask.prop.k){this._mask.prop.getValue();}return this._mask.prop;}});Object.defineProperty(MaskInterface.prototype,'maskOpacity',{get:function get(){if(this._mask.op.k){this._mask.op.getValue();}return this._mask.op.v*100;}});var MaskManager=function MaskManager(maskManager,elem){var _maskManager=maskManager;var _elem=elem;var _masksInterfaces=createSizedArray(maskManager.viewData.length);var i,len=maskManager.viewData.length;for(i=0;i<len;i+=1){_masksInterfaces[i]=new MaskInterface(maskManager.viewData[i],maskManager.masksProperties[i]);}var maskFunction=function maskFunction(name){i=0;while(i<len){if(maskManager.masksProperties[i].nm===name){return _masksInterfaces[i];}i+=1;}};return maskFunction;};return MaskManager;}();var ExpressionPropertyInterface=function(){var defaultUnidimensionalValue={pv:0,v:0,mult:1};var defaultMultidimensionalValue={pv:[0,0,0],v:[0,0,0],mult:1};function completeProperty(expressionValue,property,type){Object.defineProperty(expressionValue,'velocity',{get:function get(){return property.getVelocityAtTime(property.comp.currentFrame);}});expressionValue.numKeys=property.keyframes?property.keyframes.length:0;expressionValue.key=function(pos){if(!expressionValue.numKeys){return 0;}else{var value='';if('s'in property.keyframes[pos-1]){value=property.keyframes[pos-1].s;}else if('e'in property.keyframes[pos-2]){value=property.keyframes[pos-2].e;}else{value=property.keyframes[pos-2].s;}var valueProp=type==='unidimensional'?new Number(value):Object.assign({},value);valueProp.time=property.keyframes[pos-1].t/property.elem.comp.globalData.frameRate;return valueProp;}};expressionValue.valueAtTime=property.getValueAtTime;expressionValue.speedAtTime=property.getSpeedAtTime;expressionValue.velocityAtTime=property.getVelocityAtTime;expressionValue.propertyGroup=property.propertyGroup;}function UnidimensionalPropertyInterface(property){if(!property||!('pv'in property)){property=defaultUnidimensionalValue;}var mult=1/property.mult;var val=property.pv*mult;var expressionValue=new Number(val);expressionValue.value=val;completeProperty(expressionValue,property,'unidimensional');return function(){if(property.k){property.getValue();}val=property.v*mult;if(expressionValue.value!==val){expressionValue=new Number(val);expressionValue.value=val;completeProperty(expressionValue,property,'unidimensional');}return expressionValue;};}function MultidimensionalPropertyInterface(property){if(!property||!('pv'in property)){property=defaultMultidimensionalValue;}var mult=1/property.mult;var len=property.pv.length;var expressionValue=createTypedArray('float32',len);var arrValue=createTypedArray('float32',len);expressionValue.value=arrValue;completeProperty(expressionValue,property,'multidimensional');return function(){if(property.k){property.getValue();}for(var i=0;i<len;i+=1){expressionValue[i]=arrValue[i]=property.v[i]*mult;}return expressionValue;};}//TODO: try to avoid using this getter
function defaultGetter(){return defaultUnidimensionalValue;}return function(property){if(!property){return defaultGetter;}else if(property.propType==='unidimensional'){return UnidimensionalPropertyInterface(property);}else{return MultidimensionalPropertyInterface(property);}};}();(function(){var TextExpressionSelectorProp=function(){function getValueProxy(index,total){this.textIndex=index+1;this.textTotal=total;this.v=this.getValue()*this.mult;return this.v;}return function TextExpressionSelectorProp(elem,data){this.pv=1;this.comp=elem.comp;this.elem=elem;this.mult=0.01;this.propType='textSelector';this.textTotal=data.totalChars;this.selectorValue=100;this.lastValue=[1,1,1];this.k=true;this.x=true;this.getValue=ExpressionManager.initiateExpression.bind(this)(elem,data,this);this.getMult=getValueProxy;this.getVelocityAtTime=expressionHelpers.getVelocityAtTime;if(this.kf){this.getValueAtTime=expressionHelpers.getValueAtTime.bind(this);}else{this.getValueAtTime=expressionHelpers.getStaticValueAtTime.bind(this);}this.setGroupProperty=expressionHelpers.setGroupProperty;};}();var propertyGetTextProp=TextSelectorProp.getTextSelectorProp;TextSelectorProp.getTextSelectorProp=function(elem,data,arr){if(data.t===1){return new TextExpressionSelectorProp(elem,data,arr);}else{return propertyGetTextProp(elem,data,arr);}};})();function SliderEffect(data,elem,container){this.p=PropertyFactory.getProp(elem,data.v,0,0,container);}function AngleEffect(data,elem,container){this.p=PropertyFactory.getProp(elem,data.v,0,0,container);}function ColorEffect(data,elem,container){this.p=PropertyFactory.getProp(elem,data.v,1,0,container);}function PointEffect(data,elem,container){this.p=PropertyFactory.getProp(elem,data.v,1,0,container);}function LayerIndexEffect(data,elem,container){this.p=PropertyFactory.getProp(elem,data.v,0,0,container);}function MaskIndexEffect(data,elem,container){this.p=PropertyFactory.getProp(elem,data.v,0,0,container);}function CheckboxEffect(data,elem,container){this.p=PropertyFactory.getProp(elem,data.v,0,0,container);}function NoValueEffect(){this.p={};}function EffectsManager(){}function EffectsManager(data,element){var effects=data.ef||[];this.effectElements=[];var i,len=effects.length;var effectItem;for(i=0;i<len;i++){effectItem=new GroupEffect(effects[i],element);this.effectElements.push(effectItem);}}function GroupEffect(data,element){this.init(data,element);}extendPrototype([DynamicPropertyContainer],GroupEffect);GroupEffect.prototype.getValue=GroupEffect.prototype.iterateDynamicProperties;GroupEffect.prototype.init=function(data,element){this.data=data;this.effectElements=[];this.initDynamicPropertyContainer(element);var i,len=this.data.ef.length;var eff,effects=this.data.ef;for(i=0;i<len;i+=1){eff=null;switch(effects[i].ty){case 0:eff=new SliderEffect(effects[i],element,this);break;case 1:eff=new AngleEffect(effects[i],element,this);break;case 2:eff=new ColorEffect(effects[i],element,this);break;case 3:eff=new PointEffect(effects[i],element,this);break;case 4:case 7:eff=new CheckboxEffect(effects[i],element,this);break;case 10:eff=new LayerIndexEffect(effects[i],element,this);break;case 11:eff=new MaskIndexEffect(effects[i],element,this);break;case 5:eff=new EffectsManager(effects[i],element,this);break;//case 6:
default:eff=new NoValueEffect(effects[i],element,this);break;}if(eff){this.effectElements.push(eff);}}};var lottie={};var _isFrozen=false;function setLocationHref(href){locationHref=href;}function searchAnimations(){if(standalone===true){animationManager.searchAnimations(animationData,standalone,renderer);}else{animationManager.searchAnimations();}}function setSubframeRendering(flag){subframeEnabled=flag;}function loadAnimation(params){if(standalone===true){params.animationData=JSON.parse(animationData);}return animationManager.loadAnimation(params);}function setQuality(value){if(typeof value==='string'){switch(value){case'high':defaultCurveSegments=200;break;case'medium':defaultCurveSegments=50;break;case'low':defaultCurveSegments=10;break;}}else if(!isNaN(value)&&value>1){defaultCurveSegments=value;}if(defaultCurveSegments>=50){roundValues(false);}else{roundValues(true);}}function inBrowser(){return typeof navigator!=='undefined';}function installPlugin(type,plugin){if(type==='expressions'){expressionsPlugin=plugin;}}function getFactory(name){switch(name){case"propertyFactory":return PropertyFactory;case"shapePropertyFactory":return ShapePropertyFactory;case"matrix":return Matrix;}}lottie.play=animationManager.play;lottie.pause=animationManager.pause;lottie.setLocationHref=setLocationHref;lottie.togglePause=animationManager.togglePause;lottie.setSpeed=animationManager.setSpeed;lottie.setDirection=animationManager.setDirection;lottie.stop=animationManager.stop;lottie.searchAnimations=searchAnimations;lottie.registerAnimation=animationManager.registerAnimation;lottie.loadAnimation=loadAnimation;lottie.setSubframeRendering=setSubframeRendering;lottie.resize=animationManager.resize;//lottie.start = start;
lottie.goToAndStop=animationManager.goToAndStop;lottie.destroy=animationManager.destroy;lottie.setQuality=setQuality;lottie.inBrowser=inBrowser;lottie.installPlugin=installPlugin;lottie.freeze=animationManager.freeze;lottie.unfreeze=animationManager.unfreeze;lottie.getRegisteredAnimations=animationManager.getRegisteredAnimations;lottie.__getFactory=getFactory;lottie.version='5.7.0';function checkReady(){if(document.readyState==="complete"){clearInterval(readyStateCheckInterval);searchAnimations();}}function getQueryVariable(variable){var vars=queryString.split('&');for(var i=0;i<vars.length;i++){var pair=vars[i].split('=');if(decodeURIComponent(pair[0])==variable){return decodeURIComponent(pair[1]);}}}var standalone='__[STANDALONE]__';var animationData='__[ANIMATIONDATA]__';var renderer='';if(standalone){var scripts=document.getElementsByTagName('script');var index=scripts.length-1;var myScript=scripts[index]||{src:''};var queryString=myScript.src.replace(/^[^\?]+\??/,'');renderer=getQueryVariable('renderer');}var readyStateCheckInterval=setInterval(checkReady,100);return lottie;});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/js/modules/lottieUsage.js":
/*!***************************************!*\
  !*** ./src/js/modules/lottieUsage.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lottie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lottie */ "./src/js/modules/lottie.js");

lottie.loadAnimation({
  container: document.getElementById('divided-heart'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'img/eyeLogo.json'
});

/***/ }),

/***/ "./src/js/modules/workFlipCard.js":
/*!****************************************!*\
  !*** ./src/js/modules/workFlipCard.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__);



var workFlipCard = function workFlipCard() {
  var frontSide = document.querySelectorAll('.works__wrapper__card__flip__frontside'),
      backSide = document.querySelectorAll('.works__wrapper__card__flip__backside'),
      wrappers = document.querySelectorAll('.flip__wrapper'),
      more = document.querySelectorAll('.works__wrapper__card__flip__more'),
      back = document.querySelectorAll('.works__wrapper__card__flip__back');
  console.log(wrappers);
  more.forEach(function (item, i) {
    item.addEventListener('click', function () {
      frontSide[i].style.transform = 'rotateY(180deg)';
      wrappers[i].style.backgroundColor = 'black';
      backSide[i].style.transform = 'rotateY(360deg)';
    });
  });
  back.forEach(function (item, i) {
    item.addEventListener('click', function () {
      frontSide[i].style.transform = 'rotateY(0deg)';
      wrappers[i].style.backgroundColor = 'white';
      backSide[i].style.transform = 'rotateY(180deg)';
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (workFlipCard);

/***/ }),

/***/ "./src/js/modules/workSlider.js":
/*!**************************************!*\
  !*** ./src/js/modules/workSlider.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__);



var workSlider = function workSlider() {
  var cards = document.querySelectorAll('.works__wrapper__card__slider'),
      more = document.querySelectorAll('.works__wrapper__card__more'),
      back = document.querySelectorAll('.works__wrapper__card__back');
  more.forEach(function (item, i) {
    item.addEventListener('click', function () {
      cards[i].style.marginLeft = '-300px';
    });
  });
  back.forEach(function (item, i) {
    item.addEventListener('click', function () {
      cards[i].style.marginLeft = '0';
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (workSlider);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map