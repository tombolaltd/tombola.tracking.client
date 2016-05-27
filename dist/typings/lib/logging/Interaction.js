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
            var _loop_1 = function(i) {
                this_1.elements[i].addEventListener(this_1.event, function (e) {
                    var event = _this.buildEvent(_this.elements[i], e);
                    _this.logger.push(event);
                });
            };
            var this_1 = this;
            for (var i = 0; i < this.elements.length; i++) {
                _loop_1(i);
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