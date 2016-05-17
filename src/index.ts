import './lib/utils';
import {CONSTANTS} from './lib/constants';
import {Location, EventName} from './lib/enums';
import {IInteractionConfig, ITrackerConfiguration} from './lib/configurations';
import {IEvent, Logger, Interaction} from './lib/logging';

export class Tracker {
    static EventName = EventName;
    static Location = Location;

    private logger:Logger;
    private interactions:Array<Interaction>;

    public configuration:ITrackerConfiguration;

    constructor(configuration:ITrackerConfiguration) {
        this.configuration = configuration;

        if (this.configuration.bufferedLog && !this.configuration.flushTimeout) {
            this.configuration.flushTimeout = CONSTANTS.DEFAULT_FLUSH_TIMEOUT;
        }

        this.logger = new Logger(this.configuration);
        this.interactions = [];
    }

    addInteractions(interactions:Array<IInteractionConfig>):Tracker {
        interactions.forEach((interaction) => {
            this.interactions.push(new Interaction(this.logger, interaction.selector, interaction.event, interaction.buildLog));
        });

        return this;
    }

    log(event:IEvent):Tracker {
        this.logger.push(event);

        return this;
    }
}