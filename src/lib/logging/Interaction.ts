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
                var me = this;
                var handler = (element:Element) => {
                    return (e:Event) => {
                        let eventLog = me.buildEvent(element, e);
                        me.logger.push(eventLog);
                    }
                }
                this.elements[i].addEventListener(this.event, handler(<Element>this.elements[i]));
            }

        } else {
            console.warn('Tombola Events: Could not find an element with selector', this.selector);
        }
    }
}
