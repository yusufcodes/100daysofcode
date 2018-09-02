/* Closures */

//Example 1
function numberGenerator()
{
    var num = 1; //Free variable, used in closure

    function checkNumber()
    {
        console.log(num);
    }

    num++;
    return checkNumber;
}

var number = numberGenerator();
number();

function sayHello()
{
    var say = function()
    {
        console.log(hello);
    }

    var hello = 'Hello, world';
    return say;
}

var sayHelloClosure = sayHello();
sayHelloClosure();

