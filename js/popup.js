var btn = document.querySelector(".button-brown");
var form = document.querySelector(".search-form");
var datefield1 = form.querySelector("[name=search-form-sets-in]");
var datefield2 = form.querySelector("[name=search-form-sets-out]");
var btnSubmit = form.querySelector(".button");

form.classList.remove('modal-show');

btn.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.toggle("modal-show");
  datefield1.focus();
});

btnSubmit.onclick = function(evt) {
  form.classList.remove("modal-error");
  form.offsetWidth = form.offsetWidth;
  if (!datefield1.value || !datefield2.value) {
    evt.preventDefault();
    form.classList.add("modal-error");
    if (!datefield1.value) {
      datefield1.focus();
    } else {
      datefield2.focus();
    }
  }
};

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (form.classList.contains("modal-show")) {
      evt.preventDefault();
      form.classList.remove("modal-show");
    }
  }
});
