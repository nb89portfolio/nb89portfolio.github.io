class User {
    #uid;

    constructor(){
        this.#uid = "visitor";
    }

    getUID(){
        return this.#uid;
    }
}

class Header {
    #header;

    constructor(){
        this.#header = document.createElement("header");

        this.home = document.createElement("button");
        this.home.setAttribute("title", "Home");
        this.home.setAttribute("class", "hn-btn");

        this.homeImg = document.createElement("img");
        this.homeImg.setAttribute("src", "../img/logo/logo.png");
        this.homeImg.setAttribute("alt", "Logo");

        this.homeSpan = document.createElement("span");
        this.homeSpan.innerHTML = "NB89 | Portfolio";

        this.home.appendChild(this.homeImg);
        this.home.appendChild(this.homeSpan);

        this.nav = document.createElement("nav");
        this.nav.appendChild(this.home);

        this.links = document.createElement("ul");

        this.seedLinks = ["News", "Tutorials", "Projects", "Account"];
        this.seedImgs = ["announcement", "assignment", "work", "account_circle"];

        for (let index = 0; index < this.seedLinks.length; index++) {

            this.currentImg = document.createElement("span");
            this.currentImg.setAttribute("class", "material-icons");
            this.currentImg.innerHTML = this.seedImgs[index];

            this.currentText = document.createElement("span");
            this.currentText.setAttribute("class", "hm-ls-btn");
            this.currentText.innerHTML = this.seedLinks[index];

            this.currentButton = document.createElement("button");
            this.currentButton.setAttribute("title", this.seedLinks[index]);
            this.currentButton.setAttribute("class", "hm-btn");
            this.currentButton.appendChild(this.currentImg);
            this.currentButton.appendChild(this.currentText);

            this.currentLink = document.createElement("li");
            this.currentLink.appendChild(this.currentButton);

            this.links.appendChild(this.currentLink);
        }

        this.nav.appendChild(this.links);

        this.#header.appendChild(this.nav);

        document.body.appendChild(this.#header);
    }
}

class Main {
    #main;

    constructor(){
        this.#main = document.createElement("main");
        document.body.appendChild(this.#main);
    }
}

class Footer {
    #footer;

    constructor(){
        this.parent = document.createElement("span");
        this.parent.innerHTML = "NB89 | Portfolio | Navraj Bains (1989)";
        
        this.#footer = document.createElement("footer");
        this.#footer.appendChild(this.parent);

        document.body.appendChild(this.#footer);
    }
}

let user = new User;
let header = new Header;
let main = new Main;
let footer = new Footer;

console.log();