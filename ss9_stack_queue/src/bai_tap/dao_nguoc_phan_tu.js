"use strict";
exports.__esModule = true;
var Stack_1 = require("../thuc_hanh/cai_stack/Stack");
var arrry = [1, 2, 3, 4, 5, 6, 7];
var stack = new Stack_1.Stack();
arrry.forEach(function (e) { return stack.push(e); });
while (stack.size() > 0) {
    console.log(stack.pop() + ",");
}
