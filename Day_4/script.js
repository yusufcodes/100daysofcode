//Function constructor

//Using object literals
/*
//Lecture 61+62
var john = 
{
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
}

//Function Constructor: begin with capitals

var Person = function(name, yearOfBirth, job)
{
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
//Adding to the Prototype property of 'Person'
Person.prototype.calculateAge = function()
{
    console.log("Code goes here!");
}

Person.prototype.lastName = 'Smith';

//Any instance of Person now has access to the calculateAge function.

var john = new Person('John', 1990, 'teacher'); //Instantiation of the Person object

john.calculateAge();

console.log(john.lastName);*/

//Lecture 63: Object.create
var personProto = 
{
    calculateAge: function()
    {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);

var jane = Object.create(personProto, 
{
    name: {value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value:'designer'}
});

//Object.create - object built as it inherits directly from the object passed into it
//Function constructor - Inherits from the constructors prototype property
//So: .create allows you to specify exactly where to inherit from

//IIFE - Lecture 67
//Normal function

function game()
{
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();
