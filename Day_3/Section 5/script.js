//Function constructor

//Using object literals
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

//Any instance of Person now has access to the calculateAge function.

var john = new Person('John', 1990, 'teacher'); //Instantiation of the Person object


