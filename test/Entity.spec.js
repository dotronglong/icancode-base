const {Entity} = require('../main')
const assert = require('assert');

class Rectangle extends Entity {
  constructor(height, width) {
    super();
    this.height = height;
    this.width = width;
  }
}

describe('Entity', function() {
  it('should import data from HashMap', function() {
    const rec = new Rectangle(10, 20);
    rec.fromHashMap({width: 30, unknown: 5});
    assert.equal(rec.height, 10);
    assert.equal(rec.width, 30);
    assert.equal(rec.unknown, undefined);
  });
});