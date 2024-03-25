document.addEventListener("DOMContentLoaded", function () {
  var mobIcons = document.querySelectorAll("#mob-header .mob-icon");
  mobIcons.forEach(function (icon) {
    icon.addEventListener("click", function () {
      var mobSidebar = document.querySelector(".mob-sidebar");
      if (mobSidebar.classList.contains("active")) {
        mobSidebar.classList.remove("active");
      } else {
        mobSidebar.classList.add("active");
      }
    });
  });

  var navIcon = document.getElementById("navicon");
  navIcon.onclick = function () {
    this.classList.toggle("open");
  };

  var bBtns = document.querySelectorAll(".b-btn");
  bBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
});
