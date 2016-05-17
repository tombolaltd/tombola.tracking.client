import {IEvent} from "./IEvent";
import {Location, EventName} from '../enums';

export class Event implements IEvent {
    location:Location;
    object:string;
    eventName:EventName;
    clientTime:number;
    data:Object;

    constructor(location:Location, object:string, eventName:EventName, data = {}) {
        this.location = location;
        this.object = object;
        this.eventName = eventName;
        this.clientTime = Date.now();
        this.data = data;
    }
}