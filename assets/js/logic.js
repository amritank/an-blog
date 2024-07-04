//Common functionality between both pages.

const toggleEl = document.querySelector("#togglebutton");
const headerEl = document.querySelector("header");


// <------ Callback definitions ----->
// init
function loadFromLocalStorage() {
    const storedVal = localStorage.getItem("blog");
    let entries;
    if (storedVal) {
        entries = JSON.parse(storedVal);
    }
    return entries;
}

// Callback function when light/dark mode toggle button is clicked.
function toggleMode() {
    const currentMode = toggleEl.getAttribute("data-mode");
    console.log("current mode: " + currentMode);
    if (currentMode == "light") {
        console.log("setting dark-mode");
        document.body.setAttribute('class', 'dark-mode');
        toggleEl.setAttribute('class', 'dark-mode-togglebutton');
        headerEl.setAttribute("class", "dark-mode-header");
        toggleEl.dataset.mode = "dark";
    } else {
        document.body.setAttribute('class', 'light-mode');
        toggleEl.setAttribute('class', 'light-mode-togglebutton');
        headerEl.setAttribute("class", "light-mode-header");
        toggleEl.dataset.mode = "light";
    }
}


// <------ Attach all event listeners ----->

//light/dark mode button toggle event handler
toggleEl.addEventListener('click', toggleMode);