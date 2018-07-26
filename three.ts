/*
*   接口：为这些类型命名和为你的代码或第三方代码定义契约
*   
*
*/

function printLabel(labelobj:{label:string}){
    console.log(labelobj.label);
}

let myObj={size:10,label:"Size 10 Object"};
printLabel(myObj);

//使用接口来描述：必须包含一个label属性且类型为string;
interface LabelledValue {
    label: string;
};

function print2(labelledObj: LabelledValue):void {
    console.log(labelledObj.label);
};

let obj1 = {size: 10, label: "Size 100 Object"};
print2(obj1);

//接口里的属性可以不是必须的
interface Config{
    color?:string;
    width?:number;
    [propName:string]:any;
}

function createSquare(config:Config){
    let newSquare={color:'white',area:100};
    if(config.color){
        newSquare.color=config.color;
    }
    if(config.width){
        newSquare.area=config.width*config.width;
    }
    return newSquare;
}

let mySquare=createSquare({colour:'black',width:1000});
console.log(mySquare);


//只读属性:只在对象刚创建时可以修改其值，你可以在属性名前用readonly来指定只读属性；
interface Point{
    readonly x:number;
    readonly y:number;
}

let p1:Point={x:10,y:20};
//只读属性
// p1.x=5;

//只读泛型也起到只读的作用
let a:number[]=[1,3,4,5,5];
let ro:ReadonlyArray<number>=a;
// ro[0]=100;

//可以用类型断言重写
a=ro as number[];
a[0]=1000;
console.log(a);

//作为变量时使用const，作为属性时使用readonly;
//函数类型：接口也可以描述函数类型
interface SearchFunc{
    (source:string,subString:string):boolean;
}

let mySearch:SearchFunc;
mySearch=function(source:string,subString:string){
    let result=source.search(subString);
    return result>-1;
}

//可索引的类型
interface StringArray{
    [index:number]:string;
}

let myArray:StringArray;
myArray=['Bob','Fred'];
let myStr:string=myArray[0];
console.log(myStr);


//类类型
interface ClockInterface {
    currentTime:number;
}

class Clock2 implements ClockInterface {
    currentTime=100;
    constructor(h: number, m: number) { }
}

//继承接口
interface Shape{
    color:string;
}

interface PenStroke{
    penWidth:number;
}

interface Square extends Shape,PenStroke{
    sideLength:number;
}

let square=<Square>{};
square.color="blue";
square.sideLength=10;
square.penWidth=100;

//混合类型
interface Counter{
    (start:number):string;
    interval:number;
    reset():void;
}

function getCounter():Counter{
    let counter=<Counter>function (start:number){};
    counter.interval=123;
    counter.reset=function(){};
    return counter;
}

let cc=getCounter();
cc(10);
cc.reset();
cc.interval=5.0;

//接口继承类
class Control{
    private state:any;
}

interface SelecttableControl extends Control{
    select():void;
}

class Button extends Control implements SelecttableControl{
    select(){}
}

class TextBox extends Control{
    select(){};
}






