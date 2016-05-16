import { IEvent } from './IEvent';
export interface ILogger {
    events: Array<IEvent>;
    push(event: IEvent): void;
    flushLogs(): void;
}
