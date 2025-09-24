document.getElementById("login-btn").addEventListener("click", function(event){
// to prevent clear the form or redirect
    event.preventDefault();

    const accountNumber = document.getElementById("account-number").value;
  
    const pin = document.getElementById("account-pin").value;
    if(accountNumber.length == 11){
        if(pin == 1234){
            window.location.href = "./main.html"
        }
        else{
        alert("Pin is not valid")
    }
    }

    else{
        alert("Acount is not valid")
    }

})