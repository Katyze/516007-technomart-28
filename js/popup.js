var link = document.querySelector(".popup-button");
var popup = document.querySelector(".order-form");
var popupClose = document.querySelector(".order-form .close-button");
var form = document.querySelector(".order-form form");
var username = document.querySelector(".order-form [name=name]");
var email = document.querySelector(".order-form [name=email]");
var order = document.querySelector(".order-form [name=order]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("username");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    username.value = storage;
    email.focus();
  } else {
    username.focus();
  }
});

popupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!username.value || !email.value || !order.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("username", username.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
