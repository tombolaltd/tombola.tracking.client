enum EventName {
    PageEnter,
    PageLeave,
    PageIdle,
    ValidationError,
    ValidationSuccess,
    ButtonPress
}

namespace EventName {
    export function getStringValue(eventName:EventName):string {
        return EventName[eventName];
    }
}

export {EventName};