import {Logger} from '../logging/logger';
import {PageTracker} from './PageTracker';
import {Interaction} from '../interaction/interaction';

export class Tracker {
    options:Object;
    logger:Logger;

    constructor(options:Object) {
        this.options = options;
        this.logger = new Logger();
    }

    page(pageName:String):Tracker {
        var pageTrack = new PageTracker(pageName);

        return this;
    }

    interaction(selector:String, event:String, buildLog:(element:Element, eventArgs:Object) => Object):Tracker {
        var interaction = new Interaction(selector, event, buildLog);

        return this;
    }
}