var test = require('tape');
var hasSymbols = require('has-symbols')();
var utilInspect = require('../util.inspect');
var endent = require('endent').default;

var inspect = require('..');

test('inspect custom symbol', { skip: !hasSymbols || !utilInspect }, function (t) {
  t.plan(1);

  var obj = { inspect: function () { return 'string'; } };
  obj[utilInspect.custom] = function () { return 'symbol'; };

  t.equal(inspect([obj, []]), endent`[
    ${utilInspect.custom ? 'symbol' : 'string'},
    []
  ]`);
});
