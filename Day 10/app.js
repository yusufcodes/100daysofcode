
// Data Controller
var budgetController = (function()
{
    //Data controller code

})();


//UI Controller
var UIController = (function() 
{
    return {
        getInput: function()
        {
            return {
            type: document.querySelector('.add__type').value, //income or expense
            description: document.querySelector('.add__description').value,
            value: document.querySelector('.add__value').value
            };
        }
    };


})();



//Main controller - connects the UI and Data modules
//How? They are passed in as parameters
var controller = (function(budgetCtrl, UICtrl)
{
    var ctrlAddItem = function()
    {
        // 1. Get the input data from the field
        var input = UIController.getInput();
        console.log(input);
        // 2. Add item to the budget controller
        // 3.Add item to the UI
        // 4. Calculate the budget
        // 5. Display budget on UI

    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event)
    {
        if (event.keyCode === 13 || event.which === 13) //which property - older browsers
        {
            ctrlAddItem();
        }
    });
    

})(budgetController, UIController);