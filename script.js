var aboutElm = document.getElementById("about");
var softwareElm = document.getElementById("software");
var linksElm = document.getElementById("links");
var aboutLink = document.getElementById("aboutLink");
var softwareLink = document.getElementById("softwareLink");
var linksLink = document.getElementById("linksLink");

function change(id) {
    switch (id) {
        case "main":
            aboutElm.style.display = "none";
            softwareElm.style.display = "none";
            linksElm.style.display = "none";
            aboutLink.classList.remove("selected");
            softwareLink.classList.remove("selected");
            linksLink.classList.remove("selected");
            break;

        case "about":
            aboutElm.style.display = "block";
            softwareElm.style.display = "none";
            linksElm.style.display = "none";
            aboutLink.classList.add("selected");
            softwareLink.classList.remove("selected");
            linksLink.classList.remove("selected");
            break;

        case "software":
            aboutElm.style.display = "none";
            softwareElm.style.display = "block";
            linksElm.style.display = "none";
            aboutLink.classList.remove("selected");
            softwareLink.classList.add("selected");
            linksLink.classList.remove("selected");
            break;

        case "links":
            aboutElm.style.display = "none";
            softwareElm.style.display = "none";
            linksElm.style.display = "block";
            aboutLink.classList.remove("selected");
            softwareLink.classList.remove("selected");
            linksLink.classList.add("selected");
            break;
    }
}