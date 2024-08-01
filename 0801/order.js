let check = document.querySelector('#order_form')
check.addEventListener("click", function() {
    if(check.checked == true) {
        document.querySelector("#shippingName").value 
        = document.getElementById('#billingName').value
        document.querySelector("#shippingTel").value 
        = document.getElementById('#billingTel').value
        document.querySelector("#shippingAddr").value 
        = document.getElementById('#billingAddr').value
    } else {
        document.querySelector('#shippingName').value = ""
        document.querySelector('#shippingTel').value = ""
        document.querySelector('#shippingAddr').value = ""
    }
})