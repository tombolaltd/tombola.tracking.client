import './lib/utils';
import {CONSTANTS} from './lib/constants';
import {Location, EventName} from './lib/enums';
import {IInteractionConfig, ITrackerConfiguration} from './lib/configurations';
import {IEvent, Logger, Interaction} from './lib/logging';
import {ITracker} from './lib/logging/ITracker';

export class Tracker implements ITracker {
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

    log(event:IEvent): ITracker;
    log(events:IEvent[]): ITracker;
    log(arg: IEvent | IEvent[]): ITracker {
        if (arg instanceof Array) {
            arg.forEach(this.logger.push);
        } else {
            this.logger.push(arg);
        }
        return this;
    }
}
