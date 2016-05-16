import {IEvent} from "./IEvent";

export interface ILog {
    formFactor: string;
    appName: string;
    userAgent: string;
    trackingId: string;
    userId: number;
    tenantId: number;
    data?: Object;
    events: Array<IEvent>;
}