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
	
	var _alerter = __webpack_require__(7);
	
	var _alerter2 = _interopRequireDefault(_alerter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var alertTypes = document.getElementsByClassName("alertType");
	
	console.log(alertTypes);
	
	console.log('Alert type: ' + alertTypes);
	
	var info = alertTypes[0];
	info.addEventListener('click', handleInfo, false);
	
	function handleInfo(event) {
	  var element = addElement('div');
	
	  configureElement(element, {
	    type: 'Success',
	    className: 'toast',
	    message: 'message'
	  });
	
	  showAlert(element);
	
	  element.animate([{ opacity: 100 }, { opacity: 50 }, { opacity: 0 }], { duration: 3000, easing: 'ease' });
	  setTimeout(function () {
	    document.body.removeChild(element);
	  }, 3000);
	}
	
	function addElement(elementType) {
	  return document.createElement(elementType);
	}
	
	function configureElement(element, options) {
	  switch (options.type.toLowerCase()) {
	    case 'info':
	      element.classList.add('info');
	      break;
	    case 'warning':
	      element.classList.add('warning');
	      break;
	    case 'error':
	      element.classList.add('error');
	      break;
	    case 'success':
	      element.classList.add('success');
	      break;
	    default:
	      break;
	  }
	  element.innerText = options.type + ' ' + options.message;
	  element.classList.add(options.className);
	}
	
	function showAlert(element) {
	  element.animate([{ opacity: 0 }, { opacity: 1000 }], { duration: 3000, easing: 'ease' });
	  document.body.appendChild(element);
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
	  function Alert(type, message) {
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
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Alerter = function () {
	  function Alerter() {
	    _classCallCheck(this, Alerter);
	  }
	
	  _createClass(Alerter, [{
	    key: 'createAlert',
	    value: function createAlert() {
	      var element = document.createElement('div');
	      return element;
	    }
	  }]);
	
	  return Alerter;
	}();
	
	exports.default = Alerter;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGIzZDhmMzVjOWJhNmFjMmNmM2YiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uLi9zdHlsZXMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYWxlcnRlci5qcyJdLCJuYW1lcyI6WyJhbGVydFR5cGVzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY29uc29sZSIsImxvZyIsImluZm8iLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlSW5mbyIsImV2ZW50IiwiZWxlbWVudCIsImFkZEVsZW1lbnQiLCJjb25maWd1cmVFbGVtZW50IiwidHlwZSIsImNsYXNzTmFtZSIsIm1lc3NhZ2UiLCJzaG93QWxlcnQiLCJhbmltYXRlIiwib3BhY2l0eSIsImR1cmF0aW9uIiwiZWFzaW5nIiwic2V0VGltZW91dCIsImJvZHkiLCJyZW1vdmVDaGlsZCIsImVsZW1lbnRUeXBlIiwiY3JlYXRlRWxlbWVudCIsIm9wdGlvbnMiLCJ0b0xvd2VyQ2FzZSIsImNsYXNzTGlzdCIsImFkZCIsImlubmVyVGV4dCIsImFwcGVuZENoaWxkIiwiQWxlcnQiLCJuZXdWYWx1ZSIsInR5cGVzIiwiQWxlcnRlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsS0FBSUEsYUFBYUMsU0FBU0Msc0JBQVQsQ0FBZ0MsV0FBaEMsQ0FBakI7O0FBRUFDLFNBQVFDLEdBQVIsQ0FBWUosVUFBWjs7QUFFQUcsU0FBUUMsR0FB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QUFDWixXQUFJekIsVUFBVVIsU0FBU3VCLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZDtBQUNBLGNBQU9mLE9BQVA7QUFDRDs7Ozs7O21CQVJrQnlCLE8iLCJmaWxlIjoic2NyaXB0cy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdFwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDBiM2Q4ZjM1YzliYTZhYzJjZjNmIiwiaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGVzLnNjc3MnO1xuaW1wb3J0IEFsZXJ0IGZyb20gJy4vYWxlcnQnO1xuaW1wb3J0IEFsZXJ0ZXIgZnJvbSAnLi9hbGVydGVyJztcblxubGV0IGFsZXJ0VHlwZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWxlcnRUeXBlXCIpXG5cbmNvbnNvbGUubG9nKGFsZXJ0VHlwZXMpO1xuXG5jb25zb2xlLmxvZyhgQWxlcnQgdHlwZTogJHthbGVydFR5cGVzfWApO1xuXG5sZXQgaW5mbyA9IGFsZXJ0VHlwZXNbMF07XG5pbmZvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlSW5mbywgZmFsc2UpO1xuXG5cbmZ1bmN0aW9uIGhhbmRsZUluZm8oZXZlbnQpIHtcbiAgbGV0IGVsZW1lbnQgPSBhZGRFbGVtZW50KCdkaXYnKTtcblxuICBjb25maWd1cmVFbGVtZW50KGVsZW1lbnQsIHtcbiAgICB0eXBlOiAnU3VjY2VzcycsXG4gICAgY2xhc3NOYW1lOiAndG9hc3QnLFxuICAgIG1lc3NhZ2U6ICdtZXNzYWdlJ1xuICB9KTtcblxuICBzaG93QWxlcnQoZWxlbWVudCk7XG5cbiAgZWxlbWVudC5hbmltYXRlKFtcbiAgICB7IG9wYWNpdHk6IDEwMCB9LFxuICAgIHsgb3BhY2l0eTogNTAgfSxcbiAgICB7IG9wYWNpdHk6IDAgfV0sIHsgZHVyYXRpb246IDMwMDAsIGVhc2luZzogJ2Vhc2UnfSk7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gIH0sIDMwMDApO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50KGVsZW1lbnRUeXBlKSB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKVxufVxuXG5mdW5jdGlvbiBjb25maWd1cmVFbGVtZW50KGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgc3dpdGNoKG9wdGlvbnMudHlwZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaW5mbyc6XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2luZm8nKVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnd2FybmluZyc6XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dhcm5pbmcnKVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZXJyb3InOlxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpXG4gICAgICBicmVhaztcbiAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3VjY2VzcycpXG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICBicmVhaztcbiAgfVxuICBlbGVtZW50LmlubmVyVGV4dCA9IGAke29wdGlvbnMudHlwZX0gJHtvcHRpb25zLm1lc3NhZ2V9YDtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKG9wdGlvbnMuY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gc2hvd0FsZXJ0KGVsZW1lbnQpIHtcbiAgZWxlbWVudC5hbmltYXRlKFsgeyBvcGFjaXR5OiAwIH0sIHsgb3BhY2l0eTogMTAwMCB9XSwgeyBkdXJhdGlvbjogMzAwMCwgZWFzaW5nOiAnZWFzZSd9KTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3R5bGVzL3N0eWxlcy5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFsZXJ0IHtcbiAgc3RhdGljIHR5cGVzID0gWydpbmZvJywgJ3dhcm5pbmcnLCAnZXJyb3InLCAnc3VjY2VzcyddXG5cbiAgY29uc3RydWN0b3IodHlwZSwgbWVzc2FnZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHNldFR5cGUobmV3VmFsdWUpIHtcbiAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgIHRoaXMudHlwZSA9IG5ld1ZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGdldE1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZTtcbiAgfVxuXG4gIHNldE1lc3NhZ2UobmV3VmFsdWUpIHtcbiAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgIHRoaXMubWVzc2FnZSA9IG5ld1ZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYWxlcnQuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBbGVydGVyIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIGNyZWF0ZUFsZXJ0KCkge1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYWxlcnRlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=