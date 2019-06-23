module.exports = class Student{
    constructor(num, name, age, klass){
        this.num = num;
        this.name = name;
        this.age = age;
        this.klass = klass;
    }
    introduce(){
        if(this.klass.leader === undefined){
            return "My name is "+ this.name +". I am "+this.age+" years old. I am a Student. I am at Class " + this.klass.number+ "."
        } else {
            return "My name is "+ this.name +". I am "+this.age+" years old. I am a Student. I am Leader of Class " + this.klass.number+ ".";
        }

    }

}