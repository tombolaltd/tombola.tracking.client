import { ILogger } from "../logging/ILogger";
export declare class PageHit {
    logger: ILogger;
    pageName: string;
    constructor(logger: ILogger, pageName: string);
}
