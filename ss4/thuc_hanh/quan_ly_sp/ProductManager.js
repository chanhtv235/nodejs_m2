"use strict";
exports.__esModule = true;
exports.ProductManager = void 0;
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.products = [];
    }
    ProductManager.prototype.getAll = function () {
        return this.products;
    };
    ProductManager.prototype.add = function (product) {
        this.products.push(product);
    };
    return ProductManager;
}());
exports.ProductManager = ProductManager;
