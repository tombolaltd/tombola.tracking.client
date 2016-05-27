import {ILogger} from '../logging/ILogger';
import {IEvent} from './IEvent';

export class Interaction {
    logger:ILogger;
    selector:string;
    event:string;
    elements:NodeList;
    buildEvent:(element:Element, event:Event) => IEvent;

    constructor(logger:ILogger, selector:string, event:string, buildEvent: (element:Element, event:Event) => IEvent) {
        this.selector = selector;
        this.event = event;
        this.elements = document.querySelectorAll(this.selector);
        this.buildEvent = buildEvent;
        this.logger = logger;

        if (this.elements.length > 0) {

            for (var i = 0; i < this.elements.length; i++) {
                var thisElement = <Element>this.elements[i];
                this.elements[i].addEventListener(this.event, e => {
                    let event = this.buildEvent(thisElement, e);
                    this.logger.push(event);
                });
            }

        } else {
            console.warn('Tombola Tracker: Could not find an element with selector', this.selector);
        }
    }
}
