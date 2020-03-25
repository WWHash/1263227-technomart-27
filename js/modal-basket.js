let buttonBuy = document.querySelector('.buy');
let modalBasket = document.querySelector('.modal-basket');
let closeBasket = document.querySelector('.close-basket');

buttonBuy.onclick = function () {
    modalBasket.classList.remove("visually-hidden");
};

closeBasket.onclick = function () {
    modalBasket.classList.add("visually-hidden");
};