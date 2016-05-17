import { ILogger } from "../logging/ILogger";
import { Location } from '../enums';
export declare class PageHit {
    logger: ILogger;
    location: Location;
    constructor(logger: ILogger, location: Location);
}
