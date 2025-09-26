 document.getElementById("cashout").style.display = "none";
 document.getElementById("transfer").style.display = "none";
 document.getElementById("bonus").style.display = "none";

document.getElementById("add-money-box").addEventListener("click",function(){
    document.getElementById("cashout").style.display = "none";
    document.getElementById("addmoney").style.display = "block";
    document.getElementById("transfer").style.display = "none";
    document.getElementById("bonus").style.display = "none";
})
document.getElementById("cash-out-box").addEventListener("click",function(){
    document.getElementById("cashout").style.display = "block";
    document.getElementById("addmoney").style.display = "none";
    document.getElementById("transfer").style.display = "none";
    document.getElementById("bonus").style.display = "none";
})
document.getElementById("transfer-btn-box").addEventListener("click",function(){
    document.getElementById("cashout").style.display = "none";
    document.getElementById("addmoney").style.display = "none";
    document.getElementById("transfer").style.display = "block";
    document.getElementById("bonus").style.display = "none";
})
document.getElementById("bonus-btn-box").addEventListener("click",function(){
    document.getElementById("cashout").style.display = "none";
    document.getElementById("addmoney").style.display = "none";
    document.getElementById("transfer").style.display = "none";
    document.getElementById("bonus").style.display = "block";
})

