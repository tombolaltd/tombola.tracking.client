import { Location, EventName } from './lib/enums';
import { IInteractionConfig, ITrackerConfiguration } from './lib/configurations';
import { IEvent } from './lib/logging';
export declare class Tracker {
    static EventName: typeof EventName;
    static Location: typeof Location;
    private logger;
    private interactions;
    configuration: ITrackerConfiguration;
    constructor(configuration: ITrackerConfiguration);
    addInteractions(interactions: Array<IInteractionConfig>): Tracker;
    log(event: IEvent): Tracker;
}
