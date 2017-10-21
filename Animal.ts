interface Animal{
    name:string;
    age:number;
    height:number;
    printInfo():void;
}

class Cat implements Animal{
    name:string;
    age:number;
    height:number;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    printInfo(){
        console.log("이름 : " + this.name);
        console.log("나이 : " + this.age);
    }
    printName():void{
        console.log("이름: " + this.name);
    }
}

class Bird implements Animal{
    name:string; 
    age:number;
    height:number;
    kind:string;
    constructor(kind:string){
        this.kind = kind;
    }
    printInfo(){
        console.log("이 새의 종류는 :" + this.kind);
    }
}
class Chicken extends Bird{
    constructor(kind:string){
        super(kind);
    }
    printInfo() : void{
        super.printInfo();
        console.log("내 종류: 당연히 닭이지");
        console.log("test");
    }
}
let c:Animal = new Chicken("닭");
c.printInfo();
//console.log(typeof c);

function printSomething( a:Animal){
    c.printInfo();
}
/* let dd:Cat = new Cat("동동이",4);
dd.printInfo();
dd.printName();
printSomething(dd);
let d2:Animal = new Cat("사랑이",3); */
