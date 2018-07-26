"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/*
*   变量声明
*
*
*/
//对一个对象实例展开时，会丢失其方法；
var C = /** @class */ (function () {
    function C() {
        this.p = 123;
    }
    C.prototype.m = function () {
    };
    return C;
}());
var dd = new C();
console.log(dd);
var clone = __assign({}, dd);
console.log(clone);
clone.p;
//无法访问到
// clone.m();
