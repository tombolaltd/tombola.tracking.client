import {ILogger} from "../logging/ILogger";
import {Event} from "../logging/Event";
import {EVENT_NAMES} from '../enums/EventNames';

export class PageHit {
    logger:ILogger;
    pageName:string;

    constructor(logger:ILogger, pageName:string) {
        this.logger = logger;
        this.pageName = pageName;

        this.logger.push(new Event(
            this.pageName,
            'page',
            EVENT_NAMES.PAGE.ENTER
        ));
    }
}