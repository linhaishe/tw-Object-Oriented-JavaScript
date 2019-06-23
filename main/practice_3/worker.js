let Person = require("../../main/practice_3/person.js");

class Worker extends Person{
    introduce(){
        return "I am a Worker. I have a job.";
    }
}

module.exports = Worker
