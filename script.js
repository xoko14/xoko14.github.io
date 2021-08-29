class Section {
    constructor(id) {
        this.element = document.getElementById(id);
        this.link = document.getElementById(id + "Link");
    }

    show() {
        this.element.style.display = "block";
        if(this.element.id != "main") this.link.classList.add("selected");
    }

    hide() {
        this.element.style.display = "none";
        if(this.element.id != "main") this.link.classList.remove("selected");
    }
}

var sections = [new Section("main"), new Section("about"), new Section("software"), new Section("hobbies"), new Section("links")];
var discordElm = document.getElementById("discord-user");
var discShown = false;

function change(id) {
    sections.forEach(section => {
        if (section.element.id == id) section.show();
        else section.hide();
    });
}

function toggleDiscord() {
    if (discShown) {
        discordElm.style.visibility = "hidden";
        discordElm.style.opacity = 0;
        discShown = false;
    }
    else {
        discordElm.style.visibility = "visible";
        discordElm.style.opacity = 1;
        discShown = true;
    }
}