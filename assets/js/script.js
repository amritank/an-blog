const submitEl = document.querySelector("#submitButton");
const usernameEl = document.querySelector("#username");
const titleEl = document.querySelector("#title");
const contentEl = document.querySelector("#content")
const pEl = document.querySelector("#error-msg");
const formEls = document.querySelectorAll('.form-data-elements');
const bodyEl = document.querySelector('body');


// <---- creating the object to store blog entries ---->
let blogEntries = [];


// <------ Callback definitions ----->
// init function to load entries from local storage and then append to it.
function loadEntries() {
    const entries = loadFromLocalStorage();
    if (entries) {
        blogEntries = entries;
    }
}

// Helper method to store blog entries to localstorage
function storeToLocalStorage() {
    const blog = {
        username: usernameEl.value,
        title: title.value,
        content: contentEl.value
    }
    console.log("Created blog entry: ");
    console.log(blog);

    console.log(blogEntries);

    console.log("Push blog entry to the array");
    blogEntries.push(blog);

    console.log("Blog entries so far");
    console.log(blogEntries);

    console.log("Store blog entries to localstorage");
    localStorage.setItem("blog", JSON.stringify(blogEntries));
}

// helper method to reset input box fields.
function resetFields() {
    usernameEl.textContent = "";
    titleEl.textContent = "";
    contentEl.textContent = "";
}

// Function invoked on form submission.
function submitForm(event) {
    console.log("Turn off form refresh");
    event.preventDefault();

    console.log("Verify form fields are not empty");
    if (usernameEl.value === "" ||
        titleEl.value === "" ||
        contentEl.value === "") {
        pEl.textContent = "Please fill in all fields in the form";
        pEl.setAttribute("class", "show-error-msg");
        return;
    }
    storeToLocalStorage();

    window.location.href = "./blog.html";
}

// Function invoked when form is clicked because we want to clear the error msg
// if it is displayed from previous attempts.
function clearErrorMessage() {
    pEl.textContent = "";
    pEl.setAttribute("class", "hidden");
    // resetFields(); TODO: check later why this does not reset the text on the fields 
}


// <------ Attach all event listeners ----->
// Loop thru each input box in the form and if the user click on any of the input boxes clear the 
// error message.
for (const ele of formEls) {
    ele.addEventListener('click', clearErrorMessage)
}

// Submit form event listener.
// TODO: how about trying submit event from form eleemnt
submitEl.addEventListener('click', submitForm);


// method called when page loads for first time:
window.onload = loadEntries;