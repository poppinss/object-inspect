var inspect = require('../');
var test = require('tape');
var endent = require('endent').default;

test('deep', function (t) {
  t.plan(2);
  var obj = [[[[[[500]]]]]];
  t.equal(inspect(obj), endent`[
    [
      [
        [
          [
            "[Object]"
          ]
        ]
      ]
    ]
  ]`);

  t.equal(inspect(obj, { depth: 2 }), endent`[
    [
      "[Object]"
    ]
  ]`);
});
