class User {
    #uid;

    constructor(){
        this.#uid = "visitor";
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

    setButtonEvents(main){
        this.list = this.#header.getElementsByTagName("button");

        for(let index = 0; index < this.list.length; index++){
            switch(index) {
                case 0:
                    this.list[index].addEventListener("click", main.setDestruction);
                    this.list[index].addEventListener("click", main.setNews);
                    break;
                case 1:
                    this.list[index].addEventListener("click", main.setDestruction);
                    this.list[index].addEventListener("click", main.setNews);
                    break;
                case 2:
                    this.list[index].addEventListener("click", main.setDestruction);
                    this.list[index].addEventListener("click", main.setNews);
                    break;
                case 3:
                    this.list[index].addEventListener("click", main.setDestruction);
                    this.list[index].addEventListener("click", main.setNews);
                    break;
                case 4:
                    this.list[index].addEventListener("click", main.setDestruction);
                    this.list[index].addEventListener("click", main.setNews);
                    break;
            }
        }
    }
}

class Main {
    #main;
    #news;
    #tutorials;
    #projects;
    #account;

    constructor(){
        this.#main = document.createElement("main"); 

        this.#news = [["Title1", "Date1", "Content1", false], ["Title2", "Date2", "Content2", true], ["Title3", "Date3", "Content3", false]];
        this.#tutorials = [["TTitle1", "Date1", "Content1", false], ["TTitle2", "Date2", "Content2", true], ["TTitle3", "Date3", "Content3", false]];
        this.#projects = [["PTitle1", "Date1", "Content1", false], ["PTitle2", "Date2", "Content2", true], ["PTitle3", "Date3", "Content3", false]];
    
        this.setNews();
    }

    setDestruction(){
        this.#main.innerHTML = "";
    }

    setNews(){
        this.#news.forEach(element => {
            this.title = document.createElement("h1");
            this.title.innerHTML = element[0];

            this.date = document.createElement("h2");
            this.date.innerHTML = element[1];

            this.content = document.createElement("p");
            this.content.innerHTML = element[2];

            if(element[3]){
                this.button = document.createElement("button");
                this.button.innerHTML = "Go To!";
            }

            this.article = document.createElement("article");
            this.article.appendChild(this.title);
            this.article.appendChild(this.date);
            this.article.appendChild(this.content);

            if(element[3]){
                this.article.appendChild(this.button);
            }
            this.#main.appendChild(this.article);
        });

        document.body.appendChild(this.#main);        
    }

    setTutorials(){
        this.#tutorials.forEach(element => {
            this.title = document.createElement("h1");
            this.title.innerHTML = element[0];

            this.date = document.createElement("h2");
            this.date.innerHTML = element[1];

            this.content = document.createElement("p");
            this.content.innerHTML = element[2];

            if(element[3]){
                this.button = document.createElement("button");
                this.button.innerHTML = "Go To!";
            }

            this.article = document.createElement("article");
            this.article.appendChild(this.title);
            this.article.appendChild(this.date);
            this.article.appendChild(this.content);

            if(element[3]){
                this.article.appendChild(this.button);
            }
            this.#main.appendChild(this.article);
        });

        document.body.appendChild(this.#main);  
    }

    setProjects(){
        this.#projects.forEach(element => {
            this.title = document.createElement("h1");
            this.title.innerHTML = element[0];

            this.date = document.createElement("h2");
            this.date.innerHTML = element[1];

            this.content = document.createElement("p");
            this.content.innerHTML = element[2];

            if(element[3]){
                this.button = document.createElement("button");
                this.button.innerHTML = "Go To!";
            }

            this.article = document.createElement("article");
            this.article.appendChild(this.title);
            this.article.appendChild(this.date);
            this.article.appendChild(this.content);

            if(element[3]){
                this.article.appendChild(this.button);
            }
            this.#main.appendChild(this.article);
        });

        document.body.appendChild(this.#main);  
    }

    setAccount(){

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

header.setButtonEvents(main);

console.log();