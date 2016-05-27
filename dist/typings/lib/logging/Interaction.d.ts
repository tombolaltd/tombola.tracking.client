import { ILogger } from '../logging/ILogger';
import { IEvent } from './IEvent';
export declare class Interaction {
    logger: ILogger;
    selector: string;
    event: string;
    elements: NodeList;
    buildEvent: (element: Element, event: Event) => IEvent;
    constructor(logger: ILogger, selector: string, event: string, buildEvent: (element: Element, event: Event) => IEvent);
}
