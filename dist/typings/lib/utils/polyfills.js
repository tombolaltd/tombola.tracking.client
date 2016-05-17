if (typeof Object.assign !== 'function') {
    Object.assign = function (target) {
        if (target === void 0 || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }
        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (Object.prototype.hasOwnProperty.call(source, nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
}
//# sourceMappingURL=polyfills.js.map