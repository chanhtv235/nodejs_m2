"use strict";
exports.__esModule = true;
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this.color = color;
        this.radius = radius;
    }
    Circle.prototype.setColor = function (color) {
        this.color = color;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getColor = function () {
        return this.color;
    };
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.toString = function () {
        return "A Circle with radius="
            + this.getRadius()
            + ", color: " + this.color;
    };
    return Circle;
}());
exports.Circle = Circle;
