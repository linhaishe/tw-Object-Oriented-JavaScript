module.exports = class Person{
    constructor(num, name, age){
        this.num = num;
        this.name = name;
        this.age = age;
    }
    introduce(){
        return "My name is " + this.name +". I am " + this.age+ " years old.";
    }
}