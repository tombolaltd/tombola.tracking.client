var EventName;
(function (EventName) {
    EventName[EventName["PageEnter"] = 0] = "PageEnter";
    EventName[EventName["PageLeave"] = 1] = "PageLeave";
    EventName[EventName["PageIdle"] = 2] = "PageIdle";
    EventName[EventName["ValidationError"] = 3] = "ValidationError";
    EventName[EventName["ValidationSuccess"] = 4] = "ValidationSuccess";
    EventName[EventName["ButtonPress"] = 5] = "ButtonPress";
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
//# sourceMappingURL=EventName.js.map