var inspect = require('../');
var endent = require('endent').default;
var test = require('tape');

test('circular', function (t) {
  t.plan(1);
  var obj = { a: 1, b: [3, 4] };
  obj.c = obj;
  console.log(inspect(obj));
  t.equal(inspect(obj), endent`{
    "a": 1,
    "b": [
      3,
      4
    ],
    "c": "[Circular]"
  }`);
});
