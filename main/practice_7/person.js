class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        return this.basicIntroduce();
    }
    basicIntroduce(){
        return "My name is " + this.name + ". I am " + this.age + " years old.";
    }
}
module.exports = Person


