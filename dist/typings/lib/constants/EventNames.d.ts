declare enum EventName {
    PageEnter = 0,
    PageLeave = 1,
    PageIdle = 2,
    ValidationError = 3,
    ValidationSuccess = 4,
    Click = 5,
    Touch = 6,
    Focus = 7,
    Blur = 8,
}
declare namespace EventName {
    function getStringValue(eventName: EventName): string;
}
export { EventName };
