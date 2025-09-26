document.getElementById("transfer-btn").addEventListener("click", function (event) {
    event.preventDefault();

    // get input values
    const pin = document.getElementById("transfer-pin").value;
    const convertedPin = parseInt(pin);

    const amount = document.getElementById("transfer-amount").value;
    const convertedAmount = parseFloat(amount);

    const mainBalance = parseFloat(document.getElementById("main-balance").innerText.trim());

    if (isNaN(convertedAmount) || convertedAmount <= 0) {
        alert("⚠️ Please enter a valid amount.");
        return;
    }

    if (convertedPin === 1234) {
        if (convertedAmount <= mainBalance) {
            const newBalance = mainBalance - convertedAmount;
            document.getElementById("main-balance").innerText = newBalance.toFixed(2);
            alert("✅ Transfer successful!");
            // reset input fields
            document.getElementById("transfer-amount").value = "";
            document.getElementById("transfer-pin").value = "";
        } else {
            alert("❌ Not enough balance.");
        }
    } else {
        alert("❌ Wrong PIN!");
    }
});
