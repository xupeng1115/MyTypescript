/*
*   函数:
*
*/

let z=100;
function addToZ(x,y){
    return x+y+z;
}

console.log(addToZ(10,10));

//添加类型
function add(x:number,y:number):number{
    return x+y;
}

let myAdd=function(x:number,y:number):number{return x+y;};

console.log(add(10,10));

let add1:(x:number,y:number)=>number=function(x:number,y:number):number{return x+y;}

let myAdd2=function(x:number,y:number):number{return x+y;};

//传递一个函数的参数个数必须与函数期望的参数个数一致；
function buildName(firstName:string,lastName:string){
    return firstName+""+lastName;
}
// let result1=buildName("Bob");   //参数应该有两个
// let result2=buildName("Bob","Adams","Sr.");     //参数应该有两个
let result3=buildName('Bob','Adams');

function buildName2(firstName:string,lastName?:string){
    if(lastName){
        return firstName+" "+lastName;
    }else{
        return firstName;
    }
}

let result1=buildName2("Bob");
let result2=buildName2("Bob","Adams");

//剩余参数
function buildName3(firstName:string,...restOfName:string[]){
    return firstName+" "+restOfName.join(" ");
}

let buildNameFun:(fname:string,...rest:string[])=>string=buildName;

//js里，this的值在函数被调用的时候才会指定，才会指定函数调用的上下文
//解决方案是使用箭头函数，箭头函数能保存函数创建时的this值，而不是调用时的值；
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {

        //方式一：使用预存的this值
        // var _self=this;
        // return function() {
        //     let pickedCard = Math.floor(Math.random() * 52);
        //     let pickedSuit = Math.floor(pickedCard / 13);

        //     return {suit: _self.suits[pickedSuit], card: pickedCard % 13};
        // }

        //方式二：使用箭头函数
        return ()=>{
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);



