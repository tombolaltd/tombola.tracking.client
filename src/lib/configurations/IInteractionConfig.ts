import {ILog} from "../logging/ILog";

export interface IInteractionConfig {
    selector: string;
    event: string;
    buildLog: (element: Element, e: Object) => ILog;
}