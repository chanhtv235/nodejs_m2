import {Stack} from "../thuc_hanh/cai_stack/Stack";

let arrry: Array<number> = [1,2,3,4,5,6,7];
let stack = new Stack();
arrry.forEach(e=> stack.push(e));
while (stack.size()>0){
    console.log(stack.pop()+",")
}