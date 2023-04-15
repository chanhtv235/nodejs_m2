// happy coding 👻
import {Stack} from "./thuc_hanh/cai_stack/Stack";
import {Queue} from "./thuc_hanh/cai_dat_queue/Queue";

console.log("hello world");

let stack = new Stack<number>();
stack.push(1);
stack.push(3);
stack.push(5);
stack.push(7);

console.log(stack.pop()) // output: 7


let queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue.dequeue()) // 1