export interface IInteraction {
    selector: String;
    event: String;
    buildLog(element:Element, eventArgs:Event): Object;
}