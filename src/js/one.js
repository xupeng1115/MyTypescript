"use strict";
/*
*   基础类型
*
*/
var Student = /** @class */ (function () {
    function Student(fiestName, lastName) {
        this.firstName = fiestName;
        this.lastName = lastName;
    }
    Student.prototype.greeter = function () {
        return "Hello,\u60A8\u597D" + this.firstName + this.lastName;
    };
    return Student;
}());
var user = new Student("王", "小明");
var ele = document.body || document.documentElement;
ele.innerHTML = user.greeter();
function sayHello(person) {
    return 'Hello, ' + person;
}
var title = 'Tom';
console.log(sayHello(title));
var isDone = true;
var createByNewGBoolean = new Boolean(1);
console.log(typeof createByNewGBoolean);
var createByBoolean = Boolean(1);
console.log(typeof createByBoolean);
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
var myName = 'Tom';
var myAge = 25;
var sentence = "Hello,my name is " + myName + ". I'll be " + (myAge + 1) + " years old next month.";
console.log(sentence);
//void:没有返回任何值；
function alertName() {
    console.log('My name is Tom');
}
alertName();
var u = undefined;
var n = null;
var o;
var num = infinityNumber;
var list = [1, 2, 3];
console.log(list);
//数组泛型
var list1 = [1, 2, 3];
//元祖Tuple:表示已知元素数量和类型的数组，各元素的类型不必相同，
var x;
x = ['hello', 10];
console.log(x[0].substr(1));
x[3] = 'world';
console.log(x);
console.log(x[4]);
//联合类型是高级主题
//枚举类型：为一组数据赋值；
//默认从0开始为元素编号，也可以手动的指定成员的的数值，
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 4] = "Blue";
})(Color1 || (Color1 = {}));
;
var d = Color1.Green;
console.log(d);
var colorName = Color1[4];
console.log(colorName);
//Any:当不清楚类型的变量指定哪一个类型时，这些值来自于动态内容，使用any类型来标记变量；
var notSure = 4;
notSure = "maybe a string instead";
console.log(notSure);
var list2 = [1, true, 'free'];
console.log(list2[1]);
//Void:void类型与any类型相反，扁丝没有任何类型，当一个函数没有返回值时，通常返回值类型是void；
function warnUser() {
    console.log('This is my warning message');
}
//只能给void类型的变量赋予undefined;
var un = undefined;
//never类型表示：永不存在的值的类型，比如一定会抛出异常或根本不会偶遇返回值的函数,存在无法到达的终点；
function error(message) {
    throw new Error(message);
}
//类型断言：类似于类型转换
//1.尖括号语法
var someValue = 'this is a string';
var strLength = someValue.length;
console.log(strLength);
//as语法：
var strLength2 = someValue.length;
