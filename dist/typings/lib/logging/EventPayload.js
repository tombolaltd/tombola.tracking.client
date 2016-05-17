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
})();
exports.EventPayload = EventPayload;
//# sourceMappingURL=EventPayload.js.map