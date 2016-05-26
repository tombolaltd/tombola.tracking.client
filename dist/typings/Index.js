"use strict";
require('./lib/utils');
var constants_1 = require('./lib/constants');
var enums_1 = require('./lib/enums');
var logging_1 = require('./lib/logging');
var Tracker = (function () {
    function Tracker(configuration) {
        this.configuration = configuration;
        if (this.configuration.bufferedLog && !this.configuration.flushTimeout) {
            this.configuration.flushTimeout = constants_1.CONSTANTS.DEFAULT_FLUSH_TIMEOUT;
        }
        this.logger = new logging_1.Logger(this.configuration);
        this.interactions = [];
    }
    Tracker.prototype.addInteractions = function (interactions) {
        var _this = this;
        interactions.forEach(function (interaction) {
            _this.interactions.push(new logging_1.Interaction(_this.logger, interaction.selector, interaction.event, interaction.buildLog));
        });
        return this;
    };
    Tracker.prototype.log = function (arg) {
        if (arg instanceof Array) {
            arg.forEach(this.logger.push);
        }
        else {
            this.logger.push(arg);
        }
        return this;
    };
    Tracker.EventName = enums_1.EventName;
    Tracker.Location = enums_1.Location;
    return Tracker;
}());
exports.Tracker = Tracker;
//# sourceMappingURL=index.js.map