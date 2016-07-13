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
	var constants_1 = __webpack_require__(3);
	var enums_1 = __webpack_require__(4);
	var logging_1 = __webpack_require__(7);
	var Tracker = (function () {
	    function Tracker(configuration) {
	        this.configuration = configuration;
	        if (this.configuration.bufferedLog && !this.configuration.flushTimeout) {
	            this.configuration.flushTimeout = constants_1.CONSTANTS.DEFAULT_FLUSH_TIMEOUT;
	        }
	        this.logger = new logging_1.Logger(this.configuration);
	        this.interactions = [];
	    }
	    Tracker.prototype.addInteractions = function (interactions) {
	        var _this = this;
	        interactions.forEach(function (interaction) {
	            _this.interactions.push(new logging_1.Interaction(_this.logger, interaction.selector, interaction.event, interaction.buildLog));
	        });
	        return this;
	    };
	    Tracker.prototype.log = function (arg) {
	        if (arg instanceof Array) {
	            arg.forEach(this.logger.push.bind(this.logger));
	        }
	        else {
	            this.logger.push(arg);
	        }
	        return this;
	    };
	    Tracker.EventName = enums_1.EventName;
	    Tracker.Location = enums_1.Location;
	    return Tracker;
	}());
	exports.Tracker = Tracker;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(2);


/***/ },
/* 2 */
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
/* 3 */
/***/ function(module, exports) {

	"use strict";
	exports.CONSTANTS = {
	    DEFAULT_FLUSH_TIMEOUT: 30000,
	    LOCAL_STORAGE_KEY: 'tombola.events'
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(5));
	__export(__webpack_require__(6));


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	var EventName;
	(function (EventName) {
	    EventName[EventName["PageEnter"] = 0] = "PageEnter";
	    EventName[EventName["PageLeave"] = 1] = "PageLeave";
	    EventName[EventName["PageIdle"] = 2] = "PageIdle";
	    EventName[EventName["ValidationError"] = 3] = "ValidationError";
	    EventName[EventName["ValidationSuccess"] = 4] = "ValidationSuccess";
	    EventName[EventName["ButtonPress"] = 5] = "ButtonPress";
	    EventName[EventName["FormInput"] = 6] = "FormInput";
	})(EventName || (EventName = {}));
	exports.EventName = EventName;
	var EventName;
	(function (EventName) {
	    function getStringValue(eventName) {
	        return EventName[eventName];
	    }
	    EventName.getStringValue = getStringValue;
	})(EventName || (EventName = {}));
	exports.EventName = EventName;


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	var Location;
	(function (Location) {
	    Location[Location["Registration"] = 0] = "Registration";
	    Location[Location["Login"] = 1] = "Login";
	    Location[Location["MyAccount"] = 2] = "MyAccount";
	    Location[Location["Deposit"] = 3] = "Deposit";
	    Location[Location["FirstDeposit"] = 4] = "FirstDeposit";
	    Location[Location["SecondIdVerification"] = 5] = "SecondIdVerification";
	    Location[Location["Withdrawal"] = 6] = "Withdrawal";
	    Location[Location["PaymentDetails"] = 7] = "PaymentDetails";
	    Location[Location["ChangePassword"] = 8] = "ChangePassword";
	    Location[Location["ChangeUsername"] = 9] = "ChangeUsername";
	    Location[Location["ChangeContactPrefs"] = 10] = "ChangeContactPrefs";
	    Location[Location["ChangeContactDetails"] = 11] = "ChangeContactDetails";
	    Location[Location["LockLimitPrefs"] = 12] = "LockLimitPrefs";
	    Location[Location["TimekeeperPrefs"] = 13] = "TimekeeperPrefs";
	    Location[Location["CoolOffPrefs"] = 14] = "CoolOffPrefs";
	    Location[Location["SelfExclusionPrefs"] = 15] = "SelfExclusionPrefs";
	})(Location || (Location = {}));
	exports.Location = Location;
	var Location;
	(function (Location) {
	    function getStringValue(location) {
	        return Location[location];
	    }
	    Location.getStringValue = getStringValue;
	})(Location || (Location = {}));
	exports.Location = Location;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(8));
	__export(__webpack_require__(9));
	__export(__webpack_require__(12));


