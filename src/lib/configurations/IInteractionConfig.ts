import {IEvent} from "../logging";

export interface IInteractionConfig {
    selector: string;
    event: string;
    buildLog: (element: Element, e: Event) => IEvent;
}