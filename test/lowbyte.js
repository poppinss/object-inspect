var test = require('tape');
var inspect = require('../');
var endent = require('endent').default;

var obj = { x: 'a\rb', y: '\x05! \x1f \x12' };

test('interpolate low bytes', function (t) {
  t.plan(1);
  t.equal(
    inspect(obj),
    endent`{
      "x": 'a\\rb',
      "y": '\\x05! \\x1f \\x12'
    }`
  );
});
