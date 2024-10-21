document.addEventListener("DOMContentLoaded", function () {
  let isSideMenuShown = false;

  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-button");
  const sideMenu = document.getElementById("side-menu");
  const nearMe = document.getElementById("search-near-container");

  //toggle side menu hide or shown
  menuIcon.addEventListener("click", function (e) {
    isSideMenuShown = !isSideMenuShown;

    sideMenu.style.display = isSideMenuShown ? "flex" : "none";
    menuIcon.src = isSideMenuShown
      ? "./assets/icons/close.svg"
      : "./assets/icons/menu.svg";
    nearMe.style.top = isSideMenuShown ? "1vh" : "10vh";
  });

  closeIcon.addEventListener("click", function (e) {
    isSideMenuShown = false;

    sideMenu.style.display = isSideMenuShown ? "flex" : "none";
    menuIcon.src = isSideMenuShown
      ? "./assets/icons/close.svg"
      : "./assets/icons/menu.svg";

    nearMe.style.top = "10vh";
  });
});
