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
/*
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
}); */

//Object.create - object built as it inherits directly from the object passed into it
//Function constructor - Inherits from the constructors prototype property
//So: .create allows you to specify exactly where to inherit from

//IIFE - Lecture 67
//Normal function
/*
function game()
{
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();*/

//IIFE
/*
( function()
    {
        var score = Math.random() * 10;
        console.log(score >= 5);
    }
) (); */
/*
//Closures
function retirement(retirementAge)
{
    var a = ' years left until retirement';
    return function(yearOfBirth)
    {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

retirement(66)(1999);
*/











/*
function interviewQuestions(job)
{
    return function(name)
    {
        var question;
        if (job === 'designer')
        {
            question = "can you please explain what UX design is?";
        }
        else if (job === 'teacher')
        {
            question = "what subject do you teach?";
        }
        else
        {
            question = "what do you do?";
        }
        console.log(name+", "+question);
    }
}
interviewQuestions('teacher')('Yusuf'); */

//Lecture: Bind, Call and Apply.

var john = 
{
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeofDay)
    {
        if (style === 'formal')
        {
            console.log('Good '+timeofDay+', Ladies and Gentleman! I\'m ' + this.name + ', I\'m a '+this.job+', and I\'m '+this.age+ ' years old.');
        }

        else if (style === 'friendly')
        {
            console.log('Hey there! I\'m ' + this.name + ', I\'m a '+this.job+', and I\'m '+this.age+ ' years old. Have a nice '+timeofDay);
        }
    }
};

var emily = 
{
    name: 'Emily',
    age: 35,
    job: 'designer'
};

//Call
john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'afternoon');

//Bind
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

//Bind in practice
var years = [1990, 1965, 1937, 2005, 1998];

//Loops through given array, applies the given function, and returns the result of these operations.
function arrayCalc(arr, fn)
{
    var arrRes = [];

    for (var i=0; i < arr.length; i++)
    {
        arrRes.push( fn(arr[i]) );
    }

    return arrRes;
}

function calculateAge(el)
{
    return 2018 - el;
}

function isFullAge(limit, el)
{
    return el >= limit;
}

//PROBLEM: The original function only takes one parameter, arr[i].
//But here, we want to *also* pass in a parameter 'limit'
//SOLUTION: Pass the function in as a binded function so limit argument is filled.
var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);

