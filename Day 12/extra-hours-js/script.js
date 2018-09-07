// 1. User enters a value into the input field
// 2. User clicks on 'Calculate Pay'

// 1. Add event listener to the button

let payBtn = document.getElementById('pay-btn');

payBtn.addEventListener('click', function()
{
    // 1. Retrieve values from each input field
    // 2. Total the numbers up
    let totalHours = 0;
    for (let i=0; i<4; i++)
    {
        currentWeek = parseFloat(document.getElementById('wk-'+(i+1)).value);
        totalHours += currentWeek;
    }
    // 3. Multiply this by the base pay (8.85)
    let totalPay = totalHours*8.85;
    console.log('Total hours: '+totalHours);
    console.log('Total pay: '+totalPay);
    
    // 4. Display value to the screen
    let htmlOutput = '<p>The total pay is: £'+totalPay.toFixed(2)+'</p>';
    document.body.insertAdjacentHTML('beforeend', htmlOutput);
});