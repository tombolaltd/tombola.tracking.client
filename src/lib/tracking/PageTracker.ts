import {ITrackable} from './ITrackable';

export class PageTracker implements ITrackable {
    pageName:String;

    constructor(pageName:String) {
        this.pageName = pageName;
    }

    track() {

    }
}