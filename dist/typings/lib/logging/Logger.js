"use strict";
var constants_1 = require('../constants');
var EventPayload_1 = require('./EventPayload');
var enums_1 = require('../enums');
var localStorage_polyfill_1 = require('../utils/localStorage-polyfill');
var Logger = (function () {
    function Logger(configuration) {
        var _this = this;
        this.configuration = configuration;
        this.url = this.configuration.apiEndpoint + '/event';
        this.configuration.localStorage = this.configuration.localStorage || new localStorage_polyfill_1.LocalStoragePollyfill();
        this.events = JSON.parse(this.configuration.localStorage.getItem(constants_1.CONSTANTS.LOCAL_STORAGE_KEY) || '[]');
        if (this.configuration.bufferedLog) {
            if (this.configuration.localStorage === void 0) {
                throw new Error('"localStorage" is required when using a buffered log');
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
                            console.error('Failed to send tracking events:', xhr_1);
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
            console.error('Failed to send tracking events:', e);
        }
    };
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map