var Event_1 = require("../logging/Event");
var enums_1 = require('../enums');
var PageHit = (function () {
    function PageHit(logger, location) {
        this.logger = logger;
        this.location = location;
        this.logger.push(new Event_1.Event(location, 'page', enums_1.EventName.PageEnter));
    }
    return PageHit;
})();
exports.PageHit = PageHit;
//# sourceMappingURL=PageHit.js.map