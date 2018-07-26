"use strict";
/*
*   函数:
*
*/
var z = 100;
function addToZ(x, y) {
    return x + y + z;
}
console.log(addToZ(10, 10));
//添加类型
function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) { return x + y; };
console.log(add(10, 10));
var add1 = function (x, y) { return x + y; };
var myAdd2 = function (x, y) { return x + y; };
//传递一个函数的参数个数必须与函数期望的参数个数一致；
function buildName(firstName, lastName) {
    return firstName + "" + lastName;
}
// let result1=buildName("Bob");   //参数应该有两个
// let result2=buildName("Bob","Adams","Sr.");     //参数应该有两个
var result3 = buildName('Bob', 'Adams');
function buildName2(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}
var result1 = buildName2("Bob");
var result2 = buildName2("Bob", "Adams");
//剩余参数
function buildName3(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var buildNameFun = buildName;
//js里，this的值在函数被调用的时候才会指定，才会指定函数调用的上下文
//解决方案是使用箭头函数，箭头函数能保存函数创建时的this值，而不是调用时的值；
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        //方式一：使用预存的this值
        // var _self=this;
        // return function() {
        //     let pickedCard = Math.floor(Math.random() * 52);
        //     let pickedSuit = Math.floor(pickedCard / 13);
        var _this = this;
        //     return {suit: _self.suits[pickedSuit], card: pickedCard % 13};
        // }
        //方式二：使用箭头函数
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
