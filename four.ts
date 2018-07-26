/*
*   类:
*
*
*/
class Greeterr{
    //属性
    greeting:string;
    //构造函数
    constructor(message:string){
        this.greeting=message;
    }
    //方法
    greet(){
        return 'Hello, '+this.greeting;
    }
}

let greeter=new Greeterr("world");
console.log(greeter);

//继承
//超类
class Animal{
    move(distanceInMeters:number=0){
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

//子类
class Dog extends Animal{
    bark(){
        console.log('Wof!Wof!');
    }
}

const dog=new Dog();
dog.bark();
dog.move(10);
dog.bark();



class Animal0{
    name:string;
    constructor(theName:string){
        this.name=theName;
    }
    move(distanceInMeters:number=0){
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal0{
    constructor(name:string){
        super(name);
    }
    move(distanceInMeters=5){
        console.log('Slithering...');
        super.move(distanceInMeters);
    }
}

class Horse extends Animal0{
    constructor(name:string){
        super(name);
    };
    move(distanceInMeters=45){
        console.log('Galloping...');
        super.move(distanceInMeters);
    }
}

let sam=new Snake('Sammy the Python');
let tom:Animal0=new Horse('Tommy the Palomino');

sam.move();
tom.move(34);

//公有，私有与受保护的修饰符
//成员默认都是public
//当成员被标计为private时，就不能声明他的类的外部访问
class Animal1{
    private name:string;
    public constructor(theName:string){
        this.name=theName;
    }
    public move(distanceInMeters:number){
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Rhino extends Animal1{
    constructor(){
        super('Rhino');
    }
}

class Employee{
    private name:string;
    constructor(theName:string){this.name=theName;}
}



let oAnimal=new Animal1('Cat');

let animal2=new Animal1('Gost');
let rhino=new Rhino();
let employee=new Employee('Bob');

animal2=rhino;
// animal2=employee;

//protected:作用和private一样但是可以在派生类的实例方法访问到，
class Person{
    protected name:string;
    constructor(name:string){
        this.name=name;
    }
}

class Employee2 extends Person{
    private department:string;
    constructor(name:string,department:string){
        super(name);
        this.department=department;
    }
    public getElevatorPitch(){
        return `Hello,my name is ${this.name} and I work in ${this.department}`;
    }
}

let howard=new Employee2("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name);

//readobnly修饰符：只读属性必须在声明或构造函数里被初始化
class Octopus{
    readonly name:string;
    readonly numberOfLegs:number=8;
    constructor(theName:string){
        this.name=theName;
    }
}

let dad=new Octopus('Man with the 8 strong legs');
// dad.name='Man with the 3-piece suit';

//静态属性：存在类本身，不存在类的实例上，
class Grid{
    static origin={x:0,y:0};
    cDFO(point:{x:number;y:number}){
        let xDist=(point.x-Grid.origin.x);
        let yDist=(point.y-Grid.origin.y);
        return Math.sqrt(xDist*xDist+yDist*yDist)/this.scale;
    }
    constructor(public scale:number){}
}

let grid1=new Grid(1.0);
let grid2=new Grid(5.0);
console.log(grid1.cDFO({x:10,y:10}));
console.log(grid2.cDFO({x:10,y:10}));
console.log(grid1);

//抽象类:作为其他派生类的基类使用，他们一般不会直接被实例化，不同于接口，抽象类可以包含成员的实现细节。abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法;

abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log('Department name: ' + this.name);
    }

    abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {

    constructor() {
        super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }

    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在





