/**
 * HttpError
 */
export declare class HttpError {
    status: number;
    code: string;
    message: string;
    cause: any;
    /**
     * Constructor
     * @param {number} status
     * @param {string=} code
     * @param {string=} message
     * @param {*=} cause
     */
    constructor(status: number, code?: string, message?: string, cause?: any);
}
