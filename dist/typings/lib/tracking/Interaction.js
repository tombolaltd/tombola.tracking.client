var Interaction = (function () {
    function Interaction(logger, selector, event, buildEvent) {
        var _this = this;
        this.selector = selector;
        this.event = event;
        this.element = document.querySelector(this.selector);
        this.buildEvent = buildEvent;
        this.logger = logger;
        if (this.element) {
            this.element.addEventListener(this.event, function (e) {
                var event = _this.buildEvent(_this.element, e);
                _this.logger.push(event);
            });
        }
        else {
            console.warn('Tombola Tracker: Could not find an element with selector', this.selector);
        }
    }
    return Interaction;
})();
exports.Interaction = Interaction;
//# sourceMappingURL=Interaction.js.map