const swapBtn = document.querySelector(".swap-btn");

const swapInputs = function(event) {
    event.preventDefault();
    let giveValue = giveInput.value,
        receiveValue = receiveInput.value,
        giveCurrencyValue = giveCurrency.value,
        receiveCurrencyValue = receiveCurrency.value;
        state.giveAmount = receiveValue;
        state.receiveAmount = giveValue;
        state.giveCurrency = receiveCurrencyValue;
        state.receiveCurrency = giveCurrencyValue;
        state.rate.giveName = receiveCurrencyValue;
        state.rate.receiveName = giveCurrencyValue;
        state.commission.commissionName = giveCurrencyValue;
    calcKoef();
    calcCommission();
    render();
};

swapBtn.addEventListener("click", swapInputs);