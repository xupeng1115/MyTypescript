/*
*   枚举：
*   
*/

//数字枚举：
enum Direction{
    up=1,
    Down,
    Left,
    Right
}

console.log(Direction);

enum D{
    up,
    down,
    left,
    right
}

console.log(D);

enum R{
    No=0,
    Yes=1
}
function res(recipient:string,message:R):void{
    console.log(message);
}
console.log(res("llll",R.Yes));

//字符串枚举
enum S{
    Up="UP",
    Down="DOWN",
    Left="LEFT",
    Right="RIGHT",
}

console.log(S);

//异构枚举
enum BooleanString{
    NO=0,
    Yes="YES",
}

console.log(BooleanString);

//计算的和常量成员
enum E{X};
console.log(E);

enum E1{X,Y,Z};
enum E2{
    A=1,B,C
}
console.log(E1);
console.log(E2);

enum FileAccess{
    None,
    Read =1<<1,
    Write =1<<2,
    ReadWrite =Read|Write,
    G="123".length
}
console.log(FileAccess);

//联合枚举和枚举成员的类型
enum Enum{
    A
}

let aaa=Enum.A;
let nameOfAAA=Enum[aaa];
console.log(nameOfAAA);

//const枚举
const enum Enum2{
    A=1,
    B=1*2
}
let EEE=[Enum2.A,Enum2.B];
console.log(EEE);

//外部枚举
declare enum Enum3{
    A=1,
    B,
    C=2
}
// let EEEE=[Enum3.A,Enum3.B];
// console.log(EEEE);


