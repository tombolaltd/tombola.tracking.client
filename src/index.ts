import './lib/utils/polyfills';
import {EVENT_NAMES} from './lib/enums/EventNames';
import {ITrackerConfiguration} from './lib/configurations/ITrackerConfiguration';
import {IInteractionConfig} from "./lib/configurations/IInteractionConfig";
import {Logger} from './lib/logging/Logger';
import {PageHit, Interaction} from './lib/tracking';

export class Tracker {
    static EVENT_NAMES = EVENT_NAMES;

    configuration:ITrackerConfiguration;
    logData:Object;
    logger:Logger;
    interactions:Array<Interaction>;
    pageHits:Array<PageHit>;

    constructor(configuration:ITrackerConfiguration, logData:Object) {
        this.configuration = configuration;
        this.logData = logData;
        this.logger = new Logger(this.configuration);
        this.interactions = [];
        this.pageHits = [];
    }

    addPageHit(pageName:string):Tracker {
        this.pageHits.push(new PageHit(this.logger, pageName));

        return this;
    }

    addInteractions(interactions:Array<IInteractionConfig>):Tracker {
        interactions.forEach((interaction) => {
            this.interactions.push(new Interaction(this.logger, interaction.selector, interaction.event, interaction.buildLog));
        });

        return this;
    }
}