"use strict";
var LocalStoragePolyfill = (function () {
    function LocalStoragePolyfill() {
        this._store = {};
    }
    Object.defineProperty(LocalStoragePolyfill.prototype, "length", {
        get: function () { return Object.keys(this._store).length; },
        enumerable: true,
        configurable: true
    });
    LocalStoragePolyfill.prototype.getItem = function (key) {
        return this._store[key];
    };
    LocalStoragePolyfill.prototype.setItem = function (key, val) {
        this._store[key] = val;
    };
    LocalStoragePolyfill.prototype.removeItem = function (key) {
        delete this._store[key];
    };
    LocalStoragePolyfill.prototype.clear = function () {
        this._store = {};
    };
    LocalStoragePolyfill.prototype.key = function (index) {
        return Object.keys(this._store)[index];
    };
    return LocalStoragePolyfill;
}());
exports.LocalStoragePolyfill = LocalStoragePolyfill;
//# sourceMappingURL=localStorage-polyfill.js.map