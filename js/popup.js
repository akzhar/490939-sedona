var btn = document.querySelector(".button-brown");
var form = document.querySelector(".search-form");
var datefield1 = form.querySelector("[name=search-form-sets-in]");
var datefield2 = form.querySelector("[name=search-form-sets-out]");
var btnSubmit = form.querySelector(".button");

btn.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.toggle("modal-show");
  datefield1.focus();
  if (form.classList.contains("modal-error")) {
    form.classList.remove("modal-error");
  }
});

// form.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   form.classList.remove("modal-error");
//   if (!datefield1.value || !datefield2.value) {
//     evt.preventDefault();
//     form.classList.add("modal-error");
//     if (!datefield1.value) {
//       datefield1.focus();
//       } else {
//       datefield2.focus();
//       }
//   }
// });

btnSubmit.onClick = function(evt) {
  evt.preventDefault();
  form.classList.remove("modal-error");
  if (!datefield1.value || !datefield2.value) {
    evt.preventDefault();
    form.classList.add("modal-error");
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
