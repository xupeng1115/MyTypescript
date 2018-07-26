/*
*   变量声明
*
*
*/
//对一个对象实例展开时，会丢失其方法；
class C{
    p=123;
    m(){

    }
}
let dd=new C();
console.log(dd);
let clone={...dd};
console.log(clone);
clone.p;
//无法访问到
// clone.m();




