const links = document.querySelectorAll('[href="#"'),
      modal = document.querySelector(".modal-background"),
      closeIcons = document.querySelectorAll(".close"),
      registrationOptions = document.querySelectorAll(".registration-option");

const showModal = function(textTop, textBottom) {
    modal.style.left = 0;

    let modalTextBoxTop = modal.querySelector(".modal-text-top");
    let modalTextBoxBottom = modal.querySelector(".modal-text-bottom");
    modalTextBoxTop.textContent = textTop;
    modalTextBoxBottom.textContent = textBottom;
};

const closeModal = function(event) {
    if ((event.target.classList.contains('close')) || (event.target.classList.contains('modal-background'))) {
        modal.style.left = "-100%";
    }
};

const demoTextTop = "This part of the interface is for demonstration purposes only.",
      demoTextBottom = "Better try to change the currency!",
      exchangeTextTop = "Your money has been exchanged.",
      exchangeTextBottom = "Thank you for using our service!";

links.forEach(link => link.addEventListener("click", () => showModal(demoTextTop, demoTextBottom)));
registrationOptions.forEach(option => option.addEventListener("click", () => showModal(demoTextTop, demoTextBottom)));
closeIcons.forEach(item => item.addEventListener("click", closeModal));
modal.addEventListener("click", closeModal);
