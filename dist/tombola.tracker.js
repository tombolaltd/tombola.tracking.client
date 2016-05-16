(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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

	"use strict";
	__webpack_require__(1);
	var EventNames_1 = __webpack_require__(2);
	var Logger_1 = __webpack_require__(3);
	var tracking_1 = __webpack_require__(4);
	var Tracker = (function () {
	    function Tracker(configuration, logData) {
	        this.configuration = configuration;
	        this.logData = logData;
	        this.logger = new Logger_1.Logger(this.configuration);
	        this.interactions = [];
	        this.pageHits = [];
	    }
	    Tracker.prototype.addPageHit = function (pageName) {
	        this.pageHits.push(new tracking_1.PageHit(this.logger, pageName));
	        return this;
	    };
	    Tracker.prototype.addInteractions = function (interactions) {
	        var _this = this;
	        interactions.forEach(function (interaction) {
	            _this.interactions.push(new tracking_1.Interaction(_this.logger, interaction.selector, interaction.event, interaction.buildLog));
	        });
	        return this;
	    };
	    Tracker.EVENT_NAMES = EventNames_1.EVENT_NAMES;
	    return Tracker;
	}());
	exports.Tracker = Tracker;


/***/ },
/* 1 */
/***/ function(module, exports) {

	if (typeof Object.assign !== 'function') {
	    Object.assign = function (target) {
	        if (target === void 0 || target === null) {
	            throw new TypeError('Cannot convert undefined or null to object');
	        }
	        var output = Object(target);
	        for (var index = 1; index < arguments.length; index++) {
	            var source = arguments[index];
	            if (source !== undefined && source !== null) {
	                for (var nextKey in source) {
	                    if (Object.prototype.hasOwnProperty.call(source, nextKey)) {
	                        output[nextKey] = source[nextKey];
	                    }
	                }
	            }
	        }
	        return output;
	    };
	}


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	var EVENT_NAMES = {
	    PAGE: {
	        ENTER: 'page.enter',
	        LEAVE: 'page.leave',
	        IDLE: 'page.idle'
	    },
	    VALIDATION: {
	        ERROR: 'validation.error',
	        SUCCESS: 'validation.success'
	    },
	    INTERACTION: {
	        CLICK: 'interaction.click',
	        FOCUS: 'interaction.focus',
	        BLUR: 'interaction.blur'
	    }
	};
	exports.EVENT_NAMES = EVENT_NAMES;


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	var Logger = (function () {
	    function Logger(configuration) {
	        var _this = this;
	        this.configuration = configuration;
	        this.events = [];
	        if (this.configuration.bufferedLog) {
	            window.setInterval(function () { return _this.flushLogs(); }, this.configuration.flushTimeout);
	        }
	    }
	    Logger.prototype.push = function (event) {
	        event.clientTime = Date.now();
	        this.events.push(event);
	        if (!this.configuration.bufferedLog) {
	            this.flushLogs();
	        }
	    };
	    Logger.prototype.flushLogs = function () {
	        var _this = this;
	        try {
	            var xhr_1 = new (XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0'), events = this.events.slice();
	            if (events.length > 0) {
	                xhr_1.open('POST', this.configuration.apiEndpoint, 1);
	                xhr_1.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	                xhr_1.setRequestHeader('Content-type', 'application/json');
	                xhr_1.onreadystatechange = function () {
	                    if (xhr_1.readyState === 4) {
	                        if (xhr_1.status >= 400 ||
	                            xhr_1.status >= 500) {
	                            console.error('Failed to send tracking events:', xhr_1);
	                        }
	                        else {
	                            _this.events = [];
	                        }
	                    }
	                };
	                var payload = Object.assign({}, {
	                    appName: this.configuration.appName,
	                    trackingId: this.configuration.trackingId,
	                    tenantId: this.configuration.tenantId,
	                    formFactor: this.configuration.formFactor,
	                    userId: this.configuration.userId,
	                    userAgent: window.navigator.userAgent
	                }, {
	                    events: events
	                });
	                xhr_1.send(JSON.stringify(payload));
	            }
	        }
	        catch (e) {
	            console.error('Failed to send tracking events:', e);
	        }
	    };
	    return Logger;
	}());
	exports.Logger = Logger;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(5));
	var PageHit_1 = __webpack_require__(6);
	exports.PageHit = PageHit_1.PageHit;


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	var Interaction = (function () {
	    function Interaction(logger, selector, event, buildEvent) {
	        var _this = this;
	        this.selector = selector;
	        this.event = event;
	        this.element = document.querySelector(this.selector);
	        this.buildEvent = buildEvent;
	        this.logger = logger;
	        if (this.element) {
	            this.element.addEventListener(this.event, function (e) {
	                var event = _this.buildEvent(_this.element, e);
	                _this.logger.push(event);
	            });
	        }
	        else {
	            console.warn('Tombola Tracker: Could not find an element with selector', this.selector);
	        }
	    }
	    return Interaction;
	}());
	exports.Interaction = Interaction;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Event_1 = __webpack_require__(7);
	var EventNames_1 = __webpack_require__(2);
	var PageHit = (function () {
	    function PageHit(logger, pageName) {
	        this.logger = logger;
	        this.pageName = pageName;
	        this.logger.push(new Event_1.Event(this.pageName, 'page', EventNames_1.EVENT_NAMES.PAGE.ENTER));
	    }
	    return PageHit;
	}());
	exports.PageHit = PageHit;


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	var Event = (function () {
	    function Event(location, object, eventName, data) {
	        if (data === void 0) { data = {}; }
	        this.location = location;
	        this.object = object;
	        this.eventName = eventName;
	        this.clientTime = Date.now();
	        this.data = data;
	    }
	    return Event;
	}());
	exports.Event = Event;


/***/ }
/******/ ])
});
;