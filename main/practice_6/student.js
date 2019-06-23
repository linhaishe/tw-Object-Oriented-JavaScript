let Person = require("../../main/practice_6/person.js");

class Student extends Person{
    constructor(name, age, klass){
        super(name, age);
        this.klass = klass;
    }
    introduce(){
        return this.basicIntroduce() + " I am a Student. I am at Class " + this.klass + ".";
    }
}

module.exports = Student



