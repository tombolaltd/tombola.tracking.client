enum EventName {
    PageEnter,
    PageLeave,
    PageIdle,
    ValidationError,
    ValidationSuccess,
    ButtonPress,
    FormInput
}

namespace EventName {
    export function getStringValue(eventName:EventName):string {
        return EventName[eventName];
    }
}

export {EventName};
