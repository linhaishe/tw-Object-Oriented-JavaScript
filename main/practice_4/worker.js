
let Person = require("../../main/practice_4/person.js");

class Worker extends Person {
    introduce(){
        return this.basicIntroduce() + " I am a Worker. I have a job.";
    }
}

module.exports = Worker

