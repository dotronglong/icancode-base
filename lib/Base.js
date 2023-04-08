"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toView = exports.toHashMap = void 0;
var toHashMap = function (o, only, ignore) {
    var keys = Object.keys(o);
    var data = {};
    keys.forEach(function (k) {
        if ((only && Array.isArray(only) && only.indexOf(k) === -1) ||
            (ignore && Array.isArray(ignore) && ignore.indexOf(k) >= 0)) {
            // this key will not be exported
            return;
        }
        if (typeof o[k] === 'undefined' || typeof (o[k]) === 'function') {
            return;
        }
        if (typeof o[k] === 'object') {
            data[k] = Array.isArray(o[k]) ? o[k] : (0, exports.toHashMap)(o[k]);
        }
        else {
            data[k] = o[k];
        }
    });
    return data;
};
exports.toHashMap = toHashMap;
var toView = function (data, only, ignore) {
    if (Array.isArray(data)) {
        var items = [];
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var item = data_1[_i];
            items.push((0, exports.toHashMap)(item, only, ignore));
        }
        return items;
    }
    return (0, exports.toHashMap)(data, only, ignore);
};
exports.toView = toView;
