"use strict";
exports.__esModule = true;
var Product_1 = require("./Product");
var ProductManager_1 = require("./ProductManager");
var laptop = new Product_1.Product("Laptop", 20000);
var iphone = new Product_1.Product("Iphone", 10000);
var productManager = new ProductManager_1.ProductManager();
productManager.add(laptop);
productManager.add(iphone);
console.log(productManager.getAll());
