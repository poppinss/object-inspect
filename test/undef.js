var test = require('tape');
var inspect = require('../');
var endent = require('endent').default;

var obj = { a: 1, b: [3, 4, undefined, null], c: undefined, d: null };

test('undef and null', function (t) {
  t.plan(1);
  t.equal(
    inspect(obj),
    endent`{
      "a": 1,
      "b": [
        3,
        4,
        undefined,
        null
      ],
      "c": undefined,
      "d": null
    }`
  );
});
