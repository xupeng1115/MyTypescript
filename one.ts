/*
*   基础类型
*
*/

class Student {
    firstName : string;
    lastName : string;

    constructor(fiestName : string,  lastName : string) {
        this.firstName = fiestName;
        this.lastName = lastName;
    }
    greeter() {
        return `Hello,您好${this.firstName}${this.lastName}`;
    }
}
var user = new Student("王","小明");
var ele = document.body || document.documentElement;
ele.innerHTML = user.greeter();

function sayHello(person:string){
    return 'Hello, '+person;
}

let title:string='Tom';
console.log(sayHello(title));

let isDone:boolean=true;

let createByNewGBoolean=new Boolean(1);
console.log(typeof createByNewGBoolean);

let createByBoolean:boolean=Boolean(1);
console.log(typeof createByBoolean);

let decLiteral:number=6;
let hexLiteral:number=0xf00d;
let binaryLiteral:number=0b1010;
let octalLiteral:number=0o744;
let notANumber:number=NaN;
let infinityNumber:number=Infinity;

let myName:string='Tom';
let myAge:number=25;

let sentence:string=`Hello,my name is ${myName}. I'll be ${myAge+1} years old next month.`;
console.log(sentence);

//void:没有返回任何值；
function alertName():void{
    console.log('My name is Tom');
}

alertName();

let u:undefined=undefined;
let n:null=null;

let o:void;
let num:number=infinityNumber;

let list:number[]=[1,2,3];
console.log(list);

//数组泛型
let list1:Array<number>=[1,2,3];

//元祖Tuple:表示已知元素数量和类型的数组，各元素的类型不必相同，
let x:[string,number];
x=['hello',10];
console.log(x[0].substr(1));

x[3]='world';
console.log(x);
console.log(x[4]);

//联合类型是高级主题
//枚举类型：为一组数据赋值；
//默认从0开始为元素编号，也可以手动的指定成员的的数值，
enum Color {Red,Green,Blue};
let c:Color=Color.Green;
console.log(c);

enum Color1 {Red=1,Green=2,Blue=4};
let d:Color1=Color1.Green;
console.log(d);

let colorName:string=Color1[4];
console.log(colorName);

//Any:当不清楚类型的变量指定哪一个类型时，这些值来自于动态内容，使用any类型来标记变量；
let notSure:any=4;
notSure="maybe a string instead";
console.log(notSure);

let list2:any[]=[1,true,'free'];
console.log(list2[1]);

//Void:void类型与any类型相反，扁丝没有任何类型，当一个函数没有返回值时，通常返回值类型是void；
function warnUser():void{
    console.log('This is my warning message');
}

//只能给void类型的变量赋予undefined;
let un:void=undefined;

//never类型表示：永不存在的值的类型，比如一定会抛出异常或根本不会偶遇返回值的函数,存在无法到达的终点；
function error(message:string):never{
    throw new Error(message);
}

//类型断言：类似于类型转换
//1.尖括号语法
let someValue:any='this is a string';
let strLength:number=(<string>someValue).length;
console.log(strLength);

//as语法：
let strLength2:number=(someValue as string).length;



