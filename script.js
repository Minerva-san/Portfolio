const projectContainer =
document.getElementById("projectContainer");

document
.getElementById("scrollLeft")
.addEventListener("click", () => {

    projectContainer.scrollBy({
        left: -340,
        behavior: "smooth"
    });

});

document
.getElementById("scrollRight")
.addEventListener("click", () => {

    projectContainer.scrollBy({
        left: 340,
        behavior: "smooth"
    });

});