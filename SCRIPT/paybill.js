document.getElementById("paybill-btn").addEventListener("click", function(event) {
    event.preventDefault();

    const pin = document.getElementById("paybill-pin").value;
    const convertedPin = parseInt(pin);

    const amount = document.getElementById("paybill-amount").value;
    const convertedAmount = parseFloat(amount);

    const mainBalance = parseFloat(document.getElementById("main-balance").innerText);

    if (!pin || !amount) {
        alert("⚠️ Please enter all fields!");
        return;
    }

    if (convertedPin === 1234) {
        if (convertedAmount > 0 && convertedAmount <= mainBalance) {
            const newBalance = mainBalance - convertedAmount;
            document.getElementById("main-balance").innerText = newBalance.toFixed(2);
            alert("✅ Bill paid successfully!");
        } else {
            alert("⚠️ Invalid amount or insufficient balance!");
        }
    } else {
        alert("❌ Wrong PIN!");
    }
});
