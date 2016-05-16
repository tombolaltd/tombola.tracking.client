export interface IEvent {
    location: string;
    object: string;
    eventName: string;
    clientTime: number;
    data?: Object;
}