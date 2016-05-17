import { Location, EventName } from '../enums';
export interface IEvent {
    location: Location;
    object: string;
    eventName: EventName;
    clientTime: number;
    data?: Object;
}
