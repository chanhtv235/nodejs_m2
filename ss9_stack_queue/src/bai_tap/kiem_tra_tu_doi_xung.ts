import {Stack} from "../thuc_hanh/cai_stack/Stack";
import {Queue} from "../thuc_hanh/cai_dat_queue/Queue";

let string ="abcdcba";
let string2 ="abcdcba";

let stack = new Stack();
let queue = new Queue();
for (let i=0; i<string.length;i++) {
    stack.push(string[i]);
    queue.enqueue(string[i]);
}
let flag=true;
while (stack.size()>0){
    if (stack.pop()!=queue.dequeue()){
       flag =false;
       break;
    }
}
if (flag){
    console.log("OK");
}else {
    console.log("NO")
}