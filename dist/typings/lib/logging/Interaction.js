"use strict";
var Interaction = (function () {
    function Interaction(logger, selector, event, buildEvent) {
        this.selector = selector;
        this.event = event;
        this.elements = document.querySelectorAll(this.selector);
        this.buildEvent = buildEvent;
        this.logger = logger;
        if (this.elements.length > 0) {
            for (var i = 0; i < this.elements.length; i++) {
                var me = this;
                var handler = function (element) {
                    return function (e) {
                        var eventLog = me.buildEvent(element, e);
                        me.logger.push(eventLog);
                    };
                };
                this.elements[i].addEventListener(this.event, handler(this.elements[i]));
            }
        }
        else {
            console.warn('Tombola Tracker: Could not find an element with selector', this.selector);
        }
    }
    return Interaction;
}());
exports.Interaction = Interaction;
//# sourceMappingURL=Interaction.js.map