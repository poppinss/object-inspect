'use strict';

var { string } = require('../..');
var Buffer = require('safer-buffer').Buffer;
var { writeFileSync } = require('fs');
const { join } = require('path');

var holes = ['a', 'b'];
holes[4] = 'e';
holes[6] = 'g';
var error = new Error('Go away');
error.code = 'E_MODULE_NOT_FOUND';
error.statusCode = 503;
error.messages = { invalid: true };

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
  err: error,
  balance: BigInt(100),
  id: Symbol('1234'),
  scores: new Set([1, 2, 3]),
  classes: new Map([['english', '1st'], ['maths', '2nd']]),
  currentScores: new WeakSet([[1, 2, 3]]),
  currentClasses: new WeakMap([[['english', '1st'], ['maths', '2nd']]]),
  now: new Date()
};
obj.self = obj;

writeFileSync(join(__dirname, './all.html'), `
<html>
<head>
 <style>
   * {
     margin: 0;
     padding: 0;
   }

   body {
     font-size: 18px;
     padding: 40px 100px;
   }
 </style>
</head>
<body>
 ${string.html(obj)}
</body>
</html>
`);
