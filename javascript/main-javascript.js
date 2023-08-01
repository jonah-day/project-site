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







//Scroll shadow effect (for mobile and tablet):

let headerMax = 7;
let headerMin = -6;

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
    console.log("HS: " + headerSway + "MS: " + mainSway);
}

function totalMovement(max, min) {
    return (min - max) * -1;
}

window.addEventListener("scroll", shadowScroll);







//REVAMP SHADOW

function makeShadows() {
    //Comb through doc to find all "hs/ms"
}
function runShadows() {
    //Runs during compilation and changes the shadows efficiently
}

function changeAllZ() {
    
}

function findSubType(clone) {

    let elements = clone.querySelectorAll('.practice-box, .shadow-box, .shadow-box-inset, .shadow-text');
    //GET RID OF PRACTICE ONE^^^^^^^^

    let classList = [];

    for (let each of elements) {
        classList.push(each.className);
    }

    let allClasses = [];

    for (let each of classList) {
        allClasses.push(...each.split('  '));
    }
    
    let filter = new Set();

    for (let each of allClasses) {

        if (each === 'practice-box'|| 
            each === 'shadow-box'|| 
            each === 'shadow-box-inset'|| 
            each === 'shadow-text') {

            filter.add(each);
        }

    }

    //  THROW ERROR IMPLEMENTATION
    // if (filter.size > 1) {
    //     alert('throw error');
    // }

    let subType = null;
    
    filter.forEach(value => subType = value);
    
    return subType;
}



let button = document.getElementById("theButton");
button.addEventListener("click", buttonHandler);

function buttonHandler() {

    let element = document.querySelector('.header-practice');
    let type = headerMob;

    applyShadow(element, type);
}

function applyShadow(element, type){

    //CLONING

    let contElem = element;

    let clone = contElem.cloneNode(true);

    clone.style.zIndex = window.getComputedStyle(contElem).zIndex -1;

    //NEXT NEED TO CHANGE ALL Z INDEXES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`

    contElem.insertAdjacentElement('afterend', clone);

    //FINDING RELEVANT CHILDREN

    let subType = findSubType(clone);

    let subElems = clone.querySelectorAll('.' + `${subType}`);


    switch(subType) {
        case 'practice-box':

            let horiz = headerMob.horizMax;
            let vert = headerMob.vertMax;
            let blur = headerMob.blur;
            let color = headerMob.color;
            
            for (let each of subElems) {
                each.style.opacity = '0';
                each.style.boxShadow = `${horiz} ${vert} ${blur} ${color}`;
            }
            break;
    }
    



}







//TYPE OBJECTS

let headerMob = {
    horizMax: 5,
    horizMin: -5,
    vertMax: 7,
    verMin: -6,
    blur: 4,
    color: 'hsl(0, 0%, 41%)',

};




let mainMob = {};

let headerDesk = {};
let mainDesk = {};