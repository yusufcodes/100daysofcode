
// Data Controller
var budgetController = (function()
{
    // Expense and Income objects
    var Expense = function(id, description, value)
    {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value)
    {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    // 'Data' has 2 properties, allItems and totals.
    // allItems: contains 2 arrays, expense and income.
    // totals: contains 2 values, expense and income.
    var data = 
    {
        allItems:
        {
            expense: [],
            income: []
        },

        totals:
        {
            expense: 0,
            income: 0
        }
    };

    // Global functions returned here
    return {

        // Used to add a new item
        createExpense: function(type, desc, val)
        {
            var item, id;

            if (data.allItems[type].length > 0)
            {
                // Grabs the 'id' of the last element and adds 1 to it
                id = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }
            else
            {
                // When the arrays are empty, first item must be a 0.
                id = 0;
            }
            
            //Create new item based on income or expense type
            if (type === 'expense')
            {
                item = new Expense(id, desc, val);
            }
            else
            {
                item = new Income(id, desc, val);
            }

            // Push to the data structure
            data.allItems[type].push(item);

            // Return the item - is available by the controller
            return item;
        },

        // Testing purposes: seeing our data structure
        testing: function()
        {
            console.log(data);
        }
    };
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
        var input, newItem;
        // 1. Get the input data from the field
        input = UICtrl.getInput();

        // 2. Add item to the budget controller
        //Pass in: input.type, input.description, input.value
        newItem = budgetCtrl.createExpense(input.type, input.description, input.value);

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