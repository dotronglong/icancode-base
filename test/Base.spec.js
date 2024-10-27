const {toHashMap, toView, setNestedValue, removeNestedValue} = require("../main");
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

  it('should return all data (include)', function() {
    assert.deepEqual(toHashMap(new Dummy(), {include: ["foo", "bas"]}), {
      foo: "AAA",
      bas: {
        baz: "CCC"
      }
    });
  });

  it('should return all data (exclude)', function() {
    assert.deepEqual(toHashMap(new Dummy(), {exclude: ["bas", "arr"]}), {
      foo: "AAA",
      bar: "BBB"
    });
  });
});

describe('toView', function() {
  it('should return all data (only function)', function() {
    assert.deepEqual(toView(new Dummy(), {include: ['foo', 'bar']}), {
      foo: "AAA",
      bar: "BBB"
    });
  });
});

describe('setNestedValue', function() {
  it('should mask data correctly when path is a string', function() {
    const data = { sensitive: { password: "1234", token: "abcd" } };
    setNestedValue(data, 'sensitive.password', '***');
    assert.strictEqual(data.sensitive.password, '***');
  });
  it('should mask data correctly when path is an array of string', function() {
    const data = { sensitive: { password: "1234", token: "abcd" } };
    setNestedValue(data, ['sensitive.password', 'sensitive.token'], '***');
    assert.strictEqual(data.sensitive.password, '***');
    assert.strictEqual(data.sensitive.token, '***');
  });
});

describe('removeNestedValue', function() {
  it('should remove data correctly when path is a string', function() {
    const data = { sensitive: { password: "1234", token: "abcd" } };
    removeNestedValue(data, 'sensitive.password');
    assert.strictEqual(data.sensitive.password, undefined);
  });
  it('should remove data correctly when path is an array of string', function() {
    const data = { sensitive: { password: "1234", token: "abcd" } };
    removeNestedValue(data, ['sensitive.password', 'sensitive.token']);
    assert.strictEqual(data.sensitive.password, undefined);
    assert.strictEqual(data.sensitive.token, undefined);
  });
});