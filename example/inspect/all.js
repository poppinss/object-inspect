'use strict';

var { inspect } = require('../../');
var Buffer = require('safer-buffer').Buffer;

var holes = ['a', 'b'];
holes[4] = 'e';
holes[6] = 'g';

var obj = {
  a: 1,
  b: [3, 4, undefined, null],
  c: undefined,
  d: null,
  e: {
    regex: /^x/i,
    buf: Buffer.from('abc'),
    holes: holes
  },
  balance: BigInt(100),
  id: Symbol('1234'),
  scores: new Set([1, 2, 3]),
  classes: new Map([['english', '1st'], ['maths', '2nd']]),
  currentScores: new WeakSet([[1, 2, 3]]),
  currentClasses: new WeakMap([[['english', '1st'], ['maths', '2nd']]]),
  now: new Date()
};
obj.self = obj;

console.log(inspect(obj));
JSON.parse(inspect(obj));
