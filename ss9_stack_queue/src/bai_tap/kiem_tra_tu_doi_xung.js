"use strict";
exports.__esModule = true;
var Stack_1 = require("../thuc_hanh/cai_stack/Stack");
var Queue_1 = require("../thuc_hanh/cai_dat_queue/Queue");
var string = "abcdcba";
var string2 = "abcdcba";
var stack = new Stack_1.Stack();
var queue = new Queue_1.Queue();
for (var i = 0; i < string.length; i++) {
    stack.push(string[i]);
    queue.enqueue(string[i]);
}
var flag = true;
while (stack.size() > 0) {
    if (stack.pop() != queue.dequeue()) {
        flag = false;
        break;
    }
}
if (flag) {
    console.log("OK");
}
else {
    console.log("NO");
}
