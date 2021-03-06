
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

    var calculateTotal = function(type)
    {
        var sum = 0;
        data.allItems[type].forEach(function(cur)
        {
            sum += cur.value;

        });

        data.totals[type] = sum;
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
        },

        budget: 0,
        percentage: -1
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

        calculateBudget: function()
        {
            // 1.Calculate the totals
            calculateTotal('expense');
            calculateTotal('income');

            // 2. Calculate the budget: income - expense
            data.budget = data.totals.income - data.totals.expense;

            // 3. Calculate % of income that is spent.

            data.percentage = (data.totals.expense/data.totals.income) * 100;
            /* OLD CODE
            // 2. Calculate the budget: income - expense
            var budget = data.totals.income - data.totals.expense;

            // 3. Calculate % of income that is spent.
            var percentage = (data.totals.expense/data.totals.income)*100;

            console.log("The budget is: "+budget);
            console.log("The percentage spent is: "+percentage);
            */
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
            value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            }
        },

        getDOMstrings: function()
        {
            return DOMstrings;
        },

        addListItem: function(item, type)
        {
            var html; // Will contain the HTML string to insert
            var classSelector; // Will have the expense or income class to add item to 

            // Storing object properties into variables for easy retrieval
            var id = item.id;
            var desc = item.description;
            var value = item.value;

            // Setting HTML depending on the type that has been added, and selecting the corresponding class to add the item to
            if (type === 'income')
            {
                html = '<div class="item clearfix" id="income-"'+id+'><div class="item__description">'+desc+'</div><div class="right clearfix"><div class="item__value">+ '+value+'</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                classSelector = '.income__list'
            }

            else if (type === 'expense')
            {
                html = '<div class="item clearfix" id="expense-0"'+id+'><div class="item__description">'+desc+'</div><div class="right clearfix"><div class="item__value">- '+value+'</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                classSelector = '.expenses__list';
            }

            // Adding the HTML to the list
            document.querySelector(classSelector).insertAdjacentHTML('beforeend', html);
        },

        clearFields: function()
        {
            // This will retrieve all the elements with the specified classes, .inputDescription and .inputValue ( these are stated in the DOMStrings object )
            var fields = document.querySelectorAll(DOMstrings.inputDescription +', '+DOMstrings.inputValue);
            
            var fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(current, index, array) 
            {
                current.value = "";
            });

            fieldsArr[0].focus();

            // This returns a list, which can be 'tricked' into being treated as an Array
            // Use of method: Array.slice() - returns a copy of the array it is used on.
            //SOLUTION:
            /*
            1. Use the 'call' function
            2. Pass in the fields list
            3. This sets the 'this' variable to fields
            
            // Slice is stored in the prototype of Array
            // Array.prototype.slice <- a function, which we can use the call method on
            // Array.prototype.slice.call(fields) <- returns an Array, even though fields is a list
            */
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


    var updateBudget = function()
    {
        // 1. Calculate the budget

        //WHERE: budgetController
        // -Get the current 'income' and 'expense' value
        // -Do 'income - expense' which calculates the budget
        budgetCtrl.calculateBudget();

        // 2. Return the budget
        
        // 3. Display budget on UI
    }

    var ctrlAddItem = function()
    {
        var input, newItem;
        // 1. Get the input data from the field
        input = UICtrl.getInput();

        if ( (input.description !== "") && (!isNaN(input.value)) && (input.value > 0))
        {
            // 2. Add item to the budget controller
            newItem = budgetCtrl.createExpense(input.type, input.description, input.value);

            // 3.Add item to the UI
            UICtrl.addListItem(input, input.type);
            console.log(newItem);

            // 4. Clear the fields
            UICtrl.clearFields();

            // 5. Calculate and update the budget
            updateBudget();
        }


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