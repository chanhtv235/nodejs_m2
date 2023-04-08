"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.ThreedPointD = void 0;
var TwoDPoint_1 = require("./TwoDPoint");
var ThreedPointD = /** @class */ (function (_super) {
    __extends(ThreedPointD, _super);
    function ThreedPointD(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    ThreedPointD.prototype.setZ = function (z) {
        this.z = z;
    };
    ThreedPointD.prototype.getZ = function () {
        return this.z;
    };
    ThreedPointD.prototype.setXYZ = function (x, y) {
        _super.prototype.setXY.call(this, x, y);
        this.setZ(this.z);
    };
    ThreedPointD.prototype.getXYZ = function () {
        return __spreadArray(__spreadArray([], this.getXY(), true), [this.z], false);
    };
    ThreedPointD.prototype.toString = function () {
        return "A 3D point with x="
            + this.getX()
            + ", y: " + this.getY()
            + ", z: " + this.getZ();
    };
    return ThreedPointD;
}(TwoDPoint_1.TwoDPoint));
exports.ThreedPointD = ThreedPointD;
