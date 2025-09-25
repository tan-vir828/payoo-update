document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);

    const pin = document.getElementById("pin").value;

    
    const mainBalanceEl = document.querySelector(".main-balance");
    const convertedMainbalance = parseFloat(mainBalanceEl.innerText);

    const convertedPin = parseInt(pin);

    if (convertedPin === 1234) {
        const sum = convertedMainbalance + convertedAmount;
      
        mainBalanceEl.innerText = sum;
    } else {
        alert("pin error")
    }
});
