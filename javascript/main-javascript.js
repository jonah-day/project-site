//Header menu button toggle:

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



//Scroll shadow effect:

let headerMax = 7;
let headerMin = -7;

let mainMax = 4;
let mainMin = -4;

function shadowScroll(){
    let currentTop = window.scrollY;
    let pageHeight = document.documentElement.scrollHeight;
    let viewHeight = window.innerHeight;
    
    let scrollRatio = currentTop / (pageHeight - viewHeight);
    
    headerSway = headerMax - (totalMovement(headerMax, headerMin) * scrollRatio);

    mainSway = mainMax - (totalMovement(mainMax, mainMin) * scrollRatio);


    document.documentElement.style.setProperty("--header-sway", `${headerSway}px`);
    document.documentElement.style.setProperty("--main-sway", `${mainSway}px`);
}

function totalMovement(max, min) {
    return (min - max) * -1;
}

window.addEventListener("scroll", shadowScroll);