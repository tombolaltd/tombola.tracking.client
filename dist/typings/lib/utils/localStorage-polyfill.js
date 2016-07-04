"use strict";
var LocalStoragePollyfill = (function () {
    function LocalStoragePollyfill() {
        this._store = {};
    }
    Object.defineProperty(LocalStoragePollyfill.prototype, "length", {
        get: function () { return Object.keys(this._store).length; },
        enumerable: true,
        configurable: true
    });
    LocalStoragePollyfill.prototype.getItem = function (key) {
        return this._store[key];
    };
    LocalStoragePollyfill.prototype.setItem = function (key, val) {
        this._store[key] = val;
    };
    LocalStoragePollyfill.prototype.removeItem = function (key) {
        delete this._store[key];
    };
    LocalStoragePollyfill.prototype.clear = function () {
        this._store = {};
    };
    LocalStoragePollyfill.prototype.key = function (index) {
        return Object.keys(this._store)[index];
    };
    return LocalStoragePollyfill;
}());
exports.LocalStoragePollyfill = LocalStoragePollyfill;
//# sourceMappingURL=localStorage-polyfill.js.map