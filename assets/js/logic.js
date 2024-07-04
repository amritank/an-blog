const toggleEl = document.querySelector("#togglebutton");
// const backButtonEl = document.querySelector("#backSubmitButton");

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


function toggleMode() {
    const currentMode = toggleEl.getAttribute("data-mode");
    console.log("current mode: " + currentMode);
    if (currentMode == "light") {
        console.log("setting dark-mode");
        document.body.setAttribute('class', 'dark-mode');
        toggleEl.setAttribute('class', 'dark-mode-togglebutton');
        toggleEl.dataset.mode = "dark";
    } else {
        document.body.setAttribute('class', 'light-mode');
        toggleEl.setAttribute('class', 'light-mode-togglebutton');
        toggleEl.dataset.mode = "light";
    }
}


// <------ Attach all event listeners ----->

//light/dark mode button toggle event handler
toggleEl.addEventListener('click', toggleMode);