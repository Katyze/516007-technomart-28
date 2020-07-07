var bookmarkButton = document.querySelectorAll(".green-button");
var cartPopup = document.querySelector(".success-window");
var cartClose = document.querySelector(".success-window .close-button");
var continueButton = document.querySelector(".success-window .another-close");

for (var i = 0; i < bookmarkButton.length; i++) {
  bookmarkButton[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
  });

  cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show");
  });

  continueButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
    }
  }
});

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
    popup.classList.remove("modal-error");
    popup.offsetWidth;
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

var mapOpen = document.querySelector(".open-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelector(".modal-map .close-button");

mapOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});