/***/ },
/* 8 */
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


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var constants_1 = __webpack_require__(3);
	var EventPayload_1 = __webpack_require__(10);
	var enums_1 = __webpack_require__(4);
	var localStorage_polyfill_1 = __webpack_require__(11);
	var Logger = (function () {
	    function Logger(configuration) {
	        var _this = this;
	        this.configuration = configuration;
	        this.url = this.configuration.apiEndpoint + '/event';
	        this.configuration.localStorage = this.configuration.localStorage || new localStorage_polyfill_1.LocalStoragePolyfill();
	        this.events = JSON.parse(this.configuration.localStorage.getItem(constants_1.CONSTANTS.LOCAL_STORAGE_KEY) || '[]');
	        if (this.configuration.bufferedLog) {
	            if (this.configuration.localStorage === void 0) {
	                throw new Error('Tombola Events: "localStorage" is required when using a buffered log');
	            }
	            window.setInterval(function () { return _this.flushLogs(); }, this.configuration.flushTimeout);
	        }
	        if (this.events.length > 0) {
	            this.flushLogs();
	        }
	    }
	    Logger.prototype.push = function (event) {
	        event.clientTime = Date.now();
	        this.events.push(event);
	        if (!this.configuration.bufferedLog) {
	            this.flushLogs();
	        }
	        else {
	            this.configuration.localStorage.setItem(constants_1.CONSTANTS.LOCAL_STORAGE_KEY, JSON.stringify(this.events));
	        }
	    };
	    Logger.prototype.flushLogs = function () {
	        var _this = this;
	        try {
	            var xhr_1 = new (XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0'), eventsToSend_1 = this.events.splice(0);
	            if (eventsToSend_1.length > 0) {
	                xhr_1.open('POST', this.url, 1);
	                xhr_1.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	                xhr_1.setRequestHeader('Content-type', 'application/json');
	                xhr_1.onreadystatechange = function () {
	                    if (xhr_1.readyState === 4) {
	                        if (xhr_1.status >= 400 ||
	                            xhr_1.status >= 500) {
	                            _this.events = _this.events.concat(eventsToSend_1);
	                            console.error('Tombola Events: Failed to send tracking events:', xhr_1);
	                        }
	                        _this.configuration.localStorage.setItem(constants_1.CONSTANTS.LOCAL_STORAGE_KEY, JSON.stringify(_this.events));
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
	                    events: eventsToSend_1.map(function (event) {
	                        return new EventPayload_1.EventPayload(enums_1.Location.getStringValue(event.location), enums_1.EventName.getStringValue(event.eventName), event.clientTime, event.object, event.data);
	                    })
	                });
	                xhr_1.send(JSON.stringify(payload));
	            }
	        }
	        catch (e) {
	            console.error('Tombola Events: Failed to send tracking events:', e);
	        }
	    };
	    return Logger;
	}());
	exports.Logger = Logger;


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	var EventPayload = (function () {
	    function EventPayload(location, eventName, clientTime, object, data) {
	        if (data === void 0) { data = {}; }
	        this.location = location;
	        this.eventName = eventName;
	        this.clientTime = clientTime;
	        this.object = object;
	        this.data = data;
	    }
	    return EventPayload;
	}());
	exports.EventPayload = EventPayload;


/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	var LocalStoragePolyfill = (function () {
	    function LocalStoragePolyfill() {
	        this._store = {};
	    }
	    Object.defineProperty(LocalStoragePolyfill.prototype, "length", {
	        get: function () { return Object.keys(this._store).length; },
	        enumerable: true,
	        configurable: true
	    });
	    LocalStoragePolyfill.prototype.getItem = function (key) {
	        return this._store[key];
	    };
	    LocalStoragePolyfill.prototype.setItem = function (key, val) {
	        this._store[key] = val;
	    };
	    LocalStoragePolyfill.prototype.removeItem = function (key) {
	        delete this._store[key];
	    };
	    LocalStoragePolyfill.prototype.clear = function () {
	        this._store = {};
	    };
	    LocalStoragePolyfill.prototype.key = function (index) {
	        return Object.keys(this._store)[index];
	    };
	    return LocalStoragePolyfill;
	}());
	exports.LocalStoragePolyfill = LocalStoragePolyfill;


/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	var Interaction = (function () {
	    function Interaction(logger, selector, event, buildEvent) {
	        this.selector = selector;
	        this.event = event;
	        this.elements = document.querySelectorAll(this.selector);
	        this.buildEvent = buildEvent;
	        this.logger = logger;
	        if (this.elements.length > 0) {
	            for (var i = 0; i < this.elements.length; i++) {
	                var me = this;
	                var handler = function (element) {
	                    return function (e) {
	                        var eventLog = me.buildEvent(element, e);
	                        me.logger.push(eventLog);
	                    };
	                };
	                this.elements[i].addEventListener(this.event, handler(this.elements[i]));
	            }
	        }
	        else {
	            console.warn('Tombola Events: Could not find an element with selector', this.selector);
	        }
	    }
	    return Interaction;
	}());
	exports.Interaction = Interaction;


/***/ }
/******/ ])
});
;