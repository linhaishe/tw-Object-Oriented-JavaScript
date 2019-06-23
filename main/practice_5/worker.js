
let Person = require("../../main/practice_5/person.js");

class Worker extends Person {
    introduce(){
        return this.basicIntroduce() + " I am a Teacher. I have a job.";
    }
}

module.exports = Worker

