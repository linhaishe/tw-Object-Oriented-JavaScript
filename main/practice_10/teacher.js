let Person = require("../../main/practice_10/person.js");
class Teacher extends Person {

    constructor(id,name,age,klasses) {
        super(id,name,age);
        this.klasses = klasses;
    }

    introduce() {

        if(this.klasses == undefined){
            return super.introduce() + " I am a Teacher. I teach No Class." ;
        } else {
            return super.introduce() + " I am a Teacher. I teach Class " + this.klasses[0].number + ", "+ this.klasses[1].number + "." ;
        }
    }

    isTeaching(Student){

    }
}

module.exports = Teacher;