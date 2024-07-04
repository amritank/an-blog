const backButtonEl = document.querySelector("#backSubmitButton");
const mainEl = document.querySelector('#main-container')


// <----- Callback definitions ---->
function listBlogPostsFromLocalStorage() {
    const blogEntries = loadFromLocalStorage();
    if (blogEntries) {
        console.log(blogEntries);
        blogEntries.forEach((post) => {
            // fetch the variables
            const uname = post.username;
            const title = post.title;
            const content = post.content;

            console.log(`Printing blog entry with title: ${title} from username: ${uname}`);

            // create the div container
            const divEl = document.createElement("div");
            divEl.classList.add('blog-post');
            const h4El = document.createElement("h4");
            h4El.classList.add('post-sections');
            h4El.textContent = title;
            const hrEl = document.createElement('hr');
            const pContentEl = document.createElement("p");
            pContentEl.classList.add('post-sections', 'post-content');
            pContentEl.textContent = content;
            const pUnameEl = document.createElement("p");
            pUnameEl.classList.add('post-author');
            pUnameEl.textContent = "Posted by: " + uname;
            divEl.append(h4El, hrEl, pContentEl, pUnameEl);
            mainEl.appendChild(divEl);
        });
    }

}

function navigateToLandingPage() {
    window.location.href = "./index.html";
}


backButtonEl.addEventListener("click", navigateToLandingPage);

window.onload = listBlogPostsFromLocalStorage;