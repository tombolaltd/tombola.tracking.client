import {IInteractionConfig} from '../configurations';
import {IEvent} from '../logging';

export interface ITracker {
    addInteractions(interactions:Array<IInteractionConfig>): ITracker;
    log(event:IEvent): ITracker;
    log(events:IEvent[]): ITracker;
}
