let Person = require("../../main/practice_10/person.js");
module.exports = class Student extends Person {

    constructor(id,name,age,klass) {
        super(id,name,age)
        this.klass = klass;
    }


    introduce(){
        if(this.klass.leader === undefined){
            return super.introduce() + " I am a Student. I am at Class 2.";
        } else {
            return super.introduce() + " I am a Student. I am Leader of Class "+ this.klass.number +"."
        }
    }
}