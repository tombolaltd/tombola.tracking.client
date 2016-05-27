declare enum EventName {
    PageEnter = 0,
    PageLeave = 1,
    PageIdle = 2,
    ValidationError = 3,
    ValidationSuccess = 4,
    ButtonPress = 5,
    FormInput = 6,
}
declare namespace EventName {
    function getStringValue(eventName: EventName): string;
}
export { EventName };
