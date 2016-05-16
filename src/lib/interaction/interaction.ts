import {IInteraction} from './IInteraction';
import {ILogger} from '../logging/ILogger';

export class Interaction implements IInteraction {
    logger:ILogger;
    selector:string;
    event:string;
    element:Element;
    buildEvent:Function;

    constructor(logger:ILogger, selector:string, event:string, buildEvent:Function) {
        this.selector = selector;
        this.event = event;
        this.element = document.querySelector(this.selector);
        this.buildEvent = buildEvent;
        this.logger = logger;

        if (this.element) {
            this.element.addEventListener(this.event, (e:Object) => {
                let event = this.buildEvent(this.element, e);
                this.logger.push(event);
            });
        } else {
            console.warn('Tombola Tracker: Could not find an element with selector', this.selector);
        }
    }
}