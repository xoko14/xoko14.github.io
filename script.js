var aboutElm = document.getElementById("about");
var softwareElm = document.getElementById("software");
var linksElm = document.getElementById("links");
var mainElm = document.getElementById("main");
var hobbiesElm = document.getElementById("hobbies")
var aboutLink = document.getElementById("aboutLink");
var softwareLink = document.getElementById("softwareLink");
var linksLink = document.getElementById("linksLink");
var discordElm = document.getElementById("discord-user");
var hobbiesLink = document.getElementById("hobbiesLink");
var discShown = false;

function change(id) {
    switch (id) {
        case "main":
            mainElm.style.display = "block";
            aboutElm.style.display = "none";
            softwareElm.style.display = "none";
            linksElm.style.display = "none";
            hobbiesElm.style.display = "none";
            hobbiesLink.classList.remove("selected");
            aboutLink.classList.remove("selected");
            softwareLink.classList.remove("selected");
            linksLink.classList.remove("selected");
            break;

        case "about":
            mainElm.style.display = "none";
            aboutElm.style.display = "block";
            softwareElm.style.display = "none";
            linksElm.style.display = "none";
            hobbiesElm.style.display = "none";
            hobbiesLink.classList.remove("selected");
            aboutLink.classList.add("selected");
            softwareLink.classList.remove("selected");
            linksLink.classList.remove("selected");
            break;

        case "software":
            mainElm.style.display = "none";
            aboutElm.style.display = "none";
            softwareElm.style.display = "block";
            linksElm.style.display = "none";
            hobbiesElm.style.display = "none";
            hobbiesLink.classList.remove("selected");
            aboutLink.classList.remove("selected");
            softwareLink.classList.add("selected");
            linksLink.classList.remove("selected");
            break;

        case "hobbies":
            mainElm.style.display = "none";
            aboutElm.style.display = "none";
            softwareElm.style.display = "none";
            linksElm.style.display = "none";
            hobbiesElm.style.display = "block";
            hobbiesLink.classList.add("selected");
            aboutLink.classList.remove("selected");
            softwareLink.classList.remove("selected");
            linksLink.classList.remove("selected");
            break;

        case "links":
            mainElm.style.display = "none";
            aboutElm.style.display = "none";
            softwareElm.style.display = "none";
            linksElm.style.display = "block";
            hobbiesElm.style.display = "none";
            hobbiesLink.classList.remove("selected");
            aboutLink.classList.remove("selected");
            softwareLink.classList.remove("selected");
            linksLink.classList.add("selected");
            break;

        case "discord":
            if(discShown){
                discordElm.style.visibility = "hidden";
                discordElm.style.opacity = 0;
                discShown=false;
            }
            else{
                discordElm.style.visibility = "visible";
                discordElm.style.opacity = 1;
                discShown = true;
            }

    }
}