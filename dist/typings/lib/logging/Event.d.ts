import { IEvent } from "./IEvent";
import { Location, EventName } from '../enums';
export declare class Event implements IEvent {
    location: Location;
    object: string;
    eventName: EventName;
    clientTime: number;
    data: Object;
    constructor(location: Location, object: string, eventName: EventName, data?: {});
}
