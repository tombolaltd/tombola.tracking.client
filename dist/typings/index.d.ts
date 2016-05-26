import './lib/utils';
import { Location, EventName } from './lib/enums';
import { IInteractionConfig, ITrackerConfiguration } from './lib/configurations';
import { IEvent } from './lib/logging';
import { ITracker } from './lib/logging/ITracker';
export declare class Tracker implements ITracker {
    static EventName: typeof EventName;
    static Location: typeof Location;
    private logger;
    private interactions;
    configuration: ITrackerConfiguration;
    constructor(configuration: ITrackerConfiguration);
    addInteractions(interactions: Array<IInteractionConfig>): Tracker;
    log(event: IEvent): ITracker;
    log(events: IEvent[]): ITracker;
}
