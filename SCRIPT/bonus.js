document.getElementById("bonus").addEventListener("click", function (event) {
    event.preventDefault();

    const coupon = document.getElementById("coupon-code").value.trim();
    const mainBalanceElement = document.getElementById("main-balance");
    let balance = parseFloat(mainBalanceElement.innerText);

    
    const coupons = {
        "BONUS100": 100,
        "BONUS500": 500,
        "NEWUSER50": 50
    };
     if (coupon === "") {
        
        return;
    }
    if (coupons[coupon]) {
        balance += coupons[coupon];
        mainBalanceElement.innerText = balance.toFixed(2);
        alert(`🎉 Congrats! ${coupons[coupon]} added to your balance.`);
        document.getElementById("coupon-code").value = "";
    } else {
        alert("❌");
    }
});
