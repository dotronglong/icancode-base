/**
 * HttpError
 */
export class HttpError {
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
  constructor(
      status: number,
      code?: string,
      message?: string,
      cause?: any,
  ) {
    this.status = status;
    this.code = code || '';
    this.message = message || '';
    this.cause = cause || null;
  }
}
