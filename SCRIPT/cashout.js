document.getElementById("cash-out-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const pin = document.getElementById("cashout-pin").value;
    const convertedPin = parseInt(pin);

    const amount = document.getElementById("cashout-amount").value;
    const convertedAmount = parseFloat(amount);

    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainbalance = parseFloat(mainBalance);

    if (convertedPin === 1234) {
        if (convertedAmount > 0 && convertedAmount <= convertedMainbalance) {
            const newBalance = convertedMainbalance - convertedAmount;
            document.getElementById("main-balance").innerText = newBalance;
        } else {
            alert("Invalid amount! Balance not enough.");
        }
    } else {
        alert("❌ Wrong PIN!");
    }
});
