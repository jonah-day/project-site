

let menuButton = document.querySelector(".main-dropdown");
let logoLayer = document.querySelector(".logo-container");
let isClicked = false;

function clickDropMenu() {
    if (isClicked) {
      document.documentElement.style.setProperty("--dropdown-box-width", "54px");
      logoLayer.style.visibility = "visible";
      logoLayer.style.opacity = "1";
      isClicked = false;
    }
    else {
      document.documentElement.style.setProperty("--dropdown-box-width", "100%");
      logoLayer.style.opacity = "0";
      logoLayer.style.visibility = "hidden";
      isClicked = true;
    }
}

menuButton.addEventListener("click", clickDropMenu);