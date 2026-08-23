document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  var form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector("button");
      var original = btn.textContent;
      btn.textContent = "Message sent!";
      form.reset();
      setTimeout(function () {
        btn.textContent = original;
      }, 2500);
    });
  }

  var year = document.querySelector(".footer-bottom [data-year]");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
