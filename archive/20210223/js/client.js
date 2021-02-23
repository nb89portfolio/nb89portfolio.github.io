class User {
    #uid;
    #header;
    #main;
    #footer;

    constructor(){
        // if presence token is valid then assign uid else assign visitor
        this.#uid = "visitor";
        this.#header = new Header(this.#uid);
        this.#main = new Content;
        this.#footer = new Footer;

        // if uid is vistor then load outer layout else load inner layout
        if(this.#uid === "visitor"){
            
        } else {

        }
    }
}

class Header {
    #header;
    #nav;

    constructor() {
        this.#header = document.getElementsByTagName("header");
        this.#nav = this.#header.getElementsByTagName("nav");
    }
}

class Content {
    #main;

    constructor() {
        this.#main = document.getElementsByTagName("main");
    }
}

class Footer {
    #footer;

    constructor() {
        this.#footer = document.getElementsByTagName("footer");        
    }
}

var user = new User;

