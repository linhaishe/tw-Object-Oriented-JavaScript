let Person = require("../../main/practice_8/person.js");


// module.exports = class Teacher extends Person {
//     constructor(num, name, age, klass) {
//         super(name, age);
//         this.num = num;
//         this.klass = klass;
//     }
//     introduce() {
//         if (this.klass !== undefined) {
//             return super.introduce() + " I am a Teacher. I teach Class " + this.klass.number + ".";
//         } else {
//             return super.introduce() + " I am a Teacher. I teach No Class.";
//         }
//     }
// }

class Teacher extends Person {
	
    constructor(num,name,age,klass) {
      super(num,name,age);
      this.klass = klass;
    }
  
  
    introduce() {
        if(this.klass != undefined){
          return super.introduce() + " I am a Teacher. I teach Class " + this.klass.number + "." ;
        } else{
          return super.introduce() + " I am a Teacher. I teach No Class." ;
        }
    }
  }
  
  module.exports = Teacher;