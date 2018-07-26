"use strict";
/*
*   接口：为这些类型命名和为你的代码或第三方代码定义契约
*
*
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function printLabel(labelobj) {
    console.log(labelobj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
;
function print2(labelledObj) {
    console.log(labelledObj.label);
}
;
var obj1 = { size: 10, label: "Size 100 Object" };
print2(obj1);
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ colour: 'black', width: 1000 });
console.log(mySquare);
var p1 = { x: 10, y: 20 };
//只读属性
// p1.x=5;
//只读泛型也起到只读的作用
var a = [1, 3, 4, 5, 5];
var ro = a;
// ro[0]=100;
//可以用类型断言重写
a = ro;
a[0] = 1000;
console.log(a);
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var myArray;
myArray = ['Bob', 'Fred'];
var myStr = myArray[0];
console.log(myStr);
var Clock2 = /** @class */ (function () {
    function Clock2(h, m) {
        this.currentTime = 100;
    }
    return Clock2;
}());
var square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 100;
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var cc = getCounter();
cc(10);
cc.reset();
cc.interval = 5.0;
//接口继承类
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.select = function () { };
    ;
    return TextBox;
}(Control));
