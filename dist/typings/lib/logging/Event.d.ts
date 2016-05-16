import { IEvent } from "./IEvent";
export declare class Event implements IEvent {
    location: string;
    object: string;
    eventName: string;
    clientTime: number;
    data: Object;
    constructor(location: string, object: string, eventName: string, data?: {});
}
