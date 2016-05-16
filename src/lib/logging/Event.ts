import {IEvent} from "./IEvent";

export class Event implements IEvent {
    location:string;
    object:string;
    eventName:string;
    clientTime:number;
    data:Object;

    constructor(location:string, object:string, eventName:string, data = {}) {
        this.location = location;
        this.object = object;
        this.eventName = eventName;
        this.clientTime = Date.now();
        this.data = data;
    }
}