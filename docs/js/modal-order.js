var btn_showModalOrder = document.querySelector(".product__btn-order .btn");
var winModalOrder = document.querySelector(".modal-order");
var btn_orderModalOrder = document.querySelector(".modal-order .btn--modal");

winModalOrder.classList.remove("modal-order--opened");

btn_showModalOrder.addEventListener("click", function(event){
  winModalOrder.classList.add("modal-order--opened");
});

btn_orderModalOrder.addEventListener("click", function(event) {
  winModalOrder.classList.remove("modal-order--opened");
});
