"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (a, b) {

  // ES6 Features Test!
  var nums = [a, b];
  var newNums = nums.map(function (n) {
    return n + 3;
  });

  var str = "You are adding together " + a + " and " + b;

  return newNums[0] + newNums[1];
};

module.exports = exports["default"];