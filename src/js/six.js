"use strict";
/*
*   泛型：创建可重用的组件，一个组件可以支持多种类型的数据
*
*/
//不用泛型
function identity(arg) {
    return arg;
}
//使用泛型（保证返回值的类型和传入参数的类型相同），只能表示类型，不是值
function identlity2(arg) {
    return arg;
}
//指定类型
var output = identlity2("myString");
console.log(output);
//常用方式
function logoing(arg) {
    console.log(arg.length);
    return arg;
}
console.log(logoing([1, 3, 4, 4]));
