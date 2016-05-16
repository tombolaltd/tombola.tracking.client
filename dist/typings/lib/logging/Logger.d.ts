import { ITrackerConfiguration } from '../configurations/ITrackerConfiguration';
import { IEvent } from './IEvent';
export declare class Logger {
    events: Array<IEvent>;
    configuration: ITrackerConfiguration;
    constructor(configuration: ITrackerConfiguration);
    push(event: IEvent): void;
    flushLogs(): void;
}
