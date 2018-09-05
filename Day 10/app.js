// Data Controller
var budgetController = (function()
{
    var x = 23;

    var add = function(a)
    {
        return x + a;
    }

    return {
        publicTest: function(b)
        {
            return add(b);
        }
    }

})();

//UI Controller
var UIController = (function() 
{
    //Code to handle UI

})();

//Main controller - connects the UI and Data modules
//How? They are passed in as parameters
var controller = (function(budgetCtrl, UICtrl)
{
    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function()
        {
            console.log(z);
        }
    }

})(budgetController, UIController);