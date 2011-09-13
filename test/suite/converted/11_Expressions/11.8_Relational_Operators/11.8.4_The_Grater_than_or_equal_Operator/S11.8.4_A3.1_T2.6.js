// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If Type(Primitive(x)) is not String or Type(Primitive(y)) is not String, then operator x >= y returns ToNumber(x) >= ToNumber(y)
 *
 * @section 11.8.4
 * @path 11_Expressions/11.8_Relational_Operators/11.8.4_The_Grater_than_or_equal_Operator/S11.8.4_A3.1_T2.6.js
 * @description Type(Primitive(x)) is different from Type(Primitive(y)) and both types vary between String (primitive or object) and Undefined
 */

//CHECK#1
if ("1" >= undefined !== false) {
  $ERROR('#1: "1" >= undefined === false');
}

//CHECK#2
if (undefined >= "1" !== false) {
  $ERROR('#2: undefined >= "1" === false');
}

//CHECK#3
if (new String("1") >= undefined !== false) {
  $ERROR('#3: new String("1") >= undefined === false');
}

//CHECK#4
if (undefined >= new String("1") !== false) {
  $ERROR('#4: undefined >= new String("1") === false');
}
