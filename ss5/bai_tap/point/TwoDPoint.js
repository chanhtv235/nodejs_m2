"use strict";
exports.__esModule = true;
exports.TwoDPoint = void 0;
var TwoDPoint = /** @class */ (function () {
    function TwoDPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    TwoDPoint.prototype.setX = function (x) {
        this.x = x;
    };
    TwoDPoint.prototype.setY = function (y) {
        this.y = y;
    };
    TwoDPoint.prototype.setXY = function (x, y) {
        this.x = x;
        this.y = y;
    };
    TwoDPoint.prototype.getX = function () {
        return this.x;
    };
    TwoDPoint.prototype.getY = function () {
        return this.y;
    };
    TwoDPoint.prototype.getXY = function () {
        return [this.x, this.y];
    };
    TwoDPoint.prototype.toString = function () {
        return "2D point with x="
            + this.getX()
            + ", y: " + this.getY();
    };
    return TwoDPoint;
}());
exports.TwoDPoint = TwoDPoint;
