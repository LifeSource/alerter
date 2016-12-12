/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _alert = __webpack_require__(6);
	
	var _alert2 = _interopRequireDefault(_alert);
	
	var _toast = __webpack_require__(7);
	
	var _toast2 = _interopRequireDefault(_toast);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var app = document.getElementById('app');
	
	var alertTypes = document.getElementsByClassName('alert');
	
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;
	
	try {
	  for (var _iterator = alertTypes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	    var item = _step.value;
	
	    item.addEventListener('click', showAlert, false);
	  }
	} catch (err) {
	  _didIteratorError = true;
	  _iteratorError = err;
	} finally {
	  try {
	    if (!_iteratorNormalCompletion && _iterator.return) {
	      _iterator.return();
	    }
	  } finally {
	    if (_didIteratorError) {
	      throw _iteratorError;
	    }
	  }
	}
	
	function showAlert(event) {
	  var toast = new _toast2.default();
	  var alertType = event.srcElement.classList[event.srcElement.classList.length - 1];
	
	  switch (alertType.toLowerCase()) {
	    case 'info':
	      toast.createToast({ type: alertType, message: 'Info message - alert wins fatality!', duration: 3000 });
	      toast.showToast();
	      break;
	    case 'warning':
	      toast.createToast({ type: alertType, message: 'Warning message - biohazard has been activated!', duration: 3000 });
	      toast.showToast();
	      break;
	    case 'error':
	      toast.createToast({ type: alertType, message: 'Error message - something terrible happened!', duration: 3000 });
	      toast.showToast();
	      break;
	    case 'success':
	      toast.createToast({ type: alertType, message: 'Success message - yipeee!!!', duration: 3000 });
	      toast.showToast();
	      break;
	    default:
	      break;
	  }
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Alert = function () {
	  function Alert() {
	    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'info';
	    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	
	    _classCallCheck(this, Alert);
	
	    this.type = type;
	    this.message = message;
	  }
	
	  _createClass(Alert, [{
	    key: 'getType',
	    value: function getType() {
	      return this.type;
	    }
	  }, {
	    key: 'setType',
	    value: function setType(newValue) {
	      if (newValue) {
	        this.type = newValue;
	      }
	    }
	  }, {
	    key: 'getMessage',
	    value: function getMessage() {
	      return this.message;
	    }
	  }, {
	    key: 'setMessage',
	    value: function setMessage(newValue) {
	      if (newValue) {
	        this.message = newValue;
	      }
	    }
	  }]);
	
	  return Alert;
	}();
	
	Alert.types = ['info', 'warning', 'error', 'success'];
	exports.default = Alert;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _alert = __webpack_require__(6);
	
	var _alert2 = _interopRequireDefault(_alert);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Toast = function () {
	  function Toast() {
	    _classCallCheck(this, Toast);
	
	    this.alert = new _alert2.default();
	    this.duration = 1000;
	    this.toast = this.createElement('div');
	  }
	
	  _createClass(Toast, [{
	    key: 'createToast',
	    value: function createToast(options) {
	      this.configureToast(options);
	      return this.toast;
	    }
	  }, {
	    key: 'createElement',
	    value: function createElement(elementType) {
	      return document.createElement(elementType);
	    }
	  }, {
	    key: 'configureToast',
	    value: function configureToast(options) {
	      this.alert.type = options.type;
	      this.alert.message = options.message;
	      this.duration = options.duration;
	      this.toast.classList.add('toast');
	      this.toast.classList.add(this.alert.type);
	      this.toast.innerText = this.alert.message;
	
	      return {
	        type: this.alert.type,
	        message: this.alert.message,
	        duration: this.duration
	      };
	    }
	  }, {
	    key: 'showToast',
	    value: function showToast() {
	      this.toast.animate([{
	        opacity: 0
	      }, {
	        opacity: 100
	      }], {
	        duration: this.duration,
	        easing: 'ease'
	      });
	      document.body.appendChild(this.toast);
	      this.removeToast();
	    }
	  }, {
	    key: 'removeToast',
	    value: function removeToast() {
	      var _this = this;
	
	      setTimeout(function () {
	        return document.body.removeChild(_this.toast);
	      }, this.duration);
	    }
	  }]);
	
	  return Toast;
	}();
	
	exports.default = Toast;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTM2NDI3MjcwZmY5OGM4ZDM4ZGUiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uLi9zdHlsZXMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdG9hc3QuanMiXSwibmFtZXMiOlsiYXBwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFsZXJ0VHlwZXMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaG93QWxlcnQiLCJldmVudCIsInRvYXN0IiwiYWxlcnRUeXBlIiwic3JjRWxlbWVudCIsImNsYXNzTGlzdCIsImxlbmd0aCIsInRvTG93ZXJDYXNlIiwiY3JlYXRlVG9hc3QiLCJ0eXBlIiwibWVzc2FnZSIsImR1cmF0aW9uIiwic2hvd1RvYXN0IiwiQWxlcnQiLCJuZXdWYWx1ZSIsInR5cGVzIiwiVG9hc3QiLCJhbGVydCIsImNyZWF0ZUVsZW1lbnQiLCJvcHRpb25zIiwiY29uZmlndXJlVG9hc3QiLCJlbGVtZW50VHlwZSIsImFkZCIsImlubmVyVGV4dCIsImFuaW1hdGUiLCJvcGFjaXR5IiwiZWFzaW5nIiwiYm9keSIsImFwcGVuZENoaWxkIiwicmVtb3ZlVG9hc3QiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQ2hpbGQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLEtBQUlBLE1BQU1DLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBVjs7QUFH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VCxLQUFMLENBQVdHLFNBQVgsQ0FBcUJpQixHQUFyQixDQUF5QixPQUF6QjtBQUNBLFlBQUtwQixLQUFMLENBQVdHLFNBQVgsQ0FBcUJpQixHQUFyQixDQUF5QixLQUFLTCxLQUFMLENBQVdSLElBQXBDO0FBQ0EsWUFBS1AsS0FBTCxDQUFXcUIsU0FBWCxHQUF1QixLQUFLTixLQUFMLENBQVdQLE9BQWxDOztBQUVBLGNBQU87QUFDTEQsZUFBTSxLQUFLUSxLQUFMLENBQVdSLElBRFo7QUFFTEMsa0JBQVMsS0FBS08sS0FBTCxDQUFXUCxPQUZmO0FBR0xDLG1CQUFVLEtBQUtBO0FBSFYsUUFBUDtBQUtEOzs7aUNBRVc7QUFDVixZQUFLVCxLQUFMLENBQVdzQixPQUFYLENBQW1CLENBQUM7QUFDbEJDLGtCQUFTO0FBRFMsUUFBRCxFQUVoQjtBQUNEQSxrQkFBUztBQURSLFFBRmdCLENBQW5CLEVBSUk7QUFDRmQsbUJBQVUsS0FBS0EsUUFEYjtBQUVGZSxpQkFBUTtBQUZOLFFBSko7QUFRQWhDLGdCQUFTaUMsSUFBVCxDQUFjQyxXQUFkLENBQTBCLEtBQUsxQixLQUEvQjtBQUNBLFlBQUsyQixXQUFMO0FBQ0Q7OzttQ0FFYTtBQUFBOztBQUNaQyxrQkFBVztBQUFBLGdCQUFNcEMsU0FBU2lDLElBQVQsQ0FBY0ksV0FBZCxDQUEwQixNQUFLN0IsS0FBL0IsQ0FBTjtBQUFBLFFBQVgsRUFBd0QsS0FBS1MsUUFBN0Q7QUFDRDs7Ozs7O21CQS9Da0JLLEsiLCJmaWxlIjoic2NyaXB0cy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdFwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGUzNjQyNzI3MGZmOThjOGQzOGRlIiwiaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGVzLnNjc3MnO1xuaW1wb3J0IEFsZXJ0IGZyb20gJy4vYWxlcnQnO1xuaW1wb3J0IFRvYXN0IGZyb20gJy4vdG9hc3QnO1xuXG5sZXQgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG5cblxubGV0IGFsZXJ0VHlwZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhbGVydCcpXG5cbmZvciAobGV0IGl0ZW0gb2YgYWxlcnRUeXBlcykge1xuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0FsZXJ0LCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHNob3dBbGVydChldmVudCkge1xuICBsZXQgdG9hc3QgPSBuZXcgVG9hc3QoKTtcbiAgbGV0IGFsZXJ0VHlwZSA9IGV2ZW50LnNyY0VsZW1lbnQuY2xhc3NMaXN0W2V2ZW50LnNyY0VsZW1lbnQuY2xhc3NMaXN0Lmxlbmd0aCAtIDFdO1xuXG4gIHN3aXRjaChhbGVydFR5cGUudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2luZm8nOlxuICAgICAgdG9hc3QuY3JlYXRlVG9hc3QoeyB0eXBlOiBhbGVydFR5cGUsIG1lc3NhZ2U6ICdJbmZvIG1lc3NhZ2UgLSBhbGVydCB3aW5zIGZhdGFsaXR5IScsIGR1cmF0aW9uOiAzMDAwIH0pXG4gICAgICB0b2FzdC5zaG93VG9hc3QoKVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnd2FybmluZyc6XG4gICAgICB0b2FzdC5jcmVhdGVUb2FzdCh7IHR5cGU6IGFsZXJ0VHlwZSwgbWVzc2FnZTogJ1dhcm5pbmcgbWVzc2FnZSAtIGJpb2hhemFyZCBoYXMgYmVlbiBhY3RpdmF0ZWQhJywgZHVyYXRpb246IDMwMDAgfSlcbiAgICAgIHRvYXN0LnNob3dUb2FzdCgpXG4gICAgICBicmVhaztcbiAgICBjYXNlICdlcnJvcic6XG4gICAgICB0b2FzdC5jcmVhdGVUb2FzdCh7IHR5cGU6IGFsZXJ0VHlwZSwgbWVzc2FnZTogJ0Vycm9yIG1lc3NhZ2UgLSBzb21ldGhpbmcgdGVycmlibGUgaGFwcGVuZWQhJywgZHVyYXRpb246IDMwMDAgfSlcbiAgICAgIHRvYXN0LnNob3dUb2FzdCgpXG4gICAgICBicmVhaztcbiAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgIHRvYXN0LmNyZWF0ZVRvYXN0KHsgdHlwZTogYWxlcnRUeXBlLCBtZXNzYWdlOiAnU3VjY2VzcyBtZXNzYWdlIC0geWlwZWVlISEhJywgZHVyYXRpb246IDMwMDAgfSlcbiAgICAgIHRvYXN0LnNob3dUb2FzdCgpXG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zdHlsZXMvc3R5bGVzLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxlcnQge1xuICBzdGF0aWMgdHlwZXMgPSBbJ2luZm8nLCAnd2FybmluZycsICdlcnJvcicsICdzdWNjZXNzJ11cblxuICBjb25zdHJ1Y3Rvcih0eXBlID0gJ2luZm8nLCBtZXNzYWdlID0gJycpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBzZXRUeXBlKG5ld1ZhbHVlKSB7XG4gICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLnR5cGUgPSBuZXdWYWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXRNZXNzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLm1lc3NhZ2U7XG4gIH1cblxuICBzZXRNZXNzYWdlKG5ld1ZhbHVlKSB7XG4gICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBuZXdWYWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FsZXJ0LmpzIiwiaW1wb3J0IEFsZXJ0IGZyb20gJy4vYWxlcnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2FzdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hbGVydCA9IG5ldyBBbGVydCgpO1xuICAgIHRoaXMuZHVyYXRpb24gPSAxMDAwO1xuICAgIHRoaXMudG9hc3QgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB9XG5cbiAgY3JlYXRlVG9hc3Qob3B0aW9ucykge1xuICAgIHRoaXMuY29uZmlndXJlVG9hc3Qob3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXMudG9hc3Q7XG4gIH1cblxuICBjcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpXG4gIH1cblxuICBjb25maWd1cmVUb2FzdChvcHRpb25zKSB7XG4gICAgdGhpcy5hbGVydC50eXBlID0gb3B0aW9ucy50eXBlO1xuICAgIHRoaXMuYWxlcnQubWVzc2FnZSA9IG9wdGlvbnMubWVzc2FnZTtcbiAgICB0aGlzLmR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbjtcbiAgICB0aGlzLnRvYXN0LmNsYXNzTGlzdC5hZGQoJ3RvYXN0Jyk7XG4gICAgdGhpcy50b2FzdC5jbGFzc0xpc3QuYWRkKHRoaXMuYWxlcnQudHlwZSk7XG4gICAgdGhpcy50b2FzdC5pbm5lclRleHQgPSB0aGlzLmFsZXJ0Lm1lc3NhZ2U7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdGhpcy5hbGVydC50eXBlLFxuICAgICAgbWVzc2FnZTogdGhpcy5hbGVydC5tZXNzYWdlLFxuICAgICAgZHVyYXRpb246IHRoaXMuZHVyYXRpb25cbiAgICB9O1xuICB9XG5cbiAgc2hvd1RvYXN0KCkge1xuICAgIHRoaXMudG9hc3QuYW5pbWF0ZShbe1xuICAgICAgb3BhY2l0eTogMFxuICAgIH0sIHtcbiAgICAgIG9wYWNpdHk6IDEwMFxuICAgIH1dLCB7XG4gICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbixcbiAgICAgIGVhc2luZzogJ2Vhc2UnXG4gICAgfSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnRvYXN0KTtcbiAgICB0aGlzLnJlbW92ZVRvYXN0KCk7XG4gIH1cblxuICByZW1vdmVUb2FzdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy50b2FzdCksIHRoaXMuZHVyYXRpb24pO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvYXN0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==