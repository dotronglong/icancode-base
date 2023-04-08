"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpError = void 0;
/**
 * HttpError
 */
var HttpError = /** @class */ (function () {
    /**
     * Constructor
     * @param {number} status
     * @param {string=} code
     * @param {string=} message
     * @param {*=} cause
     */
    function HttpError(status, code, message, cause) {
        this.status = status;
        this.code = code || '';
        this.message = message || '';
        this.cause = cause || null;
    }
    return HttpError;
}());
exports.HttpError = HttpError;
