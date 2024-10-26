const {isHttpError} = require('../main')
const assert = require('assert');

describe('isHttpError', function() {
  it('should return false when error is not a HttpError', function() {
    const e1 = { status: "OK" };
    const e2 = { status: 200, code: 1 };
    const e3 = { status: 200, code: "OK" };
    const e4 = { status: 200, code: "OK", message: true };
    assert.equal(isHttpError(e1), false);
    assert.equal(isHttpError(e2), false);
    assert.equal(isHttpError(e3), false);
    assert.equal(isHttpError(e4), false);
  });
  it('should return false when error is a HttpError', function() {
    const e = { status: 200, code: "OK", message: "OK" };
    assert.ok(isHttpError(e));
  });
});