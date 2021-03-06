// This file was procedurally generated from the following sources:
// - src/spread/mult-err-itr-get-get.case
// - src/spread/error/member-expr.template
/*---
description: Spread operator following other arguments when GetIterator fails (@@iterator property access) (`new` operator)
esid: sec-new-operator-runtime-semantics-evaluation
es6id: 12.3.3.1
features: [Symbol.iterator]
flags: [generated]
info: |
    MemberExpression : new MemberExpression Arguments

    1. Return EvaluateNew(MemberExpression, Arguments).

    12.3.3.1.1 Runtime Semantics: EvaluateNew

    6. If arguments is empty, let argList be an empty List.
    7. Else,
       a. Let argList be ArgumentListEvaluation of arguments.
       [...]

    12.3.6.1 Runtime Semantics: ArgumentListEvaluation

    ArgumentList : ArgumentList , ... AssignmentExpression

    1. Let precedingArgs be the result of evaluating ArgumentList.
    2. Let spreadRef be the result of evaluating AssignmentExpression.
    3. Let iterator be GetIterator(GetValue(spreadRef) ).
    4. ReturnIfAbrupt(iterator).

    7.4.1 GetIterator ( obj, method )

    1. If method was not passed, then
       a. Let method be ? GetMethod(obj, @@iterator).
---*/
var iter = {};
Object.defineProperty(iter, Symbol.iterator, {
  get: function() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  new function() {}(0, ...iter);
});
