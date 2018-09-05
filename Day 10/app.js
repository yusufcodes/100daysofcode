
// Data Controller
var budgetController = (function()
{
    // Data controller code

})();


// UI Controller
var UIController = (function() 
{
    var DOMstrings = 
    {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        addBtn: '.add__btn'
    }

    return {
        getInput: function()
        {
            return {
            type: document.querySelector(DOMstrings.inputType).value, //income or expense
            description: document.querySelector(DOMstrings.inputDescription).value,
            value: document.querySelector(DOMstrings.inputValue).value
            }
        },

        getDOMstrings: function()
        {
            return DOMstrings;
        }
    };
})();

//Main controller - connects the UI and Data modules
//How? They are passed in as parameters
var controller = (function(budgetCtrl, UICtrl)
{
    var setupEventListeners = function()
    {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.addBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event)
        {
            if (event.keyCode === 13 || event.which === 13) //which property - older browsers
            {
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function()
    {
        // 1. Get the input data from the field
        var input = UICtrl.getInput();
        console.log(input);
        // 2. Add item to the budget controller
        // 3.Add item to the UI
        // 4. Calculate the budget
        // 5. Display budget on UI
    };

    return {
        init: function() 
        {
            console.log('Application has started.');
            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();