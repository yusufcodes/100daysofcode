document.getElementById('addEl').addEventListener('click', function()
{
    //Creating new row of table
    let newRow = document.createElement('tr');

    //Creating table row data
    let rowCheckbox = document.createElement('td'); //checkbox
    let rowInput = document.createElement('td'); //text enter, and plus button

    rowCheckbox.innerHTML = '<input type="checkbox" name="" id="">';
    rowInput.innerHTML = '<input type="text"> <p id="addEl">+</p>';

    //Adding the table data to the table row
    newRow.appendChild(rowCheckbox);
    newRow.appendChild(rowInput);

    var tableBody = document.querySelector('tbody');

    //Addiing the table row to the body of the table (tbody)
    tableBody.appendChild(newRow);
});