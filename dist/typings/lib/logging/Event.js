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
})();
exports.Event = Event;
//# sourceMappingURL=Event.js.map