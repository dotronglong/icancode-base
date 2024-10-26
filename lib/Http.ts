/**
 * HttpError
 */
export interface HttpError {
  /**
   * Http Status Code
   * Example: 200, 401
   */
  status: number;

  /**
   * The error's code
   * Example: request.invalid, 000.001
   */
  code: string;

  /**
   * The error's message
   * Example: Request is invalid
   */
  message: string;

  /**
   * The root cause of error
   * It could be an instance of Error
   */
  cause?: any;
}

/**
 * Tells if a object is an implementation of HttpError
 * @param {any} e
 * @return {boolean}
 */
export function isHttpError(e: any): boolean {
  return typeof e.status === 'number' &&
  typeof e.code === 'string' &&
  typeof e.message === 'string';
}
