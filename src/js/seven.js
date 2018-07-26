"use strict";
/*
*   枚举：
*
*/
//数字枚举：
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction);
var D;
(function (D) {
    D[D["up"] = 0] = "up";
    D[D["down"] = 1] = "down";
    D[D["left"] = 2] = "left";
    D[D["right"] = 3] = "right";
})(D || (D = {}));
console.log(D);
var R;
(function (R) {
    R[R["No"] = 0] = "No";
    R[R["Yes"] = 1] = "Yes";
})(R || (R = {}));
function res(recipient, message) {
    console.log(message);
}
console.log(res("llll", R.Yes));
//字符串枚举
var S;
(function (S) {
    S["Up"] = "UP";
    S["Down"] = "DOWN";
    S["Left"] = "LEFT";
    S["Right"] = "RIGHT";
})(S || (S = {}));
console.log(S);
//异构枚举
var BooleanString;
(function (BooleanString) {
    BooleanString[BooleanString["NO"] = 0] = "NO";
    BooleanString["Yes"] = "YES";
})(BooleanString || (BooleanString = {}));
console.log(BooleanString);
//计算的和常量成员
var E;
(function (E) {
    E[E["X"] = 0] = "X";
})(E || (E = {}));
;
console.log(E);
var E1;
(function (E1) {
    E1[E1["X"] = 0] = "X";
    E1[E1["Y"] = 1] = "Y";
    E1[E1["Z"] = 2] = "Z";
})(E1 || (E1 = {}));
;
var E2;
(function (E2) {
    E2[E2["A"] = 1] = "A";
    E2[E2["B"] = 2] = "B";
    E2[E2["C"] = 3] = "C";
})(E2 || (E2 = {}));
console.log(E1);
console.log(E2);
var FileAccess;
(function (FileAccess) {
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
console.log(FileAccess);
//联合枚举和枚举成员的类型
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
var aaa = Enum.A;
var nameOfAAA = Enum[aaa];
console.log(nameOfAAA);
var EEE = [1 /* A */, 2 /* B */];
console.log(EEE);
// let EEEE=[Enum3.A,Enum3.B];
// console.log(EEEE);
