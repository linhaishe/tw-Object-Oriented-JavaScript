
// function Person(name, age) {
//     this.name = name
//     this.age = age
// }
// Person.prototype.introduce = function () {
//     return "My name is" + this.name + ". I am" + this.age + "years old.";

// }

// module.exports = Person

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        return "My name is "+ this.name + ". I am " + this.age +" years old.";
    }
}

module.exports = Person

//Class Declaration
// ES6 style
// class Animal {
//     constructor(name, weight) {
//         this.name = name;
//         this.weight = weight;
//     }
// }

// // Check Type of ES6 class
// typeof Animal // function

// // Traditional style
// function Animal(name, weight) {
//     this.name = name;
//     this.weight = weight;

// ES6 style
// class Animal {
//     constructor(name, weight) {
//         this.name = name;
//         this.weight = weight;
//     }
//     //...
// }

// Check Type of ES6 class
//typeof Animal // function

// Traditional style
// function Animal(name, weight) {
//     this.name = name;
//     this.weight = weight;

