'use strict';
 
const tape = require('tape');
const source = require('/Users/User/greenfox/Eszti88/Week-08/Day-01/poker-checker.js')

tape.test('can I have a green test?', t => {
  const result = 2;
  t.equal(result, source.addTwoNumbers(1, 1));
  t.end();
});