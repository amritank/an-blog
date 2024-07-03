const toggleEl = document.querySelector("#togglebutton");

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
        // bodyEl.setAttribute("background-color", "gray");
        // bodyEl.setAttribute("color", "white");
        // bodyEl.setAttribute("data-mode", "dark");
        document.body.classList.add("dark-mode");
        // document.body.style.backgroundColor = "gray";
        // document.body.style.color = "white";
        toggleEl.dataset.mode = "dark";
    } else {
        // document.body.style.backgroundColor = "white";
        // document.body.style.color = "black";
        // document.body.classList.add("light-mode");
        document.body.setAttribute('class', '.light-mode');
        toggleEl.dataset.mode = "light";
    }
}




// <------ Attach all event listeners ----->

//light/dark mode button toggle event handler
toggleEl.addEventListener('click', toggleMode);