import {IInteraction} from './IInteraction';

export class Interaction implements IInteraction {
    selector:String;
    event:String;

    constructor(selector:String, event:String, buildLog:(element:Element, eventArgs:Object) => Object) {
        this.selector = selector;
        this.event = event;
    }

    buildLog() {
        return {};
    }
}