export class EventPayload {
    location:string;
    eventName:string;
    clientTime:number;
    object:string;
    data:Object;

    constructor (location:string, eventName:string, clientTime:number, object:string, data = {}) {
        this.location = location;
        this.eventName = eventName;
        this.clientTime = clientTime;
        this.object = object;
        this.data = data;
    }
}