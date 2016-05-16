import './lib/utils/polyfills';
import { ITrackerConfiguration } from './lib/configurations/ITrackerConfiguration';
import { IInteractionConfig } from "./lib/configurations/IInteractionConfig";
import { Logger } from './lib/logging/Logger';
import { PageHit, Interaction } from './lib/tracking';
export declare class Tracker {
    static EVENT_NAMES: {
        PAGE: {
            ENTER: string;
            LEAVE: string;
            IDLE: string;
        };
        VALIDATION: {
            ERROR: string;
            SUCCESS: string;
        };
        INTERACTION: {
            CLICK: string;
            FOCUS: string;
            BLUR: string;
        };
    };
    configuration: ITrackerConfiguration;
    logData: Object;
    logger: Logger;
    interactions: Array<Interaction>;
    pageHits: Array<PageHit>;
    constructor(configuration: ITrackerConfiguration, logData: Object);
    addPageHit(pageName: string): Tracker;
    addInteractions(interactions: Array<IInteractionConfig>): Tracker;
}
