// kiểm thử
import {Circle} from "./Circle";
import {Cylinder} from "./Cylinder";

let c = new Circle("blue",10);
let cylinder = new Cylinder('red',20,10);
console.log(`diện tích hình tròn ${c.getArea()}`)
console.log(`thể tích hình trụ ${cylinder.getVolume()}`)