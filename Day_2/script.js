/*

Exploring the 'this' keyword

*/

var john = 
{
    name: 'john',
    yearOfBirth: 1990,
    calculateAge: function()
    {
        console.log(this); //Object - method call
        console.log(2016 - this.yearOfBirth);

        /*
        function innerFunction()
        {
            console.log(this); //Window - function call
        }

        innerFunction();
        */
    }
};

john.calculateAge();

var mike =
{
    name: 'Mike',
    yearOfBirth: 1984
};

//Method Borrowing
mike.calculateAge = john.calculateAge;

mike.calculateAge();