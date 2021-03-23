function mainRouter(input){
    clearRoutes();

    switch(input){
        case 1:
            routeTutorials();
            break;
        case 2:
            routeProjects();
            break;
        case 3:
            routeClient();
            break;
        case 4:
            routeAccount();
            break;
        default:
            routeUpdates();
    }
}

function clearRoutes(){
    var subNav = document.getElementById("contentNav");
    var subSection = document.getElementById("contentSection");

    subNav.innerHTML = "";
    subSection.innerHTML = "";

    while(subNav.firstChild){
        subNav.removeChild(subNav.firstChild);
    }

    while(subSection.firstChild){
        subNav.removeChild(subNav.firstChild);
    }
}

function routeUpdates(){
    var subSection = document.getElementById("contentSection");

    subSection.innerHTML = "Build after others...";
}

function routeTutorials(){
    var sectionTitles = [
        "Hypertext Markup Language (HTML)",
        "Cascading Style Sheets (CSS)", 
        "JavaScript (JS)",
        "React",
        "Java",
        "PostgreSQL",
        "MySQL",
        "NoSQL",
        "Andiod",
        "IOS",
        "Angular"
    ];

    var subNav = document.getElementById("contentNav");
    var subSection = document.getElementById("contentSection");

    var newList = document.createElement("ul");

    sectionTitles.forEach(element => {
        var newLink = document.createElement("a");
        var newItem = document.createElement("li");

        newItem.innerHTML = element;

        newLink.appendChild(newItem);
        newList.appendChild(newLink);
    });

    subNav.appendChild(newList);
}

function routeProjects(){

}

function routeClient(){

}

function routeAccount(){

}

mainRouter();

