"use strict";
var Interaction = (function () {
    function Interaction(logger, selector, event, buildEvent) {
        var _this = this;
        this.selector = selector;
        this.event = event;
        this.elements = document.querySelectorAll(this.selector);
        this.buildEvent = buildEvent;
        this.logger = logger;
        if (this.elements.length > 0) {
            for (var i = 0; i < this.elements.length; i++) {
                var thisElement = this.elements[i];
                this.elements[i].addEventListener(this.event, function (e) {
                    var event = _this.buildEvent(thisElement, e);
                    _this.logger.push(event);
                });
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