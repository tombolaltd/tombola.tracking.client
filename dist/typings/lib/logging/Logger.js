var constants_1 = require('../constants');
var EventPayload_1 = require('./EventPayload');
var enums_1 = require('../enums');
var Logger = (function () {
    function Logger(configuration) {
        var _this = this;
        this.configuration = configuration;
        this.url = this.configuration.apiEndpoint + '/event';
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
            var xhr = new (XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0'), eventsToSend = this.events.splice(0);
            if (eventsToSend.length > 0) {
                xhr.open('POST', this.url, 1);
                xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                xhr.setRequestHeader('Content-type', 'application/json');
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status >= 400 ||
                            xhr.status >= 500) {
                            _this.events = _this.events.concat(eventsToSend);
                            console.error('Failed to send tracking events:', xhr);
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
                    events: eventsToSend.map(function (event) {
                        return new EventPayload_1.EventPayload(enums_1.Location.getStringValue(event.location), enums_1.EventName.getStringValue(event.eventName), event.clientTime, event.object, event.data);
                    })
                });
                xhr.send(JSON.stringify(payload));
            }
        }
        catch (e) {
            console.error('Failed to send tracking events:', e);
        }
    };
    return Logger;
})();
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map