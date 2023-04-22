

let menuButton = document.querySelector(".main-dropdown");
let isClicked = false;

function clickDropMenu() {
    if (isClicked) {
      document.documentElement.style.setProperty("--dropdown-box-width", "54px");
      isClicked = false;
    }
    else {
      document.documentElement.style.setProperty("--dropdown-box-width", "100%");
      isClicked = true;
    }
}

menuButton.addEventListener("click", clickDropMenu);