import { ILogger } from '../logging/ILogger';
export declare class Interaction {
    logger: ILogger;
    selector: string;
    event: string;
    element: Element;
    buildEvent: Function;
    constructor(logger: ILogger, selector: string, event: string, buildEvent: Function);
}
