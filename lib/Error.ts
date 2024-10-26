import {HttpError} from './Http';

export const BadRequestError: HttpError = {
  status: 400,
  code: 'request.invalid',
  message: 'Request is not valid',
};
export const UnauthorizedError: HttpError = {
  status: 401,
  code: 'request.unauthorized',
  message: 'Request is not authorized',
};
export const ForbiddenError: HttpError = {
  status: 403,
  code: 'request.forbidden',
  message: 'Request is denied',
};
export const RequestDeniedError: HttpError = {
  status: 403,
  code: 'resource.forbidden',
  message: 'Request denied',
};
export const UnsupportedOperationError: HttpError = {
  status: 403,
  code: 'resource.forbidden',
  message: 'Unsupported Operation Error',
};
export const ResourceNotFoundError: HttpError = {
  status: 404,
  code: 'resource.notfound',
  message: 'Resource could not be found',
};
export const RequestNotFoundError: HttpError = {
  status: 404,
  code: 'request.notfound',
  message: 'Request could not be found',
};
export const InternalServerError: HttpError = {
  status: 500,
  code: 'server.error',
  message: 'Internal Server Error',
};
export const RequestValidationError = (message: string): HttpError => {
  return {status: 400, code: 'request.invalid', message};
};
