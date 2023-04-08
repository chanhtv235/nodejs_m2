"use strict";
exports.__esModule = true;
// kiểm thử
var Circle_1 = require("./Circle");
var Cylinder_1 = require("./Cylinder");
var c = new Circle_1.Circle("blue", 10);
var cylinder = new Cylinder_1.Cylinder('red', 20, 10);
console.log("di\u1EC7n t\u00EDch h\u00ECnh tr\u00F2n ".concat(c.getArea()));
console.log("th\u1EC3 t\u00EDch h\u00ECnh tr\u1EE5 ".concat(cylinder.getVolume()));
