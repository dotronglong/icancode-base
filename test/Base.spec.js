const {toHashMap, toView} = require("../main");
const assert = require('assert');

class Dummy {
  constructor() {
    this.foo = "AAA";
    this.bar = "BBB";
    this.bas = new DummyChild();
    this.fib = (a) => a;
    this.arr = [];
  }
}

class DummyChild {
  constructor() {
    this.baz = "CCC";
  }
}

describe('toHashMap', function() {
  it('should return all data (only function)', function() {
    assert.deepEqual(toHashMap(new Dummy()), {
      foo: "AAA",
      bar: "BBB",
      bas: {
        baz: "CCC"
      },
      arr: []
    });
  });

  it('should return all data (only)', function() {
    assert.deepEqual(toHashMap(new Dummy(), ["foo", "bas"]), {
      foo: "AAA",
      bas: {
        baz: "CCC"
      }
    });
  });

  it('should return all data (ignore)', function() {
    assert.deepEqual(toHashMap(new Dummy(), null, ["bas", "arr"]), {
      foo: "AAA",
      bar: "BBB"
    });
  });
});

describe('toView', function() {
  it('should return all data (only function)', function() {
    assert.deepEqual(toView(new Dummy(), ['foo', 'bar']), {
      foo: "AAA",
      bar: "BBB"
    });
  });
});