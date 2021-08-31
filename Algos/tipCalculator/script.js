var billAmountEl = document.querySelector("#billAmount");
var tipPercentgeEl = document.querySelector("#tipPercentage");
var numberGuestsEl = document.querySelector("#numberGuests");
var submitEl = document.querySelector("#submit");
var tipAmountEl = document.querySelector("#tip-amount");
var newTotalEl = document.querySelector("#new-total");
var perGuestEl = document.querySelector("#perGuest"); 

submitEl.addEventListener("click", function(event) {
    event.preventDefault();
    
    var totalTip = parseFloat(billAmountEl.value) * (parseFloat(tipPercentgeEl.value) * .01);
    var sum = parseFloat(billAmountEl.value) + totalTip;

    
    tipAmountEl.textContent = totalTip.toFixed(2);
    newTotalEl.textContent = sum.toFixed(2);

    var guestTotal = sum / +(numberGuestsEl.value);
    perGuestEl.textContent = guestTotal.toFixed(2);


  });

  